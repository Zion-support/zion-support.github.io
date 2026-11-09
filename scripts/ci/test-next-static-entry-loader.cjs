'use strict';
async function main(){
const fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict');
const next=process.env.NEXT_TEST_DIR ? path.resolve(process.env.NEXT_TEST_DIR) : path.dirname(require.resolve('next/package.json'));
const loader=require(next+'/dist/build/webpack/loaders/next-app-loader').default;
let root, appDir;
const cases=[
 {name:'dynamic-ancestor-static-leaf',page:'/team/[id]/settings/page',appPaths:['/team/[id]/settings/page']},
 {name:'cross-group-sibling',page:'/(one)/blog/[slug]/page',appPaths:['/(one)/blog/[slug]/page']},
 {name:'adjacent-slot-no-default',page:'/dashboard/page',appPaths:['/dashboard/page','/dashboard/@panel/[id]/page']},
 {name:'adjacent-slot-with-default',page:'/dashboard/page',appPaths:['/dashboard/page','/dashboard/@panel/[id]/page'],hasDefault:true},
 {name:'string-appPaths',page:'/static/page',appPaths:'/static/page'},
 {name:'empty-appPaths',page:'/static/page',appPaths:[]},
 {name:'missing-appPaths',page:'/static/page'},
 {name:'encoded-brackets',page:'/encoded/%5Bid%5D/page',appPaths:['/encoded/%5Bid%5D/page']},
 {name:'static',page:'/static/page',appPaths:['/static/page']},
 {name:'group',page:'/(marketing)/about/page',appPaths:['/(marketing)/about/page']},
 {name:'parallel-static',page:'/dashboard/page',appPaths:['/dashboard/page','/dashboard/@panel/page']},
 {name:'interception-static',page:'/feed/@modal/(.)photo/page',appPaths:['/feed/@modal/(.)photo/page']},
 {name:'dynamic',page:'/blog/[slug]/page',appPaths:['/blog/[slug]/page']},
 {name:'catchall',page:'/docs/[...rest]/page',appPaths:['/docs/[...rest]/page']},
 {name:'optional-catchall',page:'/shop/[[...rest]]/page',appPaths:['/shop/[[...rest]]/page']},
 {name:'parallel-dynamic',page:'/dashboard/page',appPaths:['/dashboard/page','/dashboard/@panel/[id]/page']},
 {name:'interception-dynamic',page:'/feed/@modal/(.)photo/[id]/page',appPaths:['/feed/@modal/(.)photo/[id]/page']}
];
const all=['/static','/about','/dashboard','/feed/photo','/blog/[slug]','/blog/archive','/docs/[...rest]','/docs/start','/shop/[[...rest]]','/shop/sale','/(two)/blog/archive/page','/team/[id]/overview'];
async function run(c,paths,flags={}){const options={name:'app'+c.page,page:c.page,pagePath:'private-next-app-dir'+c.page,appDir,appPaths:c.appPaths,allNormalizedAppPaths:paths,pageExtensions:['js'],rootDir:root,tsconfigPath:'tsconfig.json',isDev:false,nextConfigOutput:'export',basePath:'',...flags,middlewareConfig:Buffer.from('{}').toString('base64')};const ctx={getOptions:()=>options,_module:{buildInfo:{}},addMissingDependency(){},addContextDependency(){}};return loader.call(ctx);}
await (async()=>{
 root=await fs.mkdtemp(path.join(require('node:os').tmpdir(),'next-static-entry-loader-'));appDir=path.join(root,'app');
 try {
 await fs.mkdir(appDir,{recursive:true});await fs.writeFile(path.join(appDir,'layout.js'),'export default function Layout({children}) { return children; }');
 for(const c of cases)for(const p of (Array.isArray(c.appPaths)&&c.appPaths.length?c.appPaths:[c.page])){const f=path.join(appDir,p+'.js');await fs.mkdir(path.dirname(f),{recursive:true});await fs.writeFile(f,'export default function Page(){return null}');}
 const results=[];
 const Module=require('node:module');const file=path.join(next,'dist/build/entries.js');const helper=require('./install-next-static-entry-guard.cjs');const m=new Module(file,module);m.filename=file;m.paths=Module._nodeModulePaths(path.dirname(file));m._compile(helper.transform(await fs.readFile(file,'utf8'),'16.4.5').source,file);const qs=require('node:querystring');
 for(const c of cases){
   const defaultFile=path.join(appDir,'dashboard/@panel/default.js');
   if(c.hasDefault)await fs.writeFile(defaultFile,'export default function Default(){return null}');else await fs.unlink(defaultFile).catch(()=>{});
   for(const flags of [{},{explicitParallelRouteChildren:true},{strictRouteMatching:true,isFinalRouteMatcher:true},{explicitParallelRouteChildren:true,strictRouteMatching:true,isFinalRouteMatcher:true},{strictRouteMatching:true,isFinalRouteMatcher:false},{explicitParallelRouteChildren:true,strictRouteMatching:true,isFinalRouteMatcher:false}]) {
     let baseline, baselineError;
     try { baseline=await run(c,all,flags); } catch(e) { baselineError=e; }
     const query=m.exports.getAppEntry({page:c.page,pagePath:'private-next-app-dir'+c.page,appPaths:c.appPaths,allNormalizedAppPaths:all}).import;
     const parsed=qs.parse(query.slice(query.indexOf('?')+1,-1));
     let candidate, candidateError;
     try { candidate=await run(c,parsed.allNormalizedAppPaths,flags); } catch(e) { candidateError=e; }
     if(baselineError || candidateError) { assert(baselineError && candidateError); assert.equal(candidateError.message,baselineError.message);results.push({identicalError:true});continue; }
     assert.equal(candidate,baseline,c.name);
     const retained=Object.hasOwn(parsed,'allNormalizedAppPaths');
     const omitted=retained ? await run(c,undefined,flags) : candidate;
     if(['dynamic','catchall','optional-catchall','cross-group-sibling'].includes(c.name))assert.notEqual(omitted,baseline,'negative control');
     if(c.name==='cross-group-sibling')assert(baseline.includes('archive'),'static sibling from other group');
     results.push({globalPathsRetained:retained,generatedBytes:Buffer.byteLength(baseline),identical:true,omittingAllPathsChangesOutput:omitted!==baseline});
   }
 }
 console.log('NEXT_ENTRY_LOADER_TESTS_PASS '+results.length);
 } finally { await fs.rm(root,{recursive:true,force:true}); }
})();

}
main().catch(()=>{console.error('NEXT_ENTRY_LOADER_TEST_FAILED');process.exitCode=1});
