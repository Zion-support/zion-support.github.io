'use strict';
// Offline source-anchor and owned-navigation QA. Never deploys or submits forms.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict'),nav=require('./productivity-qa-contract.cjs');
const CATALOG_BLOB='6b24c2ec76cd237c1f1797e4872366e4b411d338';
const origin='https://ziontechgroup.com';
const blob=b=>crypto.createHash('sha1').update('blob '+b.length+'\0').update(b).digest('hex');
const digest=b=>crypto.createHash('sha256').update(b).digest('hex');
function disk(out,url){const p=decodeURIComponent(new URL(url,origin).pathname);const f=path.resolve(out,'.'+p+(p.endsWith('/')?'index.html':''));assert(f.startsWith(path.resolve(out)+path.sep),'Destination escapes artifact');return f;}
function catalogSections(text){const locales=Object.keys(nav.C),pos=locales.map(l=>{const re=new RegExp('<a\\s+id=["\\\']'+l+'["\\\']\\s*><\\/a>','g');const hits=[...text.matchAll(re)];assert.equal(hits.length,1,'One explicit catalog source anchor '+l);return hits[0].index;});assert(pos.every((p,i)=>i===0||p>pos[i-1]),'Catalog anchor order');return Object.fromEntries(locales.map((l,i)=>[l,text.slice(pos[i],pos[i+1]||text.length)]));}
function validate(out,catalogFile,expectedBlob=CATALOG_BLOB){
 const data=fs.readFileSync(catalogFile);assert.equal(blob(data),expectedBlob,'Pinned catalog bytes changed');const sections=catalogSections(data.toString('utf8'));
 const report=nav.verify(out);
 for(const l of Object.keys(nav.C))for(const slug of nav.S)assert(sections[l].includes(origin+nav.route(l,slug)),'Catalog source must list matching-language resource');
 return {...report,catalogBlob:expectedBlob};
}
function prepare(out='out',dest='productivity-qa',catalogFile='_productivity-catalog.md'){
 const plan=validate(out,catalogFile);assert(!fs.existsSync(dest),'QA staging destination already exists');const files=new Map(),external=new Set();
 function collect(file){const rel=path.relative(path.resolve(out),file);assert(rel&&!rel.startsWith('..')&&!path.isAbsolute(rel),'Artifact confinement');if(files.has(rel))return;assert(fs.realpathSync(file).startsWith(fs.realpathSync(out)+path.sep),'Symlink escapes artifact');const b=fs.readFileSync(file);files.set(rel,b);if(!/\.(html?|css|js|mjs)$/i.test(file))return;const text=b.toString('utf8'),refs=[];
  if(/\.html?$/i.test(file)){for(const tag of text.match(/<[^>]+>/g)||[]){const src=(tag.match(/\bsrc=["']([^"']+)["']/i)||[])[1];if(src)refs.push(src);if(/^<link\b/i.test(tag)&&/\brel=["']stylesheet["']/i.test(tag)){const href=(tag.match(/\bhref=["']([^"']+)["']/i)||[])[1];if(href)refs.push(href);}}}
  if(/\.css$/i.test(file))for(const m of text.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g))refs.push(m[1]);
  if(/\.(m?js)$/i.test(file))for(const m of text.matchAll(/(?:\bfrom\s*|\bimport\s*(?:\(\s*)?)["'](\.{1,2}\/[^"']+)["']/g))refs.push(m[1]);
  const base=origin+'/'+rel.replace(/\\/g,'/');for(const ref of refs){if(/^(data:|blob:|#)/i.test(ref))continue;const u=new URL(ref,base);if(u.origin!==origin){external.add(u.href);continue;}collect(disk(out,u.href));}
 }
 for(const p of plan.pages)collect(p.file);const manifest={schema:1,scope:'30 resource editions + 5 homepages and discovered static dependencies; NOT deployment/browser/native-editorial certification',head:process.env.GITHUB_HEAD_SHA||null,catalogBlob:plan.catalogBlob,catalogEvidence:'Pinned authored Markdown anchors and matching-language source routes; NOT rendered/live catalog HTML proof',ownedLinksChecked:plan.links,pages:plan.pages.map(({locale,url})=>({locale,url})),externalDependencies:[...external].sort(),files:[...files].map(([file,b])=>({file,sha256:digest(b),bytes:b.length})).sort((a,b)=>a.file.localeCompare(b.file))};
 // Only stage after every page, owned link and discovered static dependency validates.
 fs.mkdirSync(dest,{recursive:true});for(const [file,b]of files){const f=path.join(dest,file);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,b);}fs.writeFileSync(path.join(dest,'CATALOG-PRODUCTIVITY-REVIEW.md'),fs.readFileSync(catalogFile));fs.writeFileSync(path.join(dest,'qa-manifest.json'),JSON.stringify(manifest,null,2)+'\n');console.log('PASS productivity QA:'+plan.pages.length+' pages,'+plan.links+' owned links,5 pinned catalog source anchors,'+files.size+' retained files. Not live catalog/browser certification.');return manifest;
}
module.exports={CATALOG_BLOB,blob,catalogSections,validate,prepare};if(require.main===module)prepare(process.argv[2],process.argv[3],process.argv[4]);
