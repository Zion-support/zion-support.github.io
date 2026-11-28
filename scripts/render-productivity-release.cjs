'use strict';
// The production publisher and local QA use the same authored renderers.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const qa = require('./productivity-qa-contract.cjs');
const htmlLanguage = html => (html.match(/<html\b[^>]*\blang=["']([^"']+)["']/i) || [])[1];

function inventoryPlan(out) {
  const file = path.join(out, 'apps/network-publication-coverage.json');
  const before = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  const coverage = before === null ? {
    scope: 'Productivity resource families; existing source editions are counted before rendering.',
    groups: []
  } : JSON.parse(before);
  assert(Array.isArray(coverage.groups), 'Existing scoped coverage inventory');
  for (const slug of qa.S) {
    const route = slug + '/index.html';
    const rows = coverage.groups.filter(group => group.path === route);
    assert(rows.length <= 1, 'Unique coverage row ' + slug);
    if (!rows.length) {
      const available = Object.keys(qa.C).filter(locale => {
        const source = qa.disk(out, qa.route(locale, slug));
        return fs.existsSync(source) && fs.statSync(source).isFile() &&
          htmlLanguage(fs.readFileSync(source, 'utf8')) === qa.C[locale].lang;
      });
      // These pages are authored by the reviewed production renderers; their
      // HTML need not exist in public/ yet. Validate the source editions before
      // recording a truthful pre-render inventory (possibly zero available).
      const sources = [require('./render-legacy-three-locales.cjs'),
        require('./render-productivity-incident-locales.cjs')];
      const owners = sources.filter(source => source.slugs.includes(slug));
      assert.equal(owners.length, 1, 'One authored productivity renderer ' + slug);
      const source = owners[0], index = source.slugs.indexOf(slug);
      assert.equal(typeof source.page, 'function', 'Authored page renderer ' + slug);
      for (const locale of Object.keys(qa.C)) {
        const authored = source.page(locale, index);
        assert.equal(htmlLanguage(authored), qa.C[locale].lang, 'Authored resource locale ' + slug);
        assert(authored.includes('rel="canonical" href="https://ziontechgroup.com' +
          qa.route(locale, slug) + '"'), 'Authored resource canonical ' + slug);
      }
      coverage.groups.push({path: route, available,
        missing: Object.keys(qa.C).filter(locale => !available.includes(locale))});
    }
    assert(coverage.groups.some(group => group.path === route), 'Existing coverage row ' + slug);
  }
  return {file, before, after: JSON.stringify(coverage, null, 2) + '\n'};
}

function preflight(out) {
  qa.contract();
  for (const locale of Object.keys(qa.C)) {
    const html = fs.readFileSync(qa.disk(out, qa.home(locale)), 'utf8');
    assert.equal(htmlLanguage(html), qa.C[locale].lang, 'Homepage locale ' + locale);
    assert.equal((html.match(/<!--zion-network-home:start-->/g) || []).length, 1,
      'Existing network section ' + locale);
    assert(html.includes('id="app-paths-home"') || html.includes("id='app-paths-home'"),
      'Existing app-paths anchor ' + locale);
    const guide = path.join(out, (locale === 'en' ? '' : locale + '/') + 'apps/app-verification-guide.html');
    assert(fs.existsSync(guide), 'Existing verification guide ' + locale);
  }
  const root = path.join(out, 'index.html');
  if (fs.existsSync(root)) {
    assert.equal(htmlLanguage(fs.readFileSync(root, 'utf8')), 'en',
      'Root homepage remains English; Portuguese uses /pt/');
  }
  return inventoryPlan(out);
}

function run(out = 'out') {
  const inventory = preflight(out);
  const root = path.join(out, 'index.html');
  const rootBefore = fs.existsSync(root) ? fs.readFileSync(root, 'utf8') : null;
  const before = Object.fromEntries(Object.keys(qa.C).map(locale => [locale,
    qa.protectedParts(fs.readFileSync(qa.disk(out, qa.home(locale)), 'utf8'))]));
  // Build the production inventory from actual source files after all preflight
  // checks. Successful renderers reconcile only the six families they generate.
  if (inventory.after !== inventory.before) {
    fs.mkdirSync(path.dirname(inventory.file), {recursive: true});
    fs.writeFileSync(inventory.file, inventory.after);
  }
  require('./render-legacy-three-locales.cjs').run(out);
  require('./render-productivity-incident-locales.cjs').run(out);
  require('./render-productivity-workflow-links.cjs').run(out);
  for (const locale of Object.keys(qa.C)) {
    assert.deepEqual(
      qa.protectedParts(fs.readFileSync(qa.disk(out, qa.home(locale)), 'utf8')),
      before[locale], 'Homepage forms/scripts preserved');
  }
  if (rootBefore !== null) {
    assert.equal(fs.readFileSync(root, 'utf8'), rootBefore,
      'Root English homepage must not receive Portuguese content');
  }
  return qa.verify(out);
}

module.exports = {preflight, inventoryPlan, run};
if (require.main === module) {
  const result = run(process.argv[2] || 'out');
  process.stdout.write('PASS reconciled productivity sequence: ' + result.pages.length + ' pages / ' +
    result.links + ' owned links; not whole-network or browser certification.\n');
}
