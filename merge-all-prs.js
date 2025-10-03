#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

// Configuration
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

// List of PRs to merge
const PRS_TO_MERGE = [
  { number: 24750, title: 'Fix web vitals import error during build' },
  { number: 24749, title: 'Fix errors and merge to main' }
];

// Function to make HTTP request
function makeRequest(options, data) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    const response = JSON.parse(body);
                    resolve({ status: res.statusCode, data: response });
                } catch (e) {
                    resolve({ status: res.statusCode, data: body });
                }
            });
        });
        
        req.on('error', reject);
        
        if (data) {
            req.write(JSON.stringify(data));
        }
        
        req.end();
    });
}

// Function to check PR status
async function checkPRStatus(prNumber) {
    console.log(`Checking status of PR #${prNumber}...`);
    
    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`,
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'PR-Merger-Script',
            'Authorization': GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : ''
        }
    };
    
    try {
        const response = await makeRequest(options);
        
        if (response.status === 200) {
            const pr = response.data;
            console.log(`PR #${prNumber}: ${pr.title}`);
            console.log(`  State: ${pr.state}`);
            console.log(`  Mergeable: ${pr.mergeable}`);
            console.log(`  Draft: ${pr.draft}`);
            console.log(`  Head: ${pr.head.ref}`);
            console.log(`  Base: ${pr.base.ref}`);
            
            return {
                number: prNumber,
                title: pr.title,
                state: pr.state,
                mergeable: pr.mergeable,
                draft: pr.draft,
                head: pr.head.ref,
                base: pr.base.ref
            };
        } else {
            console.log(`❌ Failed to get PR #${prNumber} status: ${response.status}`);
            return null;
        }
    } catch (error) {
        console.log(`❌ Error checking PR #${prNumber}: ${error.message}`);
        return null;
    }
}

// Function to merge a PR
async function mergePR(prNumber, title) {
    console.log(`\nAttempting to merge PR #${prNumber}: ${title}`);
    
    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`,
        method: 'PUT',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'PR-Merger-Script',
            'Authorization': GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : '',
            'Content-Type': 'application/json'
        }
    };
    
    const data = {
        commit_title: `Merge PR #${prNumber}: ${title}`,
        merge_method: 'merge'
    };
    
    try {
        const response = await makeRequest(options, data);
        
        if (response.status === 200 && response.data.merged) {
            console.log(`✅ Successfully merged PR #${prNumber}`);
            return true;
        } else {
            console.log(`❌ Failed to merge PR #${prNumber}`);
            console.log(`Status: ${response.status}`);
            console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);
            return false;
        }
    } catch (error) {
        console.log(`❌ Error merging PR #${prNumber}: ${error.message}`);
        return false;
    }
}

// Function to close a PR (if it can't be merged)
async function closePR(prNumber, title) {
    console.log(`\nAttempting to close PR #${prNumber}: ${title}`);
    
    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`,
        method: 'PATCH',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'PR-Merger-Script',
            'Authorization': GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : '',
            'Content-Type': 'application/json'
        }
    };
    
    const data = {
        state: 'closed'
    };
    
    try {
        const response = await makeRequest(options, data);
        
        if (response.status === 200) {
            console.log(`✅ Successfully closed PR #${prNumber}`);
            return true;
        } else {
            console.log(`❌ Failed to close PR #${prNumber}`);
            console.log(`Status: ${response.status}`);
            return false;
        }
    } catch (error) {
        console.log(`❌ Error closing PR #${prNumber}: ${error.message}`);
        return false;
    }
}

// Main execution
async function main() {
    console.log('🚀 Starting PR merge process...');
    console.log(`Repository: ${REPO_OWNER}/${REPO_NAME}`);
    console.log(`PRs to process: ${PRS_TO_MERGE.length}`);
    
    if (!GITHUB_TOKEN) {
        console.log('⚠️  Warning: GITHUB_TOKEN not set. Using public API (limited functionality).');
    }
    
    let successCount = 0;
    let processedCount = 0;
    
    for (const pr of PRS_TO_MERGE) {
        console.log(`\n--- Processing PR #${pr.number} ---`);
        
        // Check PR status first
        const prStatus = await checkPRStatus(pr.number);
        
        if (!prStatus) {
            console.log(`❌ Could not get status for PR #${pr.number}, skipping...`);
            continue;
        }
        
        processedCount++;
        
        // Skip if already closed or merged
        if (prStatus.state !== 'open') {
            console.log(`⏭️  PR #${pr.number} is already ${prStatus.state}, skipping...`);
            continue;
        }
        
        // Skip if draft
        if (prStatus.draft) {
            console.log(`⏭️  PR #${pr.number} is a draft, skipping...`);
            continue;
        }
        
        // Try to merge
        const merged = await mergePR(pr.number, pr.title);
        
        if (merged) {
            successCount++;
        } else {
            // If merge failed, try to close the PR
            console.log(`\n🔄 Merge failed, attempting to close PR #${pr.number}...`);
            await closePR(pr.number, pr.title);
        }
        
        // Wait between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    console.log(`\n🎉 PR merge process completed!`);
    console.log(`📊 Results:`);
    console.log(`   - Processed: ${processedCount}/${PRS_TO_MERGE.length} PRs`);
    console.log(`   - Successfully merged: ${successCount}`);
    console.log(`   - Failed/Closed: ${processedCount - successCount}`);
    
    // Create a summary file
    const summary = {
        timestamp: new Date().toISOString(),
        processed: processedCount,
        merged: successCount,
        failed: processedCount - successCount,
        prs: PRS_TO_MERGE.map(pr => ({
            number: pr.number,
            title: pr.title,
            processed: true
        }))
    };
    
    fs.writeFileSync('pr-merge-summary.json', JSON.stringify(summary, null, 2));
    console.log(`📄 Summary saved to pr-merge-summary.json`);
}

// Run the script
main().catch(console.error);