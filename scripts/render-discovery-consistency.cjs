// Artifact-only Discovery parity renderer. No network calls or email sends.
'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=path.resolve(process.argv[2]||'out');
const journey=JSON.parse(fs.readFileSync('content/discovery-journey.json','utf8'));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const english=fs.readFileSync(path.join(out,'discovery/index.html'),'utf8');
const mapSource=english.match(/const APPMAP=(\{[\s\S]*?\});/);
assert(mapSource,'Canonical app map not found');
const words={
pt:['Relatório Discovery gratuito','Nome|E-mail|Empresa|Processo|Horas/mês|Sistemas|Meta em 90 dias|Prazo','Score indicativo','Autoavaliação heurística, não auditoria, cotação ou autorização de implementação.','Valor ilustrativo de capacidade mensal (USD)','Apps recomendados','Valide responsável, linha de base, revisão humana e regra de parada antes do piloto.','Copiar relatório','Copiado','Baixar .txt','Abrir e-mail manual','Relatório pronto. Solicitando envio a você, Commercial e Carlos…','Aceito pelo serviço de e-mail; entrega na caixa de entrada não confirmada. Verifique também o spam.','Confirmação do e-mail indisponível. A solicitação pode ter sido aceita; verifique a caixa antes de reenviar. Copie ou baixe o relatório.','Este relatório já foi aceito nesta sessão; nenhuma duplicata foi enviada.','Informe um nome, um único e-mail válido, processo e faixa de horas.','Hipóteses: horas representativas da faixa × 40% automatizável × US$45/h. Não são economias medidas.','Selecione o texto abaixo ou baixe o relatório.'],
es:['Informe Discovery gratuito','Nombre|Email|Empresa|Proceso|Horas/mes|Sistemas|Meta en 90 días|Plazo','Puntuación indicativa','Autoevaluación heurística; no es auditoría, cotización ni autorización de implementación.','Valor ilustrativo de capacidad mensual (USD)','Aplicaciones recomendadas','Valide responsable, línea base, revisión humana y regla de parada antes del piloto.','Copiar informe','Copiado','Descargar .txt','Abrir correo manual','Informe listo. Solicitando envío a usted, Commercial y Carlos…','Aceptado por el servicio de correo; entrega en la bandeja de entrada no confirmada. Revise también el spam.','Confirmación del correo no disponible. La solicitud puede haberse aceptado; revise su bandeja antes de reenviar. Copie o descargue el informe.','Este informe ya fue aceptado en esta sesión; no se envió un duplicado.','Indique nombre, un único email válido, proceso y rango de horas.','Supuestos: horas representativas del rango × 40% automatizable × US$45/h. No son ahorros medidos.','Seleccione el texto siguiente o descargue el informe.'],
fr:['Rapport Discovery gratuit','Nom|E-mail|Entreprise|Processus|Heures/mois|Systèmes|Objectif à 90 jours|Calendrier','Score indicatif','Autoévaluation indicative, pas un audit, un devis ni une autorisation de mise en œuvre.','Valeur indicative de capacité mensuelle (USD)','Applications recommandées','Validez responsable, situation de référence, contrôle humain et règle d’arrêt avant le pilote.','Copier le rapport','Copié','Télécharger .txt','Ouvrir un e-mail manuel','Rapport prêt. Demande d’envoi à vous, Commercial et Carlos…','Accepté par le service de messagerie ; réception dans la boîte mail non confirmée. Vérifiez aussi les indésirables.','Confirmation e-mail indisponible. La demande a peut-être été acceptée ; vérifiez votre boîte avant de renvoyer. Copiez ou téléchargez le rapport.','Ce rapport a déjà été accepté pendant cette session ; aucun doublon envoyé.','Indiquez un nom, une seule adresse e-mail valide, un processus et une tranche horaire.','Hypothèses : heures représentatives de la tranche × 40 % automatisable × 45 USD/h. Ce ne sont pas des économies mesurées.','Sélectionnez le texte ci-dessous ou téléchargez le rapport.'],
de:['Kostenloser Discovery-Bericht','Name|E-Mail|Unternehmen|Prozess|Stunden/Monat|Systeme|90-Tage-Ziel|Zeitplan','Indikativer Score','Heuristische Selbsteinschätzung; kein Audit, Angebot oder Freigabe zur Umsetzung.','Beispielhafter monatlicher Kapazitätswert (USD)','Passende Apps','Prüfen Sie Verantwortung, Ausgangswert, menschliche Kontrolle und Abbruchregel vor dem Pilotprojekt.','Bericht kopieren','Kopiert','.txt herunterladen','Manuelle E-Mail öffnen','Bericht bereit. E-Mail-Versand an Sie, Commercial und Carlos wird angefragt…','Vom E-Mail-Dienst angenommen; Eingang im Postfach nicht bestätigt. Prüfen Sie auch den Spamordner.','E-Mail-Bestätigung nicht verfügbar. Die Anfrage könnte angenommen worden sein; prüfen Sie vor erneutem Senden Ihr Postfach. Kopieren oder laden Sie den Bericht herunter.','Dieser Bericht wurde in dieser Sitzung bereits angenommen; kein Duplikat gesendet.','Geben Sie einen Namen, eine gültige einzelne E-Mail-Adresse, einen Prozess und ein Stundenband an.','Annahmen: repräsentative Stunden des Bands × 40 % automatisierbar × 45 USD/h. Keine gemessenen Einsparungen.','Markieren Sie den folgenden Text oder laden Sie den Bericht herunter.']};
function browserCore(locale,t,map){
 'use strict';
 const hours=[15,50,140,260];
 const score=(h,timeline,systems,goal)=>Math.min(100,Math.round(h/3)+(timeline===0?30:timeline===1?20:10)+(systems?10:0)+(goal?10:0));
 window.ZionDiscoveryShared={score};
 if(locale==='en')return;
 const form=document.getElementById('dform'),result=document.getElementById('result');
 if(!form||!result)return;
 const status=document.getElementById('sent'),scoreNode=document.getElementById('score');
 let errors=document.getElementById('form-errors');
 if(!errors){errors=document.createElement('p');errors.id='form-errors';form.prepend(errors);}
 errors.setAttribute('role','alert');errors.hidden=true;status.setAttribute('role','status');
 const report=document.createElement('pre');report.id='report-text';report.tabIndex=0;
 const actions=document.createElement('p'),list=document.createElement('ul'),note=document.createElement('p');
 note.textContent=t[6];result.append(actions,report,list,note);
 const button=(id,label)=>{let b=document.getElementById(id);if(!b){b=document.createElement('button');b.id=id;}b.type='button';b.textContent=label;actions.append(b);return b;};
 const copy=button('copy-report',t[7]),download=button('download-report',t[9]);
 let email=document.getElementById('email-report');if(!email)email=document.createElement('a');email.id='email-report';email.textContent=t[10];actions.append(email);
 let pending=false,reportText='';const accepted=new Set();
 copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(reportText);copy.textContent=t[8];}catch{copy.textContent=t[17];}});
 download.addEventListener('click',()=>{if(!reportText)return;const url=URL.createObjectURL(new Blob([reportText],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='zion-discovery-'+locale+'.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 const clean=(v,n)=>String(v||'').replace(/[\u0000-\u001f\u007f]/g,' ').trim().slice(0,n);
 form.addEventListener('submit',async e=>{
  e.preventDefault();if(pending)return;errors.hidden=true;if(!form.reportValidity())return;
  const raw=Object.fromEntries(new FormData(form).entries());
  const f={name:clean(raw.name,120),email:String(raw.email||'').trim(),company:clean(raw.company,200),process:clean(raw.process,120),hours:clean(raw.hours,30),systems:clean(raw.systems,500),goal:clean(raw.goal,1500),timeline:clean(raw.timeline,40)};
  const p=form.elements.namedItem('process').selectedIndex-1,h=form.elements.namedItem('hours').selectedIndex,tm=form.elements.namedItem('timeline').selectedIndex;
  if(!f.name||f.email.length>254||!/^[^\s@,;<>"\\]+@[^\s@,;<>"\\]+\.[^\s@,;<>"\\]+$/.test(f.email)||p<0||p>=10||h<0||h>3||tm<0||tm>3){errors.textContent=t[15];errors.hidden=false;return;}
  const points=score(hours[h],tm,!!f.systems,!!f.goal),apps=Object.values(map)[p],labels=t[1].split('|');
  const value=(hours[h]*0.4*45).toLocaleString(locale,{style:'currency',currency:'USD',maximumFractionDigits:0});
  reportText=[t[0],...Object.values(f).map((v,i)=>labels[i]+': '+(v||'—')),t[2]+': '+points+'/100',t[3],t[4]+': '+value,t[16],t[5]+':',...apps.map(a=>a[0]+' https://ziontechgroup.com'+a[1]),t[6],'https://ziontechgroup.com/apps/discovery-report-workbench.html','https://ziontechgroup.com/automation-pilot-planner/'].join('\n');
  window.__zionDiscoveryReport=reportText;scoreNode.textContent=points;report.textContent=reportText;copy.textContent=t[7];
  document.getElementById('summary').textContent=t[3];list.replaceChildren();
  for(const [name,url] of apps){const li=document.createElement('li'),a=document.createElement('a');a.href=url;a.textContent=name;li.append(a);list.append(li);}
  const cc=[...new Set([f.email,'carlos@ziontechgroup.com'])].filter(x=>x.toLowerCase()!=='commercial@ziontechgroup.com').join(',');
  email.href='mailto:commercial@ziontechgroup.com?cc='+encodeURIComponent(cc)+'&subject='+encodeURIComponent(t[0]+' — '+f.name)+'&body='+encodeURIComponent(reportText);
  result.style.display='block';result.scrollIntoView({behavior:'smooth'});
  const fingerprint=JSON.stringify(f);if(accepted.has(fingerprint)){status.textContent=t[14];return;}
  pending=true;status.textContent=t[11];const submit=form.querySelector('button[type="submit"]');submit.disabled=true;form.setAttribute('aria-busy','true');
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
  try{const response=await fetch('https://formsubmit.co/ajax/commercial@ziontechgroup.com',{method:'POST',signal:controller.signal,headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({_subject:t[0]+' — '+f.name,_cc:cc,_replyto:f.email,_captcha:'false',_template:'box',...f,score:points,locale,event:'discovery_submit',report_version:'2026-10-08-parity',message:reportText})});const data=await response.json().catch(()=>({}));if(response.ok&&(data.success===true||data.success==='true')){accepted.add(fingerprint);status.textContent=t[12];}else status.textContent=t[13];}
  catch{status.textContent=t[13];}finally{clearTimeout(timer);pending=false;submit.disabled=false;form.setAttribute('aria-busy','false');}
 });
}
let count=0;
for(const locale of ['en','pt','es','fr','de']){
 const file=path.join(out,locale==='en'?'discovery/index.html':locale+'/discovery/index.html');let html=fs.readFileSync(file,'utf8');
 assert(!html.includes('data-discovery-parity'),'Duplicate parity rendering');
 const code='('+browserCore.toString()+')('+JSON.stringify(locale)+','+JSON.stringify(words[locale]||[])+','+mapSource[1]+');';
 const tag='<script data-discovery-parity="2026-10-08">'+code+'</script>';
 if(locale==='en'){
  html=html.replace('<script>\nconst APPMAP=',tag+'\n<script>\nconst APPMAP=');
  const old="Math.min(100,Math.round(hrs/3)+(f.timeline==='Immediately'?30:f.timeline==='This quarter'?20:10)+(f.systems?10:0)+(f.goal?10:0))";
  assert(html.includes(old),'English score changed; review before rendering');
  html=html.replace(old,"window.ZionDiscoveryShared.score(hrs,form.elements.namedItem('timeline').selectedIndex,!!f.systems,!!f.goal)");
 }else html=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,tag);
 assert(html.includes('data-discovery-parity'),'Parity script missing');
 html=html.replace('</head>','<style>#report-text{white-space:pre-wrap;overflow-wrap:anywhere;padding:1rem;border:1px solid #64748b}#copy-report,#download-report,#email-report{margin:.4rem;padding:.5rem}a:focus-visible,button:focus-visible{outline:3px solid #ea580c;outline-offset:3px}</style></head>');
 fs.writeFileSync(file,html);count++;
 const home=path.join(out,locale==='pt'?'index.html':locale+'/index.html');let page=fs.readFileSync(home,'utf8');const c=journey[locale];assert(c&&c.steps.length===3&&c.benefits.length===4);
 if(!page.includes('id="discovery-pilot-journey"')){
 const section='<section class="section section-soft" id="discovery-pilot-journey" data-discovery-parity="2026-10-08"><div class="wrap"><h2>'+esc(c.title)+'</h2><p>'+esc(c.intro)+'</p><ul>'+c.benefits.map(b=>'<li>'+esc(b)+'</li>').join('')+'</ul><ol>'+c.steps.map(b=>'<li>'+esc(b)+'</li>').join('')+'</ol><p><a class="btn" href="'+esc(c.discoveryUrl)+'">'+esc(c.cta)+'</a> · <a href="/apps/">'+esc(c.related)+'</a></p><div class="grid grid-3">'+[['ROI Calculator','/roi-calc/'],['AI Governance Checklist','/ai-governance-checklist/'],['SLA Calculator','/sla-calculator/']].map(([n,u])=>'<article class="card"><h3>'+esc(n)+'</h3><a href="'+u+'">'+esc(c.related)+'</a></article>').join('')+'</div></div></section>';
 assert(page.includes('</main>'));page=page.replace('</main>',section+'\n</main>');fs.writeFileSync(home,page);
 }
}
console.log('Discovery parity: '+count+' questionnaires and five localized homepage journeys; artifact rendering only, no email sent.');
