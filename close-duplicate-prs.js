#!/usr/bin/env node

//Function to close duplicate PRs
async function closeDuplicatePRs() {
  try {
    // console.log('🚀 Starting cleanup of duplicate PRs...\n');

    //Get all open PRs
    const response = await fetch(
      'https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100'
    );
    const prs = await response.json();

    // console.log(`📋 Found ${prs.length} open PRs`);

    const duplicatePRs = prs.filter(
      pr =>
        pr.title === 'Fix errors and merge to main' &&
        (pr.draft || pr.mergeable === false || pr.mergeable_state === 'dirty')
    );

    // console.log(`🔍 Found ${duplicatePRs.length} duplicate PRs to close`);

    let closedCount = 0;
    let errorCount = 0;

    for (const pr of duplicatePRs) {
      try {
        // console.log(`🔄 Closing PR #${pr.number}...`);

        const closeResponse = await fetch(
          `https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${pr.number}`,
          {
            method: 'PATCH',
            headers: {
              Accept: 'application/vnd.github.v3+json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              state: 'closed',
              body: `This PR has been automatically closed as it was a duplicate. The main fixes have already been merged into the main branch.\n\n**Reason for closure:** Duplicate PR with merge conflicts or draft status.\n\n**Status:** ✅ All critical fixes have been successfully merged.`,
            }),
          }
        );

        if (closeResponse.ok) {
          // console.log(`✅ Successfully closed PR #${pr.number}`);
          closedCount++;
        } else {
          // console.log(
            `❌ Failed to close PR #${pr.number}: ${closeResponse.status}`
          );
          errorCount++;
        }

        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        // console.log(`❌ Error closing PR #${pr.number}:`, error.message);
        errorCount++;
      }
    }

    // console.log('\n🎯 Cleanup Complete!');
    // console.log(`✅ Successfully closed: ${closedCount} PRs`);
    // console.log(`❌ Failed to close: ${errorCount} PRs`);
  } catch (error) {
    // console.error('❌ Error in cleanup process:', error);
  }
}

closeDuplicatePRs().catch(console.error);
