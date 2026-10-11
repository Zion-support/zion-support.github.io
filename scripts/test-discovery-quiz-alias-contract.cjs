'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs');
const {validateQuizAlias}=require('./test-discovery-live.cjs');
const html=fs.readFileSync('public/discovery/quiz/index.html','utf8');
let checks=0;
validateQuizAlias(html);checks++;
const mutations=[
 ['wrong canonical',s=>s.replace('href="https://ziontechgroup.com/discovery/"','href="https://example.com/"')],
 ['wrong redirect',s=>s.replace('0;url=/discovery/','0;url=/other/')],
 ['missing continuation',s=>s.replace('href="/discovery/"','href="/other/"')],
 ['duplicate form',s=>s.replace('</main>','<form></form></main>')],
 ['unexpected script',s=>s.replace('</main>','<script>fetch("https://example.com/")</script></main>')],
 ['missing Commercial',s=>s.replaceAll('commercial@ziontechgroup.com','other@example.com')],
 ['guaranteed delivery',s=>s.replace('provider acceptance does not prove inbox delivery','instant guaranteed inbox delivery')],
 ['mandatory meeting',s=>s.replace('no required meeting','a required meeting')],
 ['delayed redirect',s=>s.replace('0;url=/discovery/','5;url=/discovery/')]
];
for(const [name,change] of mutations){assert.throws(()=>validateQuizAlias(change(html)),undefined,name);checks++;}
const singleQuotes=html.replaceAll('"',"'");validateQuizAlias(singleQuotes);checks++;
assert.throws(()=>validateQuizAlias(null));checks++;
console.log('PASS '+checks+' quiz alias contract cases; offline, no network/email/form calls');
