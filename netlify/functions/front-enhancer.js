const path = require('path');
const { spawnSync } = require('child_process');
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], {
    stdio: 'pipe',
    encoding: 'utf8',
  });
  return {
    status: res.status || 0,
    stdout: res.stdout || '',
    stderr: res.stderr || '',
  };

exports.config = {
  schedule: '*/20 * * * *', // every 20 minutes
<<<<<<< HEAD
=======
},

exports.handler = async () => {
  const logs = [],
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`),
    const { status, stdout, stderr } = fn(),
    if (stdout) logs.push(stdout),
    if (stderr) logs.push(stderr),
    logs.push(`exit=${status}`),
    return status
  }

  // Update the front page auto-generated section
  logStep('front-index:advertise', () => runNode('automation/front-index-advertiser.cjs')),

  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs')),

<<<<<<< HEAD
  return { statusCode: 200, body: logs.join('\n') };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};

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
  return { statusCode: 200, body: logs.join('\n') };
};
=======
  return { statusCode: 200, body: logs.join('\n') }
},
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return { statusCode: 200, body: logs.join('\n') }
},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
