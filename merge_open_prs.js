#!/usr/bin/env node

/**
 * Script to merge all open PRs into main branch
 * Handles merge conflicts automatically and provides comprehensive reporting
 */

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting comprehensive PR merge process...');

// Read the existing PRs data
const prsData = JSON.parse(fs.readFileSync('/workspace/prs.json', 'utf8'));

// Extract open PRs
const openPRs = prsData.filter(pr => pr.state === 'open');

console.log(`📋 Found ${openPRs.length} open PRs:`);
openPRs.forEach((pr, index) => {
  console.log(`  ${index + 1}. PR #${pr.number}: ${pr.title}`);
});

// Function to safely merge a PR
async function mergePR(pr) {
  const prNumber = pr.number;
  const prTitle = pr.title;
  const branchName = pr.head.ref;
  
  console.log(`\n🔄 Processing PR #${prNumber}: ${prTitle}`);
  console.log(`   Branch: ${branchName}`);
  
  try {
    // Ensure we're on main and up to date
    execSync('git checkout main', { stdio: 'inherit' });
    execSync('git pull origin main', { stdio: 'inherit' });
    
    // Fetch the PR branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });
    
    // Try to merge
    console.log(`   Attempting merge of ${branchName}...`);
    execSync(`git merge origin/${branchName} --no-ff -m "Merge PR #${prNumber}: ${prTitle}"`, { stdio: 'inherit' });
    
    console.log(`   ✅ Successfully merged PR #${prNumber}`);
    return { success: true, pr: prNumber, error: null };
    
  } catch (error) {
    console.log(`   ⚠️  Merge conflict detected for PR #${prNumber}`);
    
    try {
      // Handle merge conflicts
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n').filter(f => f);
      
      console.log(`   📝 Resolving conflicts in ${conflictedFiles.length} files:`);
      
      for (const file of conflictedFiles) {
        console.log(`      → ${file}`);
        
        // Auto-resolve conflicts based on file type and content
        try {
          const fileContent = fs.readFileSync(file, 'utf8');
          
          // Strategy: Keep the version with more content (usually the newer one)
          const ourContent = execSync(`git show HEAD:${file}`, { encoding: 'utf8' }).trim();
          const theirContent = execSync(`git show origin/${branchName}:${file}`, { encoding: 'utf8' }).trim();
          
          // Choose the version with more substantial content
          const chosenContent = theirContent.length > ourContent.length ? theirContent : ourContent;
          
          fs.writeFileSync(file, chosenContent);
          execSync(`git add ${file}`);
          
        } catch (fileError) {
          console.log(`      ⚠️  Could not auto-resolve ${file}, using theirs`);
          execSync(`git checkout --theirs ${file}`, { stdio: 'inherit' });
          execSync(`git add ${file}`, { stdio: 'inherit' });
        }
      }
      
      // Complete the merge
      execSync(`git commit --no-edit -m "Merge PR #${prNumber}: ${prTitle} (auto-resolved conflicts)"`, { stdio: 'inherit' });
      
      console.log(`   ✅ Successfully resolved conflicts and merged PR #${prNumber}`);
      return { success: true, pr: prNumber, error: null, conflictsResolved: conflictedFiles.length };
      
    } catch (resolveError) {
      console.log(`   ❌ Failed to resolve conflicts for PR #${prNumber}: ${resolveError.message}`);
      
      // Abort the merge
      execSync('git merge --abort', { stdio: 'inherit' });
      
      return { success: false, pr: prNumber, error: resolveError.message };
    }
  }
}

// Process all open PRs
const results = {
  total: openPRs.length,
  successful: 0,
  failed: 0,
  details: []
};

console.log('\n🚀 Starting merge process...');

for (const pr of openPRs) {
  const result = await mergePR(pr);
  results.details.push(result);
  
  if (result.success) {
    results.successful++;
  } else {
    results.failed++;
  }
  
  // Small delay between merges
  await new Promise(resolve => setTimeout(resolve, 1000));
}

// Push all changes to main
try {
  console.log('\n📤 Pushing merged changes to main...');
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Successfully pushed all merged changes to main');
} catch (error) {
  console.log(`❌ Failed to push changes: ${error.message}`);
}

// Generate comprehensive report
const report = {
  timestamp: new Date().toISOString(),
  summary: results,
  openPRsProcessed: openPRs.map(pr => ({
    number: pr.number,
    title: pr.title,
    url: pr.html_url
  }))
};

fs.writeFileSync('/workspace/merge-open-prs-report.json', JSON.stringify(report, null, 2));

console.log('\n📊 MERGE SUMMARY:');
console.log(`  Total PRs processed: ${results.total}`);
console.log(`  Successfully merged: ${results.successful}`);
console.log(`  Failed to merge: ${results.failed}`);
console.log(`  Success rate: ${((results.successful / results.total) * 100).toFixed(1)}%`);

if (results.failed > 0) {
  console.log('\n❌ Failed PRs:');
  results.details.filter(r => !r.success).forEach(r => {
    console.log(`  PR #${r.pr}: ${r.error}`);
  });
}

console.log('\n🎉 PR merge process completed!');
console.log('📄 Detailed report saved to merge-open-prs-report.json');