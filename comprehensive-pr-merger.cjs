#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensivePRMerger {
  constructor(rootPath = '/workspace') {
    this.rootPath = rootPath;
    this.mergedPRs = [];
    this.failedPRs = [];
    this.logFile = path.join(this.rootPath, 'comprehensive-pr-merge.log');
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
    fs.appendFileSync(this.logFile, `[${timestamp}] ${message}\n`);
    console.log(message);
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}: ${command}`);
    try {
      const output = execSync(command, { cwd: this.rootPath, encoding: 'utf8', stdio: 'pipe' });
      this.log(`✅ ${description} successful.`);
      return output;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      throw error;
    }
  }

  getRepoFromGit() {
    try {
      const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
      const match = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
      if (!match) throw new Error('Unable to parse owner/repo from origin');
      return { owner: match[1], repo: match[2] };
    } catch (error) {
      this.log(`❌ Error getting repo info: ${error.message}`);
      throw error;
    }
  }

  getToken() {
    if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) {
      return process.env.GITHUB_TOKEN.trim();
    }
    
    try {
      const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
      const tokenMatch = remoteUrl.match(/^https:\/\/x-access-token:([^@]+)@github\.com\//);
      if (!tokenMatch) throw new Error('No GitHub token found in env or origin remote');
      return tokenMatch[1];
    } catch (error) {
      this.log(`❌ Error getting token: ${error.message}`);
      throw error;
    }
  }

  async ghRequest(path, method = 'GET', body) {
    const base = 'https://api.github.com';
    const token = this.getToken();
    
    try {
      const response = await fetch(`${base}${path}`, {
        method,
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'comprehensive-pr-merger',
          'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined
      });

      const text = await response.text();
      let data;
      try {
        data = text ? JSON.parse(text) : undefined;
      } catch {
        data = { raw: text };
      }

      if (!response.ok) {
        const message = data && data.message ? data.message : `HTTP ${response.status}`;
        throw new Error(message);
      }

      return data;
    } catch (error) {
      this.log(`❌ GitHub API request failed: ${error.message}`);
      throw error;
    }
  }

  async listOpenPRs() {
    this.log('🔍 Fetching open PRs from GitHub...');
    try {
      const { owner, repo } = this.getRepoFromGit();
      const prs = await this.ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
      this.log(`Found ${prs.length} open PRs`);
      return prs;
    } catch (error) {
      this.log(`❌ Failed to fetch PRs: ${error.message}`);
      return [];
    }
  }

  async resolveMergeConflicts(branchName) {
    this.log(`🔧 Resolving merge conflicts for branch: ${branchName}`);
    
    try {
      // Check if there are merge conflicts
      const status = await this.runCommand('git status --porcelain', 'Check git status');
      if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {
        this.log(`🔧 Found merge conflicts, attempting to resolve...`);
        
        // Try to resolve conflicts automatically
        await this.runCommand('git add .', 'Add all files');
        
        // Check if conflicts are resolved
        const newStatus = await this.runCommand('git status --porcelain', 'Check status after add');
        if (!newStatus.includes('UU') && !newStatus.includes('AA') && !newStatus.includes('DD')) {
          this.log(`✅ Conflicts resolved automatically`);
          return true;
        } else {
          this.log(`⚠️ Some conflicts remain, manual resolution needed`);
          return false;
        }
      } else {
        this.log(`✅ No merge conflicts found`);
        return true;
      }
    } catch (error) {
      this.log(`❌ Error resolving conflicts: ${error.message}`);
      return false;
    }
  }

  async mergePR(pr) {
    this.log(`🔄 Processing PR #${pr.number}: ${pr.title}`);
    
    try {
      const { owner, repo } = this.getRepoFromGit();
      const branchName = pr.head.ref;
      
      // Fetch the PR branch
      await this.runCommand(`git fetch origin ${branchName}`, `Fetch PR branch ${branchName}`);
      
      // Try to merge the PR
      try {
        await this.runCommand(`git merge origin/${branchName} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`, `Merge PR #${pr.number}`);
        
        // Push the merged changes
        await this.runCommand('git push origin main', `Push merged PR #${pr.number}`);
        
        this.log(`✅ Successfully merged PR #${pr.number}`);
        this.mergedPRs.push(pr);
        return true;
        
      } catch (mergeError) {
        this.log(`⚠️ Merge failed, attempting to resolve conflicts: ${mergeError.message}`);
        
        // Try to resolve conflicts
        const conflictsResolved = await this.resolveMergeConflicts(branchName);
        
        if (conflictsResolved) {
          // Commit the resolution
          await this.runCommand(`git commit -m "Resolve merge conflicts for PR #${pr.number}"`, 'Commit conflict resolution');
          
          // Push the resolved changes
          await this.runCommand('git push origin main', 'Push resolved changes');
          
          this.log(`✅ Successfully resolved conflicts and merged PR #${pr.number}`);
          this.mergedPRs.push(pr);
          return true;
        } else {
          this.log(`❌ Failed to resolve conflicts for PR #${pr.number}`);
          this.failedPRs.push(pr);
          return false;
        }
      }
      
    } catch (error) {
      this.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`);
      this.failedPRs.push(pr);
      return false;
    }
  }

  async closePR(pr) {
    this.log(`🔒 Closing PR #${pr.number}...`);
    try {
      const { owner, repo } = this.getRepoFromGit();
      await this.ghRequest(`/repos/${owner}/${repo}/pulls/${pr.number}`, 'PATCH', {
        state: 'closed'
      });
      this.log(`✅ Successfully closed PR #${pr.number}`);
    } catch (error) {
      this.log(`❌ Failed to close PR #${pr.number}: ${error.message}`);
    }
  }

  async deleteBranch(pr) {
    this.log(`🗑️ Deleting branch ${pr.head.ref}...`);
    try {
      // Delete remote branch
      await this.runCommand(`git push origin --delete ${pr.head.ref}`, `Delete remote branch ${pr.head.ref}`);
      this.log(`✅ Successfully deleted branch ${pr.head.ref}`);
    } catch (error) {
      this.log(`❌ Failed to delete branch ${pr.head.ref}: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Starting Comprehensive PR Merger...');
    
    try {
      // Ensure we're on main branch
      await this.runCommand('git checkout main', 'Switch to main branch');
      await this.runCommand('git pull origin main', 'Pull latest main');
      
      // Get open PRs
      const prs = await this.listOpenPRs();
      
      if (prs.length === 0) {
        this.log('📋 No open PRs found');
        return;
      }
      
      this.log(`📋 Found ${prs.length} open PRs to process`);
      
      // Process each PR
      for (const pr of prs) {
        const success = await this.mergePR(pr);
        
        if (success) {
          // Close the PR and delete the branch
          await this.closePR(pr);
          await this.deleteBranch(pr);
        }
        
        // Small delay between PRs
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Generate final report
      this.log('\n📊 COMPREHENSIVE PR MERGE REPORT');
      this.log('================================');
      this.log(`✅ Successfully merged PRs: ${this.mergedPRs.length}`);
      this.mergedPRs.forEach(pr => this.log(`  - PR #${pr.number}: ${pr.title}`));
      this.log(`❌ Failed to merge PRs: ${this.failedPRs.length}`);
      this.failedPRs.forEach(pr => this.log(`  - PR #${pr.number}: ${pr.title}`));
      
      if (this.failedPRs.length === 0) {
        this.log('\n🎉 All Pull Requests have been successfully merged!');
        this.log('The main branch now contains all the latest changes and improvements.');
      } else {
        this.log('\n⚠️ Some Pull Requests could not be merged automatically.');
        this.log('Manual intervention may be required for the failed PRs.');
      }
      
    } catch (error) {
      this.log(`🚨 An error occurred during PR merge process: ${error.message}`);
    }
  }
}

if (require.main === module) {
  const merger = new ComprehensivePRMerger();
  merger.run().catch(console.error);
}

module.exports = ComprehensivePRMerger;