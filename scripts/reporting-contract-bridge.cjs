"use strict";
const assert=require('node:assert/strict');
const plain="apps.map(a=>a[0]+' https://ziontechgroup.com'+a[1])";
const reporting="apps.map(a=>a[0]+' ['+resourceType(a)+'] https://ziontechgroup.com'+a[1])";
const reports=["apps.map(a=>a[0]+' — '+recommendationKind(a[1])+' https://ziontechgroup.com'+a[1])","apps.map(a=>a[0]+' ['+recommendationKind(a[1])+'] https://ziontechgroup.com'+a[1])"];
const loop=/ for\(const \[name,path\] of apps\)\{[^\n]+\}/;
const bare=" for(const [name,path] of apps){const item=document.createElement('li'),link=document.createElement('a');link.href=path;link.textContent=name;item.appendChild(link);list.appendChild(item);}";
function delivery(source){const i=source.indexOf(' const cc=');assert(i>=0,'Missing delivery boundary');return source.slice(i);}
function prepare(source){
 const tail=delivery(source);
 if(source.includes('resourceClassificationV1')){assert(source.includes('recommendationKind(a[1])')&&source.includes('recommendationKind(path)'),'Shared labels missing on repeated render');return {source,tail,skip:true};}
 const report=reports.find(s=>source.includes(s));assert(report,'Unknown report classification contract');
 const display=source.match(loop)?.[0];assert(display&&display.includes('recommendationKind(path)'),'Unknown recommendation DOM contract');
 const result=source.replace(report,plain).replace(display,bare);assert.equal(delivery(result),tail);return {source:result,tail,report,display,skip:false};
}
function restore(source,contract){
 if(contract.skip){assert.equal(delivery(source),contract.tail);return source;}
 assert(source.includes(reporting),'Reporting renderer did not label report');const display=source.match(loop)?.[0];assert(display&&display.includes('resourceType([name,path])'),'Reporting renderer did not label display');
 const result=source.replace(reporting,contract.report).replace(display,contract.display);assert.equal(delivery(result),contract.tail,'Email delivery logic changed');assert(result.includes('resourceClassificationV1'));return result;
}
module.exports={prepare,restore,delivery};
