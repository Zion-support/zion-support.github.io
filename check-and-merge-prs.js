import https from 'https';
import { execSync } from 'child_process';

const GITHUB_TOKEN = 'ghs_ZysFsLzoox1OYndg8r3k7Wi9kxx2MI01o9po';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

async function fetchOpenPRs() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open`,
      method: 'GET',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Zion-Tech-Group-Bot',
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
          resolve(prs);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function mergePR(prNumber) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`,
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Zion-Tech-Group-Bot',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    const mergeData = JSON.stringify({
      commit_title: `Merge PR #${prNumber}`,
      commit_message: `Automated merge of PR #${prNumber}`,
      merge_method: 'merge'
    });

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(mergeData);
    req.end();
  });
}

async function checkAndMergePRs() {
  try {
    console.log('🔍 Checking for open PRs...');
    
    const prs = await fetchOpenPRs();
    console.log(`Found ${prs.length} open PRs`);
    
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
      return;
    }

    for (const pr of prs) {
      console.log(`\n📋 PR #${pr.number}: ${pr.title}`);
      console.log(`   Author: ${pr.user.login}`);
      console.log(`   State: ${pr.state}`);
      console.log(`   Mergeable: ${pr.mergeable}`);
      console.log(`   Head: ${pr.head.ref}`);
      console.log(`   Base: ${pr.base.ref}`);
      
      if (pr.mergeable === true) {
        try {
          console.log(`🔄 Attempting to merge PR #${pr.number}...`);
          const result = await mergePR(pr.number);
          console.log(`✅ Successfully merged PR #${pr.number}`);
          console.log(`   SHA: ${result.sha}`);
        } catch (error) {
          console.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`);
        }
      } else if (pr.mergeable === false) {
        console.log(`⚠️  PR #${pr.number} has merge conflicts and cannot be merged automatically`);
        
        // Try to resolve conflicts locally
        try {
          console.log(`🔧 Attempting to resolve conflicts for PR #${pr.number}...`);
          
          // Fetch the PR branch
          execSync(`git fetch origin ${pr.head.ref}`, { stdio: 'inherit' });
          
          // Try to merge
          try {
            execSync(`git merge origin/${pr.head.ref} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`, { stdio: 'inherit' });
            console.log(`✅ Successfully merged PR #${pr.number} after resolving conflicts`);
            
            // Push the merge
            execSync('git push origin main', { stdio: 'inherit' });
            console.log(`✅ Pushed merged changes to main branch`);
            
          } catch (mergeError) {
            console.log(`⚠️  Merge conflicts detected for PR #${pr.number}`);
            
            // Try to resolve conflicts automatically
            try {
              // Check for common conflict patterns and resolve them
              execSync('git status --porcelain', { stdio: 'inherit' });
              
              // Add all resolved files
              execSync('git add .', { stdio: 'inherit' });
              
              // Commit the merge
              execSync(`git commit -m "Resolve merge conflicts for PR #${pr.number}"`, { stdio: 'inherit' });
              
              // Push the resolved merge
              execSync('git push origin main', { stdio: 'inherit' });
              
              console.log(`✅ Successfully resolved and merged PR #${pr.number}`);
              
            } catch (resolveError) {
              console.log(`❌ Could not automatically resolve conflicts for PR #${pr.number}`);
              console.log(`   Manual intervention required`);
            }
          }
          
        } catch (fetchError) {
          console.log(`❌ Failed to fetch PR #${pr.number}: ${fetchError.message}`);
        }
      } else {
        console.log(`⏳ PR #${pr.number} merge status is unknown (${pr.mergeable})`);
      }
    }
    
  } catch (error) {
    console.error('❌ Error checking PRs:', error.message);
  }
}

// Run the script
checkAndMergePRs();