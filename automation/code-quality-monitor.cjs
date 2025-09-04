#!/usr/bin/env node

const { execSync } = require('child_process')
const glob = require('glob')

async function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit' })
    return { passed: true }
  } catch (e) {
    return { passed: false, error: e.message }
  }
}

async function checkStyle() {
  console.log('[INFO] Linting...')
  return run('npm run lint:check')
}

async function checkTypes() {
  console.log('[INFO] Type checking...')
  return run('npm run type-check')
}

async function checkTestsExist() {
  console.log('[INFO] Checking for test files...')
  const tests = glob.sync('**/*.(test|spec).{js,jsx,ts,tsx}', { ignore: 'node_modules/**' })
  if (!tests.length) {
    console.warn('[WARN] No test files found (non-fatal)')
    return { passed: true }
  }
  console.log(`[INFO] Found ${tests.length} test files`)
  return { passed: true }
}

async function main() {
  const results = []
  results.push(await checkStyle())
  results.push(await checkTypes())
  results.push(await checkTestsExist())
  const failures = results.filter(r => !r.passed)
  if (failures.length) {
    console.warn(`[WARN] Code quality checks failed: ${failures.length} issues`)
    process.exit(1)
  }
  console.log('[INFO] Code quality checks passed')
}

main().catch(e => { console.error(e); process.exit(1) })

