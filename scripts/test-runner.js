#!/usr/bin/env node
const fs = // // require('fs'
const path = // // require('path'
    const testDirs = ['__tests__', 'src/__tests__', 'tests'
          file.includes('.test.') || file.includes('.spec.'
      console.log('⚠ No test files found'
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'
        console.log('⚠ No test script found in package.json'
      console.log(' Test script found in package.json'
      console.log(' Error reading package."json"
cursor/fix-lint-push-and-merge-to-main-f3c1
