"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const out=process.argv[2]||"out",release="2026-10-11-showcase-v1";
const routes=[{route:"apps/network.html",lang:"en",home:"en/index.html",disc:"/discovery/",prefix:"/"},{route:"pt/apps/network.html",lang:"pt-BR",home:"index.html",disc:"/pt/discovery/",prefix:"/pt/"}];
function check(s,c){
 assert(s.includes('<html lang="'+c.lang+'">'),"Wrong locale");
 assert(s.includes('data-showcase-release="'+release+'"'),"Wrong release");
 assert(s.includes('rel="canonical" href="https://ziontechgroup.com/'+c.route+'"'),"Wrong canonical");
 for(const [l,u] of [["en","/apps/network.html"],["pt-BR","/pt/apps/network.html"],["x-default","/apps/network.html"]])assert(s.includes('hreflang="'+l+'" href="https://ziontechgroup.com'+u+'"'),"Missing alternate "+l);
 assert((s.match(/<h1\b/g)||[]).length===1,"Heading count");assert(!/<form\b|<script\b/i.test(s),"Read-only page required");
 assert(s.includes('href="'+c.disc+'"'),"Missing localized Discovery");
 for(const slug of ["roi-calc","sla-calculator","ai-governance-checklist"])assert(s.includes('href="'+c.prefix+slug+'/"'),"Missing tool "+slug);
 assert(s.includes("commercial@ziontechgroup.com"),"Missing delivery limitation context");
 assert(!/\d+\+ (?:free |live )?(?:apps|AI micro-apps)/i.test(s),"Unverified count");
}
for(const c of routes){const s=fs.readFileSync(path.join(out,c.route),"utf8");check(s,c);const home=fs.readFileSync(path.join(out,c.home),"utf8");assert(home.includes('data-showcase-promotion="'+release+'"'),"Missing homepage promotion");assert(home.includes('href="/'+c.route+'"'),"Missing homepage backlink");assert.throws(()=>check(s.replace('hreflang="pt-BR"','hreflang="xx"'),c));assert.throws(()=>check(s.replace('</main>','<form></form></main>'),c));}
console.log("PASS "+release+": canonical/alternate reciprocity, locale routes, read-only safety and negative fixtures.");
