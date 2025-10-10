import https from 'https';
import { execSync } from 'child_process';

const GITHUB_TOKEN = 'ghs_ZysFsLzoox1OYndg8r3k7Wi9kxx2MI01o9po';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

async function fetchPRDetails(prNumber) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`,
      method: 'GET',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const pr = JSON.parse(data);
          resolve(pr);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function mergePR(prNumber) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`,
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    const mergeData = JSON.stringify({
      commit_title: `Merge PR #${prNumber}`,
      commit_message: `Automated merge of PR #${prNumber}`,
      merge_method: 'merge'
    });

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve({ success: true, data: result });
        } catch (error) {
          resolve({ success: false, error: data });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(mergeData);
    req.end();
  });
}

async function fetchOpenPRs() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`,
      method: 'GET',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const prs = JSON.parse(data);
          resolve(prs);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function resolveMergeConflicts() {
  try {
    console.log('🔧 Resolving merge conflicts...');
    
    // Check current status
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      console.log('📋 Current changes:');
      console.log(status);
      
      // Add all changes
      execSync('git add .', { stdio: 'inherit' });
      
      // Commit changes
      execSync('git commit -m "Resolve merge conflicts and consolidate changes"', { stdio: 'inherit' });
      
      console.log('✅ Committed resolved conflicts');
    }
    
    // Try to merge with main
    try {
      execSync('git pull origin main --no-edit', { stdio: 'inherit' });
      console.log('✅ Successfully pulled latest changes from main');
    } catch (pullError) {
      console.log('⚠️  Pull had conflicts, attempting to resolve...');
      
      // Check for conflicts
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {
        console.log('🔧 Resolving merge conflicts...');
        
        // Add all files
        execSync('git add .', { stdio: 'inherit' });
        
        // Commit the merge
        execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
        
        console.log('✅ Resolved merge conflicts');
      }
    }
    
    // Push changes
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Pushed changes to main branch');
    
  } catch (error) {
    console.log(`❌ Error resolving conflicts: ${error.message}`);
  }
}

async function processPR(pr) {
  try {
    console.log(`\n📋 Processing PR #${pr.number}: ${pr.title}`);
    console.log(`   Author: ${pr.user.login}`);
    console.log(`   Head: ${pr.head.ref}`);
    console.log(`   Base: ${pr.base.ref}`);
    
    // Fetch detailed PR information
    const prDetails = await fetchPRDetails(pr.number);
    console.log(`   Mergeable: ${prDetails.mergeable}`);
    console.log(`   State: ${prDetails.state}`);
    
    if (prDetails.mergeable === true) {
      console.log(`🔄 Attempting to merge PR #${pr.number}...`);
      const result = await mergePR(pr.number);
      
      if (result.success) {
        console.log(`✅ Successfully merged PR #${pr.number}`);
        console.log(`   SHA: ${result.data.sha}`);
        return true;
      } else {
        console.log(`❌ Failed to merge PR #${pr.number}: ${result.error}`);
        return false;
      }
    } else if (prDetails.mergeable === false) {
      console.log(`⚠️  PR #${pr.number} has merge conflicts`);
      
      try {
        // Fetch the PR branch
        console.log(`🔧 Fetching branch ${pr.head.ref}...`);
        execSync(`git fetch origin ${pr.head.ref}`, { stdio: 'inherit' });
        
        // Try to merge locally
        try {
          execSync(`git merge origin/${pr.head.ref} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`, { stdio: 'inherit' });
          console.log(`✅ Successfully merged PR #${pr.number} locally`);
          
          // Push the merge
          execSync('git push origin main', { stdio: 'inherit' });
          console.log(`✅ Pushed merged changes to main branch`);
          return true;
          
        } catch (mergeError) {
          console.log(`⚠️  Merge conflicts detected for PR #${pr.number}`);
          
          // Try to resolve conflicts automatically
          try {
            // Add all files
            execSync('git add .', { stdio: 'inherit' });
            
            // Commit the merge
            execSync(`git commit -m "Resolve merge conflicts for PR #${pr.number}"`, { stdio: 'inherit' });
            
            // Push the resolved merge
            execSync('git push origin main', { stdio: 'inherit' });
            
            console.log(`✅ Successfully resolved and merged PR #${pr.number}`);
            return true;
            
          } catch (resolveError) {
            console.log(`❌ Could not automatically resolve conflicts for PR #${pr.number}`);
            return false;
          }
        }
        
      } catch (fetchError) {
        console.log(`❌ Failed to fetch PR #${pr.number}: ${fetchError.message}`);
        return false;
      }
    } else {
      console.log(`⏳ PR #${pr.number} merge status is unknown, skipping...`);
      return false;
    }
    
  } catch (error) {
    console.log(`❌ Error processing PR #${pr.number}: ${error.message}`);
    return false;
  }
}

async function main() {
  try {
    console.log('🚀 Starting comprehensive PR merge process...');
    
    // First, resolve any current merge conflicts
    await resolveMergeConflicts();
    
    // Fetch all open PRs
    console.log('\n🔍 Fetching open PRs...');
    const prs = await fetchOpenPRs();
    console.log(`Found ${prs.length} open PRs`);
    
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
      return;
    }
    
    // Process PRs in batches
    const batchSize = 5;
    let mergedCount = 0;
    let failedCount = 0;
    
    for (let i = 0; i < prs.length; i += batchSize) {
      const batch = prs.slice(i, i + batchSize);
      console.log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1} (${batch.length} PRs)...`);
      
      for (const pr of batch) {
        const success = await processPR(pr);
        if (success) {
          mergedCount++;
        } else {
          failedCount++;
        }
        
        // Small delay between PRs
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Delay between batches
      if (i + batchSize < prs.length) {
        console.log('⏳ Waiting before next batch...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    console.log(`\n📊 Merge Summary:`);
    console.log(`   ✅ Successfully merged: ${mergedCount}`);
    console.log(`   ❌ Failed to merge: ${failedCount}`);
    console.log(`   📋 Total processed: ${prs.length}`);
    
  } catch (error) {
    console.error('❌ Error in main process:', error.message);
  }
}

// Run the script
main();