'use strict';
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {render} = require('./render-legacy-service-aliases.cjs');
const aliases = require('../content/legacy-service-aliases.json');

test('legacy URLs resolve to the current catalog and leave the sitemap', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-aliases-'));
  t.after(() => {
    assert.equal(path.dirname(path.resolve(root)), path.resolve(os.tmpdir()));
    assert(path.basename(root).startsWith('zion-aliases-'));
    fs.rmSync(root, {recursive: true, force: true});
  });
  fs.mkdirSync(path.join(root, 'services'));
  fs.writeFileSync(path.join(root, 'services/index.html'), '<h1>Current services</h1>');
  const legacy = aliases.map(a => `<url><loc>https://ziontechgroup.com/services/${a.slug}/</loc></url>`).join('');
  const retained = '<url><loc>https://ziontechgroup.com/services/</loc></url>';
  fs.writeFileSync(path.join(root, 'sitemap-1.xml'), '<urlset>' + legacy + retained + '</urlset>');
  assert.deepEqual(render(root), {aliases: 8, removedSitemapEntries: 8});
  assert(fs.readFileSync(path.join(root, 'sitemap-1.xml'), 'utf8').includes(retained));
  for (const {slug} of aliases) {
    const html = fs.readFileSync(path.join(root, 'services', slug, 'index.html'), 'utf8');
    assert(html.includes('content="0; url=/services/"'));
    assert(html.includes('href="https://ziontechgroup.com/services/"'));
    assert(html.includes('noindex, follow'));
    assert(!fs.readFileSync(path.join(root, 'sitemap-1.xml'), 'utf8').includes(slug));
  }
  assert.deepEqual(render(root), {aliases: 8, removedSitemapEntries: 0});
});
