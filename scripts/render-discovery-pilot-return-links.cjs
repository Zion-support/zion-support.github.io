'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const guide='/apps/free-discovery-to-pilot-guide.html';
const marker='free-discovery-pilot-return-link';
const copy={
 en:['Free Discovery to Pilot Guide','Keep your free report, validate assumptions and plan a reversible pilot using related resources.','Read the free guide','Guide in English with a Portuguese summary; implementation is optional.'],
 pt:['Do Discovery gratuito ao piloto','Guarde o relatório gratuito, valide hipóteses e planeje um piloto reversível com recursos relacionados.','Ler o guia gratuito','Guia em inglês com resumo em português; implementação é opcional.'],
 es:['Del Discovery gratuito al piloto','Conserve su informe gratuito, valide supuestos y planifique un piloto reversible con recursos relacionados.','Leer la guía gratuita','Guía en inglés con resumen en portugués; la implementación es opcional.'],
 fr:['Du Discovery gratuit au pilote','Conservez votre rapport gratuit, validez les hypothèses et préparez un pilote réversible avec les ressources associées.','Lire le guide gratuit','Guide en anglais avec résumé en portugais ; la mise en œuvre est facultative.'],
 de:['Vom kostenlosen Discovery zum Pilot','Behalten Sie Ihren kostenlosen Bericht, prüfen Sie Annahmen und planen Sie einen reversiblen Pilot mit verknüpften Ressourcen.','Kostenlosen Leitfaden lesen','Leitfaden auf Englisch mit portugiesischer Zusammenfassung; die Umsetzung ist optional.']
};
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function apply(rootDir){
 const root=path.resolve(rootDir),guideFile=path.join(root,guide.slice(1));
 assert(fs.existsSync(guideFile),'Pilot guide must exist in the publication artifact');
 let count=0;
 for(const [locale,text] of Object.entries(copy)){
  for(const kind of ['discovery-benefits','discovery-workflow-paths']){
   const file=path.join(root,locale==='en'?'':locale,'apps',kind+'.html');
   assert(fs.existsSync(file),'Missing generated page: '+file);
   let html=fs.readFileSync(file,'utf8');
   assert(html.includes('</main>'),'Generated page needs main landmark: '+file);
   html=html.replace(/<section\b[^>]*\bid="free-discovery-pilot-return-link"[^>]*>[\s\S]*?<\/section>/g,'');
   const card=`<section class="card" id="${marker}" aria-labelledby="pilot-return-title"><h2 id="pilot-return-title">${escape(text[0])}</h2><p>${escape(text[1])}</p><a class="btn" href="${guide}">${escape(text[2])}</a><p>${escape(text[3])}</p></section>`;
   html=html.replace('</main>',card+'</main>');
   assert.equal((html.match(/id="free-discovery-pilot-return-link"/g)||[]).length,1,'Backlink must be unique');
   assert(html.includes(`href="${guide}"`),'Backlink missing');
   fs.writeFileSync(file,html);count++;
  }
 }
 assert.equal(count,10,'All five benefits and workflow locales must be linked');
 console.log('Verified 10 localized pilot guide backlinks; artifact-only and idempotent.');
 return count;
}
module.exports=apply;
if(require.main===module)apply(process.argv[2]||'out');
