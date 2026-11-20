'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const {buildConfig,decodeEmail,probeContact}=require('./lead-gen-contact-route-guard.cjs');
const good={url:'https://ziontechgroup.com/contact/',email:'kleber@ziontechgroup.com'};
const ok=(html,url=good.url,status=200,contentType='text/html; charset=utf-8')=>async()=>({
  url,status,headers:{get:()=>contentType},text:async()=>html,
});
test('accepts only Zion origin and Zion email, fails closed on config mistakes',()=>{
 assert.deepEqual(buildConfig({LEAD_GEN_BASE_URL:'https://ziontechgroup.com',LEAD_GEN_EXPECTED_EMAIL:'KLEBER@ziontechgroup.com'}),good);
 assert.throws(()=>buildConfig({LEAD_GEN_BASE_URL:'https://evil.example',LEAD_GEN_EXPECTED_EMAIL:good.email}));
 assert.throws(()=>buildConfig({LEAD_GEN_BASE_URL:'http://ziontechgroup.com',LEAD_GEN_EXPECTED_EMAIL:good.email}));
 assert.throws(()=>buildConfig({LEAD_GEN_BASE_URL:'https://ziontechgroup.com/?token=oops',LEAD_GEN_EXPECTED_EMAIL:good.email}));
 assert.throws(()=>buildConfig({LEAD_GEN_BASE_URL:'https://ziontechgroup.com',LEAD_GEN_EXPECTED_EMAIL:'private@example.com'}));
});
test('healthy contact page validates visible email and mailto link without disclosing email in output',async()=>{
 const outcome=await probeContact(good,ok('<a href="mailto:kleber@ziontechgroup.com">Email</a>'));
 assert.equal(outcome.result,'healthy');
 assert.equal(outcome.reason,'verified');
 assert.equal(outcome.mailtoPresent,true);
 assert.ok(!JSON.stringify(outcome).includes(good.email));
});
test('HTML entity-encoded email still resolves',async()=>{
 assert.ok(decodeEmail('kleber&#64;ziontechgroup.com').includes(good.email));
 const report=await probeContact(good,ok('Contact: kleber&#64;ziontechgroup.com'));
 assert.equal(report.result,'healthy');
 assert.equal(report.mailtoPresent,false);
});
test('absent email fails closed',async()=>{
 const x=await probeContact(good,ok('<h1>Contact us</h1>'));
 assert.equal(x.result,'failed');
 assert.equal(x.reason,'missing-contact');
});
test('off-domain redirects fail closed',async()=>{
 const x=await probeContact(good,ok('email is here', 'https://evil.example/', 200));
 assert.equal(x.reason,'off-route-redirect');
});
test('HTTP error and JSON content type fail closed',async()=>{
 assert.equal((await probeContact(good,ok('server error',good.url,500))).reason,'non-200');
 assert.equal((await probeContact(good,ok('{}',good.url,200,'application/json'))).reason,'not-html');
});
test('network error and oversized page fail closed without detailed error logs',async()=>{
 const err=await probeContact(good,async()=>{throw Error('PRIVATE_NETWORK_TOKEN_123');});
 assert.equal(err.reason,'network-or-timeout');
 assert.ok(!JSON.stringify(err).includes('PRIVATE_NETWORK_TOKEN'));
 const huge=await probeContact(good,ok('x'.repeat(1048577)));
 assert.equal(huge.reason,'oversized-page');
});
test('no interaction is performed other than a GET of the public contact route',async()=>{
 let called=0;
 const report=await probeContact(good,async(url,opts)=>{
  called++;
  assert.equal(url,good.url);
  assert.equal(opts.method,'GET');
  assert.equal(opts.redirect,'follow');
  return {url,status:200,headers:{get:()=> 'text/html'},text:async()=>good.email};
 });
 assert.equal(report.result,'healthy');
 assert.equal(called,1);
});
test('email appearing only in hidden scripts, head or comments does not fake health',async()=>{
 const hidden='<html><head><meta content="kleber@ziontechgroup.com"></head><body>'+
  '<!-- kleber@ziontechgroup.com --><script>const contact="kleber@ziontechgroup.com"</script>'+
  '<style>.contact::after{content:"kleber@ziontechgroup.com"}</style><h1>Contact</h1></body></html>';
 const result=await probeContact(good,ok(hidden));
 assert.equal(result.result,'failed');
 assert.equal(result.reason,'missing-contact');
});
