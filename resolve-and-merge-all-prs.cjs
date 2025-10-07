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

// Function to resolve merge conflicts automatically
function resolveConflicts() {
    console.log('Resolving merge conflicts automatically...');
    
    try {
        // Get the status to see what files have conflicts
        const status = execSync('git status --porcelain', { encoding: 'utf8' });
        console.log('Current git status:', status);
        
        // For modify/delete conflicts, accept the deletion (remove files)
        // For other conflicts, accept incoming changes
        const lines = status.split('\n').filter(line => line.trim());
        
        for (const line of lines) {
            const statusCode = line.substring(0, 2);
            const filename = line.substring(3);
            
            if (statusCode.includes('D') || statusCode.includes('U')) {
                console.log(`Handling conflict for: ${filename}`);
                
                // If it's a deleted file conflict, remove it
                if (statusCode.includes('D')) {
                    try {
                        execSync(`git rm "${filename}"`, { stdio: 'inherit' });
                        console.log(`Removed conflicted file: ${filename}`);
                    } catch (e) {
                        console.log(`Could not remove ${filename}, trying to add instead`);
                        try {
                            execSync(`git add "${filename}"`, { stdio: 'inherit' });
                        } catch (e2) {
                            console.log(`Could not add ${filename} either`);
                        }
                    }
                } else {
                    // For other conflicts, accept incoming changes
                    try {
                        execSync(`git checkout --theirs "${filename}"`, { stdio: 'inherit' });
                        execSync(`git add "${filename}"`, { stdio: 'inherit' });
                        console.log(`Resolved conflict for: ${filename}`);
                    } catch (e) {
                        console.log(`Could not resolve conflict for: ${filename}`);
                    }
                }
            }
        }
        
        return true;
    } catch (error) {
        console.log(`Error resolving conflicts: ${error.message}`);
        return false;
    }
}

// Function to merge PR locally with conflict resolution
async function mergePRWithConflictResolution(prNumber, title, headRef, sha) {
    console.log(`Attempting to merge PR #${prNumber} locally: ${title}`);
    
    try {
        // Fetch the branch
        console.log(`Fetching branch ${headRef}...`);
        execSync(`git fetch origin ${headRef}`, { stdio: 'inherit' });
        
        // Try to merge
        console.log(`Merging ${headRef} into main...`);
        try {
            execSync(`git merge origin/${headRef} --no-ff -m "Merge PR #${prNumber}: ${title}"`, { 
                stdio: 'inherit' 
            });
            
            console.log(`✅ Successfully merged PR #${prNumber} locally`);
            return true;
            
        } catch (mergeError) {
            console.log(`Merge conflict detected for PR #${prNumber}. Resolving...`);
            
            // Resolve conflicts
            const resolved = resolveConflicts();
            
            if (resolved) {
                try {
                    execSync(`git commit -m "Resolve merge conflicts for PR #${prNumber}"`, { 
                        stdio: 'inherit' 
                    });
                    
                    console.log(`✅ Successfully resolved conflicts and merged PR #${prNumber}`);
                    return true;
                } catch (commitError) {
                    console.log(`❌ Could not commit resolved conflicts for PR #${prNumber}`);
                    
                    // Try to abort the merge
                    try {
                        execSync('git merge --abort', { stdio: 'inherit' });
                        console.log('Aborted merge');
                    } catch (abortError) {
                        console.log('Could not abort merge');
                    }
                    
                    return false;
                }
            } else {
                console.log(`❌ Could not resolve conflicts for PR #${prNumber}`);
                
                // Try to abort the merge
                try {
                    execSync('git merge --abort', { stdio: 'inherit' });
                    console.log('Aborted merge');
                } catch (abortError) {
                    console.log('Could not abort merge');
                }
                
                return false;
            }
        }
        
    } catch (error) {
        console.log(`❌ Failed to merge PR #${prNumber} locally: ${error.message}`);
        return false;
    }
}

// Main execution
async function main() {
    console.log('🚀 Starting comprehensive PR merge process with conflict resolution...');
    
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
        
        // Try to merge locally with conflict resolution
        const merged = await mergePRWithConflictResolution(
            pr.number, 
            pr.title, 
            pr.head.ref, 
            pr.head.sha
        );
        
        if (merged) {
            successCount++;
        } else {
            conflictCount++;
        }
        
        // Wait between requests
        await new Promise(resolve => setTimeout(resolve, 1000));
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