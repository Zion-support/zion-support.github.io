const path = require('path');
const { spawnSync } = require('child_process');

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

exports.config = { schedule: '15 */12 * * *' };

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

  step('security:audit', () => runNode('automation/security-audit.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return {
    statusCode: 200,
    headers: { 'content-type': 'text/plain' },
    body: logs.join('\n'),
  };
};
=======
  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
