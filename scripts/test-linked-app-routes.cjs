'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const {execFileSync} = require('node:child_process');
const staging = require('./render-linked-app-routes.cjs');
const guard = require('./verify-catalog-app-routes.cjs');
const agriculture = require('./render-agriculture111.cjs');

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
  // The committed English guides predate their localized renderers. Preserve
  // their existing layouts rather than replacing them with generated copy.
  for (const slug of ['discovery-first-win-guide', 'field-services-smart-hands-playbook', 'ai-it-ops-command-center']) {
    const rel = 'apps/' + slug + '.html';
    put(out, rel, fs.readFileSync(path.join(__dirname, '../public', rel)));
  }
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
  // Publisher-generated guides have no committed public/ source. Materialize
  // their real output before testing coverage of every catalog destination.
  execFileSync(process.execPath, [path.join(__dirname, 'render-operational-tools.cjs'), out], {
    cwd: path.join(__dirname, '..'),
  });
  const generatedPages = new Set(JSON.parse(fs.readFileSync(
    path.join(out, 'apps/operational-tools-publication.json'), 'utf8'
  )).pages);
  // Use the publisher's immutable Agriculture source offline. Existing public
  // pages keep their bytes; only absent, validated translations are generated.
  const agricultureSource = fs.readFileSync(path.join(__dirname, '../tests/fixtures/agriculture111-516efdb.json'));
  assert.equal(agriculture.pin, '516efdb16f0bfbeb0897b1b2e98d1ef105ab5c5e', 'Refresh the pinned Agriculture fixture when its source changes');
  const agricultureHash = crypto.createHash('sha1')
    .update('blob ' + agricultureSource.length + '\0').update(agricultureSource).digest('hex');
  assert.equal(agricultureHash, '287d03185cebc9da7b602adf003dafa59add3299', 'Pinned Agriculture fixture integrity');
  const agricultureData = JSON.parse(agricultureSource.toString('utf8'));
  agriculture.qa(agricultureData);
  for (const locale of agricultureData.locales) {
    const rel = locale.web.replace(/^\//, '');
    if (fs.existsSync(path.join(publicRoot, rel))) continue;
    const page = agriculture.html(agricultureData, locale);
    agriculture.check(page, agricultureData, locale);
    put(out, rel, page);
    generatedPages.add(locale.web);
  }
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
      if (generatedPages.has(url.pathname)) {
        const rendered = fs.statSync(path.join(out, rel));
        assert(rendered.isFile() && rendered.size > 0, 'Missing generated catalog destination: ' + rel);
        continue;
      }
      put(out, rel, fs.readFileSync(path.join(publicRoot, rel)));
    }
  }
  return out;
}

test('restores the twenty-two absent routes and preserves every existing byte', t => {
  const out = fixture(t), before = snapshot(out);
  assert.throws(() => guard.verify(out), /Missing catalog app routes/);
  const result = staging.run(out), after = snapshot(out);
  assert.equal(result.created.length, 22);
  assert.deepEqual(result.preserved, ['apps/discovery-first-win-guide.html', 'apps/field-services-smart-hands-playbook.html', 'apps/ai-it-ops-command-center.html']);
  for (const [file, bytes] of Object.entries(before)) assert.equal(after[file], bytes, file);
  assert.deepEqual(Object.keys(after).filter(file => !(file in before)).sort(), result.created.slice().sort());
  assert.deepEqual(guard.verify(out), {catalogs: 5, routes: 25});
  const repeated = staging.run(out);
  assert.equal(repeated.created.length, 0);
  assert.equal(repeated.preserved.length, 25);
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

test('actual catalogs cannot hide missing family routes or their linked playbooks', t => {
  const out = actualCatalogFixture(t);
  const missing = staging.routes.filter(route => !fs.existsSync(path.join(out, route.path)));
  assert.equal(missing.length, 22, 'Reproduce the published artifact and linked companion omissions');
  assert.throws(() => guard.verify(out), error => missing.every(route => error.message.includes('/' + route.path)));
  const before = snapshot(out), result = staging.run(out);
  assert.equal(result.created.length, 22);
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
  for (const removed of ['es/apps/field-ticket-types.html', 'pt/apps/operational-planning-tools.html', 'apps/october-2026-batch111-agriculture.pt-br.html']) {
    const file = path.join(out, removed), bytes = fs.readFileSync(file);
    const expected = new RegExp(removed.replace(/\./g, '\\.'));
    fs.rmSync(file);
    assert.throws(() => guard.verify(out), expected);
    fs.writeFileSync(file, '');
    assert.throws(() => guard.verify(out), expected);
    fs.writeFileSync(file, bytes);
    guard.verify(out);
  }
});

test('localized field and operations companions retain working navigation and cumulative approvals', t => {
  const out = actualCatalogFixture(t);
  staging.run(out);
  const gates = {
    pt: ['confirmação formal escrita do cliente', 'pedido de compra correspondente (PO)', 'liberação operacional específica e separada da Zion', 'Os três requisitos são obrigatórios.'],
    es: ['confirmación formal por escrito del cliente', 'orden de compra correspondiente (PO)', 'autorización operativa específica y separada de Zion', 'Los tres requisitos son obligatorios.'],
    fr: ['confirmation formelle écrite du client', 'bon de commande correspondant (PO)', 'autorisation opérationnelle spécifique et distincte de Zion', 'Les trois exigences sont obligatoires.'],
    de: ['formelle schriftliche Kundenbestätigung', 'zugehörige Bestellung (PO)', 'separate, konkrete betriebliche Freigabe von Zion', 'Alle drei Voraussetzungen sind verbindlich.'],
  };
  const slugs = ['field-services-smart-hands-playbook', 'ai-it-ops-command-center'];
  for (const [locale, fragments] of Object.entries(gates)) {
    for (const slug of slugs) {
      const rel = locale + '/apps/' + slug + '.html';
      const file = path.join(out, rel), html = fs.readFileSync(file, 'utf8');
      const companion = slugs.find(other => other !== slug);
      assert(html.includes('href="/' + locale + '/apps/' + companion + '.html"'));
      assert(fs.existsSync(path.join(out, locale, 'apps', companion + '.html')));
      for (const destination of ['apps/', 'apps/network.html', 'apps/network-start-here.html']) {
        assert(html.includes('href="/' + locale + '/' + destination + '"'));
      }
      assert(html.includes('href="' + (locale === 'pt' ? '/' : '/' + locale + '/') + '"'));
      if (slug === 'ai-it-ops-command-center') {
        assert(html.includes('href="/automation-pilot-planner/' + (locale === 'pt' ? '' : locale + '/') + '"'));
        assert(html.includes('href="/ai-opportunity-mapper/"'), 'Preserve the existing resource destination');
      }
      assert(!html.includes('hreflang="en" href="/'), 'Do not invent destination-language metadata');
      for (const fragment of fragments) assert(html.includes(fragment), locale + ': ' + fragment);
      assert(!html.includes('aria-label="Language"'), 'Translate language navigation');
      fs.rmSync(file);
      assert.throws(() => guard.verify(out), error => error.message.includes('/' + rel));
      fs.writeFileSync(file, html);
    }
  }
  guard.verify(out);
});

test('guard follows actual same-host app links, including future routes and directory URLs', t => {
  const out = fixture(t);
  staging.run(out);
  put(out, 'fr/apps/future-guide.html', '<h1>Future guide</h1>');
  put(out, 'pt/apps/future-guide/index.html', '<h1>Directory guide</h1>');
  fs.appendFileSync(path.join(out, 'fr/apps/index.html'), '<a href="future-guide.html?source=a&amp;medium=b#details">Relative</a><a href="//ziontechgroup.com/pt/apps/future-guide/">Directory</a><a href="mailto:commercial@ziontechgroup.com">Email</a>');
  assert.deepEqual(guard.verify(out), {catalogs: 5, routes: 27});
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
