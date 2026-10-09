'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {addSection,locales,site,hub,field,home,workbench,release}=require('./render-telecom112-release.cjs');
const out=process.argv[2]||'out';
for(const l of locales){
 const html=fs.readFileSync(path.join(out,site(l).slice(1)),'utf8');
 assert(html.includes('data-release="'+release+'"'));assert(!/<form\b|<script\b/i.test(html));assert.equal((html.match(/hreflang=/g)||[]).length,6);
 assert(html.includes('<html lang="'+(l==='pt'?'pt-BR':l)+'"'));assert(html.includes('href="https://ziontechgroup.com'+site(l)+'"'));
 for(const v of locales){assert(html.includes('href="'+site(v)+'"'));assert(html.includes('href="https://ziontechgroup.com'+site(v)+'"'));}
 assert.equal((html.match(/href="https:\/\/github.com\/Zion-support\/zion-(?:network-outage-predictor|cell-tower-optimizer|bandwidth-demand-forecaster|5g-rollout-planner|churn-signal-radar|spectrum-usage-analyzer)"/g)||[]).length,6);
 assert(html.includes('href="'+hub(l)+'"'));assert(!/all live|all free, all live|the moment you submit/i.test(html));
 for(const rel of [home(l),field(l).slice(1),workbench(l).slice(1)]){const h=fs.readFileSync(path.join(out,rel),'utf8');assert(h.includes('href="'+site(l)+'"'));assert.equal((h.match(/data-telecom112-promo=/g)||[]).length,1);}
}
const fixture='<html><body><main><form><input name="email"></form><script>const untouched=true;</script></main></body></html>';
const section='<!--telecom112:start--><section data-telecom112-promo="'+release+'">Guide</section><!--telecom112:end-->';
const once=addSection(fixture,section);assert.equal(addSection(once,section),once);
assert(once.includes('<form><input name="email"></form>'));assert(once.includes('<script>const untouched=true;</script>'));
assert.throws(()=>addSection('<main></main><meta http-equiv="refresh" content="0">',section));assert.throws(()=>addSection('<body>Missing main</body>',section));
const manifest=JSON.parse(fs.readFileSync(path.join(out,'apps/batch112-publication.json'),'utf8'));assert.equal(manifest.release,release);assert.equal(manifest.delivery,'unchanged');
console.log('PASS five-language telecom mirrors, reciprocal links, canonical/alternate metadata and idempotent promotion fixtures');
