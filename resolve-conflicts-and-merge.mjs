#!/usr/bin/env node

import https from 'https';
import { execSync } from 'child_process';
import fs from 'fs';

const GITHUB_TOKEN = 'ghs_bwUCm9bR8GIGUFtos7gUdB8xyPjEsG4VHcjM';
const OWNER = 'Zion-Holdings';
const REPO = 'zion.app';

function makeGitHubRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: method,
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Zion-App-Automation',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          resolve({ error: 'Parse error', body });
        }
      });
    });

    req.on('error', reject);
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

async function getAllOpenPRs() {
  const prs = await makeGitHubRequest(`/repos/${OWNER}/${REPO}/pulls?state=open&per_page=100`);
  return prs.filter(pr => !pr.error);
}

async function updatePRFromDraft(prNumber) {
  console.log(`📝 Marking PR #${prNumber} as ready for review...`);
  const result = await makeGitHubRequest(
    `/repos/${OWNER}/${REPO}/pulls/${prNumber}`,
    'PATCH',
    { draft: false }
  );
  
  if (!result.error) {
    console.log(`✅ PR #${prNumber} marked as ready`);
    return true;
  }
  return false;
}

async function mergePR(prNumber) {
  console.log(`🔀 Merging PR #${prNumber}...`);
  
  // First ensure it's not a draft
  await updatePRFromDraft(prNumber);
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  try {
    const result = await makeGitHubRequest(
      `/repos/${OWNER}/${REPO}/pulls/${prNumber}/merge`,
      'PUT',
      {
        merge_method: 'merge'
      }
    );
    
    if (result.merged) {
      console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Failed: ${result.message || 'Unknown error'}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error:`, error.message);
    return false;
  }
}

async function resolveConflictsLocally(prNumber, branch) {
  console.log(`\n🔧 Attempting to resolve conflicts for PR #${prNumber} locally...`);
  
  try {
    // Fetch the branch
    console.log(`   Fetching branch ${branch}...`);
    execSync(`git fetch origin ${branch}`, { stdio: 'pipe' });
    
    // Create a new branch for resolution
    const resolutionBranch = `${branch}-resolved`;
    console.log(`   Creating resolution branch: ${resolutionBranch}`);
    
    try {
      execSync(`git checkout -b ${resolutionBranch} origin/${branch}`, { stdio: 'pipe' });
    } catch (e) {
      // Branch might already exist
      execSync(`git checkout ${resolutionBranch}`, { stdio: 'pipe' });
    }
    
    // Try to merge main
    console.log(`   Merging main into ${resolutionBranch}...`);
    try {
      execSync('git merge origin/main', { stdio: 'pipe' });
      console.log(`   ✅ No conflicts!`);
      
      // Push the resolved branch
      console.log(`   Pushing resolved branch...`);
      execSync(`git push origin ${resolutionBranch} --force`, { stdio: 'pipe' });
      
      // Update the PR to point to the resolved branch
      await makeGitHubRequest(
        `/repos/${OWNER}/${REPO}/pulls/${prNumber}`,
        'PATCH',
        { head: resolutionBranch }
      );
      
      return true;
    } catch (e) {
      console.log(`   ⚠️  Conflicts detected. Attempting auto-resolution...`);
      
      // Get list of conflicted files
      const conflicted = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .trim()
        .split('\n')
        .filter(f => f);
      
      console.log(`   Conflicted files (${conflicted.length}):`, conflicted);
      
      // For each conflicted file, try to resolve
      for (const file of conflicted) {
        console.log(`   Resolving ${file}...`);
        
        try {
          // Try accepting theirs (main)
          execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
          execSync(`git add "${file}"`, { stdio: 'pipe' });
        } catch (err) {
          console.log(`   ⚠️  Could not auto-resolve ${file}`);
        }
      }
      
      // Check if all conflicts are resolved
      const stillConflicted = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .trim();
      
      if (stillConflicted) {
        console.log(`   ❌ Some conflicts remain unresolved`);
        execSync('git merge --abort', { stdio: 'pipe' });
        return false;
      }
      
      // Commit the resolution
      execSync('git -c user.email="support@zion.app" -c user.name="Zion Bot" commit -m "Resolve merge conflicts"', { stdio: 'pipe' });
      
      // Push the resolved branch
      execSync(`git push origin ${resolutionBranch} --force`, { stdio: 'pipe' });
      
      console.log(`   ✅ Conflicts resolved and pushed`);
      return true;
    }
  } catch (error) {
    console.log(`   ❌ Error during local resolution:`, error.message);
    return false;
  } finally {
    // Return to original branch
    try {
      execSync('git checkout -', { stdio: 'pipe' });
    } catch (e) {
      // Ignore
    }
  }
}

async function main() {
  console.log('🚀 Resolving conflicts and merging remaining PRs...\n');
  
  const openPRs = await getAllOpenPRs();
  console.log(`Found ${openPRs.length} open PRs\n`);
  
  if (openPRs.length === 0) {
    console.log('✅ No open PRs!');
    return;
  }
  
  let mergedCount = 0;
  let conflictsResolved = 0;
  
  // Store current branch
  let originalBranch;
  try {
    originalBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  } catch (e) {
    originalBranch = null;
  }
  
  // Ensure we're up to date with main
  console.log('📥 Updating main branch...');
  try {
    execSync('git fetch origin main', { stdio: 'pipe' });
    execSync('git checkout main', { stdio: 'pipe' });
    execSync('git pull origin main', { stdio: 'pipe' });
  } catch (e) {
    console.log('⚠️  Could not update main branch:', e.message);
  }
  
  for (const pr of openPRs) {
    console.log(`\n━━━ PR #${pr.number}: ${pr.title} ━━━`);
    console.log(`Branch: ${pr.head.ref}`);
    console.log(`Draft: ${pr.draft}`);
    console.log(`Mergeable: ${pr.mergeable}`);
    console.log(`State: ${pr.mergeable_state}`);
    
    // If it has conflicts, try to resolve them
    if (pr.mergeable === false) {
      const resolved = await resolveConflictsLocally(pr.number, pr.head.ref);
      if (resolved) {
        conflictsResolved++;
        // Wait for GitHub to update
        await new Promise(resolve => setTimeout(resolve, 5000));
      } else {
        console.log(`⚠️  Could not resolve conflicts for PR #${pr.number}`);
        continue;
      }
    }
    
    // Try to merge
    const merged = await mergePR(pr.number);
    if (merged) {
      mergedCount++;
    }
    
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Return to original branch
  if (originalBranch) {
    try {
      execSync(`git checkout ${originalBranch}`, { stdio: 'pipe' });
    } catch (e) {
      // Ignore
    }
  }
  
  console.log('\n\n📊 Final Summary:');
  console.log('='.repeat(60));
  console.log(`   Total PRs processed: ${openPRs.length}`);
  console.log(`   ✅ Successfully merged: ${mergedCount}`);
  console.log(`   🔧 Conflicts resolved: ${conflictsResolved}`);
  console.log('='.repeat(60));
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});