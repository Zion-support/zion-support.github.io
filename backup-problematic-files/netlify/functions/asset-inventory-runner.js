
<<<<<<< HEAD
=======


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status
  }
  logStep('assets:inventory', () => runNode('automation/asset-inventory.cjs'));
<<<<<<< HEAD
logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
=======
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));




  return { statusCode: 200, body: logs.join('\n') };
};function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '....', relPath)
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
  return { status: res.status |0, stdout: res.stdout |'', stderr: res.stderr |'' }
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
  logStep('assets:inventory', () => runNode('automation/asset-inventory.cjs'))
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'))
  return { statusCode: 200, body: logs.join('\n') }
},



>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
