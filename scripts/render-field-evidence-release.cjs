'use strict';
// Approved field-guide integration. Artifact only; no delivery or booking requests.
const fs=require('node:fs'),path=require('node:path');
const out=process.argv[2]||'out';
// Keep unrelated logistics files byte-for-byte unchanged by the legacy renderer.
const retained=new Map();
for(const suffix of ['', '.pt-br','.es','.fr','.de']){
 const f=path.join(out,'apps/october-2026-batch129-logistics-ai'+suffix+'.html');
 if(fs.existsSync(f))retained.set(f,fs.readFileSync(f));
}
require('./render-field-evidence-locales.cjs');
for(const [f,bytes] of retained)fs.writeFileSync(f,bytes);
const copy={
 en:['Field visit readiness','Supplier Quote Evidence Workbench','SLA Calculator','ROI Calculator','Automation Pilot Planner'],
 pt:['Prontidão para visita técnica','Bancada de evidências de cotações','Calculadora de SLA','Calculadora de ROI','Planejador de piloto de automação'],
 es:['Preparación para la visita técnica','Banco de evidencias de cotizaciones','Calculadora de SLA','Calculadora de ROI','Planificador de piloto de automatización'],
 fr:['Préparation de la visite sur site','Atelier de preuves des devis','Calculateur de SLA','Calculateur de ROI','Planificateur de pilote d’automatisation'],
 de:['Bereitschaft für den Vor-Ort-Einsatz','Arbeitsbereich für Angebotsnachweise','SLA-Rechner','ROI-Rechner','Planer für Automatisierungspiloten']
};
const originals=copy.en.slice(1);
for(const [l,labels] of Object.entries(copy)){
 const rel='apps/field-service-evidence-guide'+(l==='en'?'':'.'+(l==='pt'?'pt-br':l))+'.html';
 const f=path.join(out,rel);let html=fs.readFileSync(f,'utf8');
 html=html.replace(/<body(?: data-field-evidence-release="[^"]*")?>/,'<body data-field-evidence-release="2026-10-09">');
 html=html.replace('>Field visit readiness</a>','>'+labels[0]+'</a>');
 if(l!=='en')originals.forEach((name,i)=>{html=html.replace('<h3>'+name+'</h3>','<h3>'+labels[i+1]+'</h3>');});
 fs.writeFileSync(f,html);
}

// Keep field-guide return paths in the questionnaire's language. Only replace
// the owned navigation block; never alter forms or delivery code.
const assert=require('node:assert/strict');
const returns={
 en:['Field services: evidence before dispatch','Free evidence guide','Free Discovery','App network map','Planning only: no booking, order or dispatch is created.'],
 pt:['Serviços de campo: evidências antes do despacho','Guia gratuito de evidências','Discovery gratuito','Mapa da rede de apps','Somente planejamento: nenhuma reserva, compra ou mobilização é criada.'],
 es:['Servicios de campo: evidencias antes del despacho','Guía gratuita de evidencias','Discovery gratuito','Mapa de la red de apps','Solo planificación: no se crea ninguna reserva, compra ni movilización.'],
 fr:['Services sur site : des preuves avant l’intervention','Guide gratuit des preuves','Discovery gratuit','Carte du réseau d’apps','Planification uniquement : aucune réservation, commande ou intervention n’est créée.'],
 de:['Vor-Ort-Services: Nachweise vor dem Einsatz','Kostenloser Nachweis-Leitfaden','Kostenloses Discovery','Karte des App-Netzwerks','Nur Planung: Es wird keine Buchung, Bestellung oder Einsatzfreigabe erstellt.']
};
const escape=s=>s.replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
for(const [l,c] of Object.entries(returns)){
 const rel=l==='en'?'discovery/index.html':l+'/discovery/index.html';
 const file=path.join(out,rel);assert(fs.existsSync(file),'Discovery locale missing '+l);
 let html=fs.readFileSync(file,'utf8');
 const forms=[...html.matchAll(/<form\b[\s\S]*?<\/form>/gi)].map(m=>m[0]);
 const owned=/<!--zion-field-return:start-->[\s\S]*?<!--zion-field-return:end-->/g;
 assert.equal([...html.matchAll(owned)].length,1,'Expected one owned field-return block '+l);
 const guide='/apps/field-service-evidence-guide'+(l==='en'?'':'.'+(l==='pt'?'pt-br':l))+'.html';
 const discovery=l==='en'?'/discovery/':'/'+l+'/discovery/';
 const lang=l==='pt'?'pt-BR':l;
 const block='<!--zion-field-return:start--><aside class="card" data-field-evidence-return="2026-10-09-v2" lang="'+lang+'"><h2>'+escape(c[0])+'</h2><p><a href="'+guide+'">'+escape(c[1])+'</a> · <a href="'+discovery+'">'+escape(c[2])+'</a> · <a href="/apps/network.html">'+escape(c[3])+'</a></p><p>'+escape(c[4])+'</p></aside><!--zion-field-return:end-->';
 html=html.replace(owned,()=>block);
 assert.deepEqual([...html.matchAll(/<form\b[\s\S]*?<\/form>/gi)].map(m=>m[0]),forms,'Discovery forms changed '+l);
 fs.writeFileSync(file,html);
}

require('./test-field-evidence-release.cjs');
console.log('PASS approved field evidence integration; unrelated logistics restored.');
