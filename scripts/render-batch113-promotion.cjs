'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',version='2026-10-09-b113-v1';
const C={
en:['Insurance workflows: inspect before you implement','Explore six documented concepts and build a synthetic evidence brief. These repositories are documentation, not deployed AI systems.','Explore the insurance concepts','Free Discovery','Field Service Evidence Guide'],
pt:['Processos de seguros: confira antes de implementar','Explore seis conceitos documentados e prepare um plano com evidências sintéticas. Os repositórios são documentação, não sistemas de IA implantados.','Explorar os conceitos de seguros','Discovery gratuito','Guia de evidências para serviços de campo'],
es:['Procesos de seguros: revise antes de implementar','Explore seis conceptos documentados y prepare un plan con evidencias sintéticas. Los repositorios son documentación, no sistemas de IA desplegados.','Explorar los conceptos de seguros','Discovery gratuito','Guía de evidencias para servicios de campo'],
fr:['Processus d’assurance : vérifier avant d’implémenter','Explorez six concepts documentés et préparez un dossier de preuves synthétiques. Les dépôts sont de la documentation, pas des systèmes d’IA déployés.','Explorer les concepts d’assurance','Discovery gratuit','Guide des preuves pour les services de terrain'],
de:['Versicherungsprozesse: vor der Umsetzung prüfen','Entdecken Sie sechs dokumentierte Konzepte und erstellen Sie einen Plan mit synthetischen Nachweisen. Die Repositories sind Dokumentation, keine bereitgestellten KI-Systeme.','Versicherungskonzepte entdecken','Kostenloses Discovery','Nachweisleitfaden für Außendienste']};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const forms=s=>s.match(/<form\b[\s\S]*?<\/form>/gi)||[];
const scripts=s=>s.match(/<script\b[\s\S]*?<\/script>/gi)||[];
const marker=/<!--batch113-promo:start-->[\s\S]*?<!--batch113-promo:end-->/g;
const pages=[];
for(const [l,c] of Object.entries(C)){
 const hub='/zion-app-network/app-network-batch113-oct07'+(l==='en'?'':'-'+l)+'.html',suffix=l==='en'?'':'.'+(l==='pt'?'pt-br':l),discovery='/'+(l==='en'?'':l+'/')+'discovery/';
 const section='<!--batch113-promo:start--><section class="section section-soft" data-batch113-promo="'+version+'"><div class="wrap"><h2>'+esc(c[0])+'</h2><p>'+esc(c[1])+'</p><nav aria-label="'+esc(c[2])+'"><a class="btn" href="'+hub+'">'+esc(c[2])+'</a> · <a href="'+discovery+'">'+esc(c[3])+'</a> · <a href="/apps/field-service-evidence-guide'+suffix+'.html">'+esc(c[4])+'</a></nav></div></section><!--batch113-promo:end-->';
 const home=l==='pt'?'index.html':l+'/index.html';
 const targets=[home,'apps/insurance-evidence-workbench'+suffix+'.html'];
 for(const rel of targets){
  const f=path.join(out,rel);if(!fs.existsSync(f)){assert(rel!==home,'Missing homepage '+rel);continue;}
  const before=fs.readFileSync(f,'utf8');assert(!/http-equiv\s*=\s*["']?refresh/i.test(before),'Refuse redirect homepage '+rel);
  let after=before.replace(marker,'');assert(after.includes('</main>'),'Missing insertion anchor '+rel);after=after.replace('</main>',section+'</main>');
  assert.deepEqual(forms(after),forms(before),'Form changed '+rel);assert.deepEqual(scripts(after),scripts(before),'Script changed '+rel);assert.equal((after.match(/data-batch113-promo=/g)||[]).length,1);
  fs.writeFileSync(f,after);pages.push('/'+rel.replace(/index\.html$/,''));
 }
}
fs.mkdirSync(path.join(out,'apps'),{recursive:true});fs.writeFileSync(path.join(out,'apps/batch113-promotion-publication.json'),JSON.stringify({release:version,pages,scope:'Insurance guide links only; no capability certification, submission, purchase or dispatch'},null,2)+'\n');
console.log('PASS '+version+': translated promotion and reciprocal evidence-workbench links; forms and scripts preserved');
