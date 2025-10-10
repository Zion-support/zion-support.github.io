const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Function to resolve merge conflicts by keeping the newer version (after =======)
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the newer version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>>[^\n]*/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>>[^\n]*/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>>[^\n]*/g, '');
    
    // Fix common syntax issues
    content = content.replace(/;];];/g, '];');
    content = content.replace(/;];/g, '];');
    content = content.replace(/];];/g, '];');
    
    // Fix filter syntax issues
    content = content.replace(/\.filter\([^)]*;\s*\)/g, (match) => {
      return match.replace(';', '');
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('./app');

console.log(`Found ${conflictedFiles.length} files with conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\nResolving conflicts...');
conflictedFiles.forEach(resolveConflicts);

console.log('\nMerge conflicts resolved!');