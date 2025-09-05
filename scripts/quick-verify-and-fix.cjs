#!/usr/bin/env node
const { execSync } = require('child_process')

function run(cmd) {
  console.log(`$ ${cmd}`)
  execSync(cmd, { stdio: 'inherit' })
}

try {
  run('npm run ci:smoke')
  console.log('Build and smoke tests successful.')
} catch (e) {
  console.log('Smoke run failed. Attempting quick fixes...')
  try {
    // Ensure jest.setup.js uses CommonJS require
    const fs = require('fs')
    const setupPath = './jest.setup.js'
    if (fs.existsSync(setupPath)) {
      let content = fs.readFileSync(setupPath, 'utf8')
      if (content.includes("import '@testing-library/jest-dom'")) {
        content = content.replace("import '@testing-library/jest-dom'", "require('@testing-library/jest-dom')")
        fs.writeFileSync(setupPath, content)
        console.log('Converted ESM import to CommonJS in jest.setup.js')
      }
    }
  } catch {}
  // Retry
  run('npm run ci:smoke')
}