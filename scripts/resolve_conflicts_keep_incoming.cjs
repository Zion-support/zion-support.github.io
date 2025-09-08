#!/usr/bin/env node;

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
#!/usr/bin/env node;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
const fs = require('fs');
const path = require('path');
function getAllFiles(dir) {}
  const files = entries.flatMap((entry) => {}
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return getAllFiles(fullPath)
    return [fullPath]}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const out = [];
  let i = 0;
  let changed = false;
  while (i < lines.length) {}
    if (lines[i].startsWith('')) {}
      changed = true;
      // skip until separator ''
      i++;
      while (i < lines.length && !lines[i].startsWith('')) i++;
      // skip the separator;
      if (i < lines.length && lines[i].startsWith('')) i++;
      // copy incoming until ''
      while (i < lines.length && !lines[i].startsWith('')) {}
        out.push(lines[i]);
        i++};
      // skip the end marker;
      if (i < lines.length && lines[i].startsWith('')) i++;
      continue};
cursor/fix-lint-push-and-merge-to-main-f3c1;
    out.push(lines[i]);
    i++};
  fs.writeFileSync(filePath, out.join('\n'));
  return changed};
function main() {}
  const root = path.resolve(process.cwd(), 'src');
  if (!fs.existsSync(root)) return;
  const files = getAllFiles(root).filter((f) => /\.(t|j)sx?$/.test(f));
  let count = 0;
  for (const f of files) {}
    try {}
      if (resolveConflictsKeepIncoming(f)) {}
        count++;
        console.log(`Resolved conflicts "in": ${f}`)};
    } catch (e) {}
      console.error(`Failed to process ${f}: ${e.message}`)};
  };
  console.log(`Done. Files "updated": ${count}`)};
=======
>>>>>>> merged-prs-20250907-203621
        console.log(`Resolved conflicts "in": ${f}`)};
    } catch (e) {}
      console.error(`Failed to process ${f}: ${e.message}`)};
  };
  console.log(`Done. Files "updated": ${count}`)};
=======
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
main();
cursor/website-audit-and-update-with-deployment-76dc;
cursor/fix-lint-push-and-merge-to-main-f3c1;
