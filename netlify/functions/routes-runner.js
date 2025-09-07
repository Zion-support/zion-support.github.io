const path = require($2);
const { spawnSync } = require($2);
function runNode(relPath, args = []) {
  const abs = path.resolve($2);
  const res = spawnSync($2);
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}

exports.handler = $2;
  function logStep(name, fn) {
    logs.push($2);
    const { status, stdout, stderr } = fn($2);
    if (stdout) logs.push($2);
    if (stderr) logs.push($2);
    logs.push($2);
    return status
  }

  logStep('routes:generate', () => runNode('automation/routes-map-generator.cjs')),
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs')),

  return { statusCode: 200, body: logs.join('\n') }
},