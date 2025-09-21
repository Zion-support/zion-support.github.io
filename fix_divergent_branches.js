#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🔧 Fixing Divergent Branches');
console.log('============================');

try {
  // Configure git to handle divergent branches
  console.log('Configuring git...');
  execSync('git config pull.rebase false', { stdio: 'inherit' });
  execSync('git config merge.tool vimdiff', { stdio: 'inherit' });
  execSync('git config merge.conflictstyle diff3', { stdio: 'inherit' });

  // Reset main branch to clean state
  console.log('Resetting main branch...');
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git reset --hard origin/main', { stdio: 'inherit' });
  execSync('git clean -fd', { stdio: 'inherit' });

  // Get list of recent branches
  console.log('Getting recent branches...');
  const branches = execSync('git branch -r | grep -E "(cursor|codex)" | head -20', { encoding: 'utf8' })
    .split('\n')
    .map(branch => branch.trim())
    .filter(branch => branch && !branch.includes('HEAD'))
    .map(branch => branch.replace('origin/', ''))
    .filter(branch => branch !== 'main');

  console.log(`Found ${branches.length} branches to process`);

  let mergedCount = 0;
  let failedCount = 0;

  for (const branch of branches) {
    try {
      console.log(`\nProcessing branch: ${branch}`);
      
      // Try to merge the branch
      try {
        execSync(`git merge ${branch} --strategy=recursive -X ours -m "Merge ${branch}"`, { stdio: 'inherit' });
        console.log(`✅ Successfully merged: ${branch}`);
        mergedCount++;
      } catch (mergeError) {
        console.log(`❌ Failed to merge: ${branch}`);
        failedCount++;
        
        // Abort the merge
        try {
          execSync('git merge --abort', { stdio: 'inherit' });
        } catch (abortError) {
          // Ignore abort errors
        }
      }

    } catch (error) {
      console.log(`❌ Error processing ${branch}: ${error.message}`);
      failedCount++;
    }
  }

  // Push changes
  console.log('\nPushing changes...');
  try {
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Successfully pushed changes');
  } catch (pushError) {
    console.log('❌ Failed to push changes');
  }

  console.log(`\n🎉 Merge Summary:`);
  console.log(`✅ Successfully merged: ${mergedCount}`);
  console.log(`❌ Failed to merge: ${failedCount}`);

} catch (error) {
  console.error('Script failed:', error.message);
  process.exit(1);
}