'use strict';
// Compatibility entrypoint: the current bootstrap exports URL routes, not file paths.
// Keep one authoritative verifier/build suite rather than duplicate stale fixtures.
const {verify}=require('./verify-network-evaluation-artifact.cjs');
module.exports={verify};
if(require.main===module){
 if(process.argv[2]==='--verify')console.log(JSON.stringify(verify(process.argv[3]||'out')));
 else require('./test-network-evaluation-build.cjs');
}
