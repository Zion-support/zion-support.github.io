#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorMonitor {
  constructor() {
    this.logDir = path.join(process.cwd(), 'logs');
    this.reportsDir = path.join(process.cwd(), 'error-reports');
    this.projectRoot = process.cwd();
    
    // Ensure directories exist
    [this.logDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logDir, 'error-monitor.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async checkTypeScriptErrors() {
    try {
      this.log('info', 'Checking TypeScript errors...');
      const result = execSync('npx tsc --noEmit', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return { status: 'clean', errors: [] };
    } catch (error) {
      const errors = error.stdout || error.stderr || error.message;
      this.log('warn', `TypeScript errors found: ${errors.length} characters`);
      return { status: 'errors', errors: errors.toString() };
    }
  }

  async checkLintingErrors() {
    try {
      this.log('info', 'Checking linting errors...');
      const result = execSync('npm run lint', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return { status: 'clean', errors: [] };
    } catch (error) {
      const errors = error.stdout || error.stderr || error.message;
      this.log('warn', `Linting errors found: ${errors.length} characters`);
      return { status: 'errors', errors: errors.toString() };
    }
  }

  async checkBuildErrors() {
    try {
      this.log('info', 'Checking build errors...');
      const result = execSync('npm run build', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return { status: 'clean', errors: [] };
    } catch (error) {
      const errors = error.stdout || error.stderr || error.message;
      this.log('warn', `Build errors found: ${errors.length} characters`);
      return { status: 'errors', errors: errors.toString() };
    }
  }

  async checkTestErrors() {
    try {
      this.log('info', 'Checking test errors...');
      const result = execSync('npm test', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return { status: 'clean', errors: [] };
    } catch (error) {
      const errors = error.stdout || error.stderr || error.message;
      this.log('warn', `Test errors found: ${errors.length} characters`);
      return { status: 'errors', errors: errors.toString() };
    }
  }

  async scanLogFiles() {
    this.log('info', 'Scanning log files for errors...');
    const logFiles = [];
    
    // Find all log files
    const findLogFiles = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          findLogFiles(filePath);
        } else if (file.endsWith('.log') || file.endsWith('.txt')) {
          logFiles.push(filePath);
        }
      });
    };
    
    findLogFiles(this.logDir);
    findLogFiles(path.join(this.projectRoot, 'logs'));
    
    const errorPatterns = [
      /error/i,
      /exception/i,
      /failed/i,
      /fatal/i,
      /critical/i,
      /timeout/i,
      /connection refused/i,
      /not found/i,
      /permission denied/i
    ];
    
    const foundErrors = [];
    
    for (const logFile of logFiles) {
      try {
        const content = fs.readFileSync(logFile, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          errorPatterns.forEach(pattern => {
            if (pattern.test(line)) {
              foundErrors.push({
                file: logFile,
                line: index + 1,
                content: line.trim(),
                timestamp: new Date().toISOString()
              });
            }
          });
        });
      } catch (error) {
        this.log('warn', `Could not read log file ${logFile}: ${error.message}`);
      }
    }
    
    return foundErrors;
  }

  async generateErrorReport() {
    this.log('info', 'Generating comprehensive error report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      typescript: await this.checkTypeScriptErrors(),
      linting: await this.checkLintingErrors(),
      build: await this.checkBuildErrors(),
      tests: await this.checkTestErrors(),
      logErrors: await this.scanLogFiles(),
      summary: {
        totalErrors: 0,
        criticalIssues: 0,
        warnings: 0
      }
    };
    
    // Calculate summary
    const checks = [report.typescript, report.linting, report.build, report.tests];
    checks.forEach(check => {
      if (check.status === 'errors') {
        report.summary.totalErrors++;
        report.summary.criticalIssues++;
      }
    });
    
    report.summary.warnings = report.logErrors.length;
    report.summary.totalIssues = report.summary.totalErrors + report.summary.warnings;
    
    // Save report
    const reportFile = path.join(
      this.reportsDir, 
      `error-report-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('info', `Error report saved to ${reportFile}`);
    this.log('info', `Summary: ${report.summary.totalIssues} total issues (${report.summary.criticalIssues} critical, ${report.summary.warnings} warnings)`);
    
    return report;
  }

  async run() {
    this.log('info', 'Starting error monitoring...');
    
    try {
      const report = await this.generateErrorReport();
      
      // If there are critical issues, try to fix them
      if (report.summary.criticalIssues > 0) {
        this.log('warn', 'Critical issues detected, attempting to fix...');
        await this.attemptAutoFix(report);
      }
      
      return report;
    } catch (error) {
      this.log('error', `Error monitoring failed: ${error.message}`);
      throw error;
    }
  }

  async attemptAutoFix(report) {
    this.log('info', 'Attempting automatic fixes...');
    
    // Try to run syntax fixer
    try {
      this.log('info', 'Running syntax fixer...');
      execSync('node scripts/automation/syntax-error-fixer.cjs', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('info', 'Syntax fixer completed');
    } catch (error) {
      this.log('warn', `Syntax fixer failed: ${error.message}`);
    }
    
    // Try to run TypeScript fixer
    try {
      this.log('info', 'Running TypeScript fixer...');
      execSync('node scripts/automation/typescript-error-fixer.cjs', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('info', 'TypeScript fixer completed');
    } catch (error) {
      this.log('warn', `TypeScript fixer failed: ${error.message}`);
    }
  }
}

// Run error monitoring if this script is executed directly
if (require.main === module) {
  const errorMonitor = new ErrorMonitor();
  errorMonitor.run()
    .then(report => {
      console.log('\n=== Error Monitoring Results ===');
      console.log(`Total Issues: ${report.summary.totalIssues}`);
      console.log(`Critical Issues: ${report.summary.criticalIssues}`);
      console.log(`Warnings: ${report.summary.warnings}`);
      process.exit(report.summary.criticalIssues > 0 ? 1 : 0);
    })
    .catch(error => {
      console.error('Error monitoring failed: ', error);
      process.exit(1);
    });
}

module.exports = ErrorMonitor;
// Run if called directly;
if (require.main === module) {;
  const monitor = new ErrorMonitor();
;
  // Run once immediately, then every 5 minutes;
  monitor.run();
  setInterval(() => monitor.run(), 5 * 60 * 1000);
;
  // Keep process alive;
  process.on('SIGINT', () => {;
    monitor.log('Error monitor shutting down', 'INFO');
    process.exit(0);
  });
}
;
module.exports = ErrorMonitor;
