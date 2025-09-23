


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

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



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

