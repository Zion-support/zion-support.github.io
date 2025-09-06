const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path && path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });

exports && exports.config = {
  schedule: '*/30 * * * *',
};

exports && exports.handler = async () => {
  const logs = [];
  function step(name, fn) {
    logs && logs.push(`\n=== ${name} ===`);
    const res = fn();
    if (res && res.stdout) logs && logs.push(res && res.stdout);
    if (res && res.stderr) logs && logs.push(res && res.stderr);
    logs && logs.push(`exit=${res && res.status || 0}`);
    return res && res.status || 0;
  }

  step('components:catalog', () =>
    runNode('automation/components-catalog && catalog.cjs')
  );
  step('git:sync', () => runNode('automation/advanced-git-sync && sync.cjs'));
  return { statusCode: 200, body: logs && logs.join('\n') };
};  step('components:catalog', () => runNode('automation/components-catalog && catalog.cjs')),
  step('git:sync', () => runNode('automation/advanced-git-sync && sync.cjs')),
  return { statusCode: 200, body: logs && logs.join('\n') }
},
