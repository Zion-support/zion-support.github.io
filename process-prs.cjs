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
        base: pr.base.ref
      };
    }
    return null;
  } catch (error) {
    console.error(`Error checking PR #${prNumber}:`, error.message);
    return null;
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
    const otherPRs = prs.filter(pr => pr.base.ref !== 'main');
    
    console.log(`\n📊 PRs targeting main: ${mainPRs.length}`);
    console.log(`📊 PRs targeting other branches: ${otherPRs.length}`);
    
    // Process main PRs first (most important)
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
      
      if (prInfo.mergeable === true) {
        const success = await mergePR(pr.number, pr.title);
        if (success) {
          mainMerged++;
        } else {
          mainFailed++;
        }
      } else {
        console.log(`⚠️  PR #${pr.number} is not mergeable (${prInfo.mergeable_state})`);
        mainFailed++;
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Process other PRs (close them as they seem to be old/outdated)
    console.log('\n🧹 Processing PRs targeting other branches (closing old ones)...');
    let otherClosed = 0;
    let otherFailed = 0;
    
    for (const pr of otherPRs) {
      console.log(`\n--- Processing PR #${pr.number}: ${pr.title} ---`);
      console.log(`   Target: ${pr.base.ref}`);
      
      // Close old PRs targeting backup branches
      if (pr.base.ref.includes('aggressive-merge-backup')) {
        const success = await closePR(pr.number, pr.title);
        if (success) {
          otherClosed++;
        } else {
          otherFailed++;
        }
      } else {
        console.log(`⚠️  Skipping PR #${pr.number} (not a backup branch)`);
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('\n📈 Summary:');
    console.log(`   Main PRs merged: ${mainMerged}`);
    console.log(`   Main PRs failed: ${mainFailed}`);
    console.log(`   Other PRs closed: ${otherClosed}`);
    console.log(`   Other PRs failed: ${otherFailed}`);
    
  } catch (error) {
    console.error('Error processing PRs:', error.message);
  }
}

// Main execution
processPRs();