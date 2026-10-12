'use strict';
const fs=require('node:fs'),crypto=require('node:crypto'),assert=require('node:assert/strict'),release=require('./render-ticket-support.cjs');
const expected={'public/ai-ticket-triage/index.html':'f03fc914523f8e9e6b9b3643d697e2e98004a8ab','public/ai-ticket-sentinel/index.html':'512f07bd394a68aecca6c952fae666c5b95643f8'};
function preflight(){for(const [file,sha] of Object.entries(expected)){const data=fs.readFileSync(file),actual=crypto.createHash('sha1').update('blob '+data.length+'\0').update(data).digest('hex');assert.equal(actual,sha,'Source changed; explicitly review before updating approved renderer: '+file);}}
if(require.main===module){const assertions=release.selfTest();if(process.argv.includes('--live'))release.live().then(r=>console.log(JSON.stringify({...r,offlineAssertions:assertions}))).catch(e=>{console.error(e);process.exitCode=1;});else{preflight();console.log(JSON.stringify({release:release.RELEASE,rendered:release.render(process.argv[2]||'out'),offlineAssertions:assertions}));}}
module.exports={preflight,expected};
