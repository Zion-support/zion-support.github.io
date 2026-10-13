'use strict';
const assert=require('node:assert/strict'),m=require('./render-supplier-comparison.cjs');
(async()=>{
 const sleep=async()=>{};let count=0;
 let value=await m.fetchManifest(async()=>{count++;return {status:count===1?503:200,json:async()=>({release:m.RELEASE,pages:m.routes})};},sleep);assert.equal(count,2);assert.equal(value.release,m.RELEASE);
 count=0;await assert.rejects(()=>m.fetchManifest(async()=>{count++;return {status:503};},sleep));assert.equal(count,3);
 count=0;await assert.rejects(()=>m.fetchManifest(async()=>{count++;return {status:404};},sleep));assert.equal(count,1);
 count=0;await assert.rejects(()=>m.fetchManifest(async()=>{count++;return {status:200,json:async()=>{throw new SyntaxError('bad json');}};},sleep));assert.equal(count,1);
 count=0;value=await m.fetchManifest(async()=>{count++;if(count===1)throw new Error('network');return {status:200,json:async()=>({release:m.RELEASE,pages:m.routes})};},sleep);assert.equal(count,2);
 value=await m.fetchManifest(async()=>({status:200,json:async()=>({release:'stale',pages:[]})}),sleep);assert.throws(()=>assert.equal(value.release,m.RELEASE));assert.throws(()=>assert.deepEqual(value.pages,m.routes));
 const existing=m.selfTest();assert.equal(existing.negativeCases,31);console.log(JSON.stringify({newCases:7,existingRegression:existing,result:'PASS',liveRequests:0}));
})().catch(e=>{console.error(e);process.exitCode=1;});
