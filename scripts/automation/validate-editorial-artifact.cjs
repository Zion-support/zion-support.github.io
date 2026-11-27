'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
function validate(mode,output='out'){
  const report=JSON.parse(fs.readFileSync(`automation/reports/editorial-${mode}-latest.json`,'utf8'));
  assert(report.generated.length>0,'No generated pages to validate');
  for(const post of report.generated){
    const html=fs.readFileSync(path.join(output,'blog',post.slug,'index.html'),'utf8');
    assert(html.includes('data-zion-editorial="v1"'),'Missing editorial marker');
    assert(html.includes(`rel="canonical" href="https://ziontechgroup.com/blog/${post.slug}/"`),'Canonical mismatch');
    assert.equal((html.match(/<h1\b/g)||[]).length,1,'Expected one primary heading');
    assert(!/http-equiv=["']refresh|PLACEHOLDER|of_demo_/i.test(html),'Unexpected redirect, placeholder or demo checkout');
    const article=html.match(/<article>([\s\S]*?)<\/article>/)?.[1]||'';
    assert(article.replace(/<[^>]*>/g,' ').split(/\s+/).length>=180,'Insufficient article content');
    for(const match of html.matchAll(/href="(\/[^"#]*)"/g)){
      const url=new URL(match[1],'https://ziontechgroup.com');
      const local=path.join(output,url.pathname.slice(1),url.pathname.endsWith('/')?'index.html':'');
      assert(fs.existsSync(local),`Missing internal target ${url.pathname}`);
    }
    assert(fs.readFileSync(path.join(output,'sitemap-editorial.xml'),'utf8').includes(`/blog/${post.slug}/`),'Page absent from sitemap');
  }
  console.log(`Validated ${report.generated.length} ${mode} pages in the production artifact`);
}
if(require.main===module)validate(process.argv[2],process.argv[3]);
module.exports={validate};
