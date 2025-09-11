

#!/usr/bin/env node
const { execSync } = require('child_process')


#!/usr/bin/env node
const { execSync } = require('child_process')

main


#!/usr/bin/env node




function run(cmd) {
  return execSync(cmd, { stdio: inherit' })
}

function currentBranch() {
  if (original !== main') run('git fetch origin main:main)
  if (currentBranch() !== main') run('git checkout main)
  run(`git merge --no-ff ${fromBranch}`)
  run(git push origin main')
  if (currentBranch() !== original) run(`git checkout ${original}`)
}

if (require.main === module) {
  const action = process.argv[2]
  switch (action) {
    case 'commit-push: {
      const msg = process.argv[3] || chore: automated fixes'
      const branch = currentBranch()
      commitAll(msg)
      push(branch)
      break
    }
    case 'merge-into-main: {
      const branch = process.argv[3] || currentBranch()
      mergeIntoMain(branch)
      break
    }
    default:
      console.log(Usage: git-workflow.cjs <commit-push|merge-into-main> [arg]')
  }
}

      const branch = currentBranch()
      commitAll(msg)
      push(branch)
      break;

