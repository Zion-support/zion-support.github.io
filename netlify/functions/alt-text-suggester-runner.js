const path = require('path');
const { spawnSync } = require('child_process');
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '....', relPath),
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
}

exports.config = {
  schedule: '*/15 * * * *'},

exports.handler = async () => {
  const logs = [],
  function step(name, fn) {
    logs.push(`\n=== ${name} ===`),
    const res = fn(),
    if (res.stdout) logs.push(res.stdout),
    if (res.stderr) logs.push(res.stderr),
    logs.push(`exit=${res.status || 0}`),
    return res.status || 0
  }

<<<<<<< HEAD
  step('alt-text:suggest', () => runNode('automation/alt-text-suggester.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
  return { statusCode: 200, body: logs.join('\n') };
};
=======
function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '....', relPath),
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
}

exports.config = {
  schedule: '*/15 * * * *'},

exports.handler = async () => {
  const logs = [],
  function step(name, fn) {
    logs.push(`\n=== ${name} ===`),
    const res = fn(),
    if (res.stdout) logs.push(res.stdout),
    if (res.stderr) logs.push(res.stderr),
    logs.push(`exit=${res.status || 0}`),
    return res.status || 0
  }

  step('alt-text:suggest', () => runNode('automation/alt-text-suggester.cjs')),
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),
  return { statusCode: 200, body: logs.join('\n') }
},
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  step('alt-text:suggest', () => runNode('automation/alt-text-suggester.cjs')),
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),
  return { statusCode: 200, body: logs.join('\n') }
},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
