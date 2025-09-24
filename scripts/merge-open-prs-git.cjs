#!/usr/bin/env node

const { execSync, spawnSync } = require('child_process');

function run(cmd, opts = {}) {
  try {
    return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts }).trim();
  } catch (err) {
    return { error: err };
  }
}

function log(msg) {
  const ts = new Date().toISOString();
  process.stdout.write(`[${ts}] ${msg}\n`);
}

function ensureGitRepo() {
  const res = run('git rev-parse --git-dir');
  if (res && res.error) {
    throw new Error('Not in a git repository');
  }
}

function getRecentPrNumbers(limit = 30) {
  // List remote PR heads and extract PR numbers
  const out = run("git ls-remote origin 'refs/pull/*/head'");
  if (!out || out.error) return [];
  const lines = out.split('\n').filter(Boolean);
  const nums = lines
    .map((line) => line.split('\t')[1] || line.split(/\s+/)[1])
    .filter(Boolean)
    .map((ref) => {
      const m = ref.match(/refs\/pull\/(\d+)\/head/);
      return m ? Number(m[1]) : null;
    })
    .filter((n) => Number.isFinite(n))
    .sort((a, b) => a - b);
  // de-duplicate and take last N (most recent by number)
  const unique = Array.from(new Set(nums));
  return unique.slice(Math.max(0, unique.length - limit));
}

function stashIfDirty() {
  const status = run('git status --porcelain');
  if (status && typeof status === 'string' && status.trim().length > 0) {
    log('Working directory dirty. Stashing changes...');
    run('git stash push -m "auto-stash-before-pr-merge"');
  }
}

function checkoutMain() {
  run('git checkout main');
  run('git fetch origin main');
  run('git pull origin main');
}

function mergePr(prNumber) {
  log(`Merging PR #${prNumber}`);
  // Fetch PR head into local branch pr-<number>
  run(`git fetch origin pull/${prNumber}/head:pr-${prNumber}`);

  // Attempt merge
  const mergeRes = run(`git merge --no-ff --no-edit pr-${prNumber}`);
  if (mergeRes && !mergeRes.error) {
    log(`Merged PR #${prNumber} cleanly`);
    return true;
  }

  // Handle conflicts: prefer PR changes (theirs) on conflict files
  log(`Conflicts detected for PR #${prNumber}. Attempting auto-resolution...`);
  // List conflicted files
  const conflictList = run('git diff --name-only --diff-filter=U');
  if (conflictList && typeof conflictList === 'string') {
    const files = conflictList.split('\n').map((s) => s.trim()).filter(Boolean);
    for (const f of files) {
      // Prefer PR side which is "--theirs" when merging into main
      run(`git checkout --theirs -- "${f}"`);
      run(`git add -- "${f}"`);
    }
    const commitRes = run(`git commit -m "chore: auto-resolve conflicts while merging PR #${prNumber}"`);
    if (commitRes && !commitRes.error) {
      log(`Auto-resolved and committed conflicts for PR #${prNumber}`);
      return true;
    }
  }

  // If still failing, abort merge to keep repo clean
  log(`Auto-resolution failed for PR #${prNumber}. Aborting merge.`);
  run('git merge --abort');
  return false;
}

function pushMain() {
  const res = run('git push origin main');
  if (res && res.error) {
    throw new Error('Failed to push main');
  }
}

function main() {
  ensureGitRepo();
  stashIfDirty();
  checkoutMain();
  const prNumbers = getRecentPrNumbers(30);
  if (prNumbers.length === 0) {
    log('No PR refs found on origin. Nothing to merge.');
    return;
  }
  log(`Found ${prNumbers.length} PR refs to consider: ${prNumbers.join(', ')}`);

  let mergedCount = 0;
  for (const n of prNumbers) {
    checkoutMain();
    const ok = mergePr(n);
    if (ok) mergedCount++;
  }

  pushMain();
  log(`Done. Successfully merged ${mergedCount}/${prNumbers.length} PRs (where possible).`);
}

try {
  main();
} catch (e) {
  console.error(e.message || e);
  process.exit(1);
}

