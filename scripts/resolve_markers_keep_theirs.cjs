#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TARGET_DIR = path.join(ROOT, 'zion-os', 'src');
const VALID_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mts', '.cts']);

function listFilesRecursively(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFilesRecursively(fullPath));
    } else if (VALID_EXTENSIONS.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

function hasConflictMarkers(content) {
  return content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>');
}

// Keep the "theirs" side (the block after ======= up to >>>>>>>)
function resolveConflictMarkersKeepTheirs(content) {
  const CONFLICT_BLOCK = /<<<<<<<[\s\S]*?=======[\s\S]*?>>>>>>>[^\n]*\n?/g;
  return content.replace(CONFLICT_BLOCK, (block) => {
    const sepIdx = block.indexOf('=======');
    const endIdx = block.lastIndexOf('>>>>>>>');
    if (sepIdx === -1 || endIdx === -1) return block; // malformed
    const theirs = block.slice(sepIdx + '======='.length, endIdx).trimStart();
    // Ensure trailing newline consistency
    return theirs.endsWith('\n') ? theirs : theirs + '\n';
  }).replace(/^[ \t]*<<<<<<<[^\n]*\n/gm, '')
    .replace(/^[ \t]*>>>>>>>[^\n]*\n/gm, '')
    .replace(/^[ \t]*=======$/gm, '');
}

function main() {
  if (!fs.existsSync(TARGET_DIR)) {
    console.error(`Target directory not found: ${TARGET_DIR}`);
    process.exit(1);
  }
  const files = listFilesRecursively(TARGET_DIR);
  let changed = 0;
  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8');
    if (!hasConflictMarkers(original)) continue;
    const resolved = resolveConflictMarkersKeepTheirs(original);
    if (resolved !== original) {
      fs.writeFileSync(file, resolved, 'utf8');
      console.log(`Resolved markers in ${path.relative(ROOT, file)}`);
      changed++;
    }
  }
  console.log(`Done. Files updated: ${changed}`);
}

main();

