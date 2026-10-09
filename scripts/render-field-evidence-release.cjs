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
require('./test-field-evidence-release.cjs');
console.log('PASS approved field evidence integration; unrelated logistics restored.');
