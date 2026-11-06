'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(process.argv[2] || 'out');
const families = ['apps/network-learning-paths.html', 'apps/operational-planning-tools.html',
  'roi-calc/index.html', 'sla-calculator/index.html', 'ai-governance-checklist/index.html',
  'apps/finops-scenario-estimator.html', 'apps/finops-pilot-guide.html'];
let checked = 0;
for (const prefix of ['', 'pt/', 'es/', 'fr/', 'de/']) {
  for (const family of families) {
    const relative = prefix + family;
    const html = fs.readFileSync(path.join(root, relative), 'utf8');
    assert(!/http-equiv=["']refresh/i.test(html), 'No redirect substitute: ' + relative);
    assert(!/Coming soon|PLACEHOLDER/.test(html), 'Substantive content: ' + relative);
    for (const [, href] of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
      const url = new URL(href.replace(/&amp;/g, '&'), 'https://ziontechgroup.com/' + relative);
      if (url.origin !== 'https://ziontechgroup.com') continue;
      let target = path.join(root, decodeURIComponent(url.pathname));
      if (url.pathname.endsWith('/')) target = path.join(target, 'index.html');
      assert(fs.existsSync(target), relative + ' links to missing ' + url.pathname);
      checked++;
    }
  }
}
console.log('PASS restored page families: 35 substantive pages; ' + checked + ' internal page/asset references resolve.');
