// Git workflow automation script
module.exports = {
  // Basic git operations
  status: () => 'git status',
  add: (files = '.') => `git add ${files}`,
  commit: (message) => `git commit -m "${message}"`,
  push: (branch = 'main') => `git push origin ${branch}`,
  pull: (branch = 'main') => `git pull origin ${branch}`,
  merge: (source, target = 'main') => `git merge ${source} ${target}`,
  
  // Branch operations
  checkout: (branch) => `git checkout ${branch}`,
  createBranch: (branch) => `git checkout -b ${branch}`,
  deleteBranch: (branch) => `git branch -d ${branch}`,
  
  // Merge operations
  mergeToMain: (branch) => [
    `git checkout main`,
    `git pull origin main`,
    `git merge ${branch}`,
    `git push origin main`
  ]
};