'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),nav=require('./render-productivity-navigation.cjs'),qa=require('./prepare-productivity-qa.cjs');
// Fail explicitly if a concurrent renderer replacement breaks the shared QA API.
function verifyRendererContract(renderer){
 for(const key of ['route','home','catalog','transform','protectedParts','plan','apply','render'])assert.equal(typeof renderer[key],'function','Required renderer export '+key);
 assert(Array.isArray(renderer.S)&&renderer.S.length===6,'Six resource slugs required');
 assert(Array.isArray(renderer.RELATED)&&renderer.RELATED.length===renderer.S.length,'One related-link row per resource required');
 assert.deepEqual(Object.keys(renderer.C),['en','pt','es','fr','de'],'Five explicit locale dictionaries required');
 for(const [locale,c] of Object.entries(renderer.C)){
  assert.equal(c.lang,locale==='pt'?'pt-BR':locale,'Declared language for '+locale);
  assert(Array.isArray(c.names)&&c.names.length===renderer.S.length,'Localized resource names for '+locale);
  assert.equal(new URL(renderer.catalog(locale),'https://ziontechgroup.com').hash,'#'+locale,'Matching catalog anchor');
  for(let i=0;i<renderer.S.length;i++){
   assert.equal(renderer.route(locale,i),'/'+(locale==='en'?'':locale+'/')+renderer.S[i]+'/','Canonical resource route');
   assert(renderer.RELATED[i].every(j=>Number.isInteger(j)&&j>=0&&j<renderer.S.length&&j!==i),'Valid related-resource indices');
  }
 }
 return true;
}
verifyRendererContract(nav);
for(const key of ['S','RELATED','transform','catalog','apply']){
 const broken={...nav};delete broken[key];assert.throws(()=>verifyRendererContract(broken),'Missing '+key+' must reject');
}
const wrongLocale={...nav,C:{...nav.C,de:{...nav.C.de,lang:'en'}}};assert.throws(()=>verifyRendererContract(wrongLocale),'Wrong locale must reject');
const wrongRoute={...nav,route:()=>'/wrong/'};assert.throws(()=>verifyRendererContract(wrongRoute),'Wrong resource route must reject');
const wrongRelated={...nav,RELATED:nav.RELATED.map(row=>row.slice())};wrongRelated.RELATED[0]=[0];assert.throws(()=>verifyRendererContract(wrongRelated),'Self-link must reject');
console.log('PASS renderer API contract: five locales/six resources/eight function exports; eight negative controls.');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'productivity-qa-test-'));let n=0;
try{const out=path.join(tmp,'out');function write(url,text){const f=path.join(out,url.slice(1),'index.html');fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,text);return f;}
let catalog='';for(const l of Object.keys(nav.C)){catalog+='<a id="'+l+'"></a>\n'+nav.S.map((s,i)=>'https://ziontechgroup.com'+nav.route(l,i)).join('\n')+'\n';for(let i=0;i<nav.S.length;i++){const h='<html lang="'+nav.C[l].lang+'"><head><link rel="canonical" href="https://ziontechgroup.com'+nav.route(l,i)+'"></head><body><main></main></body></html>';write(nav.route(l,i),nav.transform(h,l,i));}write(nav.home(l),'<html lang="'+nav.C[l].lang+'"><a href="'+nav.catalog(l)+'">catalog</a></html>');}
const cf=path.join(tmp,'catalog.md');fs.writeFileSync(cf,catalog);const expected=qa.blob(Buffer.from(catalog));assert.equal(qa.validate(out,cf,expected).pages.length,35);n++;assert.throws(()=>qa.validate(out,cf,'invalid'));n++;assert.throws(()=>qa.catalogSections(catalog.replace('<a id="de"></a>','')));n++;assert.throws(()=>qa.catalogSections(catalog+'<a id="en"></a>'));n++;
const late=path.join(out,'de',nav.S[5],'index.html'),before=fs.readFileSync(late,'utf8');fs.writeFileSync(late,before.replace('/de/ai-access-reviewer/','/es/ai-access-reviewer/'));assert.throws(()=>qa.validate(out,cf,expected));n++;fs.writeFileSync(late,before);const home=path.join(out,'fr','index.html');fs.writeFileSync(home,'<html lang="en"></html>');assert.throws(()=>qa.validate(out,cf,expected));n++;
if(process.argv[2]){fs.writeFileSync(home,'<html lang="fr"><a href="'+nav.catalog('fr')+'">catalog</a></html>');const staged=qa.prepare(out,path.join(tmp,'good'),process.argv[2]);assert.equal(staged.pages.length,35);assert.equal(staged.files.length,35);n++;const first=path.join(out,nav.S[0],'index.html');fs.writeFileSync(first,fs.readFileSync(first,'utf8').replace('</head>','<script src="/assets/missing.js"></script></head>'));const bad=path.join(tmp,'bad');assert.throws(()=>qa.prepare(out,bad,process.argv[2]));assert(!fs.existsSync(bad));n++;}
console.log('PASS productivity QA fixtures:'+n+' checks;wrong catalog bytes,missing/duplicate anchor,wrong-language owned link,wrong homepage.');}finally{fs.rmSync(tmp,{recursive:true,force:true});}
