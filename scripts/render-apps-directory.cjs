'use strict';
// One translated catalog model renders the five existing public entry routes.
const fs = require('node:fs');
const path = require('node:path');
const data = require('../_data/apps-directory.json');
const locales = ['en','pt','es','fr','de'];
const origin = 'https://ziontechgroup.com';
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const prefix = l => l === 'en' ? '/' : `/${l}/`;
const catalog = l => `${prefix(l)}apps/`;
const home = l => l === 'pt' ? '/' : `/${l}/`;
const operationsGuide = l => '/apps/operations-reliability-ai-2026'+(l==='en'?'':'-'+l)+'.html';
const network = (l,slug) => `/zion-app-network/${slug}${l === 'en' ? '' : l === 'pt' ? '-pt-br' : '-'+l}.html`;
// The existing Pilot Planner uses a Portuguese root and nested locale paths.
const route = (l,r) => r.id === 'pilot' ? '/automation-pilot-planner/'+(l==='pt'?'':l+'/') : r.location === 'network' ? network(l,r.slug) : prefix(l)+r.slug;
const byId = id => data.resources.find(r => r.id === id);
const link = (href,label,attrs='') => `<a href="${escape(href)}"${attrs}>${escape(label)}</a>`;
function render(l) {
  if (!locales.includes(l)) throw new Error('Unknown catalog locale');
  const c=data.locales[l], target=catalog(l), catName=id=>c.categories[data.categories.indexOf(id)];
  const alternatives=locales.map(k=>`<link rel="alternate" hreflang="${data.locales[k].lang}" href="${origin+catalog(k)}">`).join('\n');
  const languages=locales.map(k=>link(catalog(k),data.locales[k].name,` lang="${data.locales[k].lang}" hreflang="${data.locales[k].lang}" data-catalog-language${k===l?' aria-current="page"':''}`)).join('');
  const cards=data.resources.map(r=>{
    const t=r.text[l], next=byId(r.related);
    return `<article class="catalog-card" id="resource-${r.id}" data-resource="${r.id}" data-category="${r.category}">
<div class="catalog-card-meta"><span>${escape(catName(r.category))}</span><span class="catalog-kind">${escape(c[r.kind])}</span></div>
<h3>${link(route(l,r),t.title)}</h3><p>${escape(t.description)}</p>
<div class="catalog-card-links">${link(route(l,r),c.open,' class="catalog-open"')}<span>${escape(c.related)}: ${link(route(l,next),next.text[l].title)}</span></div></article>`;
  }).join('\n');
  const workflows=c.workflows.map((w,i)=>`<article class="catalog-workflow"><span class="catalog-step">0${i+1}</span><h3>${escape(w[0])}</h3><p>${escape(w[1])}</p><ol>${w[2].map(id=>{const r=byId(id);return `<li>${link(route(l,r),r.text[l].title)}</li>`;}).join('')}</ol></article>`).join('\n');
  const count=c.count.replace('{count}',data.resources.length).replace('{total}',data.resources.length);
  const schema=JSON.stringify({'@context':'https://schema.org','@type':'CollectionPage',name:c.eyebrow,description:c.description,url:origin+target,inLanguage:c.lang,mainEntity:{'@type':'ItemList',itemListElement:data.resources.map((r,i)=>({'@type':'ListItem',position:i+1,name:r.text[l].title,url:origin+route(l,r)}))}}).replace(/</g,'\\u003c');
  return `<!doctype html>
<html lang="${c.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(c.catalog)} — Zion Tech Group</title><meta name="description" content="${escape(c.description)}"><meta name="robots" content="index,follow">
<link rel="canonical" href="${origin+target}">
${alternatives}
<link rel="alternate" hreflang="x-default" href="${origin+catalog('en')}">
<meta property="og:title" content="${escape(c.catalog)} — Zion Tech Group"><meta property="og:description" content="${escape(c.description)}"><meta property="og:url" content="${origin+target}"><meta property="og:type" content="website">
<link rel="stylesheet" href="/assets/css/apps-directory.css"><script src="/assets/js/apps-directory.js" defer></script>
<script type="application/ld+json">${schema}</script></head>
<body data-apps-directory="${data.release}" data-locale="${l}">
<a class="catalog-skip" href="#resources">${escape(c.skip)}</a>
<header class="catalog-header"><div class="catalog-wrap catalog-top"><a class="catalog-brand" href="${home(l)}">Zion Tech Group<span>Apps Network</span></a><nav class="catalog-primary" aria-label="${escape(c.catalog)}">${link(home(l),c.home)}${link(prefix(l)+'discovery/',c.discovery)}${link('/zion-app-network/directory-'+l+'.html',c.network)}</nav></div>
<nav class="catalog-wrap catalog-languages" aria-label="${escape(c.languages)}">${languages}</nav></header>
<main class="catalog-wrap" id="main">
<section class="catalog-hero" aria-labelledby="catalog-title"><p class="catalog-eyebrow">${escape(c.eyebrow)}</p><h1 id="catalog-title">${escape(c.title)}</h1><p class="catalog-intro">${escape(c.intro)}</p><div class="catalog-actions">${link('#resources',c.browse,' class="catalog-button"')}${link(network(l,'app-network-start-here-2026'),c.start,' class="catalog-button secondary"')}</div></section>
<section class="catalog-library" id="resources" tabindex="-1" aria-labelledby="resources-title"><div class="catalog-section-heading"><h2 id="resources-title">${escape(c.catalog)}</h2><p id="resource-count" role="status" aria-live="polite" aria-atomic="true" data-pattern="${escape(c.count)}">${escape(count)}</p></div>
<div class="catalog-controls" id="catalog-controls" hidden><label for="catalog-search">${escape(c.search)}</label><div class="catalog-search-row"><input type="search" id="catalog-search" placeholder="${escape(c.placeholder)}" maxlength="200" autocomplete="off"><button type="button" id="catalog-clear">${escape(c.clear)}</button></div><div class="catalog-filters" role="group" aria-label="${escape(c.browse)}"><button type="button" data-filter="all" aria-pressed="true">${escape(c.all)}</button>${data.categories.map(id=>`<button type="button" data-filter="${id}" aria-pressed="false">${escape(catName(id))}</button>`).join('')}</div></div>
<noscript><p class="catalog-note">${escape(c.noscript)}</p></noscript>
<p class="catalog-empty" id="catalog-empty" hidden>${escape(c.empty)}</p><div class="catalog-grid" id="catalog-grid">${cards}</div></section>
<section class="catalog-section" aria-labelledby="workflows-title"><h2 id="workflows-title">${escape(c.workflowTitle)}</h2><p class="catalog-intro">${escape(c.workflowIntro)}</p><div class="catalog-workflows">${workflows}</div></section>
<aside class="catalog-capability" aria-labelledby="capability-title"><h2 id="capability-title">${escape(c.capabilityTitle)}</h2><p>${escape(c.capabilityText)}</p>${link(route(l,byId('verification')),byId('verification').text[l].title)}</aside>
<section class="catalog-section catalog-archive" aria-labelledby="archive-title"><h2 id="archive-title">${escape(c.archive)}</h2><p>${escape(c.archiveText)}</p><div class="catalog-actions">${link(network(l,'catalog-navigation'),c.collections,' class="catalog-button secondary"')}${link('/apps/content-hub.html',c.fullCatalog,' class="catalog-button secondary"')}${link('/apps/network.html',c.networkMap,' class="catalog-button secondary"')}${link(operationsGuide(l),c.operationsGuide,' class="catalog-button secondary"')}${link('https://github.com/Zion-support',c.source,' class="catalog-button secondary"')}</div></section>
</main><footer class="catalog-footer"><div class="catalog-wrap"><p>${escape(c.footer)}</p><nav aria-label="${escape(c.catalog)}">${link(catalog(l),c.catalog)}${link('/zion-app-network/directory-'+l+'.html',c.network)}${link(home(l),c.home)}</nav><p>Zion Tech Group</p></div></footer></body></html>\n`;
}
function run(root=path.join(__dirname,'../public')) {
  for(const l of locales){const file=path.join(root,catalog(l).slice(1),'index.html');fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,render(l));}
  console.log(`Rendered ${locales.length} catalogs with ${data.resources.length} resources each.`);
}
module.exports={data,locales,prefix,catalog,home,network,route,render,run};
if(require.main===module)run(process.argv[2]);
