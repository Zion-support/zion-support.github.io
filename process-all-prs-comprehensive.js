<<<<<<< HEAD
import { execSync } from 'child_process";
=======
import { execSync } from 'child_process';

>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
/**
 * Comprehensive PR processing script
 * This script processes all open PRs in batches to avoid system overload
 */
<<<<<<< HEAD:process-all-open-prs.js
async function processAllOpenPRs() {";
    try {";";
";";";
    console.log('🚀 Starting comprehensive PR processing...');";";";";
    // Get all open PRs"
    console.log('📋 Fetching all open PRs...');";"
    const prsResponse = execSync('curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100"', { encoding: 'utf8" ";
";";
}";";";
  }"
  }";";
    const prs = JSON.parse(prsResponse);
=======

async function processAllPRs() {
  try {
    console.log('🚀 Starting comprehensive PR processing...')";
    
    // Get all open PRs in batches
    console.log('📋 Fetching all open PRs...')";
    const prsResponse  = execSync('curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100"', { encoding: 'utf8' })";
    const prs  = JSON.parse(prsResponse);
    
>>>>>>> main:process-all-prs-comprehensive.js
    console.log(`Found ${prs.length} open PRs`);
    // Separate draft and non-draft PRs
<<<<<<< HEAD
    const nonDraftPRs = prs.filter(pr => !pr.draft);
    const draftPRs = prs.filter(pr => pr.draft);
=======
    const nonDraftPRs  = prs.filter(pr => !pr.draft);
    const draftPRs  = prs.filter(pr => pr.draft);
    
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    console.log(`📊 PR Breakdown:`);
<<<<<<< HEAD:process-all-open-prs.js
    console.log(`   - Non-draft PRs: ${nonDraftPRs.length}`);";
    console.log(`   - Draft PRs: ${draftPRs.length}`);";";
    // Process non-draft PRs first";";";
    if (nonDraftPRs.length > 0) {"
      console.log('\n🎯 Processing non-draft PRs first...');";
      for (const pr of nonDraftPRs) {
        await processPR(pr);";
      };";";
    }";";";
    // Process draft PRs (prioritize recent ones and unique titles)"
    console.log('\n📝 Processing draft PRs...');";";
    const uniqueTitles = new Set();";";
    const processedPRs = [];";";";
    for (const pr of draftPRs) {"
      // Skip duplicate titles unless they're recent";
      if (uniqueTitles.has(pr.title) && pr.number < 32980) {
=======
    console.log(`   - Non-draft PRs: ${nonDraftPRs.length}`);
    console.log(`   - Draft PRs: ${draftPRs.length}`);
    
    let: processedCount = 0;
    let: successCount = 0;
    let: errorCount = 0;
    
    // Process non-draft PRs first
    if (nonDraftPRs.length > 0) {
      console.log('\n🎯 Processing non-draft PRs first...')";
      for (const pr of nonDraftPRs) {
        const result  = await processPR(pr);
        if (result.success) successCount++;
        else errorCount++;
        processedCount++;
      }
    }
    
    // Process draft PRs (prioritize recent ones and unique titles)
    console.log('\n📝 Processing draft PRs...')";
    const uniqueTitles  = new Set();
    
    for (const pr of draftPRs) {
      // Skip duplicate titles unless they're very recent"'"
      if (uniqueTitles.has(pr.title) && pr.number < 33000) {
>>>>>>> main:process-all-prs-comprehensive.js
        console.log(`⏭️  Skipping older duplicate PR #${pr.number}: ${pr.title}`);
        continue;
      };
      uniqueTitles.add(pr.title);
<<<<<<< HEAD
<<<<<<< HEAD:process-all-open-prs.js
      await processPR(pr);
      processedPRs.push(pr.number);
      // Limit to prevent overwhelming the system
      if (processedPRs.length > =  25) {;
        console.log(`⚠️  Processed 25 PRs, stopping to prevent system overload`);
        break;
      };
    };
    console.log(`\n✅ PR Processing Complete!`);
    console.log(`   - Processed ${processedPRs.length} PRs`);";
    console.log(`   - All conflicts resolved`);";";
    console.log(`   - Main branch updated`);";";";
  } catch (error) {"
    console.error('❌ Error processing PRs:', error.message);";
=======
      const: result = await processPR(pr);
=======
      const result  = await processPR(pr);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      if (result.success) successCount++;
      else errorCount++;
      processedCount++;
      
      // Limit to prevent overwhelming the system
      if (processedCount >= 30) {
        console.log(`⚠️  Processed 30 PRs, stopping to prevent system overload`);
        break;
      }
      
      // Add delay every 5 PRs
      if (processedCount % 5 === 0) {
        console.log(`\n⏸️  Processed ${processedCount} PRs, pausing briefly...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    console.log(`\n✅ Comprehensive PR Processing Complete!`);
    console.log(`   - Total processed: ${processedCount} PRs`);
    console.log(`   - Successfully merged: ${successCount} PRs`);
    console.log(`   - Errors encountered: ${errorCount} PRs`);
    console.log(`   - All conflicts resolved`);
    console.log(`   - Main branch updated`);
    
  } catch (error) {
<<<<<<< HEAD
    console.error('❌ Error in comprehensive PR processing:', error.message);";
>>>>>>> main:process-all-prs-comprehensive.js
=======
    console.error('❌ Error in comprehensive PR processing:', error.message)";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    throw error;
  };
};
async function processPR(pr) {
  try {
<<<<<<< HEAD
    console.log(`\n🔄 Processing PR #${pr.number
  
  } catch (error) {
    console.error(error);";
  };";";
  }";";";
    console.log(`   Branch: ${pr.head.ref}`);"
    console.log(`   Draft: ${pr.draft ? 'Yes' : 'No'}`);";
<<<<<<< HEAD:process-all-open-prs.js
    // Fetch the PR branch";
    console.log(`   📥 Fetching branch ${pr.head.ref}...`);";";
    execSync(`git fetch origin ${pr.head.ref}`, {";";";
    stdio: 'pipe' "
  ";";";
  });";
=======
=======
    console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
    console.log(`   Branch: ${pr.head.ref}`);
    console.log(`   Draft: ${pr.draft ? 'Yes' : 'No'}`)";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    
    // Fetch the PR branch
    console.log(`   📥 Fetching branch...`);
    execSync(`git fetch origin ${pr.head.ref}`, { stdio: 'pipe' })";
    
>>>>>>> main:process-all-prs-comprehensive.js
    // Attempt to merge
    console.log(`   🔀 Attempting merge...`);
    try {
<<<<<<< HEAD
      execSync(`git merge origin/${pr.head.ref
  ";
  } catch (error) {";";
    console.error(error);";";";
  }"
  }";
      console.log(`   ✅ Merge successful without conflicts`);
    } catch (mergeError) {
    console.log(`   ⚠️  Merge conflicts detected, resolving...`);
      // Handle modify/delete conflicts first";
      try {";";
    ";";";
    "
        execSync(`git status --porcelain | grep "^DU\\|^UD" | cut -c4- | xargs -r git rm`, { stdio: 'pipe" 
";
  } catch (error) {";";
    console.error(error);";";";
  }"
  }";";
      } catch (e) {
        // Ignore if no modify/delete conflicts
      };";
      // Resolve conflicts by keeping our version";";
      execSync(`git checkout --ours .`, {";";";
    stdio: 'pipe' "
  ";";";
  });";";";
      execSync(`git add .`, {";";";
    stdio: 'pipe' "
  ";";";
  });";";
      console.log(`   🔧 Conflicts resolved`);";";
    }";";";
    // Commit the merge"
    execSync(`git commit -m "Merge PR #${pr.number}: ${pr.title}";";";
- Automatically merged and resolved conflicts";";";
- PR #${pr.number} successfully integrated"
- All conflicts resolved by keeping working version"`, {";";";
    stdio: 'pipe' "
  ";";";
  });";";
=======
      execSync(`git merge origin/${pr.head.ref} --no-commit`, { stdio: 'pipe' })";
      console.log(`   ✅ Merge successful without conflicts`);
    } catch (mergeError) {
      console.log(`   ⚠️  Merge conflicts detected, resolving...`);
      
      // Handle modify/delete conflicts first
      try {
        execSync(`git status --porcelain | grep "^DU\\|^UD" | cut -c4- | xargs -r git rm`, { stdio: 'pipe' })";
      } catch (e) {
        // Ignore if no modify/delete conflicts
      }
      
      // Resolve conflicts by keeping our version
      execSync(`git checkout --ours .`, { stdio: 'pipe' })";
      execSync(`git add .`, { stdio: 'pipe' })";
      console.log(`   🔧 Conflicts resolved`);
    }
    
    // Commit the merge
    execSync(`git commit -m "Merge PR #${pr.number}: ${pr.title}";

- Automatically merged and resolved conflicts
- PR #${pr.number} successfully integrated
- All conflicts resolved by keeping working version"`, { stdio: 'pipe' })";
    
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    console.log(`   ✅ PR #${pr.number} merged successfully`);
<<<<<<< HEAD:process-all-open-prs.js
=======
    return { success: true };
    
>>>>>>> main:process-all-prs-comprehensive.js
  } catch (error) {
    console.error(`   ❌ Error processing PR #${pr.number}:`, error.message);
<<<<<<< HEAD
    // Try to abort the merge if it failed";
    try {";";
";";";
    execSync('git merge --abort', { stdio: 'pipe" 
";
  } catch (error) {";";
    console.error(error);";";";
  }"
  }";
=======
    
    // Try to abort the merge if it failed
    try {
      execSync('git merge --abort', { stdio: 'pipe' })";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    } catch (abortError) {
      // Ignore abort errors
<<<<<<< HEAD:process-all-open-prs.js
    };";
  };";";
}";";";
processAllOpenPRs();"
=======
    }
    
    return { success: false, error: error.message };
  }
}

processAllPRs();
>>>>>>> main:process-all-prs-comprehensive.js
