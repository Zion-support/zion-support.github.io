#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Starting automatic draft PR closing process...');

// Function to get all open draft PRs
function getDraftPRs() {
  try {
    const output = execSync('gh pr list --state open --json number,isDraft,title', { encoding: 'utf8' });
    const prs = JSON.parse(output);
    return prs.filter(pr => pr.isDraft);
  } catch (error) {
    console.error('❌ Error getting draft PRs:', error.message);
    return [];
  }
}

// Function to close a PR
function closePR(prNumber, title) {
  try {
    console.log(`🔄 Closing draft PR #${prNumber}: ${title}...`);
    
    execSync(`gh pr close ${prNumber} --comment "Closing duplicate draft PR - changes already integrated"`, { stdio: 'inherit' });
    
    console.log(`✅ Successfully closed PR #${prNumber}`);
    return true;
  } catch (error) {
    console.error(`❌ Error closing PR #${prNumber}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('📋 Getting list of draft PRs...');
  const draftPRs = getDraftPRs();
  
  if (draftPRs.length === 0) {
    console.log('✅ No draft PRs found.');
    return;
  }

  console.log(`📝 Found ${draftPRs.length} draft PRs:`);
  draftPRs.forEach(pr => console.log(`   - PR #${pr.number}: ${pr.title}`));

  let closedCount = 0;
  let totalCount = draftPRs.length;

  for (const pr of draftPRs) {
    if (closePR(pr.number, pr.title)) {
      closedCount++;
    }
  }

  console.log(`\n📊 Close Summary:`);
  console.log(`   ✅ Successfully closed: ${closedCount}/${totalCount} draft PRs`);
  
  if (closedCount < totalCount) {
    console.log(`   ⚠️  ${totalCount - closedCount} PRs failed to close`);
  }
}

main();