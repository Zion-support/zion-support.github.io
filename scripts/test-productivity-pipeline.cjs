'use strict';
// Scoped renderer-chain contract. Does not deploy, fetch, send email or certify the whole site.
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),assert=require('node:assert/strict');
const legacy=require('./render-legacy-three-locales.cjs'),incident=require('./render-productivity-incident-locales.cjs'),workflow=require('./render-productivity-workflow-links.cjs'),bridge=require('./render-network-home-bridge.cjs'),nav=require('./render-productivity-navigation.cjs');
let checks=0;
const eq=(a,b,label)=>{assert.deepEqual(a,b,label);checks++;};
const ok=(value,label)=>{assert(value,label);checks++;};
const disk=(out,url)=>path.join(out,url.replace(/^\//,'')+(url.endsWith('/')?'index.html':''));
function write(out,url,text){const f=disk(out,url);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,text);}
function html(l,url,body){return '<!doctype html><html lang="'+nav.C[l].lang+'"><head><meta charset="utf-8"><link rel="canonical" href="https://ziontechgroup.com'+url+'"></head><body>'+body+'</body></html>';}
function snapshot(out){const files={};function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else if(e.isFile())files[path.relative(out,f)]=fs.readFileSync(f,'utf8');}}walk(out);return files;}
function chain(out){legacy.run(out);incident.run(out);workflow.run(out);bridge.render(out);}
function verifyArtifact(out){
 for(const l of Object.keys(nav.C)){
  for(let i=0;i<nav.S.length;i++){
   const h=fs.readFileSync(disk(out,nav.route(l,i)),'utf8');eq(nav.transform(h,l,i),h,'Resource idempotence '+l+'/'+nav.S[i]);
   eq((h.match(/data-productivity-navigation=/g)||[]).length,1,'One related block');
   eq((h.match(/rel="alternate"/g)||[]).length,6,'Preserved alternate metadata');
   ok(h.includes(nav.catalog(l))&&h.includes(nav.home(l)),'Catalog and home returns');
   for(const j of nav.RELATED[i])ok(fs.existsSync(disk(out,nav.route(l,j))),'Related locale destination exists');
  }
  const h=fs.readFileSync(disk(out,nav.home(l)),'utf8');eq(bridge.transform(h,l),h,'Homepage idempotence');
  eq((h.match(/data-network-bridge=/g)||[]).length,1,'One bridge');
  eq((h.match(/data-productivity-workflow=/g)||[]).length,1,'One worked-workflow promotion');
 }
}
function verify(out){
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'productivity-pipeline-'));
 try{
  const baseline={};
  for(const l of Object.keys(nav.C)){
   const home=nav.home(l),h=html(l,home,'<form id="keep"><input name="unchanged"></form><script>window.keep=true;</script><main><!--zion-network-home:start--><section data-network-home="fixture"><h2>Existing promotion</h2><p>Original introduction</p><nav><a href="/keep/">Keep</a></nav></section><!--zion-network-home:end--></main>');
   write(tmp,home,h);baseline[l]=nav.protectedParts(h);
   write(tmp,(l==='en'?'/':'/'+l+'/')+'apps/app-verification-guide.html',html(l,'/guide/','<main><h1>Existing guide</h1></main>'));
  }
  write(tmp,'/apps/network-publication-coverage.json',JSON.stringify({groups:nav.S.map(s=>({path:s+'/index.html',available:['en'],missing:['pt','es','fr','de']}))}));
  chain(tmp);verifyArtifact(tmp);
  for(const l of Object.keys(nav.C))eq(nav.protectedParts(fs.readFileSync(disk(tmp,nav.home(l)),'utf8')),baseline[l],'Homepage head/forms/scripts preserved');
  const before=snapshot(tmp);chain(tmp);eq(snapshot(tmp),before,'Whole scoped chain byte-idempotent');
  const coverage=JSON.parse(fs.readFileSync(disk(tmp,'/apps/network-publication-coverage.json'),'utf8'));
  for(const s of nav.S)eq(coverage.groups.find(g=>g.path===s+'/index.html').missing,[],'Scoped coverage row reconciled');
  const first=disk(tmp,'/agent-brief/'),last=disk(tmp,'/de/ai-incident-response/'),saved=fs.readFileSync(first,'utf8');fs.writeFileSync(last,'invalid');assert.throws(()=>bridge.render(tmp));checks++;eq(fs.readFileSync(first,'utf8'),saved,'Invalid late input prevents earlier writes');
 }finally{fs.rmSync(tmp,{recursive:true,force:true});}
 if(out)verifyArtifact(out);
 console.log('PASS productivity pipeline: '+checks+' assertions; ordered six-resource render chain, scoped coverage, metadata/forms/scripts, duplicate prevention and late-input rejection. Not full-build, live, browser or native-editorial certification.');return checks;
}
module.exports={chain,verifyArtifact,verify};if(require.main===module)verify(process.argv[2]);
