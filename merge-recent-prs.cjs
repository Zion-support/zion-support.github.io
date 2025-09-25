#!/usr/bin/env node

const { execSync } = require('child_process');

function run(command, options = {}) {
  try {
    return execSync(command, { 
      stdio: 'pipe', 
      encoding: 'utf8', 
      ...options 
    }).trim();
  } catch (error) {
    if (options.allowFail) return null;
    throw error;
  }
}

function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

async function mergeRecentPRs() {
  log('Starting to merge recent PRs...');
  
  // Get the most recent PR numbers
  const prRefs = run("git ls-remote origin 'refs/pull/*/head' | tail -100");
  const prNumbers = prRefs
    .split('\n')
    .map(line => {
      const match = line.match(/refs\/pull\/(\d+)\/head/);
      return match ? parseInt(match[1]) : null;
    })
    .filter(n => n !== null)
    .sort((a, b) => b - a) // Sort descending to get newest first
    .slice(0, 50); // Take top 50 newest PRs

  log(`Found ${prNumbers.length} recent PRs to merge: ${prNumbers.slice(0, 10).join(', ')}...`);

  let merged = 0;
  let failed = 0;

  for (const prNum of prNumbers) {
    try {
      log(`Merging PR #${prNum}`);
      
      // Fetch PR
      run(`git fetch origin pull/${prNum}/head:pr-${prNum}`);
      
      // Try to merge
      const mergeResult = run(`git merge --no-ff --no-edit pr-${prNum}`, { allowFail: true });
      
      if (mergeResult !== null) {
        log(`✅ Successfully merged PR #${prNum}`);
        merged++;
      } else {
        // Handle conflicts
        log(`⚠️ Conflicts in PR #${prNum}, resolving...`);
        
        const conflictedFiles = run('git diff --name-only --diff-filter=U', { allowFail: true });
        if (conflictedFiles) {
          const files = conflictedFiles.split('\n').filter(f => f.trim());
          for (const file of files) {
            run(`git checkout --theirs -- "${file}"`, { allowFail: true });
            run(`git add -- "${file}"`, { allowFail: true });
          }
          const commitResult = run(`git commit -m "Auto-resolve conflicts for PR #${prNum}"`, { allowFail: true });
          if (commitResult !== null) {
            log(`✅ Auto-resolved conflicts for PR #${prNum}`);
            merged++;
          } else {
            run('git merge --abort', { allowFail: true });
            log(`❌ Failed to resolve conflicts for PR #${prNum}`);
            failed++;
          }
        } else {
          run('git merge --abort', { allowFail: true });
          failed++;
        }
      }
      
      // Clean up
      run(`git branch -D pr-${prNum}`, { allowFail: true });
      
    } catch (error) {
      log(`❌ Error merging PR #${prNum}: ${error.message}`);
      failed++;
    }
  }

  // Push changes
  if (merged > 0) {
    log(`Pushing ${merged} merged PRs to origin...`);
    run('git push origin main');
  }

  log(`✅ Merge complete! Merged: ${merged}, Failed: ${failed}`);
}

mergeRecentPRs().catch(console.error);