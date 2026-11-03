'use strict';
// Run the reviewed historical generators in staging. Only their actual pages
// and runtime are published; temporary homepage scaffolds never leave staging.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const output = path.resolve(process.argv[2] || 'out');
const stage = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-guide-dependencies-'));
const locales = ['en', 'pt', 'es', 'fr', 'de'];
try {
  for (const locale of locales) {
    const home = path.join(stage, locale === 'pt' ? '' : locale, 'index.html');
    fs.mkdirSync(path.dirname(home), {recursive: true});
    fs.writeFileSync(home, '<html lang="' + (locale === 'pt' ? 'pt-BR' : locale) + '"><head></head><body><main></main></body></html>');
  }
  const asset = 'assets/js/communications-planner.js';
  fs.mkdirSync(path.join(stage, 'assets/js'), {recursive: true});
  fs.copyFileSync(path.join('public', asset), path.join(stage, asset));
  for (const script of ['bootstrap-network-evaluation.cjs', 'render-app-experiments.cjs', 'render-communications-apps.cjs']) {
    execFileSync(process.execPath, [path.join(__dirname, script), stage], {stdio: 'pipe'});
  }
  execFileSync(process.execPath, [path.join(__dirname, 'test-app-experiments.cjs'), stage], {stdio: 'pipe'});
  const routes = locales.flatMap(locale => {
    const prefix = locale === 'en' ? '' : locale + '/';
    return ['apps/network-start-here.html', 'apps/app-experiment-planner.html', 'apps/communications-workflow-lab.html',
      ...['smart-call-routing-ai', 'call-intelligence-hub', 'voicemail-triage-ai', 'meeting-intelligence-ai'].map(slug => slug + '/index.html')].map(route => prefix + route);
  });
  let created = 0;
  for (const route of routes) {
    const from = path.join(stage, route), to = path.join(output, route);
    const html = fs.readFileSync(from, 'utf8');
    assert(html.includes('rel="canonical"'), route);
    assert(html.length > 3000 && /<h1\b/.test(html), 'Substantive generated page: ' + route);
    if (fs.existsSync(to)) continue;
    fs.mkdirSync(path.dirname(to), {recursive: true});
    fs.copyFileSync(from, to, fs.constants.COPYFILE_EXCL);
    created++;
  }
  fs.mkdirSync(path.join(output, 'assets/js'), {recursive: true});
  fs.copyFileSync(path.join('public', asset), path.join(output, asset));
  console.log('PASS historical guide dependencies: ' + created + ' pages restored; existing content preserved.');
} finally {
  fs.rmSync(stage, {recursive: true, force: true});
}
