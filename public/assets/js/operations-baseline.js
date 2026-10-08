'use strict';
(function(){
 function estimate(hours,rate,share){
  if(![hours,rate,share].every(v=>typeof v==='number'&&Number.isFinite(v))||hours<0||hours>100000||rate<0||rate>10000||share<0||share>100)return null;
  const capacityHours=hours*share/100;return {capacityHours,capacityValue:capacityHours*rate};
 }
 if(typeof module!=='undefined'&&module.exports)module.exports={estimate};
 if(typeof document==='undefined')return;
 const root=document.getElementById('operations-baseline');if(!root)return;
 const hours=document.getElementById('baseline-hours'),rate=document.getElementById('baseline-rate'),share=document.getElementById('baseline-share'),error=document.getElementById('baseline-error'),hoursOut=document.getElementById('baseline-hours-result'),valueOut=document.getElementById('baseline-value-result');
 const lang=document.documentElement.lang||'en',number=new Intl.NumberFormat(lang,{maximumFractionDigits:2}),money=new Intl.NumberFormat(lang,{style:'currency',currency:'USD',maximumFractionDigits:2});
 function update(){const result=estimate(hours.valueAsNumber,rate.valueAsNumber,share.valueAsNumber);error.hidden=!!result;hoursOut.textContent=result?number.format(result.capacityHours):'—';valueOut.textContent=result?money.format(result.capacityValue):'—';}
 [hours,rate,share].forEach(el=>el.addEventListener('input',update));document.getElementById('baseline-calculate').addEventListener('click',update);update();
})();
