'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const root=process.argv[2]||'public';
 const {GATES,evaluatePilotEvidence,pilotEvidenceText}=await import(require('node:url').pathToFileURL(path.resolve(root,'assets/js/pilot-evidence.mjs')).href);
 assert.equal(Object.keys(GATES).length,6);
 assert.equal(evaluatePilotEvidence().missing.length,6);
 assert.equal(evaluatePilotEvidence({owner:'true',baseline:1}).checked.length,0,'Strict booleans only');
 const full=Object.fromEntries(Object.keys(GATES).map(k=>[k,true]));
 assert.equal(evaluatePilotEvidence(full).missing.length,0);
 assert.match(evaluatePilotEvidence(full).status,/REVIEW/);
 for(const key of Object.keys(GATES)){const s={...full,[key]:false};assert.deepEqual(evaluatePilotEvidence(s).missing,[key]);assert.match(evaluatePilotEvidence(s).status,/HOLD/);}
 assert.equal(evaluatePilotEvidence({...full,unknown:true}).checked.length,6);
 assert.match(pilotEvidenceText(full),/not independently verified/);
 assert.match(pilotEvidenceText(full),/No purchase, supplier reservation, dispatch or implementation is authorized/);
 const html=fs.readFileSync(path.join(root,'apps/discovery-to-pilot-guide.html'),'utf8');
 assert.equal((html.match(/data-gate=/g)||[]).length,6);
 for(const k of Object.keys(GATES))assert(html.includes('data-gate="'+k+'"'));
 assert(html.includes('role="status"')&&html.includes('aria-live="polite"'));
 assert(!/<form\b/i.test(html),'Checklist must not submit a form');
 const js=fs.readFileSync(path.join(root,'assets/js/pilot-evidence.mjs'),'utf8');
 assert(!/\bfetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage/.test(js),'No network or persistence');
 console.log('PASS pilot-evidence: six gates, 11 deterministic cases, local-only module and accessible status.');
})().catch(e=>{console.error(e);process.exitCode=1;});
