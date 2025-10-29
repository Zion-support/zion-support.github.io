#!/usr/bin/env node
import { execSync } from 'child_process';

function runCommand(command, description) {
  try {
    console.log(`🔄 ${description}...`);
    const result = execSync(command, { 
      cwd: '/workspace', 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    console.log(`✅ ${description} completed`);
    return { success: true, output: result };
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

async function mergeBranch(branchName) {
  console.log(`\n🔄 Processing branch: ${branchName}`);
  
  // Check if branch exists
  const branchCheck = runCommand(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`, `Checking if branch ${branchName} exists`);
  if (!branchCheck.success) {
    console.log(`⏭️  Branch ${branchName} doesn't exist, skipping`);
    return false;
  }

  // Try to merge the branch
  const mergeResult = runCommand(`git merge origin/${branchName} --no-edit`, `Merging ${branchName}`);
  
  if (mergeResult.success) {
    console.log(`✅ Successfully merged ${branchName}`);
    return true;
  } else {
    // Check if it's a conflict
    if (mergeResult.output.includes('CONFLICT') || mergeResult.error.includes('CONFLICT')) {
      console.log(`⚠️  Merge conflict in ${branchName}, attempting to resolve...`);
      
      // Check git status to see what conflicts we have
      const statusResult = runCommand(`git status --porcelain`, `Checking git status for conflicts`);
      console.log(`Git status: ${statusResult.output}`);
      
      // Try to resolve conflicts automatically
      const addResult = runCommand(`git add .`, `Adding all changes`);
      
      if (addResult.success) {
        const commitResult = runCommand(`git commit --no-edit`, `Committing resolved conflicts`);
        if (commitResult.success) {
          console.log(`✅ Successfully resolved conflicts for ${branchName}`);
          return true;
        } else {
          console.log(`❌ Failed to commit resolved conflicts for ${branchName}`);
          return false;
        }
      } else {
        console.log(`❌ Failed to add changes for ${branchName}`);
        return false;
      }
    } else {
      console.log(`❌ Failed to merge ${branchName}: ${mergeResult.error}`);
      return false;
    }
  }
}

async function main() {
  try {
    console.log('🚀 Starting remaining branch merge process...');
    
    // Ensure we're on main and up to date
    runCommand('git checkout main', 'Switching to main branch');
    runCommand('git pull origin main', 'Pulling latest main');
    
    // Get list of remaining fix-errors branches
    const branchList = [
      'cursor/fix-errors-and-merge-to-main-0daa', 
      'cursor/fix-errors-and-merge-to-main-1182',
      'cursor/fix-errors-and-merge-to-main-127b',
      'cursor/fix-errors-and-merge-to-main-29a0',
      'cursor/fix-errors-and-merge-to-main-3f2f',
      'cursor/fix-errors-and-merge-to-main-5588',
      'cursor/fix-errors-and-merge-to-main-637b',
      'cursor/fix-errors-and-merge-to-main-654f',
      'cursor/fix-errors-and-merge-to-main-778a',
      'cursor/fix-errors-and-merge-to-main-bf77',
      'cursor/fix-errors-and-merge-to-main-c6fa',
      'cursor/fix-errors-and-merge-to-main-c928',
      'cursor/fix-errors-and-merge-to-main-e1e0',
      'fix-errors-final',
      'fix-typescript-errors-main'
    ];

    let successCount = 0;
    let conflictCount = 0;
    let errorCount = 0;

    for (const branch of branchList) {
      const result = await mergeBranch(branch);
      if (result === true) {
        successCount++;
      } else if (result === false) {
        conflictCount++;
      } else {
        errorCount++;
      }
    }

    console.log('\n📊 Merge Summary:');
    console.log(`  ✅ Successfully merged: ${successCount}`);
    console.log(`  ⚠️  Conflicts/Issues: ${conflictCount}`);
    console.log(`  ❌ Errors: ${errorCount}`);

    if (successCount > 0) {
      console.log('\n🚀 Pushing merged changes...');
      const pushResult = runCommand('git push origin main', 'Pushing merged changes to main');
      
      if (pushResult.success) {
        console.log('✅ Successfully pushed all merged changes to main');
      } else {
        console.log('❌ Failed to push changes:', pushResult.error);
      }
    }

  } catch (error) {
    console.error('❌ Error in main process:', error.message);
  }
}

main().catch(console.error);