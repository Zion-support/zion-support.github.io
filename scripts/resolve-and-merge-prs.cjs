#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Comprehensive PR Merge and Conflict Resolution System');
console.log('======================================================');

class PRMergeResolver {
  constructor() {
    this.owner = 'Zion-Holdings';
    this.repo = 'zion.app';
    this.token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
    this.conflictsResolved = 0;
    this.prsMerged = 0;
    this.errors = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async makeRequest(url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.github.com',
        port: 443,
        path: url,
        method: method,
        headers: {
          'Authorization': `token ${this.token}`,
          'User-Agent': 'PR-Merge-Resolver',
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        }
      };

      if (data) {
        options.headers['Content-Length'] = Buffer.byteLength(data);
      }

      const req = require('https').request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          try {
            const result = JSON.parse(body);
            resolve({ status: res.statusCode, data: result });
          } catch (e) {
            resolve({ status: res.statusCode, data: body });
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      if (data) {
        req.write(data);
      }
      req.end();
    });
  }

  async getOpenPRs() {
    try {
      this.log('Fetching open PRs...');
      const response = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls?state=open&per_page=100`);
      
      if (response.status !== 200) {
        throw new Error(`Failed to fetch PRs: ${response.status}`);
      }

      return response.data || [];
    } catch (error) {
      this.log(`Error fetching PRs: ${error.message}`, 'error');
      return [];
    }
  }

  async getPRDetails(prNumber) {
    try {
      const response = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls/${prNumber}`);
      return response.status === 200 ? response.data : null;
    } catch (error) {
      this.log(`Error fetching PR ${prNumber}: ${error.message}`, 'error');
      return null;
    }
  }

  async checkPRMergeability(prNumber) {
    try {
      const response = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls/${prNumber}`);
      if (response.status === 200) {
        return response.data.mergeable;
      }
      return false;
    } catch (error) {
      this.log(`Error checking mergeability for PR ${prNumber}: ${error.message}`, 'error');
      return false;
    }
  }

  async mergePR(prNumber, title) {
    try {
      this.log(`Attempting to merge PR #${prNumber}: ${title}`);
      
      const mergeData = JSON.stringify({
        commit_title: `Merge PR #${prNumber}: ${title}`,
        commit_message: `Automated merge of PR #${prNumber}`,
        merge_method: 'merge'
      });

      const response = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls/${prNumber}/merge`, 'PUT', mergeData);
      
      if (response.status === 200) {
        this.log(`Successfully merged PR #${prNumber}`, 'success');
        this.prsMerged++;
        return { status: 'merged', message: `PR #${prNumber} merged successfully` };
      } else {
        this.log(`Failed to merge PR #${prNumber}: ${response.data.message || 'Unknown error'}`, 'error');
        return { status: 'failed', message: response.data.message || 'Unknown error' };
      }
    } catch (error) {
      this.log(`Error merging PR #${prNumber}: ${error.message}`, 'error');
      return { status: 'error', message: error.message };
    }
  }

  async resolveMergeConflicts() {
    this.log('Checking for merge conflicts...');
    
    try {
      // First, try to fetch and merge the latest main branch
      execSync('git fetch origin main', { stdio: 'pipe' });
      
      // Check if there are any merge conflicts
      try {
        execSync('git merge origin/main --no-commit --no-ff', { stdio: 'pipe' });
        this.log('No merge conflicts found', 'success');
        return true;
      } catch (mergeError) {
        this.log('Merge conflicts detected, attempting to resolve...', 'warning');
        
        // Get the status to see which files have conflicts
        const status = execSync('git status --porcelain', { encoding: 'utf8' });
        const conflictFiles = status.split('\n')
          .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
          .map(line => line.split(' ').pop());

        this.log(`Found ${conflictFiles.length} files with conflicts`);

        // Try to resolve conflicts automatically
        for (const file of conflictFiles) {
          if (fs.existsSync(file)) {
            this.log(`Resolving conflicts in ${file}`);
            await this.resolveFileConflicts(file);
          }
        }

        // Try to complete the merge
        try {
          execSync('git add .', { stdio: 'pipe' });
          execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'pipe' });
          this.log('Successfully resolved and committed merge conflicts', 'success');
          this.conflictsResolved++;
          return true;
        } catch (commitError) {
          this.log('Failed to commit resolved conflicts, aborting merge', 'error');
          execSync('git merge --abort', { stdio: 'pipe' });
          return false;
        }
      }
    } catch (error) {
      this.log(`Error during conflict resolution: ${error.message}`, 'error');
      return false;
    }
  }

  async resolveFileConflicts(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove merge conflict markers
      content = content
        .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
        .replace(/<<<<<<< [a-f0-9]+[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
        .replace(/<<<<<<< [a-f0-9]+[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
        .replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
        .replace(/<<<<<<< [a-f0-9]+[\s\S]*?=======/g, '');

      // Clean up any remaining conflict markers
      content = content
        .replace(/^<<<<<<<.*$/gm, '')
        .replace(/^=======.*$/gm, '')
        .replace(/^>>>>>>>.*$/gm, '');

      // Remove empty lines that might have been left behind
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

      fs.writeFileSync(filePath, content);
      this.log(`Resolved conflicts in ${filePath}`, 'success');
    } catch (error) {
      this.log(`Error resolving conflicts in ${filePath}: ${error.message}`, 'error');
    }
  }

  async processPRs() {
    if (!this.token) {
      this.log('GITHUB_TOKEN is required. Please set GITHUB_TOKEN environment variable.', 'error');
      return;
    }

    try {
      // First resolve any local merge conflicts
      await this.resolveMergeConflicts();

      // Get all open PRs
      const openPRs = await this.getOpenPRs();
      
      if (openPRs.length === 0) {
        this.log('No open PRs found', 'warning');
        return;
      }

      this.log(`Found ${openPRs.length} open PRs`);

      // Process each PR
      for (const pr of openPRs) {
        this.log(`Processing PR #${pr.number}: ${pr.title}`);
        
        // Check if PR is mergeable
        const isMergeable = await this.checkPRMergeability(pr.number);
        
        if (isMergeable) {
          const result = await this.mergePR(pr.number, pr.title);
          if (result.status === 'merged') {
            this.log(`✅ Successfully merged PR #${pr.number}`, 'success');
          } else {
            this.log(`❌ Failed to merge PR #${pr.number}: ${result.message}`, 'error');
            this.errors.push({ pr: pr.number, error: result.message });
          }
        } else {
          this.log(`⚠️ PR #${pr.number} is not mergeable, skipping`, 'warning');
          this.errors.push({ pr: pr.number, error: 'Not mergeable' });
        }

        // Add a small delay between PRs to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      // Generate summary report
      this.generateSummaryReport();

    } catch (error) {
      this.log(`Error processing PRs: ${error.message}`, 'error');
      this.errors.push({ error: error.message });
    }
  }

  generateSummaryReport() {
    const report = {
      timestamp: new Date().toISOString(),
      conflictsResolved: this.conflictsResolved,
      prsMerged: this.prsMerged,
      errors: this.errors,
      summary: {
        totalConflictsResolved: this.conflictsResolved,
        totalPRsMerged: this.prsMerged,
        totalErrors: this.errors.length
      }
    };

    const reportPath = path.join(__dirname, '..', 'merge-results.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('======================================================');
    this.log(`📊 MERGE SUMMARY REPORT`);
    this.log('======================================================');
    this.log(`✅ Conflicts Resolved: ${this.conflictsResolved}`);
    this.log(`✅ PRs Merged: ${this.prsMerged}`);
    this.log(`❌ Errors: ${this.errors.length}`);
    this.log(`📄 Detailed report saved to: ${reportPath}`);
    this.log('======================================================');
  }
}

// Main execution
async function main() {
  const resolver = new PRMergeResolver();
  await resolver.processPRs();
}

if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  });
}

module.exports = PRMergeResolver;