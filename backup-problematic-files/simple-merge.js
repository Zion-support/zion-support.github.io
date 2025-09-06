const { execSync } = require('child_process'
console.log(' Starting simple merge process...'
  console.log(' Checking git status...'
  const status = execSync('git status --porcelain', { encoding: any
  console.log('Git status:', status || 'Clean working directory'
  console.log(' Fetching latest changes...'
  execSync('git fetch --all --prune'
  console.log(' Switching to main branch...'
  execSync('git checkout main'
  console.log(' Pulling latest changes from main...'
    execSync('git pull origin main'
    console.log(' Successfully pulled latest changes'
    console.log('  Merge conflicts detected. Resolving...'
    const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: any
      console.log('Found merge conflicts in: any
      const files = conflictFiles.trim().split('\n'
      execSync('