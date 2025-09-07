#!/usr/bin/env node
/**
 * PM2 Code Quality Monitor Service
 * Monitors code quality and runs automated fixes
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CodeQualityMonitor {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'code-quality-monitor';
    this.runLinting = process.env.RUN_LINTING === 'true';
    this.runTypeCheck = process.env.RUN_TYPE_CHECK === 'true';
    this.autoFix = process.env.AUTO_FIX === 'true';
    this.logFile = path.join(__dirname, '../../logs/pm2/code-quality-monitor.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLinting() {
    if (!this.runLinting) {
      this.log('Linting disabled');
      return { run: false };
    }

    try {
      this.log('Running ESLint...');
      const lintResult = execSync('npm run lint', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log('Linting completed successfully');
      return {
        run: true,
        success: true,
        output: lintResult
      };
    } catch (error) {
      this.log(`Linting failed: ${error.message}`);
      
      if (this.autoFix) {
        this.log('Attempting to auto-fix linting issues...');
        try {
          execSync('npm run lint -- --fix', {
            encoding: 'utf8',
            stdio: 'pipe',
            cwd: process.cwd()
          });
          this.log('Auto-fix completed');
          return { run: true, success: true, autoFixed: true };
        } catch (fixError) {
          this.log(`Auto-fix failed: ${fixError.message}`);
          return { run: true, success: false, error: fixError.message };
        }
      }
      
      return { run: true, success: false, error: error.message };
    }
  }

  async runTypeCheck() {
    if (!this.runTypeCheck) {
      this.log('Type checking disabled');
      return { run: false };
    }

    try {
      this.log('Running TypeScript type check...');
      const typeResult = execSync('npx tsc --noEmit', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log('Type checking completed successfully');
      return {
        run: true,
        success: true,
        output: typeResult
      };
    } catch (error) {
      this.log(`Type checking failed: ${error.message}`);
      return { run: true, success: false, error: error.message };
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      linting: await this.runLinting(),
      typeCheck: await this.runTypeCheck(),
      environment: {
        NODE_ENV: process.env.NODE_ENV,
        runLinting: this.runLinting,
        runTypeCheck: this.runTypeCheck,
        autoFix: this.autoFix
      }
    };

    const reportFile = path.join(__dirname, '../../logs/pm2/code-quality-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Code quality report generated: ${reportFile}`);
    return report;
  }

  async start() {
    this.log(`${this.processName} started`);
    try {
      const report = await this.generateReport();
      
      const hasErrors = (!report.linting.success && report.linting.run) || 
                       (!report.typeCheck.success && report.typeCheck.run);
      
      if (hasErrors) {
        this.log('Code quality check completed with errors');
      } else {
        this.log('Code quality check completed successfully');
      }
    } catch (error) {
      this.log(`Code quality check error: ${error.message}`);
    }
  }
}

// Start the service
if (require.main === module) {
  const codeQualityMonitor = new CodeQualityMonitor();
  codeQualityMonitor.start().catch(console.error);
}

module.exports = CodeQualityMonitor;