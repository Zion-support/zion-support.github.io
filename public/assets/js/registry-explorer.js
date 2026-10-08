'use strict';
(function(){
const el=id=>document.getElementById(id),search=el('catalog-search'),status=el('catalog-status'),cards=el('catalog-cards'),retry=el('catalog-retry'),prev=el('catalog-prev'),next=el('catalog-next'),pageLabel=el('catalog-page');
let apps=[],filtered=[],page=0,notice='',loaded=false;const size=24;
const idPattern=/^[a-zA-Z0-9][a-zA-Z0-9._-]{0,150}$/;
const sourceBases=['https://ziontechgroup.com/zion-network/','https://raw.githubusercontent.com/Zion-support/zion-network/main/'];
function words(value){return new Set(String(value).toLowerCase().split(/[^a-z0-9]+/).filter(x=>x.length>3&&!['zion','group','with','from','that','this','your','apps'].includes(x)));}
function link(text,url){const a=document.createElement('a');a.textContent=text;a.href=url;return a;}
function related(a){const terms=words(a.i+' '+a.d);return apps.filter(b=>b.i!==a.i).map(b=>({app:b,score:[...words(b.i+' '+b.d)].filter(t=>terms.has(t)).length})).filter(b=>b.score>0).sort((a,b)=>b.score-a.score||a.app.i.localeCompare(b.app.i)).slice(0,2).map(b=>b.app);}
function render(){
 const q=search.value.trim().toLowerCase();filtered=apps.filter(a=>(a.i+' '+a.d).toLowerCase().includes(q));const pages=Math.max(1,Math.ceil(filtered.length/size));page=Math.min(page,pages-1);cards.replaceChildren();
 for(const a of filtered.slice(page*size,(page+1)*size)){
  const card=document.createElement('article');card.className='card';const h=document.createElement('h2');h.textContent=a.i.replace(/-/g,' ');const p=document.createElement('p');p.textContent=a.d||'Registered catalog entry; inspect documentation before use.';
  const nav=document.createElement('p');nav.append(link('Source / documentation','https://github.com/Zion-support/'+encodeURIComponent(a.i)),document.createTextNode(' · '),link('Free Discovery','/discovery/'),document.createTextNode(' · '),link('Trial pack','/apps/discovery-trial-pack.html'));
  card.append(h,p,nav);const siblings=related(a);if(siblings.length){const r=document.createElement('p');r.append(document.createTextNode('Keyword-related entries: '));siblings.forEach((b,i)=>{if(i)r.append(document.createTextNode(' · '));r.append(link(b.i,'/apps/registry-explorer.html?q='+encodeURIComponent(b.i)));});card.append(r);}cards.append(card);
 }
 status.textContent=loaded?`${filtered.length} matching entries of ${apps.length} unique registered IDs. ${notice}`:'Loading catalog…';pageLabel.textContent=`Page ${page+1} of ${pages}`;prev.disabled=page===0;next.disabled=page+1>=pages;
 if(loaded&&filtered.length===0){const p=document.createElement('p');p.textContent='No matching catalog entry. Try a shorter process keyword or browse all apps.';cards.append(p);}
}
async function read(url){const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),12000);try{const r=await fetch(url,{signal:controller.signal,credentials:'omit'});if(!r.ok)throw new Error('HTTP '+r.status);return await r.json();}finally{clearTimeout(timer);}}
async function loadFrom(base){
 const manifest=await read(base+'network.json');if(!Array.isArray(manifest.apps_files)||!manifest.apps_files.length||manifest.apps_files.length>20)throw new Error('Invalid registry manifest');
 if(!manifest.apps_files.every(p=>typeof p==='string'&&/^network\/apps-part[0-9]+\.json$/.test(p)))throw new Error('Invalid registry part path');
 const chunks=await Promise.all(manifest.apps_files.map(p=>read(base+p)));if(chunks.some(p=>!Array.isArray(p)))throw new Error('Invalid registry part');
 const all=chunks.flat(),map=new Map();let invalid=0,duplicates=0;for(const a of all){if(!a||typeof a.i!=='string'||!idPattern.test(a.i)){invalid++;continue;}if(map.has(a.i)){duplicates++;continue;}map.set(a.i,{i:a.i,d:typeof a.d==='string'?a.d:''});}
 if(!map.size)throw new Error('No valid records');return {apps:[...map.values()].sort((a,b)=>a.i.localeCompare(b.i)),invalid,duplicates,total:manifest.apps_total,base};
}
async function load(){
 retry.hidden=true;retry.disabled=true;status.textContent='Loading all referenced registry parts…';loaded=false;let data;
 for(const base of sourceBases){try{data=await loadFrom(base);break;}catch(e){console.warn('Catalog source unavailable:',base,e.message);}}
 retry.disabled=false;if(!data){status.textContent='The complete catalog could not be loaded. Use the app directory or GitHub index below, or retry. No partial count is advertised.';retry.hidden=false;return;}
 apps=data.apps;loaded=true;notice=`Source: ${data.base.includes('raw.githubusercontent')?'GitHub raw fallback':'network hub'}. ${data.duplicates} duplicate IDs removed; ${data.invalid} invalid records omitted.`;
 if(typeof data.total==='number'&&data.total!==apps.length)notice+=' Manifest count differs from loaded unique IDs; the displayed count reflects this loaded snapshot.';
 page=0;render();
}
search.value=new URLSearchParams(location.search).get('q')?.slice(0,160)||'';search.addEventListener('input',()=>{page=0;render();});prev.addEventListener('click',()=>{page--;render();});next.addEventListener('click',()=>{page++;render();});retry.addEventListener('click',load);load();
})();
