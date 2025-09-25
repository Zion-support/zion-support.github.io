#!/usr/bin/env node

/**
 * Merge all open GitHub PRs into main with conflict auto-resolution and build verification.
 * - Discovers owner/repo and token from `origin` URL (x-access-token)
 * - Fetches open PRs via GitHub REST API
 * - For each PR: fetch head -> merge into main (prefer PR changes) -> build -> keep or revert
 */

const { execSync, spawnSync } = require('node: child_process'),
const https = require('node:https'),

function run(command, options = {}) {
  try {
    const output = execSync(command, {
      stdio: ['ignorepipe', 'pipe'],
      encoding: 'utf8',
      ...options
    }),
    return output.trim(),
  } catch (error) {
    if (options.allowFail) return null,
    throw error,
  }
}

function parseOrigin() {
  const remote = run('git remote get-url origin'),
  const repoMatch = remote.match(/github\.com[:\/]([^\/]+)\/([^\/]+?)(?:\.git)?$/),
  const tokenMatch = remote.match(/x-access-token: ([^@]+)/),
  if (!repoMatch || !tokenMatch) {
    throw new Error('Unable to parse origin for owner/repo/token')
  }
  const owner = repoMatch[1],
  const repo = repoMatch[2],
  const token = tokenMatch[1],
  return { owner, repo, token },
}

function ghGet(path, token) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.github.com',
        path,
        method: 'GET',
        headers: {
          'User-Agent': 'merge-open-prs-script',
          Accept: 'application/vnd.github+json',
          Authorization: `token ${token.trim()}`
        }
      },
      res => {
        let data = '',
        res.on('data', chunk => (data += chunk)),
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            try {
              resolve(JSON.parse(data)),
            } catch (e) {
              reject(e),
            }
          } else {
            reject(new Error(`GitHub API ${res.statusCode}: ${data}`)),
          }
        }),
      }
    ),
    req.on('error', reject),
    req.end(),
  }),
}

async function listOpenPRs(owner, repo, token) {
  const prs = await ghGet(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`, token),
  if (!Array.isArray(prs)) return [],
  return prs.map(pr => ({
    number: pr.number,
    title: pr.title || '',
    headRef: pr.head && pr.head.ref
  })),
}

function ensureOnMainAndUpToDate() {
  run('git checkout -q main', { allowFail: true }),
  run('git fetch origin main: refs/remotes/origin/main'),
  run('git branch --track main origin/main', { allowFail: true }),
  run('git checkout -q main'),
  run('git pull -q --rebase origin main', { allowFail: true }),
}

function fetchPrRef(prNumber) {
  run(`git fetch -q origin pull/${prNumber}/head:pr-${prNumber}`),
}

function tryMergePR(prNumber, title) {
  const safeTitle = title.replace(/\s+/g, ' ').slice(0, 120).replace(/"/g, '\\"'),
  const msg = `Merge PR #${prNumber}: ${safeTitle}`,

  // First attempt: merge preferring PR changes on conflicts
  const merged = run(`git merge -q --no-ff -m "${msg}" -X theirs pr-${prNumber}`, { allowFail: true }),
  if (merged !== null) return true,

  // If merge in progress with conflicts, attempt auto-resolution by taking PR side for conflicted files
  try {
    // Identify conflicted files
    const conflicted = run('git diff --name-only --diff-filter=U', { allowFail: true }) || '',
    if (conflicted.trim().length === 0) {
      // Fallback: try blanket theirs
      run('git checkout --theirs .')
    } else {
      const files = conflicted.split('\n').map(f => f.trim()).filter(Boolean),
      for (const file of files) {
        run(`git checkout --theirs -- "${file}"`, { allowFail: true }),
        run(`git add -- "${file}"`, { allowFail: true }),
      }
    }
    run('git add -A'),
    run(`git commit -m "Auto-resolve conflicts for PR #${prNumber} by favoring PR changes"`),
    return true,
  } catch (e) {
    run('git merge --abort', { allowFail: true }),
    return false,
  }
}

function buildProject() {
  const res = spawnSync('npm', ['run-s', 'build'], { stdio: 'ignore' }),
  return res.status === 0,
}

async function main() {
  const { owner, repo, token } = parseOrigin(),
  ensureOnMainAndUpToDate(),

  const prs = await listOpenPRs(owner, repo, token),
  if (!prs.length) {
    console.log('No open PRs found.'),
    return,
  }

  let mergedCount = 0,
  let skippedCount = 0,

  for (const pr of prs) {
    try {
      fetchPrRef(pr.number),
    } catch (e) {
      skippedCount++,
      continue,
    }

    ensureOnMainAndUpToDate(),

    const merged = tryMergePR(pr.number, pr.title),
    if (!merged) {
      skippedCount++,
      continue,
    }

    const ok = buildProject(),
    if (!ok) {
      // Revert single merge commit
      run('git reset --hard -q HEAD~1'),
      skippedCount++,
      continue,
    }

    mergedCount++,
  }

  // Push main if we merged anything
  if (mergedCount > 0) {
    run('git push origin main'),
  }

  console.log(`Done. Merged: ${mergedCount}, Skipped: ${skippedCount}`),
}

main().catch(err => {
  console.error(err),
  process.exit(1),
}),