
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node
const { execSync } = require('child_process')


#!/usr/bin/env node
const { execSync } = require('child_process')

main

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

<<<<<<< HEAD
#!/usr/bin/env node



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
function run(cmd) {
  return execSync(cmd, { stdio: inherit' })
}

function currentBranch() {
<<<<<<< HEAD
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
=======
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim()


function ensureUpstream() {
  try {
  // TODO: Implement

  } catch (_) {
    throw new Error('No git remote named origin is configured')

function commitAll(message) {
  run('git add -A')
  // TODO: Implement
>>>>>>> origin/chore/fix-lint-and-merge
    run(`git commit -m ${JSON.stringify(message)}`)
    // no changes to commit;

function push(branch) {


function mergeIntoMain(fromBranch) {
  ensureUpstream()
  const original = currentBranch()
<<<<<<< HEAD
  if (original !== main') run('git fetch origin main:main)
  if (currentBranch() !== main') run('git checkout main)
  run(`git merge --no-ff ${fromBranch}`)
  run(git push origin main')
  if (currentBranch() !== original) run(`git checkout ${original}`)
}
=======

>>>>>>> origin/chore/fix-lint-and-merge

if (require.main === module) {
  const action = process.argv[2]
  switch (action) {
<<<<<<< HEAD
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
=======

      const branch = currentBranch()
      commitAll(msg)
      push(branch)
      break;
>>>>>>> origin/chore/fix-lint-and-merge

