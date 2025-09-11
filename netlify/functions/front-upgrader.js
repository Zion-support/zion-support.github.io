const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
exports.handler = async () => {
  const logs = [];
<<<<<<< HEAD
  function logStep(name, fn) {
=======
  const step = (name, fn) => {    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  logStep('front-hub-upgrader', () => runNode('automation/front-hub-upgrader.cjs'));
=======
  };

  step('front-page-upgrader', () => runNode('automation/front-page-upgrader.cjs'));
  return { statusCode: 200, body: logs.join('\n') };
};