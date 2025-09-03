#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

console.log('🚀 Master Automation Orchestrator')
console.log('==================================')

class MasterAutomationOrchestrator {
  constructor() {
    this.results = {
      syntaxFixes: 0,
      buildSuccess: false,
      testsPassed: 0,
      optimizations: 0,
      errors: []
    }
    this.startTime = Date.now()
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry)
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`)
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      })
      this.log(`✅ ${description} completed successfully`, 'success')
      return result;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error')
      this.results.errors.push({ command, description, error: error.message })
      throw error;
    }
  }

  async fixSyntaxErrors() {
    this.log('🔧 Starting comprehensive syntax error fixing...')
    
    try {
      // Run the syntax fixer script
      await this.runCommand('node scripts/fix-syntax-errors.cjs', 'Syntax Error Fixing')
      this.results.syntaxFixes++;
      this.log('✅ Syntax errors fixed successfully')
    } catch (error) {
      this.log(`❌ Syntax fixing failed: ${error.message}`, 'error')
    }
  }

  async runBuild() {
    this.log('🏗️ Starting build process...')
    
    try {
      await this.runCommand('npm run build', 'Application Build')
      this.results.buildSuccess = true;
      this.log('✅ Build completed successfully')
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'error')
    }
  }

  async runTests() {
    this.log('🧪 Running tests...')
    
    try {
      await this.runCommand('npm run type-check', 'TypeScript Type Checking')
      this.results.testsPassed++;
    } catch (error) {
      this.log(`❌ Type checking failed: ${error.message}`, 'error')
    }

    try {
      await this.runCommand('npm run lint', 'ESLint Linting')
      this.results.testsPassed++;
    } catch (error) {
      this.log(`❌ Linting failed: ${error.message}`, 'error')
    }
  }

  async optimizePerformance() {
    this.log('⚡ Starting performance optimizations...')
    
    try {
      // Run performance monitoring
      await this.runCommand('node scripts/performance-monitor.cjs', 'Performance Monitoring')
      this.results.optimizations++;
      this.log('✅ Performance optimization completed')
    } catch (error) {
      this.log(`❌ Performance optimization failed: ${error.message}`, 'error')
    }
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...')
    
    try {
      await this.runCommand('node scripts/security-audit.cjs', 'Security Audit')
      this.log('✅ Security audit completed')
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`, 'error')
    }
  }

  async generateReport() {
    this.log('📊 Generating automation report...')
    
    const endTime = Date.now()
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      results: this.results,
      summary: {
        totalSteps: 5,
        successfulSteps: this.results.syntaxFixes + (this.results.buildSuccess ? 1 : 0) + this.results.testsPassed + this.results.optimizations,
        failedSteps: this.results.errors.length
      }
    }

    // Save report
    const reportPath = path.join(process.cwd(), 'automation', 'logs', 'master-automation-report.json')
    fs.mkdirSync(path.dirname(reportPath), { recursive: true })
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    
    this.log(`📄 Report saved to: ${reportPath}`)
    return report;
  }

  async run() {
    this.log('🚀 Starting Master Automation Orchestrator...')
    
    try {
      // Step 1: Fix syntax errors
      await this.fixSyntaxErrors()
      
      // Step 2: Run build
      await this.runBuild()
      
      // Step 3: Run tests
      await this.runTests()
      
      // Step 4: Optimize performance
      await this.optimizePerformance()
      
      // Step 5: Security audit
      await this.runSecurityAudit()
      
      // Generate final report
      const report = await this.generateReport()
      
      this.log('🎉 Master Automation Orchestrator completed successfully!')
      this.log(`📊 Summary: ${report.summary.successfulSteps}/${report.summary.totalSteps} steps successful`)
      
      return report;
      
    } catch (error) {
      this.log(`💥 Master Automation Orchestrator failed: ${error.message}`, 'error')
      await this.generateReport()
      process.exit(1)
    }
  }
}

// Run the orchestrator if this script is executed directly
if (require.main === module) {
  const orchestrator = new MasterAutomationOrchestrator()
  orchestrator.run().then(report => {
    console.log('\n📋 Final Report:')
    console.log(JSON.stringify(report, null, 2))
    process.exit(report.summary.failedSteps > 0 ? 1 : 0)
  }).catch(error => {
    console.error('💥 Orchestrator failed:', error)
    process.exit(1)
  })
}

module.exports = MasterAutomationOrchestrator;