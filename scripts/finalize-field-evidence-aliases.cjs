'use strict';
// Final artifact pass: copy only four field-guide aliases; never modify canonical content or forms.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const origin='https://ziontechgroup.com',release='field-final-consistency-2026-10-10';
const locales=['en','pt-BR','es','fr','de'];
const route=l=>'/apps/field-service-evidence-guide'+(l==='en'?'':'.'+l.toLowerCase())+'.html';
const pairs=locales.slice(1).map(l=>({language:l,canonical:route(l),alias:'/'+(l==='pt-BR'?'pt':l)+'/apps/field-service-evidence-guide.html'}));
const attributes=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g)].map(m=>[m[1].toLowerCase(),m[2]]));
function checkGuide(html,language){
 assert(html.includes('<html lang="'+language+'">'),'Wrong guide language');
 assert(!/<form\b|<script\b/i.test(html),'Read-only guide required');
 const links=(html.match(/<link\b[^>]*>/gi)||[]).map(attributes),canonical=links.filter(x=>x.rel==='canonical');
 assert.equal(canonical.length,1);assert.equal(canonical[0].href,origin+route(language));
 const alternate=links.filter(x=>x.rel==='alternate');assert.equal(alternate.length,6);
 for(const l of [...locales,'x-default']){
  const found=alternate.filter(x=>x.hreflang===l);assert.equal(found.length,1,'Missing/duplicate alternate '+l);
  assert.equal(found[0].href,origin+route(l==='x-default'?'en':l));
 }
 const nav=html.match(/<nav\b[^>]*data-field-evidence-languages[^>]*>[\s\S]*?<\/nav>/i);assert(nav,'Missing language navigation');
 const destinations=(nav[0].match(/<a\b[^>]*>/gi)||[]).map(attributes);
 for(const l of locales)assert(destinations.some(a=>a.href===route(l)),'Missing language link '+l);
 assert(/id=["']tools["']/.test(html),'Missing linked-tools anchor');
 const pack=html.match(/<!--field-evidence-pack:start-->[\s\S]*?<!--field-evidence-pack:end-->/);assert(pack,'Missing evidence checklist');
 assert.equal((pack[0].match(/<li>/g)||[]).length,6);
 const faq=html.match(/<!--field-evidence-faq:start-->[\s\S]*?<!--field-evidence-faq:end-->/);assert(faq,'Missing translated FAQ');
 assert.equal((faq[0].match(/<details>/g)||[]).length,4);
 assert.equal((html.match(/data-field-evidence-faq=/g)||[]).length,1);
 const telecom='/apps/october-2026-batch112-telecom'+(language==='en'?'':'.'+language.toLowerCase())+'.html';
 assert(html.includes('href="'+telecom+'"'),'Final telecom interlink missing');
 return crypto.createHash('sha256').update(html).digest('hex');
}
function finalize(out){
 const originals=locales.map(l=>({language:l,html:fs.readFileSync(path.join(out,route(l).slice(1)),'utf8')}));
 originals.forEach(p=>checkGuide(p.html,p.language));
 const copies=pairs.map(p=>({...p,html:originals.find(x=>x.language===p.language).html}));
 for(const p of copies){const dest=path.join(out,p.alias.slice(1));fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,p.html);}
 const results=[];
 for(const p of copies){const a=fs.readFileSync(path.join(out,p.alias.slice(1)),'utf8'),c=fs.readFileSync(path.join(out,p.canonical.slice(1)),'utf8');assert.equal(a,c,'Final whole-page drift '+p.alias);results.push({...p,html:undefined,sha256:checkGuide(a,p.language)});}
 for(const p of originals)assert.equal(fs.readFileSync(path.join(out,route(p.language).slice(1)),'utf8'),p.html,'Canonical changed');
 fs.writeFileSync(path.join(out,'apps/field-evidence-final-integrity.json'),JSON.stringify({release,pairs:results,scope:'Nine read-only field-guide routes; full alias/canonical equality after all content renderers',forms:'unchanged',delivery:'unchanged'},null,2)+'\n');
 console.log('PASS '+release+': four final whole-page locale pairs; five-language metadata, FAQs and telecom interlinks');
}
async function live(){
 const read=async url=>{const r=await fetch(origin+url+'?qa='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});assert.equal(r.status,200,'HTTP '+url);return r.text();};
 let last;
 for(let attempt=0;attempt<4;attempt++){
  try{
   const rows=await Promise.all(pairs.map(async p=>{const [a,c]=await Promise.all([read(p.alias),read(p.canonical)]);assert.equal(a,c,'Live whole-page drift '+p.alias);checkGuide(a,p.language);checkGuide(c,p.language);return p.language;}));
   checkGuide(await read(route('en')),'en');console.log('LIVE PASS nine guides, complete HTML equality for '+rows.join(', ')+'; no submissions');return;
  }catch(e){last=e;if(attempt<3)await new Promise(r=>setTimeout(r,4000));}
 }
 throw last;
}
module.exports={checkGuide,finalize,live,pairs,route};
if(require.main===module){if(process.argv.includes('--live'))live().catch(e=>{console.error(e);process.exitCode=1;});else finalize(process.argv[2]||'out');}
