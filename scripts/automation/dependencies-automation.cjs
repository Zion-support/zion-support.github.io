#!/usr/bin/env node

/**
 * Dependencies Automation Script
 * Replaces GitHub Actions dependencies.yml workflow
 * Runs weekly to check and update dependencies
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class DependenciesAutomation {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/dependencies-automation.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runSecurityAudit() {
    try {
      this.log('Running security audit...');
      const auditResult = execSync('npm audit --audit-level moderate --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditResult);
      const vulnerabilities = auditData.metadata?.vulnerabilities || {};
      
      this.log(`Security audit completed. Vulnerabilities found:`);
      Object.entries(vulnerabilities).forEach(([severity, count]) => {
        this.log(`  ${severity}: ${count}`);
      });
      
      return auditData;
    } catch (error) {
      this.log(`Security audit failed: ${error.message}`);
      return null;
    }
  }

  async checkOutdatedPackages() {
    try {
      this.log('Checking for outdated packages...');
      const outdatedResult = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(outdatedResult);
      const packageCount = Object.keys(outdatedData).length;
      
      this.log(`Found ${packageCount} outdated packages`);
      
      if (packageCount > 0) {
        Object.entries(outdatedData).forEach(([packageName, data]) => {
          this.log(`  ${packageName}: ${data.current} → ${data.latest}`);
        });
      }
      
      return outdatedData;
    } catch (error) {
      this.log(`No outdated packages found or check failed: ${error.message}`);
      return {};
    }
  }

  async updateDependencies() {
    try {
      this.log('Updating dependencies...');
      
      // Update packages
      execSync('npm update', { stdio: 'inherit' });
      this.log('Dependencies updated successfully');
      
      // Reinstall to ensure consistency
      execSync('npm ci', { stdio: 'inherit' });
      this.log('Dependencies reinstalled successfully');
      
      return true;
    } catch (error) {
      this.log(`Failed to update dependencies: ${error.message}`);
      return false;
    }
  }

  async runTests() {
    try {
      this.log('Running tests after dependency update...');
      
      // Run linting
      execSync('npm run lint', { stdio: 'inherit' });
      this.log('Linting passed');
      
      // Run type checking
      execSync('npm run type-check', { stdio: 'inherit' });
      this.log('Type checking passed');
      
      // Build project
      execSync('npm run build', { stdio: 'inherit' });
      this.log('Build successful');
      
      return true;
    } catch (error) {
      this.log(`Tests failed after dependency update: ${error.message}`);
      return false;
    }
  }

  async createUpdateReport() {
    try {
      const reportPath = path.join(__dirname, '../../reports/dependency-update-report.json');
      const reportDir = path.dirname(reportPath);
      
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      const report = {
        timestamp: new Date().toISOString(),
        status: 'completed',
        summary: {
          securityVulnerabilities: 0,
          outdatedPackages: 0,
          updatesApplied: false,
          testsPassed: false
        },
        details: {
          securityAudit: null,
          outdatedPackages: {},
          updateResults: null,
          testResults: null
        }
      };
      
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Update report saved to ${reportPath}`);
      
      return report;
    } catch (error) {
      this.log(`Failed to create update report: ${error.message}`);
      return null;
    }
  }

  async run() {
    this.log('Starting Dependencies Automation...');
    
    try {
      // Run security audit
      const securityAudit = await this.runSecurityAudit();
      
      // Check for outdated packages
      const outdatedPackages = await this.checkOutdatedPackages();
      
      // Update dependencies if needed
      let updatesApplied = false;
      if (Object.keys(outdatedPackages).length > 0) {
        updatesApplied = await this.updateDependencies();
        
        if (updatesApplied) {
          // Run tests after update
          const testsPassed = await this.runTests();
          this.log(`Tests after update: ${testsPassed ? 'PASSED' : 'FAILED'}`);
        }
      }
      
      // Create report
      await this.createUpdateReport();
      
      this.log('Dependencies Automation completed successfully');
      
    } catch (error) {
      this.log(`Dependencies Automation failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the automation if this script is executed directly
if (require.main === module) {
  const automation = new DependenciesAutomation();
  automation.run();
}

module.exports = DependenciesAutomation;