#!/usr/bin/env node

const https = require('https');
const { execSync } = require('child_process');

// Function to make HTTP request
function makeRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const requestOptions = {
            hostname: urlObj.hostname,
            port: urlObj.port || 443,
            path: urlObj.pathname + urlObj.search,
            method: options.method || 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'PR-Merger-Script',
                ...options.headers
            }
        };

        const req = https.request(requestOptions, (res) => {
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
        
        if (options.data) {
            req.write(JSON.stringify(options.data));
        }
        
        req.end();
    });
}

// Function to fetch all open PRs
async function fetchOpenPRs() {
    console.log('Fetching open PRs...');
    
    try {
        const response = await makeRequest('https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100');
        
        if (response.status === 200) {
            console.log(`Found ${response.data.length} open PRs`);
            return response.data;
        } else {
            console.log(`Failed to fetch PRs. Status: ${response.status}`);
            return [];
        }
    } catch (error) {
        console.log(`Error fetching PRs: ${error.message}`);
        return [];
    }
}

// Function to check if PR can be merged
async function checkPRMergeability(prNumber) {
    try {
        const response = await makeRequest(`https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}`);
        
        if (response.status === 200) {
            const pr = response.data;
            return {
                canMerge: pr.mergeable === true,
                mergeableState: pr.mergeable_state,
                hasConflicts: pr.mergeable_state === 'dirty',
                title: pr.title,
                head: pr.head.ref,
                sha: pr.head.sha
            };
        }
        return null;
    } catch (error) {
        console.log(`Error checking PR #${prNumber}: ${error.message}`);
        return null;
    }
}

// Function to merge a PR using GitHub API
async function mergePRViaAPI(prNumber, title) {
    console.log(`Attempting to merge PR #${prNumber}: ${title}`);
    
    const data = {
        commit_title: `Merge PR #${prNumber}: ${title}`,
        merge_method: 'merge'
    };
    
    try {
        const response = await makeRequest(
            `https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${prNumber}/merge`,
            { method: 'PUT', data }
        );
        
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

// Function to merge PR locally and push
async function mergePRLocally(prNumber, title, headRef, sha) {
    console.log(`Attempting to merge PR #${prNumber} locally: ${title}`);
    
    try {
        // Fetch the branch
        console.log(`Fetching branch ${headRef}...`);
        execSync(`git fetch origin ${headRef}`, { stdio: 'inherit' });
        
        // Try to merge
        console.log(`Merging ${headRef} into main...`);
        execSync(`git merge origin/${headRef} --no-ff -m "Merge PR #${prNumber}: ${title}"`, { 
            stdio: 'inherit' 
        });
        
        console.log(`✅ Successfully merged PR #${prNumber} locally`);
        return true;
        
    } catch (error) {
        console.log(`❌ Failed to merge PR #${prNumber} locally: ${error.message}`);
        
        // Check for conflicts and try to resolve
        try {
            const status = execSync('git status --porcelain', { encoding: 'utf8' });
            if (status.includes('UU') || status.includes('AA')) {
                console.log('Merge conflicts detected. Attempting to resolve...');
                
                // Try to resolve conflicts by accepting incoming changes for most files
                execSync('git checkout --theirs .', { stdio: 'inherit' });
                execSync('git add .', { stdio: 'inherit' });
                execSync(`git commit -m "Resolve merge conflicts for PR #${prNumber}"`, { stdio: 'inherit' });
                
                console.log(`✅ Resolved conflicts and merged PR #${prNumber}`);
                return true;
            }
        } catch (resolveError) {
            console.log(`❌ Could not resolve conflicts for PR #${prNumber}`);
            
            // Abort the merge
            try {
                execSync('git merge --abort', { stdio: 'inherit' });
                console.log('Aborted merge');
            } catch (abortError) {
                console.log('Could not abort merge');
            }
        }
        
        return false;
    }
}

// Main execution
async function main() {
    console.log('🚀 Starting comprehensive PR merge process...');
    
    // Make sure we're on main branch and up to date
    try {
        console.log('Checking out main branch...');
        execSync('git checkout main', { stdio: 'inherit' });
        console.log('Pulling latest changes...');
        execSync('git pull origin main', { stdio: 'inherit' });
    } catch (error) {
        console.log('Error checking out main branch:', error.message);
        return;
    }
    
    // Fetch all open PRs
    const openPRs = await fetchOpenPRs();
    
    if (openPRs.length === 0) {
        console.log('No open PRs found.');
        return;
    }
    
    let successCount = 0;
    let conflictCount = 0;
    
    // Process each PR
    for (const pr of openPRs) {
        console.log(`\n--- Processing PR #${pr.number}: ${pr.title} ---`);
        
        // Check mergeability
        const mergeInfo = await checkPRMergeability(pr.number);
        
        if (!mergeInfo) {
            console.log(`❌ Could not check mergeability for PR #${pr.number}`);
            continue;
        }
        
        if (mergeInfo.hasConflicts) {
            console.log(`⚠️  PR #${pr.number} has conflicts. Attempting to resolve...`);
            conflictCount++;
        }
        
        // Try to merge via API first
        let merged = await mergePRViaAPI(pr.number, pr.title);
        
        // If API merge fails, try local merge
        if (!merged) {
            console.log(`API merge failed for PR #${pr.number}. Trying local merge...`);
            merged = await mergePRLocally(pr.number, pr.title, mergeInfo.head, mergeInfo.sha);
        }
        
        if (merged) {
            successCount++;
        }
        
        // Wait between requests
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Push changes if any were merged locally
    if (successCount > 0) {
        console.log('\n📤 Pushing merged changes to origin...');
        try {
            execSync('git push origin main', { stdio: 'inherit' });
            console.log('✅ Successfully pushed merged changes to origin/main');
        } catch (error) {
            console.log('❌ Failed to push changes:', error.message);
        }
    }
    
    console.log(`\n📊 Merge Summary:`);
    console.log(`✅ Successfully merged: ${successCount}/${openPRs.length} PRs`);
    console.log(`⚠️  PRs with conflicts: ${conflictCount}`);
    console.log(`❌ Failed to merge: ${openPRs.length - successCount} PRs`);
}

// Run the script
main().catch(console.error);