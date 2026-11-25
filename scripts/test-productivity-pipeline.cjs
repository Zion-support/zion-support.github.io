'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),qa=require('./productivity-qa-contract.cjs'),release=require('./render-productivity-release.cjs');
function write(out,url,text){const f=path.join(out,url.replace(/^\//,''));fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,text);}
function fixture(out){write(out,'/index.html','<html lang="en"><body><main>English root sentinel</main><form id="root-keep"></form><script>window.rootKeep=true;</script></body></html>');for(const l of Object.keys(qa.C)){const html='<html lang="'+qa.C[l].lang+'"><head></head><body><form id="keep"><input name="unchanged"></form><script>window.keep=true;</script><main id="app-paths-home"><!--zion-network-home:start--><section data-network-home="fixture"><h2>Existing promotion</h2><p>Original</p><nav><a href="/keep/">Keep</a><a data-directory-entry="keep" href="/zion-app-network/directory-'+l+'.html">Directory</a><a data-field-ticket-home="keep" href="/existing-ticket/">Ticket</a><a data-agentforge-home="keep" href="/existing-agentforge/">AgentForge</a></nav></section><!--zion-network-home:end--></main></body></html>';write(out,qa.home(l)+'index.html',html);write(out,'/'+(l==='en'?'':l+'/')+'apps/app-verification-guide.html','<html><body><main><h1>Keep guide</h1></main></body></html>');}write(out,'/apps/network-publication-coverage.json',JSON.stringify({groups:qa.S.map(s=>({path:s+'/index.html',available:['en'],missing:['pt','es','fr','de']}))}));write(out,'/assets/css/site.css','body{margin:0}');}
function snapshot(out){const r={};function walk(p){for(const e of fs.readdirSync(p,{withFileTypes:true})){const f=path.join(p,e.name);if(e.isDirectory())walk(f);else r[path.relative(out,f)]=fs.readFileSync(f,'utf8');}}walk(out);return r;}
function test(){const publisher=fs.readFileSync(path.join(__dirname,'../.github/workflows/static-deploy.yml'),'utf8');assert(publisher.includes('workflow_dispatch:'));assert(!/^  (push|schedule):/m.test(publisher));assert(publisher.includes("if: github.ref == 'refs/heads/main'"));if(publisher.includes('uses: ./.github/workflows/canonical-pages.yml')){const canonical=fs.readFileSync(path.join(__dirname,'../.github/workflows/canonical-pages.yml'),'utf8');const prepare=canonical.indexOf('run: bash scripts/prepare-pages-out.sh'),upload=canonical.indexOf('uses: actions/upload-pages-artifact@');assert(prepare>=0&&upload>=0&&prepare<upload,'Canonical preparation must precede upload');const gate=fs.readFileSync(path.join(__dirname,'../.github/workflows/productivity-full-build-check.yml'),'utf8');assert(gate.includes('run: node scripts/verify-productivity-publication.cjs out'),'Read-only semantic gate must validate the actual canonical artifact');}else{const prepare=publisher.indexOf('bash scripts/prepare-pages-out.sh'),render=publisher.indexOf('node scripts/render-productivity-release.cjs out'),upload=publisher.indexOf('actions/upload-pages-artifact@');assert(prepare>=0&&render>=0&&upload>=0&&prepare<render&&render<upload,'Legacy preparation/rendering must precede upload');}const out=fs.mkdtempSync(path.join(os.tmpdir(),'productivity-current-'));try{fixture(out);const rootBefore=fs.readFileSync(path.join(out,'index.html'),'utf8');let r=release.run(out);assert.equal(fs.readFileSync(path.join(out,'index.html'),'utf8'),rootBefore,'Root English homepage is unchanged');assert.equal(qa.home('pt'),'/pt/');assert.equal(r.pages.length,35);const expectedLinks=Object.keys(qa.C).length*(3+qa.S.length*9);assert.equal(r.links,expectedLinks);const first=snapshot(out);release.run(out);assert.deepEqual(snapshot(out),first,'Complete sequence byte-idempotent');for(const l of Object.keys(qa.C)){const h=fs.readFileSync(qa.disk(out,qa.home(l)),'utf8');const compact=h.match(qa.owned)[0];assert.equal((compact.match(/\bhref=/g)||[]).length,3);assert.equal((compact.match(/<li\b/g)||[]).length,0);for(const slug of qa.S)assert(h.replace(qa.owned,'').includes('href="'+qa.route(l,slug)+'"'),'All six resource cards remain outside compact navigation');for(const marker of ['data-directory-entry="keep"','data-field-ticket-home="keep"','data-agentforge-home="keep"'])assert(h.includes(marker),'Preserve newer additions');}const late=qa.disk(out,qa.home('de'));fs.writeFileSync(late,fs.readFileSync(late,'utf8').replace('lang="de"','lang="en"'));const before=snapshot(out);assert.throws(()=>release.run(out));assert.deepEqual(snapshot(out),before,'Late preflight rejection must not write');bootstrapTests();console.log('PASS current-main pipeline: 35 fixture pages / '+expectedLinks+' owned links / six retained resource cards per homepage / full-sequence idempotence / preserved newer additions / late preflight rejection.');}finally{fs.rmSync(out,{recursive:true,force:true});}}
module.exports={fixture,snapshot,test};if(require.main===module)test();


// A fresh production export can have maintained resource sources without an
// inventory. Count actual locales, then require successful generation before
// claiming complete coverage. Missing HTML is generated from validated authored
// renderers; the initial inventory must not claim those pages already exist.
function bootstrapTests(){
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'productivity-inventory-'));
 try{
  fixture(out);
  const inventory=path.join(out,'apps/network-publication-coverage.json');
  fs.unlinkSync(inventory);
  for(const slug of qa.S)write(out,qa.route('en',slug)+'index.html','<html lang="en"><body>Existing authored resource</body></html>');
  write(out,qa.route('pt',qa.S[0])+'index.html','<html lang="en"><body>Wrong-locale source is not counted as Portuguese</body></html>');
  const before=snapshot(out),plan=release.preflight(out),report=JSON.parse(plan.after);
  assert.deepEqual(snapshot(out),before,'Inventory planning is read-only');
  for(const row of report.groups){assert.deepEqual(row.available,['en']);assert.deepEqual(row.missing,['pt','es','fr','de']);}
  const source=qa.disk(out,qa.route('en',qa.S.at(-1))),saved=fs.readFileSync(source,'utf8');
  fs.unlinkSync(source);const missing=snapshot(out),pending=JSON.parse(release.preflight(out).after);
  const absent=pending.groups.find(row=>row.path===qa.S.at(-1)+'/index.html');
  assert.deepEqual(absent.available,[]);assert.deepEqual(absent.missing,Object.keys(qa.C));
  assert.deepEqual(snapshot(out),missing,'Missing HTML is not reported as already published');
  const authored=require('./render-productivity-incident-locales.cjs'),originalPage=authored.page;
  try{authored.page=()=>'<html lang="xx"><body>Broken authored locale</body></html>';assert.throws(()=>release.run(out),/Authored resource locale/);assert.deepEqual(snapshot(out),missing,'Invalid authored source is rejected before writes');}finally{authored.page=originalPage;}
  fs.writeFileSync(source,saved);
  release.run(out);
  const complete=JSON.parse(fs.readFileSync(inventory,'utf8'));
  for(const slug of qa.S){const row=complete.groups.find(item=>item.path===slug+'/index.html');assert.deepEqual(row.available,Object.keys(qa.C));assert.deepEqual(row.missing,[]);}
  complete.groups.push({...complete.groups[0]});fs.writeFileSync(inventory,JSON.stringify(complete));const duplicated=snapshot(out);
  assert.throws(()=>release.run(out),/Unique coverage row/);assert.deepEqual(snapshot(out),duplicated,'Duplicate inventory is rejected before writes');
 }finally{fs.rmSync(out,{recursive:true,force:true});}
}
