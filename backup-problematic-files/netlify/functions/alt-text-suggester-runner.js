<<<<<<< HEAD


=======
<<<<<<< HEAD:netlify/functions/alt-text-suggester-runner.js
=======
<<<<<<< HEAD:backup-problematic-files/netlify/functions/alt-text-suggester-runner.js
const path = require('path'),;
const { spawnSync } = require('child_process'),;
function runNode(relPath, args = []) {;
  const abs = path.resolve(__dirname, '....', relPath),;
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
}
;
exports.config = {;
  schedule: '*/15 * * * *'},;
exports.handler = async () => {;
  const logs = [],;
  function step(name, fn) {;
    logs.push(`\n=== ${name} ===`),;
    const res = fn(),;
    if (res.stdout) logs.push(res.stdout),;
    if (res.stderr) logs.push(res.stderr),;
    logs.push(`exit=${res.status || 0}`),;
    return res.status || 0;
  }
;
  step('alt-text:suggest', () => runNode('automation/alt-text-suggester.cjs')),;
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),;
  return { statusCode: 200, body: logs.join('\n') }
},;
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/alt-text-suggester-runner.js
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/alt-text-suggester-runner.js
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const path = require('path');
const { spawnSync } = require('child_process');
function runNode(relPath, args = []) {

  const abs = path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
exports.config = {
  schedule: '*/15 * * * *'
}

exports.handler = async () => {
  const logs = [];
  function step(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const res = fn();
    if (res.stdout) logs.push(res.stdout);
    if (res.stderr) logs.push(res.stderr);

    logs.push(`exit=${res.status |0}`);
    return res.status |0;

  }
  step('alt-text:suggest', () => runNode('automation/alt-text-suggester.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
  return { statusCode: 200, body: logs.join('\n') }
<<<<<<< HEAD

},

=======


=======
<<<<<<< HEAD:netlify/functions/alt-text-suggester-runner.js

};  step('alt-text:suggest', () => runNode('automation/alt-text-suggester.cjs'))
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'))
  return { statusCode: 200, body: logs.join('\n') }
}

=======
},
<<<<<<< HEAD
>>>>>>> main:netlify/functions/alt-text-suggester-runner.js
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/netlify/functions/alt-text-suggester-runner.js
=======
<<<<<<< HEAD:netlify/functions/alt-text-suggester-runner.js
=======
>>>>>>> main:netlify/functions/alt-text-suggester-runner.js
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/alt-text-suggester-runner.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
