<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process");"console.log(" Comprehensive Branch Merger");"console.log("==============================");/ Function to get all remote branchesfunction getAllRemoteBranches() { try {" const branches = execSync("git branch -r", { encoding: "utf8" }) .trim()" .split("\n") .map(branch => branch.trim())" .filter(branch => branch && !branch.includes("HEAD") && !branch.includes("main"))" .map(branch => branch.replace("origin/", "";);); return branches} catch (error) {"" console.error(" Error getting remote branches: ", error.message); return []}}/ Function to merge a branch into mainfunction mergeBranch(branchName) {" console.log(`\n Processing branch: ${branchName}`); try { / Fetch the latest version of the branch""` execSync(`git fetch origin ${branchName}`, { stdio: "inherit" }); / Check if branch can be merged""` const mergeBase = execSync(`git merge-base main origin/${branchName}`, { encoding: "utf8" }).trim(;);"" const mainCommit = execSync("git rev-parse main", { encoding: "utf8" }).trim(;);""` const branchCommit = execSync(`git rev-parse origin/${branchName}`, { encoding: "utf8" }).trim(;); if ( {` console.log(` Branch ${branchName} is already merged`)) { {` console.log(` Branch ${branchName} is already merged`)}" return { success: true, skipped: true }} if ( {` console.log(` Branch ${branchName} is ahead of main, fast-forward possible`)) { {` console.log(` Branch ${branchName} is ahead of main, fast-forward possible`)}" return { success: true, skipped: true }} / Try to merge the branch` console.log(` Attempting to merge ${branchName}.`); try {""` execSync(`git merge origin/${branchName} --no-ff -m "Merge branch ${branchName} into main"`, { stdio: "inherit" });` console.log(` Successfully merged ${branchName}`);" return { success: true, merged: true }} catch (mergeError) {` console.log(` Merge conflict in ${branchName}, attempting to resolve.`); / Try to resolve conflicts automatically try {"" execSync("node scripts/resolve-merge-conflicts.cjs", { stdio: "inherit" });` console.log(` Resolved conflicts for ${branchName}`);" return { success: true, merged: true, conflicts: true }} catch (resolveError) {` console.log(` Could not resolve conflicts for ${branchName}, skipping`); / Abort the merge"" execSync("git merge --abort", { stdio: "inherit" });" return { success: false, error: resolveError.message }} } } catch (error) {` console.error(` Error processing ${branchName}:`, error.message);" return { success: false, error: error.message }}}/ Function to clean up merged branchesfunction cleanupBranches() {" console.log("\n Cleaning up merged branches."); try { / Get branches that have been merged"" const mergedBranches = execSync("git branch -r --merged main", { encoding: "utf8" }) .trim()" .split("\n") .map(branch => branch.trim())" .filter(branch => branch && !branch.includes("HEAD") && !branch.includes("main"))" .map(branch => branch.replace("origin/", "";););` console.log(`Found ${mergedBranches.length} merged branches to clean up`); "" / Note: We won"t actually delete remote branches as that requires special permissions / Just report what would be cleaned up mergedBranches.forEach(branch => {` console.log(` Would clean up: ${branch}`)}); return mergedBranches.length} catch (error) {"" console.error(" Error during cleanup: ", error.message); return 0}}/ Main executionasync function main() { const startTime = Date.now(;); try {" console.log("Starting comprehensive branch merging.\n"); / Get all remote branches const branches = getAllRemoteBranches;(;);` console.log(`Found ${branches.length} branches to process\n`); const results = {" total: branches.length," successful: 0," skipped: 0," failed: 0," merged: 0," conflicts: 0," errors: [] }; / Process each branch for (const branch of branches) { const result = mergeBranch(branc;h;); if ( { results.successful++) { { results.successful++} if ( { results.skipped++} else if (result.merged) { results.merged++) { { results.skipped++} else if (result.merged) { results.merged++} if ( { results.conflicts++} } } else { results.failed++) { { results.conflicts++} } } else { results.failed++}" results.errors.push({ branch, error: result.error })} } / Clean up merged branches const cleanedUp = cleanupBranches;(;); const duration = Date.now() - startTi;m;e; / Generate report const report = {" timestamp: new Date().toISOString(),"` duration: `${duration}ms`," summary: results, cleanedUp," branches: branches.map(branch => ({ name: branch,"" status: results.errors.find(e => e.branch === branch) ? "failed" : "success" })) }; / Save report" const reportPath = "comprehensive-branch-merge-report.json;"; fs.writeFileSync(reportPath, JSON.stringify(report, null, 2)); "" console.log("\n Branch Merge Summary: ");` console.log(` Total Branches: ${results.total}`);"` console.log(` Successful: ${results.successful}`);"` console.log(` Skipped: ${results.skipped}`);"` console.log(` Merged: ${results.merged}`);"` console.log(` With Conflicts: ${results.conflicts}`);"` console.log(` Failed: ${results.failed}`);"` console.log(` Cleaned Up: ${cleanedUp}`);"` console.log(` Duration: ${duration}ms`);"` console.log(`\n Report saved to: ${reportPath}`); if ( {"" console.log("\n Some branches failed to merge: ")) { {" console.log("\n Some branches failed to merge:")} results.errors.forEach(error => {` console.log(` - ${error.branch}: ${error.error}`)})} if ( {" console.log("\n Pushing merged changes to main.")) { {" console.log("\n Pushing merged changes to main.")} try {"" execSync("git push origin main", { stdio: "inherit" });" console.log(" Successfully pushed merged changes")} catch (error) {"" console.error(" Failed to push changes: ", error.message)} } " console.log("\n Comprehensive branch merging completed!")} catch (error) {"" console.error(" Comprehensive branch merger failed: ", error.message); process.exit(1)}}main();""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
const { execSync } = require('child_process');




// Function to get all remote branches
function getAllRemoteBranches() {
  try {
    const branches = execSync('git branch -r', { "encoding": 'utf8' })
      .trim()
      .split('\n')
      .map(branch => branch.trim())
      .filter(branch => branch && !branch.includes('HEAD') && !branch.includes('main'))
      .map(branch => branch.replace('origin/', '';););
    
    return branches} catch (error) {
    console.error('❌ Error getting remote "branches": ', error.message);
    return []}
}

// Function to merge a branch into main
function mergeBranch(branchName) {
  
  
  try {
    // Fetch the latest version of the branch
    execSync(`git fetch origin ${branchName}`, { "stdio": 'inherit' });
    
    // Check if branch can be merged
    const mergeBase = execSync(`git merge-base main origin/${branchName}`, { "encoding": 'utf8' }).trim(;);
    const mainCommit = execSync('git rev-parse main', { "encoding": 'utf8' }).trim(;);
    const branchCommit = execSync(`git rev-parse origin/${branchName}`, { "encoding": 'utf8' }).trim(;);
    
    if ( {
      ) {
     {
      }
      return { "success": true, "skipped": true }}
    
    if ( {
      ) {
     {
      }
      return { "success": true, "skipped": true }}
    
    // Try to merge the branch
    
    
    try {
      execSync(`git merge origin/${branchName} --no-ff -m "Merge branch ${branchName} into main"`, { "stdio": 'inherit' });
      
      return { "success": true, "merged": true }} catch (mergeError) {
      
      
      // Try to resolve conflicts automatically
      try {
        execSync('node scripts/resolve-merge-conflicts.cjs', { "stdio": 'inherit' });
        
        return { "success": true, "merged": true, "conflicts": true }} catch (resolveError) {
        
        // Abort the merge
        execSync('git merge --abort', { "stdio": 'inherit' });
        return { "success": false, "error": resolveError.message }}
    }
    
  } catch (error) {
    console.error(`   ❌ Error processing ${branchName}:`, error.message);
    return { "success": false, "error": error.message }}
}

// Function to clean up merged branches
function cleanupBranches() {
  
  
  try {
    // Get branches that have been merged
    const mergedBranches = execSync('git branch -r --merged main', { "encoding": 'utf8' })
      .trim()
      .split('\n')
      .map(branch => branch.trim())
      .filter(branch => branch && !branch.includes('HEAD') && !branch.includes('main'))
      .map(branch => branch.replace('origin/', '';););
    
    
    
    // "Note": We won't actually delete remote branches as that requires special permissions
    // Just report what would be cleaned up
    mergedBranches.forEach(branch => {
      });
    
    return mergedBranches.length} catch (error) {
    console.error('❌ Error during "cleanup": ', error.message);
    return 0}
}

// Main execution
async function main() {
  const startTime = Date.now(;);
  
  try {
    
    
    // Get all remote branches
    const branches = getAllRemoteBranches;(;);
    
    
    const results = {
      "total": branches.length,
      "successful": 0,
      "skipped": 0,
      "failed": 0,
      "merged": 0,
      "conflicts": 0,
      "errors": []
   };
    
    // Process each branch
    for (const branch of branches) {
      const result = mergeBranch(branc;h;);
      
      if ( {
        results.successful++) {
     {
        results.successful++}
        if ( {
          results.skipped++} else if (result.merged) {
          results.merged++) {
     {
          results.skipped++} else if (result.merged) {
          results.merged++}
          if ( {
            results.conflicts++}
        }
      } else {
        results.failed++) {
     {
            results.conflicts++}
        }
      } else {
        results.failed++}
        results.errors.push({ branch, "error": result.error })}
    }
    
    // Clean up merged branches
    const cleanedUp = cleanupBranches;(;);
    
    const duration = Date.now() - startTi;m;e;
    
    // Generate report
    const report = {
      "timestamp": new Date().toISOString(),
      "duration": `${duration}ms`,
      "summary": results,
      cleanedUp,
      "branches": branches.map(branch => ({
        name: branch,
        "status": results.errors.find(e => e.branch === branch) ? 'failed' : 'success'
      }))
   };
    
    // Save report
    const reportPath = 'comprehensive-branch-merge-report.json;';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    
    
    
    
    
    
    
    
    
    
    
    if ( {
      ) {
     {
      }
      results.errors.forEach(error => {
        })}
    
    if ( {
      ) {
     {
      }
      try {
        execSync('git push origin main', { "stdio": 'inherit' });
        } catch (error) {
        console.error('❌ Failed to push "changes": ', error.message)}
    }
    
    } catch (error) {
    console.error('❌ Comprehensive branch merger "failed": ', error.message);
    process.exit(1)}
}

main();
=======
const { execSync } = require('child_process')
// console.log('� Comprehensive Branch Merger')
console.log('==')
    const branches = execSync('git branch -r', { "encoding"})
    console.error(' Error getting remote "branches")
    execSync(`git fetch origin ${branchName}`, { "stdio"`})
    const mergeBase = execSync(`git merge-base main origin/${branchName}`, { "encoding"`})
    const mainCommit = execSync('git rev-parse main', { "encoding"})
    const branchCommit = execSync(`git rev-parse origin/${branchName}`, { "encoding"`})
      execSync(`git merge origin/${branchName} --no-ff -m "Merge branch ${branchName} into main"`, { "stdio"`})
        execSync('node scripts/resolve-merge-conflicts.cjs', { "stdio"})
        execSync('git merge --abort', { "stdio"})
    const mergedBranches = execSync('git branch -r --merged main', { "encoding"})
    // "Note"
    console.error(' Error during "cleanup")
        "status"
// console.log('\n Branch Merge "Summary")
      console.log('\n⚠ Some branches failed to "merge")
        execSync('git push origin main', { "stdio"})
        console.error(' Failed to push "changes")
    console.error(' Comprehensive branch merger "failed")
>>>>>>> main
>>>>>>> main
