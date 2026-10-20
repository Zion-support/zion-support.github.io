'use strict';
// Offline contract for the original operational-tools renderer.
// Runs in a temporary fixture; never edits site sources or sends requests.
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto'),assert=require('node:assert/strict'),cp=require('node:child_process');
const root=path.resolve(__dirname,'..');
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-ops-locale-'));
const out=path.join(dir,'out'),languages=['en','pt','es','fr','de'];
const original=path.join(root,'scripts/render-operational-tools.cjs');
function file(url){return path.join(out,url.slice(1)+(url.endsWith('/')?'index.html':''));}
function write(url,html){const target=file(url);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,html);}
function run(){return cp.spawnSync(process.execPath,[original,'out'],{cwd:dir,encoding:'utf8',timeout:30000});}
function ok(result,kind){assert.equal(result.status,0,kind+': '+result.stderr);}
function fail(message){const result=run();assert.notEqual(result.status,0,'Expected failure for '+message);assert((result.stderr||'').includes(message),'Incorrect failure: '+result.stderr);}
function snapshot(){const found={};function walk(directory){for(const item of fs.readdirSync(directory,{withFileTypes:true})){const p=path.join(directory,item.name);if(item.isDirectory())walk(p);else found[path.relative(out,p)]=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');}}walk(out);return found;}
try {
  fs.mkdirSync(path.join(dir,'content'),{recursive:true});
  fs.mkdirSync(path.join(dir,'public/assets/js'),{recursive:true});
  fs.copyFileSync(path.join(root,'content/operational-tools.json'),path.join(dir,'content/operational-tools.json'));
  fs.copyFileSync(path.join(root,'public/assets/js/operational-tools.js'),path.join(dir,'public/assets/js/operational-tools.js'));
  const copy=JSON.parse(fs.readFileSync(path.join(dir,'content/operational-tools.json'),'utf8'));
  const protectedForm='<form id="existing" action="/untouched"><input name="sentinel"></form>';
  for(const l of languages){
    const prefix=l==='en'?'/':'/'+l+'/',home=l==='pt'?'/':'/'+l+'/',disc=l==='en'?'/app-network-discovery.html':prefix+'discovery/';
    const main=l==='pt'
      ?'<div class="wrap" id="app-paths-home">'+protectedForm+'<p>Existing content</p><footer class="site-foot">Footer</footer></div>'
      :'<main class="page"><div id="app-paths-home">'+protectedForm+'<p>Existing content</p></div></main><footer>Footer</footer>';
    write(home,'<!doctype html><html lang="'+copy[l].lang+'"><body>'+main+'</body></html>');
    write(disc,'<!doctype html><html lang="'+copy[l].lang+'"><body><h1>Free Discovery</h1><form id="questionnaire"><input name="email"></form></body></html>');
  }
  const first=run();ok(first,'first render');
  assert(fs.existsSync(file('/apps/operational-tools-publication.json')),'Publication manifest missing');
  const manifest=JSON.parse(fs.readFileSync(file('/apps/operational-tools-publication.json'),'utf8'));
  assert.equal(manifest.pages.length,20);
  assert.equal(manifest.homepages.length,5);
  for(const l of languages){
    const prefix=l==='en'?'/':'/'+l+'/',home=l==='pt'?'/':'/'+l+'/',disc=l==='en'?'/app-network-discovery.html':prefix+'discovery/';
    const routes=[prefix+'apps/operational-planning-tools.html',...['roi-calc','sla-calculator','ai-governance-checklist'].map(s=>prefix+s+'/')];
    for(const route of routes){
      const html=fs.readFileSync(file(route),'utf8');
      assert(html.includes('href="'+disc+'"'),'Free Discovery nav not linked from '+route);
      assert(!html.includes('href="/discovery/">Free Discovery</a>'),'Paid English route advertised free');
      assert(html.includes('<html lang="'+copy[l].lang+'">'),'Wrong generated language '+route);
    }
    const homepage=fs.readFileSync(file(home),'utf8');
    assert(homepage.includes(protectedForm),'Original homepage form mutated '+home);
    assert.equal((homepage.match(/data-operational-promotion=/g)||[]).length,1,'Duplicate homepage promotion '+home);
    for(const slug of ['roi-calc','sla-calculator','ai-governance-checklist']){
      assert(homepage.includes('href="'+prefix+slug+'/"'),'Missing homepage app interlink '+slug+' '+home);
    }
  }
  assert.deepEqual(snapshot(),(ok(run(),'idempotent second render'),snapshot()),'Renderer not byte-idempotent');
  const english=file('/app-network-discovery.html'),good=fs.readFileSync(english,'utf8');
  fs.writeFileSync(english,good.replace('<form id="questionnaire"><input name="email"></form>',''));
  fail('Discovery route has no questionnaire');
  fs.writeFileSync(english,good.replace('</body>','<a href="https://buy.stripe.com/test">Pay $99</a></body>'));
  fail('Free Discovery route contains a checkout');
  fs.writeFileSync(english,good.replace('lang="en"','lang="fr"'));
  fail('Discovery locale mismatch');
  fs.writeFileSync(english,good);
  const pt=file('/'),ptGood=fs.readFileSync(pt,'utf8');
  fs.writeFileSync(pt,ptGood.replace('<footer class="site-foot">','<section>footer removed</section><footer class="site-foot">').replace('<footer class="site-foot">',''));
  fail('Missing or repeated Portuguese footer');
  fs.writeFileSync(pt,ptGood);
  ok(run(),'restored fixtures');
  process.stdout.write('PASS: five languages, 20 pages, five homepage interlink sets, paid/free route, forms, manifest, repeat rendering and four negative controls.\n');
} finally {fs.rmSync(dir,{recursive:true,force:true});}
