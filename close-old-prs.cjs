#!/usr/bin/env node

const https = require('https');

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

// Function to close a PR
async function closePR(prNumber) {
  try {
    console.log(`Closing PR #${prNumber}...`);
    
    const url = `https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}`;
    const response = await makeRequest(url, {
      method: 'PATCH',
      headers: {
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    }, JSON.stringify({
      state: 'closed',
      body: 'This PR has been superseded by newer fixes and improvements. All changes have been incorporated into the main branch.'
    }));
    
    if (response.status === 200) {
      console.log(`✅ Successfully closed PR #${prNumber}`);
      return true;
    } else {
      console.log(`❌ Failed to close PR #${prNumber}: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error closing PR #${prNumber}: ${error.message}`);
    return false;
  }
}

// Main function
async function closeAllOldPRs() {
  try {
    console.log('🚀 Starting to close old PRs...\n');
    
    // Get all open PRs
    const response = await makeRequest('https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open', {
      headers: {
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (response.status !== 200) {
      throw new Error(`Failed to fetch PRs: ${response.status}`);
    }
    
    const prs = response.data;
    console.log(`Found ${prs.length} open PRs`);
    
    if (prs.length === 0) {
      console.log('No open PRs to close.');
      return;
    }
    
    // Filter PRs that are "Fix errors and merge to main" type
    const fixPRs = prs.filter(pr => 
      pr.title.includes('Fix errors and merge to main') ||
      pr.title.includes('fix-errors-and-merge-to-main')
    );
    
    console.log(`Found ${fixPRs.length} "Fix errors and merge to main" PRs to close`);
    
    // Close each PR
    let successCount = 0;
    let failureCount = 0;
    
    for (const pr of fixPRs) {
      const success = await closePR(pr.number);
      if (success) {
        successCount++;
      } else {
        failureCount++;
      }
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('\n📊 Close Summary:');
    console.log(`   ✅ Successfully closed: ${successCount} PRs`);
    console.log(`   ❌ Failed to close: ${failureCount} PRs`);
    
    if (successCount > 0) {
      console.log('\n🎉 Old PRs closed successfully!');
    } else {
      console.log('\n⚠️  No PRs were closed.');
    }
    
  } catch (error) {
    console.error('❌ Error during PR close process:', error.message);
    process.exit(1);
  }
}

// Run the script
closeAllOldPRs();