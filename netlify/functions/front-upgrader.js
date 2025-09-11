const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
<<<<<<< HEAD
  schedule: '0 */4 * * *', // every 4 hours
=======
  schedule: '*/45 * * * *', // every 45 minutes
>>>>>>> origin/chore/futuristic-home-and-netlify-automations
};

exports.handler = async () => {
  const logs = [];
<<<<<<< HEAD
  function logStep(name, fn) {
=======
  const step = (name, fn) => {
>>>>>>> origin/chore/futuristic-home-and-netlify-automations
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
<<<<<<< HEAD
  }

  logStep('front-hub-upgrader', () => runNode('automation/front-hub-upgrader.cjs'));
=======
  };

  step('front-page-upgrader', () => runNode('automation/front-page-upgrader.cjs'));
>>>>>>> origin/chore/futuristic-home-and-netlify-automations

  return { statusCode: 200, body: logs.join('\n') };
};