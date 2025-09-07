<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
:netlify/functions/llm-content-curator.js
:backup-problematic-files/netlify/functions/llm-content-curator.js
const path = require('path'),;
const { spawnSync } = require('child_process'),;
function runNode(relPath, args = []) {;
  const abs = path.resolve(__dirname, '....', relPath),;
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' }),;
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}
;
exports.config = { schedule: '0 */3 * * *' },;
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
  step('content:curate', () => runNode('automation/llm-content-curator.cjs')),;
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),;
  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
},;
:backup-problematic-files/netlify/functions/llm-content-curator.js
:backup-problematic-files/netlify/functions/llm-content-curator.js
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
const path = require('path');
const { spawnSync } = require('child_process');
function runNode(relPath, args = []) {

  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], {
<<<<<<< HEAD
    stdio: 'pipe'
    encoding: 'utf8'
  });
  return {
    status: res.status |0
    stdout: res.stdout |''
    stderr: res.stderr |''
  }
exports.config = { schedule: '0 */3 * * *' }

=======
    stdio: 'pipe,
  encoding: 'utf8)
  });
  return {
  // TODO: Implement
}
    status: res.status |0;,
  stdout: res.stdout |
    stderr: res.stderr |
exports.config = { schedule: '0 */3 * * *' }
>>>>>>> merged-prs-20250907-203621
exports.handler = async () => {
  const logs = [];
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
<<<<<<< HEAD
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);

    return status;
  }
  step('content:curate', () => runNode('automation/llm-content-curator.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
  return {
    statusCode: 200
    headers: { 'content-type': 'text/plain' }
    body: logs.join('\n')
  }
};function runNode(relPath, args = []) {
=======
    if (stderr) logs.push(stderr);`;
    logs.push(`exit=${status}`);

    return status;
  step('content:curate', () => runNode('automation/llm-content-curator.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
  // TODO: Implement
    statusCode: 200;,
  headers: { 'content-type': 'text/plain' }
    body: logs.join('\n')
<<<<<<< HEAD
};function runNode(relPath, args = []) {
=======
  }
};function runNode(relPath, args = []) {
<<<<<<< HEAD
:netlify/functions/llm-content-curator.js
>>>>>>> merged-prs-20250907-203621
  const abs = path.resolve(__dirname, '....', relPath)
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
  return { status: res.status |0, stdout: res.stdout |'', stderr: res.stderr |'' }
}
exports.config = { schedule: '0 */3 * * *' }
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
  step('content:curate', () => runNode('automation/llm-content-curator.cjs'))
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'))
  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
<<<<<<< HEAD
}
=======
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const abs = path.resolve(__dirname, '....', relPath),
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' }),
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}

exports.config = { schedule: '0 */3 * * *' },

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

  step('content:curate', () => runNode('automation/llm-content-curator.cjs')),
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
},

<<<<<<< HEAD

main:netlify/functions/llm-content-curator.js
:backup-problematic-files/netlify/functions/llm-content-curator.js
:netlify/functions/llm-content-curator.js

}
main:netlify/functions/llm-content-curator.js
:backup-problematic-files/netlify/functions/llm-content-curator.js
=======
=======


>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/llm-content-curator.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
