'use strict';
// The five editorial guide pages share the catalog shell. No account or form action.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const C = require('../content/app-verification-guide.json');
const RELEASE = 'app-verification-guide-2026-10-30-v2';
const L = ['en', 'pt', 'es', 'fr', 'de'];
const names = {en:'English', pt:'Português', es:'Español', fr:'Français', de:'Deutsch'};
const prefix = l => l === 'en' ? '/' : '/' + l + '/';
const route = l => prefix(l) + 'apps/app-verification-guide.html';
const home = l => l === 'pt' ? '/' : '/' + l + '/';
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const link = (url, label, attrs = '') => '<a href="' + url + '"' + attrs + '>' + esc(label) + '</a>';
const extensionPattern = /<!--([a-z0-9-]+):start-->[\s\S]*?<!--\1:end-->/gi;
const homeMarker = /<!--verification-guide-home:start-->[\s\S]*?<!--verification-guide-home:end-->/g;
const protectedParts = html => html.match(/<(form|script)\b[\s\S]*?<\/\1\s*>/gi)||[];
const css = `
.verification-guide main{padding-bottom:2rem;min-width:0}.verification-guide .catalog-hero{padding-bottom:28px}
.verification-guide .review-steps{padding-left:1.5rem;max-width:900px}.verification-guide .review-steps li{padding-left:.4rem;margin:1.4rem 0}.verification-guide .review-steps h3{margin-bottom:.5rem}.verification-guide .review-steps p{margin-top:0;color:var(--muted)}
.verification-guide .evidence-record{display:grid;grid-template-columns:minmax(160px,1fr) minmax(0,3fr);gap:0;margin:1.5rem 0}.verification-guide .evidence-record dt,.verification-guide .evidence-record dd{margin:0;padding:14px;border-bottom:1px solid var(--line)}.verification-guide .evidence-record dt{font-weight:750}.verification-guide .evidence-record dd{color:var(--muted)}
.verification-guide .legacy-three,.verification-guide .productivity-incident{margin:24px 0;max-width:100%;background:var(--panel);color:var(--text);border:1px solid var(--line)}
.verification-guide .legacy-three article,.verification-guide .productivity-incident article,.verification-guide .legacy-three .panel,.verification-guide .productivity-incident .panel{background:var(--bg);color:var(--text);border-color:var(--line)}
.verification-guide .legacy-three :is(h2,h3,p),.verification-guide .productivity-incident :is(h2,h3,p){color:inherit}.verification-guide .legacy-three a,.verification-guide .productivity-incident a{color:var(--cyan)}
@media(max-width:600px){.verification-guide .evidence-record{grid-template-columns:1fr}.verification-guide .evidence-record dt{padding-bottom:0;border-bottom:0}.verification-guide .evidence-record dd{padding-top:6px}.verification-guide .legacy-three,.verification-guide .productivity-incident{padding:16px}}
`;
function page(l, extensions = '') {
  assert(C[l], 'Unknown guide locale');
  const c = C[l], p = prefix(l), nav = [home(l), p+'apps/', p+'apps/network.html', p+'discovery/'];
  assert.equal(c.nav.length, 6); assert.equal(c.levels.length, 3); assert.equal(c.checks.length, 5); assert.equal(c.record.length, 5);
  const alternates = L.map(k => `<link rel="alternate" hreflang="${C[k].lang}" href="https://ziontechgroup.com${route(k)}">`).join('\n');
  const primary = nav.map((u,i) => link(u,c.nav[i])).join('');
  const languages = L.map(k => link(route(k),names[k],` lang="${C[k].lang}" hreflang="${C[k].lang}"${k===l?' aria-current="page"':''}`)).join('');
  return `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(c.title)} — Zion Tech Group</title><meta name="description" content="${esc(c.description)}">
<link rel="canonical" href="https://ziontechgroup.com${route(l)}">
${alternates}
<link rel="alternate" hreflang="x-default" href="https://ziontechgroup.com${route('en')}">
<link rel="stylesheet" href="/assets/css/apps-directory.css"><style>${css}</style>
</head>
<body class="verification-guide" data-verification-guide="${RELEASE}">
<a class="catalog-skip" href="#main">${esc(c.nav[4])}</a>
<header class="catalog-header"><div class="catalog-wrap"><div class="catalog-top">${link(home(l),'Zion Tech Group',' class="catalog-brand"')}<nav class="catalog-primary" aria-label="${esc(c.nav[1])}">${primary}</nav></div><nav class="catalog-languages" aria-label="${esc(c.nav[5])}">${languages}</nav></div></header>
<main class="catalog-wrap" id="main" tabindex="-1">
<section class="catalog-hero"><p class="catalog-eyebrow">${esc(c.eyebrow)}</p><h1>${esc(c.title)}</h1><p class="catalog-intro">${esc(c.intro)}</p><div class="catalog-actions">${link(p+'apps/',c.nav[1],' class="catalog-button"')}${link(p+'apps/network.html',c.nav[2],' class="catalog-button secondary"')}</div></section>
<section class="catalog-section" aria-labelledby="readiness-title"><h2 id="readiness-title">${esc(c.levelsTitle)}</h2><div class="catalog-grid">${c.levels.map(([t,d])=>`<article class="catalog-card"><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join('')}</div></section>
<section class="catalog-section" aria-labelledby="checks-title"><h2 id="checks-title">${esc(c.checksTitle)}</h2><ol class="review-steps">${c.checks.map(([t,d])=>`<li><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}</ol></section>
<section class="catalog-section" aria-labelledby="record-title"><h2 id="record-title">${esc(c.recordTitle)}</h2><p>${esc(c.recordIntro)}</p><dl class="evidence-record">${c.record.map(([t,d])=>`<dt>${esc(t)}</dt><dd>${esc(d)}</dd>`).join('')}</dl></section>
<section class="catalog-capability" aria-labelledby="example-title"><h2 id="example-title">${esc(c.exampleTitle)}</h2><p>${esc(c.example)}</p></section>
<section class="catalog-section" aria-labelledby="resources-title"><h2 id="resources-title">${esc(c.resourcesTitle)}</h2><p>${esc(c.resourcesIntro)}</p><nav class="catalog-actions" aria-label="${esc(c.resourcesTitle)}">${link(p+'apps/finops-scenario-estimator.html',c.related[0],' class="catalog-button secondary"')}${link(p+'apps/finops-pilot-guide.html',c.related[1],' class="catalog-button secondary"')}</nav></section>
${extensions}
</main>
<footer class="catalog-footer"><div class="catalog-wrap"><p>${esc(c.footer)}</p><nav aria-label="${esc(c.nav[1])}">${primary}${link('https://github.com/Zion-support/zion-support.github.io/blob/main/content/app-verification-guide.json',c.source)}</nav></div></footer>
</body></html>
`;
}
function promoteHome(before,l) {
  assert.equal((before.match(/<html\b[^>]*\blang=["']([^"']+)["']/i)||[])[1],C[l].lang,'Homepage locale');
  const clean=before.replace(homeMarker,'');
  assert.equal((clean.match(/<!--zion-network-map-home:end-->/g)||[]).length,1,'Existing map promotion');
  assert(!clean.includes('data-verification-guide-home='),'Unknown promotion ownership');
  const block='<!--verification-guide-home:start--><p class="network-map-home-link" data-verification-guide-home="'+RELEASE+'">'+esc(C[l].homePromotion)+' '+link(route(l),C[l].title)+'.</p><!--verification-guide-home:end-->';
  const after=clean.replace('<!--zion-network-map-home:end-->','<!--zion-network-map-home:end-->'+block);
  assert.equal(after.replace(homeMarker,''),clean,'Only the owned homepage paragraph changes');
  assert.deepEqual(protectedParts(after),protectedParts(before),'Homepage form/script preservation');
  return after;
}
function run(root = 'public') {
  const changes = L.map(l => {
    const file = path.join(root, route(l).slice(1));
    assert(fs.existsSync(file), 'Existing guide required: ' + file);
    const before = fs.readFileSync(file, 'utf8');
    assert.equal((before.match(/<html\b[^>]*\blang=["']([^"']+)["']/i)||[])[1], C[l].lang, 'Guide locale');
    assert(!/<(?:form|script)\b/i.test(before), 'Do not overwrite interactive guide content');
    const extensions = (before.match(extensionPattern)||[]).join('\n');
    const after = page(l,extensions);
    for (const block of before.match(extensionPattern)||[]) assert(after.includes(block),'Preserve injected resource block');
    return {file,before,after};
  });
  for(const l of L){
    const file=path.join(root,home(l).slice(1),'index.html');
    const before=fs.readFileSync(file,'utf8'),after=promoteHome(before,l);
    assert.equal(promoteHome(after,l),after,'Homepage promotion idempotence');
    changes.push({file,before,after});
  }
  for (const c of changes) assert.equal(fs.readFileSync(c.file,'utf8'),c.before,'Concurrent guide change');
  for (const c of changes) fs.writeFileSync(c.file,c.after);
  return {release:RELEASE,pages:changes.map(c=>c.file)};
}
module.exports = {C,L,RELEASE,route,home,page,run,css,promoteHome};
if(require.main===module) console.log(JSON.stringify(run(process.argv[2]||'public')));
