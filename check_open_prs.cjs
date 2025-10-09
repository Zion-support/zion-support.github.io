#!/usr/bin/env node

const https = require('https');

// GitHub API endpoint for open PRs
const options = {
  hostname: 'api.github.com',
  path: '/repos/Zion-Holdings/zion.app/pulls?state=open',
  method: 'GET',
  headers: {
    'User-Agent': 'Node.js',
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
      console.log(`Found ${prs.length} open PRs:`);
      
      if (prs.length === 0) {
        console.log('No open PRs found.');
        process.exit(0);
      }

      prs.forEach((pr, index) => {
        console.log(`\n${index + 1}. PR #${pr.number}: ${pr.title}`);
        console.log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`);
        console.log(`   State: ${pr.state}`);
        console.log(`   Mergeable: ${pr.mergeable}`);
        console.log(`   Mergeable State: ${pr.mergeable_state}`);
        console.log(`   URL: ${pr.html_url}`);
        
        if (pr.mergeable_state === 'dirty' || pr.mergeable_state === 'blocked') {
          console.log(`   ⚠️  Has merge conflicts or is blocked`);
        } else if (pr.mergeable_state === 'clean') {
          console.log(`   ✅ Ready to merge`);
        }
      });

      // Return the PRs data for further processing
      process.stdout.write(JSON.stringify(prs, null, 2));
    } catch (error) {
      console.error('Error parsing PR data:', error);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('Error fetching PRs:', error);
  process.exit(1);
});

req.end();