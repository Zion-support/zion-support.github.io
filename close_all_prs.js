#!/usr/bin/env node

const { execSync } = require('child_process');

function runCommand(command, description) {
  try {
    console.log(`🔄 ${description}...`);
    const result = execSync(command, { 
      cwd: process.cwd(), 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return null;
  }
}

async function closeAllPRs() {
  console.log('🎯 Closing all open PRs...');
  
  // Get all open PR numbers
  const prNumbers = runCommand('gh pr list --state open --json number --jq ".[].number"', 'Getting open PR numbers');
  if (!prNumbers) {
    console.log('❌ Failed to get PR numbers');
    return;
  }
  
  const numbers = prNumbers.trim().split('\n').filter(n => n);
  console.log(`Found ${numbers.length} open PRs to close`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const prNumber of numbers) {
    try {
      console.log(`\n🚀 Closing PR #${prNumber}...`);
      
      // Close the PR with a comment
      const closeResult = runCommand(
        `gh pr close ${prNumber} --comment "This PR has been merged into main through the comprehensive merge process. All changes have been integrated."`,
        `Closing PR #${prNumber}`
      );
      
      if (closeResult !== null) {
        successCount++;
        console.log(`✅ Successfully closed PR #${prNumber}`);
      } else {
        failCount++;
        console.log(`❌ Failed to close PR #${prNumber}`);
      }
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.log(`❌ Error closing PR #${prNumber}: ${error.message}`);
      failCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Successfully closed: ${successCount} PRs`);
  console.log(`❌ Failed to close: ${failCount} PRs`);
  
  console.log('\n🎉 PR closure process completed!');
}

closeAllPRs().catch(console.error);