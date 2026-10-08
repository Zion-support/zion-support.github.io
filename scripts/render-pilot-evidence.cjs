'use strict';
// Artifact-only navigation enrichment. No network, email, storage or source mutation.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const out=process.argv[2]||'out',guide='/apps/discovery-to-pilot-guide.html',marker='pilot-evidence-navigation';
const copy={en:['Turn your free Discovery report into an evidence brief','Check six self-attested gates: owner, measured baseline, success metric, human review, rollback and data permission. Download a local draft; no upload, booking or implementation authorization.','Open free pilot evidence checklist (EN)'],pt:['Transforme o Discovery gratuito em um resumo de evidências','Confira seis itens autodeclarados: responsável, baseline, métrica, revisão humana, rollback e permissões. Baixe um rascunho local; sem upload, reserva ou autorização de implementação.','Abrir checklist gratuito de evidências (EN)'],es:['Convierta Discovery gratuito en un resumen de evidencias','Revise responsable, línea base, métrica, revisión humana, reversión y permisos. Descargue un borrador local; sin carga de datos, reserva ni autorización de implementación.','Abrir checklist gratuito de evidencias (EN)'],fr:['Transformez Discovery gratuit en un dossier de preuves','Vérifiez responsable, référence mesurée, indicateur, validation humaine, retour arrière et permissions. Brouillon local; aucun transfert, réservation ni autorisation de mise en œuvre.','Ouvrir la checklist gratuite (EN)'],de:['Vom kostenlosen Discovery zum Nachweisentwurf','Prüfen Sie Verantwortung, Ausgangswert, Erfolgsmaß, menschliche Prüfung, Rückabwicklung und Datenrechte. Lokaler Entwurf; kein Upload, keine Buchung und keine Umsetzungsfreigabe.','Kostenlose Nachweis-Checkliste öffnen (EN)']};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
assert(fs.existsSync(path.join(out,guide.slice(1))),'Missing pilot evidence guide');
assert(fs.existsSync(path.join(out,'assets/js/pilot-evidence.mjs')),'Missing pilot evidence module');
const targets=[['index.html','pt'],...['en','es','fr','de'].map(l=>[l+'/index.html',l]),...['en','pt','es','fr','de'].map(l=>[(l==='en'?'':l+'/')+'discovery/index.html',l]),['apps/index.html','en'],['apps/content-hub.html','en'],...['apps/discovery-report-workbench.html','roi-calc/index.html','ai-governance-checklist/index.html','automation-pilot-planner/index.html','apps/supplier-quote-evidence-workbench.html'].map(f=>[f,'en'])];
for(const [rel,l] of targets){
 const file=path.join(out,rel);assert(fs.existsSync(file),'Missing pilot path '+rel);let html=fs.readFileSync(file,'utf8');
 const beforeForms=html.match(/<form\b[\s\S]*?<\/form>/gi)||[];
 const beforeScripts=html.match(/<script\b[\s\S]*?<\/script>/gi)||[];
 html=html.replace(/<!--pilot-evidence-navigation:start-->[\s\S]*?<!--pilot-evidence-navigation:end-->/g,'');
 const p=l==='en'?'/':'/'+l+'/',t=copy[l];
 const panel='<!--'+marker+':start--><section class="section section-soft" id="'+marker+'" data-release="2026-10-08-pilot-evidence-v1"><div class="wrap"><h2>'+esc(t[0])+'</h2><p>'+esc(t[1])+'</p><p><a class="btn" href="'+guide+'" lang="en">'+esc(t[2])+'</a> · <a href="'+p+'discovery/">Discovery</a> · <a href="/apps/">Apps</a> · <a href="/apps/network.html">Network map</a></p></div></section><!--'+marker+':end-->';
 const close=html.includes('</main>')?'</main>':'</body>';assert(html.includes(close),'Missing insertion anchor '+rel);html=html.replace(close,panel+'\n'+close);
 assert.deepEqual(html.match(/<form\b[\s\S]*?<\/form>/gi)||[],beforeForms,'Form changed '+rel);
 assert.deepEqual(html.match(/<script\b[\s\S]*?<\/script>/gi)||[],beforeScripts,'Script changed '+rel);
 assert.equal(html.split('id="'+marker+'"').length,2,'Duplicate pilot panel '+rel);
 fs.writeFileSync(file,html);
}
cp.execFileSync(process.execPath,['scripts/test-pilot-evidence.cjs',out],{stdio:'inherit'});
console.log('PASS pilot evidence: five homepages, five questionnaires, two catalogs and five related tools; forms preserved.');
