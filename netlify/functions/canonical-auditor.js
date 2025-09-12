const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

<<<<<<< HEAD
exports.config = { schedule: '0 3 * * *' };
=======
exports.config = {
  schedule: '*/60 * * * *',
};
>>>>>>> origin/content/blog-sept12

exports.handler = async () => {
  const logs = [];
  function step(name, rel, args = []) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

<<<<<<< HEAD
  step('orphans:find', 'automation/orphan-pages-finder.cjs');
=======
  step('canonical:audit', 'automation/canonical-auditor.cjs');
>>>>>>> origin/content/blog-sept12
  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: logs.join('\n') };
};
