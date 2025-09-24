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

async function mergeAllRemainingPRs() {
  log('Starting to merge ALL remaining PRs...');
  
  // Get ALL PR numbers
  const prRefs = run("git ls-remote origin 'refs/pull/*/head'");
  const prNumbers = prRefs
    .split('\n')
    .map(line => {
      const match = line.match(/refs\/pull\/(\d+)\/head/);
      return match ? parseInt(match[1]) : null;
    })
    .filter(n => n !== null)
    .sort((a, b) => b - a); // Sort descending to get newest first

  log(`Found ${prNumbers.length} total PRs to merge: ${prNumbers.slice(0, 10).join(', ')}...`);

  let merged = 0;
  let failed = 0;
  let skipped = 0;

  // Process in batches of 100 to avoid overwhelming the system
  const batchSize = 100;
  const totalBatches = Math.ceil(prNumbers.length / batchSize);

  for (let batchNum = 0; batchNum < totalBatches; batchNum++) {
    const startIdx = batchNum * batchSize;
    const endIdx = Math.min(startIdx + batchSize, prNumbers.length);
    const batchPRs = prNumbers.slice(startIdx, endIdx);
    
    log(`Processing batch ${batchNum + 1}/${totalBatches} (PRs ${startIdx + 1}-${endIdx})`);

    for (const prNum of batchPRs) {
      try {
        log(`Merging PR #${prNum} (${merged + failed + skipped + 1}/${prNumbers.length})`);
        
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
            log(`❌ Failed to resolve conflicts for PR #${prNum}`);
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

    // Push changes after each batch
    if (merged > 0) {
      log(`Pushing batch ${batchNum + 1} changes (${merged} merges so far)...`);
      try {
        run('git push --force origin main');
        log(`✅ Successfully pushed batch ${batchNum + 1}`);
      } catch (pushError) {
        log(`⚠️ Push failed for batch ${batchNum + 1}, continuing...`);
      }
    }
  }

  log(`✅ Complete merge process finished!`);
  log(`📊 Final Results:`);
  log(`   - Successfully merged: ${merged}`);
  log(`   - Failed: ${failed}`);
  log(`   - Total processed: ${merged + failed}`);
}

mergeAllRemainingPRs().catch(console.error);