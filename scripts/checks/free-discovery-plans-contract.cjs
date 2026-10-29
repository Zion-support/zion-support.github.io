'use strict';
// Read-only Free Discovery editorial guard; no network calls, tokens, or deployment.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '../..');
const pages = Object.freeze([
  'public/plans/index.html',
  'public/en/plans/index.html',
  'public/es/plans/index.html',
  'public/fr/plans/index.html',
  'public/de/plans/index.html',
]);
const expectedLocales = Object.freeze({
  'public/plans/index.html': { lang: 'pt-BR', canonical: 'https://ziontechgroup.com/plans/' },
  'public/en/plans/index.html': { lang: 'en', canonical: 'https://ziontechgroup.com/en/plans/' },
  'public/es/plans/index.html': { lang: 'es', canonical: 'https://ziontechgroup.com/es/plans/' },
  'public/fr/plans/index.html': { lang: 'fr', canonical: 'https://ziontechgroup.com/fr/plans/' },
  'public/de/plans/index.html': { lang: 'de', canonical: 'https://ziontechgroup.com/de/plans/' }
});

function problems(html, page) {
  const errors = [];
  const spec = expectedLocales[page];
  if (spec) {
    const actualLang = html.match(/<html\\b[^>]*\\blang=["']([^"']+)["']/i)?.[1];
    if (actualLang !== spec.lang) errors.push('document language mismatch');
    const canonical = html.match(/<link\\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1];
    if (canonical !== spec.canonical) errors.push('canonical mismatch');
    const languages = [
      ['pt-BR', '/plans/'], ['en', '/en/plans/'], ['es', '/es/plans/'],
      ['fr', '/fr/plans/'], ['de', '/de/plans/'], ['x-default', '/plans/']
    ];
    for (const [code, url] of languages) {
      const tag = '<link rel="alternate" hreflang="' + code + '" href="https://ziontechgroup.com' + url + '">';
      if (html.split(tag).length !== 2) errors.push('missing or duplicate hreflang ' + code);
    }
  }
  if (!/href=["'][^"']*discovery\//i.test(html)) errors.push('missing Discovery CTA');
  if (!/discovery/i.test(html)) errors.push('missing Discovery mention');
  if (/Discovery:\s*ZG0[9b]/i.test(html)) errors.push('legacy paid Discovery SKU');
  if (/How do I pay for Discovery\?|Como pago Discovery\?/i.test(html)) errors.push('legacy payment FAQ');
  if (/Discovery[^<\n]{0,70}(?:\$99|99\s*USD)/i.test(html)) errors.push('paid Discovery claim');
  if (/La misma entrega se envía al email ingresado|La même soumission est envoyée à l'e-mail saisi|Dieselbe Einsendung wird an die eingegebene E-Mail-Adresse/i.test(html)) errors.push('guaranteed email claim');
  // Validated provider submission is not proof that an email reached the recipient.
  if (/(?:instant dual email delivery|lands in your inbox simultaneously)/i.test(html)) errors.push('unverified delivery guarantee');
  return errors;
}
function selfTest() {
  const clean='<a href="/discovery/">Free Discovery</a><p>Provider acceptance does not confirm inbox delivery.</p>';
  assert.deepEqual(problems(clean,'test'),[]);
  const badCases=[
    [clean.replace('Free Discovery','Discovery $99'),'paid Discovery claim'],
    [clean+' Discovery: ZG0b','legacy paid Discovery SKU'],
    [clean+' How do I pay for Discovery?','legacy payment FAQ'],
    [clean.replace('href="/discovery/"','href="/contact/"'),'missing Discovery CTA'],
    [clean+' La misma entrega se envía al email ingresado','guaranteed email claim'],
    [clean+' instant dual email delivery','unverified delivery guarantee'],
  ];
  for (const [html,reason] of badCases) {
    assert(problems(html,'test').includes(reason),'Expected error: '+reason);
  }
  const locale='public/en/plans/index.html';
  const links=[
    ['pt-BR','/plans/'],['en','/en/plans/'],['es','/es/plans/'],
    ['fr','/fr/plans/'],['de','/de/plans/'],['x-default','/plans/']
  ].map(([c,u])=>'<link rel="alternate" hreflang="'+c+'" href="https://ziontechgroup.com'+u+'">').join('');
  const valid = '<html lang="en"><head><link rel="canonical" href="https://ziontechgroup.com/en/plans/">'+links+'</head><body>'+clean+'</body></html>';
  assert.deepEqual(problems(valid,locale),[]);
  const bad = valid.replace('<link rel="alternate" hreflang="fr" href="https://ziontechgroup.com/fr/plans/">','');
  assert(problems(bad,locale).includes('missing or duplicate hreflang fr'));
  console.log('PASS 9 Free Discovery + locale SEO self-test cases');
}
if (process.argv.includes('--self-test')) {
  selfTest();
} else {
  let failures=0;
  for(const page of pages){
    const file=path.join(root,page);
    if(!fs.existsSync(file)){console.error('MISSING '+page);failures++;continue;}
    const errors=problems(fs.readFileSync(file,'utf8'),page);
    if(errors.length){console.error('FAIL '+page+': '+errors.join('; '));failures++;}
    else console.log('PASS '+page);
  }
  if(failures){console.error('Discovery contract violations: '+failures);process.exitCode=1;}
}
