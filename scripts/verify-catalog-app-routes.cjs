'use strict';

// Catalog /apps/ links belong to this artifact. Sibling repository roots such as
// /zion-app-network/ and /agent-brief/ deliberately remain outside this guard.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const requiredRoutes = require('./render-linked-app-routes.cjs').routes;
const origin = 'https://ziontechgroup.com';
const catalogs = ['apps/index.html', ...['pt', 'es', 'fr', 'de'].map(locale => locale + '/apps/index.html')];

function links(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)]
    .map(match => (match[1] ?? match[2] ?? match[3]).replace(/&amp;/gi, '&').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))));
}

function verify(output = 'out') {
  const out = path.resolve(output), checked = new Set(), missing = [];
  assert(fs.existsSync(out) && fs.statSync(out).isDirectory(), 'Missing final Pages artifact');
  function check(pathname, source) {
    let rel = decodeURIComponent(pathname).replace(/^\//, '');
    let target = path.resolve(out, rel);
    assert(target.startsWith(out + path.sep), 'App route escapes artifact: ' + pathname);
    if (pathname.endsWith('/') || (fs.existsSync(target) && fs.statSync(target).isDirectory())) {
      rel = path.join(rel, 'index.html');
      target = path.join(target, 'index.html');
    }
    checked.add(pathname);
    if (!fs.existsSync(target) || !fs.statSync(target).isFile() || fs.statSync(target).size === 0) {
      missing.push(source + ' → ' + pathname);
    }
  }
  for (const catalog of catalogs) {
    const file = path.join(out, catalog);
    assert(fs.existsSync(file) && fs.statSync(file).isFile(), 'Missing catalog: ' + catalog);
    for (const href of links(fs.readFileSync(file, 'utf8'))) {
      const url = new URL(href, origin + '/' + catalog.replace(/index\.html$/, ''));
      if (!['http:', 'https:'].includes(url.protocol) || url.host !== 'ziontechgroup.com') continue;
      if (!/^\/(?:pt\/|es\/|fr\/|de\/)?apps(?:\/|$)/.test(url.pathname)) continue;
      check(url.pathname, catalog);
    }
  }
  // The released guides and homepages also link these families. A catalog-only
  // scan would miss their disappearance, so retain the complete staging contract.
  for (const route of requiredRoutes) check('/' + route.path, 'Required guide');
  assert.equal(missing.length, 0, 'Missing catalog app routes in final Pages artifact:\n' + missing.join('\n'));
  return {catalogs: catalogs.length, routes: checked.size};
}

module.exports = {catalogs, links, verify};
if (require.main === module) {
  const result = verify(process.argv[2] || 'out');
  console.log('PASS catalog app routes and required guides: ' + result.routes + ' unique destinations; ' + result.catalogs + ' catalogs.');
}
