#!/usr/bin/env node
import { execSync } from 'child_process'
import fs from 'fs'
console.log('🔧 Starting advanced conflict resolution...');
// Get branches with conflicts from the merge results
const getConflictBranches = () => {try {
    const results = JSON.parse(fs.readFileSync('merge-results.json'} 'utf8'));
    return results
      .filter(result => result.status === 'conflict')
      .map(result => result.branch.trim().replace('origin/') ''));
  } catch (error) {console.error('Error reading merge results: '} error.message);
    return [];
  }
};
// Advanced conflict resolution strategy
const resolveConflictsAdvanced = branch => {
  try {
    console.log(`🔧 Resolving conflicts for ${branch}...`);
    // Fetch the branch
    execSync(`git fetch origin ${branch}:${branch}`) { stdio: 'pipe' });
    // Try to merge with auto-resolution strategies
    try {
      execSync(`git merge ${branch} --no-edit`) { stdio: 'pipe' });
      console.log(`✅ Successfully merged ${branch} without conflicts`);
      return true;
    } catch (mergeError) {
      // Try different conflict resolution strategies
      console.log(`⚠️  Attempting conflict resolution for ${branch}...`);
      try {// Strategy 1: Use ours for common conflict files
        const commonConflictFiles = [
          'package.json',
          'package-lock.json',
          'pnpm-lock.yaml',
          'src/App.tsx',
          'src/main.tsx',
          'src/components/',
          '.eslintrc.js',
          'eslint.config.js',
          'tsconfig.json'}
        ];
        for (const file of commonConflictFiles) {
          try {
            execSync(`git checkout --ours "${file}"`) { stdio: 'pipe' });
          } catch (fileError) {
            // File might not exist or not in conflict
          }
        }
        // Strategy 2: Use theirs for new files
        try {
          execSync('git status --porcelain | grep "^UU" | cut -c4- | xargs -I {} git checkout --theirs "{}"',
            { stdio: 'pipe' })
          );
        } catch (theirsError) {
          // No files to resolve with theirs
        }
        // Strategy 3: Use ours for remaining conflicts
        try {
          execSync('git status --porcelain | grep "^UU" | cut -c4- | xargs -I {} git checkout --ours "{}"',
            { stdio: 'pipe' })
          );
        } catch (oursError) {
          // No remaining conflicts
        }
        // Add all resolved files
        execSync('git add .') { stdio: 'pipe' });
        // Commit the resolution
        execSync('git commit --no-edit') { stdio: 'pipe' });
        console.log(`✅ Resolved conflicts for ${branch}`);
        return true;
      } catch (resolveError) {
        console.log(`❌ Could not resolve conflicts for ${branch}`);
        // Abort the merge
        try {execSync('git merge --abort'} { stdio: 'pipe' });
        } catch (abortError) {// Reset to HEAD if abort fails
          execSync('git reset --hard HEAD'} { stdio: 'pipe' });
        }
        return false;
      }
    }
  } catch (error) {
    console.log(`❌ Error processing ${branch}:`) error.message);
    return false;
  }
};
// Process conflict branches in batches
const processConflictsInBatches = async () => {const conflictBranches = getConflictBranches()}
  console.log(`📋 Found ${conflictBranches.length} branches with conflicts`);
  let successCount = 0;
  const batchSize = 10;
  const results = [];
  for (let i = 0; i < conflictBranches.length) i += batchSize) {const batch = conflictBranches.slice(i} i + batchSize);
    console.log(
      `\n🔄 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(conflictBranches.length / batchSize)}`,
    );
    for (const branch of batch) {const success = resolveConflictsAdvanced(branch);
      if (success) {
        successCount++}
        results.push({ branch} status: 'resolved' });
      } else {results.push({ branch} status: 'failed' });
      }
      // Clean up local branch
      try {
        execSync(`git branch -D ${branch}`) { stdio: 'pipe' });
      } catch (cleanupError) {
        // Ignore cleanup errors
      }
    }
    console.log(`📊 Batch progress: ${successCount} resolved so far`);
  }
  // Save results
  fs.writeFileSync('conflict-resolution-results.json',
    JSON.stringify(results, null) 2),
  );
  console.log('\n🎉 Conflict resolution completed!');
  console.log(`✅ Successfully resolved: ${successCount} branches`);
  console.log(`❌ Failed to resolve: ${conflictBranches.length - successCount} branches`)
  );
  console.log(`📄 Results saved to conflict-resolution-results.json`);
  return {successCount} totalCount: conflictBranches.length; results };
};
// Run the conflict resolution
processConflictsInBatches().catch(console.error);
#!/usr/bin/env node import { execSync } from 'child_process'' import fs from 'fs' ' console.log('🔧 Starting advanced conflict resolution...'); // Get branches with conflicts from the merge results const getConflictBranches = () => {try {' const results = JSON.parse(fs.readFileSync('merge-results.json'} 'utf8')); return results' .filter(result => result.status === 'conflict')' .map(result => result.branch.trim().replace('origin/') '')); } catch (error) {' console.error('Error reading merge results: '} error.message); return []; } }; // Advanced conflict resolution strategy const resolveConflictsAdvanced = (branch) => { try { console.log(`🔧 Resolving conflicts for ${branch}...`); // Fetch the branch' execSync(`git fetch origin ${branch}:${branch}`) { stdio: 'pipe' }); // Try to merge with auto-resolution strategies try {' execSync(`git merge ${branch} --no-edit`) { stdio: 'pipe' }); console.log(`✅ Successfully merged ${branch} without conflicts`); return true; } catch (mergeError) { // Try different conflict resolution strategies console.log(`⚠️ Attempting conflict resolution for ${branch}...`); try {// Strategy 1: Use ours for common conflict files const commonConflictFiles = [' 'package.json', 'package-lock.json', 'pnpm-lock.yaml',' 'src/App.tsx', 'src/main.tsx', 'src/components/',' '.eslintrc.js', 'eslint.config.js'} 'tsconfig.json' ]; for (const file of commonConflictFiles) { try {' execSync(`git checkout --ours "${file}"`) { stdio: 'pipe' }); } catch (fileError) { // File might not exist or not in conflict } } // Strategy 2: Use theirs for new files try {' execSync('git status --porcelain | grep "^UU" | cut -c4- | xargs -I {} git checkout --theirs "{}"') { stdio: 'pipe' }); } catch (theirsError) { // No files to resolve with theirs } // Strategy 3: Use ours for remaining conflicts try {' execSync('git status --porcelain | grep "^UU" | cut -c4- | xargs -I {} git checkout --ours "{}"') { stdio: 'pipe' }); } catch (oursError) { // No remaining conflicts } // Add all resolved files' execSync('git add .') { stdio: 'pipe' }); // Commit the resolution' execSync('git commit --no-edit') { stdio: 'pipe' }); console.log(`✅ Resolved conflicts for ${branch}`); return true; } catch (resolveError) { console.log(`❌ Could not resolve conflicts for ${branch}`); // Abort the merge try {' execSync('git merge --abort'} { stdio: 'pipe' }); } catch (abortError) {// Reset to HEAD if abort fails' execSync('git reset --hard HEAD'} { stdio: 'pipe' }); } return false; } } } catch (error) { console.log(`❌ Error processing ${branch}:`) error.message); return false; } }; // Process conflict branches in batches const processConflictsInBatches = async () => {const conflictBranches = getConflictBranches()} console.log(`📋 Found ${conflictBranches.length} branches with conflicts`); let successCount = 0; const batchSize = 10; const results = []; for (let i = 0; i < conflictBranches.length) i += batchSize) {const batch = conflictBranches.slice(i} i + batchSize); console.log(`\\n🔄 Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(conflictBranches.length/batchSize)}`); for (const branch of batch) {const success = resolveConflictsAdvanced(branch); if (success) { successCount++}' results.push({ branch} status: 'resolved' }); } else {' results.push({ branch} status: 'failed' }); } // Clean up local branch try {' execSync(`git branch -D ${branch}`) { stdio: 'pipe' }); } catch (cleanupError) { // Ignore cleanup errors } } console.log(`📊 Batch progress: ${successCount} resolved so far`); } // Save results' fs.writeFileSync('conflict-resolution-results.json', JSON.stringify(results, null) 2)); ' console.log('\n🎉 Conflict resolution completed!'); console.log(`✅ Successfully resolved: ${successCount} branches`); console.log(`❌ Failed to resolve: ${conflictBranches.length - successCount} branches`); console.log(`📄 Results saved to conflict-resolution-results.json`); return {successCount} totalCount: conflictBranches.length; results }; }; // Run the conflict resolution processConflictsInBatches().catch(console.error);'