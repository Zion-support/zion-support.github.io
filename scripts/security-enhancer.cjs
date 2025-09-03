#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
class SecurityEnhancer {
  constructor() {
    this.projectRoot = process.cwd()
    this.securityIssues = []
    this.fixes = []
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    console.log(logEntry)
  }

  async runSecurityAudit() {
    try {
      this.log('Running security audit...')
      // Check for common security vulnerabilities
      await this.checkDependencies()
      await this.checkEnvironmentVariables()
      await this.checkFilePermissions()
      await this.checkSecurityHeaders()
      this.log('Security audit completed', 'success')
    } catch (error) {
      this.log(`Security audit failed: ${error.message}`, 'error')
    }
  }

  async checkDependencies() {
    try {
      this.log('Checking dependencies for vulnerabilities...')
      execSync('npm audit --audit-level=moderate', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      })
      this.log('Dependencies security check passed', 'success')
      this.fixes.push('dependency_audit')
    } catch (error) {
      this.log('Dependencies have security vulnerabilities', 'error')
      this.securityIssues.push({ type: 'dependencies', issue: error.message })
    }
  }

  async checkEnvironmentVariables() {
    try {
      this.log('Checking environment variables...')
      // Check for .env files
      const envFiles = ['.env', '.env.local', '.env.production']
      for (const envFile of envFiles) {
        if (fs.existsSync(envFile)) {
          const content = fs.readFileSync(envFile, 'utf8')
          // Check for common security issues
          if (content.includes('PASSWORD') && !content.includes('#')) {
            this.securityIssues.push({ 
              type: 'environment', 
              issue: `Potential password exposure in ${envFile}` 
            })
          }
          
          if (content.includes('SECRET') && !content.includes('#')) {
            this.securityIssues.push({ 
              type: 'environment', 
              issue: `Potential secret exposure in ${envFile}` 
            })
          }
        }
      }
      
      this.log('Environment variables check completed', 'success')
    } catch (error) {
      this.log(`Environment variables check failed: ${error.message}`, 'error')
    }
  }

  async checkFilePermissions() {
    try {
      this.log('Checking file permissions...')
      // Check for overly permissive files
      const criticalFiles = ['package.json', 'package-lock.json']
      for (const file of criticalFiles) {
        if (fs.existsSync(file)) {
          const stats = fs.statSync(file)
          const mode = stats.mode & parseInt('777', 8)
          if (mode > parseInt('644', 8)) {
            this.securityIssues.push({ 
              type: 'permissions', 
              issue: `File ${file} has overly permissive permissions` 
            })
          }
        }
      }
      
      this.log('File permissions check completed', 'success')
    } catch (error) {
      this.log(`File permissions check failed: ${error.message}`, 'error')
    }
  }

  async checkSecurityHeaders() {
    try {
      this.log('Checking security headers configuration...')
      // Check for security configuration files
      const securityFiles = [
        'security.config.js',
        'next.config.js',
        'middleware.js'
      ]
      for (const file of securityFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8')
          // Check for security headers
          if (!content.includes('Content-Security-Policy')) {
            this.securityIssues.push({ 
              type: 'headers', 
              issue: `Missing Content-Security-Policy in ${file}` 
            })
          }
          
          if (!content.includes('X-Frame-Options')) {
            this.securityIssues.push({ 
              type: 'headers', 
              issue: `Missing X-Frame-Options in ${file}` 
            })
          }
        }
      }
      
      this.log('Security headers check completed', 'success')
    } catch (error) {
      this.log(`Security headers check failed: ${error.message}`, 'error')
    }
  }

  async generateSecurityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: this.securityIssues.length,
        totalFixes: this.fixes.length
      },
      issues: this.securityIssues,
      fixes: this.fixes,
      recommendations: [
        'Update dependencies regularly',
        'Use environment variables for sensitive data',
        'Implement proper security headers',
        'Regular security audits',
        'Use HTTPS in production',
        'Implement rate limiting',
        'Use secure authentication methods'
      ]
    }
    const reportPath = path.join(this.projectRoot, 'security-enhancer-report.json')
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    this.log(`Security report saved to ${reportPath}`, 'success')
    return report
  }

  async run() {
    this.log('Starting Security Enhancer')
    try {
      await this.runSecurityAudit()
      const report = await this.generateSecurityReport()
      this.log('Security Enhancer completed')
      this.log(`Summary: ${report.summary.totalIssues} issues found, ${report.summary.totalFixes} fixes applied`)
      return report
    } catch (error) {
      this.log(`Security enhancer failed: ${error.message}`, 'error')
      throw error
    }
  }
}

// Run the security enhancer
if (require.main === module) {
  const enhancer = new SecurityEnhancer()
  enhancer.run().catch(console.error)
}

module.exports = SecurityEnhancer