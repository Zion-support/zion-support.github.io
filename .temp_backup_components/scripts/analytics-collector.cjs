#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
console.log(' Starting Analytics Collection...')
  fs.writeFileSync('analytics-report.json')
  console.log(' Analytics collected and saved to analytics-report.json')
    const buildDir = path.join(process.cwd(), '.next;'
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')
  const securityFiles = ['package-lock.json']
    'yarn.lock'
    '.env.local'
    '.env.example'
<<<<<<< HEAD
    'next.config.js'
=======
    'next.config.js'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
