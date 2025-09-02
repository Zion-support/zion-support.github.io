#!/usr/bin/env node

/**
 * Master Error Fixer Automation
 * Coordinates all error fixers and provides comprehensive error prevention
 * Runs every hour
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/master-error-fixer.log');
    this.ensureLogDirectory();
    this.fixers = [
      'pm2-error-prevention-automation.cjs',
      'console-error-fixer.cjs',
      'comprehensive-error-fixer.cjs'
    ];
    this.stats = {
      totalRuns: 0,
      totalErrorsFixed: 0,
      lastRun: null,
      startTime: new Date().toISOString()
    };
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [MASTER-ERROR-FIXER] [${type.toUpperCase()}] ${message}\n`;
    fs.appendFileSync(this.logFile, logMessage);
    console.log(`[MASTER-ERROR-FIXER] [${type.toUpperCase()}] ${message}`);
  }

  async runErrorFixer(fixerName) {
    try {
      this.log(`Running ${fixerName}...`, 'info');
      
      const fixerPath = path.join(this.projectRoot, 'scripts/automation', fixerName);
      if (!fs.existsSync(fixerPath)) {
        this.log(`Fixer ${fixerName} not found`, 'warning');
        return { success: false, errorsFixed: 0 };
      }

      // Run the fixer
      execSync(`node ${fixerPath}`, { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });

      // Read the report to get stats
      const reportPath = path.join(this.projectRoot, 'automation/logs', fixerName.replace('.cjs', '-report.json'));
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        this.log(`${fixerName} completed successfully. Fixed ${report.errorsFixed || 0} errors.`, 'success');
        return { success: true, errorsFixed: report.errorsFixed || 0 };
      } else {
        this.log(`${fixerName} completed but no report found`, 'warning');
        return { success: true, errorsFixed: 0 };
      }

    } catch (error) {
      this.log(`Error running ${fixerName}: ${error.message}`, 'error');
      return { success: false, errorsFixed: 0 };
    }
  }

  async runTypeCheck() {
    try {
      this.log('Running TypeScript type check...', 'info');
      execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      this.log('TypeScript type check passed', 'success');
      return true;
    } catch (error) {
      this.log(`TypeScript type check failed: ${error.message}`, 'warning');
      return false;
    }
  }

  async runLint() {
    try {
      this.log('Running ESLint...', 'info');
      execSync('npm run lint', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      this.log('ESLint passed', 'success');
      return true;
    } catch (error) {
      this.log(`ESLint failed: ${error.message}`, 'warning');
      return false;
    }
  }

  async runBuild() {
    try {
      this.log('Running build process...', 'info');
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 120000 
      });
      this.log('Build process passed', 'success');
      return true;
    } catch (error) {
      this.log(`Build process failed: ${error.message}`, 'warning');
      return false;
    }
  }

  async runTests() {
    try {
      this.log('Running tests...', 'info');
      execSync('npm test -- --passWithNoTests', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 120000 
      });
      this.log('Tests passed', 'success');
      return true;
    } catch (error) {
      this.log(`Tests failed: ${error.message}`, 'warning');
      return false;
    }
  }

  async cleanup() {
    try {
      this.log('Cleaning up build artifacts...', 'info');
      
      // Remove build artifacts
      const buildDirs = ['dist', 'build', '.next', 'out'];
      buildDirs.forEach(dir => {
        const fullPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(fullPath)) {
          fs.rmSync(fullPath, { recursive: true, force: true });
          this.log(`Removed ${dir} directory`, 'info');
        }
      });

      // Remove TypeScript build info
      const tsBuildInfo = path.join(this.projectRoot, 'tsconfig.tsbuildinfo');
      if (fs.existsSync(tsBuildInfo)) {
        fs.unlinkSync(tsBuildInfo);
        this.log('Removed TypeScript build info', 'info');
      }
    } catch (error) {
      this.log(`Error during cleanup: ${error.message}`, 'error');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      automation: 'Master Error Fixer',
      stats: this.stats,
      status: 'completed',
      summary: `Coordinated ${this.fixers.length} error fixers, total errors fixed: ${this.stats.totalErrorsFixed}`
    };

    const reportPath = path.join(this.projectRoot, 'automation/logs/master-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`, 'info');
    return report;
  }

  async run() {
    this.log('Starting Master Error Fixer...', 'info');
    
    this.stats.totalRuns++;
    this.stats.lastRun = new Date().toISOString();
    
    try {
      // Step 1: Clean up build artifacts
      await this.cleanup();
      
      // Step 2: Run all error fixers
      let totalErrorsFixed = 0;
      for (const fixer of this.fixers) {
        const result = await this.runErrorFixer(fixer);
        if (result.success) {
          totalErrorsFixed += result.errorsFixed;
        }
      }
      
      this.stats.totalErrorsFixed += totalErrorsFixed;
      
      // Step 3: Run comprehensive checks
      const typeCheckPassed = await this.runTypeCheck();
      const lintPassed = await this.runLint();
      const buildPassed = await this.runBuild();
      const testsPassed = await this.runTests();
      
      // Step 4: Generate report
      const report = await this.generateReport();
      
      // Step 5: Summary
      this.log(`Master Error Fixer completed successfully!`, 'success');
      this.log(`Total errors fixed in this run: ${totalErrorsFixed}`, 'info');
      this.log(`Total errors fixed across all runs: ${this.stats.totalErrorsFixed}`, 'info');
      this.log(`Checks passed: TypeScript: ${typeCheckPassed}, ESLint: ${lintPassed}, Build: ${buildPassed}, Tests: ${testsPassed}`, 'info');
      
      if (typeCheckPassed && lintPassed && buildPassed && testsPassed) {
        this.log('All checks passed successfully!', 'success');
      } else {
        this.log('Some checks failed, but errors were fixed', 'warning');
      }
      
    } catch (error) {
      this.log(`Fatal error in Master Error Fixer: ${error.message}`, 'error');
    }
  }
}

// Run the automation
const masterFixer = new MasterErrorFixer();

// Handle process signals
process.on('SIGINT', () => {
  masterFixer.log('Received SIGINT, shutting down gracefully...', 'info');
  process.exit(0);
});

process.on('SIGTERM', () => {
  masterFixer.log('Received SIGTERM, shutting down gracefully...', 'info');
  process.exit(0);
});

// Run the master fixer
masterFixer.run().catch(error => {
  masterFixer.log(`Unhandled error: ${error.message}`, 'error');
  process.exit(1);
});