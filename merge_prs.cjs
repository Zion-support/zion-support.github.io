#!/usr/bin/env node

const { execSync } = require('child_process');
const https = require('https');

// Function to get PR details
function getPRDetails(prNumber) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/Zion-Holdings/zion.app/pulls/${prNumber}`,
      method: 'GET',
      headers: {
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

// Function to merge PR
function mergePR(prNumber) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/Zion-Holdings/zion.app/pulls/${prNumber}/merge`,
      method: 'PUT',
      headers: {
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    const data = JSON.stringify({
      commit_title: `Merge PR #${prNumber}`,
      commit_message: `Automated merge of PR #${prNumber}`,
      merge_method: 'merge'
    });

    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => { responseData += chunk; });
      res.on('end', () => {
        try {
          const result = JSON.parse(responseData);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(result);
          } else {
            reject(new Error(`Merge failed: ${result.message || 'Unknown error'}`));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// Main function to process PRs
async function processPRs() {
  const prNumbers = [
    28049, 28048, 28047, 28046, 28045, 28044, 28043, 28042, 28041, 28039,
    28038, 28037, 28036, 28035, 28034, 28033, 28032, 28031, 28030, 28029,
    28027, 28026, 28025, 28024, 28022, 28021, 28019, 28018, 28017, 28014
  ];

  console.log(`Processing ${prNumbers.length} PRs...`);

  for (const prNumber of prNumbers) {
    try {
      console.log(`\nProcessing PR #${prNumber}...`);
      
      // Get PR details
      const pr = await getPRDetails(prNumber);
      console.log(`  Title: ${pr.title}`);
      console.log(`  Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      console.log(`  State: ${pr.state}`);
      
      if (pr.state !== 'open') {
        console.log(`  ⏭️  Skipping - PR is not open`);
        continue;
      }

      if (pr.draft) {
        console.log(`  ⏭️  Skipping - PR is draft`);
        continue;
      }

      // Try to merge the PR
      try {
        const result = await mergePR(prNumber);
        console.log(`  ✅ Successfully merged PR #${prNumber}`);
        console.log(`  SHA: ${result.sha}`);
      } catch (mergeError) {
        console.log(`  ❌ Failed to merge PR #${prNumber}: ${mergeError.message}`);
        
        // If merge failed due to conflicts, try to resolve them
        if (mergeError.message.includes('conflict') || mergeError.message.includes('dirty')) {
          console.log(`  🔧 Attempting to resolve conflicts for PR #${prNumber}...`);
          
          try {
            // Checkout the PR branch
            execSync(`git fetch origin ${pr.head.ref}`, { stdio: 'inherit' });
            execSync(`git checkout -b temp-${prNumber} origin/${pr.head.ref}`, { stdio: 'inherit' });
            
            // Try to merge with main
            try {
              execSync(`git merge origin/main`, { stdio: 'inherit' });
              console.log(`  ✅ Conflicts resolved for PR #${prNumber}`);
              
              // Push the resolved changes
              execSync(`git push origin temp-${prNumber}:${pr.head.ref}`, { stdio: 'inherit' });
              
              // Try to merge again
              const retryResult = await mergePR(prNumber);
              console.log(`  ✅ Successfully merged PR #${prNumber} after conflict resolution`);
              console.log(`  SHA: ${retryResult.sha}`);
              
            } catch (mergeError2) {
              console.log(`  ❌ Could not resolve conflicts for PR #${prNumber}: ${mergeError2.message}`);
            }
            
            // Clean up
            execSync(`git checkout main`, { stdio: 'inherit' });
            execSync(`git branch -D temp-${prNumber}`, { stdio: 'inherit' });
            
          } catch (resolveError) {
            console.log(`  ❌ Error resolving conflicts for PR #${prNumber}: ${resolveError.message}`);
          }
        }
      }
      
    } catch (error) {
      console.log(`  ❌ Error processing PR #${prNumber}: ${error.message}`);
    }
  }

  console.log('\n✅ Finished processing all PRs');
}

// Run the script
processPRs().catch(console.error);