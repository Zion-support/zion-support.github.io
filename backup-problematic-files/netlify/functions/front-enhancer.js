<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const path = require('path');
const { spawnSync } = require('child_process');
function runNode(relPath, args = []) {

  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], {
<<<<<<< HEAD
    stdio: 'pipe,
  encoding: 'utf8)
  });
  return {
  // TODO: Implement
}
    status: res.status |0;,
  stdout: res.stdout |
    stderr: res.stderr |
exports.config = {
  schedule: '*/20 * * * *', // every 20 minutes;
=======
    stdio: 'pipe'
    encoding: 'utf8'
  });
  return {
    status: res.status |0
    stdout: res.stdout |''
    stderr: res.stderr |''
  }
exports.config = {
  schedule: '*/20 * * * *', // every 20 minutes
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
<<<<<<< HEAD
    if (stderr) logs.push(stderr);`;
    logs.push(`exit=${status}`);

    return status;
  // Update the front page auto-generated section;

=======
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);

    return status;
  }
  // Update the front page auto-generated section
>>>>>>> origin/cursor/delete-old-data-records-6bba
  logStep('front-index:advertise', () =>
    runNode('automation/front-index-advertiser.cjs')
  );
  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
<<<<<<< HEAD




=======
  return { statusCode: 200, body: logs.join('\n') }
};function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '....', relPath)
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
  return { status: res.status |0, stdout: res.stdout |'', stderr: res.stderr |'' }
}
exports.config = {
  schedule: '*/20 * * * *', // every 20 minutes
}
exports.handler = async () => {
  const logs = []
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`)
    const { status, stdout, stderr } = fn()
    if (stdout) logs.push(stdout)
    if (stderr) logs.push(stderr)
    logs.push(`exit=${status}`)

    return status
  }
  // Update the front page auto-generated section

  logStep('front-index:advertise', () => runNode('automation/front-index-advertiser.cjs'))
  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'))
  return { statusCode: 200, body: logs.join('\n') }
}

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
