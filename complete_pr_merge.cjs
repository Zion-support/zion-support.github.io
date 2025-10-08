#!/usr/bin/env node

const https = require('https');
const { execSync } = require('child_process');

const GITHUB_TOKEN = 'ghs_hxUbGGs3zC8OdJgk3O5ci7arChpO5h2LkGu1';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

function exec(command) {
  try {
    return execSync(command, { encoding: 'utf-8', stdio: 'pipe' });
  } catch (error) {
    return { error: true, output: error.stdout || error.stderr || error.message };
  }
}

function fetchAllOpenPRs() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`,
      method: 'GET',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Node.js Script',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

function mergePRLocally(prNumber, branchName, baseBranch = 'main') {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`Merging PR #${prNumber}: ${branchName} -> ${baseBranch}`);
  console.log('='.repeat(80));

  try {
    // Ensure we're on the base branch
    console.log(`\n1. Checking out ${baseBranch}...`);
    exec(`git checkout ${baseBranch}`);
    exec(`git pull origin ${baseBranch}`);
    
    // Fetch the PR branch
    console.log(`\n2. Fetching PR branch ${branchName}...`);
    exec(`git fetch origin ${branchName}`);
    
    // Try to merge
    console.log(`\n3. Attempting merge...`);
    const mergeResult = exec(`git merge origin/${branchName} --no-edit`);
    
    if (mergeResult.error) {
      console.log('⚠️  Merge conflicts detected!');
      
      // Get conflicted files
      const status = exec('git status --short').toString();
      const conflictedFiles = status.split('\n')
        .filter(line => line.match(/^(UU|AA|DD)/))
        .map(line => line.replace(/^[A-Z]{2}\s+/, '').trim())
        .filter(f => f);
      
      if (conflictedFiles.length === 0) {
        console.log('No conflicts found, but merge failed. Aborting...');
        exec('git merge --abort');
        return { success: false, reason: 'merge_failed' };
      }
      
      console.log(`\nConflicted files (${conflictedFiles.length}):`);
      conflictedFiles.forEach(f => console.log(`  - ${f}`));
      
      // Auto-resolve conflicts by preferring PR version for most files
      console.log(`\n4. Auto-resolving conflicts...`);
      let resolved = 0;
      
      for (const file of conflictedFiles) {
        try {
          // For most files, prefer the PR version (theirs)
          if (file.includes('config') || file.includes('utils') || 
              file.includes('component') || file.includes('.ts')) {
            console.log(`  Resolving ${file} with PR version...`);
            exec(`git checkout --theirs "${file}"`);
          } else {
            console.log(`  Resolving ${file} with main version...`);
            exec(`git checkout --ours "${file}"`);
          }
          exec(`git add "${file}"`);
          resolved++;
        } catch (e) {
          console.log(`  Failed to resolve ${file}: ${e.message}`);
        }
      }
      
      if (resolved === conflictedFiles.length) {
        console.log(`\n✅ Resolved ${resolved} conflicts`);
        console.log(`\n5. Committing merge...`);
        exec(`git commit -m "Merge PR #${prNumber}: Resolve conflicts and integrate changes"`);
        
        console.log(`\n6. Pushing to ${baseBranch}...`);
        const pushResult = exec(`git push origin ${baseBranch}`);
        
        if (pushResult.error) {
          console.log('❌ Push failed:', pushResult.output);
          return { success: false, reason: 'push_failed' };
        }
        
        console.log('✅ Successfully merged and pushed!');
        return { success: true };
      } else {
        console.log(`\n❌ Could only resolve ${resolved}/${conflictedFiles.length} conflicts`);
        exec('git merge --abort');
        return { success: false, reason: 'unresolved_conflicts' };
      }
    } else {
      console.log('✅ Merge successful (no conflicts)!');
      
      console.log(`\n4. Pushing to ${baseBranch}...`);
      const pushResult = exec(`git push origin ${baseBranch}`);
      
      if (pushResult.error) {
        console.log('❌ Push failed:', pushResult.output);
        return { success: false, reason: 'push_failed' };
      }
      
      console.log('✅ Successfully merged and pushed!');
      return { success: true };
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    exec('git merge --abort 2>/dev/null || true');
    return { success: false, reason: 'error', error: error.message };
  }
}

async function main() {
  console.log('\n' + '='.repeat(80));
  console.log('COMPREHENSIVE PR MERGE AUTOMATION');
  console.log('='.repeat(80));

  try {
    // Fetch all open PRs
    console.log('\nFetching open PRs...');
    const prs = await fetchAllOpenPRs();
    
    if (!Array.isArray(prs)) {
      console.error('Error: Invalid response from GitHub API');
      console.error('Response:', prs);
      process.exit(1);
    }
    
    console.log(`\nFound ${prs.length} open PR(s)\n`);
    
    if (prs.length === 0) {
      console.log('✅ No open PRs to merge!');
      return;
    }

    // Display PRs
    console.log('Open PRs:');
    prs.forEach((pr, idx) => {
      console.log(`  ${idx + 1}. PR #${pr.number}: ${pr.title}`);
      console.log(`     Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      console.log(`     Draft: ${pr.draft ? 'Yes' : 'No'}`);
    });

    console.log('\n' + '='.repeat(80));
    console.log('Starting merge process...');
    console.log('='.repeat(80));

    const results = {
      success: [],
      failed: []
    };

    // Process each PR
    for (const pr of prs) {
      const result = mergePRLocally(pr.number, pr.head.ref, pr.base.ref);
      
      if (result.success) {
        results.success.push(pr.number);
      } else {
        results.failed.push({ number: pr.number, reason: result.reason });
      }
      
      // Small delay between PRs
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Summary
    console.log('\n' + '='.repeat(80));
    console.log('MERGE SUMMARY');
    console.log('='.repeat(80));
    console.log(`\n✅ Successfully merged: ${results.success.length} PR(s)`);
    if (results.success.length > 0) {
      results.success.forEach(num => console.log(`   - PR #${num}`));
    }
    
    console.log(`\n❌ Failed to merge: ${results.failed.length} PR(s)`);
    if (results.failed.length > 0) {
      results.failed.forEach(({ number, reason }) => {
        console.log(`   - PR #${number} (${reason})`);
      });
    }

    console.log('\n' + '='.repeat(80));

  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
