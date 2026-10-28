'use strict';
// Merged Release 2026 homepage promotion. Editorial-only; no forms, storage, pricing or AI execution.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const release='merged-release-home-2026-10-19-v1';
const apps=[
 ['Agent Trace Evidence Lab','https://ziontechgroup.com/agent-trace-evidence-lab/'],
 ['Field SLA Acceptance Matrix','https://ziontechgroup.com/field-sla-acceptance-matrix/'],
 ['AI Dependency Blast Radius','https://ziontechgroup.com/ai-dependency-blast-radius/']
];
const copy={
 en:{lang:'en',dir:'en',title:'Evidence before expansion',intro:'Explore the tools merged on 18 October 2026: Agent Trace Evidence Lab, Field SLA Acceptance Matrix and AI Dependency Blast Radius. Publication is not proof of AI functionality; start with free Discovery and one small human-reviewed pilot.',discovery:'Free Discovery',hub:'Network hub',showcase:'Hub v17 showcase',langs:'Languages'},
 pt:{lang:'pt-BR',dir:'',title:'Evidência antes da expansão',intro:'Explore as ferramentas consolidadas em 18 de outubro de 2026: Agent Trace Evidence Lab, Field SLA Acceptance Matrix e AI Dependency Blast Radius. Publicação não prova IA funcional; comece com o Discovery gratuito e um piloto pequeno com revisão humana.',discovery:'Discovery gratuito',hub:'Hub da rede',showcase:'Vitrine Hub v17',langs:'Idiomas'},
 es:{lang:'es',dir:'es',title:'Evidencia antes de la expansión',intro:'Explore las herramientas consolidadas el 18 de octubre de 2026: Agent Trace Evidence Lab, Field SLA Acceptance Matrix y AI Dependency Blast Radius. Publicar no demuestra IA funcional; empiece con Discovery gratuito y un piloto pequeño con revisión humana.',discovery:'Discovery gratuito',hub:'Hub de la red',showcase:'Vitrina Hub v17',langs:'Idiomas'},
 fr:{lang:'fr',dir:'fr',title:"La preuve avant l’expansion",intro:'Explorez les outils consolidés le 18 octobre 2026 : Agent Trace Evidence Lab, Field SLA Acceptance Matrix et AI Dependency Blast Radius. Une publication ne prouve pas une IA fonctionnelle ; commencez par Discovery gratuit et un petit pilote avec revue humaine.',discovery:'Discovery gratuit',hub:'Hub du réseau',showcase:'Vitrine Hub v17',langs:'Langues'},
 de:{lang:'de',dir:'de',title:'Nachweise vor Expansion',intro:'Erkunden Sie die am 18. Oktober 2026 konsolidierten Tools: Agent Trace Evidence Lab, Field SLA Acceptance Matrix und AI Dependency Blast Radius. Veröffentlichung beweist keine funktionierende KI; starten Sie mit kostenlosem Discovery und einem kleinen Piloten mit menschlicher Prüfung.',discovery:'Kostenloses Discovery',hub:'Netzwerk-Hub',showcase:'Hub-v17-Vitrine',langs:'Sprachen'}
};
const order=['en','pt','es','fr','de'];
const home={en:'https://ziontechgroup.com/en/',pt:'https://ziontechgroup.com/',es:'https://ziontechgroup.com/es/',fr:'https://ziontechgroup.com/fr/',de:'https://ziontechgroup.com/de/'};
const discovery={en:'https://ziontechgroup.com/discovery/',pt:'https://ziontechgroup.com/discovery/',es:'https://ziontechgroup.com/es/discovery/',fr:'https://ziontechgroup.com/fr/discovery/',de:'https://ziontechgroup.com/de/discovery/'};
const showcase={en:'https://ziontechgroup.com/zion-app-network/app/network-merged-release-2026-showcase.html',pt:'https://ziontechgroup.com/zion-app-network/app/network-merged-release-2026-showcase-pt.html',es:'https://ziontechgroup.com/zion-app-network/app/network-merged-release-2026-showcase-es.html',fr:'https://ziontechgroup.com/zion-app-network/app/network-merged-release-2026-showcase-fr.html',de:'https://ziontechgroup.com/zion-app-network/app/network-merged-release-2026-showcase-de.html'};
const langName={en:'English',pt:'Português',es:'Español',fr:'Français',de:'Deutsch'};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const wrap=html=>`<!--zion-merged-release-home:start-->${html}<!--zion-merged-release-home:end-->`;
const strip=s=>s.replace(/<!--zion-merged-release-home:start-->[\s\S]*?<!--zion-merged-release-home:end-->/g,'');
const protectedBlocks=s=>s.match(/<(form|script)\b[\s\S]*?<\/\1\s*>/gi)||[];
function section(locale,c){
 const cards=apps.map(([n,u])=>`<article class="card"><h3>${esc(n)}</h3><p><a href="${u}">${esc(n)}</a></p></article>`).join('');
 const langs=order.map(k=>k===locale?`<strong>${esc(langName[k])}</strong>`:`<a href="${home[k]}">${esc(langName[k])}</a>`).join(' · ');
 return wrap(`<section class="section" data-merged-release-home="${release}" aria-labelledby="merged-release-home-title"><div class="wrap"><h2 id="merged-release-home-title">${esc(c.title)}</h2><p class="lead">${esc(c.intro)}</p><div class="cards">${cards}</div><p><a class="btn" href="${discovery[locale]}">${esc(c.discovery)}</a> <a class="btn alt" href="https://ziontechgroup.com/zion-app-network/">${esc(c.hub)}</a> <a class="btn alt" href="${showcase[locale]}">${esc(c.showcase)}</a></p><nav aria-label="${esc(c.langs)}">${langs}</nav></div></section>`);
}
function render(root){
 const plans=[];
 for(const locale of order){
  const c=copy[locale];
  const file=path.join(root,c.dir,'index.html');
  assert(fs.existsSync(file),`Missing homepage: ${file}`);
  const before=fs.readFileSync(file,'utf8');
  assert(new RegExp(`<html\\b[^>]*\\blang=["']${c.lang}["']`,'i').test(before),`Wrong lang: ${file}`);
  const clean=strip(before);
  assert(/<\/main>/i.test(clean),`Missing </main>: ${file}`);
  assert.equal((clean.match(/id=["']merged-release-home-title["']/gi)||[]).length,0,`Conflicting merged-release ID: ${file}`);
  const after=clean.replace(/<\/main>/i,section(locale,c)+'</main>');
  assert.deepEqual(protectedBlocks(after),protectedBlocks(before),`Form/script preservation: ${file}`);
  assert.equal((after.match(/<!--zion-merged-release-home:start-->/g)||[]).length,1,`Marker count: ${file}`);
  assert(!/_next\//.test(after),`Next shell marker: ${file}`);
  plans.push({file,after});
 }
 for(const {file,after} of plans){ if(file===path.join(root,'index.html')) assert(Buffer.byteLength(after)<80000,'Homepage >=80KB'); }
 for(const {file,after} of plans) fs.writeFileSync(file,after);
 return {release,pages:plans.length,locales:order};
}
if(require.main===module) console.log(JSON.stringify(render(process.argv[2]||'out')));
module.exports={render,copy,release,apps};
