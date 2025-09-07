#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

const GITHUB_TOKEN = 'ghs_9MCqZ1UVpKmpFUYQWtQ92vycUmAt7Y21ivzT';
const REPO = 'Zion-Holdings/zion.app';
const API_BASE = `https://api.github.com/repos/${REPO}`;

async function fetchOpenPRs() {
  try {
    const response = await fetch(`${API_BASE}/pulls?state=open&per_page=100`, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching PRs:', error.message);
    return [];
  }
}

async function mergePR(prNumber, title, headRef) {
  console.log(`\n🔄 Processing PR #${prNumber}: ${title}`);
  console.log(`   Branch: ${headRef}`);
  
  try {
    // Fetch the branch
    console.log('   📥 Fetching branch...');
    execSync(`git fetch origin ${headRef}`, { stdio: 'pipe' });
    
    // Try to merge
    console.log('   🔀 Attempting merge...');
    try {
      execSync(`git merge origin/${headRef} --no-ff -m "Merge PR #${prNumber}: ${title}"`, { stdio: 'pipe' });
      console.log(`   ✅ Successfully merged PR #${prNumber}`);
      return true;
    } catch (mergeError) {
      console.log('   ⚠️  Merge conflicts detected, attempting resolution...');
      
      // Try to resolve conflicts automatically
      try {
        // Use git checkout --theirs for most conflicts
        execSync(`git status --porcelain | grep "^UU" | cut -c4- | xargs -I {} git checkout --theirs {}`, { stdio: 'pipe' });
        
        // Add resolved files
        execSync(`git add .`, { stdio: 'pipe' });
        
        // Commit the resolution
        execSync(`git commit -m "Resolve conflicts for PR #${prNumber}: ${title}"`, { stdio: 'pipe' });
        
        console.log(`   ✅ Resolved conflicts and merged PR #${prNumber}`);
        return true;
      } catch (resolveError) {
        console.log(`   ❌ Could not resolve conflicts for PR #${prNumber}`);
        // Reset the merge
        execSync(`git merge --abort`, { stdio: 'pipe' });
        return false;
      }
    }
  } catch (error) {
    console.log(`   ❌ Error processing PR #${prNumber}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting bulk PR merge process...\n');
  
  // Ensure we're on main branch
  try {
    execSync('git checkout main', { stdio: 'pipe' });
    console.log('✅ Switched to main branch');
  } catch (error) {
    console.error('❌ Failed to switch to main branch:', error.message);
    return;
  }
  
  // Fetch latest changes
  try {
    execSync('git pull origin main --no-rebase', { stdio: 'pipe' });
    console.log('✅ Pulled latest changes from main');
  } catch (error) {
    console.log('⚠️  Pull had conflicts, continuing...');
  }
  
  // Get open PRs
  console.log('📋 Fetching open PRs...');
  const prs = await fetchOpenPRs();
  
  if (prs.length === 0) {
    console.log('✅ No open PRs found');
    return;
  }
  
  console.log(`📊 Found ${prs.length} open PRs`);
  
  let successCount = 0;
  let failCount = 0;
  
  // Process each PR
  for (const pr of prs) {
    const success = await mergePR(pr.number, pr.title, pr.head.ref);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`\n📊 Merge Summary:`);
  console.log(`   ✅ Successfully merged: ${successCount}`);
  console.log(`   ❌ Failed to merge: ${failCount}`);
  
  // Push all changes
  if (successCount > 0) {
    console.log('\n🚀 Pushing changes to main...');
    try {
      execSync('git push origin main --force-with-lease', { stdio: 'pipe' });
      console.log('✅ Successfully pushed all changes');
    } catch (error) {
      console.log('⚠️  Push failed, but merges were successful locally');
    }
  }
  
  console.log('\n🎉 Bulk PR merge process completed!');
}

// Run the script
main().catch(console.error);