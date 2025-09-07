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