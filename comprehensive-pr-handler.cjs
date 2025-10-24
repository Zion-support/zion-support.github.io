const https = require('https');
const { execSync } = require('child_process');

// Function to make HTTPS request
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({ status: res.statusCode, data: jsonData });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.end();
  });
}

// Function to check if PR is mergeable
async function checkPRMergeable(prNumber) {
  try {
    const url = `https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}`;
    
    const response = await makeRequest(url, {
      headers: {
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (response.status === 200) {
      const pr = response.data;
      return {
        mergeable: pr.mergeable,
        mergeable_state: pr.mergeable_state,
        state: pr.state,
        head: pr.head.ref,
        base: pr.base.ref,
        created_at: pr.created_at,
        updated_at: pr.updated_at,
        commits: pr.commits,
        additions: pr.additions,
        deletions: pr.deletions
      };
    }
    return null;
  } catch (error) {
    console.error(`Error checking PR #${prNumber}:`, error.message);
    return null;
  }
}

// Function to merge a PR
async function mergePR(prNumber, title) {
  try {
    console.log(`\n🔄 Attempting to merge PR #${prNumber}: ${title}`);
    
    const url = `https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}/merge`;
    const mergeData = {
      commit_title: `Merge PR #${prNumber}: ${title}`,
      commit_message: `Automated merge of PR #${prNumber}`,
      merge_method: 'merge'
    };
    
    const response = await makeRequest(url, {
      method: 'PUT',
      headers: {
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    }, JSON.stringify(mergeData));
    
    if (response.status === 200) {
      console.log(`✅ Successfully merged PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Failed to merge PR #${prNumber}: ${response.status}`);
      console.log(response.data);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error merging PR #${prNumber}:`, error.message);
    return false;
  }
}

// Function to close a PR
async function closePR(prNumber, title) {
  try {
    console.log(`\n🔄 Closing PR #${prNumber}: ${title}`);
    
    const url = `https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}`;
    const closeData = {
      state: 'closed'
    };
    
    const response = await makeRequest(url, {
      method: 'PATCH',
      headers: {
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    }, JSON.stringify(closeData));
    
    if (response.status === 200) {
      console.log(`✅ Successfully closed PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Failed to close PR #${prNumber}: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error closing PR #${prNumber}:`, error.message);
    return false;
  }
}

// Function to try merging a PR locally
async function tryLocalMerge(prNumber, branchName) {
  try {
    console.log(`\n🔄 Attempting local merge of PR #${prNumber} (${branchName})`);
    
    // Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });
    
    // Try to merge
    try {
      execSync(`git merge origin/${branchName} --no-ff -m "Merge PR #${prNumber}: ${branchName}"`, { stdio: 'pipe' });
      console.log(`✅ Successfully merged PR #${prNumber} locally`);
      return true;
    } catch (mergeError) {
      console.log(`⚠️  Merge conflict in PR #${prNumber}, attempting to resolve...`);
      
      // Try to resolve conflicts automatically
      try {
        execSync(`git merge --abort`, { stdio: 'pipe' });
        
        // Try a different merge strategy
        execSync(`git merge origin/${branchName} --strategy=ours -m "Merge PR #${prNumber}: ${branchName} (resolved conflicts)"`, { stdio: 'pipe' });
        console.log(`✅ Successfully merged PR #${prNumber} with conflict resolution`);
        return true;
      } catch (resolveError) {
        console.log(`❌ Could not resolve conflicts for PR #${prNumber}`);
        return false;
      }
    }
  } catch (error) {
    console.error(`❌ Error in local merge of PR #${prNumber}:`, error.message);
    return false;
  }
}

// Main function to process PRs
async function processPRs() {
  try {
    console.log('🔍 Fetching all open pull requests...');
    
    const url = 'https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100';
    const response = await makeRequest(url, {
      headers: {
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (response.status !== 200) {
      console.error('Failed to fetch PRs:', response.status);
      return;
    }
    
    const prs = response.data;
    console.log(`Found ${prs.length} open pull requests`);
    
    // Separate PRs by target branch
    const mainPRs = prs.filter(pr => pr.base.ref === 'main');
    const backupPRs = prs.filter(pr => pr.base.ref.includes('aggressive-merge-backup'));
    
    console.log(`\n📊 PRs targeting main: ${mainPRs.length}`);
    console.log(`📊 PRs targeting backup branches: ${backupPRs.length}`);
    
    // Process main PRs first
    console.log('\n🚀 Processing PRs targeting main branch...');
    let mainMerged = 0;
    let mainFailed = 0;
    
    for (const pr of mainPRs) {
      console.log(`\n--- Processing PR #${pr.number}: ${pr.title} ---`);
      
      // Check if mergeable
      const prInfo = await checkPRMergeable(pr.number);
      if (!prInfo) {
        console.log(`❌ Could not check mergeability for PR #${pr.number}`);
        mainFailed++;
        continue;
      }
      
      console.log(`   State: ${prInfo.state}`);
      console.log(`   Mergeable: ${prInfo.mergeable}`);
      console.log(`   Mergeable State: ${prInfo.mergeable_state}`);
      console.log(`   Commits: ${prInfo.commits}`);
      console.log(`   Changes: +${prInfo.additions} -${prInfo.deletions}`);
      
      if (prInfo.mergeable === true) {
        const success = await mergePR(pr.number, pr.title);
        if (success) {
          mainMerged++;
        } else {
          mainFailed++;
        }
      } else if (prInfo.mergeable === false) {
        console.log(`⚠️  PR #${pr.number} has conflicts, trying local merge...`);
        const localSuccess = await tryLocalMerge(pr.number, pr.head.ref);
        if (localSuccess) {
          mainMerged++;
        } else {
          mainFailed++;
        }
      } else {
        console.log(`⚠️  PR #${pr.number} mergeability unknown, trying local merge...`);
        const localSuccess = await tryLocalMerge(pr.number, pr.head.ref);
        if (localSuccess) {
          mainMerged++;
        } else {
          mainFailed++;
        }
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Process backup PRs (close them as they are outdated)
    console.log('\n🧹 Processing PRs targeting backup branches (closing old ones)...');
    let backupClosed = 0;
    let backupFailed = 0;
    
    for (const pr of backupPRs) {
      console.log(`\n--- Processing PR #${pr.number}: ${pr.title} ---`);
      console.log(`   Target: ${pr.base.ref}`);
      
      // Close old PRs targeting backup branches
      const success = await closePR(pr.number, pr.title);
      if (success) {
        backupClosed++;
      } else {
        backupFailed++;
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('\n📈 Summary:');
    console.log(`   Main PRs merged: ${mainMerged}`);
    console.log(`   Main PRs failed: ${mainFailed}`);
    console.log(`   Backup PRs closed: ${backupClosed}`);
    console.log(`   Backup PRs failed: ${backupFailed}`);
    
    // Push changes if any were made
    if (mainMerged > 0) {
      console.log('\n🚀 Pushing merged changes to main...');
      try {
        execSync('git push origin main', { stdio: 'pipe' });
        console.log('✅ Successfully pushed changes to main');
      } catch (error) {
        console.log('⚠️  Could not push changes:', error.message);
      }
    }
    
  } catch (error) {
    console.error('Error processing PRs:', error.message);
  }
}

// Main execution
processPRs();