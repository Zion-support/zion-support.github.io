'use strict';
// Deterministic application tests with an in-memory DOM and no network.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(path.join(__dirname, '../public/assets/js/discovery-delivery.js'), 'utf8');
let assertions = 0, scenarios = 0;
const ok = (condition, message) => { assert.ok(condition, message); assertions++; };

function fixture(mode = 'accepted', lang = 'en') {
  const elements = new Map();
  function element(id = '') {
    return { id, textContent: '', style: {}, children: [], listeners: {}, attributes: {}, hidden: true, disabled: false,
      addEventListener(type, fn) { (this.listeners[type] ||= []).push(fn); },
      setAttribute(name, value) { this.attributes[name] = value; },
      getAttribute(name) { return this.attributes[name]; },
      appendChild(child) { this.children.push(child); },
      replaceChildren(...children) { this.children = children; },
      scrollIntoView() {}, click() {}, reportValidity() { return true; },
    };
  }
  const get = id => { if (!elements.has(id)) elements.set(id, element(id)); return elements.get(id); };
  const data = { name: 'Test Visitor', email: 'client@example.test', company: 'Test Company', industry: 'Technology', process: 'Reporting & analytics', hours: '20–80', systems: 'Test CRM', goal: 'Less manual work', timeline: 'This quarter', _honey: '' };
  const calls = [], timers = new Map();
  let sequence = 0, resolvePending;
  const context = vm.createContext({
    window: {}, document: { documentElement: { lang }, referrer: 'https://referrer.example/path?secret=hidden', getElementById: get, createElement: element, querySelector(selector) { const name = selector.match(/name="(.*?)"/)[1]; return { selectedOptions: [{ textContent: data[name] }] }; } },
    location: { href: 'https://ziontechgroup.com/discovery/?utm_source=test&secret=hidden#fragment', search: '?utm_source=test&secret=hidden' },
    FormData: class { entries() { return Object.entries(data); } },
    URL, URLSearchParams, Blob, AbortController, Set, console,
    navigator: { clipboard: { writeText: async () => {} } },
    setTimeout(fn, delay) { timers.set(++sequence, { fn, delay }); return sequence; },
    clearTimeout(id) { timers.delete(id); },
    fetch: async (url, options) => {
      calls.push({ url, options, data: JSON.parse(options.body) });
      if (mode === 'network') throw new TypeError('Offline');
      if (mode === 'timeout' || mode === 'pending') return new Promise((resolve, reject) => {
        resolvePending = resolve;
        options.signal.addEventListener('abort', () => { const error = new Error('Timeout'); error.name = 'AbortError'; reject(error); });
      });
      if (mode === 'invalid-json') return { ok: true, json: async () => { throw new SyntaxError('Invalid'); } };
      return { ok: mode !== 'http-error', json: async () => ({ success: mode === 'rejected' ? false : mode === 'string-success' ? 'true' : true }) };
    },
  });
  vm.runInContext(source, context);
  const submit = () => get('dform').listeners.submit[0]({ target: get('dform'), preventDefault() {} });
  return { get, data, calls, context, submit, timeout() { for (const { fn, delay } of timers.values()) if (delay === 15000) fn(); }, resolve() { resolvePending({ ok: true, json: async () => ({ success: true }) }); } };
}

async function run() {
  for (const mode of ['accepted', 'string-success', 'rejected', 'http-error', 'invalid-json', 'network', 'timeout']) {
    const f = fixture(mode), pending = f.submit();
    if (mode === 'timeout') f.timeout();
    await pending;
    ok(f.calls.length === 1, `${mode}: one submission`);
    ok(f.calls[0].url === 'https://formsubmit.co/ajax/commercial@ziontechgroup.com', 'Fixed commercial recipient');
    ok(f.calls[0].data._cc === f.data.email, 'Only client receives CC');
    ok(f.calls[0].data._replyto === f.data.email, 'Client reply-to');
    ok(!('_autoresponse' in f.calls[0].data), 'No unsupported autoresponse');
    ok(f.calls[0].data.message === f.get('report-text').textContent, 'Email and display use same report');
    ok(f.get('result').style.display === 'block', 'Report survives delivery state');
    ok(!f.get('submit-report').disabled && f.get('dform').getAttribute('aria-busy') === 'false', 'Pending lock released');
    ok(!/Results sent!|delivered successfully/i.test(f.get('rsent').textContent), 'No unsupported delivery claim');
    if (mode === 'accepted' || mode === 'string-success') ok(/Accepted by.*Inbox delivery is not yet confirmed/.test(f.get('rsent').textContent), 'Acceptance is not delivery');
    else ok(!/^Accepted by/.test(f.get('rsent').textContent), 'Errors do not display success');
    if (mode === 'timeout') ok(/timed out/.test(f.get('rsent').textContent), 'Timeout is explicit');
    if (mode !== 'rejected') { await f.submit(); ok(f.calls.length === 1, `${mode}: duplicate suppressed`); }
    ok(f.calls[0].data.source_url === 'https://ziontechgroup.com/discovery/', 'Query/hash stripped');
    ok(f.calls[0].data.referrer === 'https://referrer.example', 'Referrer origin only');
    scenarios++;
  }
  for (const email of ['one@example.test,two@example.test', 'one@example.test;two@example.test', 'one@example.test\r\nBcc:other@example.test', 'invalid']) {
    const f = fixture(); f.data.email = email; await f.submit();
    ok(f.calls.length === 0, 'Recipient injection/invalid email rejected'); scenarios++;
  }
  {
    const f = fixture(); f.data.email = 'COMMERCIAL@ziontechgroup.com'; await f.submit();
    ok(f.calls[0].data._cc === '', 'Commercial not copied twice'); scenarios++;
  }
  {
    const f = fixture(); f.data._honey = 'bot'; await f.submit();
    ok(f.calls.length === 0, 'Honeypot rejected'); scenarios++;
  }
  {
    const f = fixture('pending'), first = f.submit(); await f.submit();
    ok(f.calls.length === 1 && f.get('submit-report').disabled, 'Concurrent duplicate blocked');
    f.resolve(); await first; scenarios++;
  }
  {
    const f = fixture(); f.data.company = '<img src=x onerror=alert(1)>'; await f.submit();
    ok(f.get('rsummary').textContent.includes('<img src=x'), 'User input retained as text');
    ok(!Object.hasOwn(f.get('rsummary'), 'innerHTML'), 'User input not assigned as HTML'); scenarios++;
  }
  for (const lang of ['en', 'pt-BR', 'es', 'fr', 'de']) {
    const f = fixture('accepted', lang); await f.submit();
    ok(f.calls.length === 1 && f.calls[0].data.language === lang.slice(0, 2), `${lang}: localized runtime`);
    ok(f.get('rsent').textContent.length > 30 && f.get('report-text').textContent.length > 400, `${lang}: result present`); scenarios++;
  }
  {
    const f = fixture();
    const processes = vm.runInContext('Object.keys(APPMAP)', f.context);
    for (const process of processes) { f.data.process = process; await f.submit(); ok(f.get('rapps').children.length > 0, `${process}: recommendations`); }
    scenarios++;
  }
  console.log(`Discovery runtime: ${assertions} assertions in ${scenarios} scenarios passed. In-memory DOM; all email mocked.`);
}
run().catch(error => { console.error(error); process.exitCode = 1; });
