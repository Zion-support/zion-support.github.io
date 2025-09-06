

=======
:netlify/functions/components-catalog-runner.js
:backup-problematic-files/netlify/functions/components-catalog-runner.js
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
:backup-problematic-files/netlify/functions/components-catalog-runner.js
:backup-problematic-files/netlify/functions/components-catalog-runner.js
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
