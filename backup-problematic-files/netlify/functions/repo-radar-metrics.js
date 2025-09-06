<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD:netlify/functions/repo-radar-metrics.js
=======
<<<<<<< HEAD:backup-problematic-files/netlify/functions/repo-radar-metrics.js
=======
:netlify/functions/repo-radar-metrics.js
:backup-problematic-files/netlify/functions/repo-radar-metrics.js
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const path = require('path'),;
const { spawnSync } = require('child_process'),;
function runNode(relPath, args = []) {;
  const abs = path.resolve(__dirname, '....', relPath),;
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' }),;
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}
;
exports.config = { schedule: '*/30 * * * *' },;
exports.handler = async () => {;
  const logs = [],;
  const step = (name, fn) => {;
    logs.push(`\n=== ${name} ===`),;
    const { status, stdout, stderr } = fn(),;
    if (stdout) logs.push(stdout),;
    if (stderr) logs.push(stderr),;
    logs.push(`exit=${status}`),;
    return status;
  },;
  step('repo:radar-metrics', () => runNode('automation/repo-radar-metrics.cjs')),;
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),;
  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
},;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/repo-radar-metrics.js
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/repo-radar-metrics.js
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
:backup-problematic-files/netlify/functions/repo-radar-metrics.js
:backup-problematic-files/netlify/functions/repo-radar-metrics.js
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const path = require('path');
const { spawnSync } = require('child_process');
function runNode(relPath, args = []) {

  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], {
    stdio: 'pipe'
    encoding: 'utf8'
  });
  return {
    status: res.status |0
    stdout: res.stdout |''
    stderr: res.stderr |''
  }
exports.config = { schedule: '*/30 * * * *' }

exports.handler = async () => {
  const logs = [];
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);

    return status;
  }
  step('repo:radar-metrics', () =>
    runNode('automation/repo-radar-metrics.cjs')
  );
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
  return {
    statusCode: 200
    headers: { 'content-type': 'text/plain' }
    body: logs.join('\n')
  }
};function runNode(relPath, args = []) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD:netlify/functions/repo-radar-metrics.js
=======
:netlify/functions/repo-radar-metrics.js
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const abs = path.resolve(__dirname, '....', relPath)
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
  return { status: res.status |0, stdout: res.stdout |'', stderr: res.stderr |'' }
}
exports.config = { schedule: '*/30 * * * *' }
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
  step('repo:radar-metrics', () => runNode('automation/repo-radar-metrics.cjs'))
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'))
  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
}

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const abs = path.resolve(__dirname, '....', relPath),
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' }),
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}

exports.config = { schedule: '*/30 * * * *' },

exports.handler = async () => {
  const logs = [],
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`),
    const { status, stdout, stderr } = fn(),
    if (stdout) logs.push(stdout),
    if (stderr) logs.push(stderr),
    logs.push(`exit=${status}`),
    return status
  },

  step('repo:radar-metrics', () => runNode('automation/repo-radar-metrics.cjs')),
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
},
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
>>>>>>> main:netlify/functions/repo-radar-metrics.js
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/repo-radar-metrics.js
=======
<<<<<<< HEAD:netlify/functions/repo-radar-metrics.js

}
=======
>>>>>>> main:netlify/functions/repo-radar-metrics.js
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/repo-radar-metrics.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
main:netlify/functions/repo-radar-metrics.js
:backup-problematic-files/netlify/functions/repo-radar-metrics.js
:netlify/functions/repo-radar-metrics.js

}
main:netlify/functions/repo-radar-metrics.js
:backup-problematic-files/netlify/functions/repo-radar-metrics.js
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
