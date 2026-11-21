'use strict';
const fs = require('node:fs');
const path = require('node:path');
const aliases = require('../content/legacy-service-aliases.json');
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function render(output) {
  const root = path.resolve(output);
  if (!fs.existsSync(path.join(root, 'services/index.html'))) throw new Error('Missing destination catalog');
  for (const {slug, title} of aliases) {
    if (!/^[a-z0-9-]+$/.test(slug)) throw new Error('Invalid legacy service slug');
    const dir = path.join(root, 'services', slug);
    fs.mkdirSync(dir, {recursive: true});
    fs.writeFileSync(path.join(dir, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)} — current services · Zion Tech Group</title>
<meta name="description" content="This historical service URL now leads to the current Zion services catalog. Scope and pricing are confirmed through Discovery.">
<link rel="canonical" href="https://ziontechgroup.com/services/">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=/services/">
<style>body{font-family:system-ui;background:#0b1220;color:#e6f0ff;max-width:760px;margin:auto;padding:48px 24px;line-height:1.65}a{color:#c4b5fd}h1{overflow-wrap:anywhere}</style>
</head><body><main><h1>${escape(title)}</h1>
<p>This is a historical service reference. View the current catalog and agree the scope through Discovery.</p>
<p><a href="/services/">Continue to current services</a> · <a href="/book/">Book Free Discovery</a> · <a href="/plans/">View plans</a></p>
</main></body></html>\n`);
  }
  let removed = 0;
  const oldPaths = new Set(aliases.map(a => `/services/${a.slug}`));
  for (const name of fs.readdirSync(root).filter(n => /^sitemap(?:-\d+)?\.xml$/.test(n))) {
    const file = path.join(root, name);
    const original = fs.readFileSync(file, 'utf8');
    const updated = original.replace(/<url\b[^>]*>[\s\S]*?<\/url>/g, block => {
      const match = block.match(/<loc>\s*([^<]+)\s*<\/loc>/);
      if (!match) return block;
      const url = new URL(match[1].trim());
      if (url.hostname === 'ziontechgroup.com' && oldPaths.has(url.pathname.replace(/\/$/, ''))) {
        removed++;
        return '';
      }
      return block;
    });
    if (updated !== original) fs.writeFileSync(file, updated);
  }
  return {aliases: aliases.length, removedSitemapEntries: removed};
}
if (require.main === module) console.log(JSON.stringify(render(process.argv[2] || 'out')));
module.exports = {render};
