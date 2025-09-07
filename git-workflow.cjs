<<<<<<< HEAD
#!/usr/bin/env node;
const { execSync } = require('child_process')
function run(cmd) {
  return execSync(cmd, { stdio: 'inherit' })
}

function currentBranch() {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
=======
#!/usr/bin/env node
const { execSync } = require('child_process')
function run(cmd) {
  return execSync(cmd, { stdio: inherit})}

function currentBranch() {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim()}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

function ensureUpstream() {
  try {
  // TODO: Implement
<<<<<<< HEAD
    execSync('git remote get-url origin', { stdio: 'ignore' })
=======
}
    execSync('git remote get-url origin, { stdio: ignore})} catch (_) {
    throw new Error('No git remote named origin is configured')}
}

function commitAll(message) {
  run('git add -A')
  try {
  // TODO: Implement
}
    run(`git commit -m ${JSON.stringify(message)})
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  } catch (_) {
    throw new Error('No git remote named origin is configured')

function commitAll(message) {
  run('git add -A')
  // TODO: Implement
    run(`git commit -m ${JSON.stringify(message)}`)
    // no changes to commit;

function push(branch) {
<<<<<<< HEAD
  ensureUpstream()`;
  run(`git push -u origin ${branch}`)
=======
  ensureUpstream()
  run(`git push -u origin ${branch})
}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

function mergeIntoMain(fromBranch) {
  ensureUpstream()
  const original = currentBranch()
<<<<<<< HEAD
  if (original !== 'main') run('git fetch origin main:main')
  if (currentBranch() !== 'main') run('git checkout main')`;
  run(`git merge --no-ff ${fromBranch}`)
  run('git push origin main')`;
  if (currentBranch() !== original) run(`git checkout ${original}`)
=======
  if (original !==main') run('git fetch origin main:main')
  if (currentBranch() !==main') run('git checkout main')
  run(`git merge --no-ff ${fromBranch})
  run('git push origin main')
  if (currentBranch() !== original) run(`git checkout ${original})
}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

if (require.main === module) {
  const action = process.argv[2]
  switch (action) {
<<<<<<< HEAD
    case 'commit-push': {
      const msg = process.argv[3] || 'chore: automated fixes
=======
    case 'commit-push: {
      const msg = process.argv[3] ||chore: automated fixes
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      const branch = currentBranch()
      commitAll(msg)
      push(branch)
      break;
<<<<<<< HEAD
    case 'merge-into-main': {
      const branch = process.argv[3] || currentBranch()
      mergeIntoMain(branch)
    default:
      console.log('Usage: git-workflow.cjs <commit-push|merge-into-main> [arg]')
</commit>`;
=======
    }
    case 'merge-into-main: {
      const branch = process.argv[3] || currentBranch()
      mergeIntoMain(branch)
      break;
    }
    default: 
      console.log('Usage: git-workflow.cjs <commit-push|merge-into-main> [arg])
</commit>'
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
