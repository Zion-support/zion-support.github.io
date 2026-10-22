'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),nav=require('./render-productivity-navigation.cjs'),qa=require('./productivity-qa-contract.cjs');let checks=0;
function test(){qa.contract();for(const l of Object.keys(qa.C))for(const slug of ['',...qa.S]){const source='<html lang="'+qa.C[l].lang+'"><body><form><input name="keep"></form><script>window.keep=true;</script><!--zion-network-home:start--><section><p>Keep newer directory, SQL, ticket and AgentForge links.</p><a href="/keep/">Keep</a></section><!--zion-network-home:end--></body></html>';const h=nav.transform(source,l,slug);assert.equal(nav.transform(h,l,slug),h);assert.deepEqual(qa.protectedParts(h),qa.protectedParts(source));assert.equal(h.replace(qa.owned,''),source);assert.equal((h.match(qa.owned)||[]).length,1);assert.equal((h.match(/aria-current="page"/g)||[]).length,slug?1:0);checks+=5;}
for(const name of ['run','transform','route','block']){const bad={...nav};delete bad[name];assert.throws(()=>qa.contract(bad));checks++;}assert.throws(()=>nav.transform('<html><body></body></html>','en',''));checks++;assert.throws(()=>nav.transform('<html></html>','en',qa.S[0]));checks++;assert.throws(()=>nav.transform('<html><body></body></html>','xx',qa.S[0]));checks++;batchTests();console.log('PASS current-main navigation: '+checks+' synthetic assertions; five locales / six resources / unchanged surrounding bytes.');}
module.exports={test};if(require.main===module)test();

function batchTests(){
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'navigation-preflight-'));
 const assertRejected=(fn)=>{assert.throws(fn);checks++;};
 function snapshot(){const files={};function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else files[path.relative(out,f)]=fs.readFileSync(f,'utf8');}}walk(out);return files;}
 function unchanged(fn){const before=snapshot();assertRejected(fn);assert.deepEqual(snapshot(),before,'Validation failure must not write any files or manifest');checks++;}
 try{
  for(const l of Object.keys(qa.C))for(const slug of ['',...qa.S]){const f=qa.disk(out,slug?qa.route(l,slug):qa.home(l));fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,'<html lang="'+qa.C[l].lang+'"><head><title>Keep</title></head><body><form><input name="keep"></form><script>window.keep=true;</script><!--zion-network-home:start--><section><h2>Keep</h2></section><!--zion-network-home:end--></body></html>');}
  const first=qa.disk(out,qa.route('en',qa.S[0])),last=qa.disk(out,qa.route('de',qa.S[5])),saved=fs.readFileSync(last,'utf8');
  fs.unlinkSync(last);unchanged(()=>nav.run(out));assert(!fs.existsSync(path.join(out,'apps/productivity-navigation-publication.json')));checks++;fs.writeFileSync(last,saved);
  fs.writeFileSync(last,saved.replace('lang="de"','lang="fr"'));unchanged(()=>nav.run(out));fs.writeFileSync(last,saved);
  const prepared=nav.plan(out);fs.appendFileSync(last,' ');unchanged(()=>nav.apply(prepared));fs.writeFileSync(last,saved);
  const source=fs.readFileSync(first,'utf8'),block=nav.block('en',qa.S[0]);
  for(const bad of [source+block+block,source+'<!--productivity-navigation:start-->',source+'<!--productivity-navigation:end-->',source+'<nav data-productivity-navigation="outside"></nav>'])assertRejected(()=>nav.transform(bad,'en',qa.S[0]));
  const outside=path.join(os.tmpdir(),path.basename(out)+'-outside.html');fs.writeFileSync(outside,saved);fs.unlinkSync(last);fs.symlinkSync(outside,last);assertRejected(()=>nav.run(out));assert.equal(fs.readFileSync(first,'utf8'),source);checks++;fs.unlinkSync(last);fs.unlinkSync(outside);fs.writeFileSync(last,saved);
  fs.mkdirSync(path.join(out,'apps'));fs.mkdirSync(path.join(out,'apps/productivity-navigation-publication.json'));unchanged(()=>nav.run(out));fs.rmdirSync(path.join(out,'apps/productivity-navigation-publication.json'));
  const manifest=nav.run(out);assert.equal(manifest.pages.length,30);assert.equal(manifest.homes.length,5);checks+=2;const rendered=snapshot();nav.run(out);assert.deepEqual(snapshot(),rendered,'Complete batch byte-idempotent');checks++;
 }finally{fs.rmSync(out,{recursive:true,force:true});}
}
