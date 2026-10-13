'use strict';
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),assert=require('node:assert/strict');
const N=require('./render-productivity-navigation.cjs');
let checks=0;function ok(value,label){assert(value,label);checks++;}function eq(a,b,label){assert.deepEqual(a,b,label);checks++;}function rejects(fn,label){assert.throws(fn,undefined,label);checks++;}
function fixture(l,i){return '<!doctype html><html lang="'+N.C[l].lang+'"><head><link rel="canonical" href="https://ziontechgroup.com'+N.route(l,i)+'"><title>Preserve</title></head><body><main><h1>Keep translated body</h1><form><input name="original"></form><script>window.keep="</main> text";</script><p>Original</p></main></body></html>';}
// The source contract rejects apparent extra main closes in scripts rather than editing them.
function safeFixture(l,i){return fixture(l,i).replace('</main> text','safe text');}
function verify(out){
 for(const l of Object.keys(N.C))for(let i=0;i<N.S.length;i++){
  const before=safeFixture(l,i),after=N.transform(before,l,i);
  eq(N.transform(after,l,i),after,'Idempotence');eq(N.protectedParts(after),N.protectedParts(before),'Protected sections');
  eq(after.replace(/<!--productivity-navigation:start-->[\s\S]*?<!--productivity-navigation:end-->/g,''),before,'Outside block unchanged');
  eq((after.match(/data-productivity-navigation=/g)||[]).length,1,'Unique block');
  ok(after.includes(N.catalog(l))&&after.includes(N.home(l)),'Locale returns');
  for(const j of N.RELATED[i])ok(after.includes('href="'+N.route(l,j)+'"'),'Related locale route');
  ok(after.includes('aria-labelledby="productivity-related-heading"')&&after.includes(':focus-visible'),'Semantics and visible focus');
  rejects(()=>N.transform(before.replace('lang="'+N.C[l].lang+'"','lang="xx"'),l,i),'Wrong language');
  rejects(()=>N.transform(before.replace('https://ziontechgroup.com'+N.route(l,i),'https://example.com/wrong/'),l,i),'Wrong canonical');
  rejects(()=>N.transform(before.replace('</main>',''),l,i),'Missing main close');
  rejects(()=>N.transform(before+N.block(l,i)+N.block(l,i),l,i),'Duplicate owned blocks');
  rejects(()=>N.transform(before+'<!--productivity-navigation:start-->',l,i),'Malformed marker');
  rejects(()=>N.transform(before.replace('<h1>','<h1 id="productivity-related-heading">'),l,i),'ID collision');
  if(out){const h=fs.readFileSync(path.join(out,N.route(l,i).slice(1),'index.html'),'utf8');eq(N.transform(h,l,i),h,'Rendered sample idempotence');}
 }
 rejects(()=>N.transform(safeFixture('en',0),'xx',0),'Unknown locale');rejects(()=>N.transform(safeFixture('en',0),'en',99),'Unknown resource');
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'productivity-nav-'));
 try{
  for(const l of Object.keys(N.C))for(let i=0;i<N.S.length;i++){const f=path.join(tmp,N.route(l,i).slice(1),'index.html');fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,safeFixture(l,i));}
  const first=path.join(tmp,'agent-brief/index.html'),last=path.join(tmp,'de/ai-incident-response/index.html'),original=fs.readFileSync(first,'utf8');
  fs.writeFileSync(last,'invalid');rejects(()=>N.render(tmp),'All inputs checked before writes');eq(fs.readFileSync(first,'utf8'),original,'No partial writes on validation failure');ok(!fs.existsSync(path.join(tmp,'apps/productivity-navigation-release.json')),'No success manifest on validation failure');
  fs.writeFileSync(last,safeFixture('de',5));const plan=N.plan(tmp);fs.writeFileSync(last,safeFixture('de',5)+' ');rejects(()=>N.apply(plan),'Stale input rejection');eq(fs.readFileSync(first,'utf8'),original,'No writes on stale input');
 }finally{fs.rmSync(tmp,{recursive:true,force:true});}
 console.log('PASS productivity navigation: '+checks+' assertions; synthetic contracts'+(out?' and 30 rendered sample editions':'')+'. Not a full build or browser certification.');return checks;
}
module.exports={verify};if(require.main===module)verify(process.argv[2]);
