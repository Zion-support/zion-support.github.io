<<<<<<< HEAD
#!/usr/bin/env node

=======




#!/usr/bin/env node




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
console.log('🔧 Starting merge conflict resolution...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
<<<<<<< HEAD
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+.*?\n?/g, '');
=======
    if (!content.includes('
        
        // Choose HEAD content (first part) and remove conflict markers
        resolved += headContent;
        if (endMarker.length > 1) {
          resolved += endMarker.slice(1).join('
        }
      }
    }
    
    // Clean up any remaining conflict markers
    resolved = resolved.replace(/
    
    // Write resolved content
    fs.writeFileSync(filePath, resolved, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);

    console.log(`Fixing merge conflicts in: ${filePath}`);
    

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return false;
  }
}

<<<<<<< HEAD
// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (item === 'node_modules' || item === '.git' || item === '.next') {
        continue;
      }
      try {
        totalFixed += processDirectory(fullPath);
      } catch (error) {
        console.log(`Skipping directory ${fullPath}: ${error.message}`);
      }
    } else if (stat.isFile()) {
      // Process JavaScript, TypeScript, and JSX files
      if (/\.(js|jsx|ts|tsx|json|css|html)$/.test(item)) {
        if (fixMergeConflicts(fullPath)) {
          totalFixed++;
=======

  

  }
  
  scanDirectory(dir);
  return files;
}


    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      

            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        }
      }
    }
  }
<<<<<<< HEAD

  return totalFixed;
}

// Main execution
console.log('Starting merge conflict resolution...');
const totalFixed = processDirectory('.');
console.log(`\nResolved conflicts in ${totalFixed} files.`);
console.log('Merge conflict resolution complete!');
=======
  

  return files;
}

// Main execution

  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}


  return files;

}

// Main execution

}


console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
