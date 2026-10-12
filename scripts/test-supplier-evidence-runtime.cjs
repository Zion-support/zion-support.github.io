'use strict';
// Synthetic local-only DOM regression: no real form submission, email or supplier action.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const LOCALES=['en','pt','es','fr','de'];
const languages={en:'en',pt:'pt-BR',es:'es',fr:'fr',de:'de'};
const hold={en:'HOLD',pt:'AGUARDAR',es:'EN ESPERA',fr:'EN ATTENTE',de:'ZURÜCKHALTEN'};
const suffix=l=>l==='en'?'':'.'+(l==='pt'?'pt-br':l);
const route=l=>'/apps/supplier-quote-evidence-workbench'+suffix(l)+'.html';
const scriptPath=l=>'/assets/js/supplier-evidence-'+l+'.js';
function controls(lang){
 const elements=new Map(),downloads=[],blobs=[],revoked=[];
 const el=id=>{if(!elements.has(id))elements.set(id,{value:'',checked:false,disabled:false,hidden:false,textContent:'',events:{},addEventListener(event,fn){(this.events[event]??=[]).push(fn);}});return elements.get(id);};
 for(const id of ['quote-form','example','export','output','errors','include-b','supplier-a','supplier-b'])el(id);
 for(const p of ['a','b']){el(p+'-alias');for(const k of ['base','travel','freight','nonrecoverable','other'])el(p+'-'+k).value='0';for(const k of ['scope','named','availability','written','costs','terms','approval','po','zion'])el(p+'-'+k);}
 el('currency').value='USD';el('markup').value='40';el('client-tax').value='0';el('export').disabled=true;el('supplier-b').hidden=true;el('supplier-b').disabled=true;
 const document={documentElement:{lang},getElementById:el,createElement(tag){assert.equal(tag,'a');return {href:'',download:'',click(){downloads.push({href:this.href,filename:this.download});}};}};
 const URL={createObjectURL(blob){blobs.push(blob);return 'blob:synthetic-'+blobs.length;},revokeObjectURL(url){revoked.push(url);}};
 function fire(id,type){const event={prevented:false,preventDefault(){this.prevented=true;}};const handlers=el(id).events[type];assert(handlers?.length,'Missing handler '+id+' '+type);for(const fn of handlers)fn(event);if(type==='submit')assert(event.prevented,'Prevent real form submission');}
 return {el,document,URL,downloads,blobs,revoked,fire};
}
async function exercise(html,source,locale){
 let checks=0;const ok=(value,message)=>{assert(value,locale+': '+message);checks++;};const equal=(a,b,message)=>{assert.equal(a,b,locale+': '+message);checks++;};
 const language=languages[locale];ok(html.includes('<html lang="'+language+'">'),'declared locale');ok(html.includes('src="'+scriptPath(locale)+'"'),'matching localized script');equal((html.match(/rel="alternate"/g)||[]).length,6,'six alternates');
 ok(!/\b(?:fetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon|localStorage|sessionStorage|indexedDB)\b/.test(source),'no network or persistence API');
 const dom=controls(language),blocked=()=>{throw new Error('Unexpected network/storage access');};
 const sandbox={document:dom.document,URL:dom.URL,Blob,Intl,Date,setTimeout:fn=>fn(),fetch:blocked,XMLHttpRequest:blocked,WebSocket:blocked,navigator:{sendBeacon:blocked},localStorage:new Proxy({},{get:blocked}),sessionStorage:new Proxy({},{get:blocked})};sandbox.window=sandbox;
 vm.runInNewContext(source,sandbox,{timeout:1500});const api=sandbox.ZionQuoteEvidence;ok(api&&typeof api.calculate==='function','calculation API');
 const row={base:100,travel:10,freight:5,nonrecoverable:5,other:10};const result=api.calculate(row,40,10,'USD');equal(result.cost,130,'all cost items');equal(result.sell,182,'40 percent markup');equal(result.clientTax,18.2,'separate client tax');equal(result.total,200.2,'illustrative total');equal(result.missing.length,9,'nine evidence gates');ok(Math.abs(result.margin-28.5714285714)<0.00001,'markup not margin');
 dom.fire('quote-form','submit');ok(dom.el('errors').textContent.length>0,'zero-cost validation');ok(dom.el('export').disabled,'invalid report cannot export');
 // Loading an example must revoke declarations, regardless of previous state.
 for(const p of ['a','b'])for(const k of api.gates)dom.el(p+'-'+k).checked=true;
 dom.el('include-b').checked=true;dom.fire('example','click');
 ok(api.gates.every(k=>!dom.el('a-'+k).checked&&!dom.el('b-'+k).checked),'example resets ALL declarations');ok(!dom.el('include-b').checked&&dom.el('supplier-b').hidden&&dom.el('supplier-b').disabled,'example resets second supplier');
 const report=dom.el('output').textContent;ok(report.includes(hold[locale]),'localized HOLD status');ok(!dom.el('export').disabled,'example permits internal download');ok(report.includes('182')&&report.includes('200'),'example amount text');
 dom.fire('export','click');equal(dom.downloads.length,1,'one download');equal(await dom.blobs[0].text(),report,'download equals displayed report');equal(dom.downloads[0].filename,'zion-supplier-evidence-'+language+'-internal.txt','localized filename');equal(dom.revoked.length,1,'blob URL revoked');
 dom.el('a-base').value='101';dom.fire('quote-form','input');ok(dom.el('export').disabled,'edit disables stale export');dom.fire('export','click');equal(dom.downloads.length,1,'stale report not downloaded');
 dom.el('include-b').checked=true;dom.fire('include-b','change');ok(!dom.el('supplier-b').hidden&&!dom.el('supplier-b').disabled,'second supplier enabled');ok(dom.el('export').disabled,'toggle invalidates export');dom.fire('quote-form','submit');ok(!dom.el('export').disabled,'two offers calculated');ok(dom.el('output').textContent.includes(' A')&&dom.el('output').textContent.includes(' B'),'both suppliers reported');
 // Rendering uses textContent, never interpreting an alias as HTML.
 dom.el('a-alias').value='<img src=x onerror=alert(1)>';dom.fire('quote-form','input');dom.el('include-b').checked=false;dom.fire('include-b','change');
 for(const k of api.gates)dom.el('a-'+k).checked=true;dom.fire('quote-form','submit');ok(!dom.el('output').textContent.includes(hold[locale]),'all declarations require owner review, not HOLD');ok(dom.el('output').textContent.includes('<img src=x onerror=alert(1)>'),'alias treated as literal report text');equal(dom.el('errors').textContent,'','valid report clears errors');
 // Every validation class must fail closed with translated UI, not internal English exceptions.
 const invalid=[['markup','39'],['markup','501'],['client-tax','-1'],['client-tax','101'],['currency','XYZ'],['a-base',''],['a-base','-1'],['a-base','1000000001'],['a-base','0.001'],['a-base','not-a-number']];
 const initial={markup:'40','client-tax':'10',currency:'USD','a-base':'100'};
 for(const [id,value] of invalid){for(const [k,v]of Object.entries(initial))dom.el(k).value=v;dom.el(id).value=value;dom.fire('quote-form','input');dom.fire('quote-form','submit');ok(dom.el('export').disabled&&dom.el('errors').textContent.length>0,'fail closed '+id+' '+value);if(locale!=='en')ok(!sandbox.ZionQuoteEvidenceEnglishErrors.includes(dom.el('errors').textContent),'localized validation '+id+' '+value);}
 for(const [k,v]of Object.entries(initial))dom.el(k).value=v;dom.fire('quote-form','submit');ok(!dom.el('export').disabled,'recovery after invalid inputs');equal(dom.el('errors').textContent,'','recovery clears validation');
 return {locale:language,assertions:checks,syntheticDOM:true,realSubmission:false};
}
async function readLive(url){const res=await fetch('https://ziontechgroup.com'+url+(url.includes('?')?'&':'?')+'runtime-qa='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});assert.equal(res.status,200,url);return await res.text();}
async function run(root='out',live=false){const results=[];for(const locale of LOCALES){const load=p=>live?readLive(p):Promise.resolve(fs.readFileSync(path.join(root,p.slice(1)),'utf8'));const [html,source]=await Promise.all([load(route(locale)),load(scriptPath(locale))]);results.push(await exercise(html,source,locale));}return {status:'PASS',checkedAt:new Date().toISOString(),mode:live?'fresh-live-assets-synthetic-DOM':'offline-artifact-synthetic-DOM',assertions:results.reduce((n,r)=>n+r.assertions,0),results,wholeNetworkCertified:false,visualBrowserCertified:false};}
module.exports={run,exercise,controls,LOCALES,route,scriptPath};
if(require.main===module)run(process.argv.find((v,i)=>i>1&&!v.startsWith('--'))||'out',process.argv.includes('--live')).then(r=>console.log(JSON.stringify(r,null,2))).catch(e=>{console.error(e);process.exitCode=1;});
