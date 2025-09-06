#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class IntelligentGitWorkflow {
  constructor() {
    this.workflowResults = {
      timestamp: new Date().toISOString(),
      operations: [],
      status: 'unknown',
      recommendations: []
    };
  }

  async runWorkflow() {
    console.log('🔄 Starting Intelligent Git Workflow...');
    
    try {
      // Check git status
      await this.checkGitStatus();
      
      // Check for uncommitted changes
      await this.checkUncommittedChanges();
      
      // Check branch status
      await this.checkBranchStatus();
      
      // Check for merge conflicts
      await this.checkMergeConflicts();
      
      // Generate recommendations
      this.generateRecommendations();
      
      console.log('✅ Git Workflow completed');
      
    } catch (error) {
      console.error('❌ Git Workflow failed:', error.message);
      this.workflowResults.status = 'error';
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const hasChanges = status.trim().length > 0;
      
      this.workflowResults.operations.push({
        operation: 'git-status',
        success: true,
        result: hasChanges ? 'dirty' : 'clean',
        details: status
      });
      
      this.workflowResults.status = hasChanges ? 'dirty' : 'clean';
      
    } catch (error) {
      this.workflowResults.operations.push({
        operation: 'git-status',
        success: false,
        error: error.message
      });
    }
  }

  async checkUncommittedChanges() {
    try {
      const diff = execSync('git diff --name-only', { encoding: 'utf8' });
      const staged = execSync('git diff --cached --name-only', { encoding: 'utf8' });
      
      this.workflowResults.operations.push({
        operation: 'uncommitted-changes',
        success: true,
        result: {
          unstaged: diff.trim().split('\n').filter(f => f),
          staged: staged.trim().split('\n').filter(f => f)
        }
      });
      
    } catch (error) {
      this.workflowResults.operations.push({
        operation: 'uncommitted-changes',
        success: false,
        error: error.message
      });
    }
  }

  async checkBranchStatus() {
    try {
      const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      const remoteBranches = execSync('git branch -r', { encoding: 'utf8' });
      const aheadBehind = execSync(`git rev-list --left-right --count origin/${currentBranch}...HEAD`, { encoding: 'utf8' });
      
      const [ahead, behind] = aheadBehind.trim().split('\t').map(Number);
      
      this.workflowResults.operations.push({
        operation: 'branch-status',
        success: true,
        result: {
          currentBranch,
          ahead,
          behind,
          remoteBranches: remoteBranches.trim().split('\n').filter(b => b.trim())
        }
      });
      
    } catch (error) {
      this.workflowResults.operations.push({
        operation: 'branch-status',
        success: false,
        error: error.message
      });
    }
  }

  async checkMergeConflicts() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const hasConflicts = status.includes('UU') || status.includes('AA') || status.includes('DD');
      
      this.workflowResults.operations.push({
        operation: 'merge-conflicts',
        success: true,
        result: hasConflicts ? 'conflicts-found' : 'no-conflicts',
        details: hasConflicts ? status : null
      });
      
    } catch (error) {
      this.workflowResults.operations.push({
        operation: 'merge-conflicts',
        success: false,
        error: error.message
      });
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Check if there are uncommitted changes
    const uncommittedOp = this.workflowResults.operations.find(op => op.operation === 'uncommitted-changes');
    if (uncommittedOp && uncommittedOp.success) {
      const { unstaged, staged } = uncommittedOp.result;
      
      if (unstaged.length > 0) {
        recommendations.push({
          type: 'warning',
          message: 'You have unstaged changes. Consider staging them.',
          action: 'git add .'
        });
      }
      
      if (staged.length > 0) {
        recommendations.push({
          type: 'info',
          message: 'You have staged changes ready to commit.',
          action: 'git commit -m "Your commit message"'
        });
      }
    }
    
    // Check branch status
    const branchOp = this.workflowResults.operations.find(op => op.operation === 'branch-status');
    if (branchOp && branchOp.success) {
      const { ahead, behind } = branchOp.result;
      
      if (ahead > 0) {
        recommendations.push({
          type: 'info',
          message: `Your branch is ${ahead} commits ahead of origin. Consider pushing.`,
          action: 'git push origin <branch-name>'
        });
      }
      
      if (behind > 0) {
        recommendations.push({
          type: 'warning',
          message: `Your branch is ${behind} commits behind origin. Consider pulling.`,
          action: 'git pull origin <branch-name>'
        });
      }
    }
    
    // Check for merge conflicts
    const conflictOp = this.workflowResults.operations.find(op => op.operation === 'merge-conflicts');
    if (conflictOp && conflictOp.success && conflictOp.result === 'conflicts-found') {
      recommendations.push({
        type: 'error',
        message: 'Merge conflicts detected. Resolve them before proceeding.',
        action: 'git status to see conflicted files, then resolve and commit'
      });
    }
    
    this.workflowResults.recommendations = recommendations;
  }

  saveReport() {
    const reportFile = path.join(__dirname, 'reports', 'git-workflow-report.json');
    fs.mkdirSync(path.dirname(reportFile), { recursive: true });
    fs.writeFileSync(reportFile, JSON.stringify(this.workflowResults, null, 2));
    
    console.log(`📊 Git workflow report saved to: ${reportFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const workflow = new IntelligentGitWorkflow();
  workflow.runWorkflow()
    .then(() => {
      workflow.saveReport();
    })
    .catch(console.error);
}

module.exports = IntelligentGitWorkflow;