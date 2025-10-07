#!/usr/bin/env node

const { execSync } = require('child_process');

// List of PR branches to merge
const prBranches = [
  'cursor/fix-errors-and-merge-to-main-f2e9',
  'cursor/fix-errors-and-merge-to-main-2bb7', 
  'cursor/fix-errors-and-merge-to-main-be45',
  'cursor/fix-errors-and-merge-to-main-be56',
  'cursor/fix-errors-and-merge-to-main-c7be'
];

async function main() {
  console.log('🚀 Starting local merge process for PR branches...');
  
  try {
    // Ensure we're on main and it's up to date
    console.log('📋 Ensuring main branch is up to date...');
    execSync('git checkout main', { stdio: 'inherit' });
    execSync('git pull origin main', { stdio: 'inherit' });
    
    for (const branch of prBranches) {
      console.log(`\n📝 Merging branch: ${branch}`);
      
      try {
        // Fetch the branch
        console.log(`   🔄 Fetching ${branch}...`);
        execSync(`git fetch origin ${branch}`, { stdio: 'pipe' });
        
        // Check if branch exists
        try {
          execSync(`git show-ref --verify --quiet refs/remotes/origin/${branch}`, { stdio: 'pipe' });
        } catch (e) {
          console.log(`   ⚠️  Branch ${branch} not found, skipping...`);
          continue;
        }
        
        // Try to merge
        console.log(`   🔀 Attempting to merge ${branch}...`);
        try {
          execSync(`git merge origin/${branch} --no-ff -m "Merge ${branch}: Fix errors and merge to main"`, { stdio: 'inherit' });
          console.log(`   ✅ Successfully merged ${branch}`);
        } catch (mergeError) {
          console.log(`   ⚠️  Merge conflicts detected for ${branch}, attempting auto-resolution...`);
          
          try {
            // Abort the failed merge
            execSync('git merge --abort', { stdio: 'pipe' });
            
            // Try merge with strategy
            execSync(`git merge origin/${branch} -X theirs --no-ff -m "Auto-merge ${branch}: Fix errors and merge to main"`, { stdio: 'inherit' });
            console.log(`   ✅ Auto-resolved conflicts for ${branch}`);
          } catch (autoMergeError) {
            console.log(`   ❌ Auto-merge failed for ${branch}: ${autoMergeError.message}`);
            console.log(`   ⚠️  Manual intervention required for ${branch}`);
          }
        }
        
      } catch (error) {
        console.log(`   ❌ Error processing ${branch}: ${error.message}`);
      }
    }
    
    // Push the merged changes
    console.log('\n📤 Pushing merged changes to origin/main...');
    try {
      execSync('git push origin main', { stdio: 'inherit' });
      console.log('✅ Successfully pushed changes to origin/main');
    } catch (pushError) {
      console.log(`❌ Failed to push changes: ${pushError.message}`);
    }
    
    console.log('\n🎉 Local merge process completed!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();