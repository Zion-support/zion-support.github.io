
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
function resolveConflictsKeepIncoming(filePath) {}"

  if (!text.includes()) return false;
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

main();
cursor/website-audit-and-update-with-deployment-76dc;
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
