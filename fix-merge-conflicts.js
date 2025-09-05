<<<<<<< HEAD

;
  };
  traverse(dir),;
  return files};
// Find and fix files with merge conflicts,;
const conflictedFiles = findFilesWithConflicts('.'),;
console.log(`Found ${conflictedFiles.length} files with merge conflicts`),;
for (const file of conflictedFiles) {,;
  fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!'),;
;
=======
};
  traverse(dir);
  return files};
// Find and fix files with merge conflicts;
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {;
  fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!');
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?};
};
        };
      };
};
<<<<<<< HEAD
;
,);
;
console.log('\nMerge conflict fixing complete!'),;
console.log('\nMerge conflict fixing complete!'),;
,;
console.log(`Fixed merge conflicts in ${fixedCount} files`),;
,),;
;
=======
};
};
};
console.log('\nMerge conflict fixing complete!');
console.log('\nMerge conflict fixing complete!');
;
console.log(`Fixed merge conflicts in ${fixedCount} files`);
,);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
