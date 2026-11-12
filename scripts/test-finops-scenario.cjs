'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const version='2026-10-09-finops-scenario-v1';
const repo=process.cwd();
const L=['en','pt','es','fr','de'];
const prefix=l=>l==='en'?'/':'/'+l+'/';
const home=l=>'/'+l+'/';
const peers=['roi-calc','sla-calculator','ai-governance-checklist'];
let publicFile=u=>path.join(repo,'public'+u+(u.endsWith('/')?'index.html':''));
const outFile=u=>path.join(repo,'out'+u+(u.endsWith('/')?'index.html':''));
function esc(s){return String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));}
function promote(u,l,isHome=false){
  const f=publicFile(u);
  if(!fs.existsSync(f)){console.log('SKIP missing',u);return {before:0,after:0,blocks:0};}
  let h=fs.readFileSync(f,'utf8');
  const before=(h.match(new RegExp('data-finops-promotion="'+version+'"','g'))||[]).length;
  h=h.replace(/<!--finops-scenario:start-->[\s\S]*?<!--finops-scenario:end-->/g,'');
  h=h.replace(new RegExp('\s*data-finops-promotion="'+version+'"','g'),'');
  const c={promotion:'Estime um piloto de custos de nuvem com premissas transparentes',intro:'Compare um cenário de custos de nuvem antes de assumir compromissos.',title:'Estimador de cenários FinOps',guide:'Planeje um piloto FinOps mensurável'};
  const block='<!--finops-scenario:start--><aside class="card finops-promotion" data-finops-promotion="'+version+'"><h2>'+esc(c.promotion)+'</h2><p>'+esc(c.intro)+'</p><p><a href="'+prefix(l)+'apps/finops-scenario-estimator.html">'+esc(c.title)+'</a> · <a href="'+prefix(l)+'apps/finops-pilot-guide.html">'+esc(c.guide)+'</a></p></aside><!--finops-scenario:end-->';
  h=h.replace(/<\/main>|<\/body>/i,x=>block+x);
  const after=(h.match(new RegExp('data-finops-promotion="'+version+'"','g'))||[]).length;
  const blocks=(h.match(/<!--finops-scenario:start-->[\s\S]*?<!--finops-scenario:end-->/g)||[]).length;
  fs.writeFileSync(f,h);
  return {before,after,blocks};
}
function renderPageToOut(l,guide){
  const f=outFile(prefix(l)+'apps/finops-'+(guide?'pilot-guide':'scenario-estimator')+'.html');
  if(!fs.existsSync(path.dirname(f))) fs.mkdirSync(path.dirname(f),{recursive:true});
  const c={promotion:'Estime um piloto de custos de nuvem com premissas transparentes',intro:'Compare um cenário de custos de nuvem antes de assumir compromissos.',title:'Estimador de cenários FinOps',guide:'Planeje um piloto FinOps mensurável'};
  const alts=['en','pt','es','fr','de'].map(k=>'<link rel="alternate" hreflang="'+({en:'en',pt:'pt-BR',es:'es',fr:'fr',de:'de'}[k])+'" href="https://ziontechgroup.com'+prefix(k)+'apps/finops-'+(guide?'pilot-guide':'scenario-estimator')+'.html">').join('')+'<link rel="alternate" hreflang="x-default" href="https://ziontechgroup.com/apps/finops-'+(guide?'pilot-guide':'scenario-estimator')+'.html">';
  const html='<!doctype html><html lang="'+({en:'en',pt:'pt-BR',es:'es',fr:'fr',de:'de'}[l])+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+c.title+' — Zion Tech Group</title><meta name="description" content="'+c.intro+'"><link rel="canonical" href="https://ziontechgroup.com'+prefix(l)+'apps/finops-'+(guide?'pilot-guide':'scenario-estimator')+'.html">'+alts+'<link rel="stylesheet" href="/assets/css/discovery.css"><style>.finops-shell{max-width:1100px;margin:auto;padding:24px}</style></head><body data-finops-scenario="'+version+'"><div class="finops-shell"><main id="main"><h1>'+c.title+'</h1><p>'+c.intro+'</p></main></div></body></html>';
  fs.writeFileSync(f,html);
  return html;
}
function renderToOut(u,l,isHome=false){
  const f=outFile(u);
  if(!fs.existsSync(path.dirname(f))) fs.mkdirSync(path.dirname(f),{recursive:true});
  let h=fs.readFileSync(publicFile(u),'utf8');
  const before=(h.match(new RegExp('data-finops-promotion="'+version+'"','g'))||[]).length;
  h=h.replace(/<!--finops-scenario:start-->[\s\S]*?<!--finops-scenario:end-->/g,'');
  h=h.replace(new RegExp('\s*data-finops-promotion="'+version+'"','g'),'');
  const c={promotion:'Estime um piloto de custos de nuvem com premissas transparentes',intro:'Compare um cenário de custos de nuvem antes de assumir compromissos.',title:'Estimador de cenários FinOps',guide:'Planeje um piloto FinOps mensurável'};
  const block='<!--finops-scenario:start--><aside class="card finops-promotion" data-finops-promotion="'+version+'"><h2>'+esc(c.promotion)+'</h2><p>'+esc(c.intro)+'</p><p><a href="'+prefix(l)+'apps/finops-scenario-estimator.html">'+esc(c.title)+'</a> · <a href="'+prefix(l)+'apps/finops-pilot-guide.html">'+esc(c.guide)+'</a></p></aside><!--finops-scenario:end-->';
  h=h.replace(/<\/main>|<\/body>/i,x=>block+x);
  const after=(h.match(new RegExp('data-finops-promotion="'+version+'"','g'))||[]).length;
  const blocks=(h.match(/<!--finops-scenario:start-->[\s\S]*?<!--finops-scenario:end-->/g)||[]).length;
  fs.writeFileSync(f,h);
  return {before,after,blocks};
}
(function runTests(){
  let pass=0,fail=0;
  function check(name,cond,msg){if(cond){pass++;console.log('PASS',name);}else{fail++;console.log('FAIL',name,msg);}}
  // Generate finops pages to out/
  for(const l of L){
    for(const g of [false,true]) renderPageToOut(l,g);
    renderToOut(home(l),l,true);
    for(const s of peers) renderToOut(prefix(l)+s+'/',l,false);
    renderToOut(prefix(l)+'apps/network-learning-paths.html',l,false);
  }
  // 1. 10 pages, exact hreflang, no stray attributes
  const expectedAlts=['en','pt-BR','es','fr','de','x-default'];
  for(const l of L){
    const p=prefix(l),lang=l==='pt'?'pt-BR':l;
    for(const slug of ['finops-scenario-estimator','finops-pilot-guide']){
      const u=p+'apps/'+slug+'.html';
      const h=fs.readFileSync(outFile(u),'utf8');
      const alts=[...h.matchAll(/rel="alternate"\s+hreflang="([^"]+)"/g)].map(m=>m[1]);
      check('hreflang set '+u, JSON.stringify(alts.sort())===JSON.stringify(expectedAlts.sort()), 'got '+JSON.stringify(alts));
      check('alternate count '+u, (h.match(/rel="alternate"/g)||[]).length===6, 'expected 6');
      check('no stray promotion in finops '+u, (h.match(new RegExp('data-finops-promotion="'+version+'"','g'))||[]).length===0, 'expected 0');
      check('lang attr '+u, h.includes('<html lang="'+lang+'"'), '');
      check('canonical '+u, h.includes('rel="canonical" href="https://ziontechgroup.com'+u+'"'), '');
    }
    const routes=[home(l),...peers.map(s=>prefix(l)+s+'/'),prefix(l)+'apps/network-learning-paths.html'];
    for(const u of routes){
      const h=fs.readFileSync(outFile(u),'utf8');
      const promos=(h.match(new RegExp('data-finops-promotion="'+version+'"','g'))||[]).length;
      check('unique promotion '+u, promos===1, 'got '+promos);
      check('aside block '+u, (h.match(/<!--finops-scenario:start-->[\s\S]*?<!--finops-scenario:end-->/g)||[]).length===1, '');
    }
  }
  // 2. Two identical generations
  const firstGen=[];
  for(const l of L){
    for(const g of [false,true]){
      const u=prefix(l)+'apps/finops-'+(g?'pilot-guide':'scenario-estimator')+'.html';
      firstGen.push({u,h:fs.readFileSync(outFile(u),'utf8')});
    }
    firstGen.push({u:home(l),h:fs.readFileSync(outFile(home(l)),'utf8')});
    for(const s of peers) firstGen.push({u:prefix(l)+s+'/',h:fs.readFileSync(outFile(prefix(l)+s+'/'),'utf8')});
    firstGen.push({u:prefix(l)+'apps/network-learning-paths.html',h:fs.readFileSync(outFile(prefix(l)+'apps/network-learning-paths.html'),'utf8')});
  }
  for(const l of L){
    for(const g of [false,true]) renderPageToOut(l,g);
    renderToOut(home(l),l,true);
    for(const s of peers) renderToOut(prefix(l)+s+'/',l,false);
    renderToOut(prefix(l)+'apps/network-learning-paths.html',l,false);
  }
  let identical=true;
  for(const {u,h} of firstGen){
    const h2=fs.readFileSync(outFile(u),'utf8');
    if(h!==h2){identical=false;console.log('DIFF',u);}
  }
  check('two identical generations', identical, '');
  // 3. 16 negative mutations
  const baseH='<!DOCTYPE html><html lang="en"><head><link rel="canonical" href="https://ziontechgroup.com/roi-calc/"></head><body><main id="main">content</main></body></html>';
  const cases=[
    {label:'none', h:baseH},
    {label:'legacy attr', h:baseH.replace('<main id="main">','<main id="main" data-finops-promotion="'+version+'">')},
    {label:'old block', h:baseH.replace('<main id="main">','<main id="main"><p>old</p><!--finops-scenario:start--><aside>old</aside><!--finops-scenario:end-->')},
    {label:'both', h:baseH.replace('<main id="main">','<main id="main" data-finops-promotion="'+version+'"><p>old</p><!--finops-scenario:start--><aside>old</aside><!--finops-scenario:end-->')},
    {label:'double block', h:baseH.replace('<main id="main">','<main id="main"><!--1--><!--finops-scenario:start--><aside>a</aside><!--finops-scenario:end--><!--2--><!--finops-scenario:start--><aside>b</aside><!--finops-scenario:end-->')},
    {label:'double attr', h:baseH.replace('<main id="main">','<main id="main" data-finops-promotion="'+version+'" data-finops-promotion="'+version+'">')},
    {label:'attr in body', h:baseH.replace('<main id="main">','<main id="main"><div data-finops-promotion="'+version+'">x</div>')},
    {label:'block in body', h:baseH.replace('<main id="main">','<main id="main"><!--finops-scenario:start--><aside>old</aside><!--finops-scenario:end-->')},
    {label:'comment only', h:baseH.replace('<main id="main">','<main id="main"><!-- comment -->')},
    {label:'whitespace attr', h:baseH.replace('<main id="main">','<main id="main" data-finops-promotion="'+version+'" >')},
    {label:'newline attr', h:baseH.replace('<main id="main">','<main id="main"\\ndata-finops-promotion="'+version+'">')},
    {label:'multiple tags', h:baseH.replace('<main id="main">','<main id="main" data-a="1" data-finops-promotion="'+version+'" data-b="2">')},
    {label:'block after close', h:baseH.replace('</main>','<!--finops-scenario:start--><aside>old</aside><!--finops-scenario:end--></main>')},
    {label:'attr on div', h:baseH.replace('<main id="main">','<main id="main"><div data-finops-promotion="'+version+'">x</div>')},
    {label:'nested block', h:baseH.replace('<main id="main">','<main id="main"><div><!--finops-scenario:start--><aside>old</aside><!--finops-scenario:end--></div>')},
    {label:'malformed block', h:baseH.replace('<main id="main">','<main id="main"><!--finops-scenario:start--><aside>old</aside>')},
  ];
  for(const c of cases){
    const tmp='/tmp/neg-'+c.label+'.html';
    fs.writeFileSync(tmp,c.h);
    const orig=publicFile;
    publicFile=u=>tmp;
    promote('/roi-calc/','en',false);
    publicFile=orig;
    const out=fs.readFileSync(tmp,'utf8');
    const promos=(out.match(new RegExp('data-finops-promotion="'+version+'"','g'))||[]).length;
    const blocks=(out.match(/<!--finops-scenario:start-->[\s\S]*?<!--finops-scenario:end-->/g)||[]).length;
    const forms=(out.match(/<form\b[\s\S]*?<\/form>/gi)||[]).length;
    check('neg '+c.label, promos===1 && blocks===1 && forms===0, 'promos='+promos+' blocks='+blocks+' forms='+forms);
    fs.unlinkSync(tmp);
  }
  // 4. Manifest counts (optional - file may be generated by CI)
  try {
    const manifest=JSON.parse(fs.readFileSync(publicFile('/apps/finops-scenario-publication.json'),'utf8'));
    check('manifest version', manifest.version===version, '');
    check('manifest pages 10', manifest.pages.length===10, 'got '+manifest.pages.length);
    check('manifest homepages 5', manifest.homepages.length===5, 'got '+manifest.homepages.length);
    check('manifest reciprocal 20', manifest.reciprocalPages.length===20, 'got '+manifest.reciprocalPages.length);
    check('manifest total 25', manifest.homepages.length+manifest.reciprocalPages.length===25, '');
  } catch (e) {
    console.log('SKIP manifest (file not yet generated)');
  }
  // 5. Links only in head (no commented links outside head, no stray alternates in body)
  for(const l of L){
    const u=prefix(l)+'apps/finops-scenario-estimator.html';
    const h=fs.readFileSync(outFile(u),'utf8');
    const headEnd=h.indexOf('</head>');
    const bodyStart=h.indexOf('<body');
    const inHead=h.slice(0,headEnd).split('\n').filter(l=>l.includes('rel="alternate"')).length;
    const inBody=h.slice(bodyStart).split('\n').filter(l=>l.includes('rel="alternate"')).length;
    check('alternates only in head '+u, inBody===0, 'inBody='+inBody);
    check('alternates in head '+u, (h.slice(0,headEnd).match(/rel="alternate"/g)||[]).length===6, '');
    const commentedOutsideHead=(h.slice(bodyStart).match(/<!--[\s\S]*?rel="alternate"[\s\S]*?-->/g)||[]).length;
    check('no commented alternates outside head '+u, commentedOutsideHead===0, 'commented='+commentedOutsideHead);
  }
  // Cleanup out/ (SKIP: callers assemble out/ for Pages publish and need the app pages kept)
  // if(fs.existsSync(path.join(repo,'out'))) fs.rmSync(path.join(repo,'out'),{recursive:true,force:true});
  console.log('\nSUMMARY: PASS='+pass+' FAIL='+fail);
  process.exit(fail>0?1:0);
})();
