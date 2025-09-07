

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
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log(' Master PR Handler & Automation System')
console.log()
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || 
  throw new Error('GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.
const REPO_OWNER = 'Zion-Holding;s;
const REPO_NAME = 'zion.app;
async function githubApiCall(endpoint, method = 'GET')
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
      'Authorization'
      'Accept': 'application/vnd.github.v3+json'
      'Content-Type': 'application/json'
  console.log('� Fetching open PRs...')
  const prs = await githubApiCall('/pulls?state=open&per_page=100;')
    const result = await githubApiCall(`/pulls/${prNumber}`, 'PATCH'`)
      "state"
      "name"
      "command"
      "name"
      "command"
      "name"
      "command"
      "name"
      "command"
      "name"
      "command"
      execSync(automation.command, { "stdio"})
      results.push({ "name": automation.name, "status"})
      results.push({ "name": automation.name, "status"})
      "automationSuccess"
      "automationFailed"
    console.log('\n Final "Summary")
    console.error(' Master PR handler "failed")
<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
