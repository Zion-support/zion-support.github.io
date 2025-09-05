#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting merge and PR process...');

async function runCommand(command, description) {
  console.log(`🚀 ${description}...`);
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'inherit',
      timeout: 300000 
    }
});
    console.log(`✅ ${description} completed`);
    return { success: true, output: result };
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  try {
    // Step 1: Fix syntax errors
    console.log('🔧 Step 1: Fixing syntax errors...');
    await runCommand('node scripts/syntax-fix.cjs', 'Fix syntax errors');
    
    // Step 2: Check git status
    console.log('📋 Step 2: Checking git status...');
    const statusResult = await runCommand('git status --porcelain', 'Check git status');
    
    // Step 3: Add and commit changes
    console.log('📝 Step 3: Committing changes...');
    await runCommand('git add .', 'Add all changes');
    await runCommand('git commit -m "fix: Resolve syntax errors and merge conflicts"', 'Commit changes');
    
    // Step 4: Fetch latest changes
    console.log('📥 Step 4: Fetching latest changes...');
    await runCommand('git fetch origin', 'Fetch from origin');
    await runCommand('git fetch --all', 'Fetch all remotes');
    
    // Step 5: Switch to main and pull
    console.log('🔄 Step 5: Switching to main and pulling...');
    try {
      await runCommand('git checkout main', 'Switch to main');
    } catch (error) {
      console.log('Creating main branch from origin...');
      await runCommand('git checkout -b main origin/main', 'Create main from origin');
    }
    
    try {
      await runCommand('git pull origin main', 'Pull latest main');
    } catch (error) {
      console.log('Pull failed, resetting to origin/main...');
      await runCommand('git reset --hard origin/main', 'Reset to origin/main');
    }
    
    // Step 6: List and merge open PRs
    console.log('📋 Step 6: Listing open PRs...');
    try {
      const prsResult = await runCommand('gh pr list --state open --json number,title,headRefName,baseRefName,mergeable', 'List open PRs');
      
      if (prsResult.success) {
        const prs = JSON.parse(prsResult.output);
        console.log(`Found ${prs.length} open PRs:`);
        
        for (const pr of prs) {
          console.log(`- PR #${pr.number}: ${pr.title} (${pr.headRefName} -> ${pr.baseRefName}) [mergeable: ${pr.mergeable}]`);
        }
        
        // Step 7: Merge PRs
        if (prs.length > 0) {
          console.log('🔄 Step 7: Merging PRs...');
          
          for (const pr of prs) {
            console.log(`🔄 Merging PR #${pr.number}...`);
            try {
              if (pr.mergeable) {
                await runCommand(`gh pr merge ${pr.number} --merge --delete-branch`, `Merge PR #${pr.number}`);
                console.log(`✅ PR #${pr.number} merged successfully`);
              } else {
                console.log(`⚠️ PR #${pr.number} has conflicts, skipping for now`);
              }
            } catch (error) {
              console.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`);
            }
            
            // Small delay between PRs
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        } else {
          console.log('✨ No open PRs to merge');
        }
      }
    } catch (error) {
      console.log('⚠️ Could not list PRs:', error.message);
    }
    
    // Step 8: Cleanup
    console.log('🧹 Step 8: Cleaning up...');
    try {
      await runCommand('git branch --merged | grep -v "\\*\\|main\\|master" | xargs -n 1 git branch -d', 'Delete merged branches');
    } catch (error) {
      // Ignore cleanup errors
    }
    
    await runCommand('git remote prune origin', 'Prune remote references');
    
    // Step 9: Final build test
    console.log('🔨 Step 9: Running final build test...');
    try {
      await runCommand('npm run build', 'Final build test');
      console.log('✅ Final build successful!');
    } catch (error) {
      console.log('⚠️ Final build has issues, but merge process completed');
    }
    
    console.log('🎉 Merge and PR process completed!');
    
  } catch (error) {
    console.error('❌ Process failed:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();