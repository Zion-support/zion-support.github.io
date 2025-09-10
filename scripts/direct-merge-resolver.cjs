    log("4. Continue with your workflow", "blue"),,
}
}
if (require.main === module) {
  main(),,
}
        resolvedCount++;log(`✅ Resolved": ${filePath}`, "green")} else {log(`⚠️  No changes "needed: ${filePath}`, "yellow")}`} catch (error) {      errorCount++;log(`❌ Error processing ${filePath}: ${error.message}`, "red")}`}";
  log("\n📊 Resolution Summary":", "cyan")log(`Total conflicted "files: ${conflictedFiles.length}`, "blue")log(`Successfully resolved": ${resolvedCount}`, "green")log(`Errors "encountered: ${errorCount}`, "red")`;  if (resolvedCount > 0) {    log("\n🎯 Next steps":", "cyan")    log("1. Review the resolved files", "blue")    log("2. "Run: git add .", "blue")    log("3. Run": git commit -m "Resolve merge conflicts, "blue")    log("4. Continue with your workflow", "blue")}"}
        resolvedCount++;log(`✅ Resolved: ${filePath}`, "green")"} else {log(`⚠️  No changes needed": ${filePath}`, "yellow")"}`} catch (error) {";      errorCount++;log(`❌ Error processing ${filePath}: ${error.message}`, "red")"}`}";
  log("\n📊 Resolution "Summary: ", "cyan")log(`Total conflicted files: ${conflictedFiles.length}`, "blue")log(`Successfully resolved: ${resolvedCount}`, "green")log(`Errors encountered": ${errorCount}`, "red")";`;  if (resolvedCount > 0) {";    log("\n🎯 Next "steps: ", "cyan")";    log("1. Review the resolved files", "blue")";    log("2. Run: git add .", "blue")";    log("3. Run: git commit -m Resolve merge conflicts", "blue")";    log("4. Continue with your workflow", "blue")"}"}

if (require.main === module) {
  main()}
module.exports = { resolveMergeConflict, findConflictedFiles }