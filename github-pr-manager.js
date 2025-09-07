#!/usr/bin/env node;

        console.log('❌ Could not determine repository information');
    return null;

// Function to list open PRs using GitHub CLI;

        const result = execSync('gh pr list --state open --json number,title,headRefName,baseRefName', { encoding: 'utf8' });
        const prs = JSON.parse(result);
        console.log(`Found ${prs.length} open PRs`);
        return prs;

        console.log('⚠️  GitHub CLI not available or no PRs found');
        return [];

// Function to merge a PR;

        console.log(`❌ Failed to merge PR #${prNumber}: ${error.message}`);
        return false;

// Function to check for merge conflicts in a PR;

        console.log(`⚠️  Could not check conflicts for PR #${prNumber}`);

// Main execution;

            console.log(`📁 Repository: ${repoInfo.owner}/${repoInfo.repo}`);

        // List open PRs;
        const openPRs = listOpenPRs();
        
        if (openPRs.length === 0) {'
            console.log('✅ No open PRs found');
            return;

            console.log(`  #${pr.number}: ${pr.title} (${pr.headRefName} → ${pr.baseRefName})`);
        });

        // Process each PR;
        let mergedCount = 0;

            console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
            
            // Check for conflicts;
            const isMergeable = checkPRConflicts(pr.number);

                console.log(`⚠️  PR #${pr.number} has conflicts. Skipping...`);
                continue;

            // Try to merge;

        console.log(`✅ Successfully merged: ${mergedCount}/${openPRs.length} PRs`);
        
        if (mergedCount === openPRs.length) {'
            console.log('🎉 All PRs have been successfully merged!');

            console.log('⚠️  Some PRs could not be merged due to conflicts or other issues');

        console.error('❌ Error during PR management:', error.message);
        process.exit(1);

// Run the main function;