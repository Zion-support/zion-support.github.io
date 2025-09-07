const { execSync } = require('child_process')
console.log('🔄 Merging current branch into main...')
// Function to run git commands safely
function runGitCommand(command, description) {
  try {
    console.log(`📋 ${description}...`)
    const result = execSync(command, { encoding: 'utf8', cwd: '/workspace' })
    console.log(`✅ ${description} completed`)
    return result
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`)
    return null
async function main() {
  console.log('🚀 Starting merge to main process...')
  // Step 1: Switch to main branch
  console.log('\n📋 Step 1: Switching to main branch...')
  runGitCommand('git checkout main', 'Switching to main branch')
  // Step 2: Pull latest main
  console.log('\n📋 Step 2: Pulling latest main...')
  runGitCommand('git pull origin main', 'Pulling latest main')
  // Step 3: Merge our feature branch
  console.log('\n📋 Step 3: Merging feature branch...')
  const mergeResult = runGitCommand('git merge cursor/automate-test-improve-and-merge-code-d882 --no-ff -m "Merge comprehensive automation and improvements"', 'Merging feature branch')
  if($2) {
    console.log('✅ Successfully merged feature branch into main')
    // Step 4: Push to main
    console.log('\n📋 Step 4: Pushing to main...')
    const pushResult = runGitCommand('git push origin main', 'Pushing to main')
  if($2) {
      console.log('✅ Successfully pushed to main')
      // Step 5: Clean up feature branch
      console.log('\n📋 Step 5: Cleaning up feature branch...')
      runGitCommand('git branch -d cursor/automate-test-improve-and-merge-code-d882', 'Deleting local feature branch')
      runGitCommand('git push origin --delete cursor/automate-test-improve-and-merge-code-d882', 'Deleting remote feature branch')
      console.log('\n🎉 Successfully merged and cleaned up!')
    } else {
      console.log('❌ Failed to push to main')
  } else {
    console.log('❌ Failed to merge feature branch')
  // Final status
  console.log('\n📋 Final status:')
  runGitCommand('git status', 'Final git status')
  runGitCommand('git log --oneline -5', 'Recent commits')
main().catch(console.error)
