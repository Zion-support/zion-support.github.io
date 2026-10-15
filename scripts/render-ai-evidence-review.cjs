'use strict';
const fs=require('node:fs'),path=require('node:path');
const base=require('./render-ai-evidence-locales.cjs');
const traceLabels=['Trace JSON','JSON do trace','JSON de la traza','JSON de la trace','Trace-JSON'];
const graphLabels=['Dependency JSON','JSON de dependências','JSON de dependencias','JSON des dépendances','Abhängigkeits-JSON'];
const errors=['Invalid JSON or value; check the documented format.','JSON ou valor inválido; verifique o formato documentado.','JSON o valor no válido; revise el formato documentado.','JSON ou valeur invalide ; vérifiez le format documenté.','Ungültiges JSON oder ungültiger Wert; dokumentiertes Format prüfen.'];
const yes=['yes','sim','sí','oui','ja'],no=['no','não','no','non','nein'];
function render(source,out){
 base.render(source,out);
 for(let i=0;i<5;i++)for(const slug of base.slugs){
  const p=path.join(out,i===0?'': ['','pt','es','fr','de'][i],slug,'index.html');
  let html=fs.readFileSync(p,'utf8');
  html=html.replace('>Trace JSON</label>','>'+traceLabels[i]+'</label>').replace('>Dependency JSON</label>','>'+graphLabels[i]+'</label>');
  html=html.replaceAll('e.message','(["SyntaxError","TypeError","RangeError"].includes(e.name)?'+JSON.stringify(errors[i])+':e.message)');
  if(slug==='field-sla-acceptance-matrix')html=html.replace('+verified,','+(verified?'+JSON.stringify(yes[i])+':'+JSON.stringify(no[i])+'),');
  html=require('./harden-ai-evidence-review.cjs').harden(html,slug,i);
  html=require('./complete-ai-evidence-fallbacks.cjs').complete(html,slug,i);
  html=require('./finalize-ai-evidence-accessibility.cjs').finalize(html);
  fs.writeFileSync(p,html);
 }
}
module.exports={render,errors,traceLabels,graphLabels};
if(require.main===module){const source=process.argv[2]||path.resolve(__dirname,'../public'),out=process.argv[3];if(!out||path.resolve(source)===path.resolve(out))throw Error('Explicit separate preview output directory required');render(source,out);}
