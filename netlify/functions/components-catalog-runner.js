const path = require($2);
const { spawnSync } = require($2);
function runNode(relPath, args = []) {
  const abs = path.resolve($2);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
}

exports.config = $2;
exports.handler = $2;
  function step(name, fn) {
    logs.push($2);
    const res = fn($2);
    if (res.stdout) logs.push($2);
    if (res.stderr) logs.push($2);
    logs.push($2);
    return res.status || 0
  }

  step('components:catalog', () => runNode('automation/components-catalog.cjs')),
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),
  return { statusCode: 200, body: logs.join('\n') }
},