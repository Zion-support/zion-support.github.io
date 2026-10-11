'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const planner=require('./render-pilot-planner-locales.cjs');
const release='2026-10-11-pilot-planner-v1',base='https://ziontechgroup.com';
const copy={en:['From opportunity to a controlled 30-day pilot','Create a local draft with responsibility, measurements and stop rules. No account access or automatic execution.','Open the free Pilot Planner'],pt:['Da oportunidade a um piloto controlado de 30 dias','Crie um rascunho local com responsáveis, medições e regras de parada. Sem conexão de contas ou execução automática.','Abrir o planejador gratuito'],es:['De la oportunidad a un piloto controlado de 30 días','Cree un borrador local con responsables, mediciones y reglas de parada. Sin conexión de cuentas ni ejecución automática.','Abrir el planificador gratuito'],fr:['De l’opportunité à un pilote contrôlé de 30 jours','Créez un brouillon local avec responsables, mesures et règles d’arrêt. Aucune connexion de compte ni exécution automatique.','Ouvrir le planificateur gratuit'],de:['Von der Idee zum kontrollierten 30-Tage-Piloten','Erstellen Sie einen lokalen Entwurf mit Verantwortung, Messwerten und Abbruchregeln. Kein Kontozugriff und keine automatische Ausführung.','Kostenlosen Pilotplaner öffnen']};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const protectedParts=h=>h.match(/<(form|script)\b[\s\S]*?<\/\1>/gi)||[];
function finalize(root='out'){
 for(const l of planner.locales){
  const route=planner.route(l),file=path.join(root,route,'index.html');let h=fs.readFileSync(file,'utf8');const before=protectedParts(h);
  h=h.replace(/ data-pilot-release="[^"]*"/g,'').replace('<body','<body data-pilot-release="'+release+'"');assert.deepEqual(protectedParts(h),before);fs.writeFileSync(file,h);
  if(l!=='pt'){const rel=l+'/automation-pilot-planner/index.html',target=base+route,alias='<!DOCTYPE html><html lang="'+l+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url='+target+'"><link rel="canonical" href="'+target+'"><title>'+esc(copy[l][0])+'</title></head><body><a href="'+target+'">'+esc(copy[l][2])+'</a></body></html>';const a=path.join(root,rel);fs.mkdirSync(path.dirname(a),{recursive:true});fs.writeFileSync(a,alias);}
  const p=l==='en'?'/':'/'+l+'/',suffix=l==='en'?'':'.'+(l==='pt'?'pt-br':l),targets=[l==='pt'?'index.html':l+'/index.html',p.slice(1)+'discovery/index.html','apps/field-service-evidence-guide'+suffix+'.html',p.slice(1)+'apps/network-learning-paths.html'];
  for(const rel of targets){const f=path.join(root,rel);if(!fs.existsSync(f))continue;let html=fs.readFileSync(f,'utf8');if(!html.includes('</main>'))continue;const before=protectedParts(html);
   html=html.replace(/<!--pilot-planner-ad:start-->[\s\S]*?<!--pilot-planner-ad:end-->/g,'').replace(/<!--pilot-planner-release:start-->[\s\S]*?<!--pilot-planner-release:end-->/g,'');
   const c=copy[l],panel='<!--pilot-planner-release:start--><section class="section" data-pilot-promotion="'+release+'"><div class="wrap"><h2>'+esc(c[0])+'</h2><p>'+esc(c[1])+'</p><a class="btn" href="'+route+'">'+esc(c[2])+'</a></div></section><!--pilot-planner-release:end-->';
   html=html.replace('</main>',panel+'</main>');assert.deepEqual(protectedParts(html),before);assert.equal(html.split('data-pilot-promotion="'+release+'"').length,2);fs.writeFileSync(f,html);
  }
 }
 const f=path.join(root,'apps/pilot-planner-publication.json');fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,JSON.stringify({release,localOnly:true,canonicalRelease:planner.release,locales:planner.locales.map(l=>({lang:l==='pt'?'pt-BR':l,url:base+planner.route(l)})),scope:'Planner only; preserve legacy canonical URLs and all existing usage/runtime contracts'},null,2));
 console.log('PASS additive Planner finalization: legacy URLs/API/runtime retained; aliases, consolidated promotions and manifest.');
}
module.exports={finalize,release};if(require.main===module)finalize(process.argv[2]||'out');
