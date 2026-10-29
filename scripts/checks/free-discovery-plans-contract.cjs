'use strict';
// Read-only, dependency-free policy guard. Never sends mail, edits pages or deploys.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const pages = ['public/plans/index.html','public/en/plans/index.html','public/es/plans/index.html','public/fr/plans/index.html','public/de/plans/index.html'];
let failures = 0;
for (const page of pages) {
  const file = path.join(root,page);
  if (!fs.existsSync(file)) { console.error('MISSING '+page); failures++; continue; }
  const html = fs.readFileSync(file,'utf8');
  const errors = [];
  if (!/href=["'][^"']*discovery\//i.test(html)) errors.push('missing Discovery CTA');
  if (!/discovery/i.test(html)) errors.push('missing Discovery mention');
  if (/Discovery:\s*ZG0[9b]/i.test(html)) errors.push('legacy paid Discovery SKU');
  if (/How do I pay for Discovery\?|Como pago Discovery\?/i.test(html)) errors.push('legacy payment FAQ');
  if (/Discovery[^<\n]{0,70}(?:\$99|99\s*USD)/i.test(html)) errors.push('paid Discovery claim');
  if (/La misma entrega se envía al email ingresado|La même soumission est envoyée à l'e-mail saisi|Dieselbe Einsendung wird an die eingegebene E-Mail-Adresse/i.test(html)) errors.push('guaranteed email claim');
  if (errors.length) { console.error('FAIL '+page+': '+errors.join('; ')); failures++; }
  else console.log('PASS '+page);
}
if (failures) { console.error('Discovery contract violations: '+failures); process.exitCode=1; }
