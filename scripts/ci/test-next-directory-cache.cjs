'use strict';
process.env.NODE_ENV='production';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const next=process.env.NEXT_TEST_DIR?path.resolve(process.env.NEXT_TEST_DIR):path.dirname(require.resolve('next/package.json'));const {webpack}=require(next+'/dist/compiled/webpack/webpack');
const root=fs.mkdtempSync('/tmp/warm-review-'),app=root+'/app',leaf=app+'/demo';fs.mkdirSync(leaf,{recursive:true});fs.writeFileSync(app+'/layout.js','export default function Root({children}) { return children }');fs.writeFileSync(leaf+'/page.tsx','export default function Page() { return null }');
const old=new Date(Date.now()-10000);for(const p of [app+'/layout.js',leaf+'/page.tsx',leaf,app])fs.utimesSync(p,old,old);
global.__nextDirectoryCacheTest=[{calls:0},{calls:0}];
const compiler=variant=>{const page='/demo/page';const opts={reviewVariant:variant,name:'app'+page,page,pagePath:'private-next-app-dir'+page,appDir:app,appPaths:[page],pageExtensions:['tsx','ts','jsx','js'],rootDir:root,nextConfigOutput:'export',basePath:'',middlewareConfig:Buffer.from('{}').toString('base64')};const serialized=require(next+'/dist/build/entries').getAppEntry(opts).import;assert.equal(require('node:querystring').parse(serialized.slice(serialized.indexOf('?')+1,-1)).isDev,undefined);return webpack({mode:'production',context:root,target:'node',entry:{main:path.join(__dirname,'test-next-directory-cache-fixture.cjs')+serialized.slice(serialized.indexOf('?'))},cache:{type:'memory'},devtool:false,output:{path:root+'/out'+variant,filename:'main.js'},optimization:{minimize:false,concatenateModules:false},externals:[({request},cb)=>request.includes('test-next-directory-cache-fixture.cjs')?cb():cb(null,'commonjs '+request)]});};
const cs=[compiler(0),compiler(1)];const results=[];
async function runStep(step){const codes=[];const calls=[];const missing=[];const errors=[];const messages=[];for(let variant=0;variant<2;variant++){cs[variant].inputFileSystem.purge();const before=global.__nextDirectoryCacheTest[variant].calls;const stats=await new Promise((r,j)=>cs[variant].run((e,s)=>e?j(e):r(s)));errors.push(stats.compilation.errors.length);messages.push(stats.compilation.errors.map(e=>e.message.split('\n    at')[0]).join('\n'));codes.push(global.__nextDirectoryCacheTest[variant].code);calls.push(global.__nextDirectoryCacheTest[variant].calls-before);missing.push(stats.compilation.missingDependencies.size);}assert.equal(codes[1],codes[0]);assert.equal(messages[1],messages[0]);results.push({step,calls,missing,errors,changed:results.length?+(codes[0]!==global.__nextDirectoryCacheLastCode):0});global.__nextDirectoryCacheLastCode=codes[0];}
(async()=>{await runStep(0);await new Promise(r=>setTimeout(r,1100));await runStep(1);await runStep(2);
fs.writeFileSync(leaf+'/layout.js','export default function Layout({children}) { return children }');await runStep(3);
fs.writeFileSync(leaf+'/layout.tsx','export default function Layout({children}) { return children }');await runStep(4);
fs.unlinkSync(leaf+'/layout.tsx');await runStep(5);
fs.writeFileSync(leaf+'/icon.svg','<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>');await runStep(6);
fs.unlinkSync(leaf+'/icon.svg');await runStep(7);
fs.writeFileSync(root+'/target','export default function Loading() { return null }');fs.symlinkSync(root+'/target',leaf+'/loading.tsx');await runStep(8);
fs.unlinkSync(root+'/target');await runStep(9);
fs.writeFileSync(root+'/target','export default function Loading() { return null }');await runStep(10);
fs.unlinkSync(leaf+'/loading.tsx');await runStep(11);
assert(results[0].missing[1]<results[0].missing[0]/10,'production query must activate optimization');assert.deepEqual(results[2].calls,[0,0]);assert.deepEqual(results[9].errors,[1,1]);for(const r of results.filter(x=>x.step!==9))assert.deepEqual(r.errors,[0,0]);for(const i of [3,4,5,6,7,8,9,10,11]){assert.deepEqual(results[i].calls,[1,1]);assert.equal(results[i].changed,1)}
console.log('NEXT_DIRECTORY_CACHE_REBUILDS_PASS '+results.length);})().catch(e=>{console.error(e);process.exitCode=1}).finally(async()=>{for(const c of cs)await new Promise(r=>c.close(r));fs.rmSync(root,{recursive:true,force:true});delete global.__nextDirectoryCacheTest;delete global.__nextDirectoryCacheLastCode;});
