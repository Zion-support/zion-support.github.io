#!/usr/bin/env node

import { execSync } from 'child_process';

const openPRs = [
  { number: 34000, branch: 'cursor/fix-errors-and-merge-to-main-fc5f' },
  { number: 32379, branch: 'cursor/fix-errors-and-merge-to-main-cf2d' },
  { number: 31846, branch: 'cursor/fix-errors-and-merge-to-main-e5d4' },
  { number: 31845, branch: 'cursor/fix-errors-and-merge-to-main-0507' },
  { number: 31843, branch: 'cursor/fix-errors-and-merge-to-main-bd2f' },
  { number: 31842, branch: 'cursor/fix-errors-and-merge-to-main-a950' },
  { number: 31841, branch: 'cursor/fix-errors-and-merge-to-main-315c' },
  { number: 31840, branch: 'cursor/fix-errors-and-merge-to-main-1a47' },
  { number: 31839, branch: 'cursor/fix-errors-and-merge-to-main-291b' },
  { number: 31838, branch: 'cursor/fix-errors-and-merge-to-main-0e15' },
  { number: 31836, branch: 'cursor/fix-errors-and-merge-to-main-6b4a' },
  { number: 31835, branch: 'cursor/fix-errors-and-merge-to-main-44cf' },
  { number: 31834, branch: 'cursor/fix-errors-and-merge-to-main-370a' },
  { number: 31833, branch: 'cursor/fix-errors-and-merge-to-main-5341' },
  { number: 31832, branch: 'cursor/fix-errors-and-merge-to-main-1dda' },
  { number: 31831, branch: 'cursor/fix-errors-and-merge-to-main-33cc' },
  { number: 31830, branch: 'cursor/fix-errors-and-merge-to-main-bcda' },
  { number: 31829, branch: 'cursor/fix-errors-and-merge-to-main-eb55' },
  { number: 31828, branch: 'cursor/fix-errors-and-merge-to-main-986f' },
  { number: 31827, branch: 'cursor/fix-errors-and-merge-to-main-77c0' },
  { number: 31826, branch: 'cursor/fix-errors-and-merge-to-main-7fe4' },
  { number: 31825, branch: 'cursor/fix-errors-and-merge-to-main-5994' },
  { number: 31824, branch: 'cursor/fix-errors-and-merge-to-main-6064' },
  { number: 31823, branch: 'cursor/fix-errors-and-merge-to-main-b376' },
  { number: 31822, branch: 'cursor/fix-errors-and-merge-to-main-6f52' },
  { number: 31820, branch: 'cursor/fix-errors-and-merge-to-main-af51' },
  { number: 31819, branch: 'cursor/fix-errors-and-merge-to-main-da8e' },
  { number: 31817, branch: 'cursor/fix-errors-and-merge-to-main-458f' },
  { number: 31815, branch: 'cursor/fix-errors-and-merge-to-main-1832' },
  { number: 31814, branch: 'cursor/fix-errors-and-merge-to-main-4271' },
  { number: 31813, branch: 'cursor/fix-errors-and-merge-to-main-2682' }
];

function runCommand(command, description) {
  try {
    console.log(`\n🔄 ${description}...`);
    const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: '/workspace'
    });
    console.log(`✅ ${description} completed`);
    return { success: true, output };
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

async function main() {
  console.log('🚀 Starting to close stale PRs...');
  console.log(`📊 Found ${openPRs.length} PRs to close`);
  
  const results = {
    closed: [],
    failed: []
  };
  
  for (const pr of openPRs) {
    console.log(`\n📋 Processing PR #${pr.number} (${pr.branch})`);
    
    // Try to close the PR
    const closeResult = runCommand(
      `gh pr close ${pr.number} --comment "Closing stale PR - branch no longer exists"`,
      `Close PR #${pr.number}`
    );
    
    if (closeResult.success) {
      console.log(`✅ Successfully closed PR #${pr.number}`);
      results.closed.push(pr);
    } else {
      console.log(`❌ Failed to close PR #${pr.number}: ${closeResult.error}`);
      results.failed.push({ pr, reason: closeResult.error });
    }
  }
  
  // Generate summary report
  console.log('\n📊 PR CLOSURE SUMMARY REPORT');
  console.log('=============================');
  console.log(`✅ Successfully closed: ${results.closed.length}`);
  console.log(`❌ Failed to close: ${results.failed.length}`);
  
  if (results.closed.length > 0) {
    console.log('\n✅ Successfully closed PRs:');
    results.closed.forEach(pr => console.log(`  - PR #${pr.number} (${pr.branch})`));
  }
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed to close PRs:');
    results.failed.forEach(({ pr, reason }) => console.log(`  - PR #${pr.number} (${pr.branch}): ${reason}`));
  }
  
  console.log('\n🎉 PR closure process completed!');
}

main().catch(console.error);