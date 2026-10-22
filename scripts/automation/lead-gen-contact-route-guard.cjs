'use strict';
// Native Node; GET-only contact-route health check. No Gmail, secrets or issue mutations.
const ORIGIN='https://ziontechgroup.com';
const PATH='/contact/';

function buildConfig(env=process.env) {
  const base=new URL((env.LEAD_GEN_BASE_URL||ORIGIN).trim());
  if(base.origin!==ORIGIN || base.username || base.password || base.search ||
     base.hash || !['/',''].includes(base.pathname)) throw Error('invalid-public-base');
  const email=(env.LEAD_GEN_EXPECTED_EMAIL||'').trim().toLowerCase();
  if(!/^[a-z0-9._%+-]+@ziontechgroup\.com$/.test(email)) throw Error('invalid-contact');
  return {url:new URL(PATH,base).href,email};
}
function decodeEmail(html) {
  return html.toLowerCase().replace(/&#(?:0*64|x0*40);?/g,'@').replace(/%40/gi,'@');
}
async function probeContact(config,fetchFn=globalThis.fetch) {
  const status={result:'failed',path:PATH,httpStatus:null,emailVisible:false,mailtoPresent:false,reason:'unknown'};
  const abort=new AbortController();
  const timer=setTimeout(()=>abort.abort(),12000);
  try {
    const response=await fetchFn(config.url,{method:'GET',redirect:'follow',signal:abort.signal,
      headers:{Accept:'text/html','User-Agent':'ZionContactRouteWatch/1.0'}});
    status.httpStatus=response.status;
    let final;
    try{final=new URL(response.url||config.url);}catch{status.reason='invalid-redirect';return status;}
    if(final.origin!==ORIGIN||!['/contact','/contact/'].includes(final.pathname)||
       final.search||final.hash){status.reason='off-route-redirect';return status;}
    if(response.status!==200){status.reason='non-200';return status;}
    if(!/text\/html/i.test(response.headers?.get?.('content-type')||'')){
      status.reason='not-html';return status;
    }
    const raw=await response.text();
    if(Buffer.byteLength(raw,'utf8')>1048576){status.reason='oversized-page';return status;}
    const html=decodeEmail(raw);
    status.emailVisible=html.includes(config.email);
    status.mailtoPresent=html.includes('mailto:'+config.email);
    if(!status.emailVisible){status.reason='missing-contact';return status;}
    status.result='healthy';
    status.reason=status.mailtoPresent?'verified':'email-visible-link-unverified';
    return status;
  }catch{status.reason='network-or-timeout';return status;}
  finally{clearTimeout(timer);}
}
async function main(){
  let config;
  try{config=buildConfig();}
  catch{console.error('Contact guard configuration invalid');process.exitCode=2;return;}
  const outcome=await probeContact(config);
  console.log(JSON.stringify(outcome));
  if(outcome.result!=='healthy') process.exitCode=1;
}
module.exports={buildConfig,decodeEmail,probeContact,main};
if(require.main===module)main();
