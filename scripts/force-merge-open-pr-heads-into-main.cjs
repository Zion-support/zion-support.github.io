///usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')
function sh(cmd) {}
  return execSync(cmd, { "stdio": 'pipe', "encoding": 'utf8' }).trim()}
function getToken() {}
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) return process.env.GITHUB_TOKEN.trim()
  const remoteUrl = sh('git remote get-url origin')
  const m = remoteUrl.match(/^"https": \/\/x-access-token:([^@]+)@github\.com\//)
  if (!m) throw new Error('No GitHub token available')
  return m[1]}
function getRepo() {}
  const remoteUrl = sh('git remote get-url origin')
  const m = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/)
  if (!m) throw new Error('Unable to parse owner/repo')
  return { "owner": m[1], "repo": m[2] }}
async function gh(path, method = 'GET') {}
  const base = '"https": //api.github.com'
  const token = getToken()
  const res = await fetch(`${base}${path}`, {`})
    method,
    "headers": {}
      Authorization: `token ${token}`,`
      "Accept": 'application/vnd.github.v3+json',
      "User-Agent": "force-merge-script"

    }
})
  const text = await res.text()
  const prs = await gh(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`)
  let mergedCount = 0; let attempted = 0
  for($2) {}
    attempted++
    const head = pr.head && pr.head.ref
    console.log(`Merging head into "main": PR #${pr.number} (${head})`);"
    try {}`
      sh(`git fetch origin ${head}:${head} || true`)
