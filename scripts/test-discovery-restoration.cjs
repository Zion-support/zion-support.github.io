'use strict';
// Browser tests use only local fixtures and mocked email responses. No real sends.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const { validate, FILES } = require('./test-discovery-release-contract.cjs');
const ROOT = path.resolve(__dirname, '../public');

async function run() {
  let checks = validate(ROOT), scenarios = 0;
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-discovery-contract-'));
  const mutations = [
    ['discovery/index.html', s => s.replace('id="dform"', 'id="broken"')],
    ...['form-errors', 'rscore', 'rbar', 'rsummary', 'rapps', 'rnext', 'email-fallback'].map(id =>
      ['discovery/index.html', s => s.replace(`id="${id}"`, `id="broken-${id}"`)]),
    ['discovery/index.html', s => s.replace('id="discovery-inputs" disabled', 'id="discovery-inputs"')],
    ['discovery/index.html', s => s.replace('event.preventDefault()', 'event.stopPropagation()')],
    ['discovery/index.html', s => s.replace('/assets/js/discovery-delivery.js', '/missing.js')],
    ['discovery/index.html', () => '<h1>Coming soon</h1>'],
    ['contact/index.html', () => '<h1>This page is temporarily unavailable</h1>'],
    ['assets/js/discovery-delivery.js', s => s.replace('r.ok&&', 'true&&')],
    ['assets/js/zion-shell.js', s => s.replace('Free Discovery', 'Discovery $99')],
    ['assets/css/discovery.css', () => ''],
  ];
  try {
    for (const [file, change] of mutations) {
      for (const relative of FILES) {
        const target = path.join(temporary, relative);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, fs.readFileSync(path.join(ROOT, relative)));
      }
      const target = path.join(temporary, file);
      fs.writeFileSync(target, change(fs.readFileSync(target, 'utf8')));
      assert.throws(() => validate(temporary), undefined, `Mutation must fail: ${file}`);
      scenarios++;
    }
  } finally { fs.rmSync(temporary, { recursive: true, force: true }); }
  console.log(`Discovery contract mutations: ${scenarios} unsafe changes rejected`);
  if (process.argv.includes('--static-only')) return;

  const server = http.createServer((request, response) => {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    let file = path.resolve(ROOT, '.' + pathname);
    if (!file.startsWith(ROOT + path.sep)) { response.writeHead(403).end(); return; }
    if (file.endsWith(path.sep) || !path.extname(file)) file = path.join(file, 'index.html');
    try {
      const body = fs.readFileSync(file);
      response.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : 'text/html; charset=utf-8');
      response.end(body);
    } catch { response.writeHead(404).end('Not found'); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  let browser;
  try {
    browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
  } catch (error) {
    await new Promise(resolve => server.close(resolve));
    throw error;
  }
  async function pageFor(mode = 'accepted', route = '/discovery/', viewport = { width: 1280, height: 900 }) {
    const context = await browser.newContext({ viewport });
    await context.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
    await context.addInitScript(mode => {
      window.__mailCalls = [];
      window.__testMode = mode;
      const originalTimeout = window.setTimeout;
      window.setTimeout = (fn, delay, ...args) => originalTimeout(fn, delay === 15000 ? 50 : delay, ...args);
      window.fetch = async (url, options) => {
        if (url !== 'https://formsubmit.co/ajax/commercial@ziontechgroup.com') throw new Error('Unexpected request');
        window.__mailCalls.push({ url, data: JSON.parse(options.body) });
        const mode = window.__testMode;
        if (mode === 'network') throw new TypeError('Simulated offline');
        if (mode === 'timeout' || mode === 'pending') return new Promise((resolve, reject) => {
          options.signal.addEventListener('abort', () => reject(new DOMException('Timed out', 'AbortError')));
        });
        if (mode === 'invalid-json') return { ok: true, json: async () => { throw new SyntaxError('Invalid JSON'); } };
        return { ok: mode !== 'http-error', json: async () => ({ success: mode === 'rejected' ? false : mode === 'string-success' ? 'true' : true }) };
      };
    }, mode);
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(base + route);
    return { page, context, errors };
  }
  async function fill(page, email = 'client@example.test') {
    await page.fill('#name', 'Test Visitor');
    await page.fill('#email', email);
    await page.fill('#company', 'Test Company');
    await page.selectOption('#process', 'Reporting & analytics');
    await page.selectOption('#hours', '20–80');
    await page.fill('#systems', 'Test CRM');
    await page.fill('#goal', 'Reduce manual work');
  }
  async function submit(page) {
    await page.click('#submit-report');
    await page.waitForFunction(() => document.getElementById('dform').getAttribute('aria-busy') === 'false');
  }
  try {
    for (const mode of ['accepted', 'string-success', 'rejected', 'http-error', 'invalid-json', 'network', 'timeout']) {
      const { page, context, errors } = await pageFor(mode);
      await fill(page);
      await submit(page);
      const state = await page.evaluate(() => ({ calls: window.__mailCalls, status: document.getElementById('rsent').textContent, report: document.getElementById('report-text').textContent, visible: getComputedStyle(document.getElementById('result')).display, email: document.getElementById('email').value }));
      assert.equal(state.calls.length, 1);
      assert.equal(state.calls[0].data._cc, 'client@example.test');
      assert.equal(state.calls[0].data._replyto, 'client@example.test');
      assert.equal(state.calls[0].data.message, state.report);
      assert.equal(state.calls[0].data._autoresponse, undefined);
      assert.equal(state.visible, 'block');
      assert.equal(state.email, 'client@example.test');
      assert.doesNotMatch(state.status, /Results sent!|delivered successfully/i);
      if (mode === 'accepted' || mode === 'string-success') assert.match(state.status, /Accepted by.*Inbox delivery is not yet confirmed/);
      else assert.doesNotMatch(state.status, /^Accepted by/);
      if (mode === 'timeout') assert.match(state.status, /timed out/);
      if (['accepted', 'string-success', 'network', 'timeout', 'invalid-json', 'http-error'].includes(mode)) {
        await page.click('#submit-report');
        assert.equal(await page.evaluate(() => window.__mailCalls.length), 1, `${mode}: duplicate blocked`);
      }
      assert.deepEqual(errors, []);
      checks += 11; scenarios++;
      await context.close();
    }
    for (const route of ['/discovery/', '/pt/discovery/', '/es/discovery/', '/fr/discovery/', '/de/discovery/']) {
      const { page, context, errors } = await pageFor('accepted', route, { width: 390, height: 844 });
      await fill(page); await submit(page);
      assert.equal(await page.evaluate(() => window.__mailCalls.length), 1);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${route}: horizontal overflow`);
      assert.deepEqual(errors, []); checks += 3; scenarios++;
      await context.close();
    }
    {
      const { page, context } = await pageFor();
      await fill(page, 'commercial@ziontechgroup.com'); await submit(page);
      assert.equal(await page.evaluate(() => window.__mailCalls[0].data._cc), ''); checks++; scenarios++;
      await context.close();
    }
    for (const email of ['a@example.test,b@example.test', 'a@example.test;b@example.test']) {
      const { page, context } = await pageFor();
      await fill(page, email);
      await page.click('#submit-report');
      assert.equal(await page.evaluate(() => window.__mailCalls.length), 0); checks++; scenarios++;
      await context.close();
    }
    {
      const { page, context } = await pageFor();
      await fill(page);
      await page.evaluate(() => document.querySelector('[name="_honey"]').value = 'bot');
      await page.click('#submit-report');
      assert.equal(await page.evaluate(() => window.__mailCalls.length), 0); checks++; scenarios++;
      await context.close();
    }
    {
      const { page, context } = await pageFor('pending');
      await fill(page);
      await page.evaluate(() => { const f = document.getElementById('dform'); f.requestSubmit(); f.requestSubmit(); });
      assert.equal(await page.evaluate(() => window.__mailCalls.length), 1); checks++; scenarios++;
      await context.close();
    }
    {
      const { page, context } = await pageFor();
      await fill(page);
      await page.fill('#company', '<img src=x onerror="window.__xss=true">');
      await submit(page);
      assert.equal(await page.evaluate(() => window.__xss), undefined);
      assert.match(await page.textContent('#report-text'), /<img src=x/);
      assert.equal(await page.locator('#rsummary img').count(), 0); checks += 3; scenarios++;
      await context.close();
    }
    {
      const context = await browser.newContext({ javaScriptEnabled: false });
      const page = await context.newPage(); await page.goto(base + '/discovery/');
      assert.equal(await page.locator('#submit-report').isDisabled(), true); checks++; scenarios++;
      await context.close();
    }
    {
      const { page, context } = await pageFor();
      await context.route('**/discovery-delivery.js', route => route.abort());
      await page.reload(); await fill(page);
      const url = page.url(); await page.click('#submit-report');
      assert.equal(page.url(), url);
      assert.equal(await page.evaluate(() => window.__mailCalls.length), 0);
      assert.match(await page.textContent('#form-errors'), /not ready/); checks += 3; scenarios++;
      await context.close();
    }
    console.log(`Discovery restoration: ${checks} assertions, ${scenarios} browser/mutation scenarios passed. All mail was mocked.`);
  } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
}
run().catch(error => { console.error(error); process.exitCode = 1; });
