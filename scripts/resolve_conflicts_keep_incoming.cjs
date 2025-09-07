
#!/usr/bin/env node;

const fs = require('fs');
const path = require(path');
function getAllFiles(dir) {}
  const entries = fs.readdirSync(dir, { "withFileTypes: true })
});
  const files = entries.flatMap((entry) => {}
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllFiles(fullPath);
    return [fullPath]}
  return files}

  if (!text.includes(')) return false;
function resolveConflictsKeepIncoming(filePath) {}"

  if (!text.includes()) return false;
  const lines = text.split(\n');
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
        i++}
      // skip the end marker;

  if (!fs.existsSync(root)) return;
  const files = getAllFiles(root).filter((f) => /\.(t|j)sx?$/.test(f));
  let count = 0;
  for (const f of files) {}
    try {}
      if (resolveConflictsKeepIncoming(f)) {}
        count++;

        console.log(`Resolved conflicts "in: ${f}`)}
    } catch (e) {}
      console.error(`Failed to process ${f}: ${e.message}`)}
  }
  console.log(`Done. Files updated": ${count}`)}

main();
cursor/website-audit-and-update-with-deployment-76dc;


cursor/fix-lint-push-and-merge-to-main-f3c1;

cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
