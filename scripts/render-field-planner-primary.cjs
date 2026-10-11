'use strict';
// Scoped editorial navigation only. No forms, scripts or delivery changes.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const release='field-planner-primary-2026-10-11-v1',locales=['en','pt','es','fr','de'];
const language=l=>l==='pt'?'pt-BR':l;
const guide=l=>'/apps/field-service-evidence-guide'+(l==='en'?'':'.'+(l==='pt'?'pt-br':l))+'.html';
const planner=l=>'/automation-pilot-planner/'+(l==='pt'?'':l+'/');
const oldSource='https://github.com/Zion-support/zion-support.github.io/blob/main/public/automation-pilot-planner/index.html';
const source='https://github.com/Zion-support/zion-support.github.io/blob/main/scripts/render-pilot-planner-locales.cjs';
const copy={
en:['Plan your pilot in English','Define one process, an owner, a measured baseline, human review and a stop rule. Use the English planner for the interface and the generated 30-day plan.','Open the English Pilot Planner','Browser-local planning only: no email, booking or production changes. Older resource links below retain the Portuguese address for compatibility.'],
pt:['Planeje seu piloto em português','Defina um processo, responsável, referência medida, revisão humana e regra de parada. Use o planejador em português para a interface e o plano gerado de 30 dias.','Abrir o planejador de piloto em português','Somente planejamento no navegador: nenhum email, reserva ou alteração em produção. O endereço original em português foi preservado.'],
es:['Planifique su piloto en español','Defina un proceso, responsable, referencia medida, revisión humana y regla de parada. Use el planificador en español para la interfaz y el plan generado de 30 días.','Abrir el planificador de piloto en español','Solo planificación local en el navegador: sin correo, reservas ni cambios en producción. Los enlaces antiguos conservan la dirección portuguesa por compatibilidad.'],
fr:['Planifiez votre pilote en français','Définissez un processus, un responsable, une référence mesurée, un contrôle humain et une règle d’arrêt. Utilisez le planificateur français pour l’interface et le plan généré de 30 jours.','Ouvrir le planificateur de pilote en français','Planification locale dans le navigateur uniquement : aucun email, réservation ou changement en production. Les anciens liens conservent l’adresse portugaise pour compatibilité.'],
de:['Planen Sie Ihren Piloten auf Deutsch','Definieren Sie einen Prozess, Verantwortliche, gemessene Ausgangswerte, menschliche Prüfung und eine Abbruchregel. Nutzen Sie den deutschen Planer für Oberfläche und generierten 30-Tage-Plan.','Deutschen Pilotplaner öffnen','Nur lokale Planung im Browser: kein E-Mail-Versand, keine Buchung oder Produktionsänderung. Ältere Links behalten aus Kompatibilitätsgründen die portugiesische Adresse.']
};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const protectedParts=h=>[...h.matchAll(/<(form|script)\b[\s\S]*?<\/\1>/gi)].map(m=>m[0]);
function verify(h,l){
 assert.equal((h.match(/data-field-planner-primary=/g)||[]).length,1,'One primary block '+l);
 const block=h.match(/<!--field-planner-primary:start-->[\s\S]*?<!--field-planner-primary:end-->/)[0];
 assert(block.includes('lang="'+language(l)+'"'),'Block language '+l);
 assert(block.includes('href="'+planner(l)+'"'),'Primary destination '+l);
 assert(!/<form\b|<script\b/i.test(block),'Navigation must remain read-only');
 assert(h.includes('href="/automation-pilot-planner/"'),'Retain Portuguese compatibility destination');
 assert(h.includes('href="'+source+'"'),'Artifact source reference');
 assert(!h.includes('href="'+oldSource+'"'),'Obsolete raw-source reference');
}
function transform(before,l){
 const c=copy[l];let h=before.replace(/<!--field-planner-primary:start-->[\s\S]*?<!--field-planner-primary:end-->/g,'');
 assert(h.includes('</h1>'),'Guide heading anchor missing '+l);
 const block='<!--field-planner-primary:start--><section class="card" lang="'+language(l)+'" data-field-planner-primary="'+release+'"><h2>'+esc(c[0])+'</h2><p>'+esc(c[1])+'</p><a class="btn" href="'+planner(l)+'">'+esc(c[2])+'</a><p>'+esc(c[3])+'</p></section><!--field-planner-primary:end-->';
 h=h.replace('</h1>','</h1>'+block);
 assert(h.includes('href="'+oldSource+'"')||h.includes('href="'+source+'"'),'Known source reference missing '+l);
 h=h.split('href="'+oldSource+'"').join('href="'+source+'"');
 assert.equal(h.match(/<head\b[\s\S]*?<\/head>/i)?.[0],before.match(/<head\b[\s\S]*?<\/head>/i)?.[0],'Head metadata changed');
 assert.deepEqual(protectedParts(h),protectedParts(before),'Forms/scripts changed');verify(h,l);return h;
}
function qa(){for(const l of locales){const fixture='<html lang="'+language(l)+'"><head><title>fixture</title><link rel="canonical" href="fixture"></head><body><main><h1>Guide</h1><a href="/automation-pilot-planner/">legacy</a><a href="'+oldSource+'">source</a><form><input name="email"></form><script>unchanged()</script></main></body></html>';const h=transform(fixture,l);assert.equal(transform(h,l),h,'Idempotence '+l);verify(h,l);}console.log('PASS primary Planner link: 5 locales, metadata/form/script preservation, source correction and two-pass idempotence');}
function render(root='out'){qa();const edits=locales.map(l=>{const file=path.join(root,guide(l).slice(1)),before=fs.readFileSync(file,'utf8'),h=transform(before,l);assert.equal(transform(h,l),h);return {file,h};});for(const e of edits)fs.writeFileSync(e.file,e.h);console.log('PASS primary CTAs on five canonical guides; final alias renderer will copy complete pages.');}
module.exports={render,transform,verify,qa,locales,guide,planner,release,source};
if(require.main===module)render(process.argv[2]||'out');
