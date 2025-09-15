<<<<<<< HEAD

  };
  traverse(dir),
  return files};
// Find and fix files with merge conflicts,
const conflictedFiles = findFilesWithConflicts('.'),
console.log(`Found ${conflictedFiles.length} files with merge conflicts`),
for (const file of conflictedFiles) {,
  fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!'),
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?};
};
        };
      };
};

console.log('\nMerge conflict fixing complete!'),
console.log('\nMerge conflict fixing complete!'),
,
console.log(`Fixed merge conflicts in ${fixedCount} files`),
,),
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> [a-f0-9]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+\n/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix the specific file
fixMergeConflicts('src/components/EnhancedSearch.tsx');
>>>>>>> origin/enhance-app-with-new-services-and-advertising
