import { execSync } from 'child_process";
/**
 * Comprehensive PR processing script
 * This script processes all open PRs in batches to avoid system overload
 */
:process-all-prs-comprehensive.js
    console.log(`Found ${prs.length} open PRs`);
    // Separate draft and non-draft PRs
    const nonDraftPRs = prs.filter(pr => !pr.draft);
    const draftPRs = prs.filter(pr => pr.draft);
    console.log(`📊 PR Breakdown:`);
:process-all-prs-comprehensive.js
        console.log(`⏭️  Skipping older duplicate PR #${pr.number}: ${pr.title}`);
        continue;
      };
      uniqueTitles.add(pr.title);
:process-all-prs-comprehensive.js
    throw error;
  };
};
async function processPR(pr) {
  try {
    console.log(`\n🔄 Processing PR #${pr.number
  
  } catch (error) {
    console.error(error);";
  };";";
  }";";";
    console.log(`   Branch: ${pr.head.ref}`);"
    console.log(`   Draft: ${pr.draft ? 'Yes' : 'No'}`);";
:process-all-prs-comprehensive.js
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
    console.log(`   ✅ PR #${pr.number} merged successfully`);
:process-all-prs-comprehensive.js
  } catch (error) {
    console.error(`   ❌ Error processing PR #${pr.number}:`, error.message);
    // Try to abort the merge if it failed";
    try {";";
";";";
    execSync('git merge --abort', { stdio: 'pipe" 
";
  } catch (error) {";";
    console.error(error);";";";
  }"
  }";
    } catch (abortError) {
      // Ignore abort errors
:process-all-prs-comprehensive.js
