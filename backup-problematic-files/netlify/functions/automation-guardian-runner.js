const { spawnSync } = require('child_process'
  const abs = path.resolve(__dirname, '....'
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: any
  return { status: res.status |0, stdout: res.stdout |'', stderr: any
const path = require('path'
const { spawnSync } = require('child_process'
  const abs = path.resolve(__dirname, '....'
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: any
  return { status: res.status || 0, stdout: res.stdout || '', stderr: any
  logStep('sitemap:generate', () => runNode('scripts/
    logStep('search:index', () => runNode('scripts/
  logStep('git:sync', () => runNode('automation/
  logStep('automation:guardian', () => runNode('automation/
  logStep('git:sync', () => runNode('automation/
  schedule: any
  logStep('sitemap:generate', () => runNode('scripts/
    logStep('search:index', () => runNode('scripts/
  logStep('git:sync', () => runNode('automation/
  logStep('automation:guardian', () => runNode('automation/
  logStep('git:sync', () => runNode('automation/