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

exports.config = { schedule: '*/10 * * * *' };

exports.handler = async () => {
  const logs = [];
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  };

  step('automation-guardian', () =>
    runNode('automation/automation-guardian-10min.cjs')
  );
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return {
    statusCode: 200,
    headers: { 'content-type': 'text/plain' },
    body: logs.join('\n'),
  };
<<<<<<< HEAD
};
=======
};
=======
function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '....', relPath),
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' }),
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}

exports.config = { schedule: '*/10 * * * *' },

exports.handler = async () => {
  const logs = [],
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`),
    const { status, stdout, stderr } = fn(),
    if (stdout) logs.push(stdout),
    if (stderr) logs.push(stderr),
    logs.push(`exit=${status}`),
    return status
  },

  step('automation-guardian', () => runNode('automation/automation-guardian-10min.cjs')),
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
},
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
