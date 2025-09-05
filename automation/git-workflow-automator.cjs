const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitWorkflowAutomator {
  constructor() {
    this.logFile = './automation/logs/git-workflow.log';
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      return status.trim().split('\n').filter(line => line.length > 0);
    } catch (error) {
      this.log('ERROR', `Failed to check git status: ${error.message}`);
      return [];
    }
  }

  async hasUncommittedChanges() {
    const changes = await this.checkGitStatus();
    return changes.length > 0;
  }

  async addAllChanges() {
    try {
      execSync('git add .', { stdio: 'pipe' });
      this.log('SUCCESS', 'All changes added to staging');
      return true;
    } catch (error) {
      this.log('ERROR', `Failed to add changes: ${error.message}`);
      return false;
    }
  }

  async commitChanges(message) {
    try {
      execSync(`git commit -m "${message}"`, { stdio: 'pipe' });
      this.log('SUCCESS', `Changes committed: ${message}`);
      return true;
    } catch (error) {
      this.log('ERROR', `Failed to commit changes: ${error.message}`);
      return false;
    }
  }

  async pushChanges(branch = 'main') {
    try {
      execSync(`git push origin ${branch}`, { stdio: 'pipe' });
      this.log('SUCCESS', `Changes pushed to ${branch}`);
      return true;
    } catch (error) {
      this.log('ERROR', `Failed to push changes: ${error.message}`);
      return false;
    }
  }

  async pullChanges(branch = 'main') {
    try {
      execSync(`git pull origin ${branch}`, { stdio: 'pipe' });
      this.log('SUCCESS', `Changes pulled from ${branch}`);
      return true;
    } catch (error) {
      this.log('ERROR', `Failed to pull changes: ${error.message}`);
      return false;
    }
  }

  async getCurrentBranch() {
    try {
      const branch = execSync('git branch --show-current', { encoding: 'utf8' });
      return branch.trim();
    } catch (error) {
      this.log('ERROR', `Failed to get current branch: ${error.message}`);
      return 'main';
    }
  }

  async switchBranch(branch) {
    try {
      execSync(`git checkout ${branch}`, { stdio: 'pipe' });
      this.log('SUCCESS', `Switched to branch: ${branch}`);
      return true;
    } catch (error) {
      this.log('ERROR', `Failed to switch to branch ${branch}: ${error.message}`);
      return false;
    }
  }

  async createBranch(branch) {
    try {
      execSync(`git checkout -b ${branch}`, { stdio: 'pipe' });
      this.log('SUCCESS', `Created and switched to branch: ${branch}`);
      return true;
    } catch (error) {
      this.log('ERROR', `Failed to create branch ${branch}: ${error.message}`);
      return false;
    }
  }

  async mergeBranch(sourceBranch, targetBranch = 'main') {
    try {
      // Switch to target branch
      await this.switchBranch(targetBranch);
      
      // Pull latest changes
      await this.pullChanges(targetBranch);
      
      // Merge source branch
      execSync(`git merge ${sourceBranch}`, { stdio: 'pipe' });
      this.log('SUCCESS', `Merged ${sourceBranch} into ${targetBranch}`);
      
      return true;
    } catch (error) {
      this.log('ERROR', `Failed to merge ${sourceBranch} into ${targetBranch}: ${error.message}`);
      return false;
    }
  }

  async resolveMergeConflicts() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const conflictedFiles = status
        .split('\n')
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
        .map(line => line.substring(3));

      if (conflictedFiles.length === 0) {
        this.log('INFO', 'No merge conflicts found');
        return true;
      }

      this.log('WARNING', `Found ${conflictedFiles.length} conflicted files`);

      for (const file of conflictedFiles) {
        await this.resolveFileConflict(file);
      }

      return true;
    } catch (error) {
      this.log('ERROR', `Failed to resolve merge conflicts: ${error.message}`);
      return false;
    }
  }

  async resolveFileConflict(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Simple conflict resolution - keep the latest version
      const resolvedContent = content