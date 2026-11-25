'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// Ported artifact-only assertions from PR #71959 at 6485da8828a0ff9856dc7d5e4300ff55aa59125b.
// Reviewed fixtures are test oracles; no generated page is substituted for the canonical artifact.
// 2026-11-24 route contract: /pt/ home and localized /en/discovery/; form, method and runtime assertions remain independent.
const reviewed = path.resolve(__dirname, '../tests/fixtures/publication');
const copy = JSON.parse(fs.readFileSync(path.join(reviewed, 'operational-tools.json'), 'utf8'));
const baselineCopy = JSON.parse(fs.readFileSync(path.join(reviewed, 'roi-baseline.json'), 'utf8'));
const baselineRenderer = require('../tests/fixtures/publication/roi-baseline-renderer.cjs');
const baselineVersion = baselineRenderer.version;
const locales = ['en', 'pt', 'es', 'fr', 'de'];
const slugs = ['roi-calc', 'sla-calculator', 'ai-governance-checklist'];
const version = '2026-10-30-operational-tools-v2';
const prefix = locale => locale === 'en' ? '/' : '/' + locale + '/';
const home = locale => '/' + locale + '/';
const disk = (out, route) => path.join(out, route.slice(1) + (route.endsWith('/') ? 'index.html' : ''));
const script = fs.readFileSync(path.join(reviewed, 'operational-tools.js'), 'utf8');

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
      const languageAnchors = [...html.matchAll(/<a\b[^>]*>/g)].map(([tag]) =>
        Object.fromEntries([...tag.matchAll(/\s([\w:-]+)="([^"]*)"/g)].map(([, name, value]) => [name, value])));
      for (const alternative of locales) {
        assert(html.includes('hreflang="' + copy[alternative].lang + '" href="https://ziontechgroup.com' + prefix(alternative) + slug + '"'), 'Same-topic language target: ' + route);
        assert(languageAnchors.some(anchor => anchor.lang === copy[alternative].lang && anchor.href === prefix(alternative) + slug), 'Language switch: ' + route);
      }
      assert(html.includes('href="' + prefix(locale) + 'apps/"'), 'Local catalog: ' + route);
      assert(html.includes('href="/' + locale + '/discovery/"'), 'Local Discovery: ' + route);
      assert(html.includes('href="' + home(locale) + '"'), 'Local homepage: ' + route);
      assert(html.includes('href="' + prefix(locale) + 'apps/finops-scenario-estimator.html"'), 'Local FinOps: ' + route);
      assert(!/Coming soon|Em breve|Próximamente|Bientôt disponible|Demnächst verfügbar|static fallback|finance-insurance-paths\.html|operations-baseline\.html/.test(html), 'No placeholder or unverified related route: ' + route);
      if (slug.endsWith('/')) {
        const embedded = html.match(/<script id="ops-copy" type="application\/json">([\s\S]*?)<\/script>/);
        assert(embedded, 'Localized runtime copy: ' + route);
        const expectedCopy = slug === 'roi-calc/' ? {
          locale: copy[locale].locale, labels: baselineCopy[locale].labels,
          outputs: baselineCopy[locale].outputs, error: baselineCopy[locale].error,
          pending: baselineCopy[locale].pending
        } : copy[locale];
        assert.deepEqual(JSON.parse(embedded[1]), expectedCopy, 'Complete locale copy: ' + route);
        if (slug === 'roi-calc/') {
          assert(html.includes('data-roi-baseline="' + baselineVersion + '"'), 'Baseline release marker: ' + route);
          assert(html.includes('<button id="roi-calculate" type="submit" disabled>'), 'Baseline button remains disabled before runtime initialization: ' + route);
          for (const input of html.match(/<input\b[^>]*>/g) || []) {
            assert(!/\bname\s*=/i.test(input), 'Baseline controls cannot transmit through native form submission: ' + route);
          }
          const reviewed = baselineRenderer.page(locale);
          assert.equal((html.match(/\bid="ops-form"/g) || []).length, 1, 'Unique baseline form: ' + route);
          assert.equal((html.match(/\bid="ops-copy"/g) || []).length, 1, 'Unique baseline runtime copy: ' + route);
          assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Unique baseline heading: ' + route);
          const fragments = [
            ['form', /<form\b[^>]*\sid="ops-form"(?:\s|>)[\s\S]*?<\/form>/],
            ['runtime copy', /<script id="ops-copy" type="application\/json">[\s\S]*?<\/script>/],
            ['runtime loader', /<script src="\/assets\/js\/operational-tools\.js"[^>]*>[\s\S]*?<\/script>/],
            ['heading and introduction', /<section class="roi-hero">[\s\S]*?<\/section>/],
            ['method and example', /<section class="card"><h2>[\s\S]*?<\/section>/],
            ['result region', /<section class="card" aria-labelledby="roi-result-title">[\s\S]*?<\/section>/],
            ['JavaScript fallback', /<noscript>[\s\S]*?<\/noscript>/]
          ];
          for (const [name, pattern] of fragments) {
            const expected = reviewed.match(pattern);
            const served = html.match(new RegExp(pattern.source, 'g')) || [];
            assert(expected, 'Reviewed baseline fragment exists: ' + name);
            assert.equal(served.length, 1, 'Unique served baseline fragment: ' + name + ' ' + route);
            assert.equal(served[0], expected[0], 'Reviewed baseline ' + name + ': ' + route);
          }
          for (const [, href] of reviewed.matchAll(/href="(\/[^"]*)"/g)) {
            assert(html.includes('href="' + href + '"'), 'Baseline navigation preserved: ' + route + ' -> ' + href);
          }
        }
        assert(html.includes('id="ops-form"'), 'Interactive form: ' + route);
        assert(html.includes('src="/assets/js/operational-tools.js"'), 'Runtime dependency: ' + route);
        const expectedControls = slug === 'roi-calc/' ? 2 : slug === 'sla-calculator/' ? 5 : 10;
        const inputType = slug === 'ai-governance-checklist/' ? 'checkbox' : 'number';
        assert.equal((html.match(new RegExp('type="' + inputType + '"', 'g')) || []).length, expectedControls, 'Complete controls: ' + route);
      }
    }
    const html = fs.readFileSync(disk(out, home(locale)), 'utf8');
    assert.equal((html.match(/<html\b[^>]*\blang=["']([^"']+)["']/i) || [])[1], copy[locale].lang, 'Homepage locale ' + locale);
    assert.equal((html.match(/<!--operational-tools:start-->/g) || []).length, 1, 'One homepage promotion: ' + locale);
    assert(html.includes('data-operational-promotion="' + version + '"'), 'Current homepage promotion: ' + locale);
  }
  // The operational renderer shares these routes with the FinOps release.
  // A valid calculator still fails publication if it loses its reciprocal promotion.
  for (const locale of locales) {
    for (const slug of slugs) {
      const route = prefix(locale) + slug + '/';
      const html = fs.readFileSync(disk(out, route), 'utf8');
      assert.equal((html.match(/<!--finops-scenario:start-->/g) || []).length, 1, 'One FinOps promotion: ' + route);
      assert.equal((html.match(/data-finops-promotion="2026-10-09-finops-scenario-v1"/g) || []).length, 1, 'Current FinOps promotion: ' + route);
    }
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

module.exports = {verifyArtifact};
if (require.main === module) {
  assert(process.argv.length === 3, 'Supply the assembled publication directory');
  console.log('PASS operational publication artifact: ' + verifyArtifact(process.argv[2]) + ' pages.');
}
