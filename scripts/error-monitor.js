#!/usr/bin/env node

import fs from
  'fs';
import path from
  'path';
import { execSync, spawn } from
  'child_process';
import { fileURLToPath } from
  'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ErrorMonitor {
  constructor() {
    this.logDir = path.join(__dirname,
  '..',
  'logs');
    this.errorReportDir = path.join(__dirname,
  '..',
  'error-reports');
    this.maxLogSize = 10 * 1024 * 1024; // 10MB
    this.errorThreshold = 5; // Number of errors before triggering fixes
    this.errors = [];

    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logDir, this.errorReportDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
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
<<<<<<< HEAD
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
  'TypeScript check passed');
=======
      this.log('info', 'Checking TypeScript errors...');

      const result = execSync('npm run type-check', {
        cwd: path.join(__dirname, '..'),
        encoding: 'utf8',
        timeout: 60000,
      });

      this.log('info', 'TypeScript check passed');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      return { success: true, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.message;
      const errors = this.parseTypeScriptErrors(errorOutput);
<<<<<<< HEAD
      
      this.log(
  'error', `TypeScript check failed with ${errors.length} errors`);
=======

      this.log('error', `TypeScript check failed with ${errors.length} errors`);
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      return { success: false, errors };
    }
  }

  async checkESLintErrors() {
    try {
<<<<<<< HEAD
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
  'ESLint check passed');
=======
      this.log('info', 'Checking ESLint errors...');

      const result = execSync('npm run lint', {
        cwd: path.join(__dirname, '..'),
        encoding: 'utf8',
        timeout: 60000,
      });

      this.log('info', 'ESLint check passed');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      return { success: true, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.message;
      const errors = this.parseESLintErrors(errorOutput);
<<<<<<< HEAD
      
      this.log(
  'error', `ESLint check failed with ${errors.length} errors`);
=======

      this.log('error', `ESLint check failed with ${errors.length} errors`);
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      return { success: false, errors };
    }
  }

  async checkBuildErrors() {
    try {
<<<<<<< HEAD
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
  'Build check passed');
=======
      this.log('info', 'Checking build errors...');

      const result = execSync('npm run build', {
        cwd: path.join(__dirname, '..'),
        encoding: 'utf8',
        timeout: 300000, // 5 minutes
      });

      this.log('info', 'Build check passed');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      return { success: true, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.message;
      const errors = this.parseBuildErrors(errorOutput);
<<<<<<< HEAD
      
      this.log(
  'error', `Build check failed with ${errors.length} errors`);
=======

      this.log('error', `Build check failed with ${errors.length} errors`);
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      return { success: false, errors };
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
<<<<<<< HEAD
    const lines = output.split(,
  \n');
    
=======
    const lines = output.split('\n');

>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    for (const line of lines) {
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
<<<<<<< HEAD
    const lines = output.split(,
  \n');
    
=======
    const lines = output.split('\n');

>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    for (const line of lines) {
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
<<<<<<< HEAD
    const lines = output.split(,
  \n');
    
=======
    const lines = output.split('\n');

>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    for (const line of lines) {
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
<<<<<<< HEAD
      this.log(
  'info', `Triggering auto-fixer for ${errors.length} errors`);
      
=======
      this.log('info', `Triggering auto-fixer for ${errors.length} errors`);

>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      // Write errors to a temporary file for the auto-fixer
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
<<<<<<< HEAD
        stdio:
  'ignore'
      }).unref();
      
      this.log(
  'info',
  'Auto-fixer triggered successfully');
=======
        stdio: 'ignore',
      }).unref();

      this.log('info', 'Auto-fixer triggered successfully');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    } catch (error) {
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
<<<<<<< HEAD
        typescriptErrors: this.errors.filter(e => e.type ===,
  typescript').length,
        eslintErrors: this.errors.filter(e => e.type ===
  'eslint).length,
        buildErrors: this.errors.filter(e => e.type ===
  'build').length
=======
        typescriptErrors: this.errors.filter(e => e.type === 'typescript')
          .length,
        eslintErrors: this.errors.filter(e => e.type === 'eslint').length,
        buildErrors: this.errors.filter(e => e.type === 'build').length,
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      },
      errors: this.errors,
      recommendations: this.generateRecommendations(),
    };

    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
<<<<<<< HEAD
    this.log(
  'info', `Error report generated: ${reportFile}`);
    
=======
    this.log('info', `Error report generated: ${reportFile}`);

>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
<<<<<<< HEAD
    
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
  'Check dependencies and build configuration');
=======

    if (this.errors.some(e => e.type === 'typescript')) {
      recommendations.push('Run TypeScript auto-fixer to resolve type errors');
    }

    if (this.errors.some(e => e.type === 'eslint')) {
      recommendations.push(
        'Run ESLint auto-fix to resolve code quality issues'
      );
    }

    if (this.errors.some(e => e.type === 'build')) {
      recommendations.push('Check dependencies and build configuration');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    }

    return recommendations;
  }

  async run() {
    try {
<<<<<<< HEAD
      this.log(
  'info',
  'Starting error monitoring cycle...');
      
=======
      this.log('info', 'Starting error monitoring cycle...');

>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      // Check for different types of errors
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
<<<<<<< HEAD
      
      this.log(
  'info', `Error monitoring cycle completed. Found ${this.errors.length} errors.`);
      
=======

      this.log(
        'info',
        `Error monitoring cycle completed. Found ${this.errors.length} errors.`
      );
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    } catch (error) {
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
<<<<<<< HEAD
  monitor.run().then(() => {
    // Set up periodic monitoring (every 10 minutes)
    setInterval(() => {
      monitor.run();
    }, 10 * 60 * 1000);
  }).catch(error => {
    console.error(
  'Failed to start error monitor:', error);
    process.exit(1);
  });
=======
  monitor
    .run()
    .then(() => {
      // Set up periodic monitoring (every 10 minutes)
      setInterval(
        () => {
          monitor.run();
        },
        10 * 60 * 1000
      );
    })
    .catch(error => {
      console.error('Failed to start error monitor:', error);
      process.exit(1);
    });
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
}

export default ErrorMonitor;
