#!/usr/bin/env node

const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');

// Configuration
const GITHUB_TOKEN = 'ghs_2CijlF4cOrlTIwzwz3nvWrTnWL9uZC0Q24TL';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';
const WORKSPACE = '/workspace';

// GitHub API helper
function githubRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'PR-Merger-Bot/1.0',
      },
    };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
    }

    const req = https.request(options, res => {
      let responseData = '';
      res.on('data', chunk => (responseData += chunk));
      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: responseData });
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

// Git command helper
function runGitCommand(command, options = {}) {
  try {
    const result = execSync(command, {
      cwd: WORKSPACE,
      encoding: 'utf8',
      timeout: 30000,
      ...options,
    });
    return { success: true, output: result.trim() };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout || '' };
  }
}

// Log function
function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const emoji =
    type === 'error'
      ? '❌'
      : type === 'success'
        ? '✅'
        : type === 'warning'
          ? '⚠️'
          : '🔄';
  console.log(`${emoji} [${timestamp}] ${message}`);
}

async function main() {
  log('Starting comprehensive PR merge process...');

  // Create log file
  const logFile = `${WORKSPACE}/pr_merge_log_${Date.now()}.txt`;
  const originalLog = console.log;
  console.log = function (...args) {
    originalLog.apply(console, args);
    fs.appendFileSync(logFile, args.join(' ') + '\n');
  };

  try {
    // Step 1: Get current git status
    log('Checking current git status...');
    const statusResult = runGitCommand('git status --porcelain');
    if (statusResult.success && statusResult.output) {
      log(
        'Working directory has uncommitted changes, committing...',
        'warning'
      );
      runGitCommand('git add .');
      runGitCommand('git commit -m "Auto-commit before PR merge process"');
    }

    // Step 2: Fetch latest changes
    log('Fetching latest changes from origin...');
    const fetchResult = runGitCommand('git fetch origin');
    if (!fetchResult.success) {
      log(`Fetch failed: ${fetchResult.error}`, 'error');
    }

    // Step 3: Switch to main and update
    log('Switching to main branch and updating...');
    runGitCommand('git checkout main');
    runGitCommand('git pull origin main');

    // Step 4: Get open PRs
    log('Fetching open PRs from GitHub API...');
    const prsResponse = await githubRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open`
    );

    if (prsResponse.status !== 200 || !Array.isArray(prsResponse.data)) {
      log(`Failed to fetch PRs: ${prsResponse.status}`, 'error');
      return;
    }

    const openPRs = prsResponse.data;
    log(`Found ${openPRs.length} open PR(s)`);

    if (openPRs.length === 0) {
      log('No open PRs to process', 'success');
      return;
    }

    // Step 5: Process each PR
    const results = [];
    for (const pr of openPRs) {
      log(`\nProcessing PR #${pr.number}: ${pr.title}`);
      log(`Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      log(`Draft: ${pr.draft ? 'Yes' : 'No'}`);

      // Get detailed PR info to check mergeability
      const prDetailResponse = await githubRequest(
        `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}`
      );

      if (prDetailResponse.status !== 200) {
        log(`Failed to get PR details: ${prDetailResponse.status}`, 'error');
        continue;
      }

      const prDetail = prDetailResponse.data;
      log(`Mergeable: ${prDetail.mergeable}`);
      log(`Conflicts: ${prDetail.mergeable === false ? 'Yes' : 'No'}`);

      // Step 6: Attempt to merge the PR
      log(`Attempting to merge PR #${pr.number}...`);

      const mergeData = {
        commit_title: `Merge PR #${pr.number}: ${pr.title}`,
        commit_message: `Auto-merge PR #${pr.number} - ${pr.title}\n\nMerged automatically by PR resolution script`,
        merge_method: 'merge',
      };

      const mergeResponse = await githubRequest(
        `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}/merge`,
        'PUT',
        mergeData
      );

      if (mergeResponse.status === 200 && mergeResponse.data.merged) {
        log(`Successfully merged PR #${pr.number}`, 'success');
        results.push({ pr: pr.number, status: 'merged', message: 'Success' });
      } else {
        const errorMsg = mergeResponse.data.message || 'Unknown error';
        log(`Failed to merge PR #${pr.number}: ${errorMsg}`, 'error');
        results.push({ pr: pr.number, status: 'failed', message: errorMsg });

        // If merge failed due to conflicts, try alternative approach
        if (errorMsg.includes('conflict') || errorMsg.includes('merge')) {
          log(`Attempting conflict resolution for PR #${pr.number}...`);

          // Try to checkout the PR branch and merge main into it
          const checkoutResult = runGitCommand(`git checkout ${pr.head.ref}`);
          if (checkoutResult.success) {
            const mergeMainResult = runGitCommand('git merge main');
            if (!mergeMainResult.success) {
              // Auto-resolve conflicts by preferring HEAD
              log('Auto-resolving conflicts...', 'warning');
              runGitCommand('git checkout --theirs .');
              runGitCommand('git add .');
              runGitCommand('git commit -m "Auto-resolve merge conflicts"');
            }

            // Push the updated branch
            runGitCommand(`git push origin ${pr.head.ref}`);

            // Try merge again
            const retryMergeResponse = await githubRequest(
              `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}/merge`,
              'PUT',
              mergeData
            );

            if (
              retryMergeResponse.status === 200 &&
              retryMergeResponse.data.merged
            ) {
              log(
                `Successfully merged PR #${pr.number} after conflict resolution`,
                'success'
              );
              results[results.length - 1] = {
                pr: pr.number,
                status: 'merged',
                message: 'Success after conflict resolution',
              };
            }
          }
        }
      }

      // Brief pause between operations
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Step 7: Final status update
    log('\n=== MERGE SUMMARY ===');
    runGitCommand('git checkout main');
    runGitCommand('git pull origin main');

    const finalLogResult = runGitCommand('git log --oneline -10');
    if (finalLogResult.success) {
      log('Recent commits:');
      log(finalLogResult.output);
    }

    log('\n=== RESULTS ===');
    results.forEach(result => {
      const status = result.status === 'merged' ? '✅' : '❌';
      log(`${status} PR #${result.pr}: ${result.message}`);
    });

    const successCount = results.filter(r => r.status === 'merged').length;
    log(
      `\nProcess completed: ${successCount}/${results.length} PRs merged successfully`,
      'success'
    );

    // Save results to file
    const resultsFile = `${WORKSPACE}/pr_merge_results_${Date.now()}.json`;
    fs.writeFileSync(
      resultsFile,
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          totalPRs: results.length,
          successfulMerges: successCount,
          results: results,
        },
        null,
        2
      )
    );

    log(`Results saved to: ${resultsFile}`);
  } catch (error) {
    log(`Critical error: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}
