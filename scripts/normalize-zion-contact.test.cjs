'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {normalize,run}=require('./normalize-zion-contact.cjs');
test('updates visible Zion contacts and complete commercial links',()=>{
 const before='<a href="https://wa.me/13024640950?text=Discovery">+1 302 464 0950</a><a href="tel:+130****0950">Call</a><p>+55 (47) 99999-9999</p>';
 assert.equal(normalize(before,'html'),'<a href="https://wa.me/5511976140076?text=Discovery">+55 11 97614-0076</a><a href="tel:+5511976140076">Call</a><p>+55 11 97614-0076</p>');
});
test('preserves exact and longer IDs, numeric prices, technical routes and dial-in data',()=>{
 for(const value of ['{"account_id":"1302464095000"}','{"account_id":"13024640950","price":13024640950}','{"gateway":"https://gateway.test/13024640950","dial_in":"+1 302 464 0950"}','const credential = "13024640950";','"https://gateway.test/tel:+13024640950"']) assert.equal(normalize(value),value);
});
test('preserves customer input examples and technical dial-in text',()=>{
 const value='<input placeholder="+1 (302) 464-0950" value="13024640950"><p>Dial-in: +1 302 464 0950.</p><code>+13024640950</code><textarea>+1 302 464 0950</textarea>';
 assert.equal(normalize(value,'html'),value);
});
test('preserves unrelated contacts, checkout and long phone-like identifiers',()=>{
 const value='<a href="tel:+551133334444">Client</a><a href="https://wa.me/1302464095000">Long ID</a><a href="https://buy.stripe.com/7sY00k7JScFV99Bf044ZG06">$2,500</a>';
 assert.equal(normalize(value,'html'),value);
});
test('updates only the explicit JSON-LD telephone field',()=>{
 const value='<script type="application/ld+json">{"telephone":"+13024640950","account_id":"13024640950","price":13024640950}</script>';
 assert.equal(normalize(value,'html'),value.replace('"telephone":"+13024640950"','"telephone":"+5511976140076"'));
});
test('keeps arbitrary script data intact and is idempotent',()=>{
 const value='<script>const id="13024640950", dial_in="+1 302 464 0950";</script><p>+1 302 464 0950</p>';
 const once=normalize(value,'html');assert.ok(once.startsWith(value.split('</script>')[0]+'</script>'));assert.equal(normalize(once,'html'),once);
});
test('artifact traversal leaves JSON files and historical directories unchanged',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-contact-test-'));
 try{const data='{"account_id":"13024640950","price":13024640950}';fs.writeFileSync(path.join(dir,'data.json'),data);fs.mkdirSync(path.join(dir,'history'));fs.writeFileSync(path.join(dir,'history','receipt.html'),'<p>+1 302 464 0950</p>');fs.writeFileSync(path.join(dir,'index.html'),'<p>+1 302 464 0950</p>');assert.equal(run(dir).changed,1);assert.equal(fs.readFileSync(path.join(dir,'data.json'),'utf8'),data);assert.equal(fs.readFileSync(path.join(dir,'history','receipt.html'),'utf8'),'<p>+1 302 464 0950</p>');}finally{fs.rmSync(dir,{recursive:true,force:true});}
});
