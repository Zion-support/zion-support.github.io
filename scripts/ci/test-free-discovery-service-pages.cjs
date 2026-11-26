'use strict';
// Non-publishing, offline consistency contract for public and fallback FinOps pages.
// Does not certify live deployment or external payment services.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const paths = [
  'public/discovery/index.html',
  'public/autonomous-ai-agents/index.html',
  'public/finops-consulting/index.html',
  'finops-consulting/index.html'
];
const pages = paths.map(path => [path,fs.readFileSync(path,'utf8')]);
assert.match(pages[0][1], /Free Discovery/);
for (const [file,html] of pages) {
  assert.ok(html.length > 1000,file+' is empty or stub-like');
  assert.match(html, /<link rel="canonical" href="https:\/\/ziontechgroup\.com\//,file+' canonical missing');
  const ctas = [...html.matchAll(/<a\b[^>]*\bhref=["']\/discovery\/["'][^>]*>([\s\S]*?)<\/a>/gi)];
  assert.ok(ctas.length > 0,file+' has no Discovery route');
  const strip = s => s.replace(/<[^>]*>/g,'').trim();
  for(const [,label] of ctas){
    assert.doesNotMatch(strip(label), /\$99\b|R\$\s*99\b|USD\s*99\b/i, file+' advertises paid Discovery');
  }
  assert.doesNotMatch(html,/Discovery\s*(?:\$|USD|R\$)\s*99\b/gi,file+' has obsolete Discovery pricing');
}
const publicFinops = pages[2][1];
const fallbackFinops = pages[3][1];
assert.equal((publicFinops.match(/Start free cloud spend diagnostic/g)||[]).length,3,'Three FinOps CTA slots');
assert.match(publicFinops,/Free Discovery online<\/a> \(no payment or card required\)/,'Discovery must not be described as Stripe checkout');
assert.doesNotMatch(fallbackFinops,/typically reduce cloud spend 20-40%/i,'Unsubstantiated typical savings claim');
assert.match(fallbackFinops,/no percentage is guaranteed/i,'Fallback must state outcome uncertainty');
console.log('PASS: four source pages align Free Discovery offers; no paid Discovery or unverified savings.');
