#!/usr/bin/env node

import https from 'https';

// GitHub API token and repository info
const token = 'ghs_1p4lcqrpBjJ6F2MrwojlqhiwI6pDXo4CoAGZ';
const owner = 'Zion-Holdings';
const repo = 'zion.app';

// Function to make GitHub API requests
function makeGitHubRequest(path, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.github.com',
            port: 443,
            path: path,
            method: method,
            headers: {
                'Authorization': `token ${token}`,
                'User-Agent': 'Node.js',
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            }
        };

        if (data) {
            const jsonData = JSON.stringify(data);
            options.headers['Content-Length'] = Buffer.byteLength(jsonData);
        }

        const req = https.request(options, (res) => {
            let responseData = '';
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(responseData);
                    resolve({ status: res.statusCode, data: parsedData });
                } catch (e) {
                    resolve({ status: res.statusCode, data: responseData });
                }
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        if (data) {
            req.write(JSON.stringify(data));
        }
        req.end();
    });
}

async function mergePR(prNumber) {
    try {
        console.log(`🔄 Attempting to merge PR #${prNumber}...`);
        
        // First, check the PR status
        console.log('📋 Checking PR status...');
        const prResponse = await makeGitHubRequest(`/repos/${owner}/${repo}/pulls/${prNumber}`);
        
        if (prResponse.status !== 200) {
            console.error('❌ Failed to fetch PR:', prResponse.data);
            return false;
        }

        const pr = prResponse.data;
        console.log(`📝 PR Title: ${pr.title}`);
        console.log(`🔀 Mergeable: ${pr.mergeable}`);
        console.log(`📊 Mergeable State: ${pr.mergeable_state}`);
        console.log(`📊 State: ${pr.state}`);

        if (pr.state !== 'open') {
            console.log(`⚠️  PR is not open (state: ${pr.state})`);
            return false;
        }

        // Attempt to merge the PR
        console.log('🚀 Merging PR...');
        const mergeData = {
            commit_title: `Merge PR #${prNumber}: ${pr.title}`,
            commit_message: `Merged PR #${prNumber}: ${pr.title}\n\nThis PR was automatically merged to resolve conflicts and integrate changes.`,
            merge_method: 'merge'
        };

        const mergeResponse = await makeGitHubRequest(
            `/repos/${owner}/${repo}/pulls/${prNumber}/merge`,
            'PUT',
            mergeData
        );

        if (mergeResponse.status === 200) {
            console.log('✅ PR merged successfully!');
            console.log(`🔗 Merge commit SHA: ${mergeResponse.data.sha}`);
            return true;
        } else {
            console.error('❌ Failed to merge PR:', mergeResponse.data);
            return false;
        }

    } catch (error) {
        console.error('❌ Error during merge process:', error.message);
        return false;
    }
}

async function mergeAllPRs() {
    const prNumbers = [24703, 24702, 24701];
    let successCount = 0;
    
    for (const prNumber of prNumbers) {
        console.log(`\n=== Processing PR #${prNumber} ===`);
        const success = await mergePR(prNumber);
        if (success) {
            successCount++;
        }
        console.log('---');
    }
    
    console.log(`\n=== Summary ===`);
    console.log(`✅ Successfully merged: ${successCount}/${prNumbers.length} PRs`);
}

// Run the merge
mergeAllPRs();