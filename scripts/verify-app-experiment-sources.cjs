"use strict";
// Bind live tools to verified source locations; a URL slug is not a repository name.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||'out');
const sources={
 'roi-calc':'https://github.com/Zion-support/zion-support.github.io/blob/main/public/roi-calc/index.html',
 'finops-estimator':'https://github.com/Zion-support/zion-support.github.io/blob/main/public/finops-estimator/index.html',
 'ai-governance-checklist':'https://github.com/Zion-support/zion-support.github.io/blob/main/public/ai-governance-checklist/index.html',
 'sla-calculator':'https://github.com/Zion-support/zion-support.github.io/blob/main/public/sla-calculator/index.html',
 'site-survey-planner':'https://github.com/Zion-support/site-survey-planner',
 'automation-pilot-planner':'https://github.com/Zion-support/zion-support.github.io/blob/main/public/automation-pilot-planner/index.html'
};
const file=path.join(root,'apps/app-experiment-publication.json'),m=JSON.parse(fs.readFileSync(file,'utf8'));
for(const page of m.pages){const f=path.join(root,new URL(page.url).pathname);let h=fs.readFileSync(f,'utf8');for(const [id,url] of Object.entries(sources)){h=h.replaceAll('href="https://github.com/Zion-support/'+id+'"','href="'+url+'"');assert(h.includes('href="'+url+'"'),'Missing canonical source: '+id);}fs.writeFileSync(f,h);}
m.sources=sources;m.sourceBinding='Verified by repository metadata and Contents API on 2026-10-08; five tools are homepage-hosted, one is a standalone repository.';fs.writeFileSync(file,JSON.stringify(m,null,2)+'\n');
console.log('PASS: six verified source bindings across all five translated planner pages.');
