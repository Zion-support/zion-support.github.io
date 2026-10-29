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
function problems(html, page) {
  const errors = [];
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
  console.log('PASS 7 Free Discovery contract self-test cases');
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
