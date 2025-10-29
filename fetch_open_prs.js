#!/usr/bin/env node

import { execSync } from 'child_process';

// Function to get GitHub token from environment or git config
function getGitHubToken() {
  try {
    // Try to get from git config first
    const token = execSync('git config --get github.token', { encoding: 'utf8' }).trim();
    if (token) return token;
  } catch (e) {
    // Ignore error
  }
  
  // Try environment variable
  if (process.env.GITHUB_TOKEN) {
    return process.env.GITHUB_TOKEN;
  }
  
  console.log('No GitHub token found. Please set GITHUB_TOKEN environment variable or run:');
  console.log('git config --global github.token YOUR_TOKEN');
  process.exit(1);
}

// Function to fetch open PRs
async function fetchOpenPRs() {
  const token = getGitHubToken();
  const repo = 'Zion-Holdings/zion.app';
  
  const query = `
    query {
      repository(owner: "Zion-Holdings", name: "zion.app") {
        pullRequests(first: 100, states: OPEN) {
          nodes {
            number
            title
            headRefName
            headRepositoryOwner {
              login
            }
            mergeable
            mergeStateStatus
            isDraft
            createdAt
            updatedAt
            url
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return [];
    }

    return data.data.repository.pullRequests.nodes;
  } catch (error) {
    console.error('Error fetching PRs:', error);
    return [];
  }
}

// Main function
async function main() {
  console.log('Fetching open PRs...');
  const prs = await fetchOpenPRs();
  
  console.log(`Found ${prs.length} open PRs`);
  
  // Save to file
  const fs = await import('fs');
  fs.writeFileSync('current_open_prs_latest.json', JSON.stringify(prs, null, 2));
  
  // Display summary
  prs.forEach(pr => {
    console.log(`PR #${pr.number}: ${pr.title} (${pr.headRefName}) - Mergeable: ${pr.mergeable}`);
  });
}

main().catch(console.error);