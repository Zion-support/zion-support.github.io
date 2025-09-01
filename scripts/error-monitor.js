#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const MONITOR_INTERVAL = parseInt(process.env.MONITOR_INTERVAL) || 30000; // 30 seconds
const LOG_FILE = path.join(__dirname, '../logs/error-monitor.log');
const ERROR_REPORT_FILE = path.join(__dirname, '../error-reports/current-errors.json');

class ErrorMonitor {
  constructor() {
    this.errors = {
      eslint: [],
      typescript: [],
      build: [],
      runtime: []
    };
    this.lastCheck = new Date();
    this.checkCount = 0;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    // Append to log file
    try {
      fs.appendFileSync(LOG_FILE, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async checkESLintErrors() {
    try {
      execSync('npm run lint', { 
        cwd: '/workspace',
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.errors.eslint = [];
      return { success: true, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      this.errors.eslint = this.parseESLintErrors(errorOutput);
      return { success: false, errors: this.errors.eslint };
    }
  }

  async checkTypeScriptErrors() {
    try {
      execSync('npm run type-check', { 
        cwd: '/workspace',
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.errors.typescript = [];
      return { success: true, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      this.errors.typescript = this.parseTypeScriptErrors(errorOutput);
      return { success: false, errors: this.errors.typescript };
    }
  }

  async checkBuildErrors() {
    try {
      execSync('npm run build', { 
        cwd: '/workspace',
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.errors.build = [];
      return { success: true, errors: [] };
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      this.errors.build = this.parseBuildErrors(errorOutput);
      return { success: false, errors: this.errors.build };
    }
  }

  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('Error')) {
        errors.push({
          type: 'eslint',
          message: line.trim(),
          timestamp: new Date().toISOString(),
          severity: line.includes('error') ? 'error' : 'warning'
        });
      }
    }
    
    return errors;
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS') || line.includes('Error:')) {
        errors.push({
          type: 'typescript',
          message: line.trim(),
          timestamp: new Date().toISOString(),
          severity: 'error'
        });
      }
    }
    
    return errors;
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('Error') || line.includes('failed')) {
        errors.push({
          type: 'build',
          message: line.trim(),
          timestamp: new Date().toISOString(),
          severity: 'error'
        });
      }
    }
    
    return errors;
  }

  async saveErrorReport() {
    const report = {
      timestamp: new Date().toISOString(),
      checkCount: this.checkCount,
      lastCheck: this.lastCheck.toISOString(),
      summary: {
        eslint: this.errors.eslint.length,
        typescript: this.errors.typescript.length,
        build: this.errors.build.length,
        runtime: this.errors.runtime.length,
        total: this.errors.eslint.length + this.errors.typescript.length + 
               this.errors.build.length + this.errors.runtime.length
      },
      errors: this.errors
    };

    try {
      // Ensure directory exists
      const dir = path.dirname(ERROR_REPORT_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(ERROR_REPORT_FILE, JSON.stringify(report, null, 2));
      this.log(`Error report saved: ${report.summary.total} total errors`);
    } catch (error) {
      this.log(`Failed to save error report: ${error.message}`, 'ERROR');
    }
  }

  async runHealthCheck() {
    this.checkCount++;
    this.lastCheck = new Date();
    
    this.log(`Running health check #${this.checkCount}`);
    
    const checks = [
      { name: 'ESLint', fn: () => this.checkESLintErrors() },
      { name: 'TypeScript', fn: () => this.checkTypeScriptErrors() },
      { name: 'Build', fn: () => this.checkBuildErrors() }
    ];

    for (const check of checks) {
      try {
        const result = await check.fn();
        if (result.success) {
          this.log(`✅ ${check.name}: No errors`);
        } else {
          this.log(`❌ ${check.name}: ${result.errors.length} errors found`, 'WARNING');
        }
      } catch (error) {
        this.log(`💥 ${check.name}: Check failed - ${error.message}`, 'ERROR');
      }
    }

    await this.saveErrorReport();
  }

  start() {
    this.log('🚀 Error Monitor started');
    this.log(`Monitor interval: ${MONITOR_INTERVAL}ms`);
    
    // Run initial check
    this.runHealthCheck();
    
    // Set up periodic checks
    setInterval(() => {
      this.runHealthCheck();
    }, MONITOR_INTERVAL);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Error Monitor shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Error Monitor terminated...');
  process.exit(0);
});

// Start the monitor
const monitor = new ErrorMonitor();
monitor.start();