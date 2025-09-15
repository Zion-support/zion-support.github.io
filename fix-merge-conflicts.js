<<<<<<< HEAD
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
=======
const fs = require('fs');
const path = require('path');

function fixMergeConflicts(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      // Skip node_modules, .git, and other directories that shouldn't be processed
      if (['node_modules', '.git', 'backups', 'logs'].includes(file.name)) {
        continue;
      }
      fixMergeConflicts(fullPath);
    } else if (file.isFile()) {
      // Only process text files
      const ext = path.extname(file.name).toLowerCase();
      if (['.js', '.ts', '.tsx', '.jsx', '.json', '.md', '.txt', '.yml', '.yaml', '.toml', '.config.js'].includes(ext)) {
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          let originalContent = content;
          
          // Remove merge conflict markers
          content = content
            .replace(/            .replace(/          
          // If content changed, write it back
          if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`✅ Fixed merge conflicts in: ${fullPath}`);
          }
        } catch (error) {
          console.log(`⚠️  Could not process ${fullPath}: ${error.message}`);
        }
      }
    }
  }
}

console.log('🔧 Fixing merge conflicts throughout the project...');
fixMergeConflicts('.');
console.log('✅ Merge conflict fixing completed!'); 
>>>>>>> origin/auto/autonomy-17186719616
