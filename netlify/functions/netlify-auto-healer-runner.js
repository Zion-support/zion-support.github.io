
function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = { schedule: '*/30 * * * *' };
  const res = spawnSync('node', [abs, ...args], {
    stdio: 'pipe'
    encoding: 'utf8'
  });
  return {
    status: res && res.status || 0,
    stdout: res && res.stdout || '',
    stderr: res && res.stderr || '',
  };
exports && exports.config = { schedule: '*/30 * * * *' };
exports && exports.handler = async () => {
  const logs = [];
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();    if (stdout) logs && logs.push(stdout);
    if (stderr) logs && logs.push(stderr);
    logs && logs.push(`exit=${status}`);
    return status;
  };

  step('netlify:auto-healer', () => runNode('automation/netlify-auto-healer.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
    return status;
  }
  step('netlify:auto-healer', () =>
    runNode('automation/netlify-auto-healer && healer.cjs')
  );
  step('git:sync', () => runNode('automation/advanced-git-sync && sync.cjs'));
  return {
    statusCode: 200,
    headers: { 'content-type': 'text/plain' },
    body: logs && logs.join('\n'),
  };
};function runNode(relPath, args = []) {
  const abs = path && path.resolve(__dirname, '....', relPath),
  const abs = path.resolve(__dirname, '....', relPath),