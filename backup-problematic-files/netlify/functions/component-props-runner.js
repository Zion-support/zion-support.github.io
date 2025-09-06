const path = require('path'
const { spawnSync } = require('child_process'
  const abs = path.resolve(__dirname, '....'
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: any
  return { status: res.status || 0, stdout: res.stdout || '', stderr: any
  logStep('components:generate-docs', () => runNode('automation/
  logStep('git:sync', () => runNode('automation/
    runNode('automation/
  logStep('git:sync', () => runNode('automation/
  logStep('components:generate-docs', () => runNode('automation/
  logStep('git:sync', () => runNode('automation/