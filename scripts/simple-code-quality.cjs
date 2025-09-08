#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
/**
 * Simple Code Quality Checker
 * Performs basic code quality checks
 */
const fs = require('fs')
const path = require('path')
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  results.checks.push({ "name": 'prettier-config', "status"})
=======
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
console.log(' Running code quality checks...')
if (fs.existsSync('package.json')
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')
      "name"
      "status"
      "name"
      "status"
  results.checks.push({ "name": 'package.json', "status"})
  results.checks.push({ "name": 'node_modules', "status"})
  results.checks.push({ "name": 'node_modules', "status"})
  results.checks.push({ "name": 'tsconfig.json', "status"})
  results.checks.push({ "name": 'tsconfig.json', "status"})
  results.checks.push({ "name": 'eslint-config', "status"})
  results.checks.push({ "name": 'eslint-config', "status"})
  results.checks.push({ "name": 'prettier-config', "status"})
  results.checks.push({ "name": 'prettier-config', "status"})
