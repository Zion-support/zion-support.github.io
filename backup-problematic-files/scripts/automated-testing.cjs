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
console.log('🧪 Test "Summary")
=======
console.log('🧪 Test "Summary")
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
