'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out';
// The legacy content hub has no main landmark. Add one without changing its forms or scripts.
const hub=path.join(out,'apps/content-hub.html');let html=fs.readFileSync(hub,'utf8');
if(!/<main\b/i.test(html)){
 assert(html.includes('<body>')&&html.includes('</body>'),'Legacy hub landmarks changed');
 html=html.replace('<body>','<body><main id="content-hub-main">').replace('</body>','</main></body>');fs.writeFileSync(hub,html);
}
// Portuguese canonical home is /. Move any /pt/ redirect aside atomically and restore it unchanged.
const alias=path.join(out,'pt/index.html');
const backupDir=fs.mkdtempSync(path.join(path.dirname(alias),'.supplier-release-'));
const backup=path.join(backupDir,'index.html');let redirectMoved=false;
try{
 try{fs.renameSync(alias,backup);redirectMoved=true;}
 catch(error){if(error.code!=='ENOENT')throw error;}
 if(redirectMoved&&!/http-equiv\s*=\s*["']?refresh/i.test(fs.readFileSync(backup,'utf8'))){
  fs.renameSync(backup,alias);redirectMoved=false;
 }
 require('./render-supplier-evidence.cjs');
 // Preserve the established five-guide return contract, not only the selected locale.
 const titles={en:'Field evidence guides — choose a language',pt:'Guias de evidências de campo — escolha o idioma',es:'Guías de evidencias de campo — elija el idioma',fr:'Guides des preuves sur site — choisissez une langue',de:'Vor-Ort-Nachweisleitfäden — Sprache wählen'};
 const names={en:'English',pt:'Português',es:'Español',fr:'Français',de:'Deutsch'};
 const suffix=l=>l==='en'?'':'.'+(l==='pt'?'pt-br':l);
 const protectedParts=s=>[...s.matchAll(/<(?:form|script)\b[\s\S]*?<\/(?:form|script)>/gi)].map(m=>m[0]);
 for(const l of Object.keys(names)){
  const f=path.join(out,'apps/supplier-quote-evidence-workbench'+suffix(l)+'.html'),before=fs.readFileSync(f,'utf8');
  let page=before.replace(/<!--supplier-guide-return:start-->[\s\S]*?<!--supplier-guide-return:end-->/g,'');
  const links=Object.keys(names).map(k=>'<a hreflang="'+(k==='pt'?'pt-BR':k)+'" href="/apps/field-service-evidence-guide'+suffix(k)+'.html">'+names[k]+'</a>').join(' · ');
  const block='<!--supplier-guide-return:start--><section class="card" data-supplier-guide-return="2026-10-11"><h2>'+titles[l]+'</h2><nav aria-label="'+titles[l]+'">'+links+'</nav></section><!--supplier-guide-return:end-->';
  assert(page.includes('</main>'));page=page.replace('</main>',block+'</main>');
  assert.deepEqual(protectedParts(page),protectedParts(before),'Supplier forms/scripts changed');
  for(const k of Object.keys(names))assert(page.includes('href="/apps/field-service-evidence-guide'+suffix(k)+'.html"'),'Missing guide return '+l+' '+k);
  assert.equal((page.match(/data-supplier-guide-return=/g)||[]).length,1);
  fs.writeFileSync(f,page);
 }
 require('./test-supplier-evidence-locales.cjs');
 console.log('PASS all 25 supplier-to-field-guide return links; calculation forms and scripts unchanged.');
}
finally{
 if(redirectMoved)fs.renameSync(backup,alias);
 fs.rmSync(backupDir,{recursive:true,force:true});
}
