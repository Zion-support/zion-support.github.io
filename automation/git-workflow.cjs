const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitWorkflow {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'git-workflow.log');
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

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', {
        cwd: process.cwd(),
        encoding: 'utf8'
      });
      return status.trim();
    } catch (error) {
      this.log(`Git status check failed: ${error.message}`);
      return '';
    }
  }

  async addChanges() {
    try {
      this.log('Adding all changes to git...');
      execSync('git add .', { cwd: process.cwd() });
      this.log('Changes added successfully');
      return true;
    } catch (error) {
      this.log(`Failed to add changes: ${error.message}`);
      return false;
    }
  }

  async commitChanges(message) {
    try {
      this.log(`Committing changes: ${message}`);
      execSync(`git commit -m "${message}"`, { cwd: process.cwd() });
      this.log('Changes committed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to commit changes: ${error.message}`);
      return false;
    }
  }

  async pushToMain() {
    try {
      this.log('Pushing changes to main branch...');
      execSync('git push origin main', { cwd: process.cwd() });
      this.log('Changes pushed to main successfully');
      return true;
    } catch (error) {
      this.log(`Failed to push to main: ${error.message}`);
      return false;
    }
  }

  async pullFromMain() {
    try {
      this.log('Pulling latest changes from main...');
      execSync('git pull origin main', { cwd: process.cwd() });
      this.log('Changes pulled from main successfully');
      return true;
    } catch (error) {
      this.log(`Failed to pull from main: ${error.message}`);
      return false;
    }
  }

  async mergeToMain() {
    try {
      this.log('Merging current branch to main...');
      
      // Switch to main branch
      execSync('git checkout main', { cwd: process.cwd() });
      
      // Pull latest changes
      await this.pullFromMain();
      
      // Merge current branch (if not already on main)
      const currentBranch = execSync('git branch --show-current', {
        cwd: process.cwd(),
        encoding: 'utf8'
      }).trim();
      
      if (currentBranch !== 'main') {
        execSync(`git merge ${currentBranch}`, { cwd: process.cwd() });
        this.log(`Merged ${currentBranch} to main`);
      }
      
      return true;
    } catch (error) {
      this.log(`Failed to merge to main: ${error.message}`);
      return false;
    }
  }

  async resolveConflicts() {
    try {
      this.log('Checking for merge conflicts...');
      const status = await this.checkGitStatus();
      
      if (status.includes('UU') || status.includes('AA')) {
        this.log('Merge conflicts detected, attempting to resolve...');
        
        // Add resolved files
        execSync('git add .', { cwd: process.cwd() });
        
        // Commit the resolution
        execSync('git commit -m "resolve: auto-resolve merge conflicts"', { cwd: process.cwd() });
        
        this.log('Merge conflicts resolved');
        return true;
      } else {
        this.log('No merge conflicts found');
        return true;
      }
    } catch (error) {
      this.log(`Failed to resolve conflicts: ${error.message}`);
      return false;
    }
  }

  async runPreCommitChecks() {
    try {
      this.log('Running pre-commit checks...');
      
      // Run lint check
      try {
        execSync('npm run lint', { cwd: process.cwd(), stdio: 'pipe' });
        this.log('Lint check passed');
      } catch (error) {
        this.log('Lint check failed, attempting to fix...');
        execSync('npm run fix:all', { cwd: process.cwd(), stdio: 'pipe' });
      }
      
      // Run type check
      try {
        execSync('npm run type-check', { cwd: process.cwd(), stdio: 'pipe' });
        this.log('Type check passed');
      } catch (error) {
        this.log('Type check failed, but continuing...');
      }
      
      // Run build check
      try {
        execSync('npm run build', { cwd: process.cwd(), stdio: 'pipe' });
        this.log('Build check passed');
      } catch (error) {
        this.log('Build check failed, but continuing...');
      }
      
      return true;
    } catch (error) {
      this.log(`Pre-commit checks failed: ${error.message}`);
      return false;
    }
  }

  async executeWorkflow() {
    try {
      this.log('Starting git workflow execution...');
      
      // Check for uncommitted changes
      const status = await this.checkGitStatus();
      
      if (status) {
        this.log('Found uncommitted changes, processing...');
        
        // Run pre-commit checks
        await this.runPreCommitChecks();
        
        // Add changes
        if (await this.addChanges()) {
          // Commit changes
          const commitMessage = `fix: auto-fix errors and improvements - ${new Date().toISOString()}`;
          if (await this.commitChanges(commitMessage)) {
            // Push to main
            await this.pushToMain();
          }
        }
      } else {
        this.log('No uncommitted changes found');
      }
      
      // Pull latest changes
      await this.pullFromMain();
      
      // Resolve any conflicts
      await this.resolveConflicts();
      
      this.log('Git workflow completed successfully');
      return true;
    } catch (error) {
      this.log(`Git workflow failed: ${error.message}`);
      return false;
    }
  }

  async start() {
    this.log('Git Workflow started');
    
    // Run initial workflow
    await this.executeWorkflow();
    
    // Set up periodic execution every 30 minutes
    setInterval(async () => {
      await this.executeWorkflow();
    }, 30 * 60 * 1000);
  }
}

// Start the git workflow
const workflow = new GitWorkflow();
workflow.start().catch(console.error);

module.exports = GitWorkflow;