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
exports.config = { schedule: '0 */6 * * *' }

=======
    stdio: 'pipe'
    encoding: 'utf8'
  });
  return {
    status: res.status |0
    stdout: res.stdout |''
    stderr: res.stderr |''
  }
exports.config = { schedule: '0 */6 * * *' }

>>>>>>> origin/cursor/delete-old-data-records-6bba
exports.handler = async () => {
  const logs = [];
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
<<<<<<< HEAD

    if (stderr) logs.push(stderr);`;
    logs.push(`exit=${status}`);

    return status;

=======
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);

    return status;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  step('og-images:generate', () =>
    runNode('automation/og-image-generator.cjs')
  );
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
<<<<<<< HEAD

  // TODO: Implement
    statusCode: 200;,
  headers: { 'content-type': 'text/plain' }
    body: logs.join('\n')




=======
  return {
    statusCode: 200
    headers: { 'content-type': 'text/plain' }
    body: logs.join('\n')
  }
};function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '....', relPath)
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
  return { status: res.status |0, stdout: res.stdout |'', stderr: res.stderr |'' }
}
exports.config = { schedule: '0 */6 * * *' }
exports.handler = async () => {
  const logs = []
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`)
    const { status, stdout, stderr } = fn()
    if (stdout) logs.push(stdout)
    if (stderr) logs.push(stderr)
    logs.push(`exit=${status}`)
    return status
  }
  step('og-images:generate', () => runNode('automation/og-image-generator.cjs'))
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'))
  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
