'use strict';
// Additive navigation only: retain translated bodies, metadata and app behavior.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const RELEASE='productivity-navigation-2026-10-13-v1';
const S=['agent-brief','admissions-essay-reviewer','ai-access-reviewer','ai-email-drafter','ai-meeting-notes-copilot','ai-incident-response'];
const RELATED=[[3,4],[0],[5,0],[0,4],[0,5],[2,4]];
const C={
 en:{lang:'en',heading:'Related resources',catalog:'Back to the catalog',home:'Back to the homepage',note:'Review each resource’s capabilities before continuing. These links are navigation only: they do not connect apps, transfer data or start autonomous work.',names:['Agent Brief','Admissions Essay Reviewer','AI Access Reviewer','AI Email Drafter','AI Meeting Notes Copilot','Incident Response']},
 pt:{lang:'pt-BR',heading:'Recursos relacionados',catalog:'Voltar ao catálogo',home:'Voltar à página inicial',note:'Confira as capacidades de cada recurso antes de continuar. Estes links são apenas navegação: não conectam apps, transferem dados nem iniciam trabalho autônomo.',names:['Briefing de agente','Revisão de redações de admissão','Revisão de acessos','Redator de e-mails','Copiloto de atas','Resposta a incidentes']},
 es:{lang:'es',heading:'Recursos relacionados',catalog:'Volver al catálogo',home:'Volver al inicio',note:'Compruebe las capacidades de cada recurso antes de continuar. Estos enlaces solo sirven para navegar: no conectan aplicaciones, transfieren datos ni inician trabajo autónomo.',names:['Brief de agente','Revisión de ensayos de admisión','Revisión de accesos','Redactor de correos','Copiloto de notas','Respuesta a incidentes']},
 fr:{lang:'fr',heading:'Ressources associées',catalog:'Retour au catalogue',home:'Retour à l’accueil',note:'Vérifiez les capacités de chaque ressource avant de continuer. Ces liens servent uniquement à la navigation : ils ne connectent pas les applications, ne transfèrent pas de données et ne lancent pas de travail autonome.',names:['Brief d’agent','Relecture de dissertations d’admission','Revue des accès','Rédacteur de courriels','Copilote de notes','Réponse aux incidents']},
 de:{lang:'de',heading:'Verwandte Ressourcen',catalog:'Zurück zum Katalog',home:'Zurück zur Startseite',note:'Prüfen Sie vor dem Fortfahren die Funktionen jeder Ressource. Diese Links dienen nur der Navigation: Sie verbinden keine Apps, übertragen keine Daten und starten keine autonome Arbeit.',names:['Agentenbriefing','Prüfung von Bewerbungsaufsätzen','Zugriffsprüfung','E-Mail-Entwürfe','Besprechungsnotizen','Reaktion auf Vorfälle']}
};
const START='<!--productivity-navigation:start-->',END='<!--productivity-navigation:end-->';
const OWN=/<!--productivity-navigation:start-->[\s\S]*?<!--productivity-navigation:end-->/g;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const route=(l,i)=>'/'+(l==='en'?'':l+'/')+S[i]+'/';
const home=l=>l==='pt'?'/':'/'+l+'/';
const catalog=l=>'/zion-app-network/CATALOG-PRODUCTIVITY-REVIEW.html#'+l;
const protectedParts=h=>h.match(/<(head|form|script)\b[\s\S]*?<\/\1\s*>/gi)||[];
function block(l,i){const c=C[l];return START+'<nav class="productivity-navigation" data-productivity-navigation="'+RELEASE+'" lang="'+c.lang+'" aria-labelledby="productivity-related-heading"><style>.productivity-navigation{margin:24px 0;padding:16px;border:1px solid #64748b;border-radius:10px;overflow-wrap:anywhere}.productivity-navigation ul{display:flex;flex-wrap:wrap;gap:12px 24px;padding-left:24px}.productivity-navigation a{color:inherit;text-decoration:underline}.productivity-navigation a:focus-visible{outline:3px solid #0284c7;outline-offset:4px}</style><h2 id="productivity-related-heading">'+esc(c.heading)+'</h2><p>'+esc(c.note)+'</p><ul>'+RELATED[i].map(j=>'<li><a href="'+route(l,j)+'">'+esc(c.names[j])+'</a></li>').join('')+'</ul><p><a href="'+catalog(l)+'">'+esc(c.catalog)+'</a> · <a href="'+home(l)+'">'+esc(c.home)+'</a></p></nav>'+END;}
function transform(before,l,i){
 assert(C[l],'Unsupported locale');assert(Number.isInteger(i)&&S[i],'Unsupported resource');
 assert.equal((before.match(/<!--productivity-navigation:start-->/g)||[]).length,(before.match(OWN)||[]).length,'Malformed owned block');
 assert.equal((before.match(/<!--productivity-navigation:end-->/g)||[]).length,(before.match(OWN)||[]).length,'Malformed owned block');
 assert((before.match(OWN)||[]).length<=1,'Duplicate owned blocks');
 assert.equal((before.match(/<html\b[^>]*\blang=["']([^"']+)["']/i)||[])[1],C[l].lang,'Wrong document language');
 const canonical=[...before.matchAll(/<link\b[^>]*>/gi)].filter(m=>/\brel=["']canonical["']/i.test(m[0]));
 assert.equal(canonical.length,1,'One canonical required');
 assert.equal((canonical[0][0].match(/\bhref=["']([^"']+)["']/i)||[])[1],'https://ziontechgroup.com'+route(l,i),'Wrong canonical route');
 const base=before.replace(OWN,'');assert(!base.includes('id="productivity-related-heading"'),'Heading ID collision');
 assert.equal((base.match(/<main\b/gi)||[]).length,1,'One main required');assert.equal((base.match(/<\/main\s*>/gi)||[]).length,1,'One main close required');
 const after=base.replace(/<\/main\s*>/i,block(l,i)+'$&');
 assert.equal(after.replace(OWN,''),base,'Only owned insertion may change');
 assert.deepEqual(protectedParts(after),protectedParts(before),'Head/forms/scripts changed');
 return after;
}
function plan(out='out'){
 const changes=[];
 for(const l of Object.keys(C))for(let i=0;i<S.length;i++){
  const file=path.join(out,route(l,i).slice(1),'index.html'),before=fs.readFileSync(file,'utf8'),after=transform(before,l,i);
  assert.equal(transform(after,l,i),after,'Byte idempotence');
  for(const j of RELATED[i])assert(fs.existsSync(path.join(out,route(l,j).slice(1),'index.html')),'Missing related destination');
  changes.push({file,before,after,locale:C[l].lang,url:route(l,i),catalog:catalog(l),home:home(l)});
 }
 return changes;
}
function apply(changes){for(const p of changes)assert.equal(fs.readFileSync(p.file,'utf8'),p.before,'Input changed after validation');for(const p of changes)fs.writeFileSync(p.file,p.after);}
function render(out='out'){
 const changes=plan(out);apply(changes);
 const report={release:RELEASE,pages:changes.map(({locale,url,catalog,home})=>({locale,url,catalog,home})),scope:'Thirty related-resource blocks only; no runtime, form or metadata changes. Not full-network or native-editorial certification.',fullNetworkComplete:false};
 fs.mkdirSync(path.join(out,'apps'),{recursive:true});fs.writeFileSync(path.join(out,'apps/productivity-navigation-release.json'),JSON.stringify(report,null,2)+'\n');return report;
}
module.exports={RELEASE,S,RELATED,C,route,home,catalog,block,transform,protectedParts,plan,apply,render};
if(require.main===module){render(process.argv[2]||'out');console.log('PASS '+RELEASE+': 30 validated, byte-idempotent navigation blocks.');}
