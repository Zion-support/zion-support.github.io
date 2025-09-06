

=======
:netlify/functions/front-enhancer.js
:backup-problematic-files/netlify/functions/front-enhancer.js
const path = require('path'),;
const { spawnSync } = require('child_process'),;
function runNode(relPath, args = []) {;
  const abs = path.resolve(__dirname, '....', relPath),;
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' }),;
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}
;
exports.config = {;
  schedule: '*/20 * * * *', // every 20 minutes;
},;
exports.handler = async () => {;
  const logs = [],;
  function logStep(name, fn) {;
    logs.push(`\n=== ${name} ===`),;
    const { status, stdout, stderr } = fn(),;
    if (stdout) logs.push(stdout),;
    if (stderr) logs.push(stderr),;
    logs.push(`exit=${status}`),;
    return status;
  }
;
  // Update the front page auto-generated section;
  logStep('front-index:advertise', () => runNode('automation/front-index-advertiser.cjs')),;
  // Attempt to sync changes back to main (best-effort);
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs')),;
  return { statusCode: 200, body: logs.join('\n') }
},;
:backup-problematic-files/netlify/functions/front-enhancer.js
:backup-problematic-files/netlify/functions/front-enhancer.js
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const path = require('path');
const { spawnSync } = require('child_process');
function runNode(relPath, args = []) {

  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], {
    stdio: 'pipe'
    encoding: 'utf8'
  });
  return {
    status: res.status |0
    stdout: res.stdout |''
    stderr: res.stderr |''
  }
exports.config = {
  schedule: '*/20 * * * *', // every 20 minutes
}

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);

    return status;
  }
  // Update the front page auto-generated section
  logStep('front-index:advertise', () =>
    runNode('automation/front-index-advertiser.cjs')
  );
  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159



  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs')),

  return { statusCode: 200, body: logs.join('\n') }
},
:netlify/functions/front-enhancer.js

}
main:netlify/functions/front-enhancer.js
:backup-problematic-files/netlify/functions/front-enhancer.js
:backup-problematic-files/netlify/functions/front-enhancer.js
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
