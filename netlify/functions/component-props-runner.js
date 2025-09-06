const path = require('path');
const { spawnSync } = require('child_process');
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '....', relPath),
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' }),
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}

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

  logStep('components:generate-docs', () => runNode('automation/component-props-docs.cjs')),
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs')),

<<<<<<< HEAD
  return { statusCode: 200, body: logs.join('\n') };
};
=======
function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '....', relPath),
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' }),
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}

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

  logStep('components:generate-docs', () => runNode('automation/component-props-docs.cjs')),
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs')),

  return { statusCode: 200, body: logs.join('\n') }
},
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return { statusCode: 200, body: logs.join('\n') }
},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
