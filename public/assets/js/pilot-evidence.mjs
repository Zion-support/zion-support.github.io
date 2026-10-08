export const GATES=Object.freeze({owner:'Accountable owner',baseline:'Measured baseline',metric:'Success metric and review date',review:'Human review and escalation',rollback:'Stop rule and rollback',permission:'Data permissions and minimization'});
export function evaluatePilotEvidence(input={}){
 const checked=Object.keys(GATES).filter(k=>input[k]===true);
 const missing=Object.keys(GATES).filter(k=>input[k]!==true);
 return {checked,missing,status:missing.length?'HOLD — missing self-attested evidence':'REVIEW — all six gates self-attested; not independently verified'};
}
export function pilotEvidenceText(input={}){
 const r=evaluatePilotEvidence(input);
 return ['ZION FREE DISCOVERY — PILOT EVIDENCE DRAFT','Version: 2026-10-08-pilot-evidence-v1',r.status,'Self-attested gates: '+r.checked.length+'/6','','Recorded by your selection:',...(r.checked.length?r.checked.map(k=>'- '+GATES[k]):['- None']), '', 'Missing evidence:',...(r.missing.length?r.missing.map(k=>'- '+GATES[k]):['- No unchecked gate; human verification is still required.']),'','Next step: collect the missing written evidence, then ask the accountable human reviewer for a bounded pilot decision.','No purchase, supplier reservation, dispatch or implementation is authorized.','Selections are local to this page; no upload, account storage or email is performed.','Free Discovery: https://ziontechgroup.com/discovery/','Guide: https://ziontechgroup.com/apps/discovery-to-pilot-guide.html','Pilot Planner: https://ziontechgroup.com/automation-pilot-planner/','Governance: https://ziontechgroup.com/ai-governance-checklist/'].join('\n');
}
if(typeof document!=='undefined'){
 const controls=[...document.querySelectorAll('[data-gate]')],status=document.getElementById('pilot-status'),report=document.getElementById('pilot-report');
 const state=()=>Object.fromEntries(controls.map(el=>[el.dataset.gate,el.checked]));
 function refresh(){const s=state(),r=evaluatePilotEvidence(s);status.textContent=r.status+' ('+r.checked.length+'/6).';report.textContent=pilotEvidenceText(s);}
 if(status&&report){
  controls.forEach(el=>el.addEventListener('change',refresh));refresh();
  document.getElementById('pilot-reset')?.addEventListener('click',()=>{controls.forEach(el=>{el.checked=false;});refresh();});
  document.getElementById('pilot-download')?.addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([pilotEvidenceText(state())],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='zion-pilot-evidence-draft.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 }
}
