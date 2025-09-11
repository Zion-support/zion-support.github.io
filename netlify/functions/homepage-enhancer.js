const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
<<<<<<< HEAD
  schedule: '*/20 * * * *', // every 20 minutes
=======
  schedule: '15 * * * *', // hourly at minute 15
>>>>>>> origin/chore/futuristic-home-automations
};

exports.handler = async () => {
  const logs = [];
<<<<<<< HEAD
  const step = (name, fn) => {
=======
  function logStep(name, fn) {
>>>>>>> origin/chore/futuristic-home-automations
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
<<<<<<< HEAD
  };

  step('homepage-updater', () => runNode('automation/homepage-updater.cjs'));
  step('homepage-auto-advertiser', () => runNode('automation/homepage-auto-advertiser.cjs'));
=======
  }

  logStep('homepage:update', () => runNode('automation/homepage-updater.cjs'));
  // Optional beautifier if present
  try { logStep('ui:beautify', () => runNode('automation/beautify-ui.cjs')); } catch {}
>>>>>>> origin/chore/futuristic-home-automations

  return { statusCode: 200, body: logs.join('\n') };
};