'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {generate}=require('./static-editorial-publisher.cjs');
function fixture(t){
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-editorial-'));
  t.after(()=>{assert.equal(path.dirname(path.resolve(root)),path.resolve(os.tmpdir()));assert(path.basename(root).startsWith('zion-editorial-'));fs.rmSync(root,{recursive:true,force:true});});
  fs.mkdirSync(path.join(root,'public/blog'),{recursive:true});
  fs.writeFileSync(path.join(root,'public/blog/index.html'),'<html><body><a href="/old/">Existing article</a></body></html>');
  fs.writeFileSync(path.join(root,'public/sitemap.xml'),'<sitemapindex><sitemap><loc>https://ziontechgroup.com/sitemap-0.xml</loc></sitemap></sitemapindex>');
  return root;
}
test('generates bounded real pages, preserves existing blog links, and exhausts without duplicates',t=>{
  const root=fixture(t),first=generate('daily',{root,limit:1});
  assert.equal(first.generated.length,1);
  const second=generate('daily',{root,limit:100});assert.equal(second.generated.length,1);
  const third=generate('daily',{root,limit:1});assert.equal(third.status,'queue_complete');assert.deepEqual(third.files,[]);
  const index=fs.readFileSync(path.join(root,'public/blog/index.html'),'utf8');
  assert(index.includes('Existing article'));assert.equal((index.match(/<!--zion-editorial:start-->/g)||[]).length,1);
  assert.equal((fs.readFileSync(path.join(root,'public/sitemap.xml'),'utf8').match(/sitemap-editorial.xml/g)||[]).length,1);
  const page=fs.readFileSync(path.join(root,first.files[0]),'utf8');
  assert(page.includes('data-zion-editorial="v1"'));assert(page.includes('rel="canonical"'));assert(!page.includes('of_demo_'));
});
test('separate generators share a registry without replacing existing pages',t=>{
  const root=fixture(t);
  const daily=generate('daily',{root});const before=fs.readFileSync(path.join(root,daily.files[0]),'utf8');
  generate('services',{root});generate('ultra',{root});
  assert.equal(JSON.parse(fs.readFileSync(path.join(root,'public/blog/automation-publications.json'))).posts.length,3);
  assert.equal(fs.readFileSync(path.join(root,daily.files[0]),'utf8'),before);
});
test('refuses to overwrite a page outside its publication registry',t=>{
  const root=fixture(t),file=path.join(root,'public/blog/automation-recovery-evidence-checklist/index.html');
  fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,'Existing owner content');
  assert.throws(()=>generate('daily',{root}),/Refusing to replace/);
  assert.equal(fs.readFileSync(file,'utf8'),'Existing owner content');
});
