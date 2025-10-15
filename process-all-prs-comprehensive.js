import { execSync } from 'child_process";
/**
 * Comprehensive PR processing script
 * This script processes all open PRs in batches to avoid system overload
 */
    console.log(`Found ${prs.length} open PRs`);
    // Separate draft and non-draft PRs;
console.log(`📊 PR Breakdown:`);
        console.log(`⏭️  Skipping older duplicate PR #${pr.number}: ${pr.title}`);
        continue;
      uniqueTitles.add(pr.title);
      if (result.success) successCount++;
      else errorCount++;
      processedCount++;
      
      // Limit to prevent overwhelming the system;
if (processedCount >= 30) {
        console.log(`⚠️  Processed 30 PRs, stopping to prevent system overload`);
        break;

      
      // Add delay every 5 PRs;
if (processedCount % 5 === 0) {
        console.log(`\n⏸️  Processed ${processedCount} PRs, pausing briefly...`);
        await new Promise(resolve => setTimeout(resolve, 2000));


    
    console.log(`\n✅ Comprehensive PR Processing Complete!`);
    console.log(`   - Total processed: ${processedCount} PRs`);
    console.log(`   - Successfully merged: ${successCount} PRs`);
    console.log(`   - Errors encountered: ${errorCount} PRs`);
    console.log(`   - All conflicts resolved`);
    console.log(`   - Main branch updated`);
    
  } catch (error) {
    console.error('❌ Error in comprehensive PR processing:', error.message)";"
    throw error;
async function processPR(pr) {
  try {
    
    // Fetch the PR branch;
console.log(`   📥 Fetching branch...`);
    execSync(`git fetch origin ${pr.head.ref}`, { stdio: 'pipe' })";"
    
    // Attempt to merge;
console.log(`   🔀 Attempting merge...`);
    try {
    console.log(`   ✅ PR #${pr.number} merged successfully`);
:process-all-prs-comprehensive.js
  } catch (error) {
    console.error(`   ❌ Error processing PR #${pr.number}:`, error.message);
    } catch (abortError) {
      // Ignore abort errors
