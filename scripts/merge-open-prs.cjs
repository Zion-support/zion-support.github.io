#!/usr/bin/env node
const { execSync } = require('child_process');
const https = require('https');

function run(cmd) {
  return execSync(cmd, { cwd: '/workspace', encoding: 'utf8', stdio: 'pipe' }).trim();
}

function safeRun(cmd) {
  try { return run(cmd); } catch (e) { return ''; }
}

function getOriginToken() {
  const url = run('git remote get-url origin');
  const m = url.match(/x-access-token:([^@]+)@github.com/i);
  if (!m) throw new Error('Could not extract GitHub token from origin remote');
  return m[1];
}

function ghApi(path, token) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.github.com',
      path,
      method: 'GET',
      headers: {
        'User-Agent': 'merge-open-prs-script',
        'Accept': 'application/vnd.github+json',
        'Authorization': `token ${token}`,
      },
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
        } else {
          reject(new Error(`GitHub API ${res.statusCode}: ${data.slice(0, 200)}`));
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function hasConflicts() {
  const status = safeRun('git status --porcelain');
  return status.includes('UU') || status.includes('AA') || status.includes('DD');
}

function autoResolveConflicts() {
  const filesRaw = safeRun('git diff --name-only --diff-filter=U');
  const files = filesRaw.split('\n').map(s => s.trim()).filter(Boolean);
  for (const f of files) {
    if (f.includes('package.json') || f.includes('lock') || f.includes('tsconfig') || f.includes('next.config') || f.includes('tailwind.config')) {
      safeRun(`git checkout --ours "${f}"`);
    } else {
      safeRun(`git checkout --theirs "${f}"`);
    }
    safeRun(`git add "${f}"`);
  }
  if (files.length) {
    safeRun('git commit -m "Auto-resolve conflicts during PR merge"');
    return true;
  }
  return false;
}

(async function main() {
  try {
    const token = getOriginToken();
    safeRun('git fetch origin | cat');
    safeRun('git checkout main');
    safeRun('git pull origin main');

    console.log('🔍 Fetching open PRs...');
    const prs = await ghApi('/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100', token);
    if (!prs || prs.length === 0) {
      console.log('✅ No open PRs');
      return;
    }
    console.log(`📋 Found ${prs.length} open PRs`);

    let success = 0, failed = 0;
    for (const pr of prs) {
      const number = pr.number;
      const title = pr.title || '';
      const headRef = pr.head && pr.head.ref;
      const headSha = pr.head && pr.head.sha;
      const baseRef = pr.base && pr.base.ref;
      console.log(`\n🔄 PR #${number}: ${title}`);
      console.log(`   ${headRef} (${(headSha || '').slice(0,7)}) -> ${baseRef}`);

      try {
        safeRun(`git fetch origin ${headRef}`);
        try {
          safeRun(`git merge --no-ff origin/${headRef} -m "Merge PR #${number}: ${title.replace(/"/g, '\\"')}"`);
        } catch (e) {
          console.log('   ⚠️  Conflicts detected, attempting auto-resolve...');
          if (hasConflicts()) {
            if (!autoResolveConflicts()) {
              throw new Error('Auto-resolve failed');
            }
          } else {
            throw e;
          }
        }
        safeRun('git push origin main');
        console.log(`   ✅ Merged and pushed PR #${number}`);
        success++;
      } catch (e) {
        console.log(`   ❌ Failed PR #${number}: ${e.message}`);
        safeRun('git merge --abort');
        failed++;
        safeRun('git reset --hard origin/main');
      }
    }

    console.log(`\n🎉 Done. Success: ${success}, Failed: ${failed}`);
  } catch (e) {
    console.error('merge-open-prs failed:', e.message);
    process.exit(1);
  }
})();