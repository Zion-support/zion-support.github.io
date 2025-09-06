
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
  };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======

};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  traverse(dir),;
  return files};
// Find and fix files with merge conflicts,;
const conflictedFiles = findFilesWithConflicts('.'),;
<<<<<<< HEAD

;  };
=======
console.log(`Found ${conflictedFiles.length} files with merge conflicts`),;
for (const file of conflictedFiles) {,;
  fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!'),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  traverse(dir),
  return files};
// Find and fix files with merge conflicts,
const conflictedFiles = findFilesWithConflicts('.'),
<<<<<<< HEAD

};
        };
      };
};

=======
console.log(`Found ${conflictedFiles.length} files with merge conflicts`),
for (const file of conflictedFiles) {,
  fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!'),
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?}
};
        }
}
};
;
,);
;
console.log('\nMerge conflict fixing complete!'),;
console.log('\nMerge conflict fixing complete!'),;
,;
console.log(`Fixed merge conflicts in ${fixedCount} files`),;
,),
};
  }
}
};
console.log('\nMerge conflict fixing complete!'),
console.log('\nMerge conflict fixing complete!'),
,
console.log(`Fixed merge conflicts in ${fixedCount} files`),
,),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
