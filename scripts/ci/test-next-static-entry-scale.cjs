'use strict';
function main(){
'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),Module=require('node:module');
const next=process.env.NEXT_TEST_DIR ? path.resolve(process.env.NEXT_TEST_DIR) : path.dirname(require.resolve('next/package.json'));
const file=path.join(next,'dist/build/entries.js'),helper=require('./install-next-static-entry-guard.cjs');
const source=fs.readFileSync(file,'utf8'),baseline=require(file).getAppEntry;
const m=new Module(file,module);m.filename=file;m.paths=Module._nodeModulePaths(path.dirname(file));m._compile(helper.transform(source,'16.4.5').source,file);const candidate=m.exports.getAppEntry;
const results=[];
for(const size of [100,200,400,800]){
const routes=Array.from({length:size},(_,i)=>'/route-'+String(i).padStart(6,'0'));
let before=0,after=0;
for(const route of routes){const opts={page:route+'/page',pagePath:'private-next-app-dir'+route+'/page',appPaths:[route+'/page'],allNormalizedAppPaths:routes};before+=Buffer.byteLength(baseline(opts).import);after+=Buffer.byteLength(candidate(opts).import);}
results.push({size,before,after});
}
for(let i=1;i<results.length;i++){assert(results[i].before/results[i-1].before>3.8);assert.equal(results[i].after/results[i-1].after,2);}
console.log('NEXT_ENTRY_SCALE_TESTS_PASS '+JSON.stringify(results));

}
try {main();} catch {console.error('NEXT_ENTRY_SCALE_TEST_FAILED');process.exitCode=1;}
