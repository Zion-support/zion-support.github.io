import fs from 'fs';
import path from 'path';

function listFilesRecursively(startDir) {
  const results = [];
  const queue = [startDir];
  while (queue.length) {
    const dir = queue.pop();
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.git')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        queue.push(full);
      } else if (entry.isFile()) {
        results.push(full);
      }
    }
  }
  return results;
}

function restoreFromLatestBackup(targetFile) {
  const dir = path.dirname(targetFile);
  const base = path.basename(targetFile);
  let entries;
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return false;
  }
  const backups = entries
    .filter((name) => name.startsWith(base + '.backup.'))
    .map((name) => path.join(dir, name));
  if (backups.length === 0) return false;
  backups.sort((a, b) => {
    const aTime = fs.statSync(a).mtimeMs;
    const bTime = fs.statSync(b).mtimeMs;
    return bTime - aTime;
  });
  const latest = backups[0];
  fs.copyFileSync(latest, targetFile);
  console.log(`Restored ${targetFile} from ${latest}`);
  return true;
}

function main() {
  const root = path.resolve(process.cwd(), 'src');
  const files = listFilesRecursively(root).filter((f) =>
    f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.js') || f.endsWith('.jsx')
  );
  let restored = 0;
  for (const file of files) {
    if (restoreFromLatestBackup(file)) restored++;
  }
  console.log(`Done. Restored ${restored} files.`);
}

main();

