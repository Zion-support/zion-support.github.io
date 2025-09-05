<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Resolving merge conflicts automatically.");/ Get list of conflicted files"const conflictedFiles = execSync("git diff --name-only --diff-filter=U", { encoding: "utf8" }) .trim()" .split("\n") .filter(file => file.length > 0);console.log(`Found ${conflictedFiles.length} conflicted files`);/ Function to resolve conflicts by accepting feature branch changesfunction resolveConflicts(filePath) { try { if (!fs.existsSync(filePath)) {"` console.log(` File not found: ${filePath}`); return false; }" let content = fs.readFileSync(filePath, "utf8"); / Check if file has merge conflicts'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log(' Starting automatic merge conflict resolution...')
    const content = fs.readFileSync(filePath, 'utf8')
    if (filePath.includes('__tests__') || filePath.includes('.test.') || filePath.includes('.spec.')
      const lines = content.split('\n')
      let conflictType = 'incoming'
          conflictType = 'incoming'
          conflictType = 'incoming'
        } else if (conflictType === 'incoming')
      fs.writeFileSync(filePath, resolved.join('\n')
    if (filePath.includes('package-lock.json') || filePath.includes('yarn.lock')
      const lines = content.split('\n')
      let conflictType = 'current'
          conflictType = 'current'
          conflictType = 'incoming'
        } else if (conflictType === 'current')
      fs.writeFileSync(filePath, resolved.join('\n')
    const lines = content.split('\n')
    let conflictType = 'incoming'
        conflictType = 'incoming'
        conflictType = 'incoming'
      } else if (conflictType === 'incoming')
    fs.writeFileSync(filePath, resolved.join('\n')
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules'
            const content = fs.readFileSync(filePath, 'utf8')
          // Skip files that can'
  const conflictedFiles = findConflictedFiles('.')
  const remainingConflicts = findConflictedFiles('.')
    console.log('� All merge conflicts resolved!')
  console.error(' Error during conflict resolution:')
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> main
