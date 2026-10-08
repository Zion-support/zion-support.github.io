'use strict';
(function(root){
function finite(n,min,max){if(!Number.isFinite(n)||n<min||n>max)throw new RangeError('Invalid planning input');return n;}
function roi(hours,rate){finite(hours,0,1e6);finite(rate,0,1e6);return {monthly:hours*rate,yearly:hours*rate*12};}
function sla(uptime,days,fee,percent,actual){finite(uptime,0,100);finite(days,1,366);finite(fee,0,1e9);finite(percent,0,100);finite(actual,0,days*24);const allowed=days*24*(1-uptime/100),excess=Math.max(0,actual-allowed),hourly=fee*percent/100;return {allowed,excess,hourly,total:excess*hourly};}
const math=Object.freeze({roi,sla});root.ZionOpsMath=math;if(typeof module!=='undefined'&&module.exports)module.exports=math;
if(typeof document==='undefined')return;
const config=document.getElementById('ops-copy'),form=document.getElementById('ops-form');if(!config||!form)return;
const c=JSON.parse(config.textContent),out=document.getElementById('ops-result'),kind=form.dataset.kind;
const read=id=>{const value=document.getElementById(id).value.trim();if(value==='')throw new RangeError('Missing input');return Number(value);};
function show(values,labels){out.replaceChildren();const dl=document.createElement('dl');values.forEach((v,i)=>{const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=labels[i];dd.textContent=new Intl.NumberFormat(c.locale,{maximumFractionDigits:4}).format(v);dl.append(dt,dd);});out.append(dl);}
function calculate(){try{if(kind==='roi'){const r=roi(read('hours'),read('rate'));out.dataset.metrics=JSON.stringify(r);show([r.monthly,r.yearly],c.outputs.slice(0,2));}else if(kind==='sla'){const r=sla(read('u'),read('d'),read('f'),read('p'),read('a'));out.dataset.metrics=JSON.stringify(r);show([r.allowed,r.excess,r.hourly,r.total],c.outputs.slice(2,6));}else{const count=form.querySelectorAll('#gov-controls input:checked').length;document.getElementById('govscore').textContent=c.outputs[6]+': '+count+' / 10';out.dataset.metrics=JSON.stringify({checked:count});}out.removeAttribute('data-error');}catch{out.textContent=c.error;out.dataset.error='true';delete out.dataset.metrics;}}
form.addEventListener('submit',e=>{e.preventDefault();calculate();});if(kind==='governance')form.addEventListener('change',calculate);calculate();
})(typeof globalThis!=='undefined'?globalThis:this);
