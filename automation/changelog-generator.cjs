#!/usr/bin/env node
/**
 * Autonomous Changelog Generator
 *
 * Aggregates conventional commit messages since last release and updates CHANGELOG.md.
 * Groups by version/date and categorizes by type (feat, fix, docs, chore, etc.).
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'changelog');
const CHANGELOG_PATH = path.join(process.cwd(), 'CHANGELOG.md');

const CONVENTIONAL_TYPES = ['feat', 'fix', 'docs', 'chore', 'refactor', 'perf', 'test', 'style', 'ci', 'build', 'revert'];
const BREAKING_INDICATOR = 'BREAKING CHANGE';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }
function formatDate(d) { return d.toISOString().split('T')[0]; }

// Get latest tag or fallback to initial version
function getLatestTag() {
  try {
    const tags = execSync('git tag --sort=-creatordate', { encoding: 'utf8' }).trim().split('\n');
    return tags[0] || 'v0.1.0';
  } catch {
    return 'v0.1.0';
  }
}

// Get commits since last tag
function getCommitsSince(lastTag) {
  try {
    const range = lastTag ? `${lastTag}..HEAD` : 'HEAD';
    const log = execSync(`git log ${range} --format=%H||%s||%b||%an||%ai --reverse`, { encoding: 'utf8' });
    const lines = log.trim().split('\n').filter(Boolean);
    const commits = [];
    for (const line of lines) {
      const [hash, subject, body, author, date] = line.split('||');
      commits.push({ hash, subject, body, author, date });
    }
    return commits;
  } catch (e) {
    console.error('❌ Failed to get git log:', e.message);
    return [];
  }
}

// Parse conventional commit: type(scope?): subject
function parseCommit(commit) {
  const match = commit.subject.match(/^(\w+)(?:\(([^)]+)\))?:\s*(.*)/);
  if (!match) return null;

  const [, type, scope, subject] = match;
  const breaking = commit.body.includes(BREAKING_INDICATOR) || subject.includes('!');

  return {
    hash: commit.hash.slice(0, 7),
    type,
    scope,
    subject,
    breaking,
    author: commit.author,
    date: commit.date.split(' ')[0]
  };
}

// Categorize and group
function groupCommits(commits) {
  const groups = {};
  for (const raw of commits) {
    const parsed = parseCommit(raw);
    if (!parsed) continue;

    const type = parsed.type;
    if (!groups[type]) groups[type] = [];
    groups[type].push(parsed);
  }
  return groups;
}

// Human-readable type labels
function typeLabel(type) {
  const labels = {
    feat: 'Features',
    fix: 'Bug Fixes',
    docs: 'Documentation',
    chore: 'Chores',
    refactor: 'Refactoring',
    perf: 'Performance',
    test: 'Tests',
    style: 'Styling',
    ci: 'CI/CD',
    build: 'Build',
    revert: 'Reverts'
  };
  return labels[type] || type.charAt(0).toUpperCase() + type.slice(1);
}

// Generate markdown for a version section
function generateVersionSection(version, date, groups) {
  const lines = [];
  lines.push(`## ${version} (${date})\n`);

  for (const type of CONVENTIONAL_TYPES) {
    const items = groups[type];
    if (!items || items.length === 0) continue;

    lines.push(`### ${typeLabel(type)}\n`);
    for (const item of items) {
      const breaking = item.breaking ? ' ⚠️ BREAKING' : '';
      const scope = item.scope ? `(${item.scope})` : '';
      lines.push(`- ${item.subject}${breaking} ([${item.hash}](https://github.com/Zion-support/zion.app/commit/${item.hash}))`);
    }
    lines.push('');
  }

  // Any uncategorized
  const uncategorized = Object.keys(groups).filter(t => !CONVENTIONAL_TYPES.includes(t));
  if (uncategorized.length > 0) {
    lines.push('### Other\n');
    for (const type of uncategorized) {
      for (const item of groups[type]) {
        lines.push(`- ${item.subject} ([${item.hash}](https://github.com/Zion-support/zion.app/commit/${item.hash}))`);
      }
    }
    lines.push('');
  }

  return lines.join('\n');
}

// Read existing CHANGELOG
function readExistingChangelog() {
  if (!fs.existsSync(CHANGELOG_PATH)) return '';
  return fs.readFileSync(CHANGELOG_PATH, 'utf8');
}

// Insert new version section after title
function insertSection(existing, newSection) {
  const title = '# Changelog\n\n';
  if (!existing.startsWith(title)) {
    // Prepend title if missing
    return title + newSection + '\n' + existing;
  }
  const rest = existing.slice(title.length);
  return title + newSection + '\n' + rest;
}

function main() {
  console.log('📝 Autonomous Changelog Generator — starting\n');
  ensureDir(STATE_DIR);

  const latestTag = getLatestTag();
  console.log(`🏷️  Latest tag: ${latestTag}`);

  const commits = getCommitsSince(latestTag);
  console.log(`📦 Commits since last release: ${commits.length}`);

  if (commits.length === 0) {
    console.log('✅ No new commits — changelog up to date.\n');
    process.exit(0);
  }

  const groups = groupCommits(commits);
  const version = 'v' + new Date().toISOString().slice(0, 10); // e.g., v2026-05-12
  const date = formatDate(new Date());

  const newSection = generateVersionSection(version, date, groups);
  console.log(`📄 Generated changelog section for ${version}`);

  const existing = readExistingChangelog();
  const updated = insertSection(existing, newSection);

  // Write
  fs.writeFileSync(CHANGELOG_PATH, updated, 'utf8');
  console.log(`✅ CHANGELOG.md updated`);

  // Save history
  const historyFile = path.join(STATE_DIR, 'history.json');
  const history = {
    timestamp: nowISO(),
    version,
    commitsCount: commits.length,
    types: Object.keys(groups)
  };
  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));

  console.log('\n✅ Changelog generation complete.\n');
  process.exit(0);
}

main();
