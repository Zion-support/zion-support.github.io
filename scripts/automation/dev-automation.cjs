#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class DevAutomation {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 300000; // 5 minutes
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.workingDir = process.cwd();
    this.lastBuildTime = 0;
    this.buildThreshold = 10 * 60 * 1000; // 10 minutes
    this.errorCount = 0;
    this.maxErrors = 5;
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { 
        cwd: this.workingDir, 
        encoding: 'utf8' 
      });
      
      if (status.trim()) {
        this.log(`Git changes detected: ${status.split('\n').filter(l => l.trim()).length} files modified`, 'info');
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Git status check failed: ${error.message}`, 'warn');
      return false;
    }
  }

  async runLinting() {
    try {
      this.log('Running ESLint for code quality...', 'info');
      const result = execSync('npm run lint', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (result.includes('problems')) {
        this.log('ESLint found code quality issues', 'warn');
        // Try to auto-fix
        try {
          execSync('npm run fix:all', { 
            cwd: this.workingDir, 
            encoding: 'utf8' 
          });
          this.log('Auto-fixed ESLint issues', 'info');
        } catch (fixError) {
          this.log(`Auto-fix failed: ${fixError.message}`, 'warn');
        }
      } else {
        this.log('ESLint passed - code quality is good', 'info');
      }
      return true;
    } catch (error) {
      this.log(`Linting failed: ${error.message}`, 'error');
      return false;
    }
  }

  async runTypeChecking() {
    try {
      this.log('Running TypeScript type checking...', 'info');
      execSync('npm run type-check', { 
        cwd: this.workingDir, 
        encoding: 'utf8' 
      });
      this.log('TypeScript type checking passed', 'info');
      return true;
    } catch (error) {
      this.log(`TypeScript type checking failed: ${error.message}`, 'error');
      return false;
    }
  }

  async checkDependencies() {
    try {
      this.log('Checking for outdated dependencies...', 'info');
      const outdated = execSync('npm outdated --json', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (outdated.trim()) {
        const outdatedData = JSON.parse(outdated);
        const count = Object.keys(outdatedData).length;
        this.log(`Found ${count} outdated dependencies`, 'warn');
        
        // Check for security vulnerabilities
        try {
          const audit = execSync('npm audit --json', { 
            cwd: this.workingDir, 
            encoding: 'utf8',
            stdio: 'pipe'
          });
          const auditData = JSON.parse(audit);
          if (auditData.vulnerabilities) {
            this.log(`Security vulnerabilities found: ${Object.keys(auditData.vulnerabilities).length}`, 'error');
          }
        } catch (auditError) {
          this.log(`Security audit failed: ${auditError.message}`, 'warn');
        }
      } else {
        this.log('All dependencies are up to date', 'info');
      }
      return true;
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, 'warn');
      return false;
    }
  }

  async runTests() {
    try {
      this.log('Running automated tests...', 'info');
      execSync('npm test', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('All tests passed', 'info');
      return true;
    } catch (error) {
      this.log(`Tests failed: ${error.message}`, 'error');
      return false;
    }
  }

  async checkBuildHealth() {
    try {
      const now = Date.now();
      if (now - this.lastBuildTime < this.buildThreshold) {
        return true; // Skip if build was recent
      }

      this.log('Checking build health...', 'info');
      execSync('npm run build', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.lastBuildTime = now;
      this.log('Build completed successfully', 'info');
      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'error');
      this.errorCount++;
      return false;
    }
  }

  async optimizeDevelopment() {
    try {
      this.log('Running development optimizations...', 'info');
      
      // Clear build cache if needed
      if (this.errorCount > this.maxErrors) {
        this.log('High error count detected, clearing build cache...', 'warn');
        try {
          execSync('rm -rf node_modules/.cache dist .vite', { 
            cwd: this.workingDir, 
            encoding: 'utf8' 
          });
          this.log('Build cache cleared', 'info');
          this.errorCount = 0;
        } catch (clearError) {
          this.log(`Cache clearing failed: ${clearError.message}`, 'warn');
        }
      }

      // Check for unused dependencies
      try {
        execSync('npx depcheck', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
      } catch (depcheckError) {
        // depcheck might fail if not installed, that's okay
        this.log('Dependency check skipped (depcheck not available)', 'info');
      }

      return true;
    } catch (error) {
      this.log(`Development optimization failed: ${error.message}`, 'error');
      return false;
    }
  }

  async generateReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        status: 'completed',
        checks: {
          git: await this.checkGitStatus(),
          linting: await this.runLinting(),
          typescript: await this.runTypeChecking(),
          dependencies: await this.checkDependencies(),
          tests: await this.runTests(),
          build: await this.checkBuildHealth(),
          optimization: await this.optimizeDevelopment()
        },
        errorCount: this.errorCount,
        lastBuildTime: this.lastBuildTime
      };

      // Save report
      const reportPath = path.join(this.workingDir, 'logs', 'dev-automation-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('Development automation report generated', 'info');
      return report;
    } catch (error) {
      this.log(`Report generation failed: ${error.message}`, 'error');
      return null;
    }
  }

  async run() {
    this.log('🚀 Starting Development Automation...', 'info');
    
    try {
      const report = await this.generateReport();
      
      if (report) {
        const successCount = Object.values(report.checks).filter(Boolean).length;
        const totalCount = Object.keys(report.checks).length;
        
        this.log(`✅ Development automation completed: ${successCount}/${totalCount} checks passed`, 'info');
        
        if (successCount < totalCount) {
          this.log('⚠️  Some checks failed. Check logs for details.', 'warn');
        }
      }
      
    } catch (error) {
      this.log(`Development automation failed: ${error.message}`, 'error');
    }
  }

  start() {
    this.log('🔄 Development automation started with interval:', 'info');
    this.log(`   Interval: ${this.interval / 1000} seconds`, 'info');
    this.log(`   Working directory: ${this.workingDir}`, 'info');
    
    // Run immediately
    this.run();
    
    // Set up interval
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const automation = new DevAutomation();
  automation.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    automation.log('🛑 Development automation shutting down...', 'info');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    automation.log('🛑 Development automation shutting down...', 'info');
    process.exit(0);
  });
}

module.exports = DevAutomation;