'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const crypto = require('node:crypto');
const {run, GUIDE, MAP, CATALOG, LANG, LOCALES, protectedParts} = require('./reconcile-review-field-evidence.cjs');
const origin = 'https://ziontechgroup.com';

function put(root, route, content) {
  const file = path.join(root, route.slice(1) + (route.endsWith('/') ? 'index.html' : ''));
  fs.mkdirSync(path.dirname(file), {recursive:true});
  fs.writeFileSync(file, content);
  return file;
}
function get(root, route) { return fs.readFileSync(path.join(root, route.slice(1) + (route.endsWith('/') ? 'index.html' : '')), 'utf8'); }
function html(lang, main='Example', extra='') {return '<!doctype html><html lang="' + lang + '"><head><title>Fixture</title></head><body><main>' + main + '</main>' + extra + '</body></html>';}
function guide(locale) {
  const alternatives = [...LOCALES, 'x-default'].map(code => '<link rel="alternate" hreflang="' + (code === 'x-default' ? 'x-default' : LANG[code]) + '" href="' + origin + GUIDE(code === 'x-default' ? 'en' : code) + '">').join('');
  const nav = LOCALES.map(code => '<a href="' + GUIDE(code) + '">' + code + '</a>').join('');
  const roi = (locale === 'en' ? '/' : '/' + locale + '/') + 'roi-calc/';
  const links = ['/apps/supplier-quote-evidence-workbench.html', '/sla-calculator/', '/automation-pilot-planner/', roi].map(url => '<a href="' + url + '">' + url + '</a>').join('');
  return '<!doctype html><html lang="' + LANG[locale] + '"><head><link rel="canonical" href="' + origin + GUIDE(locale) + '">' + alternatives + '</head><body data-field-evidence-release="2026-10-09"><main><h1>Guide</h1><nav>' + nav + '</nav>' + links + '</main></body></html>';
}
function setup() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-publication-review-'));
  for (const l of LOCALES) {
    put(root, GUIDE(l), guide(l));
    put(root, CATALOG(l), html(LANG[l]));
    put(root, MAP(l), html(LANG[l]));
    if (l !== 'en') {
      put(root, '/' + l + '/', html(LANG[l], 'Existing', '<script>const unchanged = true;</script>'));
    }
    if (l !== 'en' && l !== 'pt') {
      put(root, '/' + l + '/discovery/', html(LANG[l]));
    }
  }
  put(root, '/', html('en', 'Existing', '<form id="old-form"><input name="old"></form><script>const unchanged = true;</script>').replace('<html lang="en">','<html lang="en" data-homepage="recovered-2026-03-19" data-published="2026-09-05T14:03Z">'));
  put(root, '/en/', html('en'));
  put(root, '/discovery/', html('pt-BR', '<form><input name="current"></form>'));
  put(root, '/pt/discovery/', html('pt-BR'));
  for (const u of ['/apps/supplier-quote-evidence-workbench.html', '/sla-calculator/', '/roi-calc/', '/automation-pilot-planner/']) {
    put(root, u, html('en', '<form id="current-tool"><button>calculate</button></form>', '<script>const preserveMe = true;</script>'));
  }
  return root;
}
function snapshot(root) {
  const result = [];
  function recurse(dir) {
    for (const item of fs.readdirSync(dir, {withFileTypes:true})) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        recurse(full);
      }
      else {
        result.push([path.relative(root, full), crypto.createHash('sha256').update(fs.readFileSync(full)).digest('hex')]);
      }
    }
  }
  recurse(root);
  return result.sort((a,b)=>a[0].localeCompare(b[0]));
}
test('real assembly review: complete guide aliases, reciprocal links, no form mutation, byte-idempotence and honest blockers', () => {
  const root = setup();
  try {
    const originals = ['/','/en/','/pt/','/es/','/fr/','/de/','/discovery/','/pt/discovery/','/es/discovery/','/fr/discovery/','/de/discovery/',
      '/apps/supplier-quote-evidence-workbench.html', '/sla-calculator/', '/roi-calc/', '/automation-pilot-planner/'].map(route=>[route,protectedParts(get(root,route))]);
    const report = run(root);
    assert.equal(report.aliases.length,4);
    assert.equal(report.homepages.length,6);
    assert(report.blockers.some(line=>line.includes('/en/discovery/')));
    assert(report.blockers.some(line=>line.includes('/fr/discovery/')));
    for (const l of LOCALES.filter(x=>x!=='en')) {
      assert.equal(get(root,'/'+l+'/apps/field-service-evidence-guide.html'), get(root,GUIDE(l)));
    }
    for (const [route, parts] of originals) {
      assert.deepEqual(protectedParts(get(root,route)),parts,'Protected original changed: '+route);
    }
    for (const route of ['/','/en/','/pt/','/es/','/fr/','/de/']) {
      assert.equal((get(root,route).match(/<!--field-evidence-locales:start-->/g)||[]).length,1);
    }
    for (const url of ['/roi-calc/', '/sla-calculator/', '/automation-pilot-planner/']) {
      for (const l of LOCALES) {
        assert(get(root,url).includes('href="'+GUIDE(l)+'"'));
      }
    }
    const first = snapshot(root);
    assert.deepEqual(run(root).blockers,report.blockers);
    assert.deepEqual(snapshot(root),first,'Review transform is not byte-idempotent');
  } finally {fs.rmSync(root,{recursive:true,force:true});}
});
test('reject wrong-language ROI target before modifying any files',()=>{
  const root=setup();try {
    put(root, GUIDE('fr'), guide('fr').replace('href="/fr/roi-calc/"','href="/roi-calc/"'));
    const before=snapshot(root);
    assert.throws(()=>run(root),/Wrong locale ROI link/);
    assert.deepEqual(snapshot(root),before);
  } finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('reject duplicate homepage ownership markers and leave original output untouched',()=>{
  const root=setup();try {
    put(root, '/', get(root,'/').replace('</main>','<!--field-evidence-locales:start-->one<!--field-evidence-locales:end--><!--field-evidence-locales:start-->two<!--field-evidence-locales:end--></main>'));
    const before=snapshot(root);
    assert.throws(()=>run(root),/duplicate or unpaired owned block/i);
    assert.deepEqual(snapshot(root),before);
  } finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('reject symlink alias instead of overwriting it',()=>{
  const root=setup();try {
    const alias=path.join(root,'pt/apps/field-service-evidence-guide.html');
    fs.symlinkSync(path.join(root,'index.html'),alias);
    assert.throws(()=>run(root),/symlink|Unsafe existing destination/i);
  } finally{fs.rmSync(root,{recursive:true,force:true});}
});

test('reject mislabeled data-lang without a real html lang attribute',()=>{
  const root=setup();try {
    put(root,'/',get(root,'/').replace(/<html\b[^>]*>/,'<html data-lang="en" lang="pt-BR">'));
    const before=snapshot(root);
    assert.throws(()=>run(root),/Homepage language mismatch/);
    assert.deepEqual(snapshot(root),before);
  } finally {fs.rmSync(root,{recursive:true,force:true});}
});
