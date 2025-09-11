
function runNode(relPath, args = []) {

exports.handler = async () => {
  const abs = path && path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], {
    stdio: 'pipe'
    encoding: 'utf8'
  });
  return {
    status: res && res.status || 0,
    stdout: res && res.stdout || '',
    stderr: res && res.stderr || '',
  };
exports && exports.config = {
  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
  const abs = path.resolve(__dirname, '....', relPath),