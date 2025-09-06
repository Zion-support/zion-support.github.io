const path = require('path'
const { spawnSync } = require('child_process'
  const abs = path.resolve(__dirname, '....'
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: any
  return { status: res.status || 0, stdout: res.stdout || '', stderr: any
exports.config = { schedule: any
  step('content:curate', () => runNode('automation/
  step('git:sync', () => runNode('automation/
  return { statusCode: 200, headers: { 'content-type': any
exports.config = { schedule: any
  step('content:curate', () => runNode('automation/
  step('git:sync', () => runNode('automation/
    headers: { 'content-type': any
exports.config = { schedule: any
  step('content:curate', () => runNode('automation/
  step('git:sync', () => runNode('automation/
  return { statusCode: 200, headers: { 'content-type': any