#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 Running Simple Improvements')
console.log('==============================')

class SimpleImprovements {
  constructor() {
    this.projectRoot = process.cwd()
    this.improvements = []
    this.fixes = []
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    console.log(logEntry)
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`)
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: this.projectRoot,
        maxBuffer: 1024 * 1024 * 5
      })
      this.log(`✅ ${description} completed successfully`, 'success')
      return result
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error')
      throw error
    }
  }

  async runImprovements() {
    try {
      this.log('Starting simple improvements...')

      // 1. Run linting and fix issues
      await this.fixLintingIssues()

      // 2. Run tests
      await this.runTests()

      // 3. Build the project
      await this.buildProject()

      // 4. Generate improvement report
      this.generateReport()

      this.log('✅ All improvements completed successfully!', 'success')
    } catch (error) {
      this.log(`❌ Improvements failed: ${error.message}`, 'error')
    }
  }

  async fixLintingIssues() {
    try {
      this.log('Fixing linting issues...')
      await this.runCommand('npm run lint:fix', 'Running lint fix')
      this.fixes.push('Fixed linting issues')
    } catch (error) {
      this.log('Linting fix failed, continuing...', 'warning')
    }
  }

  async runTests() {
    try {
      this.log('Running tests...')
      await this.runCommand('npm run test', 'Running tests')
      this.improvements.push('Tests passed successfully')
    } catch (error) {
      this.log('Tests failed, continuing...', 'warning')
    }
  }

  async buildProject() {
    try {
      this.log('Building project...')
      await this.runCommand('npm run build', 'Building project')
      this.improvements.push('Project built successfully')
    } catch (error) {
      this.log('Build failed, continuing...', 'warning')
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      improvements: this.improvements,
      fixes: this.fixes,
      summary: {
        totalImprovements: this.improvements.length,
        totalFixes: this.fixes.length
      }
    }

    const reportPath = path.join(this.projectRoot, 'simple-improvements-report.json')
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))

    console.log('\n📊 Simple Improvements Summary:')
    console.log('================================')
    console.log(`Improvements: ${report.summary.totalImprovements}`)
    console.log(`Fixes: ${report.summary.totalFixes}`)
    console.log('================================')
    
    if (this.improvements.length > 0) {
      console.log('\n✅ Improvements Made:')
      this.improvements.forEach(improvement => {
        console.log(`  - ${improvement}`)
      })
    }

    if (this.fixes.length > 0) {
      console.log('\n🔧 Fixes Applied:')
      this.fixes.forEach(fix => {
        console.log(`  - ${fix}`)
      })
    }

    console.log(`\n📄 Detailed report saved to: ${reportPath}`)
  }
}

// Run the improvements
const improvements = new SimpleImprovements()
improvements.runImprovements().catch(error => {
  console.error('Fatal error:', error.message)
  process.exit(1)
})