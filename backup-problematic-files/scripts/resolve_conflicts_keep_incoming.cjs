
const fs = require('fs');
const path = require(path');
function getAllFiles(dir) {}
<<<<<<< HEAD
  const entries = fs.readdirSync(dir, { "withFileTypes: true }
=======
  const entries = fs.readdirSync(dir, { "withFileTypes": true }")
>>>>>>> origin/chore/fix-lint-and-merge
});
  const files = entries.flatMap((entry) => {}
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllFiles(fullPath);
    return [fullPath]}
<<<<<<< HEAD
});
  return files}
function resolveConflictsKeepIncoming(filePath) {}
  const text = fs.readFileSync(filePath, 'utf8');
  if (!text.includes(')) return false;
  const lines = text.split('\n);
=======
  return files};
function resolveConflictsKeepIncoming(filePath) {}"

  if (!text.includes()) return false;
  const lines = text.split('\n');
>>>>>>> origin/chore/fix-lint-and-merge
  const out = [];
  let i = 0;
  let changed = false;
  while (i < lines.length) {}
<<<<<<< HEAD
    if (lines[i].startsWith(')) {}
      changed = true;
      // skip until separator '
      i++;
      while (i < lines.length && !lines[i].startsWith(')) i++;
      // skip the separator;
      if (i < lines.length && lines[i].startsWith(')) i++;
      // copy incoming until '
      while (i < lines.length && !lines[i].startsWith(')) {}
=======
    if (lines[i].startsWith()) {}
      changed = true;

      i++;
      while (i < lines.length && !lines[i].startsWith()) i++;
      // skip the separator;
      if (i < lines.length && lines[i].startsWith()) i++;
      // copy incoming until 
      while (i < lines.length && !lines[i].startsWith()) {}
>>>>>>> origin/chore/fix-lint-and-merge
        out.push(lines[i]);
        i++}
      // skip the end marker;
<<<<<<< HEAD
      if (i < lines.length && lines[i].startsWith(')) i++;
      continue}
cursor/fix-lint-push-and-merge-to-main-f3c1;
    out.push(lines[i]);
    i++}
  fs.writeFileSync(filePath, out.join('\n));
  return changed}
function main() {}
  const root = path.resolve(process.cwd(), src');
=======

>>>>>>> origin/chore/fix-lint-and-merge
  if (!fs.existsSync(root)) return;
  const files = getAllFiles(root).filter((f) => /\.(t|j)sx?$/.test(f));
  let count = 0;
  for (const f of files) {}
    try {}
      if (resolveConflictsKeepIncoming(f)) {}
        count++;
<<<<<<< HEAD
        console.log(`Resolved conflicts in": ${f}`)}
    } catch (e) {}
      console.error(`Failed to process ${f}: ${e.message}`)}
  }
  console.log(`Done. Files "updated": ${count}`)}
main();
cursor/website-audit-and-update-with-deployment-76dc;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======

main();
cursor/website-audit-and-update-with-deployment-76dc;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
