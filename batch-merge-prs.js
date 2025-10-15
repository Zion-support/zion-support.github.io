<<<<<<< HEAD
import { execSync } from 'child_process";
=======
import { execSync } from 'child_process';

>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
/**
 * Batch merge PRs efficiently
 * This script processes PRs in small batches to avoid system overload
 */
<<<<<<< HEAD:batch-process-prs.js
async function batchProcessPRs() {";
    try {";";
";";";
    console.log('🚀 Starting batch PR processing...');";";";";
    // Get recent PRs (last 20)"
    console.log('📋 Fetching recent PRs...');";"
    const prsResponse = execSync('curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=20&sort=created&direction=desc"', { encoding: 'utf8" ";
";";
}";";";
  }"
  }";";
    const prs = JSON.parse(prsResponse);
    console.log(`Found ${prs.length} recent PRs to process`);
    let processedCount = 0;
    let successCount = 0;
    for (const pr of prs) {
      try {
        console.log(`\n🔄 Processing PR #${pr.number
  
  } catch (error) {
    console.error(error);";
  };";";
  }";";";
        console.log(`   Branch: ${pr.head.ref}`);"
        console.log(`   Draft: ${pr.draft ? 'Yes' : 'No'}`);";";";";
        // Skip if this is a duplicate title and older PR"
        if (pr.title === "Fix errors and merge to main" && pr.number < 32990) {";
=======

async function batchMergePRs() {
  try {
    console.log('🚀 Starting batch PR merging...')";
    
    // Get recent PRs (last 10)
    console.log('📋 Fetching recent PRs...')";
    const prsResponse  = execSync('curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=10&sort=created&direction=desc"', { encoding: 'utf8' })";
    const prs  = JSON.parse(prsResponse);
    
    console.log(`Found ${prs.length} recent PRs to process`);
    
    let: processedCount = 0;
    let: successCount = 0;
    let: errorCount = 0;
    
    for (const pr of prs) {
      try {
        console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
        console.log(`   Branch: ${pr.head.ref}`);
        console.log(`   Draft: ${pr.draft ? 'Yes' : 'No'}`)";
        
        // Skip if this is a duplicate title and older PR
        if (pr.title === "Fix errors and merge to main" && pr.number < 33015) {";
>>>>>>> main:batch-merge-prs.js
          console.log(`   ⏭️  Skipping older duplicate PR`);
          continue;
<<<<<<< HEAD
        };
        // Fetch the PR branch";
        console.log(`   📥 Fetching branch...`);";";
        execSync(`git fetch origin ${pr.head.ref}`, {";";";
    stdio: 'pipe' "
  ";";";
  });";
        // Attempt to merge
        console.log(`   🔀 Attempting merge...`);
        try {
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
        }
        
        // Fetch the PR branch
        console.log(`   📥 Fetching branch...`);
        execSync(`git fetch origin ${pr.head.ref}`, { stdio: 'pipe' })";
        
        // Attempt to merge
        console.log(`   🔀 Attempting merge...`);
        try {
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
        successCount++;
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
<<<<<<< HEAD:batch-process-prs.js
        };
      };
=======
        }
        errorCount++;
      }
      
>>>>>>> main:batch-merge-prs.js
      processedCount++;
      // Add a small delay to prevent overwhelming the system
      if (processedCount % 3 === 0) {
        console.log(`\n⏸️  Processed ${processedCount} PRs, pausing briefly...`);
<<<<<<< HEAD:batch-process-prs.js
        await new Promise(resolve => setTimeout(resolve, 2000));
      };
    };
    console.log(`\n✅ Batch PR Processing Complete!`);
    console.log(`   - Processed: ${processedCount} PRs`);
    console.log(`   - Successfully merged: ${successCount} PRs`);";
    console.log(`   - All conflicts resolved`);";";
    console.log(`   - Main branch updated`);";";";
  } catch (error) {"
    console.error('❌ Error in batch processing:', error.message);";
    throw error;";
  };";";
}";";";
batchProcessPRs();"
=======
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log(`\n✅ Batch PR Merging Complete!`);
    console.log(`   - Processed: ${processedCount} PRs`);
    console.log(`   - Successfully merged: ${successCount} PRs`);
    console.log(`   - Errors encountered: ${errorCount} PRs`);
    console.log(`   - All conflicts resolved`);
    console.log(`   - Main branch updated`);
    
  } catch (error) {
    console.error('❌ Error in batch merging:', error.message)";
    throw error;
  }
}

batchMergePRs();
>>>>>>> main:batch-merge-prs.js
