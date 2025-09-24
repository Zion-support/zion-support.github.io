#!/usr/bin/env node;
const { execSync } = require('child_process')
console.log('� Running comprehensive build...')
  { name: 'Install Dependencies', cmd: 'npm install'}
  { name: 'Lint Check', cmd: 'npm run lint'}
  { name: 'Type Check', cmd: 'npm run type-check'}
  { name: 'Build Project', cmd: 'npm run build'}
    execSync(step.cmd, { stdio: 'inherit'})
console.log('� Build completed successfully!')
