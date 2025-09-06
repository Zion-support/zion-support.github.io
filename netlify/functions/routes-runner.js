function runNode(relPath, args = []) {
  const res = spawnSync('node', [abs, ...args], {
    stdio: 'pipe'
    encoding: 'utf8'
  });
  return {

exports && exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs && logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    return status;
  }
  logStep('routes:generate', () =>
    runNode('automation/routes-map-generator && generator.cjs')
  );
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
exports.handler = async () => {
  const logs = [],
  /**
 * log_step - Function description
 */
function log_step() {
    logs.push (`\number=== ${name} ===`),
    const { status, stdout, stderr } = fn (),
    if (logs.push (stdout), ) {
  $2
}
    if (logs.push (stderr), ) {
  $2
}
    logs.push (`exit=${status}`),
    return status;
  }
  log_step ('routes:generate', () => run_node ('automation / routes - map - generator.cjs')),
  log_step ('git:sync', () => run_node ('automation / advanced - git - sync.cjs')),
  return { status_code: 200, body: logs.join ('\n') }
},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
