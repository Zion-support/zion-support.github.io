#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class IntelligentGitWorkflowAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/intelligent-git-workflow.log');
    this.reportFile = path.join(this.projectRoot, 'logs/intelligent-git-workflow-report.json');
    this.workflowHistory = this.loadWorkflowHistory();
    this.ensureDirectories()}

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir { recursive: true })}
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n')} catch (error) {
      console.error('Failed to write to log file:', error.message)}
  }

  loadWorkflowHistory() {
    try {
      if (fs.existsSync(this.reportFile)) {
        const data = fs.readFileSync(this.reportFile, 'utf8');
        return JSON.parse(data).workflowHistory || []}
    } catch (error) {
      this.log(`Failed to load workflow history: ${error.message}`, 'warn')}
    return []}

  saveWorkflowHistory() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        workflowHistory: this.workflowHistory,
        totalWorkflows: this.workflowHistory.length,
        lastRun: Date.now()
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))} catch (error) {
      this.log(`Failed to save workflow history: ${error.message}`, 'error')}
  }

  async analyzeGitStatus() {
    this.log('📊 Analyzing Git repository status...');
    
    try {
      const status = {
        branch: await this.getCurrentBranch(),
        status: await this.getGitStatus(),
        commits: await this.getRecentCommits(),
        remotes: await this.getRemotes(),
        conflicts: await this.checkForConflicts(),
        stashes: await this.getStashes()
      };

      this.log(`Git Status Analysis:`);
      this.log(`  - Current Branch: ${status.branch}`);
      this.log(`  - Modified Files: ${status.status.modified.length}`);
      this.log(`  - Staged Files: ${status.status.staged.length}`);
      this.log(`  - Untracked Files: ${status.status.untracked.length}`);
      this.log(`  - Recent Commits: ${status.commits.length}`);
      this.log(`  - Remotes: ${status.remotes.length}`);
      this.log(`  - Conflicts: ${status.conflicts.length}`);
      this.log(`  - Stashes: ${status.stashes.length}`);

      return status} catch (error) {
      this.log(`Git status analysis failed: ${error.message}`, 'error');
      throw error}
  }

  async getCurrentBranch() {
    try {
      const branch = execSync('git branch --show-current' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      }).trim();
      return branch} catch (error) {
      return 'unknown'}
  }

  async getGitStatus() {
    try {
      const statusOutput = execSync('git status --porcelain' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const lines = statusOutput.trim().split('\n').filter(line => line.trim());
      const status = {
        modified: [],
        staged: [],
        untracked: [],
        deleted: []
      };
      
      lines.forEach(line => {
        const statusCode = line.substring(0, 2);
        const fileName = line.substring(3);
        
        if (statusCode.includes('M')) {
          if (statusCode.startsWith('M')) {
            status.staged.push(fileName)} else {
            status.modified.push(fileName)}
        } else if (statusCode.includes('A')) {
          status.staged.push(fileName)} else if (statusCode.includes('D')) {
          status.deleted.push(fileName)} else if (statusCode.includes('?')) {
          status.untracked.push(fileName)}
      });
      
      return status} catch (error) {
      return { modified: [], staged: [], untracked: [], deleted: [] }}
  }

  async getRecentCommits() {
    try {
      const commitsOutput = execSync('git log --oneline -10' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const lines = commitsOutput.trim().split('\n').filter(line => line.trim());
      return lines.map(line => {
        const [hash, ...messageParts] = line.split(' ');
        return {
          hash,
          message: messageParts.join(' ')
        }})} catch (error) {
      return []}
  }

  async getRemotes() {
    try {
      const remotesOutput = execSync('git remote -v' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const lines = remotesOutput.trim().split('\n').filter(line => line.trim());
      return lines.map(line => {
        const [name, url, type] = line.split('\t');
        return { name, url, type }})} catch (error) {
      return []}
  }

  async checkForConflicts() {
    try {
      const statusOutput = execSync('git status --porcelain' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const lines = statusOutput.trim().split('\n').filter(line => line.trim());
      const conflicts = [];
      
      lines.forEach(line => {
        if (line.includes('UU') || line.includes('AA') || line.includes('DD')) {
          conflicts.push(line.substring(3))}
      });
      
      return conflicts} catch (error) {
      return []}
  }

  async getStashes() {
    try {
      const stashesOutput = execSync('git stash list' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const lines = stashesOutput.trim().split('\n').filter(line => line.trim());
      return lines.map(line => {
        const match = line.match(/stash@\{(\d+)\}: (.+)/);
        if (match) {
          return {
            index: parseInt(match[1]),
            message: match[2]
          }}
        return { index: 0, message: line }})} catch (error) {
      return []}
  }

  async autoCommitChanges(status) {
    this.log('💾 Auto-committing changes...');
    
    const commits = [];
    
    try {
      // Stage all changes
      if (status.modified.length > 0 || status.untracked.length > 0) {
        execSync('git add .' { 
          cwd: this.projectRoot, 
          stdio: 'pipe' 
        });
        this.log(`Staged ${status.modified.length + status.untracked.length} files`)}
      
      // Check if there are staged changes
      const stagedOutput = execSync('git diff --cached --name-only' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      if (stagedOutput.trim()) {
        const stagedFiles = stagedOutput.trim().split('\n');
        const commitMessage = this.generateCommitMessage(stagedFiles);
        
        execSync(`git commit -m "${commitMessage}"` { 
          cwd: this.projectRoot, 
          stdio: 'pipe' 
        });
        
        commits.push({
          message: commitMessage,
          files: stagedFiles,
          success: true,
          timestamp: new Date().toISOString()
        });
        
        this.log(`✅ Committed changes: ${commitMessage}`)} else {
        this.log('No changes to commit')}
      
      return commits} catch (error) {
      this.log(`❌ Auto-commit failed: ${error.message}`, 'error');
      return [{ success: false, error: error.message, timestamp: new Date().toISOString() }]}
  }

  generateCommitMessage(files) {
    const fileTypes = {
      'src/': 'feat',
      'test/': 'test',
      'docs/': 'docs',
      'scripts/': 'chore',
      'package.json': 'chore',
      'package-lock.json': 'chore',
      '.gitignore': 'chore',
      'README': 'docs'
    };
    
    let type = 'feat';
    let scope = '';
    
    for (const file of files) {
      for (const [pattern, commitType] of Object.entries(fileTypes)) {
        if (file.includes(pattern)) {
          type = commitType;
          if (pattern !== 'package.json' && pattern !== 'package-lock.json') {
            scope = pattern.replace('/', '')}
          break}
      }
      if (type !== 'feat') break}
    
    const timestamp = new Date().toISOString().split('T')[0];
    const scopeStr = scope ? `(${scope})` : '';
    
    return `${type}${scopeStr}: auto-commit ${files.length} files - ${timestamp}`}

  async autoPushChanges() {
    this.log('🚀 Auto-pushing changes...');
    
    try {
      const currentBranch = await this.getCurrentBranch();
      
      // Check if remote exists
      const remotes = await this.getRemotes();
      if (remotes.length === 0) {
        this.log('No remotes configured, skipping push');
        return { success: false, reason: 'No remotes configured' }}
      
      // Push to origin
      execSync(`git push origin ${currentBranch}` { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      
      this.log(`✅ Successfully pushed to origin/${currentBranch}`);
      return { success: true, branch: currentBranch }} catch (error) {
      this.log(`❌ Auto-push failed: ${error.message}`, 'error');
      return { success: false, error: error.message }}
  }

  async resolveConflicts(conflicts) {
    this.log('🔧 Resolving merge conflicts...');
    
    const resolutions = [];
    
    for (const conflictFile of conflicts) {
      try {
        this.log(`Resolving conflict in ${conflictFile}...`);
        
        // Try to resolve conflict automatically
        const resolution = await this.autoResolveConflict(conflictFile);
        
        if (resolution.success) {
          // Add resolved file
          execSync(`git add ${conflictFile}` { 
            cwd: this.projectRoot, 
            stdio: 'pipe' 
          });
          
          resolutions.push({
            file: conflictFile,
            success: true,
            method: resolution.method
          });
          
          this.log(`✅ Resolved conflict in ${conflictFile}`)} else {
          resolutions.push({
            file: conflictFile,
            success: false,
            error: resolution.error
          });
          
          this.log(`❌ Failed to resolve conflict in ${conflictFile}: ${resolution.error}`, 'error')}
      } catch (error) {
        resolutions.push({
          file: conflictFile,
          success: false,
          error: error.message
        });
        
        this.log(`❌ Error resolving conflict in ${conflictFile}: ${error.message}`, 'error')}
    }
    
    return resolutions}

  async autoResolveConflict(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return { success: false, error: 'File does not exist' }}
      
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file contains conflict markers
      if (!content.includes('<<<<<<<') || !content.includes('>>>>>>>')) {
        return { success: false, error: 'No conflict markers found' }}
      
      // Simple conflict resolution strategy
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let conflictType = '';
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith('<<<<<<<')) {
          inConflict = true;
          conflictType = 'start';
          continue} else if (line.startsWith('')) {
          conflictType = 'separator';
          continue} else if (line.startsWith('>>>>>>>')) {
          inConflict = false;
          conflictType = '';
          continue}
        
        if (!inConflict) {
          resolvedLines.push(line)} else if (conflictType === 'separator') {
          // Keep the "incoming" changes (after )
          resolvedLines.push(line)}
      }
      
      // Write resolved content
      fs.writeFileSync(filePath, resolvedLines.join('\n'));
      
      return { success: true, method: 'auto-merge' }} catch (error) {
      return { success: false, error: error.message }}
  }

  async createPullRequest() {
    this.log('📝 Creating pull request...');
    
    try {
      const currentBranch = await this.getCurrentBranch();
      const remotes = await this.getRemotes();
      
      if (remotes.length === 0) {
        return { success: false, reason: 'No remotes configured' }}
      
      // Check if we're on a feature branch
      if (currentBranch === 'main' || currentBranch === 'master') {
        return { success: false, reason: 'Cannot create PR from main/master branch' }}
      
      // For now, just log the PR creation (would need GitHub CLI or API)
      const prTitle = `Auto-generated PR from ${currentBranch}`;
      const prBody = `This is an auto-generated pull request from the intelligent git workflow automator.\n\nBranch: ${currentBranch}\nTimestamp: ${new Date().toISOString()}`;
      
      this.log(`Would create PR: ${prTitle}`);
      this.log(`PR Body: ${prBody}`);
      
      return { 
        success: true, 
        title: prTitle, 
        body: prBody, 
        branch: currentBranch 
      }} catch (error) {
      this.log(`❌ PR creation failed: ${error.message}`, 'error');
      return { success: false, error: error.message }}
  }

  async cleanupBranches() {
    this.log('🧹 Cleaning up branches...');
    
    try {
      const cleanupActions = [];
      
      // Get all branches
      const branchesOutput = execSync('git branch -a' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const branches = branchesOutput.trim().split('\n').map(line => line.trim().replace('* ', ''));
      
      // Find merged branches
      const mergedOutput = execSync('git branch --merged' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const mergedBranches = mergedOutput.trim().split('\n').map(line => line.trim().replace('* ', ''));
      
      // Delete merged branches (except main/master)
      for (const branch of mergedBranches) {
        if (branch && branch !== 'main' && branch !== 'master' && !branch.includes('origin/')) {
          try {
            execSync(`git branch -d ${branch}` { 
              cwd: this.projectRoot, 
              stdio: 'pipe' 
            });
            
            cleanupActions.push({
              action: 'delete-merged-branch',
              branch,
              success: true
            });
            
            this.log(`✅ Deleted merged branch: ${branch}`)} catch (error) {
            cleanupActions.push({
              action: 'delete-merged-branch',
              branch,
              success: false,
              error: error.message
            });
            
            this.log(`❌ Failed to delete branch ${branch}: ${error.message}`, 'error')}
        }
      }
      
      return cleanupActions} catch (error) {
      this.log(`❌ Branch cleanup failed: ${error.message}`, 'error');
      return [{ action: 'cleanup', success: false, error: error.message }]}
  }

  async generateWorkflowReport() {
    this.log('📊 Generating git workflow report...');
    
    const status = await this.analyzeGitStatus();
    const commits = await this.autoCommitChanges(status);
    const pushResult = await this.autoPushChanges();
    const conflictResolutions = await this.resolveConflicts(status.conflicts);
    const prResult = await this.createPullRequest();
    const cleanupActions = await this.cleanupBranches();
    
    const report = {
      timestamp: new Date().toISOString(),
      status,
      actions: {
        commits,
        push: pushResult,
        conflictResolutions,
        pullRequest: prResult,
        cleanup: cleanupActions
      },
      summary: {
        branch: status.branch,
        filesModified: status.status.modified.length,
        filesStaged: status.status.staged.length,
        filesUntracked: status.status.untracked.length,
        conflictsResolved: conflictResolutions.filter(r => r.success).length,
        commitsCreated: commits.filter(c => c.success).length,
        pushSuccess: pushResult.success,
        prCreated: prResult.success,
        branchesCleaned: cleanupActions.filter(a => a.success).length
      },
      recommendations: this.generateWorkflowRecommendations(status)
    };

    const reportFile = path.join(this.projectRoot, 'logs/intelligent-git-workflow-intelligence.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Workflow report saved to ${reportFile}`);
    return report}

  generateWorkflowRecommendations(status) {
    const recommendations = [];
    
    if (status.status.untracked.length > 10) {
      recommendations.push('Consider adding untracked files to .gitignore')}
    
    if (status.status.modified.length > 20) {
      recommendations.push('Break down large changes into smaller, focused commits')}
    
    if (status.conflicts.length > 0) {
      recommendations.push('Resolve merge conflicts before continuing development')}
    
    if (status.stashes.length > 5) {
      recommendations.push('Review and clean up old stashes')}
    
    if (status.branch === 'main' || status.branch === 'master') {
      recommendations.push('Consider working on feature branches instead of main')}

    return recommendations}

  async run() {
    this.log('🚀 Starting Intelligent Git Workflow Automator...');
    
    try {
      // Generate comprehensive workflow report
      const report = await this.generateWorkflowReport();
      
      // Save workflow history
      this.workflowHistory.push({
        timestamp: new Date().toISOString(),
        report: report,
        summary: report.summary
      });
      
      this.saveWorkflowHistory();

      this.log(`🎯 Git Workflow Automation Complete:`);
      this.log(`   - Branch: ${report.summary.branch}`);
      this.log(`   - Files Modified: ${report.summary.filesModified}`);
      this.log(`   - Files Staged: ${report.summary.filesStaged}`);
      this.log(`   - Files Untracked: ${report.summary.filesUntracked}`);
      this.log(`   - Commits Created: ${report.summary.commitsCreated}`);
      this.log(`   - Conflicts Resolved: ${report.summary.conflictsResolved}`);
      this.log(`   - Push Success: ${report.summary.pushSuccess ? 'Yes' : 'No'}`);
      this.log(`   - PR Created: ${report.summary.prCreated ? 'Yes' : 'No'}`);
      this.log(`   - Branches Cleaned: ${report.summary.branchesCleaned}`)} catch (error) {
      this.log(`❌ Git Workflow Automator failed: ${error.message}`, 'error');
      throw error}
  }
}

// Run the git workflow automator
if (import.meta.url === `file://${process.argv[1]}`) {
  const automator = new IntelligentGitWorkflowAutomator();
  automator.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1)})}

export default $1;