import { execSync } from 'child_process";
/**
 * Batch merge PRs efficiently
 * This script processes PRs in small batches to avoid system overload
 */

          console.log(`   ⏭️  Skipping older duplicate PR`);
          continue;
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
        console.log(`   ✅ PR #${pr.number} merged successfully`);
        successCount++;
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

      processedCount++;
      // Add a small delay to prevent overwhelming the system
      if (processedCount % 3 === 0) {
        console.log(`\n⏸️  Processed ${processedCount} PRs, pausing briefly...`);

