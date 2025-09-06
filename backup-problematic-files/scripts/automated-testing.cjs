#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log('🧪 Running Automated Tests...')
      "status"
      "status"
  execSync('npm run build', { "stdio"})
  execSync('npm run lint', { "stdio"})
  execSync('npm run type-check', { "stdio"})
    execSync('npm audit --audit-level=moderate', { "stdio"})
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
console.log('🧪 Test "Summary")
console.log('🧪 Test "Summary")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
