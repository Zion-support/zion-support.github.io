'use strict';
// Additive artifact-only integration; do not rewrite canonical homepage sources.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),out=path.join(root,'out');
const guide='/apps/discovery-next-step-guide.html',marker='data-discovery-local-preview-guide';
assert(fs.existsSync(path.join(out,guide.slice(1))),'Local preview guide missing');
const labels={pt:['Explore antes de compartilhar seus dados','Preview gratuito sem e-mail: compare hipóteses, siga apps relacionados e defina um piloto reversível. O guia está em inglês.','Abrir preview gratuito (EN)','Discovery completo grátis'],en:['Explore before sharing your details','Preview a free process-to-app journey without sending email. Validate assumptions, follow related tools and define a reversible pilot.','Open the free preview','Full free Discovery'],es:['Explore antes de compartir sus datos','Vista previa gratuita sin correo: valide supuestos, explore apps relacionadas y defina un piloto reversible. Guía en inglés.','Abrir vista previa (EN)','Discovery completo gratis'],fr:['Explorez avant de partager vos données','Aperçu gratuit sans e-mail : vérifiez les hypothèses, explorez les apps liées et définissez un pilote réversible. Guide en anglais.','Ouvrir l’aperçu (EN)','Discovery complet gratuit'],de:['Vor der Weitergabe Ihrer Daten erkunden','Kostenlose Vorschau ohne E-Mail: Annahmen prüfen, verknüpfte Apps erkunden und einen reversiblen Pilot planen. Leitfaden auf Englisch.','Kostenlose Vorschau (EN)','Kostenloses Discovery']};
for(const [locale,copy] of Object.entries(labels)){
 const file=path.join(out,locale==='pt'?'index.html':locale+'/index.html');if(!fs.existsSync(file))continue;
 let html=fs.readFileSync(file,'utf8');if(html.includes(marker))continue;
 assert(html.includes('</main>'),'Homepage main anchor missing: '+locale);
 const questionnaire=locale==='en'?'/discovery/':'/'+locale+'/discovery/';
 const section='<section class="section section-soft" '+marker+'="2026-10-08-bend"><div class="wrap"><h2>'+copy[0]+'</h2><p>'+copy[1]+'</p><p><a class="btn" href="'+guide+'">'+copy[2]+'</a> <a class="btn alt" href="'+questionnaire+'">'+copy[3]+'</a> <a href="/apps/">Apps Network</a></p></div></section>';
 html=html.replace('</main>',section+'\n</main>');fs.writeFileSync(file,html);
}
console.log('Free local preview guide linked from available homepages.');
