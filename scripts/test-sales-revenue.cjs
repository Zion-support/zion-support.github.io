"use strict";
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',data=JSON.parse(fs.readFileSync('content/sales-revenue.json','utf8'));
const route=l=>'/zion-app-network/app-network-batch76-oct04'+(l==='en'?'':'-'+l)+'.html';
const read=u=>fs.readFileSync(path.join(out,u.slice(1)+(u.endsWith('/')?'index.html':'')),'utf8');
const L=['en','pt','es','fr','de'];
for(const l of L){const h=read(route(l)),c=data.locales[l];assert(h.includes('<html lang="'+c.lang+'">'));assert(h.includes('data-sales-release="'+data.version+'"'));assert(h.includes('<h1>'+c.title.replace(/&/g,'&amp;')+'</h1>'));assert.equal((h.match(/rel="alternate"/g)||[]).length,6);assert.equal((h.match(/data-sales-language=/g)||[]).length,5);assert.equal((h.match(/<article class="card"/g)||[]).length,12);assert(!/<form\b|<script\b/i.test(h));for(const a of data.resources){assert(h.includes('href="https://ziontechgroup.com/'+a.slug+'/"'));assert(h.includes('href="https://github.com/Zion-support/'+a.slug+'"'));}assert(h.includes('href="'+route(l)+'" aria-current="page"'));const home=l==='pt'?'/':'/'+l+'/';const hh=read(home);assert.equal((hh.match(/data-sales-promotion=/g)||[]).length,1);assert(hh.includes('href="'+route(l)+'"'));assert(!/820\+|809 apps|same-day follow-up|always free apps/i.test(h));}
const manifest=JSON.parse(read('/apps/sales-revenue-publication.json'));assert.equal(manifest.guideRoutes.length,5);assert.equal(manifest.homepageRoutes.length,5);assert.equal(manifest.resources.length,12);
console.log('PASS sales-revenue contract: locales, canonical alternatives, twelve original links, five promotions, no forms/inference, valid manifest.');
