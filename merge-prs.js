const https = require('https');

// Function to make HTTP requests
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    });
    
    req.on('error', reject);
    req.end();
  });
}

// Get open PRs
async function getOpenPRs() {
  try {
    const prs = await makeRequest('https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100');
    console.log(`Found ${prs.length} open PRs`);
    
    for (const pr of prs) {
      console.log(`PR #${pr.number}: ${pr.title}`);
      console.log(`  Head: ${pr.head.ref}`);
      console.log(`  Base: ${pr.base.ref}`);
      console.log(`  Mergeable: ${pr.mergeable}`);
      console.log(`  State: ${pr.state}`);
      console.log('---');
    }
    
    return prs;
  } catch (error) {
    console.error('Error fetching PRs:', error.message);
    return [];
  }
}

// Main function
async function main() {
  console.log('Checking open PRs...');
  const prs = await getOpenPRs();
  
  if (prs.length === 0) {
    console.log('No open PRs found');
    return;
  }
  
  console.log(`\nFound ${prs.length} open PRs to process`);
}

main().catch(console.error);