'use strict';
// Artifact-only enrichment. No API calls, form submissions or email sends.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const out=path.resolve('out'),guide='/apps/discovery-pilot-guide.html',explorer='/apps/registry-explorer.html',trial='/apps/discovery-trial-pack.html';
for(const p of [guide,explorer,trial])assert(fs.existsSync(path.join(out,p.slice(1))),'Missing guide '+p);
new vm.Script(fs.readFileSync(path.join(out,'assets/js/registry-explorer.js'),'utf8'));
const copy={en:['Free Discovery → related apps → a measurable pilot','Keep your free report, validate ROI assumptions, review governance and plan a small pilot before any paid engagement.','Read the free pilot guide','Get my free report','Plan a pilot','Search registered apps','Prepare a free trial'],pt:['Discovery gratuito → apps relacionados → piloto mensurável','Guarde seu relatório gratuito, valide as premissas de ROI, revise a governança e planeje um piloto pequeno antes de contratar.','Ler guia gratuito de piloto (EN)','Receber meu relatório grátis','Planejar piloto','Pesquisar apps registrados (EN)','Preparar teste gratuito (EN)'],es:['Discovery gratuito → aplicaciones → piloto medible','Conserve su informe gratuito, valide los supuestos de ROI, revise la gobernanza y planifique un piloto pequeño antes de contratar.','Leer guía gratuita de piloto (EN)','Obtener mi informe gratis','Planificar piloto','Buscar aplicaciones registradas (EN)','Preparar prueba gratuita (EN)'],fr:['Discovery gratuit → applications → pilote mesurable','Conservez votre rapport gratuit, vérifiez les hypothèses de ROI et la gouvernance, puis préparez un petit pilote avant toute prestation payante.','Lire le guide gratuit du pilote (EN)','Obtenir mon rapport gratuit','Planifier un pilote','Rechercher les applications (EN)','Préparer un essai gratuit (EN)'],de:['Kostenloses Discovery → passende Apps → messbarer Pilot','Behalten Sie Ihren kostenlosen Bericht, prüfen Sie ROI-Annahmen und Governance und planen Sie einen kleinen Pilotversuch vor einer Beauftragung.','Kostenlosen Pilot-Leitfaden lesen (EN)','Kostenlosen Bericht erhalten','Pilot planen','Registrierte Apps suchen (EN)','Kostenlosen Test vorbereiten (EN)']};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let updated=0;
for(const [locale,t] of Object.entries(copy)){
 const discovery=locale==='en'?'/discovery/':'/'+locale+'/discovery/';
 const home=locale==='pt'?'index.html':locale+'/index.html';
 for(const [relative,isHome] of [[home,true],[discovery.slice(1)+'index.html',false]]){
  const filename=path.join(out,relative);assert(fs.existsSync(filename),'Missing production page '+relative);
  let html=fs.readFileSync(filename,'utf8');
  const old=/<section\b[^>]*\bid="discovery-pilot-guide-links"[^>]*>[\s\S]*?<\/section>/;
  html=html.replace(old,'');
  const section='<section class="section section-soft" id="discovery-pilot-guide-links" data-zion-pilot-guide="2026-10-08-explorer"><div class="wrap"><h2>'+esc(t[0])+'</h2><p>'+esc(t[1])+'</p><div class="grid grid-3"><article class="card"><h3>'+esc(t[2])+'</h3><p><a href="'+guide+'">'+esc(t[2])+'</a></p></article><article class="card"><h3>ROI &amp; Governance</h3><p><a href="/roi-calc/">ROI Calculator</a> · <a href="/ai-governance-checklist/">AI Governance Checklist</a></p></article><article class="card"><h3>'+esc(t[4])+'</h3><p><a href="/automation-pilot-planner/">Pilot Planner</a> · <a href="/apps/discovery-report-workbench.html">Report Workbench</a></p></article></div><p><a class="btn" href="'+discovery+'">'+esc(t[3])+'</a> · <a href="'+explorer+'">'+esc(t[5])+'</a> · <a href="'+trial+'">'+esc(t[6])+'</a> · <a href="/apps/">App Network</a> · <a href="/apps/network.html">Network map</a></p></div></section>';
  const close=isHome?'</main>':'</body>';assert(html.includes(close),'Insertion anchor missing '+relative);
  html=html.replace(close,section+'\n'+close);fs.writeFileSync(filename,html);updated++;
 }
}
console.log('Pilot guide, registry explorer and trial-pack interlinks rendered on '+updated+' homepages/questionnaires; JavaScript syntax verified; no emails sent.');
