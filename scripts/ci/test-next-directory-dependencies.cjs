'use strict';
const fs=require('node:fs'),fsp=fs.promises,path=require('node:path'),os=require('node:os'),Module=require('node:module'),assert=require('node:assert/strict');
const next=process.env.NEXT_TEST_DIR?path.resolve(process.env.NEXT_TEST_DIR):path.dirname(require.resolve('next/package.json'));
const file=path.join(next,'dist/build/webpack/loaders/next-app-loader/index.js');
const adjacent=require('./install-next-adjacent-slot-cache.cjs'),helper=require('./install-next-directory-dependencies.cjs');
const source=adjacent.transform(fs.readFileSync(file,'utf8'),'16.4.5').source;
function load(source){const m=new Module(file,module);m.filename=file;m.paths=Module._nodeModulePaths(path.dirname(file));m._compile(source,file);return m.exports.default;}
const baseline=load(source),candidate=load(helper.transform(source,'16.4.5').source);
const cases=[
 {page:'/team/[id]/settings/page',appPaths:['/team/[id]/settings/page']},
 {page:'/(one)/blog/[slug]/page',appPaths:['/(one)/blog/[slug]/page']},
 {page:'/dashboard/page',appPaths:['/dashboard/page','/dashboard/@panel/[id]/page']},
 {page:'/dashboard/page',appPaths:['/dashboard/page','/dashboard/@panel/[id]/page'],hasDefault:true},
 {page:'/static/page',appPaths:'/static/page'},
 {page:'/static/page',appPaths:[]},
 {page:'/static/page'},
 {page:'/encoded/%5Bid%5D/page',appPaths:['/encoded/%5Bid%5D/page']},
 {page:'/static/page',appPaths:['/static/page']},
 {page:'/(marketing)/about/page',appPaths:['/(marketing)/about/page']},
 {page:'/dashboard/page',appPaths:['/dashboard/page','/dashboard/@panel/page']},
 {page:'/feed/@modal/(.)photo/page',appPaths:['/feed/@modal/(.)photo/page']},
 {page:'/blog/[slug]/page',appPaths:['/blog/[slug]/page']},
 {page:'/docs/[...rest]/page',appPaths:['/docs/[...rest]/page']},
 {page:'/shop/[[...rest]]/page',appPaths:['/shop/[[...rest]]/page']},
 {page:'/dashboard/page',appPaths:['/dashboard/page','/dashboard/@panel/[id]/page']},
 {page:'/feed/@modal/(.)photo/[id]/page',appPaths:['/feed/@modal/(.)photo/[id]/page']}
];
const all=['/static','/about','/dashboard','/feed/photo','/blog/[slug]','/blog/archive','/docs/[...rest]','/docs/start','/shop/[[...rest]]','/shop/sale','/(two)/blog/archive/page','/team/[id]/overview'];
async function semantics(){
 const root=await fsp.mkdtemp(path.join(os.tmpdir(),'next-directory-semantics-')),appDir=path.join(root,'app');let count=0,reduced=0;
 async function run(loader,c,flags={},contextOverrides={}){
  const missing=new Set(),contexts=new Set();
  const options={name:'app'+c.page,page:c.page,pagePath:'private-next-app-dir'+c.page,appDir,appPaths:c.appPaths,allNormalizedAppPaths:all,pageExtensions:['js'],rootDir:root,isDev:false,nextConfigOutput:'export',basePath:'',...flags,middlewareConfig:Buffer.from('{}').toString('base64')};
  let output,error;try{output=await loader.call({getOptions:()=>options,_module:{buildInfo:{}},_compilation:{},_compiler:{options:{mode:'production',plugins:[]}},addMissingDependency(p){missing.add(p)},addContextDependency(p){contexts.add(p)},...contextOverrides});}catch(e){error=e;}
  return {output,error,missing,contexts};
 }
 async function compare(c,flags={},contextOverrides={},expectBypass=false){
  const before=await run(baseline,c,flags,contextOverrides),after=await run(candidate,c,flags,contextOverrides);count++;
  if(before.error||after.error){assert(before.error&&after.error);assert.equal(after.error.message,before.error.message);}else assert.equal(after.output,before.output);
  for(const dependency of before.missing)assert(after.missing.has(dependency)||after.contexts.has(path.dirname(dependency)),'dependency coverage');
  for(const dependency of before.contexts)assert(after.contexts.has(dependency),'context coverage');
  if(expectBypass)assert.deepEqual(after.missing,before.missing);
  else if(after.missing.size<before.missing.size)reduced++;
  return {before,after};
 }
 try {
  await fsp.mkdir(appDir,{recursive:true});await fsp.writeFile(path.join(appDir,'layout.js'),'export default function Layout({children}){return children}');
  for(const c of cases)for(const p of(Array.isArray(c.appPaths)&&c.appPaths.length?c.appPaths:[c.page])){const f=path.join(appDir,p+'.js');await fsp.mkdir(path.dirname(f),{recursive:true});await fsp.writeFile(f,'export default function Page(){return null}');}
  for(const c of cases){const defaultFile=path.join(appDir,'dashboard/@panel/default.js');if(c.hasDefault)await fsp.writeFile(defaultFile,'export default function Default(){return null}');else await fsp.unlink(defaultFile).catch(()=>{});
   for(const flags of [{},{explicitParallelRouteChildren:true},{strictRouteMatching:true,isFinalRouteMatcher:true},{explicitParallelRouteChildren:true,strictRouteMatching:true,isFinalRouteMatcher:true},{strictRouteMatching:true,isFinalRouteMatcher:false},{explicitParallelRouteChildren:true,strictRouteMatching:true,isFinalRouteMatcher:false}])await compare(c,flags);
  }
  const simple={page:'/static/page',appPaths:['/static/page']};
  for(const flags of [{isDev:true},{isDev:null},{isDev:'false'},{isDev:''},{nextConfigOutput:undefined},{pageExtensions:['js','../escape']},{pageExtensions:[]},{pageExtensions:'js'}])await compare(simple,flags,{},true);
  for(const overrides of [{_compilation:undefined},{_compiler:undefined},{_compiler:{options:{mode:'development',plugins:[]}}},{_compiler:{options:{mode:'production',plugins:[new(class DeferredEntriesPlugin{})]}}},{_compiler:{options:{mode:'production'}}}])await compare(simple,{},overrides,true);
  const implicitProduction=await compare(simple,{isDev:undefined});assert(implicitProduction.after.missing.size<implicitProduction.before.missing.size);
  const normal=await compare(simple);assert(normal.after.missing.size<normal.before.missing.size);assert(normal.after.missing.has(path.join(appDir,'layout.js')),'keep existing candidates');
  await fsp.symlink(path.join(root,'external.js'),path.join(appDir,'static/icon.js'));
  const dangling=await compare(simple);for(const p of dangling.before.missing)if(path.dirname(p)===path.join(appDir,'static'))assert(dangling.after.missing.has(p),'dangling link fallback');
  await fsp.writeFile(path.join(root,'external.js'),'export default function Icon(){return null}');
  const linked=await compare(simple);for(const p of linked.before.missing)if(path.dirname(p)===path.join(appDir,'static'))assert(linked.after.missing.has(p),'file link fallback');
  assert(reduced>0);console.log('NEXT_DIRECTORY_SEMANTICS_PASS '+count);
 } finally {await fsp.rm(root,{recursive:true,force:true});}
}
function installer(){
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'next-directory-install-')),target=path.join(root,'dist/build/webpack/loaders/next-app-loader/index.js');
 try {fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(path.join(root,'package.json'),JSON.stringify({version:'16.4.5'}));fs.writeFileSync(target,source);
  assert.equal(helper.install(root),true);assert.equal(fs.readFileSync(target,'utf8'),helper.transform(source,'16.4.5').source);assert.equal(helper.install(root),false);
  for(const [value,version] of [[source,'16.4.4'],[source+'\n','16.4.5'],['not valid !!!','16.4.5'],[helper.transform(source,'16.4.5').source+'\n','16.4.5']]){fs.writeFileSync(path.join(root,'package.json'),JSON.stringify({version}));fs.writeFileSync(target,value);assert.throws(()=>helper.install(root));assert.equal(fs.readFileSync(target,'utf8'),value);}
  fs.writeFileSync(path.join(root,'package.json'),JSON.stringify({version:'16.4.5'}));fs.writeFileSync(target,source);const referent=path.join(root,'referent.js');fs.writeFileSync(referent,source);fs.unlinkSync(target);fs.symlinkSync(referent,target);assert.throws(()=>helper.install(root));assert.equal(fs.readFileSync(referent,'utf8'),source);fs.unlinkSync(target);fs.writeFileSync(target,source);
  const write=fs.writeFileSync;try{fs.writeFileSync=(name,...args)=>{if(String(name).includes('.directory-dependencies-'))throw Error('synthetic');return write(name,...args);};assert.throws(()=>helper.install(root));}finally{fs.writeFileSync=write;}assert.equal(fs.readFileSync(target,'utf8'),source);
  try{fs.writeFileSync=(name,...args)=>{const result=write(name,...args);if(String(name).includes('.directory-dependencies-'))write(target,source+'\n');return result;};assert.throws(()=>helper.install(root));}finally{fs.writeFileSync=write;}assert.equal(fs.readFileSync(target,'utf8'),source+'\n');assert.equal(fs.readdirSync(path.dirname(target)).length,1);
  console.log('NEXT_DIRECTORY_INSTALLER_PASS');
 }finally{fs.rmSync(root,{recursive:true,force:true});}
}
(async()=>{installer();await semantics();})().catch(e=>{console.error('NEXT_DIRECTORY_TEST_FAILED '+e.name+' '+e.message);process.exitCode=1});
