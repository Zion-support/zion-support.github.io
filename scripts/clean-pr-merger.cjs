#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Clean PR merger script to resolve conflicts and merge branches
class PRMerger {
  constructor() {
    this.conflictsResolved = 0;
    this.mergesSuccessful = 0;
    this.errors = [];
  }

  // Get current repository info
  getRepoInfo() {
    try {
      const remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
      const match = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
      if (!match) {
        throw new Error('Unable to parse owner/repo from origin');
      }
      return { owner: match[1], repo: match[2] };
    } catch (error) {
      throw new Error(`Failed to get repo info: ${error.message}`);
    }
  }

  // Get list of remote branches that are not main
  getRemoteBranches() {
    try {
      const branches = execSync('git ls-remote --heads origin', { encoding: 'utf8' });
      return branches
        .split('\n')
        .filter(line => line.includes('refs/heads/'))
        .map(line => {
          const parts = line.split('\t');
          const branchName = parts[1].replace('refs/heads/', '');
          return {
            hash: parts[0],
            name: branchName
          };
        })
        .filter(branch => branch.name !== 'main' && !branch.name.includes('backup'));
    } catch (error) {
      console.error(`Error getting remote branches: ${error.message}`);
      return [];
    }
  }

  // Check if a branch has conflicts with main
  checkConflicts(branchName) {
    try {
      console.log(`Checking conflicts for branch: ${branchName}`);

      // Fetch the latest changes
      execSync('git fetch origin', { stdio: 'pipe' });

      // Try to merge without committing
      const mergeResult = execSync(
        `git merge origin/${branchName} --no-commit --no-ff`,
        { stdio: 'pipe' }
      );

      // If we get here, no conflicts
      execSync('git merge --abort', { stdio: 'pipe' });
      return { hasConflicts: false, message: 'No conflicts' };

    } catch (error) {
      // Check if it's a conflict error
      if (error.stdout && error.stdout.includes('Automatic merge failed')) {
        execSync('git merge --abort', { stdio: 'pipe' });
        return { hasConflicts: true, message: 'Merge conflicts detected' };
      }

      // Other errors
      execSync('git merge --abort', { stdio: 'pipe' });
      return { hasConflicts: false, message: `Error: ${error.message}` };
    }
  }

  // Resolve conflicts in a file
  resolveFileConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');

      if (!content.includes('')) {
        return false;
      }

      // Clean merge conflicts - keep the HEAD version by default
      let resolvedContent = content
          const headMatch = match.match(/([\s\S]*?)
          return headMatch ? headMatch[1].trim() : '';
        })
        .replace(/^$/gm, '')
        .replace(/^\s*$/gm, '')
        .replace(/\n{3,}/g, '\n\n'); // Clean up excessive newlines

      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent);
      this.conflictsResolved++;
      return true;

    } catch (error) {
      console.error(`Error resolving conflicts in ${filePath}: ${error.message}`);
      return false;
    }
  }

  // Resolve all conflicts in the repository
  resolveAllConflicts() {
    try {
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .trim()
        .split('\n')
        .filter(file => file.trim());

      if (conflictedFiles.length === 0) {
        return true;
      }

      console.log(`Found ${conflictedFiles.length} conflicted files`);

      // Resolve conflicts in each file
      for (const file of conflictedFiles) {
        if (file.trim()) {
          this.resolveFileConflicts(file);
        }
      }

      // Add resolved files
      if (conflictedFiles.length > 0) {
        execSync('git add .', { stdio: 'pipe' });
      }

      return true;

    } catch (error) {
      console.error(`Error resolving conflicts: ${error.message}`);
      return false;
    }
  }

  // Merge a branch into main
  async mergeBranch(branchName) {
    try {
      console.log(`\n=== Merging branch: ${branchName} ===`);

      // Fetch latest changes
      execSync('git fetch origin', { stdio: 'pipe' });

      // Checkout main and ensure it's up to date
      execSync('git checkout main', { stdio: 'pipe' });
      execSync('git pull origin main', { stdio: 'pipe' });

      // Try to merge the branch
      try {
        execSync(`git merge origin/${branchName} --no-ff -m "Merge branch '${branchName}' into main"`, { stdio: 'pipe' });
        console.log(`✅ Successfully merged ${branchName}`);
        this.mergesSuccessful++;
        return true;

      } catch (mergeError) {
        console.log(`⚠️  Merge conflicts detected in ${branchName}, attempting to resolve...`);

        // Try to resolve conflicts
        if (this.resolveAllConflicts()) {
          // Complete the merge
          execSync(`git commit -m "Merge branch '${branchName}' into main - resolved conflicts"`, { stdio: 'pipe' });
          console.log(`✅ Successfully merged ${branchName} with resolved conflicts`);
          this.mergesSuccessful++;
          return true;
        } else {
          console.log(`❌ Failed to resolve conflicts in ${branchName}`);
          execSync('git merge --abort', { stdio: 'pipe' });
          this.errors.push(`Failed to merge ${branchName}: Could not resolve conflicts`);
          return false;
        }
      }

    } catch (error) {
      console.error(`❌ Error merging ${branchName}: ${error.message}`);
      this.errors.push(`Error merging ${branchName}: ${error.message}`);
      return false;
    }
  }

  // Main execution function
  async run() {
    console.log('🚀 Starting PR merger process...\n');

    try {
      const repoInfo = this.getRepoInfo();
      console.log(`Repository: ${repoInfo.owner}/${repoInfo.repo}`);

      // Get list of branches to merge
      const branches = this.getRemoteBranches();
      console.log(`Found ${branches.length} branches to process\n`);

      if (branches.length === 0) {
        console.log('No branches to merge.');
        return;
      }

      // Process branches in batches to avoid overwhelming the system
      const batchSize = 5;
      for (let i = 0; i < branches.length; i += batchSize) {
        const batch = branches.slice(i, i + batchSize);
        console.log(`\n📦 Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(branches.length/batchSize)}`);

        for (const branch of batch) {
          await this.mergeBranch(branch.name);

          // Small delay between merges
          await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Longer delay between batches
        if (i + batchSize < branches.length) {
          console.log('⏳ Waiting before next batch...');
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }

      // Push changes to remote
      console.log('\n📤 Pushing changes to remote...');
      execSync('git push origin main', { stdio: 'pipe' });
      console.log('✅ Changes pushed successfully');

      // Summary
      console.log('\n📊 MERGE SUMMARY:');
      console.log(`✅ Successful merges: ${this.mergesSuccessful}`);
      console.log(`🔧 Conflicts resolved: ${this.conflictsResolved}`);
      console.log(`❌ Errors: ${this.errors.length}`);

      if (this.errors.length > 0) {
        console.log('\n❌ ERRORS:');
        this.errors.forEach(error => console.log(`  - ${error}`));
      }

    } catch (error) {
      console.error(`❌ Fatal error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the merger
if (require.main === module) {
  const merger = new PRMerger();
  merger.run().catch(error => {
    console.error(`❌ Script failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = PRMerger;