'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const cp = require('node:child_process');
const vm = require('node:vm');

const copy = JSON.parse(fs.readFileSync('content/operational-tools.json', 'utf8'));
const locales = ['en', 'pt', 'es', 'fr', 'de'];
const slugs = ['roi-calc', 'sla-calculator', 'ai-governance-checklist'];
const version = '2026-10-30-operational-tools-v2';
const prefix = locale => locale === 'en' ? '/' : '/' + locale + '/';
const home = locale => locale === 'pt' ? '/' : '/' + locale + '/';
const disk = (out, route) => path.join(out, route.slice(1) + (route.endsWith('/') ? 'index.html' : ''));
const script = fs.readFileSync('public/assets/js/operational-tools.js', 'utf8');

// This mode checks the actual publication directory, including stale files
// copied from public/. The isolated renderer test below cannot establish this.
function verifyArtifact(out) {
  const manifest = JSON.parse(fs.readFileSync(path.join(out, 'apps/operational-tools-publication.json'), 'utf8'));
  const expected = locales.flatMap(locale => [
    prefix(locale) + 'apps/operational-planning-tools.html',
    ...slugs.map(slug => prefix(locale) + slug + '/')
  ]);
  assert.equal(manifest.version, version, 'Current operational release');
  assert.deepEqual(manifest.pages, expected, 'Twenty published pages');
  assert.deepEqual(manifest.homepages, locales.map(home), 'Five homepage entries');
  for (const locale of locales) {
    for (const slug of ['apps/operational-planning-tools.html', ...slugs.map(item => item + '/')]) {
      const route = prefix(locale) + slug;
      const html = fs.readFileSync(disk(out, route), 'utf8');
      assert(html.includes('<html lang="' + copy[locale].lang + '">'), 'Page language: ' + route);
      assert(html.includes('data-operational-tools="' + version + '"'), 'Release marker: ' + route);
      assert(html.includes('rel="canonical" href="https://ziontechgroup.com' + route + '"'), 'Canonical: ' + route);
      assert.equal((html.match(/rel="alternate"/g) || []).length, 6, 'Alternates: ' + route);
      for (const alternative of locales) {
        assert(html.includes('hreflang="' + copy[alternative].lang + '" href="https://ziontechgroup.com' + prefix(alternative) + slug + '"'), 'Same-topic language target: ' + route);
        assert(html.includes('lang="' + copy[alternative].lang + '" href="' + prefix(alternative) + slug + '"'), 'Language switch: ' + route);
      }
      assert(html.includes('href="' + prefix(locale) + 'apps/"'), 'Local catalog: ' + route);
      assert(html.includes('href="' + prefix(locale) + 'apps/finops-scenario-estimator.html"'), 'Local FinOps: ' + route);
      assert(!/Coming soon|Em breve|Próximamente|Bientôt disponible|Demnächst verfügbar|static fallback|finance-insurance-paths\.html|operations-baseline\.html/.test(html), 'No placeholder or unverified related route: ' + route);
      if (slug.endsWith('/')) {
        const embedded = html.match(/<script id="ops-copy" type="application\/json">([\s\S]*?)<\/script>/);
        assert(embedded, 'Localized runtime copy: ' + route);
        assert.deepEqual(JSON.parse(embedded[1]), copy[locale], 'Complete locale copy: ' + route);
        assert(html.includes('id="ops-form"'), 'Interactive form: ' + route);
        assert(html.includes('src="/assets/js/operational-tools.js"'), 'Runtime dependency: ' + route);
        const expectedControls = slug === 'roi-calc/' ? 2 : slug === 'sla-calculator/' ? 5 : 10;
        const inputType = slug === 'ai-governance-checklist/' ? 'checkbox' : 'number';
        assert.equal((html.match(new RegExp('type="' + inputType + '"', 'g')) || []).length, expectedControls, 'Complete controls: ' + route);
      }
    }
    const html = fs.readFileSync(disk(out, home(locale)), 'utf8');
    assert.equal((html.match(/<!--operational-tools:start-->/g) || []).length, 1, 'One homepage promotion: ' + locale);
    assert(html.includes('data-operational-promotion="' + version + '"'), 'Current homepage promotion: ' + locale);
  }
  assert.equal(fs.readFileSync(path.join(out, 'assets/js/operational-tools.js'), 'utf8'), script, 'Published runtime matches the reviewed source');
  assert(fs.statSync(path.join(out, 'assets/css/discovery.css')).size > 0, 'Published stylesheet');
  const coverage = JSON.parse(fs.readFileSync(path.join(out, 'apps/network-publication-coverage.json'), 'utf8'));
  for (const family of ['apps/operational-planning-tools.html', ...slugs.map(slug => slug + '/index.html')]) {
    const row = coverage.groups.find(item => item.path === family);
    assert(row, 'Published family in coverage inventory: ' + family);
    assert.deepEqual(row.available, locales, 'Coverage locales match the generated pages: ' + family);
    assert.deepEqual(row.missing, [], 'Generated family has no missing locales: ' + family);
  }
  return expected.length;
}

if (process.argv.includes('--artifact-only')) {
  assert(process.argv[2] && !process.argv[2].startsWith('--'), 'Supply the assembled publication directory');
  console.log('PASS operational publication artifact: ' + verifyArtifact(process.argv[2]) + ' pages, five homepage promotions, locale targets and runtime assets.');
  process.exit(0);
}

const sandbox = {module: {exports: {}}};
vm.runInNewContext(script, sandbox);
const math = sandbox.module.exports;
assert.equal(math.roi(40, 45).monthly, 1800);
assert.equal(math.roi(40, 45).yearly, 21600);
assert.equal(math.roi(0, 0).yearly, 0);
for (const bad of [-1, Infinity, NaN]) assert.throws(() => math.roi(bad, 45));
const sla = math.sla(99.9, 30, 1000, 5, 1);
assert(Math.abs(sla.allowed - 0.72) < 1e-9);
assert(Math.abs(sla.excess - 0.28) < 1e-9);
assert.equal(sla.hourly, 50);
assert(Math.abs(sla.total - 14) < 1e-8);
assert.equal(math.sla(99.9, 30, 1000, 5, 0.5).total, 0);
assert.equal(math.sla(100, 30, 1000, 5, 1).total, 50);
for (const input of [[101,30,1000,5,1], [99,0,1000,5,1], [99,30,1000,5,721], [99,30,-1,5,1]]) {
  assert.throws(() => math.sla(...input));
}
new vm.Script(script);
assert(!/fetch\(|XMLHttpRequest|localStorage|sendBeacon/.test(script));

// Exercise user-facing state changes in all five locales. Editing a number
// invalidates the old result until submission; an invalid value removes metrics.
for (const locale of locales) {
  for (const kind of ['roi', 'sla', 'governance']) {
    const events = {}, metrics = {};
    const result = {
      dataset: metrics,
      textContent: '',
      replaceChildren() { this.textContent = ''; },
      append() {},
      removeAttribute(name) { if (name === 'data-error') delete metrics.error; }
    };
    const values = {hours:'40', rate:'45', u:'99.9', d:'30', f:'1000', p:'5', a:'1'};
    const govscore = {textContent: ''};
    const form = {
      dataset: {kind},
      querySelectorAll(selector) {
        assert.equal(selector, '#gov-controls input:checked');
        return Array(3).fill({checked: true});
      },
      addEventListener(event, handler) { events[event] = handler; }
    };
    const document = {
      getElementById(id) {
        if (id === 'ops-copy') return {textContent: JSON.stringify(copy[locale])};
        if (id === 'ops-form') return form;
        if (id === 'ops-result') return result;
        if (id === 'govscore') return govscore;
        return {value: values[id]};
      },
      createElement: () => ({textContent: '', append() {}})
    };
    vm.runInNewContext(script, {document, Intl});
    const initial = JSON.parse(metrics.metrics);
    if (kind === 'governance') {
      assert.equal(initial.checked, 3);
      assert(govscore.textContent.includes('3 / 10'));
      assert.equal(result.textContent, copy[locale].outputs[6] + ': 3 / 10', 'Governance result card shows the localized count');
      events.change();
    } else {
      if (kind === 'roi') assert.equal(initial.monthly, 1800);
      else assert(Math.abs(initial.total - 14) < 1e-8);
      events.input();
      assert.equal(metrics.metrics, undefined, 'Stale metrics removed on input');
      assert.equal(result.textContent, copy[locale].recalculate, 'Localized recalculation prompt');
      let prevented = false;
      const submit = () => events.submit({preventDefault() { prevented = true; }});
      submit();
      assert(prevented);
      assert(metrics.metrics, 'Valid resubmission restores results');
      values[kind === 'roi' ? 'hours' : 'u'] = '';
      submit();
      assert.equal(metrics.error, 'true');
      assert.equal(metrics.metrics, undefined);
      assert.equal(result.textContent, copy[locale].error);
      events.input();
      assert.equal(metrics.error, undefined, 'Editing clears the old error');
    }
  }
}

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-ops-'));
const out = path.join(root, 'out');
const renderer = path.resolve('scripts/render-operational-tools.cjs');
const write = (file, text) => { fs.mkdirSync(path.dirname(file), {recursive: true}); fs.writeFileSync(file, text); };
const original = '<form id="preserved"><input name="existing"></form>';
try {
  write(path.join(root, 'content/operational-tools.json'), JSON.stringify(copy));
  write(path.join(root, 'public/assets/js/operational-tools.js'), script);
  write(path.join(out, 'assets/css/discovery.css'), fs.readFileSync('public/assets/css/discovery.css'));
  const unrelatedCoverage = {path: 'apps/unrelated.html', available: ['en'], missing: ['pt'], review: {owner: 'fixture-owner'}};
  const existingCoverage = {path: 'roi-calc/index.html', available: ['en'], missing: ['pt', 'es', 'fr', 'de'], review: {evidence: 'preserve-existing-metadata'}};
  write(path.join(out, 'apps/network-publication-coverage.json'), JSON.stringify({source: 'fixture-sentinel', groups: [unrelatedCoverage, existingCoverage]}));
  for (const locale of locales) {
    write(disk(out, home(locale)), '<html><body><main>' + original + '</main></body></html>');
    for (const slug of slugs) write(disk(out, prefix(locale) + slug + '/'), '<h1>Tools</h1><p>Coming soon.</p>');
  }
  for (let run = 0; run < 2; run++) {
    cp.execFileSync(process.execPath, [renderer, out], {cwd: root, stdio: 'pipe', timeout: 20000});
    verifyArtifact(out);
  }
  for (const locale of locales) assert(fs.readFileSync(disk(out, home(locale)), 'utf8').includes(original), 'Existing homepage form preserved');
  const coverage = JSON.parse(fs.readFileSync(path.join(out, 'apps/network-publication-coverage.json'), 'utf8'));
  assert.equal(coverage.groups.length, 5, 'Four generated page families plus the untouched unrelated row');
  assert.equal(coverage.source, 'fixture-sentinel', 'Unrelated report metadata preserved');
  assert.deepEqual(coverage.groups.find(item => item.path === unrelatedCoverage.path), unrelatedCoverage, 'Unrelated family untouched');
  const costCoverage = coverage.groups.find(item => item.path === existingCoverage.path);
  assert.deepEqual(costCoverage.review, existingCoverage.review, 'Existing family metadata preserved');
  // Valid pages with an empty availability list must not pass publication QA.
  costCoverage.available = [];
  write(path.join(out, 'apps/network-publication-coverage.json'), JSON.stringify(coverage));
  assert.throws(() => verifyArtifact(out), /Coverage locales/);
  costCoverage.available = [...locales];
  write(path.join(out, 'apps/network-publication-coverage.json'), JSON.stringify(coverage));
  // Corrupt the served output after a successful render: verification must reject
  // the exact placeholder regression even if the renderer itself is still healthy.
  write(disk(out, '/pt/roi-calc/'), '<h1>Ferramentas</h1><p>Em breve.</p>');
  assert.throws(() => verifyArtifact(out), /Page language/);
  console.log('PASS: formula boundaries, five-locale result invalidation, scoped governance controls, stale-placeholder replacement, 20-page artifact acceptance, accurate locale inventory with preserved metadata, preserved homepage forms, idempotency and no network/storage.');
} finally {
  fs.rmSync(root, {recursive: true, force: true});
}
