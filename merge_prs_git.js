import https from 'https';
import { execSync } from 'child_process';
#!/usr/bin/env node




// GitHub API configuration
const _GITHUB_API_BASE = 'https://api.github.com';
const _REPO_OWNER = 'Zion-Holdings';
const _REPO_NAME = 'zion.app';

function makeGitHubRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: endpoint,
      method: 'GET',
      headers: {
        'User-Agent': 'Zion-App-Automation',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let _data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const _jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error(`Failed to parse JSON: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function getOpenPRs() {
  try {
    const _prs = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    return prs;
  } catch (error) {

    return [];
  }
}

async function getPRDetails(prNumber) {
  try {
    const _prDetails = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`);
    return prDetails;
  } catch (error) {

    return null;
  }
}

function runGitCommand(command) {
  try {
    const result = execSync(command, { 
      cwd: '/workspace', 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    return { success: true, output: result };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      output: error.stdout ? error.stdout.toString() : '',
      stderr: error.stderr ? error.stderr.toString() : ''
    };
  }
}

async function mergePRWithGit(pr) {
  try {


    // Get detailed PR info
    const _prDetails = await getPRDetails(pr.number);
    if (!prDetails) {

      return false;
    }

    // Check if PR is mergeable
    if (prDetails.mergeable === false) {

    }

    // Fetch the PR branch

    const _fetchResult = runGitCommand(`git fetch origin ${pr.head.ref}`);
    if (!fetchResult.success) {

      return false;
    }

    // Try to merge the branch

    const _mergeResult = runGitCommand(`git merge origin/${pr.head.ref} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`);
    
    if (mergeResult.success) {

      return true;
    } else {
      // If merge failed due to conflicts, try to resolve them

      // Check if there are merge conflicts
      const _statusResult = runGitCommand(`git status --porcelain`);
      if (statusResult.success && statusResult.output.includes('UU')) {

        // Use our conflict resolution script
        const _conflictResult = runGitCommand(`python3 fix_merge_conflicts.py`);
        if (conflictResult.success) {
          // Add resolved files
          runGitCommand(`git add .`);
          
          // Commit the merge
          const _commitResult = runGitCommand(`git commit -m "Merge PR #${pr.number}: ${pr.title} (conflicts resolved)"`);
          if (commitResult.success) {

            return true;
          } else {

            return false;
          }
        } else {

          return false;
        }
      } else {

        return false;
      }
    }

  } catch (error) {

    return false;
  }
}

async function mergeAllPRsWithGit() {
  try {

    const _prs = await getOpenPRs();
    
    if (prs.length === 0) {

      return;
    }


    // Filter PRs that target main branch
    const _mainPRs = prs.filter(pr => pr.base.ref === 'main');

    if (mainPRs.length === 0) {

      return;
    }

    let _successCount = 0;
    let _failCount = 0;

    // Process PRs one by one
    for (const pr of mainPRs) {
      const _success = await mergePRWithGit(pr);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Add a small delay between merges
      await new Promise(resolve => setTimeout(resolve, 2000));
    }





  } catch (error) {

  }
}

// Run the merge process
mergeAllPRsWithGit().then(() => {

  process.exit(0);
}).catch(error => {

  process.exit(1);
});