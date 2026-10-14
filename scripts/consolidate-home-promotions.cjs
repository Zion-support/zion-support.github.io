"use strict";
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const RELEASE='home-promotion-archive-2026-10-14';
const IDS=new Set(['registry-explorer-path','fe-discovery-guide-links','communications-workflow-lab','communications-decision-path','app-experiment-promotion','site-survey-spotlight','communications-readiness-path','treasury-network-promotion','insurance-finance-promotion']);
const LOCALES={en:'/en/',pt:'/',es:'/es/',fr:'/fr/',de:'/de/'};
const protectedParts=h=>h.match(/<script\b[^>]*>[\s\S]*?<\/script\s*>|<form\b[^>]*>[\s\S]*?<\/form\s*>|<style\b[^>]*>[\s\S]*?<\/style\s*>/gi)||[];
const attrs=(h,key)=>[...h.matchAll(new RegExp('\\b'+key+'\\s*=\\s*(["\\\'])(.*?)\\1','gi'))].map(m=>m[2]).sort();
function sections(h){
 const masked=h.replace(/<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script\s*>|<style\b[^>]*>[\s\S]*?<\/style\s*>/gi,s=>' '.repeat(s.length));
 const rx=/<\/?section\b[^>]*>/gi,result=[];let m,depth=0,start=0,id='';
 while((m=rx.exec(masked))){if(/^<\//.test(m[0])){assert(depth>0,'Unbalanced section');if(--depth===0)result.push({start,end:rx.lastIndex,id,html:h.slice(start,rx.lastIndex)});}else if(depth++===0){start=m.index;id=(m[0].match(/\bid\s*=\s*(["'])(.*?)\1/i)||[])[2]||'';}}
 assert.equal(depth,0,'Unclosed section');return result;
}
function transform(before){
 const owner=sections(before).find(s=>s.id==='app-paths-home');assert(owner,'Existing localized app-path archive required');
 const close=owner.html.lastIndexOf('</details>');assert(close>=0,'Existing archive details required');
 assert(/<summary\b/i.test(owner.html),'Archive summary required');
 const selected=sections(before).filter(s=>IDS.has(s.id)&&protectedParts(s.html).length===0);
 if(!selected.length)return {html:before,moved:[]};
 let after=before;
 for(const s of [...selected].reverse())after=after.slice(0,s.start)+after.slice(s.end);
 const current=sections(after).find(s=>s.id==='app-paths-home');
 const at=current.start+current.html.lastIndexOf('</details>');
 after=after.slice(0,at)+'\n'+selected.map(s=>s.html).join('\n')+'\n'+after.slice(at);
 assert.deepEqual(protectedParts(after),protectedParts(before),'Protected blocks changed');
 assert.deepEqual(attrs(after,'href'),attrs(before,'href'),'Destination multiset changed');
 assert.deepEqual(attrs(after,'id'),attrs(before,'id'),'Anchor multiset changed');
 for(const id of IDS)assert(!sections(after).some(s=>s.id===id&&protectedParts(s.html).length===0),'Promotion not archived '+id);
 return {html:after,moved:selected.map(s=>s.id)};
}
function render(out='out'){
 const prepared=Object.entries(LOCALES).map(([locale,url])=>{const file=path.join(out,url.slice(1),'index.html');const before=fs.readFileSync(file,'utf8');return {locale,url,file,...transform(before)};});
 // Validate every locale before writing any file.
 for(const p of prepared)fs.writeFileSync(p.file,p.html);
 return {release:RELEASE,pages:prepared.map(({locale,url,moved})=>({locale,url,moved}))};
}
module.exports={RELEASE,IDS,LOCALES,protectedParts,attrs,sections,transform,render};
if(require.main===module)console.log(JSON.stringify(render(process.argv[2]||'out'),null,2));
