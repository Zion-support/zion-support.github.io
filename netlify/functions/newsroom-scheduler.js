const path = require('path');
const {_spawnSync} = require('child_process');

function runNode(_relPath, _args = []) {_const _abs = path.resolve(__dirname, _'..', _'..', _relPath);
  const _res = spawnSync('node', _[abs, _...args], _{ stdio: 'pipe', _encoding: 'utf8'});
  return {_status: res.status || 0, _stdout: res.stdout || '', _stderr: res.stderr || ''};
}

exports.config = {_schedule: '0 * * * *'};

exports.handler = async () => {_const _logs = [];
  const _step = (_name, _fn) => {
    logs.push(`\n=== ${name} ===`);
    const {_status, _stdout, _stderr} = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${_status}`);
    return status;
  };

  step(_'newsroom:generate', _() => runNode('automation/newsroom-generator.cjs'));
  step(_'git:sync', _() => runNode('automation/advanced-git-sync.cjs'));

  return {_statusCode: 200, _headers: { 'content-type': 'text/plain'}, body: logs.join('\n') };
};