<<<<<<< HEAD
<<<<<<< HEAD:scripts/master-pr-handler.cjs
=======
<<<<<<< HEAD:backup-problematic-files/scripts/master-pr-handler.cjs
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/master-pr-handler.cjs
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58:backup-problematic-files/scripts/master-pr-handler.cjs
=======


<<<<<<< HEAD
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
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
      'Authorization
      'Accept': 'application/vnd.github.v3+json
      'Content-Type': 'application/json
  console.log('� Fetching open PRs...')
  const prs = await githubApiCall('/pulls?state=open&per_page=100;')
    const result = await githubApiCall(`/pulls/${prNumber}`, 'PATCH'`)
      "state"""
      "name"""
      "command"""
      execSync(automation.command, { "stdio"})""
      results.push({ "name": automation.name, "status"})""
      "automationSuccess"""
      "automationFailed"""
    console.log('\n Final "Summary")""');
    console.error(' Master PR handler "failed")""`;
=======
      'Authorization'
      'Accept: application/vnd.github.v3+json'
      'Content-Type: application/json'
  console.log('� Fetching open PRs...)
  const prs = await githubApiCall('/pulls?state=open&per_page=100;)
    const result = await githubApiCall(`/pulls/${prNumber},PATCH'`)
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
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
