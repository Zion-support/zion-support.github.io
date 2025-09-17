#!/usr/bin/env node
/*
  Resolve Git merge conflict markers in source files by keeping the incoming section
  (the part after ======= and before >>>>>>>). Applies to specified directories.
*/

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_DIRS = [
  'zion-os/src',
  'zion-website/src',
  'utils',
  'public',
  'src',
];
const EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.css', '.html']);

function listFiles(dir) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return [];
  /** @type {string[]} */
  const results = [];
  /** @param {string} d */
  function walk(d) {
    let entries;
    try { entries = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const ent of entries) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) {
        // skip heavy dirs
        if (ent.name === 'node_modules' || ent.name === '.git' || ent.name === 'dist') continue;
        walk(p);
      } else {
        if (EXTS.has(path.extname(ent.name))) results.push(p);
      }
    }
  }
  walk(abs);
  return results;
}

function resolveContentKeepTheirs(content) {
  if (!content.includes('<<<<<<<')) return null;
  // Resolve nested conflict blocks by iterative replacement
  let changed = false;
  const conflictRegex = /<<<<<<<[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g;
  let prev;
  do {
    prev = content;
    content = content.replace(conflictRegex, (_, theirs) => {
      changed = true;
      return String(theirs).trimEnd();
    });
  } while (content !== prev);
  // Clean any stray markers just in case
  content = content
    .replace(/<<<<<<<[^\n]*\n/g, '')
    .replace(/^=======$/gm, '')
    .replace(/^>>>>>>>[^\n]*\n/g, '');
  return changed ? content : null;
}

let filesProcessed = 0;
let filesChanged = 0;

for (const dir of TARGET_DIRS) {
  for (const file of listFiles(dir)) {
    let txt;
    try { txt = fs.readFileSync(file, 'utf8'); } catch { continue; }
    if (!/<<<<<<<|=======|>>>>>>>/.test(txt)) continue;
    const resolved = resolveContentKeepTheirs(txt);
    filesProcessed++;
    if (resolved != null) {
      fs.writeFileSync(file, resolved, 'utf8');
      filesChanged++;
      console.log(`Resolved: ${file}`);
    }
  }
}

console.log(`Conflict resolution complete. Files scanned: ${filesProcessed}, changed: ${filesChanged}`);

