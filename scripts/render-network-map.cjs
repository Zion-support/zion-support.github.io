'use strict';
// Standalone static map renderer. No homepage edits, requests or submissions.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const copy = require('../_data/network-map-locales.json');
const preserved = require('../_data/network-map-preserved-links.json');
const locales = ['en', 'pt', 'es', 'fr', 'de'];
const release = 'network-map-2026-10-30-v1';
const origin = 'https://ziontechgroup.com';
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const prefix = locale => locale === 'en' ? '/' : `/${locale}/`;
const route = locale => `${prefix(locale)}apps/network.html`;
const home = locale => locale === 'pt' ? '/' : `/${locale}/`;
const catalog = locale => `${prefix(locale)}apps/`;
const discovery = locale => `${prefix(locale)}discovery/`;
const directory = locale => `/zion-app-network/directory-${locale}.html`;
const suffix = locale => locale === 'en' ? '' : locale === 'pt' ? '-pt-br' : `-${locale}`;
const network = (locale, slug) => `/zion-app-network/${slug}${suffix(locale)}.html`;
const field = locale => `/apps/field-service-evidence-guide${locale === 'en' ? '' : locale === 'pt' ? '.pt-br' : '.'+locale}.html`;
const guideSlugs = ['app/network-green-energy-education-showcase', 'app-network-batch77-oct04', 'app-network-batch79-oct05', 'app-network-batch80-oct05'];
const taskPaths = locale => [
  [discovery(locale), network(locale, 'app-selection-evidence-scorecard-2026'), `/automation-pilot-planner/${locale === 'pt' ? '' : locale+'/'}`],
  [field(locale), network(locale, 'field-visit-handoff-2026'), network(locale, 'field-service-completion-pack-2026')],
  [`${prefix(locale)}apps/finops-scenario-estimator.html`, `${prefix(locale)}apps/finops-pilot-guide.html`, `${prefix(locale)}apps/app-verification-guide.html`],
  [`${prefix(locale)}ai-incident-response/`, `${prefix(locale)}ai-access-reviewer/`, network(locale, 'app-network-operations-evidence-checklist-2026')]
];
const link = (href, text, attributes='') => `<a href="${escape(href)}"${attributes}>${escape(text)}</a>`;

function validateModel() {
  assert.deepEqual(Object.keys(copy), locales, 'Map locale set changed');
  const keys = Object.keys(copy.en).sort();
  for (const locale of locales) {
    const c = copy[locale];
    assert.deepEqual(Object.keys(c).sort(), keys, `Incomplete map locale ${locale}`);
    assert.equal(c.lang, locale === 'pt' ? 'pt-BR' : locale);
    assert.equal(c.tasks.length, 4); assert.equal(c.guides.length, 4);
    assert.equal(c.steps.length, 3); assert.equal(c.capabilities.length, 3);
    for (const task of c.tasks) assert.equal(task.links.length, 3);
    if (locale !== 'en') {
      assert.notEqual(c.intro, copy.en.intro, `English fallback in ${locale}`);
      for (let i=0;i<4;i++) {
        assert.notEqual(c.tasks[i].description, copy.en.tasks[i].description);
        assert.notEqual(c.guides[i].description, copy.en.guides[i].description);
      }
    }
  }
  const urls = ['repositories','routes','external'].flatMap(key => preserved[key]);
  assert.equal(new Set(urls).size, urls.length, 'Duplicate preserved destination');
  for (const href of urls) {
    const url = new URL(href, origin);
    assert.equal(url.protocol, 'https:', `Unsafe destination ${href}`);
    assert(!url.username && !url.password, 'Credentials must not appear in links');
  }
}

function languageNavigation(locale) {
  return `<nav class="catalog-wrap catalog-languages" aria-label="${escape(copy[locale].languages)}" data-network-map-languages>${locales.map(other => link(route(other), copy[other].name, ` lang="${copy[other].lang}" hreflang="${copy[other].lang}"${other === locale ? ' aria-current="page"' : ''}`)).join('')}</nav>`;
}

function archive(locale, key) {
  const c = copy[locale];
  const items = preserved[key].map(href => {
    const url = new URL(href, origin);
    const label = key === 'repositories' ? url.pathname.split('/').pop() : href;
    return `<li>${link(href, label, ' data-network-preserved')}</li>`;
  }).join('\n');
  return `<details class="network-archive"><summary>${escape(c[key])}</summary>${key === 'external' ? `<p>${escape(c.externalNote)}</p>` : ''}<ul>${items}</ul></details>`;
}

function render(locale) {
  if (!locales.includes(locale)) throw new Error('Unknown map locale');
  const c = copy[locale];
  const paths = taskPaths(locale);
  const tasks = c.tasks.map((task, i) => `<article class="catalog-card" data-network-task="${i}"><span class="catalog-step">0${i+1}</span><h3>${escape(task.title)}</h3><p>${escape(task.description)}</p><ol class="network-task-links">${task.links.map((label,j) => `<li>${link(paths[i][j],label)}</li>`).join('')}</ol></article>`).join('\n');
  const guides = c.guides.map((guide, i) => `<article class="catalog-card" data-network-guide="${guideSlugs[i]}"><h3>${link(network(locale,guideSlugs[i]), guide.title)}</h3><p>${escape(guide.description)}</p><div class="catalog-card-links">${link(network(locale,guideSlugs[i]),c.openGuide,' class="catalog-open"')}</div></article>`).join('\n');
  const alternates = locales.map(other => `<link rel="alternate" hreflang="${copy[other].lang}" href="${origin+route(other)}">`).join('\n');
  const navigation = `<nav class="catalog-primary" aria-label="${escape(c.nav)}">${link(home(locale),c.home)}${link(catalog(locale),c.catalog)}${link(directory(locale),c.directory)}${link(discovery(locale),c.discovery)}</nav>`;
  return `<!doctype html>
<html lang="${c.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(c.title)} — Zion Tech Group</title><meta name="description" content="${escape(c.description)}"><meta name="robots" content="index,follow">
<link rel="canonical" href="${origin+route(locale)}">
${alternates}
<link rel="alternate" hreflang="x-default" href="${origin+route('en')}">
<meta property="og:title" content="${escape(c.title)}"><meta property="og:description" content="${escape(c.description)}"><meta property="og:type" content="website"><meta property="og:url" content="${origin+route(locale)}">
<link rel="stylesheet" href="/assets/css/apps-directory.css">
<style>.network-map-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.network-task-links{padding-left:1.4rem;margin-top:auto}.network-task-links li{margin:.6rem 0}.network-task-links a{display:inline-block;padding:4px 0}.network-archive{margin:14px 0;padding:18px 22px;border:1px solid var(--line);border-radius:12px;background:var(--panel)}.network-archive summary{cursor:pointer;font-weight:700;min-height:32px}.network-archive summary:focus-visible{outline:3px solid #fbbf24;outline-offset:4px}.network-archive ul{columns:2;column-width:24rem;padding-left:1.3rem}.network-archive li{break-inside:avoid;margin:.65rem 0;overflow-wrap:anywhere}.network-evidence li{margin:.7rem 0}.network-map-hero{padding-bottom:24px}@media(max-width:700px){.network-map-grid{grid-template-columns:1fr}.network-archive{padding:16px}.network-archive ul{columns:1}}</style>
</head><body data-network-map="${release}" data-locale="${locale}">
<a class="catalog-skip" href="#main">${escape(c.skip)}</a>
<header class="catalog-header"><div class="catalog-wrap catalog-top"><a class="catalog-brand" href="${home(locale)}">Zion Tech Group<span>${escape(c.eyebrow)}</span></a>${navigation}</div>${languageNavigation(locale)}</header>
<main id="main" class="catalog-wrap" tabindex="-1">
<section class="catalog-hero network-map-hero" aria-labelledby="map-title"><p class="catalog-eyebrow">${escape(c.eyebrow)}</p><h1 id="map-title">${escape(c.title)}</h1><p class="catalog-intro">${escape(c.intro)}</p><div class="catalog-actions">${link('#tasks',c.choose,' class="catalog-button"')}${link(network(locale,'catalog-navigation'),c.collections,' class="catalog-button secondary"')}</div></section>
<section class="catalog-section" id="tasks" aria-labelledby="tasks-title"><h2 id="tasks-title">${escape(c.tasksTitle)}</h2><p class="catalog-intro">${escape(c.tasksIntro)}</p><div class="catalog-grid network-map-grid">${tasks}</div></section>
<section class="catalog-section" aria-labelledby="guides-title"><h2 id="guides-title">${escape(c.guidesTitle)}</h2><p class="catalog-intro">${escape(c.guidesIntro)}</p><div class="catalog-grid network-map-grid">${guides}</div></section>
<section class="catalog-section network-evidence" aria-labelledby="record-title"><h2 id="record-title">${escape(c.stepsTitle)}</h2><ol>${c.steps.map(step => `<li>${escape(step)}</li>`).join('')}</ol>${link(`${prefix(locale)}apps/app-verification-guide.html`,c.verify)}</section>
<aside class="catalog-capability" id="network-capability-note" aria-labelledby="network-capability-title"><h2 id="network-capability-title">${escape(c.capabilityTitle)}</h2><ul>${c.capabilities.map(item => `<li>${escape(item)}</li>`).join('')}</ul></aside>
<section class="catalog-section" aria-labelledby="discovery-title"><h2 id="discovery-title">${escape(c.deliveryTitle)}</h2><p class="catalog-intro">${escape(c.delivery)}</p><div class="catalog-actions">${link(discovery(locale),c.discovery,' class="catalog-button"')}${link(catalog(locale),c.catalog,' class="catalog-button secondary"')}</div></section>
<section class="catalog-section catalog-archive" aria-labelledby="archive-title"><h2 id="archive-title">${escape(c.archiveTitle)}</h2><p>${escape(c.archiveIntro)}</p>${archive(locale,'repositories')}${archive(locale,'routes')}${archive(locale,'external')}</section>
</main><footer class="catalog-footer"><div class="catalog-wrap"><p>${escape(c.footer)}</p><nav aria-label="${escape(c.nav)}">${link(catalog(locale),c.catalog)}${link(directory(locale),c.directory)}${link(home(locale),c.home)}${link('https://github.com/Zion-support/zion-support.github.io/blob/main/scripts/render-network-map.cjs',c.source)}</nav><p>Zion Tech Group</p></div></footer>
</body></html>\n`;
}

function run(root=path.join(__dirname,'../public')) {
  validateModel();
  const pages = [];
  for (const locale of locales) {
    const html = render(locale);
    const file = path.join(root,route(locale).slice(1));
    if (fs.existsSync(file)) assert(!/<form\b/i.test(fs.readFileSync(file,'utf8')), `Refuse to overwrite a form: ${file}`);
    fs.mkdirSync(path.dirname(file),{recursive:true});
    fs.writeFileSync(file,html);
    pages.push({locale:copy[locale].lang,route:route(locale)});
  }
  return pages;
}

module.exports = {copy,preserved,locales,release,origin,escape,prefix,route,home,catalog,discovery,directory,network,guideSlugs,taskPaths,validateModel,render,run};
if (require.main === module) console.log(`Rendered ${run(process.argv[2]).length} translated network maps; existing destinations preserved.`);
