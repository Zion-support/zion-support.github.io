#!/usr/bin/env node

import https from 'https';

// Function to make HTTP requests
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({ status: res.statusCode, data: jsonData });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });
    
    req.on('error', reject);
    
    if (options.body) {
      req.write(JSON.stringify(options.body));
    }
    
    req.end();
  });
}

// Function to get open PRs
async function getOpenPRs() {
  const url = 'https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open';
  const options = {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Zion-Tech-Group'
    }
  };
  
  try {
    const response = await makeRequest(url, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching PRs:', error);
    return [];
  }
}

// Function to close a PR
async function closePR(prNumber) {
  const url = `https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}`;
  const options = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Zion-Tech-Group'
    },
    body: {
      state: 'closed'
    }
  };
  
  try {
    const response = await makeRequest(url, options);
    return response.status === 200;
  } catch (error) {
    console.error(`Error closing PR ${prNumber}:`, error);
    return false;
  }
}

// Main function
async function main() {
  console.log('Fetching open PRs...');
  const prs = await getOpenPRs();
  
  if (prs.length === 0) {
    console.log('No open PRs found.');
    return;
  }
  
  console.log(`Found ${prs.length} open PRs:`);
  prs.forEach(pr => {
    console.log(`- PR #${pr.number}: ${pr.title} (${pr.head.ref})`);
  });
  
  console.log('\nClosing PRs since all fixes have been merged to main...');
  
  for (const pr of prs) {
    console.log(`Closing PR #${pr.number}...`);
    const success = await closePR(pr.number);
    if (success) {
      console.log(`✓ PR #${pr.number} closed successfully`);
    } else {
      console.log(`✗ Failed to close PR #${pr.number}`);
    }
    
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\nAll PRs processed!');
}

// Run the script
main().catch(console.error);