'use strict';

// Execute the shipped runtime for every language. No live submission or network.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const {render, locales} = require('./render-localized-discovery.cjs');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'public/assets/js/discovery-questionnaire.js'), 'utf8');
const flush = () => new Promise(resolve => setImmediate(resolve));
let scenarios = 0;

function fixture(copy, mode = 'accepted', configuration = JSON.stringify(copy), execute = true) {
  const nodes = new Map(), calls = [], timers = new Map();
  const answers = {name: 'Synthetic Visitor', email: 'client@example.test', industry: 'finance', challenge: 'costs', size: '1-10', speed: 'days', aiuse: 'none', outcome: 'save-time', deploy: 'saas'};
  let valid = true, handler, release, serial = 0;
  const button = {disabled: true};
  const fieldsets = Array.from({length: 8}, () => ({disabled: true}));
  function get(id) {
    if (!nodes.has(id)) nodes.set(id, {hidden: true, innerHTML: '', textContent: '', attrs: {},
      scrollIntoView() {}, addEventListener(type, fn) {handler = fn;}, reportValidity() {return valid;},
      querySelector() {return button;}, querySelectorAll() {return fieldsets;}, setAttribute(k, v) {this.attrs[k] = v;}});
    return nodes.get(id);
  }
  get('dq-copy').textContent = configuration;
  get('dq-unavailable').hidden = false;
  if (execute) vm.runInNewContext(source, {
    document: {getElementById: id => id === 'dq-copy' && configuration === null ? null : get(id)},
    FormData: class {entries() {return Object.entries(answers);}},
    AbortController,
    setTimeout(fn) {timers.set(++serial, fn); return serial;},
    clearTimeout(id) {timers.delete(id);},
    fetch: async (url, options) => {
      calls.push({url, options, data: JSON.parse(options.body)});
      const response = {ok: mode !== 'http-error', json: async () => {
        if (mode === 'invalid-json') throw new SyntaxError('Synthetic invalid JSON');
        if (mode === 'json-pending') return new Promise(resolve => {release = resolve;});
        return mode === 'missing' ? {} : mode === 'null' ? null : {success: mode === 'rejected' ? false : mode === 'string-false' ? 'false' : mode === 'string-true' ? 'true' : true};
      }};
      if (mode === 'network') throw new Error('Synthetic offline');
      if (mode === 'pending') return new Promise(resolve => {release = () => resolve(response);});
      return response;
    },
  });
  return {answers, calls, get, button, fieldsets, timers, hasHandler: () => !!handler, submit: () => handler({preventDefault() {}}),
    setValid(value) {valid = value;}, expire() {for (const fn of [...timers.values()]) fn();}, release(value) {release(value);}};
}

async function testLocale(locale, copy) {
  const html = fs.readFileSync(path.join(root, 'public', locale, 'discovery/index.html'), 'utf8');
  assert.equal(html, render(locale), `${locale}: generated page is current`);
  assert.ok(html.includes(`<html lang="${copy.lang}">`));
  assert.equal((html.match(/id="dq"/g) || []).length, 1);
  assert.equal((html.match(/id="dq-results"/g) || []).length, 1);
  assert.ok(html.includes('<form id="dq" method="post">'), 'Never default to personal data in a GET URL');
  assert.equal((html.match(/<fieldset disabled>/g) || []).length, 8, 'No usable fields before runtime initialization');
  assert.ok(html.includes('type="submit" disabled'));
  assert.ok(html.includes('<p id="dq-unavailable" role="status">'), 'Contact fallback is visible without JavaScript');
  assert.equal((html.match(/src="\/assets\/js\/discovery-questionnaire\.js"/g) || []).length, 1);
  assert.ok(html.includes('href="#dq"'));
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema.url, `https://ziontechgroup.com/${locale}/discovery/`);
  assert.equal(schema.offers.url, schema.url);
  assert.equal(schema.offers.price, '0');
  assert.equal(schema.inLanguage, copy.lang);
  assert.doesNotMatch(html, /\/\/apps-network\//);
  for (const legacyPaidDiscovery of ['9B69AU8NW5dt71t8BG4ZG09', '8x214o8NW35l5Xp3hm4ZG0b']) assert.ok(!html.includes(legacyPaidDiscovery));
  if (locale === 'pt') {
    for (const existingPaidPlan of ['$499', '$2.500', '$8.000/mês', 'https://buy.stripe.com/7sY00k7JScFV99Bf044ZG06']) assert.ok(html.includes(existingPaidPlan));
  }
  for (const other of Object.keys(locales)) assert.ok(html.includes(`href="/${other}/discovery/"`));
  for (const [key, options] of Object.entries(copy.answers)) {
    for (const value of Object.keys(options)) assert.ok(html.includes(`name="${key}" value="${value}" required`));
  }
  scenarios++;

  for (const configuration of [null, '{', 'null', '{}', JSON.stringify({...copy, answers: {}}), JSON.stringify({...copy, accepted: ''})]) {
    const f = fixture(copy, 'accepted', configuration);
    assert.equal(f.hasHandler(), false);
    assert.equal(f.button.disabled, true);
    assert.ok(f.fieldsets.every(fieldset => fieldset.disabled));
    assert.equal(f.get('dq-unavailable').hidden, false);
    assert.equal(f.calls.length, 0);
    scenarios++;
  }
  {
    const f = fixture(copy, 'accepted', JSON.stringify(copy), false);
    assert.equal(f.hasHandler(), false, 'A missing or blocked script cannot enable the form');
    assert.equal(f.button.disabled, true);
    assert.ok(f.fieldsets.every(fieldset => fieldset.disabled));
    assert.equal(f.get('dq-unavailable').hidden, false);
    assert.equal(f.calls.length, 0);
    scenarios++;
  }

  for (const mode of ['accepted', 'string-true', 'rejected', 'string-false', 'http-error', 'invalid-json', 'missing', 'null', 'network']) {
    const f = fixture(copy, mode);
    assert.equal(f.hasHandler(), true);
    assert.equal(f.button.disabled, false);
    assert.ok(f.fieldsets.every(fieldset => !fieldset.disabled));
    assert.equal(f.get('dq-unavailable').hidden, true);
    assert.equal(f.calls.length, 0, 'No request occurs on page load');
    await f.submit();
    assert.equal(f.calls.length, 1);
    assert.equal(f.calls[0].url, 'https://formsubmit.co/ajax/commercial@ziontechgroup.com');
    assert.equal(f.calls[0].options.method, 'POST');
    assert.deepEqual(Object.keys(f.calls[0].data).sort(), ['_cc', '_replyto', '_subject', 'email', 'name', 'results'].sort());
    assert.equal(f.calls[0].data._cc, 'client@example.test');
    assert.equal(f.calls[0].data._replyto, 'client@example.test');
    assert.ok(f.calls[0].data.results.includes(copy.fields.industry + ': ' + copy.answers.industry.finance));
    assert.ok(f.calls[0].data.results.includes(copy.fields.challenge + ': ' + copy.answers.challenge.costs));
    assert.ok(f.get('dq-results').innerHTML.includes(copy.resources['/finops-consulting/']));
    assert.equal(f.get('dq-results').hidden, false);
    assert.equal(f.button.disabled, false);
    assert.equal(f.get('dq').attrs['aria-busy'], 'false');
    assert.equal(f.timers.size, 0);
    const status = f.get('dq-mail-status').textContent;
    if (['accepted', 'string-true'].includes(mode)) assert.equal(status, copy.accepted);
    else {
      assert.notEqual(status, copy.accepted);
      assert.equal(status, ['rejected', 'string-false'].includes(mode) ? copy.rejected : copy.uncertain);
      const href = f.get('dq-fallback').innerHTML.match(/href="([^"]+)"/)[1].replace(/&amp;/g, '&');
      const fallback = new URL(href);
      assert.equal(decodeURIComponent(fallback.pathname), 'client@example.test');
      assert.equal(fallback.searchParams.get('cc'), 'commercial@ziontechgroup.com');
      assert.equal(fallback.searchParams.get('body'), f.calls[0].data.results);
    }
    await f.submit();
    assert.equal(f.calls.length, ['rejected', 'string-false'].includes(mode) ? 2 : 1, mode + ' retry policy');
    scenarios++;
  }
  for (const mode of ['pending', 'json-pending']) {
    const f = fixture(copy, mode), promise = f.submit();
    await flush();
    await f.submit();
    assert.equal(f.calls.length, 1);
    assert.equal(f.button.disabled, true);
    f.expire();
    await promise;
    assert.equal(f.calls[0].options.signal.aborted, true);
    assert.equal(f.button.disabled, false);
    assert.equal(f.get('dq-mail-status').textContent, copy.uncertain);
    f.release({success: true});
    await flush();
    assert.equal(f.get('dq-mail-status').textContent, copy.uncertain, 'Late response cannot change timeout state');
    await f.submit();
    assert.equal(f.calls.length, 1);
    scenarios++;
  }
  {
    const f = fixture(copy); await f.submit();
    f.answers.challenge = 'support'; await f.submit();
    f.answers.challenge = 'costs'; await f.submit();
    assert.equal(f.calls.length, 2, 'Previously accepted payload remains suppressed');
    scenarios++;
  }
  for (const email of ['a@example.test,b@example.test', 'a@example.test;b@example.test', 'a@example.test\r\nBcc: b@example.test', 'bad', 'a"@example.test', 'a\\@example.test']) {
    const f = fixture(copy); f.answers.email = email; await f.submit();
    assert.equal(f.calls.length, 0); scenarios++;
  }
  {
    const f = fixture(copy); f.answers.email = 'COMMERCIAL@ziontechgroup.com'; await f.submit();
    assert.equal(f.calls[0].data._cc, ''); scenarios++;
  }
  {
    const f = fixture(copy); f.setValid(false); await f.submit();
    assert.equal(f.calls.length, 0); scenarios++;
  }
  for (const key of Object.keys(copy.answers)) {
    const f = fixture(copy); f.answers[key] = '__proto__'; await f.submit();
    assert.equal(f.calls.length, 0, 'Only actual displayed answer values are accepted'); scenarios++;
  }
  {
    const f = fixture(copy, 'rejected'); f.answers.name = '<img src=x onerror=alert(1)>\r\nBcc: injected'; await f.submit();
    assert.doesNotMatch(f.get('dq-results').innerHTML, /<img/);
    assert.doesNotMatch(f.get('dq-fallback').innerHTML, /<img/);
    assert.doesNotMatch(f.calls[0].data._subject, /[\r\n]/);
    scenarios++;
  }
  for (const industry of Object.keys(copy.answers.industry)) {
    for (const challenge of Object.keys(copy.answers.challenge)) {
      const f = fixture(copy); Object.assign(f.answers, {industry, challenge}); await f.submit();
      const links = [...f.get('dq-results').innerHTML.matchAll(/<a href="([^"]+)">/g)].map(match => match[1]);
      assert.equal(new Set(links).size, links.length);
      assert.ok(links.length >= 3 && links.length <= 4);
      const reportLinks = [...f.calls[0].data.results.matchAll(/https:\/\/ziontechgroup\.com(\S+)/g)].map(match => match[1]);
      assert.deepEqual(links, reportLinks, 'Screen and email contain the same ordered recommendations');
      for (const link of links) assert.ok(Object.hasOwn(copy.resources, link));
      scenarios++;
    }
  }
  console.log(`${locale}: language, free offer, recipients, acceptance states, failures and all 30 recommendation combinations passed.`);
}

let completed = false;
process.on('beforeExit', () => {if (!completed) {console.error('Suite did not complete'); process.exitCode = 1;}});
(async () => {
  for (const [locale, copy] of Object.entries(locales)) await testLocale(locale, copy);
  completed = true;
  console.log(`${scenarios} localized Discovery scenarios passed; every fetch was mocked.`);
})().catch(error => {completed = true; console.error(error); process.exitCode = 1;});
