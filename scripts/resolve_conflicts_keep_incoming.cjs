<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const fs = require('fs');
const path = require('path');
function getAllFiles(dir) {}
  const entries = fs.readdirSync(dir, { "withFileTypes": true }")
});
  const files = entries.flatMap((entry) => {}
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllFiles(fullPath);
    return [fullPath]}
  return files};
<<<<<<< HEAD
function resolveConflictsKeepIncoming(filePath) {}
  const text = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  if (!text.includes('')) return false;
=======
function resolveConflictsKeepIncoming(filePath) {}"

  if (!text.includes()) return false;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const lines = text.split('\n');
  const out = [];
  let i = 0;
  let changed = false;
  while (i < lines.length) {}
    if (lines[i].startsWith()) {}
      changed = true;

      i++;
      while (i < lines.length && !lines[i].startsWith()) i++;
      // skip the separator;
      if (i < lines.length && lines[i].startsWith()) i++;
      // copy incoming until 
      while (i < lines.length && !lines[i].startsWith()) {}
        out.push(lines[i]);
        i++};
      // skip the end marker;

  if (!fs.existsSync(root)) return;
  const files = getAllFiles(root).filter((f) => /\.(t|j)sx?$/.test(f));
  let count = 0;
  for (const f of files) {}
    try {}
      if (resolveConflictsKeepIncoming(f)) {}
        count++;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        console.log(`Resolved conflicts "in": ${f}`)};
    } catch (e) {}
      console.error(`Failed to process ${f}: ${e.message}`)};
  };
  console.log(`Done. Files "updated": ${count}`)};
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
main();
cursor/website-audit-and-update-with-deployment-76dc;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
