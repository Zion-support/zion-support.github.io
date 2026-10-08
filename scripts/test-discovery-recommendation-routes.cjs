'use strict';
// Read-only endpoint health checks. HTTP 200 does not prove app functionality.
const fs=require('node:fs'),assert=require('node:assert/strict');
module.exports=async function verifyRecommendedRoutes(){
 const source=fs.readFileSync('public/assets/js/discovery-delivery.js','utf8').split('const HOURVAL=')[0];
 const routes=[...new Set([...source.matchAll(/'(\/[^']+)'/g)].map(m=>m[1]))];
 assert(routes.length>=20,'Recommendation map unexpectedly small');
 let passed=0;
 for(let i=0;i<routes.length;i+=4){
  await Promise.all(routes.slice(i,i+4).map(async route=>{
   const url='https://ziontechgroup.com'+route+'?recommendation_check='+Date.now();
   const r=await fetch(url,{signal:AbortSignal.timeout(20000),headers:{'Cache-Control':'no-cache'}});
   assert.equal(r.status,200,route+' HTTP '+r.status);
   const html=await r.text();assert(html.length>100&&/<html\b/i.test(html),route+' is not a usable HTML destination');
   assert(!/<title[^>]*>[^<]*(?:404|not found)[^<]*<\/title>/i.test(html),route+' appears to be a soft 404');
   console.log('PASS recommended destination '+route);passed++;
  }));
 }
 console.log(passed+' Discovery recommendation destinations available; GET only, no email, no production-readiness certification.');
};
if(require.main===module)module.exports().catch(e=>{console.error(e);process.exitCode=1;});
