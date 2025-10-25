#!/usr/bin/env node
import https from 'https';
import fs from 'fs';

const makeGitHubRequest = (path) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Zion-App-Automation',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      });
    });
    req.on('error', error => reject(error));
    req.end();
  });
};

async function main() {
  try {
    console.log('🔍 Checking for open PRs...');
    const prs = await makeGitHubRequest('/repos/Zion-Holdings/zion.app/pulls?state=open');
    
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
    } else {
      console.log(`📋 Found ${prs.length} open PR(s):`);
      prs.forEach(pr => {
        console.log(`  - PR #${pr.number}: ${pr.title} (${pr.head.ref} -> ${pr.base.ref})`);
        console.log(`    State: ${pr.state}, Mergeable: ${pr.mergeable}`);
        console.log(`    URL: ${pr.html_url}`);
        console.log('');
      });
      
      // Save PR data to file
      fs.writeFileSync('open_prs_data.json', JSON.stringify(prs, null, 2));
      console.log('💾 PR data saved to open_prs_data.json');
    }
  } catch (error) {
    console.error('❌ Error checking PRs:', error.message);
  }
}

main().catch(console.error);