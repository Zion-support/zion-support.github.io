  };
  traverse(dir),
  return files};
// Find and fix files with merge conflicts,
const conflictedFiles = findFilesWithConflicts('.'),
// // // // console.log(`Found ${conflictedFiles.length} files with merge conflicts`),
for (const file of conflictedFiles) {
  fixMergeConflicts(file)};
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?};
};
        };
      };
};
// // // // console.log('\nMerge conflict fixing complete!'),
// // // // console.log('\nMerge conflict fixing complete!'),
