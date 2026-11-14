import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {calculators as c, describeResult} from '../public/assets/js/zion-network-tools.js';
const token={requests:1000,inputTokens:1000,outputTokens:500,inputRate:2,outputRate:4,buffer:20};
test('token budget separates base and buffer',()=>{const r=c['token-cost'](token);assert.equal(r.base,4);assert.equal(r.bufferCost,.8);assert.equal(r.total,4.8);});
test('zero volume remains zero',()=>assert.equal(c['token-cost']({...token,requests:0}).total,0));
test('cloud scenario is transparent, not a scan',()=>{const r=c['cloud-waste']({compute:1000,idle:20,storage:500,unused:10});assert.deepEqual(r,{baseline:1500,opportunity:250,remaining:1250});});
test('incident exposure separates revenue at risk and labor',()=>assert.deepEqual(c['incident-cost']({duration:2,revenue:10000,affected:50,engineerHours:4,engineerRate:100,supportHours:2,supportRate:50}),{revenueAtRisk:10000,labor:500,total:10500}));
test('change score endpoints and weighted intermediate score',()=>{const low={blast:1,rollback:1,validation:1,dependencies:1,load:1};assert.deepEqual(c['change-risk'](low),{score:0,tier:'Lower'});assert.deepEqual(c['change-risk']({blast:5,rollback:5,validation:5,dependencies:5,load:5}),{score:100,tier:'Higher'});assert.equal(c['change-risk']({...low,blast:5}).score,30);});
test('patch batches include rollback and safety reserves',()=>assert.deepEqual(c['patch-window']({window:120,systems:10,parallel:3,perSystem:15,rollback:20,buffer:10}),{batches:4,required:90,margin:30,fits:true}));
test('patch overrun is not hidden',()=>assert.equal(c['patch-window']({window:20,systems:10,parallel:3,perSystem:15,rollback:20,buffer:10}).fits,false));
test('RFP incomplete and complete states',()=>{assert.equal(c['rfp-readiness']({}).score,0);const keys=['scope','eligibility','commercial','certifications','security','references','delivery','support','legal','submission'];assert.equal(c['rfp-readiness'](Object.fromEntries(keys.map(k=>[k,true]))).score,100);assert.equal(c['rfp-readiness']({scope:true}).missing.length,9);});
for(const invalid of ['',-1,Infinity,NaN,'not a number',1e20])test('reject invalid request count '+String(invalid),()=>assert.throws(()=>c['token-cost']({...token,requests:invalid})));
test('reject fractional counts and percentages over 100',()=>{assert.throws(()=>c['token-cost']({...token,requests:1.5}));assert.throws(()=>c['token-cost']({...token,buffer:101}));});
test('zero parallel capacity is invalid',()=>assert.throws(()=>c['patch-window']({window:120,systems:10,parallel:0,perSystem:15,rollback:20,buffer:10})));
test('descriptions retain assumptions and limitations',()=>{assert.match(describeResult('token-cost',c['token-cost'](token)),/not live provider prices/);assert.match(describeResult('rfp-readiness',c['rfp-readiness']({})),/not a win probability/);});
test('module contains no transmission or persistence API',()=>{const s=fs.readFileSync(new URL('../public/assets/js/zion-network-tools.js',import.meta.url),'utf8');assert.doesNotMatch(s,/\b(fetch|XMLHttpRequest|sendBeacon|localStorage|sessionStorage)\s*[.(]/);});
test('browser binding enables button, updates output and catches invalid values',async()=>{
 const handlers={},button={disabled:true,addEventListener:(n,f)=>handlers[n]=f},output={textContent:'',focus(){}},error={textContent:'',hidden:true,focus(){}};
 const inputs=Object.entries(token).map(([key,value])=>({dataset:{field:key},value,type:'number',checkValidity:()=>true}));
 const region={dataset:{zionTool:'token-cost'},querySelector:s=>s==='[data-run]'?button:s==='[data-output]'?output:error,querySelectorAll:()=>inputs,addEventListener:(n,f)=>handlers[n]=f};
 globalThis.document={querySelectorAll:()=>[region]};
 try{await import('../public/assets/js/zion-network-tools.js?dom-binding');assert.equal(button.disabled,false);handlers.click();assert.match(output.textContent,/4.80/);handlers.input();assert.match(output.textContent,/Recalculate/);inputs[0].value=-1;handlers.click();assert.equal(error.hidden,false);assert.equal(output.textContent,'');}finally{delete globalThis.document;}
});
