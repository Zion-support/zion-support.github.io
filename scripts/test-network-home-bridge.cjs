'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {C,RELEASE,transform,protectedParts,hrefs}=require('./render-network-home-bridge.cjs');
function verify(out='out'){
 for(const l of Object.keys(C)){
  const f=path.join(out,l==='pt'?'index.html':l+'/index.html'),h=fs.readFileSync(f,'utf8');
  assert.equal((h.match(new RegExp('data-network-bridge="'+RELEASE+'"','g'))||[]).length,1,'Unique release navigation');
  assert.equal((h.match(/<!--network-home-bridge-links:start-->/g)||[]).length,1,'Unique links');
  assert(h.includes('/zion-app-network/#start-here-'+l));assert(h.includes('/zion-app-network/CATALOG-NAVIGATION.html#start-here-'+l));
  assert.equal(transform(h,l),h,'Idempotent HTML');
  const fixture='<!doctype html><html><body><form id="original"><input name="keep"></form><script>window.keep=true;</script><!--zion-network-home:start--><section data-network-home="fixture"><div><h2>Title</h2><p>Old text</p><nav><a href="/original/">Keep</a></nav></div></section><!--zion-network-home:end--></body></html>';
  const result=transform(fixture,l);assert.deepEqual(protectedParts(result),protectedParts(fixture));assert(hrefs(result).includes('/original/'));
  assert.throws(()=>transform(fixture.replace('<!--zion-network-home:start-->',''),l));
  assert.throws(()=>transform(fixture.replace('<nav>','<nav><form></form>'),l));
 }
 console.log('PASS homepage bridge: five locales, unique markers, idempotence, preserved original links/forms/scripts and negative ownership/form fixtures.');
}
module.exports={verify};if(require.main===module)verify(process.argv[2]||'out');
