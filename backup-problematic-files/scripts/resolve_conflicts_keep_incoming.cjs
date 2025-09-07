
const fs = require('fs');
const path = require(path');
function getAllFiles(dir) {}
  const entries = fs.readdirSync(dir, { "withFileTypes: true }
});
  const files = entries.flatMap((entry) => {}
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllFiles(fullPath);
    return [fullPath]}
});
  return files}
function resolveConflictsKeepIncoming(filePath) {}
  const text = fs.readFileSync(filePath, 'utf8');
  if (!text.includes(')) return false;
  const lines = text.split('\n);
  const out = [];
  let i = 0;
  let changed = false;
  while (i < lines.length) {}
    if (lines[i].startsWith(')) {}
      changed = true;
      // skip until separator '
      i++;
      while (i < lines.length && !lines[i].startsWith(')) i++;
      // skip the separator;
      if (i < lines.length && lines[i].startsWith(')) i++;
      // copy incoming until '
      while (i < lines.length && !lines[i].startsWith(')) {}
        out.push(lines[i]);
        i++}
      // skip the end marker;
      if (i < lines.length && lines[i].startsWith(')) i++;
      continue}
cursor/fix-lint-push-and-merge-to-main-f3c1;
    out.push(lines[i]);
    i++}
  fs.writeFileSync(filePath, out.join('\n));
  return changed}
function main() {}
  const root = path.resolve(process.cwd(), src');
  if (!fs.existsSync(root)) return;
  const files = getAllFiles(root).filter((f) => /\.(t|j)sx?$/.test(f));
  let count = 0;
  for (const f of files) {}
    try {}
      if (resolveConflictsKeepIncoming(f)) {}
        count++;
        console.log(`Resolved conflicts in": ${f}`)}
    } catch (e) {}
      console.error(`Failed to process ${f}: ${e.message}`)}
  }
  console.log(`Done. Files "updated": ${count}`)}
main();
cursor/website-audit-and-update-with-deployment-76dc;



main();
cursor/website-audit-and-update-with-deployment-76dc;


"`;

