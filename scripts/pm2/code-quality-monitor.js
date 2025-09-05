#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

class CodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/code-quality-monitor.log');
    this.qualityThreshold = parseInt(process.env.QUALITY_THRESHOLD) || 80;
    this.autoFixCritical = process.env.AUTO_FIX_CRITICAL === 'true';
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [code-quality-monitor] ${message}\n`;
    console.log(logMessage.trim());
    
    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLinting() {
    try {
      this.log('Running ESLint...');
      const output = execSync('npm run lint', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: this.projectRoot
      });
      this.log('Linting completed successfully');
      return { success: true, output };
    } catch (error) {
      this.log(`Linting failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runTypeChecking() {
    try {
      this.log('Running TypeScript type checking...');
      const output = execSync('npm run type-check', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: this.projectRoot
      });
      this.log('Type checking completed successfully');
      return { success: true, output };
    } catch (error) {
      this.log(`Type checking failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runTests() {
    try {
      this.log('Running tests...');
      const output = execSync('npm test', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: this.projectRoot
      });
      this.log('Tests completed successfully');
      return { success: true, output };
    } catch (error) {
      this.log(`Tests failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkCodeQuality() {
    try {
      this.log('Starting code quality check...');
      
      const lintResult = await this.runLinting();
      const typeCheckResult = await this.runTypeChecking();
      const testResult = await this.runTests();
      
      let qualityScore = 0;
      let totalChecks = 0;
      
      if (lintResult.success) {
        qualityScore += 30;
        totalChecks += 30;
      }
      
      if (typeCheckResult.success) {
        qualityScore += 30;
        totalChecks += 30;
      }
      
      if (testResult.success) {
        qualityScore += 40;
        totalChecks += 40;
      }
      
      const finalScore = totalChecks > 0 ? (qualityScore / totalChecks) * 100 : 0;
      
      this.log(`Code quality score: ${finalScore.toFixed(2)}%`);
      
      if (finalScore < this.qualityThreshold) {
        this.log(`WARNING: Code quality score ${finalScore.toFixed(2)}% is below threshold ${this.qualityThreshold}%`);
        
        if (this.autoFixCritical) {
          this.log('Attempting to fix critical issues...');
          await this.attemptAutoFix();
        }
      } else {
        this.log(`Code quality is good (${finalScore.toFixed(2)}%)`);
      }
      
      return { score: finalScore, passed: finalScore >= this.qualityThreshold };
      
    } catch (error) {
      this.log(`Code quality check error: ${error.message}`);
      return { score: 0, passed: false, error: error.message };
    }
  }

  async attemptAutoFix() {
    try {
      this.log('Attempting to fix linting issues...');
      execSync('npm run lint:fix', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: this.projectRoot
      });
      this.log('Auto-fix completed');
    } catch (error) {
      this.log(`Auto-fix failed: ${error.message}`);
    }
  }

  async generateReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        qualityScore: 0,
        checks: {
          linting: { success: false },
          typeChecking: { success: false },
          testing: { success: false }
        }
      };
      
      const lintResult = await this.runLinting();
      const typeCheckResult = await this.runTypeChecking();
      const testResult = await this.runTests();
      
      report.checks.linting = lintResult;
      report.checks.typeChecking = typeCheckResult;
      report.checks.testing = testResult;
      
      // Calculate overall score
      let score = 0;
      if (lintResult.success) score += 30;
      if (typeCheckResult.success) score += 30;
      if (testResult.success) score += 40;
      
      report.qualityScore = score;
      
      const reportFile = path.join(this.projectRoot, 'logs/pm2/code-quality-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`Quality report saved to ${reportFile}`);
      
    } catch (error) {
      this.log(`Report generation error: ${error.message}`);
    }
  }

  async start() {
    this.log('Code quality monitor service started');
    
    // Run quality check immediately
    await this.checkCodeQuality();
    await this.generateReport();
    
    // Set up interval for periodic quality checks
    setInterval(async () => {
      await this.checkCodeQuality();
      await this.generateReport();
    }, 6 * 60 * 60 * 1000); // Every 6 hours
  }
}

// Start the service
const codeQualityMonitor = new CodeQualityMonitor();
codeQualityMonitor.start().catch(console.error);