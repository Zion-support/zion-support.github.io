const fs=require('fs');const path=require('path');const dir=process.cwd();
const pages=new Set();
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,e.name);if(e.isDirectory()&&!['node_modules','.next','.git'].includes(e.name))walk(f);else if(e.name==='page.tsx'){const r='/'+path.relative('app',f).replace(/\\/g,'/').replace(/\/page\.tsx$/,'');pages.add(r);}else if(e.name==='layout.tsx'){const r='/'+path.relative('app',f).replace(/\\/g,'/').replace(/\/layout\.tsx$/,'');pages.add(r);}}}
walk(path.join(dir,'app'));
const links=[];function walk2(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,e.name);if(e.isDirectory()&&!['node_modules','.next','.git'].includes(e.name))walk2(f);else if(/\.(tsx?|jsx?)$/.test(e.name)){const t=fs.readFileSync(f,'utf8');let m=/href=["'](\/[^"']+)["']/g.exec(t);while(m){links.push({file:path.relative(dir,f),href:m[1]});m=/href=["'](\/[^"']+)["']/g.exec(t);}}}
walk2(dir);
const norm=h=>{h=(h.split('?')[0].split('#')[0]).replace(/\\/g,'/');if(h.length>1&&h.endsWith('/'))h=h.slice(0,-1);return h;};
const miss=links.filter(l=>!pages.has(norm(l.href)));
const by={};miss.forEach(x=>{(by[x.file]||(by[x.file]=new Set())).add(x.href);});
const out=Object.entries(by).sort((a,b)=>b[1].size-a[1].size).slice(0,15).map(([f,s])=>({file:f,count:s.size,examples:[...s].slice(0,10)}));
console.log(JSON.stringify({dir,pages:pages.size,links:links.length,missing:miss.length,worst:out},null,2));
