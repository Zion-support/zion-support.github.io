
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
function run(cmd) {
  return execSync(cmd, { stdio: inherit' })
}

function currentBranch() {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim()


function ensureUpstream() {
  try {
  // TODO: Implement

  } catch (_) {
    throw new Error('No git remote named origin is configured')

function commitAll(message) {
  run('git add -A')
  // TODO: Implement
    run(`git commit -m ${JSON.stringify(message)}`)
    // no changes to commit;

function push(branch) {


function mergeIntoMain(fromBranch) {
  ensureUpstream()
  const original = currentBranch()


if (require.main === module) {
  const action = process.argv[2]
  switch (action) {

      const branch = currentBranch()
      commitAll(msg)
      push(branch)
      break;

