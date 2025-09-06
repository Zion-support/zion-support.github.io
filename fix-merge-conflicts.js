<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');


;
=======


}; traverse(dir); return files};
// Find and fix files with merge conflicts;
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {; fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!');
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?}}}}}}}};
};
  traverse(dir);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  return files};
// Find and fix files with merge conflicts;
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {;
  fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!');
// Find and fix files with merge conflicts,
const conflictedFiles = findFilesWithConflicts('.'),
// console.log(`Found ${conflictedFiles.length} files with merge conflicts`),
for (const file of conflictedFiles) {,
  fixMergeConflicts(file)};
// console.log('Merge conflict resolution complete!'),
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?};
};
        };
      };
};
};

<<<<<<< HEAD
};
};
console.log('\nMerge conflict fixing complete!');
console.log('\nMerge conflict fixing complete!');
;
console.log(`Fixed merge conflicts in ${fixedCount} files`);
);
;
  },;
  traverse(dir),;
  return files},;
// Find and fix files with merge conflicts,;
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`),;
for (const file of conflictedFiles) {,;
  fixMergeConflicts(file)},;
console.log('Merge conflict resolution complete!'),;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
        }
      }

}
<<<<<<< HEAD
,);
console.log('\nMerge conflict fixing complete!');
console.log('\nMerge conflict fixing complete!');
console.log(`Fixed merge conflicts in ${fixedCount} files`);
,);    }
  }
  }
}
console.log('\nMerge conflict fixing complete!')
console.log('\nMerge conflict fixing complete!')
console.log(`Fixed merge conflicts in ${fixedCount} files`)
,)
}

console.log('\nMerge conflict fixing complete!');








>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

  traverse(dir);
  return files}
// Find and fix files with merge conflicts
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {
  fixMergeConflicts(file)}
console.log('Merge conflict resolution complete!');
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); content = content.replace(/[\s\S]*?[\s\S]*?}

// Main execution
console.log('Finding files with merge conflict markers...');
const filesWithConflicts = findFilesWithMergeConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}
console.log(`Fixed merge conflicts in ${fixedCount} files`);
// Run TypeScript check to see remaining errors
console.log('\nRunning TypeScript check...');
try {
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  console.log('TypeScript check passed!');
} catch (error) {
  console.log('TypeScript check found some issues, but continuing...');
}

};
};

console.log('\nMerge conflict fixing complete!');

console.log('\nMerge conflict fixing complete!');

console.log('\nMerge conflict fixing complete!');

}),;
console.log('\nMerge conflict fixing complete!'),;
console.log('\nMerge conflict fixing complete!'),;
,;
console.log(`Fixed merge conflicts in ${fixedCount} files`),;
,),;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
