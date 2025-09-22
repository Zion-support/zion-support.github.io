#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

// Targeted PR merger for recent and relevant branches
class TargetedPRMerger {
  constructor() {
    this.conflictsResolved = 0;
    this.mergesSuccessful = 0;
    this.errors = [];
  }

  // Get recent branches (last 50)
  getRecentBranches() {
    try {
      // Get branches sorted by date, most recent first
      const branches = execSync('git for-each-ref --sort=-committerdate refs/remotes/origin --format="%(refname:short)" | head -50', { encoding: 'utf8' });
      return branches
        .split('\n')
        .filter(line => line.trim())
        .map(branch => branch.replace('origin/', ''))
        .filter(branch => branch !== 'main' && !branch.includes('backup') && !branch.includes('temp'))
        .slice(0, 20); // Take top 20 most recent
    } catch (error) {
      console.error(`Error getting recent branches: ${error.message}`);
      return [];
    }
  }

  // Get branches with specific patterns that are likely to be PRs
  getRelevantBranches() {
    try {
      const patterns = [
        'cursor/',
        'codex/',
        'feature/',
        'fix/',
        'improve/',
        'enhance/'
      ];

      const branches = [];
      for (const pattern of patterns) {
        try {
          const result = execSync(`git ls-remote --heads origin | grep "${pattern}" | head -10`, { encoding: 'utf8' });
          const lines = result.split('\n').filter(line => line.trim());
          for (const line of lines) {
            const branchName = line.split('\t')[1]?.replace('refs/heads/', '');
            if (branchName && !branches.includes(branchName)) {
              branches.push(branchName);
            }
          }
        } catch (e) {
          // Pattern not found, continue
        }
      }

      return branches.slice(0, 15); // Limit to 15 branches
    } catch (error) {
      console.error(`Error getting relevant branches: ${error.message}`);
      return [];
    }
  }

  // Resolve conflicts in a file
  resolveFileConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');

      if (!content.includes('([\s\S]*?)
        .replace(/([\s\S]*?)
        .replace(/^$/gm, '')
        .replace(/^
        .replace(/\n{3,}/g, '\n\n');

      fs.writeFileSync(filePath, resolvedContent);
      this.conflictsResolved++;
      return true;

    } catch (error) {
      console.error(`Error resolving conflicts in ${filePath}: ${error.message}`);
      return false;
    }
  }

  // Resolve all conflicts
  resolveAllConflicts() {
    try {
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .trim()
        .split('\n')
        .filter(file => file.trim());

      if (conflictedFiles.length === 0) {
        return true;
      }

      console.log(`Found ${conflictedFiles.length} conflicted files`);

      for (const file of conflictedFiles) {
        if (file.trim()) {
          this.resolveFileConflicts(file);
        }
      }

      if (conflictedFiles.length > 0) {
        execSync('git add .', { stdio: 'pipe' });
      }

      return true;

    } catch (error) {
      console.error(`Error resolving conflicts: ${error.message}`);
      return false;
    }
  }

  // Merge a branch
  async mergeBranch(branchName) {
    try {
      console.log(`\n=== Attempting to merge: ${branchName} ===`);

      // Fetch latest
      execSync('git fetch origin', { stdio: 'pipe' });

      // Ensure we're on main and up to date
      execSync('git checkout main', { stdio: 'pipe' });
      execSync('git pull origin main', { stdio: 'pipe' });

      // Check if branch exists
      try {
        execSync(`git rev-parse origin/${branchName}`, { stdio: 'pipe' });
      } catch (e) {
        console.log(`❌ Branch ${branchName} does not exist, skipping`);
        return false;
      }

      // Try merge
      try {
        execSync(`git merge origin/${branchName} --no-ff -m "Merge branch '${branchName}' into main"`, { stdio: 'pipe' });
        console.log(`✅ Successfully merged ${branchName}`);
        this.mergesSuccessful++;
        return true;

      } catch (mergeError) {
        console.log(`⚠️  Conflicts in ${branchName}, resolving...`);

        if (this.resolveAllConflicts()) {
          execSync(`git commit -m "Merge branch '${branchName}' into main - resolved conflicts"`, { stdio: 'pipe' });
          console.log(`✅ Merged ${branchName} with resolved conflicts`);
          this.mergesSuccessful++;
          return true;
        } else {
          console.log(`❌ Could not resolve conflicts in ${branchName}`);
          execSync('git merge --abort', { stdio: 'pipe' });
          this.errors.push(`Failed to merge ${branchName}: Conflicts unresolved`);
          return false;
        }
      }

    } catch (error) {
      console.error(`❌ Error with ${branchName}: ${error.message}`);
      this.errors.push(`Error with ${branchName}: ${error.message}`);
      return false;
    }
  }

  // Main execution
  async run() {
    console.log('🚀 Starting targeted PR merger...\n');

    try {
      // Get relevant branches
      const relevantBranches = this.getRelevantBranches();
      const recentBranches = this.getRecentBranches();

      // Combine and deduplicate
      const allBranches = [...new Set([...relevantBranches, ...recentBranches])];

      console.log(`Found ${allBranches.length} branches to process:`);
      allBranches.forEach(branch => console.log(`  - ${branch}`));
      console.log('');

      if (allBranches.length === 0) {
        console.log('No relevant branches found.');
        return;
      }

      // Process branches
      for (const branch of allBranches) {
        await this.mergeBranch(branch);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Delay between merges
      }

      // Push changes
      console.log('\n📤 Pushing changes...');
      execSync('git push origin main', { stdio: 'pipe' });
      console.log('✅ Changes pushed');

      // Summary
      console.log('\n📊 SUMMARY:');
      console.log(`✅ Merges successful: ${this.mergesSuccessful}`);
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

// Run
if (require.main === module) {
  const merger = new TargetedPRMerger();
  merger.run().catch(error => {
    console.error(`❌ Script failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = TargetedPRMerger;