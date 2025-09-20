const path = require('path');
const { spawnSync } = require('child_process');
function runNode(relPath, args = []) {
<<<<<<< HEAD
  const abs = path.resolve(__dirname, '....', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
}

exports.config = {
  schedule: '*/30 * * * *'};
=======
  const abs = path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
exports.config = {
  schedule: '*/30 * * * *'
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
exports.handler = async () => {
  const logs = [];
  function step(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const res = fn();
    if (res.stdout) logs.push(res.stdout);
    if (res.stderr) logs.push(res.stderr);
<<<<<<< HEAD
    logs.push(`exit=${res.status || 0}`);
    return res.status || 0
  }

  step('components:catalog', () => runNode('automation/components-catalog.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
  return { statusCode: 200, body: logs.join('\n') }
};
=======
    logs.push(`exit=${res.status |0}`);
    return res.status |0;
  }
  step('components:catalog', () =>
    runNode('automation/components-catalog.cjs')
  );
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
  return { statusCode: 200, body: logs.join('\n') }
};  step('components:catalog', () => runNode('automation/components-catalog.cjs'))
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'))
  return { statusCode: 200, body: logs.join('\n') }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
