<<<<<<< HEAD


<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
#!/usr/bin/env node;
=======






>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======


#!/usr/bin/env node;
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
#!/usr/bin/env node;
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
///usr/bin/env node
///usr/bin/env node
>>>>>>> ff8ab052546903d473828d12895ca8f8ebc39a58
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log('� Comprehensive PR Merger & Conflict Resolver')

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN ||
  throw new Error('GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.
const REPO_OWNER = 'Zion-Holding;s
const REPO_NAME = 'zion.app
async function githubApiCall(endpoint, method = 'GET')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    console.error(' Comprehensive PR merger "failed")"
cursor/fix-lint-push-and-merge-to-main-f3c1;
"`;
=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
      'Authorization'
      'Accept': 'application/vnd.github.v3+json'
      'Content-Type': 'application/json'
  console.log('� Fetching open PRs...')
  const prs = await githubApiCall('/pulls?state=open;')
    execSync('git fetch origin', { "stdio"})
    execSync(`git checkout ${headBranch}`, { "stdio"`})
      execSync(`git merge origin/${baseBranch}`, { "stdio"`})
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { "encoding"})
      console.log(`   Conflicted "files"`)
          execSync(`git add "${file}"`, { "stdio"`})
        execSync('git commit -m "Resolve merge conflicts automatically"', { "stdio"})
    execSync(`git push origin ${headBranch}`, { "stdio"`})
      "merge_method"
      "state"
    console.log('\n Final "Report")
    console.error(' Comprehensive PR merger "failed")
cursor/fix-lint-push-and-merge-to-main-f3c1;
<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
console.error(' Comprehensive PR merger "failed")"
cursor/fix-lint-push-and-merge-to-main-f3c1
"`
>>>>>>> ff8ab052546903d473828d12895ca8f8ebc39a58
