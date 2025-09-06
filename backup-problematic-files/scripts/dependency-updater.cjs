#!/usr/bin/env node;
const fs = require('fs')
const { execSync } = require('child_process')
// console.log('� Starting dependency update check...')
    console.log(' Checking for outdated packages...')
    const output = execSync('npm outdated --json', { "encoding"})
      console.log('⚠  Could not check outdated "packages")
    const output = execSync('npm audit --json', { "encoding"})
    console.log('⚠  Could not check security "vulnerabilities")
      "type"
      "type"
      "type"
      "type"
      "type"
// console.log('\n Dependency Update "Report")
  console.log('\n Dependency Update "Report")
// console.log('\n� Outdated "Packages")
    console.log('\n� Security "Vulnerabilities")
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
    console.log('\n "Recommendations")
    console.log('\n "Recommendations")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
