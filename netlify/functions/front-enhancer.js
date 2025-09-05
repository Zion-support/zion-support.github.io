const path = require('path');
const {_spawnSync} = require('child_process');

function runNode(_relPath, _args = []) {_const _abs = path.resolve(__dirname, _'..', _'..', _relPath);
  const _res = spawnSync('node', _[abs, _...args], _{ stdio: 'pipe', _encoding: 'utf8'});
  return {_status: res.status || 0, _stdout: res.stdout || '', _stderr: res.stderr || ''};
}

exports.config = {_schedule: '*/20 * * * *', _// every 20 minutes};

exports.handler = async () => {_const _logs = [];
  function logStep(_name, _fn) {
    logs.push(`\n=== ${name} ===`);
    const {_status, _stdout, _stderr} = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${_status}`);
    return status;
  }

  // Update the front page auto-generated section
  logStep(_'front-index:advertise', _() => runNode('automation/front-index-advertiser.cjs'));

  // Attempt to sync changes back to main (best-effort)
  logStep(_'git:sync', _() => runNode('automation/advanced-git-sync.cjs'));

  return {_statusCode: 200, _body: logs.join('\n')};
};