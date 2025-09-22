#!/usr/bin/env node
/*
 Resolves leftover merge conflict markers repo-wide by favoring the current HEAD side.
 - Scans common source/code/text files.
 - Makes a timestamped backup alongside each modified file: <name>.backup.<epoch>
 - Exits non-zero if any fatal error occurs.
*/
const fs = require('fs');
const path = require('path');

const START = '<<<<<<< ';
const MID = '=======\n';
const END = '>>>>>>> ';

function listFilesRecursively(rootDir) {
  /** @type {string[]} */
  const results = [];
  /** @type {string[]} */
  const stack = [rootDir];
  const ignoreDirs = new Set([
    'node_modules', '.git', '.next', 'dist', 'build', '.cache', 'out', 'artifacts'
  ]);
  const allowedExt = new Set([
    '.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.css', '.scss', '.sass', '.cjs', '.mjs', '.toml'
  ]);

  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (!ignoreDirs.has(entry.name)) stack.push(full);
        continue;
      }
      const ext = path.extname(entry.name);
      if (allowedExt.has(ext)) results.push(full);
    }
  }
  return results;
}

function hasConflictMarkers(content) {
  return content.includes('<<<<<<<') && content.includes('=======') && content.includes('>>>>>>>');
}

function resolveConflictsFavorHead(content) {
  // Parses conflict regions and keeps the section between <<<<<<< HEAD and =======
  // Supports multiple regions per file.
  let output = '';
  let i = 0;
  const len = content.length;
  while (i < len) {
    const startIdx = content.indexOf('<<<<<<<', i);
    if (startIdx === -1) {
      output += content.slice(i);
      break;
    }
    // Copy content before conflict
    output += content.slice(i, startIdx);
    const midIdx = content.indexOf('\n=======\n', startIdx);
    const endIdx = content.indexOf('\n>>>>>>>', midIdx + 1);
    if (midIdx === -1 || endIdx === -1) {
      // Malformed markers; bail out to avoid corrupting file
      return null;
    }
    // Determine HEAD block start
    const headLineEnd = content.indexOf('\n', startIdx);
    const headBlockStart = headLineEnd === -1 ? startIdx : headLineEnd + 1;
    const headBlock = content.slice(headBlockStart, midIdx);
    // Keep HEAD side
    output += headBlock;
    // Continue after end marker line
    const afterEndLine = content.indexOf('\n', endIdx + 1);
    i = afterEndLine === -1 ? len : afterEndLine + 1;
  }
  return output;
}

function main() {
  const repoRoot = process.cwd();
  const files = listFilesRecursively(repoRoot);
  const timestamp = Date.now();
  let changed = 0;
  let encountered = 0;
  let skipped = 0;
  const modified = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    if (!hasConflictMarkers(content)) continue;
    encountered++;
    const resolved = resolveConflictsFavorHead(content);
    if (resolved == null) {
      skipped++;
      continue;
    }
    const backup = `${file}.backup.${timestamp}`;
    fs.writeFileSync(backup, content);
    fs.writeFileSync(file, resolved);
    changed++;
    modified.push(file);
  }

  console.log(`Encountered files with conflicts: ${encountered}`);
  console.log(`Modified files: ${changed}`);
  console.log(`Skipped (malformed markers): ${skipped}`);
  if (modified.length) {
    console.log('Modified list:');
    for (const m of modified) console.log(` - ${m}`);
  }
}

try {
  main();
} catch (err) {
  console.error('repair-conflicts failed:', err && err.message ? err.message : err);
  process.exit(1);
}

