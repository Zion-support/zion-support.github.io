#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting GitHub PR check and merge process...');

// Function to get repository information
function getRepoInfo() {
    try {
        const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
        const match = remoteUrl.match(/github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/);
        if (match) {
            return {
                owner: match[1],
                repo: match[2]
            };
        }
    } catch (error) {
        console.log('❌ Could not determine repository information');
    }
    return null;
}

// Function to check if GitHub CLI is available
function checkGitHubCLI() {
    try {
        execSync('gh --version', { stdio: 'pipe' });
        return true;
    } catch (error) {
        return false;
    }
}

// Function to list open PRs using GitHub CLI
function listOpenPRs() {
    try {
        console.log('📋 Fetching open PRs...');
        const result = execSync('gh pr list --state open --json number,title,headRefName,baseRefName,mergeable', { encoding: 'utf8' });
        return JSON.parse(result);
    } catch (error) {
        console.log('❌ Could not fetch PRs:', error.message);
        return [];
    }
}

// Function to merge a PR
function mergePR(prNumber) {
    try {
        console.log(`🔄 Merging PR #${prNumber}...`);
        execSync(`gh pr merge ${prNumber} --merge --delete-branch`, { stdio: 'inherit' });
        console.log(`✅ Successfully merged PR #${prNumber}`);
        return true;
    } catch (error) {
        console.log(`❌ Failed to merge PR #${prNumber}:`, error.message);
        return false;
    }
}

// Function to get all remote branches that might be PRs
function getRemoteBranches() {
    try {
        const result = execSync('git branch -r', { encoding: 'utf8' });
        const branches = result.trim().split('\n')
            .map(branch => branch.trim())
            .filter(branch => branch && !branch.includes('HEAD'))
            .filter(branch => !branch.includes('main') && !branch.includes('master'));
        
        return branches;
    } catch (error) {
        console.log('❌ Could not fetch remote branches:', error.message);
        return [];
    }
}

// Main execution
async function main() {
    try {
        // Check if we're in a git repository
        execSync('git rev-parse --git-dir', { stdio: 'pipe' });
        console.log('✅ Git repository detected');
    } catch (error) {
        console.error('❌ Not in a git repository');
        process.exit(1);
    }

    // Get repository information
    const repoInfo = getRepoInfo();
    if (repoInfo) {
        console.log(`📍 Repository: ${repoInfo.owner}/${repoInfo.repo}`);
    }

    // Fetch latest changes
    console.log('📥 Fetching latest changes...');
    execSync('git fetch --all --prune');

    // Get current branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    console.log(`📍 Current branch: ${currentBranch}`);

    // Switch to main branch
    if (currentBranch !== 'main') {
        console.log('🔄 Switching to main branch...');
        execSync('git checkout main');
    }

    // Pull latest changes
    console.log('📥 Pulling latest changes...');
    execSync('git pull origin main');

    // Check if GitHub CLI is available
    if (checkGitHubCLI()) {
        // Authenticate with GitHub
        try {
            execSync('gh auth status', { stdio: 'pipe' });
            console.log('✅ GitHub CLI authenticated');
            
            // List open PRs
            const openPRs = listOpenPRs();
            
            if (openPRs.length === 0) {
                console.log('✅ No open PRs found');
            } else {
                console.log(`📋 Found ${openPRs.length} open PRs:`);
                openPRs.forEach(pr => {
                    console.log(`  - PR #${pr.number}: ${pr.title} (${pr.headRefName} -> ${pr.baseRefName})`);
                });

                // Process each PR
                let mergedCount = 0;
                for (const pr of openPRs) {
                    console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
                    
                    // Check if PR is mergeable
                    if (pr.mergeable === false) {
                        console.log(`⚠️  PR #${pr.number} has conflicts and cannot be merged automatically`);
                        continue;
                    }

                    // Try to merge the PR
                    if (mergePR(pr.number)) {
                        mergedCount++;
                    }
                }

                console.log(`\n🎉 Process completed! Merged ${mergedCount} out of ${openPRs.length} PRs`);
            }
        } catch (error) {
            console.log('❌ GitHub CLI not authenticated. Please run: gh auth login');
        }
    } else {
        console.log('❌ GitHub CLI not found. Checking for remote branches that might be PRs...');
        
        // Get remote branches
        const remoteBranches = getRemoteBranches();
        console.log(`📋 Found ${remoteBranches.length} remote branches that might be PRs`);
        
        if (remoteBranches.length > 0) {
            console.log('Remote branches:');
            remoteBranches.slice(0, 10).forEach(branch => {
                console.log(`  - ${branch}`);
            });
            if (remoteBranches.length > 10) {
                console.log(`  ... and ${remoteBranches.length - 10} more`);
            }
        }
    }

    console.log('🎉 GitHub PR check completed!');
}

main().catch(console.error);