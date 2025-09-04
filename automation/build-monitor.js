#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Build Monitor - Continuously monitors build health and reports issues
 */

class BuildMonitor {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'build-monitor.log');
    this.reportFile = path.join(__dirname, 'reports', 'build-status.json');
    this.alertThreshold = 3; // Alert after 3 consecutive failures
    this.consecutiveFailures = 0;
    
    // Ensure directories exist
    fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
    fs.mkdirSync(path.dirname(this.reportFile), { recursive: true });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkBuildHealth() {
    const results = {
      timestamp: new Date().toISOString(),
      build: { status: 'unknown', duration: 0, errors: [] },
      lint: { status: 'unknown', issues: [] },
      typeCheck: { status: 'unknown', errors: [] },
      dependencies: { status: 'unknown', outdated: [] }
    };

    try {
      // Check build
      this.log('Checking build status...');
      const buildStart = Date.now();
      
      try {
        execSync('yarn build', { 
          stdio: 'pipe', 
          timeout: 300000, // 5 minutes timeout
          cwd: process.cwd()
        });
        results.build.status = 'success';
        results.build.duration = Date.now() - buildStart;
        this.consecutiveFailures = 0;
        this.log('Build check: SUCCESS');
      } catch (error) {
        results.build.status = 'failed';
        results.build.duration = Date.now() - buildStart;
        results.build.errors = this.parseErrors(error.stdout || error.message);
        this.consecutiveFailures++;
        this.log(`Build check: FAILED (${this.consecutiveFailures} consecutive failures)`, 'ERROR');
      }

      // Check linting (non-blocking)
      try {
        execSync('yarn lint', { stdio: 'pipe', cwd: process.cwd() });
        results.lint.status = 'success';
        this.log('Lint check: SUCCESS');
      } catch (error) {
        results.lint.status = 'failed';
        results.lint.issues = this.parseLintIssues(error.stdout || error.message);
        this.log('Lint check: ISSUES FOUND', 'WARN');
      }

      // Check TypeScript (non-blocking)
      try {
        execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'pipe', cwd: process.cwd() });
        results.typeCheck.status = 'success';
        this.log('TypeScript check: SUCCESS');
      } catch (error) {
        results.typeCheck.status = 'failed';
        results.typeCheck.errors = this.parseTypeErrors(error.stdout || error.message);
        this.log('TypeScript check: ERRORS FOUND', 'WARN');
      }

      // Check dependencies
      try {
        const outdated = execSync('yarn outdated --json', { 
          stdio: 'pipe', 
          cwd: process.cwd() 
        });
        results.dependencies.status = 'success';
        results.dependencies.outdated = JSON.parse(outdated);
        this.log('Dependencies check: SUCCESS');
      } catch (error) {
        results.dependencies.status = 'warning';
        this.log('Dependencies check: Some packages may be outdated', 'WARN');
      }

    } catch (error) {
      this.log(`Error during health check: ${error.message}`, 'ERROR');
    }

    return results;
  }

  parseErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('Error:') || line.includes('SyntaxError:')) {
        errors.push(line.trim());
      }
    });
    
    return errors;
  }

  parseLintIssues(output) {
    const issues = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('error') || line.includes('warning')) {
        issues.push(line.trim());
      }
    });
    
    return issues;
  }

  parseTypeErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('error TS')) {
        errors.push(line.trim());
      }
    });
    
    return errors;
  }

  async sendAlert(results) {
    if (this.consecutiveFailures >= this.alertThreshold) {
      this.log(`ALERT: ${this.consecutiveFailures} consecutive build failures!`, 'CRITICAL');
      
      // Create alert file for other processes to pick up
      const alertData = {
        type: 'build_failure',
        consecutiveFailures: this.consecutiveFailures,
        timestamp: new Date().toISOString(),
        lastError: results.build.errors[0] || 'Unknown error',
        results: results
      };
      
      fs.writeFileSync(
        path.join(__dirname, 'alerts', 'build-failure-alert.json'),
        JSON.stringify(alertData, null, 2)
      );
    }
  }

  async generateReport(results) {
    // Read previous report for trends
    let previousReport = null;
    if (fs.existsSync(this.reportFile)) {
      try {
        previousReport = JSON.parse(fs.readFileSync(this.reportFile, 'utf8'));
      } catch (error) {
        this.log('Could not read previous report', 'WARN');
      }
    }

    const report = {
      ...results,
      trends: {
        consecutiveFailures: this.consecutiveFailures,
        improvementSinceLastRun: previousReport ? 
          (results.build.status === 'success' && previousReport.build.status === 'failed') : false,
        degradationSinceLastRun: previousReport ?
          (results.build.status === 'failed' && previousReport.build.status === 'success') : false
      },
      healthScore: this.calculateHealthScore(results),
      recommendations: this.generateRecommendations(results)
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Build health report updated: ${this.reportFile}`);
    
    return report;
  }

  calculateHealthScore(results) {
    let score = 100;
    
    if (results.build.status === 'failed') score -= 40;
    if (results.lint.status === 'failed') score -= 20;
    if (results.typeCheck.status === 'failed') score -= 20;
    if (results.dependencies.status === 'warning') score -= 10;
    
    // Penalty for slow builds
    if (results.build.duration > 120000) score -= 10; // 2 minutes
    
    return Math.max(0, score);
  }

  generateRecommendations(results) {
    const recommendations = [];
    
    if (results.build.status === 'failed') {
      recommendations.push('Fix build errors immediately');
      recommendations.push('Run intelligent error fixer');
    }
    
    if (results.lint.status === 'failed') {
      recommendations.push('Address linting issues');
      recommendations.push('Consider running auto-formatter');
    }
    
    if (results.typeCheck.status === 'failed') {
      recommendations.push('Fix TypeScript errors');
      recommendations.push('Review type definitions');
    }
    
    if (results.build.duration > 180000) { // 3 minutes
      recommendations.push('Optimize build performance');
      recommendations.push('Consider build caching');
    }
    
    if (results.dependencies.outdated.length > 10) {
      recommendations.push('Update outdated dependencies');
      recommendations.push('Schedule dependency maintenance');
    }
    
    return recommendations;
  }

  async run() {
    this.log('Starting build health check...');
    
    try {
      const results = await this.checkBuildHealth();
      await this.sendAlert(results);
      const report = await this.generateReport(results);
      
      this.log(`Build health check completed. Health score: ${report.healthScore}/100`);
      
      if (report.healthScore < 70) {
        this.log('Build health is below threshold. Consider immediate action.', 'WARN');
      }
      
    } catch (error) {
      this.log(`Error in build monitor: ${error.message}`, 'ERROR');
    }
  }
}

// Main execution
if (require.main === module) {
  const monitor = new BuildMonitor();
  monitor.run().catch(console.error);
}

module.exports = BuildMonitor;