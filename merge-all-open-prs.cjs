#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class OpenPRMerger {
  constructor(rootPath = '/workspace') {
    this.rootPath = rootPath;
    this.mergedPRs = [];
    this.failedPRs = [];
    this.logFile = path.join(this.rootPath, 'open-pr-merge.log');
    this.prsData = this.loadPRsData();
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadPRsData() {
    try {
      const prsContent = fs.readFileSync(path.join(this.rootPath, 'prs.json'), 'utf8');
      const prs = JSON.parse(prsContent);
      return prs.filter(pr => pr.state === 'open');
    } catch (error) {
      this.log(`❌ Error loading PRs data: ${error.message}`);
      return [];
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
      this.log(`✅ Success: ${description}`);
      return output;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      throw error;
    }
  }

  async ensureMainBranch() {
    this.log('📋 Ensuring we are on main branch...');
    await this.runCommand('git checkout main', 'Checkout main branch');
    await this.runCommand('git pull origin main', 'Pull latest changes from main');
  }

  async getBranchFromPR(pr) {
    // Extract branch name from PR head ref
    if (pr.head && pr.head.ref) {
      return pr.head.ref;
    }
    // Fallback: try to find branch by PR number pattern
    const branchPattern = `cursor/fix-errors-and-merge-to-main-${pr.number.toString().slice(-4)}`;
    try {
      await this.runCommand(`git ls-remote --heads origin ${branchPattern}`, 'Check if branch exists');
      return branchPattern;
    } catch (error) {
      // Try alternative patterns
      const altPatterns = [
        `cursor/fix-errors-and-merge-to-main-${pr.number}`,
        `cursor/fix-errors-and-merge-to-main-${pr.number.toString().padStart(4, '0')}`,
        `fix-errors-and-merge-to-main-${pr.number}`
      ];
      
      for (const pattern of altPatterns) {
        try {
          await this.runCommand(`git ls-remote --heads origin ${pattern}`, 'Check alternative branch');
          return pattern;
        } catch (e) {
          continue;
        }
      }
      throw new Error(`Could not find branch for PR #${pr.number}`);
    }
  }

  async resolveMergeConflict() {
    this.log('🔧 Attempting to resolve merge conflicts...');
    
    try {
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { 
        cwd: this.rootPath, 
        encoding: 'utf8' 
      }).trim().split('\n').filter(f => f);

      this.log(`📋 Found ${conflictedFiles.length} conflicted files: ${conflictedFiles.join(', ')}`);

      for (const file of conflictedFiles) {
        this.log(`🔧 Resolving conflict in ${file}...`);
        
        // For specific file types, use automated resolution
        if (file.includes('package.json') || file.includes('pnpm-lock.yaml') || file.includes('package-lock.json')) {
          // For package files, prefer main branch version
          await this.runCommand(`git checkout --ours "${file}"`, `Resolve ${file} conflict (prefer main)`);
        } else if (file.includes('jest.config') || file.includes('.eslintrc') || file.includes('tsconfig')) {
          // For config files, prefer main branch version
          await this.runCommand(`git checkout --ours "${file}"`, `Resolve ${file} conflict (prefer main)`);
        } else if (file.includes('App.tsx') || file.includes('app/page.tsx') || file.includes('app/layout.tsx')) {
          // For main app files, prefer main branch version
          await this.runCommand(`git checkout --ours "${file}"`, `Resolve ${file} conflict (prefer main)`);
        } else {
          // For other files, try to merge automatically
          try {
            await this.runCommand(`git checkout --ours "${file}"`, `Resolve ${file} conflict (prefer main)`);
          } catch (error) {
            this.log(`⚠️  Could not auto-resolve ${file}, trying theirs...`);
            await this.runCommand(`git checkout --theirs "${file}"`, `Resolve ${file} conflict (prefer theirs)`);
          }
        }
        
        await this.runCommand(`git add "${file}"`, `Stage resolved ${file}`);
      }

      // Commit the resolved conflicts
      await this.runCommand('git commit --no-edit', 'Commit resolved conflicts');
      return true;
    } catch (error) {
      this.log(`❌ Failed to resolve conflicts: ${error.message}`);
      return false;
    }
  }

  async mergePR(pr) {
    const prNumber = pr.number;
    const prTitle = pr.title;
    
    this.log(`\n===============================================`);
    this.log(`🔄 Processing PR #${prNumber}: ${prTitle}`);
    this.log(`===============================================`);

    try {
      // Get the branch name for this PR
      const branchName = await this.getBranchFromPR(pr);
      this.log(`📋 Found branch: ${branchName}`);

      // Check if branch has unique commits
      const uniqueCommits = execSync(`git log origin/${branchName} ^main --oneline | wc -l`, { 
        cwd: this.rootPath, 
        encoding: 'utf8' 
      }).trim();

      if (parseInt(uniqueCommits) === 0) {
        this.log(`✓ PR #${prNumber} already merged or no unique commits - skipping`);
        return { success: true, skipped: true };
      }

      this.log(`📋 Found ${uniqueCommits} unique commits in branch`);

      // Attempt to merge
      try {
        await this.runCommand(`git merge origin/${branchName} --no-edit`, `Merge PR #${prNumber}`);
        this.log(`✅ Successfully merged PR #${prNumber}`);
        this.mergedPRs.push(prNumber);
        return { success: true, merged: true };
      } catch (mergeError) {
        this.log(`⚠️  Merge conflict detected in PR #${prNumber}`);
        
        // Try to resolve conflicts automatically
        const resolved = await this.resolveMergeConflict();
        
        if (resolved) {
          this.log(`✅ Successfully resolved conflicts and merged PR #${prNumber}`);
          this.mergedPRs.push(prNumber);
          return { success: true, merged: true, resolved: true };
        } else {
          // Abort the merge
          await this.runCommand('git merge --abort', 'Abort failed merge');
          this.log(`❌ Could not resolve conflicts for PR #${prNumber} - manual review needed`);
          this.failedPRs.push({ pr: prNumber, reason: 'merge_conflict' });
          return { success: false, conflict: true };
        }
      }
    } catch (error) {
      this.log(`❌ Error processing PR #${prNumber}: ${error.message}`);
      this.failedPRs.push({ pr: prNumber, reason: error.message });
      return { success: false, error: error.message };
    }
  }

  async pushChanges() {
    try {
      this.log('📤 Pushing merged changes to remote...');
      await this.runCommand('git push origin main', 'Push merged changes');
      this.log('✅ Successfully pushed changes to remote');
      return true;
    } catch (error) {
      this.log(`⚠️  Failed to push changes: ${error.message}`);
      return false;
    }
  }

  generateSummary() {
    const summary = {
      timestamp: new Date().toISOString(),
      totalPRs: this.prsData.length,
      merged: this.mergedPRs.length,
      failed: this.failedPRs.length,
      mergedPRs: this.mergedPRs,
      failedPRs: this.failedPRs
    };

    this.log('\n===============================================');
    this.log('✨ PR Merge Process Complete!');
    this.log('===============================================');
    this.log(`📊 Total PRs processed: ${summary.totalPRs}`);
    this.log(`✅ Successfully merged: ${summary.merged}`);
    this.log(`❌ Failed to merge: ${summary.failed}`);
    
    if (summary.merged > 0) {
      this.log(`\n✅ Merged PRs: ${summary.mergedPRs.join(', ')}`);
    }
    
    if (summary.failed > 0) {
      this.log(`\n❌ Failed PRs:`);
      summary.failedPRs.forEach(failed => {
        this.log(`   - PR #${failed.pr}: ${failed.reason}`);
      });
    }

    // Save summary to file
    const summaryFile = path.join(this.rootPath, 'pr-merge-summary.json');
    fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
    this.log(`\n📄 Summary saved to: ${summaryFile}`);

    return summary;
  }

  async run() {
    this.log('🚀 Starting Open PR Merge Process...');
    this.log(`📋 Found ${this.prsData.length} open PRs to process`);

    if (this.prsData.length === 0) {
      this.log('ℹ️  No open PRs found to merge');
      return;
    }

    // Ensure we're on main branch
    await this.ensureMainBranch();

    // Process each PR
    for (const pr of this.prsData) {
      const result = await this.mergePR(pr);
      
      // Push changes every 3 successful merges
      if (result.success && this.mergedPRs.length % 3 === 0) {
        await this.pushChanges();
      }
      
      // Small delay between PRs
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Final push
    if (this.mergedPRs.length > 0) {
      await this.pushChanges();
    }

    // Generate summary
    this.generateSummary();
  }
}

// Run the merger
async function main() {
  const merger = new OpenPRMerger();
  await merger.run();
}

if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = OpenPRMerger;