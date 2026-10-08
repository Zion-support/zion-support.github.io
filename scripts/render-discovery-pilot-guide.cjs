'use strict';
// Artifact-only enrichment. No API calls, form submissions or email sends.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const out=path.resolve('out'),guide='/apps/discovery-pilot-guide.html',explorer='/apps/registry-explorer.html',trial='/apps/discovery-trial-pack.html',launch='/apps/discovery-pilot-launch-guide.html';
for(const p of [guide,explorer,trial,launch])assert(fs.existsSync(path.join(out,p.slice(1))),'Missing guide '+p);
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
  const old=/<section\b[^>]*\bid="discovery-pilot-guide-links"[^>]*>[\s\S]*?<\/section>(?:\r?\n)?/;
  html=html.replace(old,'');
  const section='<section class="section section-soft" id="discovery-pilot-guide-links" data-zion-pilot-guide="2026-10-08-explorer"><div class="wrap"><h2>'+esc(t[0])+'</h2><p>'+esc(t[1])+'</p><div class="grid grid-3"><article class="card"><h3>'+esc(t[2])+'</h3><p><a href="'+guide+'">'+esc(t[2])+'</a></p></article><article class="card"><h3>ROI &amp; Governance</h3><p><a href="/roi-calc/">ROI Calculator</a> · <a href="/ai-governance-checklist/">AI Governance Checklist</a></p></article><article class="card"><h3>'+esc(t[4])+'</h3><p><a href="/automation-pilot-planner/">Pilot Planner</a> · <a href="/apps/discovery-report-workbench.html">Report Workbench</a></p></article></div><p><a class="btn" href="'+discovery+'">'+esc(t[3])+'</a> · <a href="'+explorer+'">'+esc(t[5])+'</a> · <a href="'+trial+'">'+esc(t[6])+'</a> · <a href="'+launch+'">Six-tool launch guide (EN)</a> · <a href="/apps/">App Network</a> · <a href="/apps/network.html">Network map</a></p></div></section>';
  const close=isHome?'</main>':'</body>';assert(html.includes(close),'Insertion anchor missing '+relative);
  html=html.replace(close,section+'\n'+close);fs.writeFileSync(filename,html);updated++;
 }
}
console.log('Pilot guide, registry explorer and trial-pack interlinks rendered on '+updated+' homepages/questionnaires; JavaScript syntax verified; no emails sent.');

// Reciprocal launch-guide links in the two existing catalog entry points.
for(const rel of ['apps/index.html','apps/content-hub.html']){
 const file=path.join(out,rel);assert(fs.existsSync(file),'Missing catalog '+rel);
 let html=fs.readFileSync(file,'utf8');
 const marker='discovery-pilot-launch-link';
 const previous=new RegExp('<section\\b[^>]*\\bid="'+marker+'"[^>]*>[\\s\\S]*?<\\/section>(?:\\r?\\n)?');
 html=html.replace(previous,'');
 const panel='<section class="section section-soft" id="'+marker+'"><div class="wrap"><h2>From Free Discovery to a measurable pilot</h2><p>Follow six connected tools: Report Workbench, ROI Calculator, Ticket Triage, Governance Checklist, Supplier Risk Radar and Pilot Planner. Validate assumptions, permissions and a stop rule before implementation.</p><p><a href="'+launch+'">Read the six-tool launch guide</a> · <a href="/discovery/">Start Free Discovery</a> · <a href="/apps/">Apps</a> · <a href="/apps/content-hub.html">Content Hub</a></p></div></section>';
 const close=html.includes('</main>')?'</main>':'</body>';assert(html.includes(close),'Catalog insertion anchor missing '+rel);
 html=html.replace(close,panel+'\n'+close);assert(html.split('id="'+marker+'"').length===2,'Duplicate guide panel');
 fs.writeFileSync(file,html);
}
console.log('Approved six-tool launch guide linked from five localized homepages/questionnaires and both catalogs; existing pages and delivery logic preserved.');

// FE evidence-first guide: preserve existing forms and delivery logic.
const feGuide='/apps/field-engineering-discovery-guide.html';
assert(fs.existsSync(path.join(out,feGuide.slice(1))),'Missing FE guide');
const feCopy={en:['Field engineering: evidence before dispatch','Use free Discovery, FE Readiness, SLA Calculator and Supplier Quote Evidence Workbench to identify gaps before a booking.'],pt:['Field engineering: evidências antes do dispatch','Use Discovery gratuito, FE Readiness, SLA Calculator e Supplier Quote Evidence Workbench para identificar pendências antes de reservar.'],es:['Field engineering: evidencia antes del despacho','Use Discovery gratuito, FE Readiness, SLA Calculator y Supplier Quote Evidence Workbench antes de reservar.'],fr:['Field engineering : preuves avant intervention','Utilisez Discovery gratuit, FE Readiness, SLA Calculator et Supplier Quote Evidence Workbench avant toute réservation.'],de:['Field Engineering: Nachweise vor dem Einsatz','Nutzen Sie kostenloses Discovery, FE Readiness, SLA Calculator und Supplier Quote Evidence Workbench vor einer Buchung.']};
const feTargets=[['index.html','pt'],...['en','es','fr','de'].map(l=>[l+'/index.html',l]),...['en','pt','es','fr','de'].map(l=>[(l==='en'?'':l+'/')+'discovery/index.html',l]),['apps/index.html','en'],['apps/content-hub.html','en']];
for(const [rel,l] of feTargets){
 const file=path.join(out,rel);assert(fs.existsSync(file),'Missing FE entry '+rel);
 let html=fs.readFileSync(file,'utf8');
 html=html.replace(/<section\b[^>]*\bid="fe-discovery-guide-links"[^>]*>[\s\S]*?<\/section>(?:\r?\n)?/,'');
 const section='<section class="section section-soft" id="fe-discovery-guide-links"><div class="wrap"><h2>'+esc(feCopy[l][0])+'</h2><p>'+esc(feCopy[l][1])+'</p><p><a href="'+feGuide+'" lang="en">Field Engineering Discovery Guide (EN)</a> · <a href="/global-fe-dispatch/">FE Readiness</a> · <a href="/sla-calculator/">SLA Calculator</a> · <a href="/apps/supplier-quote-evidence-workbench.html">Supplier Quote Evidence Workbench</a></p></div></section>';
 const close=html.includes('</main>')?'</main>':'</body>';assert(html.includes(close),'FE insertion anchor missing '+rel);
 html=html.replace(close,section+'\n'+close);
 assert(html.split('id="fe-discovery-guide-links"').length===2,'Duplicate FE panel');
 fs.writeFileSync(file,html);
}
console.log('FE guide linked from five homepages, five questionnaires and two catalogs; no booking or email.');

// Close the return path from the six launch-guide tools. Artifact-only; no app logic changes.
const launchTools=['apps/discovery-report-workbench.html','roi-calc/index.html','ai-ticket-triage/index.html','ai-governance-checklist/index.html','supplier-risk-radar/index.html','automation-pilot-planner/index.html'];
for(const rel of launchTools){
 const file=path.join(out,rel);assert(fs.existsSync(file),'Missing launch tool '+rel);
 let html=fs.readFileSync(file,'utf8');
 const marker='discovery-launch-return';
 const previous=/<nav\b[^>]*\bid="discovery-launch-return"[^>]*>[\s\S]*?<\/nav>(?:\r?\n)?/;
 html=html.replace(previous,'');
 const panel='<nav id="'+marker+'" aria-label="Free Discovery pilot journey" style="margin:1.5rem 0;padding:1rem;border:1px solid currentColor;border-radius:.5rem"><p><strong>Continue your free Discovery pilot journey</strong></p><p><a href="'+launch+'">Return to the six-tool launch guide</a> &middot; <a href="/discovery/">Free Discovery</a> &middot; <a href="/apps/">App Network</a></p><p>Choose a process owner, baseline, human reviewer and stop rule before implementation. A planning tool does not authorize a purchase or dispatch.</p></nav>';
 const close=html.includes('</main>')?'</main>':'</body>';assert(html.includes(close),'Launch tool anchor missing '+rel);
 html=html.replace(close,panel+'\n'+close);
 assert(html.split('id="'+marker+'"').length===2,'Duplicate launch return '+rel);
 fs.writeFileSync(file,html);
}
console.log('Six launch tools now link back to the free guide; app logic and email routing unchanged.');
