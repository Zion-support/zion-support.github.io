#!/usr/bin/env node

/**
 * Weekly Dependency Manager
 * Replaces GitHub Actions dependencies workflow
 * Runs weekly to check and update dependencies
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class WeeklyDependencyManager {
  constructor() {
    this.reportFile = 'weekly-dependency-error-report.json';
    this.startTime = new Date();
  }

  async run() {
    console.log('🚀 Starting Weekly Dependency Manager...');
    
    try {
      // Check current dependency status
      await this.checkDependencies();
      
      // Generate report
      await this.generateReport();
      
      console.log('✅ Weekly Dependency Manager completed successfully');
    } catch (error) {
      console.error('❌ Weekly Dependency Manager failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async checkDependencies() {
    console.log('📦 Checking dependencies...');
    
    try {
      // Check for outdated packages
      const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
      const outdated = JSON.parse(outdatedOutput);
      
      if (Object.keys(outdated).length > 0) {
        console.log(`⚠️  Found ${Object.keys(outdated).length} outdated packages`);
        this.outdatedPackages = outdated;
      } else {
        console.log('✅ All packages are up to date');
      }
      
      // Check for security vulnerabilities
      const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(auditOutput);
      
      if (audit.metadata.vulnerabilities.total > 0) {
        console.log(`⚠️  Found ${audit.metadata.vulnerabilities.total} security vulnerabilities`);
        this.securityIssues = audit;
      } else {
        console.log('✅ No security vulnerabilities found');
      }
      
    } catch (error) {
      console.log('ℹ️  No outdated packages or security issues found');
    }
  }

  async generateReport() {
    const report = {
      timestamp: this.startTime.toISOString(),
      status: 'completed',
      outdatedPackages: this.outdatedPackages || {},
      securityIssues: this.securityIssues || {},
      summary: {
        totalOutdated: Object.keys(this.outdatedPackages || {}).length,
        totalVulnerabilities: this.securityIssues?.metadata?.vulnerabilities?.total || 0
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Report generated: ${this.reportFile}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: this.startTime.toISOString(),
      status: 'failed',
      error: error.message,
      stack: error.stack
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(errorReport, null, 2));
    console.log(`❌ Error report generated: ${this.reportFile}`);
  }
}

// Run the manager
const manager = new WeeklyDependencyManager();
manager.run().catch(console.error);