'use strict';
// Execute the unchanged live-check entrypoint in a sandbox with synthetic HTTP.
// No network, timers, repository writes, or production script exports required.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, 'test-finops-scenario-live.cjs'), 'utf8');
const origin = 'https://ziontechgroup.com';
const version = '2026-10-09-finops-scenario-v1';
const homes = ['/en/', '/pt/', '/es/', '/fr/', '/de/'];
const marker = `data-finops-promotion="${version}"`;
function fixtures() {
  const pages = new Map();
  const appPages = [];
  const reciprocal = [];
  for (const locale of ['en', 'pt', 'es', 'fr', 'de']) {
    const prefix = locale === 'en' ? '/' : `/${locale}/`;
    for (const slug of ['finops-scenario-estimator', 'finops-pilot-guide']) {
      const route = `${prefix}apps/${slug}.html`;
      appPages.push(route);
      pages.set(route, `<html lang="${locale === 'pt' ? 'pt-BR' : locale}"><link rel="canonical" href="${origin}${route}">${'<link rel="alternate">'.repeat(6)}<body data-finops-scenario="${version}">`);
    }
    const peers = ['roi-calc', 'sla-calculator', 'ai-governance-checklist'].map(slug => `${prefix}${slug}/`);
    peers.push(`${prefix}apps/network-learning-paths.html`);
    reciprocal.push(...peers);
    for (const route of [`/${locale}/`, ...peers]) {
      pages.set(route, `<aside ${marker}><a href="${prefix}apps/finops-scenario-estimator.html">Estimator</a></aside>${route.endsWith('network-learning-paths.html') ? '<style id="finops-mobile-fix"></style>' : ''}`);
    }
  }
  // English root is not the Portuguese homepage. Do not require a PT promotion.
  pages.set('/', '<html lang="en"><a href="/apps/finops-scenario-estimator.html">FinOps</a>');
  pages.set('/assets/js/finops-scenario.js', 'var ZionFinopsScenario={calculate:()=>[1500,1300,12600]};');
  pages.set('/assets/css/discovery.css', 'x'.repeat(101));
  pages.set('/apps/finops-scenario-publication.json', JSON.stringify({version, pages: appPages, homepages: homes, reciprocalPages: reciprocal}));
  return pages;
}
async function run(code = source, change = () => {}, statuses = {}) {
  const pages = fixtures();
  change(pages);
  const requests = [], errors = [], logs = [], processState = {};
  const context = {
    require(name) {
      assert(['node:assert/strict', 'node:vm'].includes(name), 'unexpected module');
      return require(name);
    },
    fetch: async (url, options) => {
      assert.equal(options.cache, 'no-store');
      assert(url.startsWith(origin + '/'), 'off-origin request');
      const route = url.slice(origin.length);
      requests.push(route);
      return {status: statuses[route] || (pages.has(route) ? 200 : 404), text: async () => pages.get(route) || ''};
    },
    AbortSignal: {timeout: milliseconds => { assert.equal(milliseconds, 20000); return {}; }},
    setTimeout: (fn, milliseconds) => { assert.equal(milliseconds, 20000); fn(); },
    console: {log: message => logs.push(message), error: message => errors.push(message)},
    process: processState
  };
  await vm.runInNewContext(code, context, {timeout: 1000});
  return {requests, errors, logs, exitCode: processState.exitCode || 0};
}
test('five explicit locale homes pass; English root is not used as PT', async () => {
  const result = await run();
  assert.equal(result.exitCode, 0);
  assert.equal(result.requests.length, 38);
  assert.deepEqual(result.requests.filter(route => homes.includes(route)), homes);
  assert(!result.requests.includes('/'));
  assert.equal(result.errors.length, 0);
});
test('negative control: legacy PT-to-root mapping fails', async () => {
  const old = "const routes=['/'+l+'/',";
  assert(source.includes(old));
  const legacy = source.replace(old, "const routes=[l==='pt'?'/':'/'+l+'/',");
  const result = await run(legacy);
  assert.equal(result.exitCode, 1);
  assert(result.errors.some(error => error.includes('/ unique promotion')));
});
for (const [name, mutate, message] of [
  ['missing PT promotion', pages => pages.set('/pt/', pages.get('/pt/').replace(marker, '')), '/pt/ unique promotion'],
  ['duplicate PT promotion', pages => pages.set('/pt/', pages.get('/pt/') + `<aside ${marker}></aside>`), '/pt/ unique promotion'],
  ['wrong PT target', pages => pages.set('/pt/', pages.get('/pt/').replace('/pt/apps/', '/apps/')), '/pt/ return link'],
  ['missing mobile rule', pages => pages.set('/pt/apps/network-learning-paths.html', pages.get('/pt/apps/network-learning-paths.html').replace('id="finops-mobile-fix"', '')), '/pt/apps/network-learning-paths.html mobile rule'],
  ['wrong page language', pages => pages.set('/pt/apps/finops-scenario-estimator.html', pages.get('/pt/apps/finops-scenario-estimator.html').replace('lang="pt-BR"', 'lang="en"')), '/pt/apps/finops-scenario-estimator.html language'],
  ['wrong manifest version', pages => { const manifest = JSON.parse(pages.get('/apps/finops-scenario-publication.json')); manifest.version = 'wrong'; pages.set('/apps/finops-scenario-publication.json', JSON.stringify(manifest)); }, 'Expected values']
]) test(`reject ${name}`, async () => {
  const result = await run(source, mutate);
  assert.equal(result.exitCode, 1);
  assert.equal(result.errors.filter(error => error.startsWith('Attempt ')).length, 6);
  assert(result.errors.some(error => error.includes(message)));
});
test('reject HTTP 404 even with valid PT HTML', async () => {
  const result = await run(source, () => {}, {'/pt/': 404});
  assert.equal(result.exitCode, 1);
  assert(result.errors.some(error => error.includes('HTTP 404 /pt/')));
});
