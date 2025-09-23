const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildMonitor {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'build-monitor.log');
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
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runBuild() {
    try {
      this.log('Running build process...');
      const result = execSync('npm run build', {
        cwd: process.cwd(),
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log('Build completed successfully');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Build failed: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async runLint() {
    try {
      this.log('Running lint check...');
      const result = execSync('npm run lint', {
        cwd: process.cwd(),
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log('Lint check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Lint check failed: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async runTypeCheck() {
    try {
      this.log('Running type check...');
      const result = execSync('npm run type-check', {
        cwd: process.cwd(),
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log('Type check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Type check failed: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async fixIssues() {
    try {
      this.log('Attempting to fix build issues...');
      
      // Try to fix lint issues
      try {
        execSync('npm run fix:all', {
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        this.log('Lint fixes applied');
      } catch (error) {
        this.log(`Lint fix failed: ${error.message}`);
      }
      
      // Try to fix TypeScript issues
      try {
        execSync('npx tsc --noEmit --skipLibCheck', {
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        this.log('TypeScript check passed');
      } catch (error) {
        this.log(`TypeScript issues remain: ${error.message}`);
      }
      
      return true;
    } catch (error) {
      this.log(`Failed to fix issues: ${error.message}`);
      return false;
    }
  }

  async commitAndPush() {
    try {
      this.log('Committing and pushing fixes...');
      
      // Add all changes
      execSync('git add .', { cwd: process.cwd() });
      
      // Commit changes
      const commitMessage = `fix: auto-fix build issues - ${new Date().toISOString()}`;
      execSync(`git commit -m "${commitMessage}"`, { cwd: process.cwd() });
      
      // Push changes
      execSync('git push origin main', { cwd: process.cwd() });
      
      this.log('Changes committed and pushed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to commit and push: ${error.message}`);
      return false;
    }
  }

  async monitorBuild() {
    this.log('Starting build monitoring cycle...');
    
    // Run lint check
    const lintResult = await this.runLint();
    
    // Run type check
    const typeResult = await this.runTypeCheck();
    
    // Run build
    const buildResult = await this.runBuild();
    
    if (!lintResult.success || !typeResult.success || !buildResult.success) {
      this.log('Build issues detected, attempting to fix...');
      
      // Try to fix issues
      await this.fixIssues();
      
      // Re-run checks
      const recheckLint = await this.runLint();
      const recheckType = await this.runTypeCheck();
      const recheckBuild = await this.runBuild();
      
      if (recheckLint.success && recheckType.success && recheckBuild.success) {
        this.log('All issues fixed successfully');
        await this.commitAndPush();
      } else {
        this.log('Some issues remain after fix attempt');
      }
    } else {
      this.log('All checks passed, build is healthy');
    }
  }

  async start() {
    this.log('Build Monitor started');
    
    // Run initial build check
    await this.monitorBuild();
    
    // Set up periodic monitoring every 4 hours
    setInterval(async () => {
      await this.monitorBuild();
    }, 4 * 60 * 60 * 1000);
  }
}

// Start the build monitor
const monitor = new BuildMonitor();
monitor.start().catch(console.error);

module.exports = BuildMonitor;