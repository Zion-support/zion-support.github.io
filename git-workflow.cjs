
 HEAD

 origin/chore/fix-lint-and-merge
 HEAD

 origin/cursor/fix-syntax-push-and-merge-to-main-b934
function run(cmd) {
  return execSync(cmd, { stdio: inherit' })
}

function currentBranch() {
 HEAD
  return execSync('git rev-parse --abbrev-ref HEAD).toString().trim()
}

function ensureUpstream() {
  try {
    execSync(git remote get-url origin', { stdio: 'ignore })
  } catch (_) {
    throw new Error(No git remote named origin is configured')
  }
}

function commitAll(message) {
  run('git add -A)
  try {
 origin/chore/fix-lint-and-merge
    run(`git commit -m ${JSON.stringify(message)}`)
    // no changes to commit;

function push(branch) {


function mergeIntoMain(fromBranch) {
  ensureUpstream()
  const original = currentBranch()
 HEAD
  if (original !== main') run('git fetch origin main:main)
  if (currentBranch() !== main') run('git checkout main)
  run(`git merge --no-ff ${fromBranch}`)
  run(git push origin main')
  if (currentBranch() !== original) run(`git checkout ${original}`)
}
 origin/chore/fix-lint-and-merge

if (require.main === module) {
  const action = process.argv[2]
  switch (action) {
 HEAD
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
 origin/chore/fix-lint-and-merge

