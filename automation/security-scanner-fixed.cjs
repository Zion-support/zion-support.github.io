#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async runCommand(command, description = '') {
    try {
      this.log(`Running: ${description || command}`);
      const { stdout, stderr } = await execAsync(command, {
        cwd: this.projectRoot,
        timeout: 30000,
      });

      this.log(`✅ ${description || command} completed successfully`, 'SUCCESS');
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`❌ ${description || command} failed: ${error.message}`, 'ERROR');
      return { 
        success: false, 
        stdout: error.stdout || '', 
        stderr: error.stderr || error.message 
      };
    }
  }

  async runNpmAudit() {
    this.log('🔍 Running NPM security audit...');
    const result = await this.runCommand('npm audit --json', 'NPM audit');
    
    if (!result.success) {
      return {
        name: 'NPM Security Audit',
        status: 'error',
        details: result.stderr
      };
    }

    try {
      const audit = JSON.parse(result.stdout);
      const vulnCount = audit.metadata && audit.metadata.vulnerabilities ? 
        Object.values(audit.metadata.vulnerabilities).reduce((a, b) => a + b, 0) : 0;
      
      return {
        name: 'NPM Security Audit',
        status: vulnCount > 0 ? 'warning' : 'pass',
        details: `${vulnCount} vulnerabilities found`,
        vulnerabilityCount: vulnCount
      };
    } catch (error) {
      return {
        name: 'NPM Security Audit',
        status: 'error',
        details: 'Failed to parse audit results'
      };
    }
  }

  async checkSensitiveFiles() {
    this.log('🔐 Checking for sensitive files...');
    const sensitiveFiles = [
      '.env',
      '.env.local',
      '.env.production',
      'private-key.pem',
      'id_rsa',
      'id_dsa',
      'config.json',
      'secrets.json'
    ];

    const found = sensitiveFiles.filter(f => fs.existsSync(path.join(this.projectRoot, f)));
    
    return {
      name: 'Sensitive Files Check',
      status: found.length > 0 ? 'warning' : 'pass',
      details: found.length > 0 ? `Found sensitive files: ${found.join(', ')}` : 'No sensitive files found',
      foundFiles: found
    };
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies for security issues...');
    const result = await this.runCommand('npm list --depth=0', 'Dependencies check');
    
    return {
      name: 'Dependencies Security Check',
      status: result.success ? 'pass' : 'error',
      details: result.success ? 'Dependencies checked successfully' : result.stderr
    };
  }

  async checkPackageJson() {
    this.log('📄 Checking package.json for security issues...');
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
      return {
        name: 'Package.json Security Check',
        status: 'error',
        details: 'package.json not found'
      };
    }

    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const issues = [];

      // Check for common security issues
      if (packageJson.scripts && packageJson.scripts.postinstall) {
        issues.push('postinstall script found - potential security risk');
      }

      if (packageJson.scripts && packageJson.scripts.preinstall) {
        issues.push('preinstall script found - potential security risk');
      }

      return {
        name: 'Package.json Security Check',
        status: issues.length > 0 ? 'warning' : 'pass',
        details: issues.length > 0 ? issues.join('; ') : 'No security issues found in package.json',
        issues
      };
    } catch (error) {
      return {
        name: 'Package.json Security Check',
        status: 'error',
        details: 'Failed to parse package.json'
      };
    }
  }

  async runSecurityScan() {
    this.log('🔒 Starting comprehensive security scan...');

    const checks = [
      await this.runNpmAudit(),
      await this.checkSensitiveFiles(),
      await this.checkDependencies(),
      await this.checkPackageJson()
    ];

    const passCount = checks.filter(check => check.status === 'pass').length;
    const warningCount = checks.filter(check => check.status === 'warning').length;
    const errorCount = checks.filter(check => check.status === 'error').length;

    const overallStatus = errorCount > 0 ? 'error' : warningCount > 0 ? 'warning' : 'pass';

    const report = {
      timestamp: new Date().toISOString(),
      overallStatus,
      summary: {
        total: checks.length,
        pass: passCount,
        warnings: warningCount,
        errors: errorCount
      },
      checks
    };

    const reportFile = path.join(this.reportsDir, `security-scan-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 Security scan completed. Overall status: ${overallStatus}`, 'SUCCESS');
    this.log(`📄 Report saved to: ${reportFile}`, 'SUCCESS');
    
    return report;
  }
}

// CLI interface
if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.runSecurityScan().catch(error => {
    console.error('Security scan failed:', error);
    process.exit(1);
  });
}

module.exports = SecurityScanner;