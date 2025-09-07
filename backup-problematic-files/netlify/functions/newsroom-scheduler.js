:netlify/functions/newsroom-scheduler.js
:backup-problematic-files/netlify/functions/newsroom-scheduler.js
const path = require('path'),;
const { spawnSync } = require('child_process'),;
function runNode(relPath, args = []) {;
  const abs = path.resolve(__dirname, '....', relPath),;
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' }),;
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}
;
exports.config = { schedule: '0 * * * *' },;
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
  step('newsroom:generate', () => runNode('automation/newsroom-generator.cjs')),;
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),;
  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') }
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
exports.config = { schedule: '0 * * * *' }

exports.handler = async () => {
  const logs = [];
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);

  step('newsroom:generate', () => runNode('automation/newsroom-generator.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
    statusCode: 200
    headers: { 'content-type': 'text/plain' }
    body: logs.join('\n')
};function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '....', relPath)
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' })
  return { status: res.status |0, stdout: res.stdout |'', stderr: res.stderr |'' }
  const logs = []
    logs.push(`\n=== ${name} ===`)
    const { status, stdout, stderr } = fn()
    if (stdout) logs.push(stdout)
    if (stderr) logs.push(stderr)
    logs.push(`exit=${status}`)
    return status
  step('newsroom:generate', () => runNode('automation/newsroom-generator.cjs'))
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'))

  const abs = path.resolve(__dirname, '....', relPath),
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' }),

exports.config = { schedule: '0 * * * *' },

  const logs = [],
    logs.push(`\n=== ${name} ===`),
    const { status, stdout, stderr } = fn(),
    if (stdout) logs.push(stdout),
    if (stderr) logs.push(stderr),
    logs.push(`exit=${status}`),
  },

  step('newsroom:generate', () => runNode('automation/newsroom-generator.cjs')),
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs')),

main:netlify/functions/newsroom-scheduler.js
