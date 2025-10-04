<<<<<<< HEAD
const { execSync } = require('child_process');

exports.config = {
  schedule: '*/1 * * * *', // every minute
};

exports.handler = async function () {
  try {
    execSync(
      'node automation/advanced-git-sync.cjs || node automation/git-sync.cjs || true',
      { stdio: 'inherit', shell: true },
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, task: 'ultrafast-git-sync' }),
    };
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: false, error: String(e) }),
    };
  }
};
=======
const { execSync } = require('child_process'); exports.config = {' schedule: '*/1 * * * *' // every minute }; exports.handler = async function() { try {' execSync('node automation/advanced-git-sync.cjs || node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });' return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'ultrafast-git-sync' }) }; } catch (e) { return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) }; } };'
>>>>>>> b64650e00461d09eaf1ec492cc713ff355215146
