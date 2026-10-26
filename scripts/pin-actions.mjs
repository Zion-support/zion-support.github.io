#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const WORKFLOW_DIR = path.join(ROOT, '.github', 'workflows');
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const api = 'https://api.github.com';

if (!token) {
  console.error('pin-actions: GITHUB_TOKEN (or GH_TOKEN) is required');
  process.exit(1);
}

const files = fs.readdirSync(WORKFLOW_DIR)
  .filter((name) => name.endsWith('.yml') || name.endsWith('.yaml'))
  .sort()
  .map((name) => path.join(WORKFLOW_DIR, name));

const shaRe = /^[0-9a-f]{40}$/i;
const usesRe = /^(\s*uses:\s*)(["']?)([^"'#\s]+)@([^"'#\s]+)\2(\s*(?:#.*)?)$/;
const refs = new Map();
const parsed = new Map();

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const lines = source.split('\n');
  parsed.set(file, { source, lines });

  lines.forEach((line, index) => {
    const match = line.match(usesRe);
    if (!match) return;
    const [, , , actionPath, ref] = match;
    if (actionPath.startsWith('./') || actionPath.startsWith('docker://')) return;
    if (shaRe.test(ref) || ref.includes('${{')) return;

    const parts = actionPath.split('/');
    if (parts.length < 2) return;
    const owner = parts[0];
    const repo = parts[1];
    const key = `${owner}/${repo}@${ref}`;
    if (!refs.has(key)) refs.set(key, { owner, repo, ref, occurrences: [] });
    refs.get(key).occurrences.push({ file, index, actionPath });
  });
}

if (refs.size === 0) {
  console.log('pin-actions: all external GitHub Actions are already SHA-pinned');
  process.exit(0);
}

const resolved = new Map();
const failures = [];

for (const [key, item] of refs) {
  const url = `${api}/repos/${encodeURIComponent(item.owner)}/${encodeURIComponent(item.repo)}/commits/${encodeURIComponent(item.ref)}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'zion-pin-actions'
    }
  });

  if (!response.ok) {
    const detail = await response.text();
    failures.push(`${key}: HTTP ${response.status} ${detail.slice(0, 300)}`);
    continue;
  }

  const data = await response.json();
  if (!data?.sha || !shaRe.test(data.sha)) {
    failures.push(`${key}: response did not contain a 40-character commit SHA`);
    continue;
  }
  resolved.set(key, data.sha.toLowerCase());
  console.log(`resolved ${key} -> ${data.sha}`);
}

if (failures.length) {
  console.error('pin-actions: refusing to write because one or more refs could not be resolved:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

let changedFiles = 0;
let changedRefs = 0;

for (const [file, entry] of parsed) {
  let changed = false;
  const nextLines = entry.lines.map((line) => {
    const match = line.match(usesRe);
    if (!match) return line;
    const [full, prefix, quote, actionPath, ref, suffix] = match;
    if (actionPath.startsWith('./') || actionPath.startsWith('docker://')) return line;
    if (shaRe.test(ref) || ref.includes('${{')) return line;

    const parts = actionPath.split('/');
    if (parts.length < 2) return line;
    const key = `${parts[0]}/${parts[1]}@${ref}`;
    const sha = resolved.get(key);
    if (!sha) return line;

    const comment = suffix && suffix.trim().length ? suffix : ` # ref: ${ref}`;
    const replacement = `${prefix}${quote}${actionPath}@${sha}${quote}${comment}`;
    if (replacement !== full) {
      changed = true;
      changedRefs += 1;
    }
    return replacement;
  });

  if (changed) {
    fs.writeFileSync(file, nextLines.join('\n'), 'utf8');
    changedFiles += 1;
  }
}

console.log(`pin-actions: pinned ${changedRefs} reference(s) across ${changedFiles} workflow file(s)`);
