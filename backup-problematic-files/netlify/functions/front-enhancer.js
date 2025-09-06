<<<<<<< HEAD
=======
<<<<<<< HEAD:netlify/functions/front-enhancer.js
=======
<<<<<<< HEAD:backup-problematic-files/netlify/functions/front-enhancer.js
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/front-enhancer.js
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/front-enhancer.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  return { statusCode: 200, body: logs.join('\n') }
};function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '....', relPath)
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
  return { status: res.status |0, stdout: res.stdout |'', stderr: res.stderr |'' }
}
exports.config = {
  schedule: '*/20 * * * *', // every 20 minutes
<<<<<<< HEAD
}
exports.handler = async () => {
  const logs = []
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`)
    const { status, stdout, stderr } = fn()
    if (stdout) logs.push(stdout)
    if (stderr) logs.push(stderr)
    logs.push(`exit=${status}`)

    return status
  }
  // Update the front page auto-generated section

  logStep('front-index:advertise', () => runNode('automation/front-index-advertiser.cjs'))
  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'))
  return { statusCode: 200, body: logs.join('\n') }
}


}
=======
},
<<<<<<< HEAD
=======



  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs')),

  return { statusCode: 200, body: logs.join('\n') }
},
<<<<<<< HEAD:netlify/functions/front-enhancer.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

}
=======
>>>>>>> main:netlify/functions/front-enhancer.js
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/front-enhancer.js
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/front-enhancer.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
