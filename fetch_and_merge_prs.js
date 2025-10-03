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

async function fetchOpenPRs() {
    try {
        console.log('🔍 Fetching open pull requests...');
        const response = await makeGitHubRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
        
        if (response.status !== 200) {
            console.error('❌ Failed to fetch PRs:', response.data);
            return [];
        }

        const prs = response.data;
        console.log(`📋 Found ${prs.length} open PRs`);
        
        prs.forEach(pr => {
            console.log(`  - PR #${pr.number}: ${pr.title} (${pr.head.ref} -> ${pr.base.ref})`);
        });
        
        return prs;
    } catch (error) {
        console.error('❌ Error fetching PRs:', error.message);
        return [];
    }
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

        if (pr.draft) {
            console.log(`⚠️  PR is a draft, skipping...`);
            return false;
        }

        // If PR has conflicts, try to update it first
        if (pr.mergeable === false && pr.mergeable_state === 'behind') {
            console.log('🔄 PR is behind, attempting to update...');
            const updateResponse = await makeGitHubRequest(
                `/repos/${owner}/${repo}/pulls/${prNumber}/update-branch`,
                'PUT',
                {}
            );
            
            if (updateResponse.status === 202) {
                console.log('✅ Branch update initiated, waiting...');
                // Wait a bit for the update to complete
                await new Promise(resolve => setTimeout(resolve, 5000));
                
                // Re-check PR status
                const updatedPrResponse = await makeGitHubRequest(`/repos/${owner}/${repo}/pulls/${prNumber}`);
                if (updatedPrResponse.status === 200) {
                    const updatedPr = updatedPrResponse.data;
                    console.log(`🔀 Updated mergeable: ${updatedPr.mergeable}`);
                    if (updatedPr.mergeable === false) {
                        console.log('⚠️  PR still has conflicts after update, skipping...');
                        return false;
                    }
                }
            }
        }

        if (pr.mergeable === false) {
            console.log('⚠️  PR has conflicts, skipping...');
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

async function mergeAllOpenPRs() {
    console.log('='.repeat(60));
    console.log('GitHub PR Merger');
    console.log(`Repository: ${owner}/${repo}`);
    console.log('='.repeat(60));
    
    // Fetch all open PRs
    const openPRs = await fetchOpenPRs();
    
    if (openPRs.length === 0) {
        console.log('\n✅ No open PRs found!');
        return;
    }
    
    let successCount = 0;
    let failedCount = 0;
    
    // Process each PR
    for (const pr of openPRs) {
        console.log(`\n${'='.repeat(60)}`);
        console.log(`Processing PR #${pr.number}: ${pr.title}`);
        console.log(`${'='.repeat(60)}`);
        
        const success = await mergePR(pr.number);
        if (success) {
            successCount++;
        } else {
            failedCount++;
        }
        
        console.log('---');
    }
    
    console.log(`\n${'='.repeat(60)}`);
    console.log('SUMMARY');
    console.log(`${'='.repeat(60)}`);
    console.log(`Total PRs processed: ${openPRs.length}`);
    console.log(`✅ Successfully merged: ${successCount}`);
    console.log(`❌ Failed to merge: ${failedCount}`);
    console.log(`${'='.repeat(60)}`);
}

// Run the merge
mergeAllOpenPRs().catch(console.error);