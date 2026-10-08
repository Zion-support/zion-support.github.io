// Render approved Discovery and communications guidance into the assembled static site. No network calls.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = process.cwd();
const out = path.resolve(root, process.argv[2] || 'out');
const content = JSON.parse(fs.readFileSync(path.join(root, 'content/discovery-showcase.json'), 'utf8'));
const playbook = JSON.parse(fs.readFileSync(path.join(root, 'content/communications-playbook.json'), 'utf8'));
const locales = ['en','pt','es','fr','de'];
const apps = [['Smart Call Routing AI','smart-call-routing-ai'],['Call Intelligence Hub','call-intelligence-hub'],['Voicemail Triage AI','voicemail-triage-ai'],['Meeting Intelligence AI','meeting-intelligence-ai']];
const esc = s => String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const route = l => '/apps/discovery-showcase' + (l === 'en' ? '' : '-' + l) + '.html';
const homepage = l => l === 'pt' ? '/' : '/' + l + '/';
const questionnaire = l => l === 'en' ? '/discovery/' : '/' + l + '/discovery/';
const nav = l => locales.map(k => `<a href="${route(k)}" lang="${content[k].lang}"${l===k?' aria-current="page"':''}>${k.toUpperCase()}</a>`).join(' · ');
const cards = l => apps.map(([name,slug],i) => `<article class="card"><h3>${name}</h3><p>${esc(playbook[l].descriptions[i])}</p><p><a href="/${slug}/">${esc(content[l].explore)}</a> · <a href="https://github.com/Zion-support/${slug}">${esc(content[l].source)}</a></p></article>`).join('');
function section(l) {
 const c=content[l], p=playbook[l];
 return `<section class="section section-soft" id="discovery-communications" data-discovery-release="2026-10-08"><div class="wrap"><h2>${esc(c.title)}</h2><p>${esc(c.intro)}</p><p><a class="btn" href="${questionnaire(l)}">${esc(c.cta)}</a> · <a href="${route(l)}">${esc(c.what)}</a></p><h3>${esc(c.what)}</h3><ul>${c.benefits.map(b=>'<li>'+esc(b)+'</li>').join('')}</ul><p>${esc(c.email)}</p><h3>${esc(p.title)}</h3><p>${esc(p.intro)}</p><div class="grid grid-4">${cards(l)}</div><h3>${esc(p.checklistTitle)}</h3><ol>${p.checklist.map(b=>'<li>'+esc(b)+'</li>').join('')}</ol><p>${esc(p.disclosure)}</p><h3>${esc(p.next)}</h3><p><a href="/automation-pilot-planner/">${esc(p.planner)}</a> · <a href="https://github.com/Zion-support/zion-app-network/blob/main/CATALOG-COMMUNICATIONS.md">${esc(p.catalog)}</a></p></div></section>`;
}
const pages=[];
for (const l of locales) {
 const c=content[l], p=playbook[l];
 assert(c && c.benefits.length===6 && c.descriptions.length===4, `Incomplete ${l} Discovery translation`);
 assert(p && p.descriptions.length===4 && p.checklist.length===3, `Incomplete ${l} communications translation`);
 for (const key of ['title','intro','checklistTitle','next','planner','catalog','languages','disclosure']) assert(typeof p[key]==='string' && p[key].trim(), `Missing ${l}.${key}`);
 const input=path.join(out,l==='pt'?'index.html':l+'/index.html');
 const old=fs.readFileSync(input,'utf8');
 assert(old.includes('</main>'), `No main closing tag in ${input}`);
 assert(!old.includes('id="discovery-communications"'), `Duplicate section in ${input}`);
 pages.push([input,old.replace('</main>',section(l)+'\n</main>')]);
 const alternates=locales.map(k=>`<link rel="alternate" hreflang="${content[k].lang}" href="https://ziontechgroup.com${route(k)}">`).join('');
 const html=`<!doctype html><html lang="${c.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(c.title)} | Zion Tech Group</title><meta name="description" content="${esc(c.intro)}"><link rel="canonical" href="https://ziontechgroup.com${route(l)}">${alternates}<link rel="alternate" hreflang="x-default" href="https://ziontechgroup.com${route('en')}"><link rel="stylesheet" href="/assets/css/site.css"><style>nav{display:flex;flex-wrap:wrap;gap:1rem}.showcase{max-width:1100px;margin:auto;padding:1.25rem}.grid-4{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:1rem}a:focus-visible{outline:3px solid #ea580c;outline-offset:3px}</style></head><body><a class="skip" href="#main">${esc(c.skip)}</a><header class="showcase"><nav><a href="${homepage(l)}">${esc(c.home)}</a><a href="/zion-app-network/">${esc(c.network)}</a><a href="https://github.com/Zion-support/zion-app-network/blob/main/CATALOG-COMMUNICATIONS.md">${esc(p.catalog)}</a></nav><nav aria-label="${esc(p.languages)}">${nav(l)}</nav></header><main id="main"><div class="showcase"><h1>${esc(c.title)}</h1></div>${section(l)}<section class="section"><div class="wrap"><h2>${esc(c.safetyTitle)}</h2><p>${esc(c.safety)}</p><p>${esc(c.privacy)}</p></div></section></main><footer class="showcase">© 2026 Zion Tech Group · <a href="mailto:commercial@ziontechgroup.com">commercial@ziontechgroup.com</a></footer></body></html>`;
 pages.push([path.join(out,route(l).slice(1)),html]);
}
for (const [file,html] of pages) {
 assert(!html.includes('DRAFT — not published'));
 fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,html);
}
console.log(`Discovery publication: ${locales.length} translated pages + ${locales.length} homepage sections, with four communications workflows and a three-step validation checklist; no email sent.`);
require('./render-discovery-risk-benefits.cjs');
require('./render-risk-app-translations.cjs');
