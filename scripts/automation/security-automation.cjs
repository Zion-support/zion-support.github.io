#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '../../');
    this.logFile = path.join(this.projectRoot, 'security-reports', 'security-automation.log');
    this.reportFile = path.join(this.projectRoot, 'security-reports', 'security-report.json');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      path.join(this.projectRoot, 'security-reports'),
      path.join(this.projectRoot, 'security-scan-results')
    ];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logEntry + '\n');
  }

  async runCommand(command, cwd = this.projectRoot) {
    return new Promise((resolve, reject) => {
      this.log(`Running command: ${command}`);
      
      const child = spawn(command, [], {
        shell: true,
        cwd,
        stdio: ['pipe', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
        this.log(`STDOUT: ${data.toString().trim()}`);
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
        this.log(`STDERR: ${data.toString().trim()}`);
      });

      child.on('close', (code) => {
        if (code === 0) {
          this.log(`Command completed successfully with code ${code}`);
          resolve({ code, stdout, stderr });
        } else {
          this.log(`Command failed with code ${code}`, 'ERROR');
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });

      child.on('error', (error) => {
        this.log(`Command error: ${error.message}`, 'ERROR');
        reject(error);
      });
    });
  }

  async installDependencies() {
    this.log('Installing dependencies...');
    try {
      await this.runCommand('npm ci');
      this.log('Dependencies installed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to install dependencies: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runNpmAudit() {
    this.log('Running npm audit...');
    try {
      const result = await this.runCommand('npm audit --audit-level=moderate --json');
      
      // Parse the JSON output
      const auditData = JSON.parse(result.stdout);
      
      // Check for vulnerabilities
      const vulnerabilities = auditData.metadata?.vulnerabilities || {};
      const totalVulnerabilities = Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0);
      
      this.log(`NPM audit completed. Found ${totalVulnerabilities} vulnerabilities`);
      
      // Save detailed audit report
      const auditReportFile = path.join(this.projectRoot, 'security-reports', 'npm-audit-report.json');
      fs.writeFileSync(auditReportFile, JSON.stringify(auditData, null, 2));
      
      return {
        success: totalVulnerabilities === 0,
        totalVulnerabilities,
        vulnerabilities,
        reportFile: auditReportFile
      };
    } catch (error) {
      this.log(`NPM audit failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }

  async checkOutdatedPackages() {
    this.log('Checking for outdated packages...');
    try {
      const result = await this.runCommand('npm outdated --json');
      
      // Parse the JSON output
      const outdatedData = JSON.parse(result.stdout);
      const outdatedCount = Object.keys(outdatedData).length;
      
      this.log(`Found ${outdatedCount} outdated packages`);
      
      // Save outdated packages report
      const outdatedReportFile = path.join(this.projectRoot, 'security-reports', 'outdated-packages.json');
      fs.writeFileSync(outdatedReportFile, JSON.stringify(outdatedData, null, 2));
      
      return {
        success: true,
        outdatedCount,
        packages: outdatedData,
        reportFile: outdatedReportFile
      };
    } catch (error) {
      // npm outdated returns exit code 1 when there are outdated packages, which is not an error
      if (error.message.includes('exit code 1')) {
        this.log('NPM outdated check completed (some packages are outdated)', 'WARN');
        return {
          success: true,
          outdatedCount: 'unknown',
          note: 'Some packages are outdated'
        };
      }
      
      this.log(`NPM outdated check failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }

  async runSecurityScan() {
    this.log('Running comprehensive security scan...');
    
    const results = [];
    
    // Run npm audit
    const auditResult = await this.runNpmAudit();
    results.push({
      step: 'npm-audit',
      success: auditResult.success,
      details: auditResult,
      timestamp: new Date().toISOString()
    });
    
    // Check outdated packages
    const outdatedResult = await this.checkOutdatedPackages();
    results.push({
      step: 'outdated-packages',
      success: outdatedResult.success,
      details: outdatedResult,
      timestamp: new Date().toISOString()
    });
    
    return results;
  }

  async generateSecurityReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      status: results.every(r => r.success) ? 'SECURE' : 'VULNERABILITIES_FOUND',
      results: results,
      summary: {
        total: results.length,
        secure: results.filter(r => r.success).length,
        vulnerable: results.filter(r => !r.success).length
      },
      recommendations: []
    };
    
    // Generate recommendations based on results
    results.forEach(result => {
      if (!result.success) {
        switch (result.step) {
          case 'npm-audit':
            if (result.details.totalVulnerabilities > 0) {
              report.recommendations.push({
                priority: 'HIGH',
                action: 'Update vulnerable packages',
                details: `Found ${result.details.totalVulnerabilities} security vulnerabilities`
              });
            }
            break;
          case 'outdated-packages':
            report.recommendations.push({
              priority: 'MEDIUM',
              action: 'Update outdated packages',
              details: 'Some packages have newer versions available'
            });
            break;
        }
      }
    });
    
    // Add general security recommendations
    report.recommendations.push({
      priority: 'LOW',
      action: 'Regular security audits',
      details: 'Run security scans weekly to maintain security posture'
    });
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Security report generated: ${this.reportFile}`);
    
    return report;
  }

  async run() {
    this.log('Starting security automation...');
    
    // Install dependencies first
    const depsResult = await this.installDependencies();
    if (!depsResult) {
      this.log('Skipping security scan due to dependency installation failure', 'ERROR');
      return;
    }
    
    // Run security scan
    const scanResults = await this.runSecurityScan();
    
    // Generate final report
    const report = await this.generateSecurityReport(scanResults);
    
    this.log(`Security automation completed. Status: ${report.status}`);
    this.log(`Secure checks: ${report.summary.secure}/${report.summary.total}`);
    
    if (report.status === 'VULNERABILITIES_FOUND') {
      this.log('Security vulnerabilities detected. Check the report for details.', 'WARN');
      this.log('Recommendations:');
      report.recommendations.forEach(rec => {
        this.log(`  [${rec.priority}] ${rec.action}: ${rec.details}`);
      });
    } else {
      this.log('No security vulnerabilities found. System is secure.', 'INFO');
    }
  }
}

// Run the automation if this script is executed directly
if (require.main === module) {
  const security = new SecurityAutomation();
  security.run().catch(error => {
    console.error('Security automation failed:', error);
    process.exit(1);
  });
}

module.exports = SecurityAutomation;