'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),cp=require('node:child_process');
const R=require('./network-publication-routes.cjs');
const release='network-coverage-2026-10-12-v1';
const base='https://ziontechgroup.com';
const html=(l,body='fixture',head='')=>'<html lang="'+R.tags[l]+'"><head>'+head+'</head><body>'+body+'</body></html>';
function unit(){
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'network-coverage-'));
 const write=(rel,s)=>{const p=path.join(root,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,s);};
 const suffix=l=>l==='en'?'':'.'+(l==='pt'?'pt-br':l);
 for(const l of R.locales){
  const p=l==='en'?'':l+'/';write(p+'apps/example.html',html(l));
  const rel='apps/suffix'+suffix(l)+'.html';write(rel,html(l,'localized','<link rel="canonical" href="'+base+'/'+rel+'">'));
  if(l!=='en')write(p+'apps/suffix.html',html(l,'alias','<link rel="canonical" href="'+base+'/'+rel+'">'));
  write('apps/hyphen'+(l==='en'?'':'-'+l)+'.html',html(l));
  write((l==='pt'?'':l+'/')+'index.html',html(l));
 }
 write('apps/redirect.html',html('en'));write('pt/apps/redirect.html',html('pt','redirect','<meta http-equiv="refresh" content="0;url=/">'));
 write('apps/wrong.html',html('en'));write('de/apps/wrong.html',html('en'));
 write('apps/incomplete.html',html('en'));write('es/apps/incomplete.html','<html lang="es"><head></head>');
 write('apps/solitary.fr.html',html('fr'));write('apps/solitary.html',html('de'));
 write('apps/ordinary-de.html',html('en'));write('apps/no-lang.html','<html><body>unclassified</body></html>');
 write('apps/external.html',html('en','x','<link rel="canonical" href="https://example.com/apps/external.html">'));
 const inv=R.inventory(root),get=k=>inv.byPath.get(k);
 for(const k of ['apps/example.html','apps/suffix.html','apps/hyphen.html','index.html'])assert.deepEqual(get(k).missing,[],k);
 assert.equal(inv.groups.filter(g=>g.path.startsWith('apps/suffix')).length,1);
 assert.equal(get('apps/suffix.html').routes.pt,'apps/suffix.pt-br.html');
 assert.equal(get('apps/suffix.html').routeVariants.pt.length,2);
 assert.equal(get('index.html').routes.pt,'index.html');assert.equal(get('index.html').routes.en,'en/index.html');
 assert(!get('apps/redirect.html').available.includes('pt'));assert(!get('apps/wrong.html').available.includes('de'));assert(!get('apps/incomplete.html').available.includes('es'));
 assert(get('apps/solitary.fr.html'));assert(get('apps/ordinary-de.html'));assert(!get('apps/no-lang.html'));assert.equal(get('apps/external.html').routes.en,'apps/external.html');
 // Exercise actual generator and verifier together, retaining forms and head SEO.
 for(const l of R.locales){const p=l==='en'?'':l+'/';write(p+'discovery/index.html',html(l,'<form id="preserved"><input name="client"></form>'));write(p+'apps/index.html',html(l));}
 const before=fs.readFileSync(path.join(root,'pt/apps/suffix.html'),'utf8');
 // Isolate the renderer's optional unrelated release hooks from minimal synthetic fixtures.
 // The real complete artifact is validated separately by offline(out). No production hooks are changed.
 const harness=path.join(root,'.fixture-harness');fs.mkdirSync(harness);
 for(const name of ['render-network-start-here.cjs','verify-network-publication.cjs','network-publication-routes.cjs']){const bytes=fs.readFileSync(path.join(__dirname,name));fs.writeFileSync(path.join(harness,name),bytes);assert.deepEqual(fs.readFileSync(path.join(harness,name)),bytes);}
 const run=name=>{const r=cp.spawnSync(process.execPath,[path.join(harness,name),root],{encoding:'utf8'});assert.equal(r.status,0,r.stderr||r.stdout);};
 run('render-network-start-here.cjs');run('verify-network-publication.cjs');
 const first=fs.readFileSync(path.join(root,'apps/network-publication-coverage.json'),'utf8');
 assert.equal(JSON.parse(first).coverageRepairRelease,release);
 const alias=fs.readFileSync(path.join(root,'pt/apps/suffix.html'),'utf8');assert(alias.includes('href="/apps/suffix.fr.html"'));assert(alias.includes('href="/apps/suffix.pt-br.html"'));assert(alias.startsWith(before.slice(0,before.indexOf('</body>'))));
 const discovery=fs.readFileSync(path.join(root,'pt/discovery/index.html'),'utf8');assert(discovery.includes('<form id="preserved"><input name="client"></form>'));
 run('verify-network-publication.cjs');assert.equal(fs.readFileSync(path.join(root,'apps/network-publication-coverage.json'),'utf8'),first);
 assert.equal(fs.readFileSync(path.join(root,'pt/apps/suffix.html'),'utf8'),alias);
 // Full repeated renderer+verifier is stable in forms and owned navigation.
 run('render-network-start-here.cjs');run('verify-network-publication.cjs');assert.equal(fs.readFileSync(path.join(root,'pt/apps/suffix.html'),'utf8'),alias);
 fs.rmSync(root,{recursive:true,force:true});console.log('PASS coverage fixtures: folders, dotted/hyphen suffixes, aliases/canonicals, five homepages, redirects, wrong/missing language, incomplete body, no false suffix merge, forms/head preservation and navigation/report idempotence.');
}
function offline(out){const report=JSON.parse(fs.readFileSync(path.join(out,'apps/network-publication-coverage.json'),'utf8'));assert.equal(report.coverageSchema,'route-families-v2');assert.equal(report.coverageRepairRelease,release);assert.equal(new Set(report.groups.map(g=>g.path)).size,report.groups.length);assert.equal(report.fiveLanguageGroups+report.translationGapGroups,report.groups.length);for(const g of report.groups){assert.deepEqual(g.missing,R.locales.filter(l=>!g.available.includes(l)));for(const l of g.available){const s=fs.readFileSync(path.join(out,g.routes[l]),'utf8');assert.equal(R.language(s),l,g.path);assert(!R.redirect(s),g.path);}}console.log('PASS production artifact coverage: '+report.groups.length+' unique route families; '+report.fiveLanguageGroups+' five-language groups. Not semantic/body-quality certification.');}
async function live(){
 const get=async u=>{const res=await fetch(base+u+(u.includes('?')?'&':'?')+'coverage_qa='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});assert.equal(res.status,200,u);return res.text();};
 const report=JSON.parse(await get('/apps/network-publication-coverage.json'));assert.equal(report.coverageSchema,'route-families-v2');assert.equal(report.coverageRepairRelease,release);assert.equal(new Set(report.groups.map(g=>g.path)).size,report.groups.length);assert.equal(report.fiveLanguageGroups+report.translationGapGroups,report.groups.length);
 let checked=1;for(const key of ['apps/network-start-here.html','apps/field-service-evidence-guide.html','index.html']){const g=report.groups.find(x=>x.path===key);assert(g,key);assert.deepEqual(g.missing,[],key);for(const l of R.locales){const u=R.url(g.routes[l]),s=await get(u);assert.equal(R.language(s),l,u);assert(!R.redirect(s),u);assert(/<\/body>/i.test(s),u);if(key==='apps/network-start-here.html'){assert(s.includes('2026-10-08-network-start-v1'));assert.equal((s.match(/rel="alternate"/g)||[]).length,6);}checked++;}}
 console.log('PASS coverage LIVE '+release+': '+checked+' GET-only report/routes; '+report.fiveLanguageGroups+' five-language groups and '+report.translationGapGroups+' gaps. No semantic translation, visual, AI-functionality or inbox-delivery certification.');
}
(async()=>{if(process.argv.includes('--live'))await live();else{unit();const out=process.argv[2];if(out)offline(out);}})().catch(e=>{console.error(e);process.exitCode=1;});
