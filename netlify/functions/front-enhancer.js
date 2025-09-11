const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

<<<<<<<< HEAD:netlify/functions/front-enhancer.js
exports.config = {
  schedule: '*/20 * * * *', // every 20 minutes
};

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
========
exports.config = { schedule: '0 3 * * *' };

exports.handler = async () => {
  const logs = [];
  function step(name, rel, args = []) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
>>>>>>>> origin/backup-critical-fixes-20250824-224408:netlify/functions/orphan-pages-runner.js
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

<<<<<<<< HEAD:netlify/functions/front-enhancer.js
  // Update the front page auto-generated section
  logStep('front-index:advertise', () => runNode('automation/front-index-advertiser.cjs'));

  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
========
  step('orphans:find', 'automation/orphan-pages-finder.cjs');
  step('git:sync', 'automation/advanced-git-sync.cjs');
>>>>>>>> origin/backup-critical-fixes-20250824-224408:netlify/functions/orphan-pages-runner.js

  return { statusCode: 200, body: logs.join('\n') };
};