'use strict';
// Local-only scenario. No fetch, network submission, identity fields or storage.
const journeys={support:[['AI Ticket Triage','/ai-ticket-triage/'],['Governance Checklist','/ai-governance-checklist/']],operations:[['Ops Runbook AI','/ops-runbook-ai/'],['Governance Checklist','/ai-governance-checklist/']],finance:[['ROI Calculator','/roi-calc/'],['Report Workbench','/apps/discovery-report-workbench.html']],governance:[['Governance Checklist','/ai-governance-checklist/'],['Network map','/apps/network.html']]};
document.getElementById('local-preview').addEventListener('submit',function(event){
 event.preventDefault();const error=document.getElementById('preview-error');error.hidden=true;
 if(!this.reportValidity())return;
 const process=document.getElementById('preview-process').value;
 const hours=Number(document.getElementById('preview-hours').value),rate=Number(document.getElementById('preview-rate').value),share=Number(document.getElementById('preview-share').value);
 if(!Object.hasOwn(journeys,process)||![hours,rate,share].every(Number.isFinite)||hours<0||hours>100000||rate<0||rate>100000||share<0||share>100){error.textContent='Enter valid nonnegative values and a share between 0 and 100.';error.hidden=false;return;}
 const capacity=hours*share/100,value=capacity*rate;
 document.getElementById('preview-summary').textContent='Illustrative scenario: '+capacity.toLocaleString('en-US',{maximumFractionDigits:2})+' hours/month of potential capacity at '+rate+' USD/hour = '+value.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0})+'/month. Assumptions: '+hours+' team-hours/month and '+share+'% potentially automatable. No email was sent.';
 const list=document.getElementById('preview-apps');list.replaceChildren();
 for(const [name,path] of journeys[process]){const item=document.createElement('li'),link=document.createElement('a');link.href=path;link.textContent=name;item.appendChild(link);list.appendChild(item);}
 document.getElementById('preview-result').hidden=false;
});
