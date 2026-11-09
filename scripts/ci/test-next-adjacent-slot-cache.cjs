'use strict';
async function main(){
'use strict';
const fs=require('node:fs'),fsp=fs.promises,path=require('node:path'),os=require('node:os'),Module=require('node:module'),assert=require('node:assert/strict');
const next=process.env.NEXT_TEST_DIR?path.resolve(process.env.NEXT_TEST_DIR):path.dirname(require.resolve('next/package.json')),file=next+'/dist/build/webpack/loaders/next-app-loader/index.js';
const baseline=require(file).default,m=new Module(file,module);m.filename=file;m.paths=Module._nodeModulePaths(path.dirname(file));m._compile(require('./install-next-adjacent-slot-cache.cjs').transform(fs.readFileSync(file,'utf8'),'16.4.5').source,file);const candidate=m.exports.default;
async function semantics(){const root=await fsp.mkdtemp(path.join(os.tmpdir(),'adjacent-semantics-'));const appDir=path.join(root,'app'),wide=path.join(appDir,'services');const oldOpen=fsp.opendir,oldStat=fsp.stat;let count=0;
try{await fsp.mkdir(path.join(wide,'item0'),{recursive:true});await fsp.writeFile(path.join(appDir,'layout.js'),'export default function Layout({children}){return children}');await fsp.writeFile(path.join(wide,'item0/page.js'),'export default function Page(){return null}');
const page='/services/item0/page';
async function run(loader,compilation,compiler,flags={}){let deps=0;const opts={name:'app'+page,page,pagePath:'private-next-app-dir'+page,appDir,appPaths:[page],pageExtensions:['js'],rootDir:root,isDev:false,nextConfigOutput:'export',basePath:'',middlewareConfig:Buffer.from('{}').toString('base64'),...flags};const context={getOptions:()=>opts,_module:{buildInfo:{}},_compilation:compilation,_compiler:compiler,addMissingDependency(){},addContextDependency(){deps++;}};if(flags.noContextApi)delete context.addContextDependency;const output=await loader.call(context);return {output,deps};}
const {DeferredEntriesPlugin}=require(next+'/dist/build/webpack/plugins/deferred-entries-plugin');const deferred=()=>new DeferredEntriesPlugin({config:{experimental:{}},deferredEntrypoints:{}});
for(const settings of [{mode:'cached',comp:{},compiler:{options:{plugins:[]}}},{mode:'missing-context-api',comp:{},compiler:{options:{plugins:[]}},flags:{noContextApi:true}},{mode:'dev',comp:{},compiler:{options:{plugins:[]}},flags:{isDev:true}},{mode:'missing-comp',compiler:{options:{plugins:[]}}},{mode:'missing-compiler',comp:{}},{mode:'missing-plugin-metadata',comp:{},compiler:{options:{}}},{mode:'invalid-plugin-metadata',comp:{},compiler:{options:{plugins:{}}}},{mode:'deferred',comp:{},compiler:{options:{plugins:[deferred()]}}}]){
 const counts=[];let expected;
 for(const loader of [baseline,candidate]){const comp=settings.comp?{}:undefined;let scans=0;fsp.opendir=async function(dir,...args){if(path.resolve(dir)===wide)scans++;return Reflect.apply(oldOpen,this,[dir,...args]);};const one=await run(loader,comp,settings.compiler,settings.flags);const two=await run(loader,comp,settings.compiler,settings.flags);assert.equal(one.output,two.output);if(expected)assert.equal(two.output,expected);else expected=two.output;counts.push(scans);if(loader===candidate&&settings.mode==='cached')assert(one.deps>0&&two.deps>0);else if(loader===candidate)assert.equal(two.deps,0);}
 if(settings.mode==='cached')assert(counts[1]<counts[0]);else assert.equal(counts[1],counts[0]);count++;
}
fsp.opendir=oldOpen;
// Same compilation add/remove, plus fresh compilation, must see filesystem changes.
const cc={},bc={},compiler={options:{plugins:[]}};await run(candidate,cc,compiler);await run(baseline,bc,compiler);
await fsp.mkdir(path.join(wide,'@side'));await fsp.writeFile(path.join(wide,'@side/default.js'),'export default function Default(){return null}');
let expected=(await run(baseline,bc,compiler)).output,actual=(await run(candidate,cc,compiler)).output;assert.equal(actual,expected);assert(actual.includes('@side/default.js'));count++;
assert.equal((await run(candidate,{},compiler)).output,expected);count++;
await fsp.rm(path.join(wide,'@side'),{recursive:true});expected=(await run(baseline,bc,compiler)).output;actual=(await run(candidate,cc,compiler)).output;assert.equal(actual,expected);assert(!actual.includes('@side/default.js'));count++;
// Deferred/dev bypass must see same-compilation additions too.
for(const flags of [{compiler:{options:{plugins:[deferred()]}}},{compiler,options:{isDev:true}}]){const comp={};await run(candidate,comp,flags.compiler,flags.options);await fsp.mkdir(path.join(wide,'@side'));await fsp.writeFile(path.join(wide,'@side/default.js'),'export default function Default(){return null}');assert((await run(candidate,comp,flags.compiler,flags.options)).output.includes('@side/default.js'));await fsp.rm(path.join(wide,'@side'),{recursive:true});count++;}
// Original stat errors remain swallowed, not converted to new exceptions.
fsp.stat=async function(dir,...args){if(path.resolve(dir)===wide)throw Object.assign(Error('stat'),{code:'EACCES'});return Reflect.apply(oldStat,this,[dir,...args]);};assert.equal((await run(candidate,{},compiler)).output,(await run(baseline,{},compiler)).output);fsp.stat=oldStat;count++;
// Open error after successful stat propagates unchanged and retry is not poisoned.
for(const loader of [baseline,candidate]){const comp={},error=Error('open');fsp.opendir=async function(dir,...args){if(path.resolve(dir)===wide)throw error;return Reflect.apply(oldOpen,this,[dir,...args]);};await assert.rejects(run(loader,comp,compiler),e=>e===error);fsp.opendir=oldOpen;assert.equal((await run(loader,comp,compiler)).output,(await run(baseline,{},compiler)).output);count++;}
for(const flags of [{explicitParallelRouteChildren:true},{strictRouteMatching:true,isFinalRouteMatcher:true},{explicitParallelRouteChildren:true,strictRouteMatching:true,isFinalRouteMatcher:true}]){assert.equal((await run(candidate,{},compiler,flags)).output,(await run(baseline,{},compiler,flags)).output);count++;}
// Slot-like files and symlinks are not directory slots; preserve native dirent behavior.
await fsp.writeFile(path.join(wide,'@file'),'not a directory');await fsp.symlink(path.join(wide,'item0'),path.join(wide,'@link'));await fsp.mkdir(path.join(wide,'@actual'));await fsp.writeFile(path.join(wide,'@actual/default.js'),'export default function Default(){return null}');
assert.equal((await run(candidate,{},compiler)).output,(await run(baseline,{},compiler)).output);count++;
// Mixed flags share only names, never the children decision or return array.
const mixed={};for(const flags of [{},{explicitParallelRouteChildren:true},{strictRouteMatching:true,isFinalRouteMatcher:true},{}])assert.equal((await run(candidate,mixed,compiler,flags)).output,(await run(baseline,{},compiler,flags)).output);count++;
// Concurrent cold misses may duplicate scans, but preserve every output.
const concurrent={};const outputs=await Promise.all(Array.from({length:8},()=>run(candidate,concurrent,compiler)));const reference=(await run(baseline,{},compiler)).output;assert(outputs.every(x=>x.output===reference));count++;
// A partial directory iteration that rejects must not publish cache state.
for(const loader of [baseline,candidate]){const comp={},error=Error('iteration');fsp.opendir=async function(dir,...args){const handle=await Reflect.apply(oldOpen,this,[dir,...args]);if(path.resolve(dir)!==wide)return handle;return {[Symbol.asyncIterator]:async function*(){for await(const item of handle){yield item;throw error;}}};};await assert.rejects(run(loader,comp,compiler),e=>e===error);fsp.opendir=oldOpen;assert.equal((await run(loader,comp,compiler)).output,reference);count++;}
// Missing high-resolution fingerprint data bypasses cache rather than using undefined keys.
fsp.stat=async function(dir,...args){const value=await Reflect.apply(oldStat,this,[dir,...args]);if(args[0]?.bigint&&path.resolve(dir)===wide)return {isDirectory:()=>true,dev:value.dev,ino:value.ino};return value;};const invalidFp={};await run(candidate,invalidFp,compiler);assert.equal((await run(candidate,invalidFp,compiler)).output,reference);fsp.stat=oldStat;count++;
console.log('ADJACENT_SLOT_SEMANTICS_PASS '+count);
}finally{fsp.opendir=oldOpen;fsp.stat=oldStat;await fsp.rm(root,{recursive:true,force:true});}}

async function wideFixture(){
const crypto=require('node:crypto'),{performance}=require('node:perf_hooks');
 const results=[];
 for(const n of [128,256]){
 const root=await fsp.mkdtemp(path.join(os.tmpdir(),'next-wide-slots-'));const appDir=path.join(root,'app'),wide=path.join(appDir,'services');const original=fsp.opendir;let scans=0,dirents=0;
 try{
  await fsp.mkdir(wide,{recursive:true});await fsp.writeFile(path.join(appDir,'layout.js'),'export default function Layout({children}){return children}');
  for(let i=0;i<n;i++){const dir=path.join(wide,'item'+i);await fsp.mkdir(dir);await fsp.writeFile(path.join(dir,'page.js'),'export default function Page(){return null}');}
  fsp.opendir=async function(dir,...args){const handle=await Reflect.apply(original,this,[dir,...args]);if(path.resolve(dir)!==wide)return handle;scans++;return {[Symbol.asyncIterator]:async function*(){for await(const item of handle){dirents++;yield item;}}};};
  let baselineHash;
  for(const [variant,loader] of [['baseline',baseline],['candidate',candidate]]){scans=0;dirents=0;
  const compilation={},hash=crypto.createHash('sha256');let dependencies=0;const start=performance.now();
  for(let i=0;i<n;i++){const page='/services/item'+i+'/page';const options={name:'app'+page,page,pagePath:'private-next-app-dir'+page,appDir,appPaths:[page],pageExtensions:['js'],rootDir:root,isDev:false,nextConfigOutput:'export',basePath:'',middlewareConfig:Buffer.from('{}').toString('base64')};const result=await loader.call({getOptions:()=>options,_module:{buildInfo:{}},_compilation:compilation,_compiler:{options:{plugins:[]}},addMissingDependency(){},addContextDependency(){dependencies++;}});hash.update(result.replaceAll(root,'<fixture>'));}
  const outputHash=hash.digest('hex');if(variant==='baseline'){baselineHash=outputHash;assert.equal(scans,n+1);assert.equal(dirents,n*(n+1));}else{assert.equal(outputHash,baselineHash);assert.equal(scans,2);assert.equal(dirents,2*n);}
  results.push({variant,routes:n,elapsedMs:performance.now()-start,wideDirectoryScans:scans,wideDirectoryEntriesVisited:dirents,contextDependencyCalls:dependencies,generatedOutputSha256:outputHash,rssBytes:process.memoryUsage().rss});
  }
 }finally{fsp.opendir=original;await fsp.rm(root,{recursive:true,force:true});}
 }

console.log('ADJACENT_SLOT_WIDE_EQUIVALENCE_PASS '+JSON.stringify(results.map(({variant,routes,wideDirectoryScans,wideDirectoryEntriesVisited})=>({variant,routes,scans:wideDirectoryScans,dirents:wideDirectoryEntriesVisited}))));
}

function installer(){
 const helper=require('./install-next-adjacent-slot-cache.cjs'),source=fs.readFileSync(file,'utf8');const root=fs.mkdtempSync(path.join(os.tmpdir(),'adjacent-installer-'));const target=path.join(root,'dist/build/webpack/loaders/next-app-loader/index.js');
 try{
  fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(path.join(root,'package.json'),JSON.stringify({version:'16.4.5'}));fs.writeFileSync(target,source);
  assert.equal(helper.install(root),true);assert.equal(fs.readFileSync(target,'utf8'),helper.transform(source,'16.4.5').source);assert.equal(helper.install(root),false);
  for(const [value,version] of [[source,'16.4.4'],[source+'\n','16.4.5'],['invalid syntax !!!','16.4.5'],[helper.transform(source,'16.4.5').source+'\n','16.4.5']]){fs.writeFileSync(path.join(root,'package.json'),JSON.stringify({version}));fs.writeFileSync(target,value);assert.throws(()=>helper.install(root));assert.equal(fs.readFileSync(target,'utf8'),value);}
  fs.writeFileSync(path.join(root,'package.json'),JSON.stringify({version:'16.4.5'}));fs.writeFileSync(target,source);const referent=path.join(root,'referent.js');fs.writeFileSync(referent,source);fs.unlinkSync(target);fs.symlinkSync(referent,target);assert.throws(()=>helper.install(root));assert.equal(fs.readFileSync(referent,'utf8'),source);fs.unlinkSync(target);fs.writeFileSync(target,source);
  const write=fs.writeFileSync;
  try{fs.writeFileSync=(name,...args)=>{if(String(name).includes('.adjacent-slot-cache-'))throw Error('synthetic');return write(name,...args);};assert.throws(()=>helper.install(root));}finally{fs.writeFileSync=write;}assert.equal(fs.readFileSync(target,'utf8'),source);
  try{fs.writeFileSync=(name,...args)=>{const result=write(name,...args);if(String(name).includes('.adjacent-slot-cache-'))write(target,source+'\n');return result;};assert.throws(()=>helper.install(root));}finally{fs.writeFileSync=write;}assert.equal(fs.readFileSync(target,'utf8'),source+'\n');assert.equal(fs.readdirSync(path.dirname(target)).length,1);
  console.log('ADJACENT_SLOT_INSTALLER_PASS');
 }finally{fs.rmSync(root,{recursive:true,force:true});}
}
installer();await semantics();await wideFixture();

}
main().catch(()=>{console.error('ADJACENT_SLOT_TESTS_FAILED');process.exitCode=1;});
