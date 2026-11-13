#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const contact = require('../public/.well-known/zion-contact.json');
const digits = contact.phoneE164.slice(1);
if (!/^\+[1-9]\d{7,14}$/.test(contact.phoneE164) || contact.whatsappUrl !== `https://wa.me/${digits}` || contact.telUrl !== `tel:${contact.phoneE164}`) {
  throw new Error('Invalid canonical Zion contact');
}
// Only retired Zion contact literals. Never substitute arbitrary third-party phones.
const replacements = [
  ['tel:+130****0950', contact.telUrl],
  ['tel:+13024640"', contact.telUrl + '"'],
  ["tel:+13024640'", contact.telUrl + "'"],
  ['+1 (302) 464-0950', contact.phoneDisplay],
  ['+1 (302) 464 0950', contact.phoneDisplay],
  ['+1-302-464-0950', contact.phoneDisplay],
  ['+1 302 464 0950', contact.phoneDisplay],
  ['+55 (47) 99999-9999', contact.phoneDisplay],
  ['+13024640950', contact.phoneE164],
  ['13024640950', digits],
  ['+5547999999999', contact.phoneE164],
  ['5547999999999', digits]
];
function normalize(text) {
  for (const [oldValue, newValue] of replacements) text = text.split(oldValue).join(newValue);
  return text;
}
function run(root) {
  const absolute = path.resolve(root);
  if (!fs.statSync(absolute).isDirectory()) throw new Error('Artifact directory required');
  let scanned = 0, changed = 0;
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isSymbolicLink()) continue;
      if (entry.isDirectory()) { walk(file); continue; }
      if (!entry.isFile() || !/\.(?:html?|js|mjs|cjs|json)$/i.test(entry.name)) continue;
      const before = fs.readFileSync(file, 'utf8');
      const after = normalize(before);
      scanned++;
      if (after !== before) { fs.writeFileSync(file, after); changed++; }
      if (normalize(after) !== after) throw new Error('Contact normalization is not idempotent: ' + file);
    }
  }
  walk(absolute);
  return { scanned, changed, officialPhone: contact.phoneE164 };
}
module.exports = { normalize, run, contact };
if (require.main === module) {
  if (process.argv.length !== 3) throw new Error('Usage: node scripts/normalize-zion-contact.cjs <artifact-directory>');
  console.log('Zion contact verification: ' + JSON.stringify(run(process.argv[2])));
}
