'use strict';
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const next=process.env.NEXT_TEST_DIR?path.resolve(process.env.NEXT_TEST_DIR):path.dirname(require.resolve('next/package.json'));
const {webpack}=require(next+'/dist/compiled/webpack/webpack');
const {createDirectoryEligibility,createDependencyTracker}=require('./install-next-directory-dependencies.cjs');
const root=fs.mkdtempSync('/tmp/missing-review-');
const c=webpack({mode:'production',entry:{},optimization:{minimize:false},output:{path:root+'/out'}});
let FSI;c.hooks.thisCompilation.tap('review',comp=>FSI=comp.fileSystemInfo.constructor);
const run=()=>new Promise((r,j)=>c.run((e,s)=>e?j(e):r(s)));
const close=()=>new Promise(r=>c.close(r));
const snap=(dirs,missing,options)=>new Promise((r,j)=>new FSI(fs).createSnapshot(undefined,[],dirs,missing,options,(e,s)=>e?j(e):r(s)));
const check=s=>s?new Promise((r,j)=>new FSI(fs).checkSnapshotValid(s,(e,v)=>e?j(e):r(v))):Promise.resolve(null);
(async()=>{await run();await close();const cases=[
['create',d=>{},d=>fs.writeFileSync(d+'/layout.tsx','a'),d=>[d+'/layout.tsx']],
['delete',d=>fs.writeFileSync(d+'/layout.tsx','a'),d=>fs.unlinkSync(d+'/layout.tsx'),d=>[d+'/layout.tsx']],
['content',d=>fs.writeFileSync(d+'/layout.tsx','a'),d=>fs.writeFileSync(d+'/layout.tsx','longer'),d=>[d+'/layout.tsx']],
['priority',d=>fs.writeFileSync(d+'/layout.js','a'),d=>fs.writeFileSync(d+'/layout.tsx','b'),d=>[d+'/layout.tsx',d+'/layout.js']],
['absent_dir',d=>fs.rmdirSync(d),d=>{fs.mkdirSync(d);fs.writeFileSync(d+'/layout.tsx','a')},d=>[d+'/layout.tsx']],
['absent_deep',d=>fs.rmdirSync(d),d=>{fs.mkdirSync(d+'/nested',{recursive:true});fs.writeFileSync(d+'/nested/layout.tsx','a')},d=>[d+'/nested/layout.tsx']],
['symlink_target_content',d=>{fs.writeFileSync(d+'-target','a');fs.symlinkSync(d+'-target',d+'/layout.tsx')},d=>fs.writeFileSync(d+'-target','longer'),d=>[d+'/layout.tsx']],
['symlink_target_delete',d=>{fs.writeFileSync(d+'-target','a');fs.symlinkSync(d+'-target',d+'/layout.tsx')},d=>fs.unlinkSync(d+'-target'),d=>[d+'/layout.tsx']],
['broken_target_create',d=>fs.symlinkSync(d+'-target',d+'/layout.tsx'),d=>fs.writeFileSync(d+'-target','a'),d=>[d+'/layout.tsx']],
['dir_symlink_target_add',d=>{fs.rmdirSync(d);fs.mkdirSync(d+'-target');fs.symlinkSync(d+'-target',d)},d=>fs.writeFileSync(d+'-target/layout.tsx','a'),d=>[d+'/layout.tsx']],
['file_to_dir',d=>fs.writeFileSync(d+'/layout.tsx','a'),d=>{fs.unlinkSync(d+'/layout.tsx');fs.mkdirSync(d+'/layout.tsx')},d=>[d+'/layout.tsx']],
['unrelated',d=>{},d=>fs.writeFileSync(d+'/unrelated.txt','a'),d=>[d+'/layout.tsx']],
['dir_symlink_target_delete',d=>{fs.rmdirSync(d);fs.mkdirSync(d+'-target');fs.symlinkSync(d+'-target',d)},d=>fs.rmdirSync(d+'-target'),d=>[d+'/layout.tsx']],
['dir_symlink_retarget',d=>{fs.rmdirSync(d);fs.mkdirSync(d+'-target');fs.mkdirSync(d+'-target2');fs.writeFileSync(d+'-target2/layout.tsx','a');fs.symlinkSync(d+'-target',d)},d=>{fs.unlinkSync(d);fs.symlinkSync(d+'-target2',d)},d=>[d+'/layout.tsx']],
['symlink_target_dir_to_file',d=>{fs.mkdirSync(d+'-target');fs.symlinkSync(d+'-target',d+'/layout.tsx')},d=>{fs.rmdirSync(d+'-target');fs.writeFileSync(d+'-target','a')},d=>[d+'/layout.tsx']],
['absent_parent_deep',d=>fs.rmdirSync(d),d=>{fs.mkdirSync(d+'/nested',{recursive:true});fs.writeFileSync(d+'/nested/layout.tsx','a')},d=>[d+'/nested/layout.tsx']],
]; const results=[];let id=0;for(const opts of [{timestamp:true},{hash:true},{hash:true,timestamp:true}]) for(const [name,setup,mutate,missing] of cases){const d=root+'/case'+id++;fs.mkdirSync(d);setup(d);const originals=missing(d),omitted=new Set(),dirs=new Set();const tracker=createDependencyTracker({addMissingDependency:p=>omitted.add(p),addContextDependency:p=>dirs.add(p)},createDirectoryEligibility()({}));for(const p of originals){let exists=false;try{exists=fs.statSync(p).isFile();}catch{}tracker.register(path.dirname(p),p,exists);}await tracker.finalize();const a=await snap([],originals,opts),b=await snap(dirs,omitted,opts);const before=[await check(a),await check(b)];await new Promise(r=>setTimeout(r,20));mutate(d);const after=[await check(a),await check(b)];results.push({case:cases.findIndex(x=>x[0]===name),mode:opts.hash?(opts.timestamp?2:1):0,snapshot:[+!!a,+!!b],before:before.map(x=>x===null?-1:+x),after:after.map(x=>x===null?-1:+x)});}for(const r of results){assert.deepEqual(r.snapshot,[1,1]);assert.deepEqual(r.before,[1,1]);if(r.after[0]===0)assert.equal(r.after[1],0,'candidate must invalidate wherever baseline does');}
console.log('NEXT_DIRECTORY_SNAPSHOTS_PASS '+results.length);fs.rmSync(root,{recursive:true,force:true});})().catch(e=>{console.error('NEXT_DIRECTORY_SNAPSHOTS_FAILED '+e.name);process.exitCode=1});
