'use strict';
// Offline publication gate; --live performs read-only HTTPS GETs. Never submit forms.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',origin='https://ziontechgroup.com',release='field-alias-integrity-2026-10-10';
const pairs=['pt','es','fr','de'].map(l=>({language:l==='pt'?'pt-BR':l,canonical:'/apps/field-service-evidence-guide.'+(l==='pt'?'pt-br':l)+'.html',alias:'/'+l+'/apps/field-service-evidence-guide.html'}));
const pack=html=>{const m=html.match(/<!--field-evidence-pack:start-->[\s\S]*?<!--field-evidence-pack:end-->/);assert(m,'Newest evidence pack missing');assert.equal((m[0].match(/<li>/g)||[]).length,6);return m[0];};
function check(html,url,language,canonical){
 assert(html.includes('<html lang="'+language+'">'),'Wrong language '+url);
 assert(html.includes('href="'+origin+canonical+'"'),'Canonical lost '+url);
 assert.equal((html.match(/rel="alternate"/g)||[]).length,6,'Alternate set '+url);
 assert(html.includes('data-field-evidence-languages'),'Switcher missing '+url);
 assert.equal((html.match(/data-field-evidence-pack=/g)||[]).length,1,'Checklist count '+url);
 assert(!/<form\b|<script\b/i.test(html),'Guide is no longer read-only '+url);
 assert(/id=["']tools["']/.test(html),'Linked tools anchor missing '+url);
 return pack(html);
}
async function live(){
 const read=async url=>{const r=await fetch(origin+url+'?qa='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});assert.equal(r.status,200,'HTTP '+url);return r.text();};
 for(const p of pairs){const [a,c]=await Promise.all([read(p.alias),read(p.canonical)]);assert.equal(check(a,p.alias,p.language,p.canonical),check(c,p.canonical,p.language,p.canonical),'Stale translated checklist '+p.alias);console.log('LIVE PASS '+p.language+' alias/canonical checklist pair');}
 const en=await read('/apps/field-service-evidence-guide.html');check(en,'/apps/field-service-evidence-guide.html','en','/apps/field-service-evidence-guide.html');console.log('LIVE PASS English guide: nine routes, all five checklist languages');
}
if(process.argv.includes('--live'))live().catch(e=>{console.error(e);process.exitCode=1;});
else{
 for(const p of pairs){const a=fs.readFileSync(path.join(out,p.alias.slice(1)),'utf8'),c=fs.readFileSync(path.join(out,p.canonical.slice(1)),'utf8');assert.equal(a,c,'Alias copied before final guide generation '+p.alias);assert.equal(check(a,p.alias,p.language,p.canonical),check(c,p.canonical,p.language,p.canonical));}
 const en=fs.readFileSync(path.join(out,'apps/field-service-evidence-guide.html'),'utf8');check(en,'/apps/field-service-evidence-guide.html','en','/apps/field-service-evidence-guide.html');
 fs.writeFileSync(path.join(out,'apps/field-evidence-alias-integrity.json'),JSON.stringify({release,pairs,verification:'Offline alias/canonical byte equality after evidence-pack render; live checks compare translated checklist sections across nine routes',scope:'Field guide aliases only; not full-network translation or functionality certification',forms:'read-only guides',delivery:'unchanged'},null,2));
 console.log('PASS '+release+': four byte-identical alias/canonical pairs, nine read-only guides, six checklist items per language');
}
