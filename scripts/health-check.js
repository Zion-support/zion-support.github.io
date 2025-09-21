#!/usr/bin/env node
/**
 * Health Check Script for Zion App
 * Performs comprehensive health checks on the application
 */
import { readFileSync, existsSync, statSync } from 'fs'
import { execSync } from 'child_process'
import path from 'path'

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
}

class HealthChecker {
  constructor() {
    this.checks = []
    this.results = {
      passed: 0,
      failed: 0,
      warnings: 0
    }
  }

  addCheck(name, checkFn) {
    this.checks.push({ name, checkFn })
  }

  async runChecks() {
    console.log(`${colors.bold}${colors.blue}🏥 Running Health Checks for Zion App${colors.reset}\n`)

    for (const check of this.checks) {
      try {
        const result = await check.checkFn()
        if (result.status === 'pass') {
          console.log(`${colors.green}✅ ${check.name}${colors.reset}`)
          this.results.passed++
        } else if (result.status === 'warn') {
          console.log(`${colors.yellow}⚠️  ${check.name}: ${result.message}${colors.reset}`)
          this.results.warnings++
        } else {
          console.log(`${colors.red}❌ ${check.name}: ${result.message}${colors.reset}`)
          this.results.failed++
        }
      } catch (error) {
        console.log(`${colors.red}❌ ${check.name}: Error - ${error.message}${colors.reset}`)
        this.results.failed++
      }
    }

    this.printSummary()
  }

  printSummary() {
    console.log(`\n${colors.bold}📊 Health Check Summary:${colors.reset}`)
    console.log(`${colors.green}✅ Passed: ${this.results.passed}${colors.reset}`)
    console.log(`${colors.yellow}⚠️  Warnings: ${this.results.warnings}${colors.reset}`)
    console.log(`${colors.red}❌ Failed: ${this.results.failed}${colors.reset}`)
    
    if (this.results.failed === 0) {
      console.log(`\n${colors.green}${colors.bold}🎉 All health checks passed!${colors.reset}`)
    } else {
      console.log(`\n${colors.red}${colors.bold}⚠️  Some health checks failed. Please review the issues above.${colors.reset}`)
    }
  }
}

// Create health checker instance
const checker = new HealthChecker()

// Add health checks
checker.addCheck('Build Directory Exists', () => {
  const buildDir = 'out'
  if (existsSync(buildDir)) {
    return { status: 'pass' }
  } else {
    return { status: 'warn', message: 'Build directory not found. Run npm run build first.' }
  }
})

checker.addCheck('Package.json Exists', () => {
  if (existsSync('package.json')) {
    return { status: 'pass' }
  } else {
    return { status: 'fail', message: 'package.json not found' }
  }
})

checker.addCheck('Next.js Config Exists', () => {
  if (existsSync('next.config.mjs') || existsSync('next.config.js')) {
    return { status: 'pass' }
  } else {
    return { status: 'fail', message: 'Next.js config not found' }
  }
})

checker.addCheck('Security Headers', () => {
  if (existsSync('public/_headers')) {
    return { status: 'pass' }
  } else {
    return { status: 'warn', message: 'Security headers file not found' }
  }
})

checker.addCheck('Robots.txt', () => {
  if (existsSync('public/robots.txt')) {
    return { status: 'pass' }
  } else {
    return { status: 'warn', message: 'robots.txt not found' }
  }
})

checker.addCheck('Gitignore Clean', () => {
  if (existsSync('.gitignore')) {
    const content = readFileSync('.gitignore', 'utf8')
    if (content.includes('node_modules') && content.includes('.next')) {
      return { status: 'pass' }
    } else {
      return { status: 'warn', message: '.gitignore may be missing important patterns' }
    }
  } else {
    return { status: 'fail', message: '.gitignore not found' }
  }
})

checker.addCheck('No Large Files in Root', () => {
  const largeFiles = []
  const files = ['core', '*.log', '*.tmp']
  
  for (const pattern of files) {
    if (existsSync(pattern)) {
      const stats = statSync(pattern)
      if (stats.size > 10 * 1024 * 1024) { // 10MB
        largeFiles.push(pattern)
      }
    }
  }
  
  if (largeFiles.length === 0) {
    return { status: 'pass' }
  } else {
    return { status: 'warn', message: `Large files found: ${largeFiles.join(', ')}` }
  }
})

// Run all health checks
checker.runChecks().catch(console.error)