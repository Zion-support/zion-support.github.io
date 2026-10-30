'use strict';
(function(root){
function finite(n,min,max){if(!Number.isFinite(n)||n<min||n>max)throw new RangeError('Invalid planning input');return n;}
function roi(hours,rate){finite(hours,0,1e6);finite(rate,0,1e6);return {monthly:hours*rate,yearly:hours*rate*12};}
function sla(uptime,days,fee,percent,actual){finite(uptime,0,100);finite(days,1,366);finite(fee,0,1e9);finite(percent,0,100);finite(actual,0,days*24);const allowed=days*24*(1-uptime/100),excess=Math.max(0,actual-allowed),hourly=fee*percent/100;return {allowed,excess,hourly,total:excess*hourly};}
const math=Object.freeze({roi,sla});root.ZionOpsMath=math;if(typeof module!=='undefined'&&module.exports)module.exports=math;
if(typeof document==='undefined')return;
const config=document.getElementById('ops-copy'),form=document.getElementById('ops-form');if(!config||!form)return;
const c=JSON.parse(config.textContent),out=document.getElementById('ops-result'),kind=form.dataset.kind;
const baselineError=kind==='roi'?document.getElementById('ops-error'):null;
const read=id=>{const value=document.getElementById(id).value.trim();if(value==='')throw new RangeError('Missing input');return Number(value);};
function show(values,labels,currency=false){out.replaceChildren();const dl=document.createElement('dl');values.forEach((v,i)=>{const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=labels[i];dd.textContent=new Intl.NumberFormat(c.locale,currency?{style:'currency',currency:'USD'}:{maximumFractionDigits:4}).format(v);dl.append(dt,dd);});out.append(dl);}
function clearBaselineError(){if(baselineError)baselineError.textContent='';for(const id of ['hours','rate'])document.getElementById(id).removeAttribute?.('aria-invalid');}
function baselineValues(){let invalid=false;const values=['hours','rate'].map(id=>{try{return finite(read(id),0,1e6);}catch{document.getElementById(id).setAttribute?.('aria-invalid','true');invalid=true;return 0;}});if(invalid)throw new RangeError('Invalid baseline input');return values;}
function calculate(){try{if(kind==='roi'){clearBaselineError();const r=roi(...baselineValues());out.dataset.metrics=JSON.stringify(r);show([r.monthly,r.yearly],c.outputs.slice(0,2),true);}else if(kind==='sla'){const r=sla(read('u'),read('d'),read('f'),read('p'),read('a'));out.dataset.metrics=JSON.stringify(r);show([r.allowed,r.excess,r.hourly,r.total],c.outputs.slice(2,6));}else{const count=form.querySelectorAll('#gov-controls input:checked').length;document.getElementById('govscore').textContent=c.outputs[6]+': '+count+' / 10';out.dataset.metrics=JSON.stringify({checked:count});}out.removeAttribute('data-error');delete out.dataset.pending;}catch{if(baselineError){baselineError.textContent=c.error;out.textContent='';}else out.textContent=c.error;out.dataset.error='true';delete out.dataset.metrics;delete out.dataset.pending;}}
function invalidateBaseline(){if(!c.pending){calculate();return;}clearBaselineError();out.textContent=c.pending;delete out.dataset.metrics;delete out.dataset.error;out.dataset.pending='true';}
form.addEventListener('submit',e=>{e.preventDefault();calculate();});if(kind==='governance')form.addEventListener('change',calculate);if(kind==='roi'){form.addEventListener('input',invalidateBaseline);form.addEventListener('change',invalidateBaseline);}calculate();
// Enable the baseline form only after its local submit handler is installed.
if(kind==='roi'){const button=document.getElementById('roi-calculate');if(button)button.disabled=false;}
})(typeof globalThis!=='undefined'?globalThis:this);

