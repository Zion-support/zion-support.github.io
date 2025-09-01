#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.monitorInterval = parseInt(process.env.MONITOR_INTERVAL) || 30000; // 30 seconds
    this.alertThreshold = parseInt(process.env.ALERT_THRESHOLD) || 5;
    this.errorCount = 0;
    this.lastErrorTime = null;
    this.errorHistory = [];
    this.logPath = path.join(this.projectRoot, 'logs');
    
    // Ensure logs directory exists
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logPath, 'error-monitor.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, output: error.stdout || error.stderr || error.message };
    }
  }

  async checkTypeScriptErrors() {
    this.log('Checking TypeScript errors...');
    
    const result = await this.runCommand('npx tsc --noEmit', { silent: true });
    
    if (!result.success) {
      const errorCount = (result.output.match(/error TS\d+/g) || []).length;
      this.log(`Found ${errorCount} TypeScript errors`, 'warn');
      return { type: 'typescript', count: errorCount, details: result.output };
    }
    
    return { type: 'typescript', count: 0, details: '' };
  }

  async checkESLintErrors() {
    this.log('Checking ESLint errors...');
    
    const result = await this.runCommand('npx eslint src/**/*.{js,jsx,ts,tsx}', { silent: true });
    
    if (!result.success) {
      const errorCount = (result.output.match(/\d+ error\(s\)/g) || []).length;
      this.log(`Found ${errorCount} ESLint errors`, 'warn');
      return { type: 'eslint', count: errorCount, details: result.output };
    }
    
    return { type: 'eslint', count: 0, details: '' };
  }

  async checkBuildErrors() {
    this.log('Checking build errors...');
    
    const result = await this.runCommand('npm run build', { silent: true });
    
    if (!result.success) {
      this.log('Build failed', 'error');
      return { type: 'build', count: 1, details: result.output };
    }
    
    return { type: 'build', count: 0, details: '' };
  }

  async checkMergeConflicts() {
    this.log('Checking for merge conflicts...');
    
    const files = await this.runCommand('find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | head -100', { silent: true });
    
    if (files.success) {
      const fileList = files.output.split('\n').filter(f => f.trim());
      let conflictCount = 0;
      
      for (const file of fileList) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
            conflictCount++;
          }
        }
      }
      
      if (conflictCount > 0) {
        this.log(`Found ${conflictCount} files with merge conflicts`, 'warn');
        return { type: 'merge_conflict', count: conflictCount, details: `${conflictCount} files have merge conflicts` };
      }
    }
    
    return { type: 'merge_conflict', count: 0, details: '' };
  }

  async checkDependencyErrors() {
    this.log('Checking dependency errors...');
    
    const result = await this.runCommand('npm audit --audit-level=high', { silent: true });
    
    if (!result.success) {
      const vulnerabilityCount = (result.output.match(/\d+ vulnerabilities/g) || []).length;
      this.log(`Found ${vulnerabilityCount} high severity vulnerabilities`, 'warn');
      return { type: 'dependency', count: vulnerabilityCount, details: result.output };
    }
    
    return { type: 'dependency', count: 0, details: '' };
  }

  async triggerErrorFixer(errorType) {
    this.log(`Triggering ${errorType} error fixer...`);
    
    const fixerMap = {
      'typescript': './scripts/automation/typescript-error-fixer.cjs',
      'eslint': './scripts/automation/eslint-error-fixer.cjs',
      'build': './scripts/automation/build-error-detector.cjs',
      'merge_conflict': './scripts/automation/merge-conflict-resolver.cjs',
      'dependency': './scripts/automation/dependency-error-resolver.cjs'
    };
    
    const fixerScript = fixerMap[errorType];
    
    if (fixerScript && fs.existsSync(fixerScript)) {
      try {
        await this.runCommand(`node ${fixerScript}`, { silent: true });
        this.log(`${errorType} error fixer completed`, 'info');
      } catch (error) {
        this.log(`Failed to run ${errorType} error fixer: ${error.message}`, 'error');
      }
    } else {
      this.log(`No fixer found for ${errorType}`, 'warn');
    }
  }

  async checkForErrors() {
    this.log('Starting error monitoring cycle...');
    
    const checks = [
      this.checkTypeScriptErrors(),
      this.checkESLintErrors(),
      this.checkBuildErrors(),
      this.checkMergeConflicts(),
      this.checkDependencyErrors()
    ];
    
    const results = await Promise.all(checks);
    let totalErrors = 0;
    let criticalErrors = [];
    
    for (const result of results) {
      totalErrors += result.count;
      
      if (result.count > 0) {
        criticalErrors.push(result);
        this.log(`${result.type}: ${result.count} errors`, 'warn');
      }
    }
    
    // Update error history
    this.errorHistory.push({
      timestamp: new Date().toISOString(),
      totalErrors,
      criticalErrors: criticalErrors.map(e => ({ type: e.type, count: e.count }))
    });
    
    // Keep only last 100 entries
    if (this.errorHistory.length > 100) {
      this.errorHistory = this.errorHistory.slice(-100);
    }
    
    if (totalErrors > 0) {
      this.errorCount++;
      this.lastErrorTime = new Date().toISOString();
      
      this.log(`Total errors found: ${totalErrors}`, 'warn');
      
      // Trigger fixers for critical errors
      for (const error of criticalErrors) {
        if (error.count > this.alertThreshold) {
          await this.triggerErrorFixer(error.type);
        }
      }
      
      // Generate error report
      await this.generateErrorReport(results);
      
    } else {
      this.log('No errors found', 'info');
      this.errorCount = 0;
    }
  }

  async generateErrorReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      totalErrors: results.reduce((sum, r) => sum + r.count, 0),
      errorBreakdown: results.map(r => ({
        type: r.type,
        count: r.count,
        details: r.details.substring(0, 500) // Truncate long details
      })),
      errorHistory: this.errorHistory.slice(-10), // Last 10 entries
      summary: {
        hasErrors: results.some(r => r.count > 0),
        criticalErrors: results.filter(r => r.count > this.alertThreshold).length
      }
    };
    
    const reportPath = path.join(this.projectRoot, 'error-reports');
    if (!fs.existsSync(reportPath)) {
      fs.mkdirSync(reportPath, { recursive: true });
    }
    
    const reportFile = path.join(reportPath, `error-monitor-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Error report generated: ${reportFile}`);
  }

  async run() {
    this.log('Starting Error Monitor...');
    this.log(`Monitor interval: ${this.monitorInterval}ms`);
    this.log(`Alert threshold: ${this.alertThreshold} errors`);
    
    // Initial check
    await this.checkForErrors();
    
    // Set up continuous monitoring
    setInterval(async () => {
      await this.checkForErrors();
    }, this.monitorInterval);
    
    this.log('Error Monitor is running continuously...');
  }
}

// Run the monitor if this script is executed directly
if (require.main === module) {
  const monitor = new ErrorMonitor();
  monitor.run().catch(console.error);
}

module.exports = ErrorMonitor;