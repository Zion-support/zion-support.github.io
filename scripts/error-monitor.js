#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync, spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ErrorMonitor {
  constructor() {
    this.logDir = path.join(__dirname, '..', 'logs');
    this.errorReportDir = path.join(__dirname, '..', 'error-reports');
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
      error: error ? {
        message: error.message,
        stack: error.stack
      } : null
    };

    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
    if (error) {
      console.error(error);
    }

    // Write to log file
    const logFile = path.join(this.logDir, 'error-monitor.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  }

  async checkTypeScriptErrors() {
    try {
      this.log('info', 'Checking TypeScript errors...');
      
      // Check for TypeScript compilation errors
      const result = execSync('npx tsc --noEmit --skipLibCheck', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('info', 'No TypeScript errors found');
      return { hasErrors: false, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      this.log('error', 'TypeScript errors detected', error);
      
      const errors = this.parseTypeScriptErrors(errorOutput);
      this.errors.push(...errors);
      
      return { hasErrors: true, errors };
    }
  }

  async checkLintingErrors() {
    try {
      this.log('info', 'Checking linting errors...');
      
      // Check for ESLint errors
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('info', 'No linting errors found');
      return { hasErrors: false, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      this.log('error', 'Linting errors detected', error);
      
      const errors = this.parseLintingErrors(errorOutput);
      this.errors.push(...errors);
      
      return { hasErrors: true, errors };
    }
  }

  async checkBuildErrors() {
    try {
      this.log('info', 'Checking build errors...');
      
      // Try to build the project
      const result = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('info', 'Build completed successfully');
      return { hasErrors: false, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      this.log('error', 'Build errors detected', error);
      
      const errors = this.parseBuildErrors(errorOutput);
      this.errors.push(...errors);
      
      return { hasErrors: true, errors };
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        errors.push({
          type: 'typescript',
          message: line.trim(),
          severity: 'error'
        });
      }
    }
    
    return errors;
  }

  parseLintingErrors(output) {
    try {
      const lintResults = JSON.parse(output);
      const errors = [];
      
      for (const file of lintResults) {
        for (const message of file.messages) {
          errors.push({
            type: 'linting',
            file: file.filePath,
            message: message.message,
            severity: message.severity,
            line: message.line,
            column: message.column
          });
        }
      }
      
      return errors;
    } catch (error) {
      return [{
        type: 'linting',
        message: output,
        severity: 'error'
      }];
    }
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('Error:') || line.includes('error:')) {
        errors.push({
          type: 'build',
          message: line.trim(),
          severity: 'error'
        });
      }
    }
    
    return errors;
  }

  async generateErrorReport() {
    if (this.errors.length === 0) {
      this.log('info', 'No errors to report');
      return;
    }

    const report = {
      timestamp: new Date().toISOString(),
      totalErrors: this.errors.length,
      errorsByType: this.groupErrorsByType(),
      errors: this.errors
    };

    const reportFile = path.join(this.errorReportDir, `error-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('info', `Error report generated: ${reportFile}`);
    return reportFile;
  }

  groupErrorsByType() {
    const grouped = {};
    
    for (const error of this.errors) {
      if (!grouped[error.type]) {
        grouped[error.type] = 0;
      }
      grouped[error.type]++;
    }
    
    return grouped;
  }

  async triggerAutoFix() {
    if (this.errors.length < this.errorThreshold) {
      this.log('info', `Error count (${this.errors.length}) below threshold (${this.errorThreshold})`);
      return;
    }

    this.log('warn', `Error count (${this.errors.length}) exceeds threshold (${this.errorThreshold}). Triggering auto-fix...`);

    try {
      // Run auto-fix scripts
      execSync('node scripts/auto-fixer.js', { stdio: 'inherit' });
      this.log('info', 'Auto-fix completed');
      
      // Clear errors after successful fix
      this.errors = [];
    } catch (error) {
      this.log('error', 'Auto-fix failed', error);
    }
  }

  async runMonitoringCycle() {
    this.log('info', 'Starting error monitoring cycle...');
    
    try {
      // Check for different types of errors
      await this.checkTypeScriptErrors();
      await this.checkLintingErrors();
      await this.checkBuildErrors();
      
      // Generate report if there are errors
      if (this.errors.length > 0) {
        await this.generateErrorReport();
        await this.triggerAutoFix();
      }
      
      this.log('info', 'Error monitoring cycle completed');
    } catch (error) {
      this.log('error', 'Error monitoring cycle failed', error);
    }
  }

  async start() {
    this.log('info', 'Error Monitor started');
    
    // Run initial check
    await this.runMonitoringCycle();
    
    // Set up periodic monitoring (every 10 minutes)
    setInterval(async () => {
      await this.runMonitoringCycle();
    }, 10 * 60 * 1000);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the error monitor
if (require.main === module) {
  const errorMonitor = new ErrorMonitor();
  errorMonitor.start().catch(console.error);
}

export default ErrorMonitor;