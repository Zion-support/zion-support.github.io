'use strict';
const fs = require('node:fs');
const assert = require('node:assert/strict');
const file = process.argv[2] || 'public/apps/communications-discovery-guide.html';
const html = fs.readFileSync(file, 'utf8');
function check(s) {
  assert.match(s, /<html lang="en">/);
  assert.equal((s.match(/id="maintained-communications-guides"/g) || []).length, 1);
  for (const [lang, prefix] of [['en',''],['pt-BR','pt/'],['es','es/'],['fr','fr/'],['de','de/']]) {
    assert.ok(s.includes(`lang="${lang}" hreflang="${lang}" href="/${prefix}apps/communications-decision-guide.html"`), lang);
  }
  for (const app of ['smart-call-routing-ai','call-intelligence-hub','voicemail-triage-ai','meeting-intelligence-ai']) {
    assert.ok(s.includes(`href="/${app}/"`), app);
    assert.ok(s.includes(`href="https://github.com/Zion-support/${app}"`), app + ' source');
  }
  assert.ok(!s.includes('with Carlos copied'));
  assert.ok(s.includes('Provider acceptance does not confirm inbox receipt'));
  assert.ok(s.includes('commercial@ziontechgroup.com'));
  assert.ok(s.includes('not a claim that every linked app is fully translated'));
  assert.ok(!/<(?:form|script)\b/i.test(s));
  assert.ok(s.includes('No dispatch or purchase without formal client confirmation and a PO number'));
}
check(html);
for (const bad of [html.replace('hreflang="de"','hreflang="xx"'),html.replace('https://github.com/Zion-support/voicemail-triage-ai','https://invalid.example/'),html.replace('Provider acceptance does not confirm inbox receipt','Guaranteed email delivery'),html.replace('</main>','<form></form></main>')]) {
  assert.throws(() => check(bad));
}
console.log('PASS communications entry: five maintained language links, four app/source pairs, no forms/scripts, delivery caveat; four negative fixtures rejected.');
