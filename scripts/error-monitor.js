#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ErrorMonitor {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/error-monitor.log');
    this.errorCount = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLinting() {
    try {
      this.log('Running ESLint check...');
      const result = execSync('npx eslint app/ components/ lib/ utils/ --ext .ts,.tsx,.js,.jsx --format json', {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const errors = JSON.parse(result);
      this.log(`ESLint completed. Found ${errors.length} issues.`);
      return errors;
    } catch (error) {
      this.log(`ESLint failed: ${error.message}`);
      return [];
    }
  }

  async runTypeCheck() {
    try {
      this.log('Running TypeScript type check...');
      execSync('npx tsc --noEmit', {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      this.log('TypeScript type check passed.');
      return [];
    } catch (error) {
      this.log(`TypeScript type check failed: ${error.message}`);
      return [error.message];
    }
  }

  async fixLintingErrors() {
    try {
      this.log('Attempting to fix linting errors...');
      execSync('npx eslint app/ components/ lib/ utils/ --ext .ts,.tsx,.js,.jsx --fix', {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      this.log('Linting errors fixed successfully.');
      return true;
    } catch (error) {
      this.log(`Failed to fix linting errors: ${error.message}`);
      return false;
    }
  }

  async checkForErrors() {
    this.log('Starting error monitoring cycle...');
    
    const lintErrors = await this.runLinting();
    const typeErrors = await this.runTypeCheck();
    
    const totalErrors = lintErrors.length + typeErrors.length;
    
    if (totalErrors > 0) {
      this.errorCount++;
      this.log(`Found ${totalErrors} total errors. Error count: ${this.errorCount}`);
      
      if (lintErrors.length > 0) {
        await this.fixLintingErrors();
      }
    } else {
      this.log('No errors detected. System is healthy.');
      this.errorCount = 0;
    }
  }

  async start() {
    this.log('Error Monitor started');
    
    await this.checkForErrors();
    
    setInterval(async () => {
      await this.checkForErrors();
    }, 30 * 60 * 1000);
    
    process.on('SIGINT', () => {
      this.log('Error Monitor stopped');
      process.exit(0);
    });
  }

  log(level, message, error = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      error: error
        ? {
            message: error.message,
            stack: error.stack,
          }
        : null,
    };

    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);

    if (error) {
      console.error(error);
    }

    // Write to log file
    const logFile = path.join(this.logDir,
  'error-monitor.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) +
  '\n');
  }

  async checkTypeScriptErrors() {
    try {
this.log(
  'info',
  'Checking TypeScript errors...');
      
      const result = execSync(
  'npm run type-check', { 
        cwd: path.join(__dirname,
,
  ..'),
        encoding: 'utf8,
        timeout: 60000
      });
      
      this.log(
  'info',
  'TypeScript check passed');return { success: true, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.message;
      const errors = this.parseTypeScriptErrors(errorOutput);
this.log(
  'error', `TypeScript check failed with ${errors.length} errors`);return { success: false, errors };
    }
  }

  async checkESLintErrors() {
    try {
this.log(
  'info',
  'Checking ESLint errors...');
      
      const result = execSync(
  'npm run lint', { 
        cwd: path.join(__dirname,
,
  ..'),
        encoding: 'utf8,
        timeout: 60000
      });
      
      this.log(
  'info',
  'ESLint check passed');return { success: true, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.message;
      const errors = this.parseESLintErrors(errorOutput);
this.log(
  'error', `ESLint check failed with ${errors.length} errors`);return { success: false, errors };
    }
  }

  async checkBuildErrors() {
    try {
this.log(
  'info',
  'Checking build errors...');
      
      const result = execSync(
  'npm run build', { 
        cwd: path.join(__dirname,
,
  ..'),
        encoding: 'utf8,
        timeout: 300000 // 5 minutes
      });
      
      this.log(
  'info',
  'Build check passed');return { success: true, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.message;
      const errors = this.parseBuildErrors(errorOutput);
this.log(
  'error', `Build check failed with ${errors.length} errors`);return { success: false, errors };
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
const lines = output.split(,
  \n');for (const line of lines) {
      if (line.includes(
  ': error TS)) {
        const match = line.match(/^(.+?)\((\d+),(\d+)\): error (TS\d+): (.+)$/);
        if (match) {
          errors.push({
            type:
  'typescript',
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            code: match[4],
            message: match[5],
            raw: line,
          });
        }
      }
    }

    return errors;
  }

  parseESLintErrors(output) {
    const errors = [];
const lines = output.split(,
  \n');for (const line of lines) {
      if (line.includes(
  'error') || line.includes(
  'warning')) {
        errors.push({
          type: 'eslint,
          message: line.trim(),
          raw: line,
        });
      }
    }

    return errors;
  }

  parseBuildErrors(output) {
    const errors = [];
const lines = output.split(,
  \n');for (const line of lines) {
      if (line.includes(
  'Error: ') || line.includes(
  'ERROR')) {
        errors.push({
          type:
  'build,
          message: line.trim(),
          raw: line,
        });
      }
    }

    return errors;
  }

  async triggerAutoFixer(errors) {
    try {
this.log(
  'info', `Triggering auto-fixer for ${errors.length} errors`);// Write errors to a temporary file for the auto-fixer
      const errorFile = path.join(
        this.errorReportDir,
        `errors-${Date.now()}.json`
      );
      fs.writeFileSync(errorFile, JSON.stringify(errors, null, 2));

      // Trigger auto-fixer
      const autoFixerScript = path.join(__dirname,
  'auto-fixer.js');
      spawn(
  'node', [autoFixerScript, errorFile], {
        detached: true,
stdio:
  'ignore'
      }).unref();
      
      this.log(
  'info',
  'Auto-fixer triggered successfully');} catch (error) {
      this.log(
  'error',
  'Failed to trigger auto-fixer', error);
    }
  }

  async generateReport() {
    const timestamp = new Date().toISOString();
    const reportFile = path.join(
      this.errorReportDir,
      `error-monitor-report-${Date.now()}.json`
    );

    const report = {
      timestamp,
      summary: {
        totalErrors: this.errors.length,
typescriptErrors: this.errors.filter(e => e.type ===,
  typescript').length,
        eslintErrors: this.errors.filter(e => e.type ===
  'eslint).length,
        buildErrors: this.errors.filter(e => e.type ===
  'build').length},
      errors: this.errors,
      recommendations: this.generateRecommendations(),
    };

    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
this.log(
  'info', `Error report generated: ${reportFile}`);return report;
  }

  generateRecommendations() {
    const recommendations = [];
if (this.errors.some(e => e.type ===
  'typescript')) {
      recommendations.push(
  'Run TypeScript auto-fixer to resolve type errors');
    }
    
    if (this.errors.some(e => e.type ===
  'eslint')) {
      recommendations.push(
  'Run ESLint auto-fix to resolve code quality issues');
    }
    
    if (this.errors.some(e => e.type ===
  'build')) {
      recommendations.push(
  'Check dependencies and build configuration');}

    return recommendations;
  }

  async run() {
    try {
this.log(
  'info',
  'Starting error monitoring cycle...');// Check for different types of errors
      const checks = await Promise.allSettled([
        this.checkTypeScriptErrors(),
        this.checkESLintErrors(),
        this.checkBuildErrors(),
      ]);

      this.errors = [];

      // Collect all errors
      checks.forEach((check, index) => {
        if (check.status ===
  'fulfilled' && !check.value.success) {
          this.errors.push(...check.value.errors);
        }
      });

      // Generate report
      const report = await this.generateReport();

      // Trigger auto-fixer if error threshold is exceeded
      if (this.errors.length >= this.errorThreshold) {
        await this.triggerAutoFixer(this.errors);
      }
this.log(
  'info', `Error monitoring cycle completed. Found ${this.errors.length} errors.`);} catch (error) {
      this.log(
  'error',
  'Error monitoring cycle failed', error);
    }
  }
}

// Run if called directly
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  const monitor = new ErrorMonitor();

  // Run once immediately
monitor.run().then(() => {
    // Set up periodic monitoring (every 10 minutes)
    setInterval(() => {
      monitor.run();
    }, 10 * 60 * 1000);
  }).catch(error => {
    console.error(
  'Failed to start error monitor:', error);
    process.exit(1);
  });}

export default ErrorMonitor;
