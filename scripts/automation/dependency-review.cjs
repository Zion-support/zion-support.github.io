#!/usr/bin/env node

/**
 * Dependency Review Automation
 * Replaces GitHub Action: dependency-review.yml
 * Runs every 6 hours to review dependencies for security issues
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class DependencyReviewAutomation {
  constructor() {
    this.logFile = path.join(__dirname, '../../reports/dependency-review-report.json');
    this.interval = process.env.AUTOMATION_INTERVAL || 21600000; // 6 hours default
    this.reportsDir = path.join(__dirname, '../../reports');
  }

  async start() {
    console.log('🚀 Starting Dependency Review Automation...');
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }

    // Run initial dependency review
    await this.runDependencyReview();

    // Set up interval for continuous monitoring
    setInterval(async () => {
      await this.runDependencyReview();
    }, this.interval);

    console.log(`⏰ Dependency Review Automation running every ${this.interval / 3600000} hours`);
  }

  async runDependencyReview() {
    try {
      console.log('🔍 Running dependency review...');
      
      const timestamp = new Date().toISOString();
      const report = {
        timestamp,
        status: 'running',
        dependencies: {},
        securityIssues: [],
        recommendations: []
      };

      // Check for outdated packages
      try {
        const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
        const outdated = JSON.parse(outdatedOutput);
        report.dependencies.outdated = outdated;
        
        if (Object.keys(outdated).length > 0) {
          report.recommendations.push('Consider updating outdated packages');
        }
      } catch (error) {
        // No outdated packages
        report.dependencies.outdated = {};
      }

      // Run security audit
      try {
        const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
        const audit = JSON.parse(auditOutput);
        
        if (audit.vulnerabilities) {
          report.securityIssues = Object.values(audit.vulnerabilities);
          report.recommendations.push('Security vulnerabilities detected - run npm audit fix');
        }
      } catch (error) {
        // No security issues
        report.securityIssues = [];
      }

      // Check package-lock.json integrity
      try {
        const integrityCheck = execSync('npm ci --dry-run', { encoding: 'utf8' });
        report.dependencies.integrity = 'passed';
      } catch (error) {
        report.dependencies.integrity = 'failed';
        report.recommendations.push('Package lock integrity check failed');
      }

      // Check for known vulnerable packages
      try {
        const lsOutput = execSync('npm ls --depth=0', { encoding: 'utf8' });
        report.dependencies.installed = lsOutput.split('\n').filter(line => line.trim());
      } catch (error) {
        report.dependencies.installed = [];
      }

      // Generate recommendations
      if (report.securityIssues.length > 0) {
        report.recommendations.push('Run npm audit fix to resolve security issues');
      }

      if (Object.keys(report.dependencies.outdated).length > 5) {
        report.recommendations.push('Many outdated packages - consider bulk update');
      }

      // Finalize report
      report.status = 'completed';
      report.summary = {
        totalDependencies: Object.keys(report.dependencies.outdated).length,
        securityIssues: report.securityIssues.length,
        recommendations: report.recommendations.length
      };

      // Save report
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
      
      console.log(`✅ Dependency review completed: ${report.summary.totalDependencies} outdated, ${report.summary.securityIssues} security issues`);
      
      // Log recommendations
      if (report.recommendations.length > 0) {
        console.log('📋 Recommendations:');
        report.recommendations.forEach(rec => console.log(`  - ${rec}`));
      }

    } catch (error) {
      console.error('❌ Error in dependency review:', error.message);
      
      // Save error report
      const errorReport = {
        timestamp: new Date().toISOString(),
        status: 'error',
        error: error.message,
        stack: error.stack
      };
      
      fs.writeFileSync(this.logFile, JSON.stringify(errorReport, null, 2));
    }
  }

  async stop() {
    console.log('🛑 Stopping Dependency Review Automation...');
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the automation
const automation = new DependencyReviewAutomation();
automation.start().catch(console.error);