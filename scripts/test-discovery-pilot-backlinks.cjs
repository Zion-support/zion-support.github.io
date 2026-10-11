'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {render,verify,routes,guide,guideFor,langFor}=require('./render-discovery-pilot-backlinks.cjs');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-pilot-backlinks-'));let checks=0;
try{fs.mkdirSync(path.join(root,'apps'),{recursive:true});fs.writeFileSync(path.join(root,guide.slice(1)),'<!doctype html><html lang="en"><main>English guide with Portuguese summary</main></html>');
 for(const locale of ['pt','es','fr','de']){const file=path.join(root,guideFor(locale).slice(1));fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,'<!doctype html><html lang="'+langFor(locale)+'"><main>Localized companion</main></html>');}
 for(const r of routes){const f=path.join(root,r.url.slice(1));fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,'<!doctype html><html><body><main><p id="existing">Existing translated copy</p><a href="/discovery/">Existing link</a></main><footer>Preserved</footer></body></html>');}
 assert.equal(render(root),10);checks++;assert.equal(verify(root),10);checks++;
 const first=routes.map(r=>fs.readFileSync(path.join(root,r.url.slice(1)),'utf8'));render(root);
 for(const [i,r]of routes.entries()){const h=fs.readFileSync(path.join(root,r.url.slice(1)),'utf8');assert.equal(h,first[i]);assert(h.includes('<p id="existing">Existing translated copy</p>'));assert(h.includes('<footer>Preserved</footer>'));assert.equal((h.match(/id="discovery-pilot-backlink"/g)||[]).length,1);assert(h.includes('lang="'+langFor(r.locale)+'" hreflang="'+langFor(r.locale)+'"'));assert(h.includes('href="'+guideFor(r.locale)+'"'));checks++;assert(!h.includes('<script'));checks+=6;}
 const firstFile=path.join(root,routes[0].url.slice(1));const untouched=fs.readFileSync(firstFile,'utf8');const lastFile=path.join(root,routes.at(-1).url.slice(1));fs.writeFileSync(lastFile,'Missing main landmark');assert.throws(()=>render(root),/main landmark/);checks++;assert.equal(fs.readFileSync(firstFile,'utf8'),untouched);checks++;
 fs.unlinkSync(path.join(root,guide.slice(1)));assert.throws(()=>render(root),/guide must exist/);checks++;
 console.log('Pilot-backlink regression: '+checks+' checks passed; idempotent ten-page copy preservation and fail-closed prerequisites. No external requests or emails.');
}finally{fs.rmSync(root,{recursive:true,force:true});}

// Keep the existing backlink checks and add the shared guide/homepage navigation contract.
require('./test-pilot-tool-paths.cjs').run();
