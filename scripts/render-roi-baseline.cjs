'use strict';

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const copy = JSON.parse(fs.readFileSync(path.join(root, 'content/roi-baseline.json'), 'utf8'));
const common = JSON.parse(fs.readFileSync(path.join(root, 'content/operational-tools.json'), 'utf8'));
const locales = ['en', 'pt', 'es', 'fr', 'de'];
const version = 'roi-baseline-2026-10-30-v1';
const origin = 'https://ziontechgroup.com';
const names = { en: 'English', pt: 'Português', es: 'Español', fr: 'Français', de: 'Deutsch' };
const prefix = locale => locale === 'en' ? '/' : '/' + locale + '/';
const route = locale => prefix(locale) + 'roi-calc/';
const home = locale => locale === 'pt' ? '/' : '/' + locale + '/';
const escape = text => String(text).replace(/[&<>"']/g, value => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[value]);
const relatedPaths = [
  'apps/finops-scenario-estimator.html',
  'apps/finops-pilot-guide.html',
  'apps/network.html',
  'apps/app-verification-guide.html'
];
const styles = `
.roi-hero{padding:12px 0 8px}.roi-eyebrow{font-weight:700;color:#334e72}
.roi-hero h1{font-size:clamp(1.9rem,5vw,3rem);line-height:1.15;max-width:24ch}
.roi-intro{font-size:1.12rem;max-width:70ch}.roi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px;align-items:start}
.roi-grid>*{min-width:0}.roi-grid form,.roi-grid>.card{margin-top:0}.roi-grid h2{margin-top:0}
.roi-note{font-size:.95rem;color:#40516a}.roi-page{overflow-wrap:anywhere}
#ops-result{min-height:92px}#ops-result dt{font-weight:600;color:#40516a}#ops-result dd{font-size:clamp(1.3rem,4vw,1.9rem);font-weight:750;margin:4px 0 16px;color:#172033}
.roi-error:empty{display:none}.roi-error{color:#9b1c20;font-weight:650;margin-top:14px}
.roi-links .card{margin:0}.roi-links h3{margin-top:0}.roi-formula{font-weight:650}
@media print{.roi-links{display:none}.roi-grid{display:block}#ops-result{min-height:0}}
`;

function nav(locale) {
  const c = common[locale];
  return '<nav aria-label="' + escape(c.network) + '">' +
    '<a href="' + home(locale) + '">' + escape(c.home) + '</a>' +
    '<a href="' + prefix(locale) + 'apps/">' + escape(c.network) + '</a>' +
    '<a href="' + prefix(locale) + 'discovery/">' + escape(c.discovery) + '</a>' +
    '<a href="' + prefix(locale) + 'apps/operational-planning-tools.html">' + escape(c.guide) + '</a></nav>';
}

function page(locale) {
  assert(locales.includes(locale), 'Unsupported baseline locale');
  const c = copy[locale], n = common[locale];
  assert.equal(c.labels.length, 2);
  assert.equal(c.outputs.length, 2);
  assert.equal(c.related.length, relatedPaths.length);
  const money = value => new Intl.NumberFormat(n.locale, { style: 'currency', currency: 'USD' }).format(value);
  const example = c.example.replace('{rate}', money(45)).replace('{monthly}', money(1800)).replace('{yearly}', money(21600));
  const runtimeCopy = { locale: n.locale, labels: c.labels, outputs: c.outputs, error: c.error, pending: c.pending };
  const alternates = locales.map(other => '<link rel="alternate" hreflang="' + common[other].lang + '" href="' + origin + route(other) + '">').join('\n') +
    '\n<link rel="alternate" hreflang="x-default" href="' + origin + route('en') + '">';
  const languages = locales.map(other => '<a lang="' + common[other].lang + '" hreflang="' + common[other].lang + '" href="' + route(other) + '"' +
    (other === locale ? ' aria-current="page"' : '') + '>' + names[other] + '</a>').join('');
  const inputs = ['hours', 'rate'].map((id, i) => '<label for="' + id + '">' + escape(c.labels[i]) + '</label>' +
    '<input id="' + id + '" type="number" value="' + [40, 45][i] + '" min="0" max="1000000" step="any" required aria-describedby="roi-field-hint ops-error">').join('\n');
  const related = c.related.map(([title, description], i) => '<article class="card"><h3><a href="' + prefix(locale) + relatedPaths[i] + '">' +
    escape(title) + '</a></h3><p>' + escape(description) + '</p></article>').join('\n');
  return `<!doctype html>
<html lang="${n.lang}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(c.title)} — Zion Tech Group</title>
<meta name="description" content="${escape(c.intro)}">
<link rel="canonical" href="${origin + route(locale)}">
${alternates}
<link rel="stylesheet" href="/assets/css/discovery.css">
<style>${styles}</style>
</head>
<body class="roi-page" data-roi-baseline="${version}">
<a class="skip" href="#main">${escape(n.skip)}</a>
<header>${nav(locale)}<nav aria-label="${escape(c.languageNav)}">${languages}</nav></header>
<main id="main" tabindex="-1">
<section class="roi-hero"><p class="roi-eyebrow">${escape(c.eyebrow)}</p><h1>${escape(c.title)}</h1><p class="roi-intro">${escape(c.intro)}</p></section>
<div class="roi-grid">
<form id="ops-form" data-kind="roi" novalidate aria-labelledby="roi-input-title">
<h2 id="roi-input-title">${escape(c.inputTitle)}</h2><p class="roi-note">${escape(c.inputNote)}</p>
${inputs}
<p class="roi-note" id="roi-field-hint">${escape(c.fieldHint)}</p>
<button id="roi-calculate" type="submit" disabled>${escape(c.calculate)}</button>
<p id="ops-error" class="roi-error" role="alert"></p>
</form>
<section class="card" aria-labelledby="roi-result-title"><h2 id="roi-result-title">${escape(c.resultTitle)}</h2><div id="ops-result" role="status" aria-live="polite" aria-atomic="true"></div><p class="roi-note">${escape(c.privacy)}</p></section>
</div>
<section class="card"><h2>${escape(c.methodTitle)}</h2>${c.method.map(text => '<p class="roi-formula">' + escape(text) + '</p>').join('')}<h3>${escape(c.exampleTitle)}</h3><p>${escape(example)}</p><p>${escape(c.limits)}</p></section>
<section><h2>${escape(c.stepsTitle)}</h2><ol>${c.steps.map(text => '<li>' + escape(text) + '</li>').join('')}</ol></section>
<section class="roi-links"><h2>${escape(c.relatedTitle)}</h2><div class="roi-grid">${related}</div></section>
<noscript><p class="card">${escape(c.noScript)}</p></noscript>
</main>
<footer>${nav(locale)}<p><a href="https://github.com/Zion-support/zion-support.github.io/blob/main/scripts/render-roi-baseline.cjs">${escape(n.source)}</a> · Zion Tech Group</p></footer>
<script id="ops-copy" type="application/json">${JSON.stringify(runtimeCopy).replace(/</g, '\\u003c')}</script>
<script src="/assets/js/operational-tools.js" defer></script>
</body>
</html>
`;
}

function run(output = 'out') {
  const pages = [];
  for (const locale of locales) {
    const pathname = route(locale);
    const file = path.join(output, pathname.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page(locale));
    pages.push(pathname);
  }
  const asset = path.join(output, 'assets/js/operational-tools.js');
  fs.mkdirSync(path.dirname(asset), { recursive: true });
  fs.writeFileSync(asset, fs.readFileSync(path.join(root, 'public/assets/js/operational-tools.js')));
  return { version, pages };
}

module.exports = { run, page, locales, route, version };
if (require.main === module) {
  const result = run(process.argv[2] || 'out');
  console.log('PASS ' + version + ': ' + result.pages.length + ' localized manual-cost baselines; no other pages changed.');
}
