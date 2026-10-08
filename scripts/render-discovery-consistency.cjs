'use strict';
// Artifact-only consistency checks and localized homepage journeys.
// Questionnaires now share one tested source module; never inject a second submit handler.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=path.resolve(process.argv[2]||'out');
const journey=JSON.parse(fs.readFileSync('content/discovery-journey.json','utf8'));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const explorerCopy={"en":["Explore related apps before a paid project","Search registered tools, follow related links, and keep your pilot small and human-reviewed. Registry membership is not a production-readiness guarantee.","Search the app registry","Connected-app guide"],"pt":["Explore apps relacionados antes de contratar","Pesquise ferramentas registradas, siga links relacionados e mantenha o piloto pequeno com revisão humana. Estar no registro não garante prontidão para produção.","Pesquisar apps registrados","Guia de apps conectados"],"es":["Explore apps relacionados antes de contratar","Busque herramientas registradas, siga enlaces relacionados y mantenga un piloto pequeño con revisión humana. El registro no garantiza preparación para producción.","Buscar apps registrados","Guía de apps conectados"],"fr":["Explorez les applications avant de vous engager","Recherchez des outils répertoriés, suivez les liens associés et gardez un petit pilote avec validation humaine. Le registre ne garantit pas la préparation à la production.","Rechercher les applications","Guide des applications liées"],"de":["Erkunden Sie Apps vor einer Beauftragung","Suchen Sie registrierte Tools, folgen Sie verwandten Links und prüfen Sie einen kleinen Pilot mit menschlicher Freigabe. Registrierung garantiert keine Produktionsreife.","Registrierte Apps suchen","Leitfaden für verknüpfte Apps"]};
const asset=path.join(out,'assets/js/discovery-delivery.js');
assert(fs.existsSync(asset),'Shared Discovery application missing');
const source=fs.readFileSync(asset,'utf8');
assert(source.includes('https://formsubmit.co/ajax/commercial@ziontechgroup.com'),'Delivery endpoint missing');
assert(!source.includes('carlos@ziontechgroup.com'),'Unexpected extra recipient');
for(const locale of ['en','pt','es','fr','de']){
 const rel=locale==='en'?'discovery/index.html':locale+'/discovery/index.html';
 const html=fs.readFileSync(path.join(out,rel),'utf8');
 assert(html.includes('src="/assets/js/discovery-delivery.js"'),rel+' must use shared application');
 assert(!html.includes('const APPMAP='),rel+' has obsolete duplicate application');
 assert(!html.includes('data-discovery-parity'),rel+' has obsolete duplicate submit handler');
 for(const id of ['dform','form-errors','rscore','rbar','rsummary','rapps','rnext','report-text','email-fallback','result','copy-report','rsent','submit-report','download-report'])assert(html.includes('id="'+id+'"'),rel+' missing '+id);
 assert(!html.includes('carlos@ziontechgroup.com'),'Unexpected recipient in '+rel);
 const home=path.join(out,locale==='pt'?'index.html':locale+'/index.html');let page=fs.readFileSync(home,'utf8');
 const c=journey[locale];assert(c&&c.steps.length===3&&c.benefits.length===4);
 if(!page.includes('id="discovery-pilot-journey"')){
  const section='<section class="section section-soft" id="discovery-pilot-journey" data-discovery-parity="2026-10-08"><div class="wrap"><h2>'+esc(c.title)+'</h2><p>'+esc(c.intro)+'</p><ul>'+c.benefits.map(b=>'<li>'+esc(b)+'</li>').join('')+'</ul><ol>'+c.steps.map(b=>'<li>'+esc(b)+'</li>').join('')+'</ol><p><a class="btn" href="'+esc(c.discoveryUrl)+'">'+esc(c.cta)+'</a> · <a href="/apps/">'+esc(c.related)+'</a></p></div></section>';
  assert(page.includes('</main>'),'Homepage insertion anchor missing');page=page.replace('</main>',section+'\n</main>');fs.writeFileSync(home,page);
 }
 const t=explorerCopy[locale];
 const promo='<!--registry-path:start--><section class="section section-soft" id="registry-explorer-path" data-registry-path="2026-10-08"><div class="wrap"><h2>'+esc(t[0])+'</h2><p>'+esc(t[1])+'</p><p><a class="btn" href="https://ziontechgroup.com/zion-network/registry-explorer.html">'+esc(t[2])+'</a> · <a href="https://ziontechgroup.com/zion-network/discovery-navigation-guide.html">'+esc(t[3])+'</a> · <a href="'+esc(c.discoveryUrl)+'">'+esc(c.cta)+'</a></p></div></section><!--registry-path:end-->';
 if(page.includes('<!--registry-path:start-->')){
  assert((page.match(/<!--registry-path:start-->/g)||[]).length===1,'Duplicate registry promotion');
  assert(page.includes('<!--registry-path:end-->'),'Registry promotion closing marker missing');
  page=page.replace(/<!--registry-path:start-->[\s\S]*?<!--registry-path:end-->/,promo);
 }else{
  assert(page.includes('</main>'),'Homepage insertion anchor missing');
  page=page.replace('</main>',promo+'\n</main>');
 }
 fs.writeFileSync(home,page);
}
console.log('Preserved five shared-module questionnaires and five localized homepage journeys. No email sent.');
