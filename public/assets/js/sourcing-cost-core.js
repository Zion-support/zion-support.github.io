'use strict';
(function(root){
 function cents(value,label,optional=false){
  const raw=String(value??'').trim();
  if(optional&&raw==='')return 0;
  if(!/^\d{1,9}(?:\.\d{1,2})?$/.test(raw))throw new Error(label+': enter a nonnegative amount with at most two decimal places.');
  const [whole,frac='']=raw.split('.');
  return Number(whole)*100+Number(frac.padEnd(2,'0'));
 }
 function calculate(input){
  const cost=cents(input.cost,'Supplier cost'),landed=cents(input.landed,'Landed costs',true),tax=cents(input.tax,'Client taxes',true);
  const raw=String(input.markup??'').trim();
  if(!/^\d{2,4}$/.test(raw)||Number(raw)<40||Number(raw)>1000)throw new Error('Markup must be a whole number from 40 to 1000 percent.');
  if(cost<=0)throw new Error('Enter a positive supplier cost; a missing quote is not zero cost.');
  const allIn=cost+landed,markup=Number(raw);
  const sell=Math.ceil(allIn*(100+markup)/100);
  const total=sell+tax;
  return {cost,landed,tax,allIn,markup,sell,total,markupAmount:sell-allIn};
 }
 function gate(flags){return ['scope','supplier','taxes','client','po','zion'].every(key=>flags[key]===true);}
 const api={calculate,gate};root.ZionSourcing=api;
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(globalThis);
