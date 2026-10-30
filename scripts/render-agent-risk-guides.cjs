'use strict';
// One reviewed content model for the existing article and its four translations.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const C = require('../content/agent-risk-guide.json');
const catalog = require('./render-apps-directory.cjs');
const L = ['en', 'pt', 'es', 'fr', 'de'];
const RELEASE = 'agent-risk-guide-2026-10-30';
const ORIGIN = 'https://ziontechgroup.com';
const NAMES = {en:'English', pt:'Português', es:'Español', fr:'Français', de:'Deutsch'};
const route = l => catalog.prefix(l) + 'blog/enterprise-ai-agent-risk-checklist/';
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const link = (url,label,attrs='') => `<a href="${escape(url)}"${attrs}>${escape(label)}</a>`;
const resourceIds = {discovery:'discovery', verification:'verification', scorecard:'scorecard', pilot:'pilot', finops:'finops', evidence:'evidence'};
const css = `
.agent-risk-guide main{padding-bottom:3rem;min-width:0}.agent-risk-guide .catalog-hero{padding-bottom:24px}
.agent-risk-guide .guide-prose{max-width:80ch}.agent-risk-guide .guide-prose p{color:var(--muted)}
.agent-risk-guide .guide-outline{display:flex;flex-wrap:wrap;gap:12px 24px;margin:24px 0;padding:18px 0;border-block:1px solid var(--line)}
.agent-risk-guide .guide-outline a{color:var(--cyan);font-weight:650}
.agent-risk-guide .risk-checks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.agent-risk-guide .risk-check{padding:24px;border:1px solid var(--line);border-radius:18px;background:var(--panel);min-width:0}
.agent-risk-guide .risk-check h3{margin:0 0 16px}.agent-risk-guide .risk-check dl{margin:0}
.agent-risk-guide .risk-check dt{font-weight:750;margin-top:16px}.agent-risk-guide .risk-check dd{margin:5px 0 0;color:var(--muted);overflow-wrap:anywhere}
.agent-risk-guide .worked-example p{max-width:80ch}.agent-risk-guide .guide-faq{max-width:85ch}
.agent-risk-guide .guide-faq article{padding:18px 0;border-bottom:1px solid var(--line)}.agent-risk-guide .guide-faq h3{margin:0 0 8px}
.agent-risk-guide .catalog-card{min-width:0}.agent-risk-guide a{overflow-wrap:anywhere}
.agent-risk-guide :is(section,h2){scroll-margin-top:24px}
@media(max-width:680px){.agent-risk-guide .risk-checks{grid-template-columns:1fr}.agent-risk-guide .risk-check{padding:18px}.agent-risk-guide .guide-outline{gap:14px}}
`;
function resourceUrl(l,key) {
  assert(Object.hasOwn(resourceIds,key), 'Unknown related resource: '+key);
  const r=catalog.data.resources.find(r=>r.id===resourceIds[key]);
  assert(r, 'Missing catalog resource: '+key);
  return catalog.route(l,r);
}
function section(s) {
  return `<section class="catalog-section" aria-labelledby="${escape(s.id)}"><h2 id="${escape(s.id)}">${escape(s.title)}</h2>${s.intro?`<p class="guide-prose">${escape(s.intro)}</p>`:''}${s.paragraphs?`<div class="guide-prose">${s.paragraphs.map(p=>`<p>${escape(p)}</p>`).join('')}</div>`:''}${s.items?`<div class="catalog-grid">${s.items.map(i=>`<article class="catalog-card"><h3>${escape(i.title)}</h3><p>${escape(i.text)}</p></article>`).join('')}</div>`:''}</section>`;
}
function page(l) {
  assert(L.includes(l), 'Unknown locale');
  const c=C[l], p=catalog.prefix(l);
  const nav=[[catalog.home(l),c.nav.home],[catalog.catalog(l),c.nav.catalog],[p+'apps/network.html',c.nav.map],[resourceUrl(l,'discovery'),c.nav.discovery]];
  const primary=nav.map(([u,t])=>link(u,t)).join('');
  const alternates=L.map(k=>`<link rel="alternate" hreflang="${C[k].lang}" href="${ORIGIN+route(k)}">`).join('\n');
  const languages=L.map(k=>link(route(k),NAMES[k],` lang="${C[k].lang}" hreflang="${C[k].lang}"${k===l?' aria-current="page"':''}`)).join('');
  const schema=JSON.stringify({'@context':'https://schema.org','@graph':[
    {'@type':'Article',headline:c.title,description:c.description,inLanguage:c.lang,url:ORIGIN+route(l),mainEntityOfPage:ORIGIN+route(l),dateModified:'2026-10-30',author:{'@type':'Organization',name:'Zion Tech Group',url:ORIGIN}},
    {'@type':'FAQPage',inLanguage:c.lang,mainEntity:c.faq.items.map(i=>({'@type':'Question',name:i.question,acceptedAnswer:{'@type':'Answer',text:i.answer}}))}
  ]}).replace(/</g,'\\u003c');
  return `<!doctype html>
<html lang="${c.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(c.title)} — Zion Tech Group</title><meta name="description" content="${escape(c.description)}"><meta name="robots" content="index,follow">
<link rel="canonical" href="${ORIGIN+route(l)}">
${alternates}
<link rel="alternate" hreflang="x-default" href="${ORIGIN+route('en')}">
<meta property="og:title" content="${escape(c.title)}"><meta property="og:description" content="${escape(c.description)}"><meta property="og:url" content="${ORIGIN+route(l)}"><meta property="og:type" content="article">
<link rel="stylesheet" href="/assets/css/apps-directory.css"><style>${css}</style><script type="application/ld+json">${schema}</script></head>
<body class="agent-risk-guide" data-agent-risk-guide="${RELEASE}">
<a class="catalog-skip" href="#main">${escape(c.nav.skip)}</a>
<header class="catalog-header"><div class="catalog-wrap"><div class="catalog-top">${link(catalog.home(l),'Zion Tech Group',' class="catalog-brand"')}<nav class="catalog-primary" aria-label="${escape(c.nav.catalog)}">${primary}</nav></div><nav class="catalog-languages" aria-label="${escape(c.nav.language)}">${languages}</nav></div></header>
<main class="catalog-wrap" id="main" tabindex="-1"><span id="conteudo"></span>
<section class="catalog-hero"><p class="catalog-eyebrow">${escape(c.eyebrow)}</p><h1>${escape(c.title)}</h1><p class="catalog-intro">${escape(c.intro)}</p><div class="catalog-actions">${link(resourceUrl(l,'discovery'),c.primaryCta,' class="catalog-button"')}${link(catalog.catalog(l),c.secondaryCta,' class="catalog-button secondary"')}</div></section>
<nav class="guide-outline" aria-label="${escape(c.title)}">${link('#pilot-checks',c.checklist.title)}${link('#worked-example',c.example.title)}${link('#related-resources',c.resources.title)}</nav>
${section(c.sections[0])}${section(c.sections[1])}
<section class="catalog-section" aria-labelledby="pilot-checks"><h2 id="pilot-checks">${escape(c.checklist.title)}</h2><p class="guide-prose">${escape(c.checklist.intro)}</p><div class="risk-checks">${c.checklist.rows.map(r=>`<article class="risk-check"><h3>${escape(r.area)}</h3><dl><dt>${escape(c.checklist.columns[1])}</dt><dd>${escape(r.evidence)}</dd><dt>${escape(c.checklist.columns[2])}</dt><dd>${escape(r.stop)}</dd></dl></article>`).join('')}</div></section>
<section class="catalog-capability worked-example" aria-labelledby="worked-example"><h2 id="worked-example">${escape(c.example.title)}</h2>${['input','expected','missing','decision'].map(k=>`<p>${escape(c.example[k])}</p>`).join('')}</section>
${section(c.sections[2])}
<section class="catalog-section" aria-labelledby="related-resources"><h2 id="related-resources">${escape(c.resources.title)}</h2><p class="guide-prose">${escape(c.resources.intro)}</p><div class="catalog-grid">${c.resources.cards.map(r=>`<article class="catalog-card" data-related-resource="${escape(r.key)}"><h3>${escape(r.title)}</h3><p>${escape(r.text)}</p><div class="catalog-card-links">${link(resourceUrl(l,r.key),r.cta,' class="catalog-open"')}</div></article>`).join('')}</div></section>
<section class="catalog-section guide-faq" aria-labelledby="faq"><h2 id="faq">${escape(c.faq.title)}</h2>${c.faq.items.map(i=>`<article><h3>${escape(i.question)}</h3><p>${escape(i.answer)}</p></article>`).join('')}</section>
</main><footer class="catalog-footer"><div class="catalog-wrap"><p>${escape(c.footer)}</p><nav aria-label="${escape(c.nav.catalog)}">${primary}${link('https://github.com/Zion-support/zion-support.github.io/blob/main/content/agent-risk-guide.json',c.nav.source)}</nav></div></footer></body></html>\n`;
}
function run(root='public') {
  const written=[];
  for(const l of L){const f=path.join(root,route(l).slice(1),'index.html');fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,page(l));written.push(f);}
  return {release:RELEASE,pages:written};
}
module.exports={C,L,RELEASE,route,page,run,resourceUrl};
if(require.main===module)console.log(JSON.stringify(run(process.argv[2]||'public')));
