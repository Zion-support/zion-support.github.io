<<<<<<< HEAD:netlify/functions/components-catalog-runner.js
=======
<<<<<<< HEAD:backup-problematic-files/netlify/functions/components-catalog-runner.js
const path = require('path'),;
const { spawnSync } = require('child_process'),;
function runNode(relPath, args = []) {;
  const abs = path.resolve(__dirname, '....', relPath),;
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
}
;
exports.config = {;
  schedule: '*/30 * * * *'},;
exports.handler = async () => {;
  const logs = [],;
  function step(name, fn) {;
    logs.push(`\n=== ${name} ===`),;
    const res = fn(),;
    if (res.stdout) logs.push(res.stdout),;
    if (res.stderr) logs.push(res.stderr),;
    logs.push(`exit=${res.status || 0}`),;
    return res.status || 0;
  }
;
  step('components:catalog', () => runNode('automation/components-catalog.cjs')),;
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),;
  return { statusCode: 200, body: logs.join('\n') }
},;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/components-catalog-runner.js
const path = require('path');
const { spawnSync } = require('child_process');
function runNode(relPath, args = []) {

  const abs = path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
exports.config = {
  schedule: '*/30 * * * *'
}

exports.handler = async () => {
  const logs = [];
  function step(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const res = fn();
    if (res.stdout) logs.push(res.stdout);
    if (res.stderr) logs.push(res.stderr);

    logs.push(`exit=${res.status |0}`);
    return res.status |0;
  }
  step('components:catalog', () =>
    runNode('automation/components-catalog.cjs')
  );
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
  return { statusCode: 200, body: logs.join('\n') }
<<<<<<< HEAD:netlify/functions/components-catalog-runner.js
};  step('components:catalog', () => runNode('automation/components-catalog.cjs'))
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'))
  return { statusCode: 200, body: logs.join('\n') }
}

=======
},
>>>>>>> main:netlify/functions/components-catalog-runner.js
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/components-catalog-runner.js
