<<<<<<< HEAD
const { execSync, spawn } = require('child_process');
=======


>>>>>>> origin/merge-pr-12271
const fs = require('fs');
const path = require('path');

class ErrorMonitor {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'error-monitor.log');
    this.errorCount = 0;
    this.lastCheck = new Date();
    this.setupLogging();
  }

  setupLogging() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
    const logMessage = `[${timestamp}] ${message}\n`;
=======

    const logMessage = `[${timestamp}] ${message}\n`;`
>>>>>>> origin/merge-pr-12271
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLintCheck() {
    try {
      this.log('Running ESLint check...');
      const result = execSync('npm run lint', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      this.log('ESLint check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`ESLint errors found: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async runTypeCheck() {
    try {
      this.log('Running TypeScript check...');
      const result = execSync('npm run type-check', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      this.log('TypeScript check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`TypeScript errors found: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async runBuildCheck() {
    try {
      this.log('Running build check...');
      const result = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      this.log('Build check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Build errors found: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async fixLintErrors() {
    try {
      this.log('Attempting to fix lint errors...');
      execSync('npm run fix:all', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      this.log('Lint errors fixed');
      return true;
    } catch (error) {
      this.log(`Failed to fix lint errors: ${error.message}`);
      return false;
    }
  }

  async commitChanges() {
    try {
      this.log('Committing changes...');
      execSync('git add .', { cwd: process.cwd() });
      execSync('git commit -m "fix: auto-fix linting and type errors"', { cwd: process.cwd() });
      this.log('Changes committed');
      return true;
    } catch (error) {
      this.log(`Failed to commit changes: ${error.message}`);
      return false;
    }
  }

  async pushChanges() {
    try {
      this.log('Pushing changes...');
      execSync('git push origin main', { cwd: process.cwd() });
      this.log('Changes pushed to main branch');
      return true;
    } catch (error) {
      this.log(`Failed to push changes: ${error.message}`);
      return false;
    }
  }

  async checkAndFix() {
    this.log('Starting error monitoring cycle...');
    
    const lintResult = await this.runLintCheck();
    const typeResult = await this.runTypeCheck();
    
    if (!lintResult.success || !typeResult.success) {
      this.errorCount++;
      this.log(`Errors detected (count: ${this.errorCount})`);
      
      // Try to fix lint errors
      if (!lintResult.success) {
        const fixed = await this.fixLintErrors();
        if (fixed) {
          // Re-run lint check
          const recheckResult = await this.runLintCheck();
          if (recheckResult.success) {
            this.log('Lint errors successfully fixed');
          }
        }
      }
      
      // If we have fixes, commit and push
      if (await this.commitChanges()) {
        await this.pushChanges();
      }
    } else {
      this.log('No errors detected');
      this.errorCount = 0;
    }
    
    this.lastCheck = new Date();
  }
<<<<<<< HEAD
=======
});
};
module.exports = ErrorMonitor;
>>>>>>> origin/merge-pr-12271

  async start() {
    this.log('Error Monitor started');
    
    // Run initial check
    await this.checkAndFix();
    
    // Set up periodic checks every 30 minutes
    setInterval(async () => {
      await this.checkAndFix();
    }, 30 * 60 * 1000);
  }
}

<<<<<<< HEAD
// Start the error monitor
const monitor = new ErrorMonitor();
monitor.start().catch(console.error);

module.exports = ErrorMonitor;
=======
>>>>>>> origin/merge-pr-12271
