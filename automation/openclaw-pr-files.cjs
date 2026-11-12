'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

// Keep filenames out of shell/CSV/environment values. NUL also preserves
// commas, newlines and non-UTF8 Git path bytes without lossy decoding.
function collectPrFiles({ cwd = process.cwd(), event, output }) {
  const base = event?.pull_request?.base?.sha;
  const head = event?.pull_request?.head?.sha;
  if (![base, head].every(sha => typeof sha === 'string' && /^[a-f0-9]{40}$/.test(sha))) {
    throw new Error('Expected immutable base/head commit SHAs from a pull_request event');
  }
  if (!output || !path.isAbsolute(output)) throw new Error('An absolute NUL-list output path is required');
  if (fs.existsSync(output)) throw new Error('Refusing to reuse an existing PR file list');

  function git(args, allowed = [0]) {
    const result = spawnSync('git', args, {
      cwd, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024,
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0' },
    });
    if (result.error || !allowed.includes(result.status)) {
      throw new Error(`git ${args[0]} failed (${result.error?.code || result.status}): ${(result.stderr || '').trim().slice(0, 2000)}`);
    }
    return result;
  }

  const shallow = git(['rev-parse', '--is-shallow-repository']).stdout.trim() === 'true';
  // No checkout, submodules, branch names, external diff or textconv execution.
  // Exact event SHAs avoid races with a force-pushed head or an advancing base.
  git(['fetch', '--quiet', '--no-tags', '--no-recurse-submodules', '--filter=blob:none',
    ...(shallow ? ['--unshallow'] : []), 'origin', base, head]);

  // A shallow checkout of GitHub's synthetic merge commit may remain shallow
  // even after both PR endpoints are complete. Reject any boundary reachable
  // from either endpoint, rather than accepting a possibly false merge-base.
  const shallowFile = path.resolve(cwd, git(['rev-parse', '--git-path', 'shallow']).stdout.trim());
  if (fs.existsSync(shallowFile)) {
    for (const boundary of fs.readFileSync(shallowFile, 'utf8').trim().split('\n').filter(Boolean)) {
      if ([base, head].some(tip => git(['merge-base', '--is-ancestor', boundary, tip], [0, 1]).status === 0)) {
        throw new Error('PR endpoint history is still shallow; refusing an incomplete file list');
      }
    }
  }
  const bases = git(['merge-base', '--all', base, head]).stdout.trim().split('\n').filter(Boolean);
  if (bases.length !== 1) throw new Error('Expected one unambiguous PR merge-base');
  const mergeBase = bases[0];
  const temporary = fs.mkdtempSync(path.join(path.dirname(output), '.openclaw-pr-files-'));
  try {
    const list = path.join(temporary, 'files.z');
    // Treat a rename as a deletion plus addition so the advisory sees both
    // affected paths, including a hot file renamed to a non-hot filename.
    git(['diff', '--no-ext-diff', '--no-textconv', '--no-renames', '--name-only', '-z',
      `--output=${list}`, mergeBase, head, '--']);
    const bytes = fs.readFileSync(list);
    if (bytes.length && bytes[bytes.length - 1] !== 0) throw new Error('Incomplete NUL-delimited Git output');
    const count = bytes.reduce((total, byte) => total + (byte === 0 ? 1 : 0), 0);
    fs.renameSync(list, output);
    return { base, head, mergeBase, count, format: 'git-path-bytes-nul', output };
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
}

if (require.main === module) {
  try {
    const event = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
    console.log(JSON.stringify(collectPrFiles({ event, output: process.argv[2] })));
  } catch (error) {
    console.error(`PR file collection failed: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = { collectPrFiles };
