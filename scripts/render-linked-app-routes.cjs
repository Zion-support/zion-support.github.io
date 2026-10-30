'use strict';

// These reviewed guides were previously generated only by optional release
// scripts. Restore missing routes in every Pages assembly, with public/ winning.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const tickets = require('./render-field-ticket-types.cjs');

const locales = ['en', 'pt', 'es', 'fr', 'de'];
const routes = locales.flatMap(locale => {
  const prefix = locale === 'en' ? '' : locale + '/';
  return [
    {locale, path: 'apps/discovery-showcase' + (locale === 'en' ? '' : '-' + locale) + '.html'},
    {locale, path: prefix + 'apps/field-ticket-types.html'},
    {locale, path: prefix + 'apps/discovery-first-win-guide.html'},
  ];
});

function run(output = 'out') {
  const out = path.resolve(output);
  assert(fs.statSync(out).isDirectory(), 'Missing assembled Pages directory');
  const staged = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-linked-app-routes-'));
  try {
    for (const script of ['render-discovery-showcase.cjs', 'render-first-win-release.cjs']) {
      execFileSync(process.execPath, [path.join(__dirname, script), staged, '--pages-only'], {
        cwd: path.resolve(__dirname, '..'), stdio: 'pipe',
      });
    }
    tickets.run(staged);

    // Validate every generated edition before copying any of them. Existing
    // public pages remain authoritative, including the original English guide.
    for (const route of routes) {
      const html = fs.readFileSync(path.join(staged, route.path), 'utf8');
      const lang = route.locale === 'pt' ? 'pt-BR' : route.locale;
      assert(html.includes('<html lang="' + lang + '">'), 'Guide language: ' + route.path);
      assert.equal((html.match(/<h1\b/gi) || []).length, 1, 'Guide heading: ' + route.path);
      assert(html.includes('rel="canonical" href="https://ziontechgroup.com/' + route.path + '"'), 'Guide canonical: ' + route.path);
      assert.equal((html.match(/rel="alternate"/g) || []).length, 6, 'Guide alternates: ' + route.path);
      assert(!/<(?:form|script|iframe)\b/i.test(html), 'Guide must remain informational: ' + route.path);
    }

    const created = [], preserved = [];
    for (const route of routes) {
      const target = path.join(out, route.path);
      if (fs.existsSync(target)) {
        assert(fs.statSync(target).isFile(), 'Guide route is not a file: ' + route.path);
        preserved.push(route.path);
        continue;
      }
      fs.mkdirSync(path.dirname(target), {recursive: true});
      fs.copyFileSync(path.join(staged, route.path), target, fs.constants.COPYFILE_EXCL);
      created.push(route.path);
    }
    return {created, preserved};
  } finally {
    fs.rmSync(staged, {recursive: true, force: true});
  }
}

module.exports = {locales, routes, run};
if (require.main === module) {
  const result = run(process.argv[2] || 'out');
  console.log('PASS linked app routes: ' + result.created.length + ' restored; ' + result.preserved.length + ' existing pages preserved.');
}
