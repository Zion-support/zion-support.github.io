#!/usr/bin/env node

import https from 'https';
import fs from 'fs';

// GitHub API endpoint for open PRs
const repo = 'Zion-Holdings/zion.app';
const url = `https://api.github.com/repos/${repo}/pulls?state=open&per_page=100`;

console.log('Fetching open PRs from GitHub...');

const options = {
  headers: {
    'User-Agent': 'GitHub-PR-Merger',
    'Accept': 'application/vnd.github.v3+json'
  }
};

https.get(url, options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const prs = JSON.parse(data);
      
      if (prs.length === 0) {
        console.log('No open PRs found.');
        return;
      }

      console.log(`Found ${prs.length} open PRs:`);
      console.log('=====================================');
      
      prs.forEach((pr, index) => {
        console.log(`${index + 1}. PR #${pr.number}: ${pr.title}`);
        console.log(`   Branch: ${pr.head.ref}`);
        console.log(`   Author: ${pr.user.login}`);
        console.log(`   Created: ${pr.created_at}`);
        console.log(`   URL: ${pr.html_url}`);
        console.log(`   Mergeable: ${pr.mergeable === null ? 'Unknown' : pr.mergeable}`);
        console.log('   ---');
      });

      // Save to file for processing
      fs.writeFileSync('open-prs.json', JSON.stringify(prs, null, 2));
      console.log('\nOpen PRs saved to open-prs.json');
      
    } catch (error) {
      console.error('Error parsing PR data:', error.message);
    }
  });
}).on('error', (error) => {
  console.error('Error fetching PRs:', error.message);
});