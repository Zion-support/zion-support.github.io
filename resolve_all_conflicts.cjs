const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Remove all merge conflict markers and keep the content after =======
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\s*\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
    content = content.replace(/<<<<<<< HEAD\s*\n?/g, '');
    content = content.replace(/=======\s*\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictFiles(dir) {
  const conflictFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for common file extensions
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.css', '.json', '.md'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
              conflictFiles.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  scanDirectory(dir);
  return conflictFiles;
}

// Main execution
console.log('🔍 Scanning for merge conflicts...');
const conflictFiles = findConflictFiles('.');

if (conflictFiles.length === 0) {
  console.log('✅ No merge conflicts found!');
} else {
  console.log(`📝 Found ${conflictFiles.length} files with merge conflicts:`);
  conflictFiles.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Resolving conflicts...');
  let resolvedCount = 0;
  
  for (const file of conflictFiles) {
    if (resolveConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`\n✅ Resolved conflicts in ${resolvedCount} files`);
  
  // Check if any conflicts remain
  const remainingConflicts = findConflictFiles('.');
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts have been resolved!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`  - ${file}`));
  }
}