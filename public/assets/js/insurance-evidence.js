'use strict';
// Local checklist only: no upload, inference, email, storage or financial decision.
function evidenceReport(values, copy) {
 const keys=['example','owner','baseline','evidence','reviewer','stop'];
 const missing=keys.filter(k=>!String(values[k]||'').trim());
 return {missing, text:copy.title+'\n'+copy.limit+'\n\n'+copy.mode+': '+values.mode+'\n'+keys.map((k,i)=>copy.labels[i]+': '+String(values[k]||'').trim()).join('\n')+'\n\n'+copy.missing+': '+(missing.length?missing.map(k=>copy.labels[keys.indexOf(k)]).join(', '):copy.complete)+'\n'+copy.next+'\nhttps://ziontechgroup.com/discovery/'};
}
if(typeof module!=='undefined') module.exports={evidenceReport};
if(typeof document!=='undefined'){
 const form=document.getElementById('evidence-form');
 const copy=JSON.parse(document.getElementById('evidence-copy').textContent);
 const q=new URLSearchParams(location.search).get('mode');
 if(['policy','underwriting','claims'].includes(q))form.elements.mode.value=q;
 let report='';
 form.addEventListener('submit',e=>{
  e.preventDefault();if(!form.reportValidity())return;
  const values=Object.fromEntries(new FormData(form));
  values.mode=form.elements.mode.selectedOptions[0].textContent;
  const result=evidenceReport(values,copy);report=result.text;
  document.getElementById('evidence-report').textContent=report;
  document.getElementById('evidence-status').textContent=copy.missing+': '+result.missing.length+'/6. '+copy.limit;
  document.getElementById('evidence-result').hidden=false;
  document.getElementById('evidence-report').focus();
 });
 document.getElementById('evidence-download').addEventListener('click',()=>{
  if(!report)return;const url=URL.createObjectURL(new Blob([report],{type:'text/plain;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download='zion-insurance-evidence-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 });
}
