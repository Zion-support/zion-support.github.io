'use strict';
const fs=require('node:fs'),path=require('node:path');
const {writeReport}=require('./reliability-reports.cjs');
const plan=require('../content/autonomous-editorial-plan.json');
const origin='https://ziontechgroup.com';
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const publicationFile='public/blog/automation-publications.json';
function loadRegistry(root){
  const file=path.join(root,publicationFile);
  const registry=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{version:1,posts:[]};
  if(registry.version!==1||!Array.isArray(registry.posts))throw new Error('Invalid publication registry');
  return registry;
}
function render(topic,date){
  const route=`/blog/${topic.slug}/`;
  const sections=topic.sections.map(s=>`<section><h2>${escape(s.title)}</h2><p>${escape(s.text)}</p><ul>${s.steps.map(x=>`<li>${escape(x)}</li>`).join('')}</ul></section>`).join('\n');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(topic.title)} · Zion Tech Group</title><meta name="description" content="${escape(topic.summary)}">
<link rel="canonical" href="${origin+route}"><meta name="robots" content="index, follow">
<style>:root{color-scheme:dark}*{box-sizing:border-box}body{margin:0;background:#020617;color:#e2e8f0;font:1.05rem/1.75 system-ui,sans-serif}main,nav,footer{max-width:850px;margin:auto;padding:24px}nav{display:flex;flex-wrap:wrap;gap:18px;border-bottom:1px solid #334155}a{color:#c4b5fd}a:focus-visible{outline:3px solid #f0abfc;outline-offset:4px}h1{font-size:clamp(2rem,5vw,3rem);line-height:1.2;overflow-wrap:anywhere}h2{font-size:1.4rem;margin-top:2rem}.lead{color:#cbd5e1;font-size:1.2rem}.meta{color:#94a3b8}.next{border:1px solid #475569;border-radius:14px;padding:24px;margin-top:32px}.skip{position:absolute;left:-9999px}.skip:focus{left:12px;top:12px;background:#0f172a;padding:10px}footer{border-top:1px solid #334155}</style>
</head><body data-zion-editorial="v1"><a class="skip" href="#main">Skip to content</a>
<nav aria-label="Main navigation"><a href="/">Zion Tech Group</a><a href="/blog/">Guides</a><a href="/services/">Services</a><a href="/plans/">Plans</a></nav>
<main id="main"><article><p class="meta">Zion practical guide · <time datetime="${date}">${date.slice(0,10)}</time></p><h1>${escape(topic.title)}</h1><p class="lead">${escape(topic.summary)}</p>${sections}
${topic.related?`<p><a href="${escape(topic.related)}">Try the related planning tool</a></p>`:''}
<aside class="next"><h2>Plan your next step</h2><p>Use these questions to prepare a focused discussion of your own requirements. Review the current service offering and agree the scope before implementation.</p><p><a href="/services/">Explore current services</a> · <a href="/book/">Book Free Discovery</a></p></aside></article></main>
<footer><a href="/blog/">All guides</a> · <a href="/contact/">Contact Zion</a></footer></body></html>\n`;
}
function generate(mode,{root=process.cwd(),limit=1,now=new Date().toISOString()}={}){
  if(!['daily','ultra','services'].includes(mode))throw new Error('Unknown editorial mode');
  const count=Number(limit);
  if(!Number.isInteger(count)||count<1)throw new Error('Publication count must be a positive integer');
  const registry=loadRegistry(root), published=new Set(registry.posts.map(p=>p.slug));
  const queue=plan.filter(t=>t.mode===mode&&!published.has(t.slug)).slice(0,Math.min(count,3));
  const files=[];
  for(const topic of queue){
    if(!/^[a-z0-9-]+$/.test(topic.slug))throw new Error('Invalid topic slug');
    const relative=`public/blog/${topic.slug}/index.html`,file=path.join(root,relative);
    if(fs.existsSync(file))throw new Error(`Refusing to replace an unregistered page: ${relative}`);
    fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,render(topic,now));files.push(relative);
    registry.posts.push({slug:topic.slug,title:topic.title,summary:topic.summary,mode,publishedAt:now});
  }
  if(queue.length){
    const indexFile=path.join(root,'public/blog/index.html');let html=fs.readFileSync(indexFile,'utf8');
    const start='<!--zion-editorial:start-->',end='<!--zion-editorial:end-->';
    html=html.replace(/<!--zion-editorial:start-->[\s\S]*?<!--zion-editorial:end-->/g,'');
    if(!/<\/body>/i.test(html))throw new Error('Blog index has no insertion point');
    const cards=registry.posts.map(p=>`<article class="post"><h2><a href="/blog/${p.slug}/">${escape(p.title)}</a></h2><p>${escape(p.summary)}</p><p class="meta">${p.publishedAt.slice(0,10)}</p></article>`).join('\n');
    html=html.replace(/<\/body>/i,`${start}<section aria-label="Practical guides"><h2>Practical guides</h2>${cards}</section>${end}\n</body>`);
    fs.writeFileSync(indexFile,html);files.push('public/blog/index.html');
    fs.writeFileSync(path.join(root,publicationFile),JSON.stringify(registry,null,2)+'\n');files.push(publicationFile);
    const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+registry.posts.map(p=>`<url><loc>${origin}/blog/${p.slug}/</loc><lastmod>${p.publishedAt.slice(0,10)}</lastmod></url>`).join('\n')+'\n</urlset>\n';
    fs.writeFileSync(path.join(root,'public/sitemap-editorial.xml'),sitemap);files.push('public/sitemap-editorial.xml');
    const mapFile=path.join(root,'public/sitemap.xml');let map=fs.readFileSync(mapFile,'utf8');
    if(!map.includes(`${origin}/sitemap-editorial.xml`)){
      if(!map.includes('</sitemapindex>'))throw new Error('Expected sitemap index');
      map=map.replace('</sitemapindex>',`  <sitemap><loc>${origin}/sitemap-editorial.xml</loc></sitemap>\n</sitemapindex>`);
      fs.writeFileSync(mapFile,map);files.push('public/sitemap.xml');
    }
  }
  const report={generatedAt:now,mode,status:queue.length?'generated':'queue_complete',requestedCount:count,maximumPerRun:3,
    generated:queue.map(t=>({slug:t.slug,title:t.title})),files,
    note:'Uses the versioned editorial plan; no fabricated case studies, outcomes or product pricing. Existing pages are never overwritten. Add reviewed topics to extend the queue.'};
  writeReport(`editorial-${mode}-latest`,report,path.join(root,'automation/reports'));
  if(process.env.GITHUB_OUTPUT)fs.appendFileSync(process.env.GITHUB_OUTPUT,`changed=${queue.length>0}\n`);
  return report;
}
function main(mode){
  const report=generate(mode,{limit:Number(process.env.CONTENT_LIMIT||1)});
  console.log(JSON.stringify(report,null,2));
  if(process.env.GITHUB_STEP_SUMMARY)fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,`### Editorial generation: ${report.status}\n\n${report.generated.map(p=>'- '+p.title).join('\n')}\n\n${report.note}\n`);
}
if(require.main===module)main(process.argv[2]);
module.exports={generate,render,main,loadRegistry};
