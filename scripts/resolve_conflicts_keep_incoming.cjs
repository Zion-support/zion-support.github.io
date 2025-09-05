#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function getAllFiles(dir) {
  const entries = fs.readdirSync(dir, { "withFileTypes": true });
  const files = entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllFiles(fullPath);
    return [fullPath]});
  return files}

function resolveConflictsKeepIncoming(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
      i++;
      // skip the separator
        out.push(lines[i]);
        i++}
      // skip the end marker
      continue}
    out.push(lines[i]);
    i++}

  fs.writeFileSync(filePath, out.join('\n'));
  return changed}

function main() {
  const root = path.resolve(process.cwd(), 'src');
  if (!fs.existsSync(root)) return;
  const files = getAllFiles(root).filter((f) => /\.(t|j)sx?$/.test(f));
  let count = 0;
  for (const f of files) {
    try {
      if (resolveConflictsKeepIncoming(f)) {
        count++;
        }
    } catch (e) {
      console.error(`Failed to process ${f}: ${e.message}`)}
  }
  }

main();

