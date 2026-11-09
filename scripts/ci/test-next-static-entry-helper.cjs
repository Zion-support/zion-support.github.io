'use strict';
function main(){
'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),Module=require('node:module'),qs=require('node:querystring');
const listeners=[process.listenerCount('uncaughtException'),process.listenerCount('unhandledRejection')];
const helper=require('./install-next-static-entry-guard.cjs');
assert.deepEqual([process.listenerCount('uncaughtException'),process.listenerCount('unhandledRejection')],listeners);
const next=process.env.NEXT_TEST_DIR ? path.resolve(process.env.NEXT_TEST_DIR) : path.dirname(require.resolve('next/package.json'));
const file=path.join(next,'dist/build/entries.js');const original=fs.readFileSync(file,'utf8');
const patched=helper.transform(original,'16.4.5').source;
const m=new Module(file,module);m.filename=file;m.paths=Module._nodeModulePaths(path.dirname(file));m._compile(patched,file);
const get=m.exports.getAppEntry;
let count=0;
function check(options,retains,builtin=false){
 const old=process.env.BUILTIN_APP_LOADER; const oldRspack=process.env.NEXT_RSPACK;
 if(builtin){process.env.BUILTIN_APP_LOADER='1';process.env.NEXT_RSPACK='1';}else delete process.env.BUILTIN_APP_LOADER;
 const opts={page:'/static/page',pagePath:'private-next-app-dir/static/page',appPaths:['/static/page'],allNormalizedAppPaths:['/other','/sibling'],...options};
 const before=structuredClone(opts);Object.freeze(opts);
 try{const result=get(opts);const query=qs.parse(result.import.slice(result.import.indexOf('?')+1,-1));assert.equal(Object.hasOwn(query,'allNormalizedAppPaths'),retains);if(retains)assert.deepEqual(query.allNormalizedAppPaths,opts.allNormalizedAppPaths);assert.deepEqual(opts,before);if(builtin){assert(result.import.startsWith('builtin:next-app-loader?'));assert.deepEqual(result,require(file).getAppEntry(structuredClone(before)));}count++;}
 finally{if(old===undefined)delete process.env.BUILTIN_APP_LOADER;else process.env.BUILTIN_APP_LOADER=old;if(oldRspack===undefined)delete process.env.NEXT_RSPACK;else process.env.NEXT_RSPACK=oldRspack;}
}
check({},false);check({appPaths:'/static/page'},false);check({appPaths:[]},false);
for(const appPaths of [undefined,null,1,{},['/static/page',null],new Array(1),'/x/[id]/page','/x/%5Bid%5D/page','/x/%255Bid%255D/page'])check({appPaths},true);
for(const page of [undefined,null,1,'','/x/[id]/page','/x/%5bid%5d/page'])check({page},true);
for(const pagePath of [undefined,null,1,'','private-next-app-dir/[id]/page'])check({pagePath},true);
check({},true,true);
assert.equal((patched.match(/Object.keys\(appPathsPerRoute\)/g)||[]).length,1);
assert.equal((patched.match(/^\s+allNormalizedAppPaths,$/gm)||[]).length,2);
const isolated=fs.mkdtempSync(path.join(require('node:os').tmpdir(),'next-static-entry-helper-'));
try {fs.mkdirSync(path.join(isolated,'dist/build'),{recursive:true});fs.writeFileSync(path.join(isolated,'package.json'),JSON.stringify({version:'16.4.5'}));const target=path.join(isolated,'dist/build/entries.js');fs.writeFileSync(target,original);
assert.equal(helper.install(isolated),true);assert.equal(fs.readFileSync(target,'utf8'),patched);
assert.equal(helper.install(isolated),false);
for(const [src,version] of [[original,'16.4.4'],[original+'\n','16.4.5'],[patched+'\n','16.4.5'],['syntax invalid !!!','16.4.5'],[original.replace('function getAppEntry(opts) {','function getAppEntry(opts) {\n opts = {...opts};'),'16.4.5']]){
 fs.writeFileSync(path.join(isolated,'package.json'),JSON.stringify({version}));fs.writeFileSync(target,src);assert.throws(()=>helper.install(isolated),/NEXT_ENTRY_/);assert.equal(fs.readFileSync(target,'utf8'),src);count++;
}
assert.equal(fs.readdirSync(path.dirname(target)).length,1);
const batchHelper=require('./limit-next-app-entry-concurrency.cjs');
const batch=batchHelper.transformSource('16.4.5',original).source;
const guardedBatch=helper.transform(batch,'16.4.5').source;
assert(guardedBatch.includes(batchHelper.REPLACEMENT));
assert.equal(helper.transform(guardedBatch,'16.4.5').changed,false);
fs.writeFileSync(path.join(isolated,'package.json'),JSON.stringify({version:'16.4.5'}));fs.writeFileSync(target,batch);
assert.equal(helper.install(isolated),true);assert.equal(fs.readFileSync(target,'utf8'),guardedBatch);assert.equal(helper.install(isolated),false);
count+=4;
// Reject a symlink before any target or temporary-file write.
const referent=path.join(isolated,'referent.js');fs.writeFileSync(referent,original);fs.unlinkSync(target);fs.symlinkSync(referent,target);
assert.throws(()=>helper.install(isolated),/NEXT_ENTRY_TARGET_REJECTED/);assert.equal(fs.readFileSync(referent,'utf8'),original);assert(fs.lstatSync(target).isSymbolicLink());fs.unlinkSync(target);fs.writeFileSync(target,original);count++;
// Inject a write failure without changing host permissions or shared files.
const write=fs.writeFileSync;
try { fs.writeFileSync=(name,...args)=>{if(String(name).includes('.static-entry-guard-'))throw new Error('synthetic');return write(name,...args);};assert.throws(()=>helper.install(isolated),/NEXT_ENTRY_WRITE_FAILED/); }
finally {fs.writeFileSync=write;}
assert.equal(fs.readFileSync(target,'utf8'),original);assert.equal(fs.readdirSync(path.dirname(target)).length,1);count++;
// Simulate another writer between temp creation and the final target recheck.
try { fs.writeFileSync=(name,...args)=>{const r=write(name,...args);if(String(name).includes('.static-entry-guard-'))write(target,original+'\n');return r;};assert.throws(()=>helper.install(isolated),/NEXT_ENTRY_CONCURRENT_CHANGE/); }
finally {fs.writeFileSync=write;}
assert.equal(fs.readFileSync(target,'utf8'),original+'\n');assert.equal(fs.readdirSync(path.dirname(target)).length,1);count++;
console.log('NEXT_ENTRY_HELPER_TESTS_PASS '+count);
} finally { fs.rmSync(isolated,{recursive:true,force:true}); }

}
try {main();} catch {console.error('NEXT_ENTRY_HELPER_TEST_FAILED');process.exitCode=1;}
