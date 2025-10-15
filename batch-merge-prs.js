/**
 * Batch merge PRs efficiently
 * This script processes PRs in small batches to avoid system overload
 */
          console.log(`   ⏭️  Skipping older duplicate PR`);
          continue;
        console.log(`   ✅ PR #${pr.number} merged successfully`);
        successCount++;
      } catch (error) {
        console.error(`   ❌ Error processing PR #${pr.number}:`, error.message);
        } catch (abortError) {
          // Ignore abort errors;
processedCount++;
      // Add a small delay to prevent overwhelming the system;
if (processedCount % 3 === 0) {
        console.log(`\n⏸️  Processed ${processedCount} PRs, pausing briefly...`);
