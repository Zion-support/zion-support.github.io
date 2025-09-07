const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentGitWorkflow {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'git-workflow.log');
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
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  runCommand(command) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getGitStatus() {
    const statusResult = await this.runCommand('git status --porcelain', 'Get git status');
    if (!statusResult.success) return null;

    const lines = statusResult.output.split('\n').filter(line => line.trim());
    const changes = {
      modified: [],
      added: [],
      deleted: [],
      untracked: []
    };

    lines.forEach(line => {
      const status = line.substring(0, 2);
      const file = line.substring(3);
      
      if (status.includes('M')) changes.modified.push(file);
      if (status.includes('A')) changes.added.push(file);
      if (status.includes('D')) changes.deleted.push(file);
      if (status.includes('??')) changes.untracked.push(file);
    });

    return changes;
  }

  async getCurrentBranch() {
    const branchResult = await this.runCommand('git branch --show-current', 'Get current branch');
    return branchResult.success ? branchResult.output.trim() : null;
  }

  async getRemoteBranches() {
    const remoteResult = await this.runCommand('git branch -r', 'Get remote branches');
    if (!remoteResult.success) return [];

return remoteResult.output;
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.includes('HEAD'))
      .map(line => line.replace('origin/', ''));
  }

  async checkForConflicts() {
    const statusResult = await this.runCommand('git status', 'Check for merge conflicts');
    if (!statusResult.success) return false;

return statusResult.output.includes('') ||;
           statusResult.output.includes('') || 
           statusResult.output.includes('>>>>>>>');
  }

  async autoResolveConflicts() {
    this.log('🔧 Attempting to auto-resolve conflicts...');
    
    const conflictFiles = await this.findConflictFiles();
    let resolvedCount = 0;

    for (const file of conflictFiles) {
      const resolved = await this.resolveFileConflicts(file);
      if (resolved) resolvedCount++;
    }

    this.log(`✅ Resolved conflicts in ${resolvedCount}/${conflictFiles.length} files`);
    return resolvedCount > 0;
  }

  async findConflictFiles() {
    const statusResult = await this.runCommand('git status --porcelain', 'Find conflict files');
    if (!statusResult.success) return [];

    const conflictFiles = [];
    const lines = statusResult.output.split('\n');
    
    for (const line of lines) {
      if (line.includes('UU') || line.includes('AA') || line.includes('DD')) {
        const file = line.substring(3);
        conflictFiles.push(file);
      }
    }

    return conflictFiles;
  }

  async resolveFileConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (!content.includes('')) {
return false; // No conflicts in this file;
      }

      // Simple conflict resolution strategy
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let conflictType = '';

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('')) {
          inConflict = true;
          conflictType = 'head';
          continue;
        }
        
        if (line.includes('')) {
          conflictType = 'main';
          continue;
        }
        
return false; // No conflicts in this file;
      }

      // Simple conflict resolution strategy
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let conflictType = '';

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('')) {
          inConflict = true;
          conflictType = 'head';
          continue;
        }
        
        if (line.includes('')) {
          inConflict = false;
          conflictType = '';
          continue;
        }

        if (!inConflict) {
          resolvedLines.push(line);
        } else if (conflictType === 'head') {
          // Prefer HEAD changes for now
          resolvedLines.push(line);
        }
      }

      const resolvedContent = resolvedLines.join('\n');
      fs.writeFileSync(filePath, resolvedContent);
      
      this.log(`✅ Resolved conflicts in ${filePath}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to resolve conflicts in ${filePath}: ${error.message}`, 'error');
      return false;
    }
  }

  async stageChanges() {
    const status = await this.getGitStatus();
    if (!status) return false;

const allChanges = [;
      ...status.modified,
      ...status.added,
      ...status.deleted
    ];

    if (allChanges.length === 0) {
      this.log('No changes to stage');
      return true;
    }

    const addResult = await this.runCommand('git add .', 'Stage all changes');
    return addResult.success;
  }

  async commitChanges(message) {
    const commitResult = await this.runCommand(`git commit -m "${message}"`, 'Commit changes');
    return commitResult.success;
  }

  async pushChanges() {
    const currentBranch = await this.getCurrentBranch();
    if (!currentBranch) return false;

    const pushResult = await this.runCommand(`git push origin ${currentBranch}`, 'Push changes');
    return pushResult.success;
  }

  async pullLatest() {
    const pullResult = await this.runCommand('git pull origin main', 'Pull latest changes');
    return pullResult.success;
  }

  async mergeToMain() {
    const currentBranch = await this.getCurrentBranch();
    if (!currentBranch || currentBranch === 'main') {
      this.log('Already on main branch or no current branch');
      return false;
    }

    // Switch to main
    const checkoutResult = await this.runCommand('git checkout main', 'Switch to main');
    if (!checkoutResult.success) return false;

    // Pull latest
    const pullResult = await this.pullLatest();
    if (!pullResult.success) return false;

    // Merge current branch
    const mergeResult = await this.runCommand(`git merge ${currentBranch}`, `Merge ${currentBranch} into main`);
    if (!mergeResult.success) return false;

    // Push main
    const pushResult = await this.pushChanges();
    return pushResult.success;
  }

  async runWorkflow() {
  async executeWorkflow() {
    this.log('🚀 Starting Intelligent Git Workflow...');
    
    try {
      // Check git status
      this.log('📊 Checking git status...');
      const statusResult = this.runCommand('git status --porcelain');
      
      if (!statusResult.success) {
        this.log('❌ Failed to check git status');
        return { success: false, error: 'Git status check failed' };
      }
      
      const hasChanges = statusResult.output.trim().length > 0;
      
      if (!hasChanges) {
        this.log('✅ No changes to commit');
        return { success: true, message: 'No changes to commit' };
      }
      
      // Add all changes
      this.log('📝 Adding all changes...');
      const addResult = this.runCommand('git add .');
      
      if (!addResult.success) {
        this.log('❌ Failed to add changes');
        return { success: false, error: 'Git add failed' };
      }
      
      // Generate commit message
      const commitMessage = this.generateCommitMessage();
      this.log(`💬 Generated commit message: ${commitMessage}`);
      
      // Commit changes
      this.log('💾 Committing changes...');
      const commitResult = this.runCommand(`git commit -m "${commitMessage}"`);
      
      if (!commitResult.success) {
        this.log('❌ Failed to commit changes');
        return { success: false, error: 'Git commit failed' };
      }
      
      // Push changes
      this.log('🚀 Pushing changes...');
      const pushResult = this.runCommand('git push');
      
      if (!pushResult.success) {
        this.log('❌ Failed to push changes');
        return { success: false, error: 'Git push failed' };
      }
      
      this.log('✅ Git workflow completed successfully');
      
      const report = {
        timestamp: new Date().toISOString(),
        status: 'success',
        actions: [
          'Checked git status',
          'Added all changes',
          'Generated commit message',
          'Committed changes',
          'Pushed to remote'
        ],
        commitMessage
      };
      
      const reportFile = path.join(__dirname, 'logs', 'git-workflow-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`📄 Workflow report saved to: ${reportFile}`);
      
      return { success: true, report };
      
    } catch (error) {
      this.log(`❌ Error during git workflow: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  generateCommitMessage() {
    const timestamp = new Date().toISOString().split('T')[0];
    const time = new Date().toLocaleTimeString();
    
    // Try to get the current branch
    const branchResult = this.runCommand('git branch --show-current');
    const branch = branchResult.success ? branchResult.output.trim() : 'main';
    
    return `feat: Automated commit - ${timestamp} ${time} [${branch}]`;
  }
}

// Run the workflow
const workflow = new IntelligentGitWorkflow();
workflow.executeWorkflow().then(result => {
  if (!result.success) {
    process.exit(1);
  }
});