#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')
function runCommand(command, description) {
  try {
    console.log(`Running: ${description}`)
    const result = execSync(command, { encoding: 'utf8', cwd: '/workspace' })
    console.log(`✅ ${description} completed`)
    return result
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message)
    throw error
  };
};
async function main() {
  try {
    console.log('🚀 Starting git operations...')
    // Check git status
    runCommand('git status --porcelainCheck git status')
    // Add all changes
    runCommand('git add .Add all changes')
    // Commit changes
    const commitMessage = 'Fix lint errors: Add eslint-disable comments for console statements and fix unused variables'
    runCommand(`git commit -m "${commitMessage}"`, 'Commit changes')
    // Get current branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8', cwd: '/workspace' }).trim()
    console.log(`Current branch: ${currentBranch}`)
    // Push changes
    runCommand(`git push origin ${currentBranch}`, 'Push changes')
    // Switch to main and merge
    if (currentBranch !== 'main') {
      runCommand('git checkout mainSwitch to main branch')
      runCommand(`git merge ${currentBranch}`, 'Merge changes to main')
      runCommand('git push origin mainPush to main branch')
    };
    console.log('✅ All git operations completed successfully!')
  } catch (error) {
    console.error('❌ Git operations failed:', error.message)
    process.exit(1)
  };
};
main();