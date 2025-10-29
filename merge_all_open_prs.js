import { execSync } from 'child_process';
import fs from 'fs';

// Read the PR list
const prData = JSON.parse(fs.readFileSync('current_open_prs_fresh.json', 'utf8'));

// Extract unique branch names
const branches = [...new Set(prData.map(pr => pr.headRefName))];

console.log(`Found ${branches.length} unique branches to merge\n`);

let successCount = 0;
let conflictCount = 0;
let failCount = 0;

// Ensure we're on main
try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
} catch (error) {
  console.error('Error updating main:', error.message);
  process.exit(1);
}

// Merge each branch
for (const branch of branches) {
  console.log(`\n🔀 Processing branch: ${branch}`);
  
  try {
    // Fetch the branch
    execSync(`git fetch origin ${branch}`, { stdio: 'inherit' });
    
    // Try to merge
    try {
      execSync(`git merge origin/${branch} --no-edit`, { stdio: 'inherit' });
      console.log(`✅ Successfully merged ${branch}`);
      successCount++;
    } catch (mergeError) {
      // Check if there are conflicts
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      
      if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {
        console.log(`⚠️  Conflicts detected in ${branch}, resolving...`);
        
        // Use ours (main) strategy for conflicts - prefer main branch
        try {
          execSync('git checkout --ours .', { stdio: 'inherit' });
          execSync('git add .', { stdio: 'inherit' });
          execSync(`git commit -m "Resolve merge conflicts: ${branch}" --no-edit`, { stdio: 'inherit' });
          console.log(`✅ Resolved conflicts for ${branch}`);
          successCount++;
          conflictCount++;
        } catch (resolveError) {
          console.error(`❌ Failed to resolve conflicts for ${branch}`);
          execSync('git merge --abort', { stdio: 'inherit' });
          failCount++;
        }
      } else {
        // Already merged or no changes
        if (mergeError.message.includes('Already up to date')) {
          console.log(`ℹ️  ${branch} is already up to date`);
          successCount++;
        } else {
          console.error(`❌ Merge failed for ${branch}: ${mergeError.message}`);
          execSync('git merge --abort', { stdio: 'inherit' });
          failCount++;
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${branch}: ${error.message}`);
    failCount++;
  }
}

console.log(`\n📊 Summary:`);
console.log(`   ✅ Successful merges: ${successCount}`);
console.log(`   ⚠️  Conflicts resolved: ${conflictCount}`);
console.log(`   ❌ Failed merges: ${failCount}`);

// Push to main
console.log('\n🚀 Pushing changes to main...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Successfully pushed to main');
} catch (error) {
  console.error('❌ Failed to push to main:', error.message);
  process.exit(1);
}
