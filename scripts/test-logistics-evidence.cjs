'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),cp=require('node:child_process');
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'logistics-evidence-'));fs.mkdirSync(path.join(dir,'apps'));
const files=['','.pt-br','.es','.fr','.de'].map(s=>'apps/october-2026-batch129-logistics-ai'+s+'.html');
try{
 for(const f of files)fs.copyFileSync(path.join('public',f),path.join(dir,f));
 const render=()=>cp.execFileSync(process.execPath,['scripts/render-logistics-evidence.cjs',dir],{stdio:'inherit'});render();
 const first=files.map(f=>fs.readFileSync(path.join(dir,f),'utf8'));render();
 for(let i=0;i<files.length;i++){const html=fs.readFileSync(path.join(dir,files[i]),'utf8');assert.equal(html,first[i]);assert.equal((html.match(/hreflang=/g)||[]).length,6);assert(html.includes('data-logistics-evidence'));assert(!/800\+|plus de 800|más de 800/.test(html));}
 console.log('PASS logistics evidence fixture: five locales, reciprocal language links, idempotence');
}finally{fs.rmSync(dir,{recursive:true,force:true});}
