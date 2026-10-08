/* Zion Supplier Quote Evidence Workbench: local-only; no orders or network calls. */
(function(root){
'use strict';
const gates=['scope','named','availability','written','costs','terms','approval','po','zion'];
function calculate(row,markup,taxRate,currency){
 if(!['USD','BRL','EUR','GBP','CAD'].includes(currency))throw new Error('Choose a supported currency.');
 const rate=Number(markup),tax=Number(taxRate);
 if(!Number.isFinite(rate)||rate<40||rate>500)throw new Error('Markup must be between 40% and 500%.');
 if(!Number.isFinite(tax)||tax<0||tax>100)throw new Error('Client tax rate must be between 0% and 100%.');
 const amounts=['base','travel','freight','nonrecoverable','other'].map(k=>{
  const raw=row[k];if(raw===''||raw===null||raw===undefined)throw new Error('Complete every cost field; use 0 only when confirmed not applicable.');
  const n=Number(raw);if(!Number.isFinite(n)||n<0||n>1e9)throw new Error('Costs must be finite, nonnegative and at most 1 billion.');
  if(Math.abs(n*100-Math.round(n*100))>0.00001)throw new Error('Use at most two decimal places for costs.');return Math.round(n*100);
 });
 const costCents=amounts.reduce((a,b)=>a+b,0);if(costCents<=0)throw new Error('Complete cost must be greater than zero.');
 const sellCents=Math.ceil(costCents*(100+rate)/100-1e-7),clientTaxCents=Math.ceil(sellCents*tax/100-1e-7);
 const missing=gates.filter(k=>row[k]!==true);
 return {currency,cost:costCents/100,sell:sellCents/100,clientTax:clientTaxCents/100,total:(sellCents+clientTaxCents)/100,markup:rate,margin:(sellCents-costCents)/sellCents*100,missing,status:missing.length?'HOLD — planning only':'All declared gates checked — final owner review still required'};
}
root.ZionQuoteEvidence={calculate,gates};
if(typeof document==='undefined')return;
const $=id=>document.getElementById(id);let lastReport='';
function render(){
 $('errors').textContent='';lastReport='';$('export').disabled=true;
 try{
 const currency=$('currency').value,markup=$('markup').value,tax=$('client-tax').value;
 const records=['a','b'].filter(p=>p==='a'||$('include-b').checked).map(p=>{
 const row={};for(const key of ['base','travel','freight','nonrecoverable','other'])row[key]=$(p+'-'+key).value;
 for(const key of gates)row[key]=$(p+'-'+key).checked;
 const name=$(p+'-alias').value.trim().slice(0,80)||('Supplier '+p.toUpperCase());
 return {name,result:calculate(row,markup,tax,currency)};
 });
 const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency}).format(n);
 const lines=['ZION — SUPPLIER QUOTE EVIDENCE WORKBENCH','INTERNAL PLANNING — not a client offer, booking, PO or authorization.','Generated: '+new Date().toISOString(),'Costs must refer to the same currency, scope and delivery window.'];
 for(const {name,result:r} of records){lines.push('',name,r.status,'Complete cost: '+money(r.cost),'Minimum sell before client tax: '+money(r.sell),'Markup: '+r.markup+'% | gross margin: '+r.margin.toFixed(2)+'%','Client tax at entered rate (not legal/tax advice): '+money(r.clientTax),'Illustrative total: '+money(r.total),'Missing declarations: '+(r.missing.join(', ')||'none — verify source documents independently'));}
 if(records.length===2){const delta=Math.abs(records[0].result.cost-records[1].result.cost);lines.push('','Complete-cost difference: '+money(delta)+'. Lower price alone does not establish the best supplier. Compare availability, minimum charges, cancellation, warranty, payment and compliance in writing.');}
 lines.push('','Prevent double counting: include supplier tax in costs only if nonrecoverable; confirm actual tax treatment with the responsible finance owner. Client taxes are separate and are not profit.','No supplier commitment, reservation, purchase, shipment, travel or dispatch without written client confirmation, applicable PO and separate Zion authorization.','Use verified current supplier offers for released prices; market references are estimates only.','Share only the approved client quote externally. Keep supplier identity, original cost and this internal comparison confidential.');
 lastReport=lines.join('\n');$('output').textContent=lastReport;$('export').disabled=false;
 }catch(e){$('errors').textContent=e.message;$('output').textContent='No report released. Correct the inputs and evidence declarations.';}
}
$('quote-form').addEventListener('submit',e=>{e.preventDefault();render();});
$('include-b').addEventListener('change',()=>{$('supplier-b').hidden=!$('include-b').checked;$('supplier-b').disabled=!$('include-b').checked;lastReport='';$('export').disabled=true;$('output').textContent='Recalculate after changing the comparison.';});
$('quote-form').addEventListener('input',()=>{lastReport='';$('export').disabled=true;$('output').textContent='Inputs changed. Recalculate to refresh the report.';});
$('export').addEventListener('click',()=>{if(!lastReport)return;const url=URL.createObjectURL(new Blob([lastReport],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='zion-supplier-evidence-internal.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
})(typeof window==='undefined'?globalThis:window);
