'use strict';
// Local-only worksheet. No network requests, storage, model calls or tracking.
(function(){
 const form=document.getElementById('pilot-form');if(!form)return;
 const config=JSON.parse(document.getElementById('pilot-config').textContent);
 let report='';
 function clean(value){return String(value||'').replace(/[\u0000-\u001f\u007f]/g,' ').trim().slice(0,300);}
 form.addEventListener('submit',function(event){
  event.preventDefault();if(!form.reportValidity())return;
  const data=new FormData(form),values=config.fields.map((_,i)=>clean(data.get('f'+i)));
  if(values.some(v=>!v))return;
  report=config.title+'\n\n'+config.fields.map((label,i)=>label+': '+values[i]).join('\n')+'\n\n'+config.next+'\n'+config.route;
  document.getElementById('pilot-text').textContent=report;
  document.getElementById('pilot-result').hidden=false;
 });
 document.getElementById('pilot-download').addEventListener('click',function(){
  if(!report)return;
  const url=URL.createObjectURL(new Blob([report],{type:'text/plain;charset=utf-8'}));
  const link=document.createElement('a');link.href=url;link.download='zion-communications-pilot.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 });
})();
