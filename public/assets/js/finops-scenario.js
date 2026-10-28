'use strict';
(function(root){
 function calculate(v){
  if(!Array.isArray(v)||v.length!==5||v.some(x=>!Number.isFinite(x))||v[0]<0||v[0]>1e9||v[1]<0||v[1]>100||v[2]<0||v[2]>1e9||v[3]<0||v[3]>1e9||!Number.isInteger(v[4])||v[4]<1||v[4]>120)throw new RangeError('Invalid scenario');
  const gross=v[0]*v[1]/100,net=gross-v[2];return [gross,net,net*v[4]-v[3],net>0?v[3]/net:null];
 }
 root.ZionFinopsScenario={calculate};
 if(typeof document==='undefined')return;
 const form=document.getElementById('finops-scenario-form');if(!form)return;
 const c=JSON.parse(document.getElementById('finops-scenario-copy').textContent),result=document.getElementById('finops-scenario-result');
 const clear=()=>{result.replaceChildren();result.textContent=c.pending;};
 form.addEventListener('input',clear);
 form.addEventListener('submit',event=>{event.preventDefault();result.replaceChildren();
  try{const v=['baseline','reduction','recurring','implementation','months'].map(id=>{const value=document.getElementById(id).value.trim();if(!value)throw new RangeError();return Number(value);});if(!form.checkValidity())throw new RangeError();const r=calculate(v),dl=document.createElement('dl');
   r.forEach((n,i)=>{const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=c.outputs[i];dd.textContent=n===null?c.noPayback:new Intl.NumberFormat(c.locale,i===3?{maximumFractionDigits:2}:{style:'currency',currency:'USD'}).format(n);dl.append(dt,dd);});result.append(dl);
  }catch(_){result.textContent=c.error;}
 });clear();
})(globalThis);
