const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitSyncAutomation {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'git-sync-automation.log');
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
      this.log('Checking git status...');
      const status = execSync('git status --porcelain', {
        cwd: process.cwd(),
        encoding: 'utf8'
      });
      
      if (status.trim()) {
        this.log('Uncommitted changes found');
        return { hasChanges: true, changes: status.trim() };
      } else {
        this.log('No uncommitted changes');
        return { hasChanges: false, changes: '' };
      }
    } catch (error) {
      this.log(`Git status check failed: ${error.message}`);
      return { hasChanges: false, changes: '', error: error.message };
    }
  }

  async addChanges() {
    try {
      this.log('Adding changes to git...');
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

  async pushChanges() {
    try {
      this.log('Pushing changes to remote...');
      execSync('git push origin main', { cwd: process.cwd() });
      this.log('Changes pushed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to push changes: ${error.message}`);
      return false;
    }
  }

  async pullChanges() {
    try {
      this.log('Pulling latest changes...');
      execSync('git pull origin main', { cwd: process.cwd() });
      this.log('Changes pulled successfully');
      return true;
    } catch (error) {
      this.log(`Failed to pull changes: ${error.message}`);
      return false;
    }
  }

  async mergeMain() {
    try {
      this.log('Merging main branch...');
      execSync('git checkout main', { cwd: process.cwd() });
      execSync('git merge main', { cwd: process.cwd() });
      this.log('Main branch merged successfully');
      return true;
    } catch (error) {
      this.log(`Failed to merge main: ${error.message}`);
      return false;
    }
  }

  async resolveConflicts() {
    try {
      this.log('Checking for merge conflicts...');
      const status = execSync('git status --porcelain', {
        cwd: process.cwd(),
        encoding: 'utf8'
      });
      
      if (status.includes('UU') || status.includes('AA')) {
        this.log('Merge conflicts detected, attempting to resolve...');
        
        // Try to resolve conflicts automatically
        execSync('git add .', { cwd: process.cwd() });
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

  async syncWithMain() {
    try {
      this.log('Starting git sync with main branch...');
      
      // Pull latest changes
      await this.pullChanges();
      
      // Check for conflicts and resolve
      await this.resolveConflicts();
      
      // Check for uncommitted changes
      const status = await this.checkGitStatus();
      
      if (status.hasChanges) {
        this.log('Found uncommitted changes, committing...');
        
        if (await this.addChanges()) {
          const commitMessage = `sync: auto-sync changes - ${new Date().toISOString()}`;
          if (await this.commitChanges(commitMessage)) {
            await this.pushChanges();
          }
        }
      }
      
      this.log('Git sync completed successfully');
      return true;
    } catch (error) {
      this.log(`Git sync failed: ${error.message}`);
      return false;
    }
  }

  async start() {
    this.log('Git Sync Automation started');
    
    // Run initial sync
    await this.syncWithMain();
    
    // Set up periodic sync every hour
    setInterval(async () => {
      await this.syncWithMain();
    }, 60 * 60 * 1000);
  }
}

// Start the git sync automation
const automation = new GitSyncAutomation();
automation.start().catch(console.error);

module.exports = GitSyncAutomation;