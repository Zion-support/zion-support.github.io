const path = require('path'
const { spawnSync } = require('child_process'
  const abs = path.resolve(__dirname, '....'
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: any
  step('components:catalog', () => runNode('automation/
  step('git:sync', () => runNode('automation/
  schedule: any
    runNode('automation/
  step('git:sync', () => runNode('automation/
  step('components:catalog', () => runNode('automation/
  step('git:sync', () => runNode('automation/