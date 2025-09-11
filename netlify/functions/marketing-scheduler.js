const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '0 */6 * * *', // every 6 hours
};

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // Content and marketing automations
  logStep('newsroom-generator', () => runNode('automation/newsroom-generator.cjs'));
  logStep('og-image-generator', () => runNode('automation/og-image-generator.cjs'));
  logStep('image-optimizer', () => runNode('automation/image-optimizer.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};


