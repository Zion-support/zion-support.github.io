const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======.*?\n/g, '');
    content = content.replace(/>>>>>>> .*\n/g, '');
    
    // Clean up any remaining merge conflict artifacts
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> .*/g, '');
    
    // Fix common syntax issues
    content = content.replace(/const (\w+)-(\w+)Page:/g, 'const $1$2Page:');
    content = content.replace(/import { Link } from 'react-router-dom';/g, "import Link from 'next/link';");
    
    // Add 'use client' directive if useState or useEffect is used
    if (content.includes('useState') || content.includes('useEffect')) {
      if (!content.includes("'use client'")) {
        content = "'use client';\n\n" + content;
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const filesWithConflicts = findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
filesWithConflicts.forEach(file => console.log(`- ${file}`));

// Fix each file
filesWithConflicts.forEach(fixMergeConflicts);

console.log('Merge conflict fixing completed!');