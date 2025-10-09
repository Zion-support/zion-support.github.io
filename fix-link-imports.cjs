const fs = require('fs');
const path = require('path');

// Find all files that use Link but don't import it
function findFilesWithLinkUsage(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

function fixLinkImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add Link import if it's missing
    if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
      // Find the first import statement
      const importMatch = content.match(/import .+ from ['"][^'"]+['"];?\n/);
      if (importMatch) {
        const insertIndex = importMatch.index + importMatch[0].length;
        content = content.slice(0, insertIndex) + "import Link from 'next/link';\n" + content.slice(insertIndex);
      } else {
        // If no imports, add at the beginning after React import
        const reactImportMatch = content.match(/import React[^;]+;\n/);
        if (reactImportMatch) {
          const insertIndex = reactImportMatch.index + reactImportMatch[0].length;
          content = content.slice(0, insertIndex) + "import Link from 'next/link';\n" + content.slice(insertIndex);
        } else {
          // Add at the very beginning
          content = "import Link from 'next/link';\n" + content;
        }
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed Link import: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all files
const filesToFix = findFilesWithLinkUsage('app');
console.log(`Found ${filesToFix.length} files with Link usage but missing import`);

filesToFix.forEach(fixLinkImport);

console.log('Link import fixes completed!');