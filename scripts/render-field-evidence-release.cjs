'use strict';
/**
 * A deterministic, offline production-assembly transform; never
 * called only from QA. Does not fetch, submit, purchase, book, or dispatch.
 * Missing functional Discovery forms are reported, not fabricated or waived.
 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');

const ORIGIN = 'https://ziontechgroup.com';
const LOCALES = ['en', 'pt', 'es', 'fr', 'de'];
const LANG = {en: 'en', pt: 'pt-BR', es: 'es', fr: 'fr', de: 'de'};
const LABELS = {
  en: ['Field service evidence', 'Use written scope, verified costs and approvals before dispatch.', 'Read evidence guide', 'App network', 'App catalog'],
  pt: ['Evidências para serviços de campo', 'Valide escopo, custos e aprovações por escrito antes do despacho.', 'Ler guia de evidências', 'Rede de apps', 'Catálogo de apps'],
  es: ['Evidencias para servicios de campo', 'Valide alcance, costos y aprobaciones por escrito antes del envío.', 'Leer guía de evidencias', 'Red de aplicaciones', 'Catálogo'],
  fr: ['Preuves pour services sur site', 'Vérifiez le périmètre, les coûts et les accords écrits avant tout déplacement.', 'Lire le guide', 'Réseau des applications', 'Catalogue'],
  de: ['Nachweise für Vor-Ort-Service', 'Prüfen Sie Umfang, Kosten und schriftliche Freigaben vor einem Einsatz.', 'Leitfaden lesen', 'App-Netzwerk', 'Katalog']
};
const GUIDE = locale => '/apps/field-service-evidence-guide' + (locale === 'en' ? '' : '.' + (locale === 'pt' ? 'pt-br' : locale)) + '.html';
const MAP = locale => (locale === 'en' ? '' : '/' + locale) + '/apps/discovery-app-paths.html';
const CATALOG = locale => (locale === 'en' ? '' : '/' + locale) + '/apps/';
const esc = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
const marker = label => ({start: '<!--' + label + ':start-->', end: '<!--' + label + ':end-->'});
const protectedParts = html => html.match(/<(form|script)\b[\s\S]*?<\/\1\s*>/gi) || [];
const digest = html => crypto.createHash('sha256').update(html).digest('hex');
// Accept the real root homepage <html> with its preserved version attributes.
// Only the actual lang attribute is authoritative, not data-lang or inner tags.
function documentLang(html) {
  const match = html.match(/<html\b[^>]*\s+lang\s*=\s*([\"'])([^\"']+)\1/i);
  return match ? match[2] : null;
}

function safePath(root, url) {
  assert(url.startsWith('/') && !url.includes('?') && !url.includes('#'), 'Expected simple absolute route: ' + url);
  const relative = url.slice(1) + (url.endsWith('/') ? 'index.html' : '');
  const filename = path.resolve(root, relative);
  assert(filename.startsWith(root + path.sep), 'Route escapes publication output: ' + url);
  let part = filename;
  while (part !== root) {
    const stat = fs.lstatSync(part, {throwIfNoEntry: false});
    if (stat) assert(!stat.isSymbolicLink(), 'Publication symlink not allowed: ' + part);
    part = path.dirname(part);
  }
  return filename;
}

function owned(html, label, contents, location = 'main') {
  const {start, end} = marker(label);
  const startCount = html.split(start).length - 1, endCount = html.split(end).length - 1;
  assert(startCount === endCount && startCount <= 1, 'Missing/duplicate or unpaired owned block: ' + label);
  let base = html;
  if (startCount) {
    const a = base.indexOf(start), b = base.indexOf(end);
    assert(a >= 0 && b > a, 'Reversed owned block: ' + label);
    base = base.slice(0, a) + base.slice(b + end.length);
  }
  const re = location === 'main' ? /<\/main\s*>/i : /<\/body\s*>/i;
  assert(re.test(base), 'Missing insertion landmark: ' + label);
  const block = start + contents + end;
  const result = base.replace(re, closing => block + closing);
  assert.deepEqual(protectedParts(result), protectedParts(html), 'Protected form/script changed: ' + label);
  assert((result.split(start).length - 1) === 1, 'Owned block must be unique: ' + label);
  return result;
}

function checkGuide(html, locale) {
  const url = GUIDE(locale), lang = LANG[locale];
  assert(documentLang(html) === lang, 'Guide language incorrect: ' + url);
  assert(html.includes('data-field-evidence-release="2026-10-09"'), 'Guide release marker missing: ' + url);
  assert(!/<form\b|<script\b|http-equiv\s*=\s*["']?refresh/i.test(html), 'Guide must remain read-only: ' + url);
  const canonical = [...html.matchAll(/<link\s+rel="canonical"\s+href="([^"]+)"/g)].map(x => x[1]);
  assert.deepEqual(canonical, [ORIGIN + url], 'Wrong/duplicate canonical: ' + url);
  const alternateTags = [...html.matchAll(/<link\s+rel="alternate"[^>]*>/g)].map(x => x[0]);
  assert.equal(alternateTags.length, 6, 'Six alternates required: ' + url);
  for (const other of [...LOCALES, 'x-default']) {
    const key = other === 'x-default' ? 'x-default' : LANG[other];
    const dest = GUIDE(other === 'x-default' ? 'en' : other);
    assert.equal(alternateTags.filter(tag => tag.includes('hreflang="' + key + '"') && tag.includes('href="' + ORIGIN + dest + '"')).length, 1, 'Missing reciprocal hreflang ' + key + ' on ' + url);
  }
  for (const other of LOCALES) assert(html.includes('href="' + GUIDE(other) + '"'), 'Guide language navigation missing: ' + other);
  for (const tool of ['/apps/supplier-quote-evidence-workbench.html', '/sla-calculator/', '/automation-pilot-planner/']) assert(html.includes('href="' + tool + '"'), 'Required field tool missing: ' + tool);
  const roi = (locale === 'en' ? '/' : '/' + locale + '/') + 'roi-calc/';
  assert(html.includes('href="' + roi + '"'), 'Wrong locale ROI link: ' + url);
  for (const other of LOCALES) if (other !== locale) {
    const wrong = (other === 'en' ? '/' : '/' + other + '/') + 'roi-calc/';
    assert(!html.includes('href="' + wrong + '"'), 'Additional wrong locale ROI link: ' + url);
  }
}

function run(output = 'out') {
  const root = path.resolve(output);
  assert(fs.statSync(root).isDirectory() && !fs.lstatSync(root).isSymbolicLink(), 'Missing or linked output root');
  const staged = new Map(), initial = new Map(), blockers = [], canonicalHashes = {};
  function read(url) {
    const file = safePath(root, url);
    if (staged.has(file)) return staged.get(file);
    const stat = fs.lstatSync(file, {throwIfNoEntry: false});
    assert(stat && stat.isFile() && !stat.isSymbolicLink(), 'Required publication page missing: ' + url);
    return fs.readFileSync(file, 'utf8');
  }
  function put(url, value) {
    const file = safePath(root, url);
    if (!initial.has(file)) {
      const existing = fs.lstatSync(file, {throwIfNoEntry: false});
      assert(!existing || (existing.isFile() && !existing.isSymbolicLink()), 'Unsafe existing destination: ' + url);
      initial.set(file, existing ? fs.readFileSync(file, 'utf8') : null);
    }
    staged.set(file, value);
  }

  for (const locale of LOCALES) {
    const html = read(GUIDE(locale));
    checkGuide(html, locale);
    canonicalHashes[locale] = digest(html);
  }
  for (const locale of LOCALES.filter(x => x !== 'en')) {
    const alias = '/' + locale + '/apps/field-service-evidence-guide.html';
    put(alias, read(GUIDE(locale)));
  }

  // Root and /en/ remain genuine English homepages; /pt/ is Portuguese.
  const homes = [{url:'/', locale:'en'}, {url:'/en/', locale:'en'}, ...LOCALES.filter(l => l !== 'en').map(locale => ({url:'/' + locale + '/', locale}))];
  for (const {url, locale} of homes) {
    const label = LABELS[locale];
    let html = read(url);
    assert(documentLang(html) === LANG[locale], 'Homepage language mismatch: ' + url);
    const block = '<section class="card" lang="' + LANG[locale] + '" data-field-evidence-home="2026-11-24">' +
      '<h2>' + esc(label[0]) + '</h2><p>' + esc(label[1]) + '</p><p>' +
      '<a href="' + GUIDE(locale) + '">' + esc(label[2]) + '</a> · ' +
      '<a href="' + MAP(locale) + '">' + esc(label[3]) + '</a> · ' +
      '<a href="' + CATALOG(locale) + '">' + esc(label[4]) + '</a></p></section>';
    html = owned(html, 'field-evidence-locales', block);
    put(url, html);
  }

  for (const locale of LOCALES) {
    const label = LABELS[locale];
    for (const url of [CATALOG(locale), MAP(locale)]) {
      const html = read(url);
      assert(documentLang(html) === LANG[locale], 'Catalog/map locale mismatch: ' + url);
      const block = '<aside lang="' + LANG[locale] + '" data-field-evidence-reciprocal="2026-11-24"><a href="' + GUIDE(locale) + '">' + esc(label[2]) + '</a> · <a href="' + CATALOG(locale) + '">' + esc(label[4]) + '</a></aside>';
      put(url, owned(html, 'field-evidence-reciprocal', block, 'body'));
    }
  }

  const discovery = [{url:'/discovery/', locale:'pt'}, {url:'/pt/discovery/', locale:'pt'}, ...LOCALES.filter(l => l !== 'pt').map(locale => ({url:'/' + locale + '/discovery/', locale}))];
  for (const {url, locale} of discovery) {
    const file = safePath(root, url);
    if (!fs.existsSync(file)) {blockers.push('Missing localized Discovery route: ' + url); continue;}
    let html = read(url);
    assert(documentLang(html) === LANG[locale], 'Discovery document language mismatch: ' + url);
    if (!/<form\b/i.test(html)) blockers.push('Discovery has no functional form: ' + url);
    const block = '<aside lang="' + LANG[locale] + '" data-field-evidence-return="2026-10-09-v2"><a href="' + GUIDE(locale) + '">' + esc(LABELS[locale][2]) + '</a> · <a href="' + MAP(locale) + '">' + esc(LABELS[locale][3]) + '</a></aside>';
    html = owned(html, 'zion-field-return', block, 'body');
    put(url, html);
  }

  for (const url of ['/apps/supplier-quote-evidence-workbench.html', '/sla-calculator/', '/roi-calc/', '/automation-pilot-planner/']) {
    const html = read(url);
    const links = LOCALES.map(locale => '<a hreflang="' + LANG[locale] + '" href="' + GUIDE(locale) + '">' + esc(LABELS[locale][2]) + ' (' + LANG[locale] + ')</a>').join(' · ');
    put(url, owned(html, 'field-evidence-tools-return', '<aside data-field-evidence-tools-return="2026-11-24">' + links + '</aside>', 'body'));
  }

  const manifest = {version:'2026-11-24-field-evidence-v1', status:'assembled-not-deployment-proof', locales:LOCALES, canonicalHashes,
    aliases:LOCALES.filter(l => l !== 'en').map(locale => ({alias:'/' + locale + '/apps/field-service-evidence-guide.html', canonical:GUIDE(locale)})),
    homepages:homes.map(x => x.url), discoveryRoutes:discovery.map(x => x.url), blockers,
    forms:'unchanged', scripts:'unchanged', remoteActions:'none'};
  put('/apps/field-evidence-publication.json', JSON.stringify(manifest, null, 2) + '\n');

  // Stage and verify before the first write. All site forms/scripts stay intact.
  for (const [file, content] of staged) {
    const previous = initial.get(file);
    if (previous !== null) assert.deepEqual(protectedParts(content), protectedParts(previous), 'Protected HTML changed: ' + file);
    assert(!/<meta\s+http-equiv=["']refresh/i.test(content) || file.endsWith('index.html'), 'Unexpected meta refresh in field review artifact');
  }
  for (const [file, content] of staged) {
    const existing = fs.lstatSync(file, {throwIfNoEntry:false});
    if (initial.get(file) === null) assert(!existing, 'New route appeared after preflight: ' + file);
    else assert(existing && existing.isFile() && !existing.isSymbolicLink() && fs.readFileSync(file, 'utf8') === initial.get(file), 'Artifact modified after preflight: ' + file);
    fs.mkdirSync(path.dirname(file), {recursive:true});
    fs.writeFileSync(file, content, {flag:'w'});
  }
  for (const locale of LOCALES.filter(l => l !== 'en')) {
    const alias = safePath(root, '/' + locale + '/apps/field-service-evidence-guide.html');
    const canonical = safePath(root, GUIDE(locale));
    assert(fs.readFileSync(alias).equals(fs.readFileSync(canonical)), 'Stale field alias: ' + locale);
  }
  return manifest;
}
module.exports = {run, GUIDE, MAP, CATALOG, LANG, LOCALES, owned, checkGuide, protectedParts};
if (require.main === module) {
  try {
    const manifest = run(process.argv[2] || 'out');
    if (manifest.blockers.length) throw new Error(manifest.blockers.join('\n'));
    process.stdout.write('Field evidence assembled: ' + manifest.aliases.length + ' identical aliases, ' + manifest.homepages.length + ' homepage entries, ' + manifest.blockers.length + ' unresolved Discovery issues.\n');
  } catch (error) {
    console.error(error.stack || String(error));
    process.exitCode = 1;
  }
}
