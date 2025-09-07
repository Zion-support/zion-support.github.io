const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class IntelligentGitWorkflow {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);

    const logFile = path.join(this.logsDir, 'git-workflow.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
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

    return remoteResult.output
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.includes('HEAD'))
      .map(line => line.replace('origin/', ''));
  }

  async checkForConflicts() {
    const statusResult = await this.runCommand('git status', 'Check for merge conflicts');
    if (!statusResult.success) return false;

    return statusResult.output.includes('') || 
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
          conflictType = 'main';
          continue;
        }
        
        if (line.includes('>>>>>>>')) {
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

    const allChanges = [
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
    this.log('🚀 Starting Intelligent Git Workflow...');

    const workflow = {
      timestamp: new Date().toISOString(),
      steps: []
    };

    // Step 1: Check status
    const status = await this.getGitStatus();
    workflow.steps.push({ step: 'check_status', success: !!status, data: status });

    // Step 2: Check for conflicts
    const hasConflicts = await this.checkForConflicts();
    if (hasConflicts) {
      this.log('⚠️ Merge conflicts detected, attempting to resolve...');
      const resolved = await this.autoResolveConflicts();
      workflow.steps.push({ step: 'resolve_conflicts', success: resolved });
    }

    // Step 3: Stage changes
    const staged = await this.stageChanges();
    workflow.steps.push({ step: 'stage_changes', success: staged });

    // Step 4: Commit if there are changes
    if (staged && status && (status.modified.length > 0 || status.added.length > 0 || status.deleted.length > 0)) {
      const commitMessage = `Automated commit: ${new Date().toISOString()}`;
      const committed = await this.commitChanges(commitMessage);
      workflow.steps.push({ step: 'commit_changes', success: committed, message: commitMessage });

      // Step 5: Push changes
      if (committed) {
        const pushed = await this.pushChanges();
        workflow.steps.push({ step: 'push_changes', success: pushed });
      }
    }

    // Step 6: Try to merge to main if on feature branch
    const currentBranch = await this.getCurrentBranch();
    if (currentBranch && currentBranch !== 'main' && currentBranch.startsWith('cursor/')) {
      this.log('🔄 Attempting to merge feature branch to main...');
      const merged = await this.mergeToMain();
      workflow.steps.push({ step: 'merge_to_main', success: merged });
    }

    this.saveWorkflowReport(workflow);
    this.log('✅ Intelligent Git Workflow completed');
    return { success: true, workflow };
  }

  saveWorkflowReport(workflow) {
    const reportFile = path.join(this.logsDir, `git-workflow-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(workflow, null, 2));
    this.log(`📄 Workflow report saved to: ${reportFile}`);
  }
}

// CLI interface
if (require.main === module) {
  const workflow = new IntelligentGitWorkflow();
  workflow.runWorkflow().catch(error => {
    console.error('Git Workflow failed:', error);
    process.exit(1);
  });
}

module.exports = IntelligentGitWorkflow;