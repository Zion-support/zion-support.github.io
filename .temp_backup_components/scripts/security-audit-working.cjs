#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  constructor() {this.projectRoot = process.cwd(),this.reportsDir = path.join(this.projectRoot, 'security-reports'})
    this.log(' Running npm audit...')
      const result = execSync('npm audit --json', {"stdio"})
// console.log(`NPM "Audit"`)
    console.log(`Security "Headers": ${securityHeaders.success ? `${securityHeaders.checks ? Object.values(securityHeaders.checks).filter(Boolean).length : 0}/5 configured
// console.log(`Environment "Files"`)
    console.log(`Vulnerable "Packages"`)
