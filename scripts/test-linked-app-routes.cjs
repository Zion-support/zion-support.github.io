'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const staging = require('./render-linked-app-routes.cjs');
const guard = require('./verify-catalog-app-routes.cjs');

function put(out, rel, text) {
  const file = path.join(out, rel);
  fs.mkdirSync(path.dirname(file), {recursive: true});
  fs.writeFileSync(file, text);
}

function fixture(t) {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-linked-app-test-'));
  t.after(() => fs.rmSync(out, {recursive: true, force: true}));
  for (const [i, locale] of staging.locales.entries()) {
    const home = locale === 'pt' ? 'index.html' : locale + '/index.html';
    put(out, home, '<html><body><form id="keep"><input name="unchanged"></form><script>window.keep=true;</script><main data-industry-guides="keep">Original homepage</main></body></html>');
    const links = staging.routes.filter(route => route.locale === locale)
      .map(route => '<a href="https://ziontechgroup.com/' + route.path + '">Guide</a>').join('');
    put(out, guard.catalogs[i], '<html><body><main data-apps-directory="keep">' + links + '<a href="/zion-app-network/missing-sibling.html">Sibling repository</a><a href="/agent-brief/">Sibling app</a><a href="https://example.org/apps/external.html">External</a></main></body></html>');
    put(out, (locale === 'en' ? '' : locale + '/') + 'apps/network.html', 'Existing network map ' + locale);
  }
  // The committed English guide predates the localized renderer and has a
  // different layout. Preserve it rather than replacing it with generated copy.
  put(out, 'apps/discovery-first-win-guide.html', fs.readFileSync(path.join(__dirname, '../public/apps/discovery-first-win-guide.html')));
  return out;
}

function snapshot(out) {
  const result = {};
  function visit(directory) {
    for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(file);
      else result[path.relative(out, file)] = fs.readFileSync(file).toString('base64');
    }
  }
  visit(out);
  return result;
}

function actualCatalogFixture(t) {
  const out = fixture(t), publicRoot = path.join(__dirname, '../public');
  for (const catalog of guard.catalogs) {
    const html = fs.readFileSync(path.join(publicRoot, catalog), 'utf8');
    put(out, catalog, html);
    for (const href of guard.links(html)) {
      const url = new URL(href, 'https://ziontechgroup.com/' + catalog.replace(/index\.html$/, ''));
      if (!['http:', 'https:'].includes(url.protocol) || url.host !== 'ziontechgroup.com') continue;
      if (!/^\/(?:pt\/|es\/|fr\/|de\/)?apps(?:\/|$)/.test(url.pathname)) continue;
      let rel = decodeURIComponent(url.pathname).replace(/^\//, '');
      const source = path.join(publicRoot, rel);
      if (url.pathname.endsWith('/') || (fs.existsSync(source) && fs.statSync(source).isDirectory())) rel = path.join(rel, 'index.html');
      put(out, rel, fs.readFileSync(path.join(publicRoot, rel)));
    }
  }
  return out;
}

test('restores the fourteen absent routes and preserves every existing byte', t => {
  const out = fixture(t), before = snapshot(out);
  assert.throws(() => guard.verify(out), /Missing catalog app routes/);
  const result = staging.run(out), after = snapshot(out);
  assert.equal(result.created.length, 14);
  assert.deepEqual(result.preserved, ['apps/discovery-first-win-guide.html']);
  for (const [file, bytes] of Object.entries(before)) assert.equal(after[file], bytes, file);
  assert.deepEqual(Object.keys(after).filter(file => !(file in before)).sort(), result.created.slice().sort());
  assert.deepEqual(guard.verify(out), {catalogs: 5, routes: 15});
  const repeated = staging.run(out);
  assert.equal(repeated.created.length, 0);
  assert.equal(repeated.preserved.length, 15);
  assert.deepEqual(snapshot(out), after, 'Repeated staging must be byte-idempotent');
});

test('final artifact guard catches a route removed or emptied after staging', t => {
  const out = fixture(t);
  staging.run(out);
  const target = path.join(out, 'fr/apps/discovery-first-win-guide.html');
  fs.rmSync(target);
  assert.throws(() => guard.verify(out), /fr\/apps\/discovery-first-win-guide\.html/);
  fs.writeFileSync(target, '');
  assert.throws(() => guard.verify(out), /fr\/apps\/discovery-first-win-guide\.html/);
});

test('actual catalogs cannot hide the original fourteen missing family routes', t => {
  const out = actualCatalogFixture(t);
  const missing = staging.routes.filter(route => !fs.existsSync(path.join(out, route.path)));
  assert.equal(missing.length, 14, 'Reproduce the published artifact omission');
  assert.throws(() => guard.verify(out), error => missing.every(route => error.message.includes('/' + route.path)));
  const before = snapshot(out), result = staging.run(out);
  assert.equal(result.created.length, 14);
  guard.verify(out);
  for (const [file, bytes] of Object.entries(before)) assert.equal(snapshot(out)[file], bytes, file);
  for (const locale of staging.locales) {
    const showcase = fs.readFileSync(path.join(out, 'apps/discovery-showcase' + (locale === 'en' ? '' : '-' + locale) + '.html'), 'utf8');
    assert(showcase.includes('href="/zion-app-network/directory-' + locale + '.html"'));
    if (locale === 'en') continue;
    const guide = fs.readFileSync(path.join(out, locale + '/apps/discovery-first-win-guide.html'), 'utf8');
    assert(guide.includes('href="/' + locale + '/apps/"'));
    assert(guide.includes('href="/' + locale + '/apps/network.html"'));
    assert(guide.includes('href="/automation-pilot-planner/' + (locale === 'pt' ? '' : locale + '/') + '"'));
    assert(guide.includes('href="/apps/content-hub.html" hreflang="en"'));
  }
  const removed = 'es/apps/field-ticket-types.html';
  fs.rmSync(path.join(out, removed));
  assert.throws(() => guard.verify(out), new RegExp(removed.replace(/\./g, '\\.')));
});

test('guard follows actual same-host app links, including future routes and directory URLs', t => {
  const out = fixture(t);
  staging.run(out);
  put(out, 'fr/apps/future-guide.html', '<h1>Future guide</h1>');
  put(out, 'pt/apps/future-guide/index.html', '<h1>Directory guide</h1>');
  fs.appendFileSync(path.join(out, 'fr/apps/index.html'), '<a href="future-guide.html?source=a&amp;medium=b#details">Relative</a><a href="//ziontechgroup.com/pt/apps/future-guide/">Directory</a><a href="mailto:commercial@ziontechgroup.com">Email</a>');
  assert.deepEqual(guard.verify(out), {catalogs: 5, routes: 17});
  fs.rmSync(path.join(out, 'fr/apps/future-guide.html'));
  assert.throws(() => guard.verify(out), /fr\/apps\/future-guide\.html/);
});

test('missing artifact or catalog cannot pass the final route guard', t => {
  const out = fixture(t);
  assert.throws(() => guard.verify(path.join(out, 'absent')), /Missing final Pages artifact/);
  fs.rmSync(path.join(out, guard.catalogs[4]));
  assert.throws(() => guard.verify(out), /Missing catalog: de\/apps\/index\.html/);
});

test('shared preparation restores routes and the final renderer verifies them before upload', () => {
  const prepare = fs.readFileSync(path.join(__dirname, 'prepare-pages-out.sh'), 'utf8');
  assert(prepare.includes('node scripts/render-linked-app-routes.cjs out'));
  const finalRenderer = fs.readFileSync(path.join(__dirname, 'render-field-evidence-release.cjs'), 'utf8');
  const aliasEnd = finalRenderer.indexOf('PASS final field guide aliases');
  const finalGuard = finalRenderer.indexOf("require('./verify-catalog-app-routes.cjs').verify(output)");
  assert(aliasEnd >= 0 && finalGuard > aliasEnd);
  for (const workflow of ['static-deploy.yml', 'gh-pages.yml', 'deploy-on-push.yml']) {
    const source = fs.readFileSync(path.join(__dirname, '../.github/workflows', workflow), 'utf8');
    const render = source.indexOf('node scripts/render-field-evidence-release.cjs out');
    const upload = source.indexOf('actions/upload-pages-artifact@');
    assert(render >= 0 && upload >= 0 && render < upload, workflow);
  }
});

test('exact-head Node 20 CI exercises the final publisher sequence before artifact staging', () => {
  const source = fs.readFileSync(path.join(__dirname, '../.github/workflows/productivity-full-build-check.yml'), 'utf8');
  const commands = [
    'bash scripts/prepare-pages-out.sh',
    'node scripts/render-productivity-release.cjs out',
    'node scripts/render-field-evidence-release.cjs out',
    'node scripts/prepare-productivity-qa.cjs out',
  ];
  let previous = -1;
  for (const command of commands) {
    const index = source.indexOf('run: ' + command);
    assert(index >= 0 && index > previous, command);
    previous = index;
  }
  assert(source.includes('ref: ${{ github.event.pull_request.head.sha }}'));
  assert(source.includes("node-version: '20'"));
  const fieldStep = source.match(/- name: Final field rendering[^\n]*\n([\s\S]*?)(?=      - |$)/);
  assert(fieldStep && !/\b(?:continue-on-error|if):/.test(fieldStep[1]), 'Final route gate must fail closed');
});
