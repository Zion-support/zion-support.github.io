'use strict';
// Pinned translation source; GET only. Never submits a form or changes delivery routing.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const release='2026-10-09-b112-v1',sha='255fd3db985b3732546c0e9da5741e79d6aab4c6';
const locales=['en','pt','es','fr','de'];
const blobs=['cf14b79a825efa8560bc5512ee5d7d08405a4a1d','13e0071f58e7b8878f8c3b221e01ecfa140174a1','42256634871471befa969bb9cc3313eba1ca8d9b','e7ecbc9fe4ffc6603f6ea97e44b367a2abe50db3','78704dcbd1fa245250a37df3e143f79a2d84d9af'];
const hub=l=>'/zion-app-network/app-network-batch112-oct07'+(l==='en'?'':'-'+l)+'.html';
const suffix=l=>l==='en'?'':'.'+(l==='pt'?'pt-br':l);
const site=l=>'/apps/october-2026-batch112-telecom'+suffix(l)+'.html';
const field=l=>'/apps/field-service-evidence-guide'+suffix(l)+'.html';
const home=l=>l==='pt'?'index.html':l+'/index.html';
const workbench=l=>(l==='en'?'/':'/'+l+'/')+'apps/insurance-evidence-workbench.html';
const C={
 en:['Telecom workflows: inspect before you implement','Explore six documented concepts, define a baseline and plan a reversible synthetic-data pilot. No deployed AI capability is claimed.','Explore telecom concepts','Free Discovery','Insurance concepts','Field Service Evidence Guide','Related telecom guide'],
 pt:['Processos de telecom: confira antes de implementar','Explore seis conceitos documentados, defina uma referência inicial e planeje um piloto reversível com dados sintéticos. Não há promessa de IA implantada.','Explorar conceitos de telecom','Discovery gratuito','Conceitos de seguros','Guia de evidências para serviços de campo','Guia de telecom relacionado'],
 es:['Procesos de telecom: revise antes de implementar','Explore seis conceptos documentados, defina una referencia inicial y planifique un piloto reversible con datos sintéticos. No se afirma que exista IA desplegada.','Explorar conceptos de telecom','Discovery gratuito','Conceptos de seguros','Guía de evidencias para servicios de campo','Guía de telecom relacionada'],
 fr:['Processus télécom : vérifier avant d’implémenter','Explorez six concepts documentés, mesurez la référence initiale et préparez un pilote réversible avec des données synthétiques. Aucune IA déployée n’est revendiquée.','Explorer les concepts télécom','Discovery gratuit','Concepts d’assurance','Guide des preuves pour les services de terrain','Guide télécom associé'],
 de:['Telekom-Prozesse: vor der Umsetzung prüfen','Entdecken Sie sechs dokumentierte Konzepte, erfassen Sie die Ausgangslage und planen Sie einen reversiblen Pilotversuch mit synthetischen Daten. Es wird keine bereitgestellte KI-Funktion behauptet.','Telekom-Konzepte entdecken','Kostenloses Discovery','Versicherungskonzepte','Nachweisleitfaden für Außendienste','Verwandter Telekom-Leitfaden']
};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const forms=s=>s.match(/<form\b[\s\S]*?<\/form>/gi)||[];
const scripts=s=>s.match(/<script\b[\s\S]*?<\/script>/gi)||[];
function addSection(before,section){
 assert(!/http-equiv\s*=\s*["']?refresh/i.test(before),'Refuse redirect entrypoint');
 let after=before.replace(/<!--telecom112:start-->[\s\S]*?<!--telecom112:end-->/g,'');
 assert(after.includes('</main>'),'Missing main insertion anchor');
 after=after.replace('</main>',section+'</main>');
 assert.deepEqual(forms(after),forms(before),'Form changed');assert.deepEqual(scripts(after),scripts(before),'Script changed');
 assert.equal((after.match(/data-telecom112-promo=/g)||[]).length,1);return after;
}
function validateSource(text,i){
 const buf=Buffer.from(text);const hash=crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+buf.length+'\0'),buf])).digest('hex');
 assert.equal(hash,blobs[i],'Pinned source integrity mismatch');assert(text.includes('data-release="'+release+'"'));
 assert(!/<form\b|<script\b/i.test(text));assert.equal((text.match(/hreflang=/g)||[]).length,6);
}
async function sources(){
 return Promise.all(locales.map(async(l,i)=>{
  const url='https://raw.githubusercontent.com/Zion-support/zion-app-network/'+sha+'/'+hub(l).split('/').pop();
  let text;for(let n=0;n<3;n++){try{const r=await fetch(url,{signal:AbortSignal.timeout(30000)});assert(r.ok,'HTTP '+r.status);text=await r.text();break;}catch(e){if(n===2)throw e;await new Promise(r=>setTimeout(r,1500));}}
  validateSource(text,i);return text;
 }));
}
function render(out,texts){
 assert.equal(texts.length,5);texts.forEach(validateSource);fs.mkdirSync(path.join(out,'apps'),{recursive:true});const changed=[];
 for(let i=0;i<5;i++){
  const l=locales[i],c=C[l],f=path.join(out,site(l).slice(1));let html=texts[i];
  if(fs.existsSync(f)){const before=fs.readFileSync(f,'utf8');assert(!/<form\b|<script\b/i.test(before),'Refuse to replace interactive mirror');}
  for(const v of locales){
   html=html.split('https://ziontechgroup.com'+hub(v)).join('https://ziontechgroup.com'+site(v));
   html=html.split('href="'+hub(v).split('/').pop()+'"').join('href="'+site(v)+'"');
  }
  html=html.replace('href="batch113-pattern.css"','href="/zion-app-network/batch113-pattern.css"');
  html=html.replace(/href="(app-network-batch113[^"\s]+)"/g,'href="/zion-app-network/$1"');
  html=html.replace('</footer>','<p><a href="'+hub(l)+'">'+esc(c[2])+' — Zion App Network</a></p></footer>');
  assert(html.includes('href="https://ziontechgroup.com'+site(l)+'"'));fs.writeFileSync(f,html);changed.push(site(l));
  const discovery=l==='en'?'/discovery/':'/'+l+'/discovery/';
  const section='<!--telecom112:start--><section class="section section-soft" data-telecom112-promo="'+release+'"><div class="wrap"><h2>'+esc(c[0])+'</h2><p>'+esc(c[1])+'</p><nav aria-label="'+esc(c[6])+'"><a class="btn" href="'+site(l)+'">'+esc(c[2])+'</a> · <a href="'+discovery+'">'+esc(c[3])+'</a> · <a href="/zion-app-network/app-network-batch113-oct07'+(l==='en'?'':'-'+l)+'.html">'+esc(c[4])+'</a> · <a href="'+field(l)+'">'+esc(c[5])+'</a></nav></div></section><!--telecom112:end-->';
  const targets=[home(l),field(l).slice(1),workbench(l).slice(1)];
  for(const rel of targets){const p=path.join(out,rel);assert(fs.existsSync(p),'Missing required entrypoint '+rel);fs.writeFileSync(p,addSection(fs.readFileSync(p,'utf8'),section));changed.push('/'+rel.replace(/index\.html$/,''));}
 }
 fs.writeFileSync(path.join(out,'apps/batch112-publication.json'),JSON.stringify({release,source_commit:sha,changed,scope:'Five translated telecom guides and reciprocal promotions only; no functionality or inbox certification',delivery:'unchanged'},null,2)+'\n');
 console.log('PASS '+release+': pinned five-locale mirrors, localized promotions, form/script preservation');
}
module.exports={render,addSection,locales,site,hub,field,home,workbench,release};
if(require.main===module)sources().then(texts=>render(process.argv[2]||'out',texts)).catch(e=>{console.error(e);process.exitCode=1;});
