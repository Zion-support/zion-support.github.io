const fs = require('fs');
const path = require('path');

// Function to fix final issues
function fixFinalIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    let inImportBlock = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if we're starting an import block
      if (line.trim().startsWith('import ') || line.trim().startsWith('"use client"') || line.trim().startsWith("'use client'")) {
        inImportBlock = true;
      }
      
      // Check if we're ending the import block
      if (inImportBlock && !line.trim().startsWith('import ') && !line.trim().startsWith('"use client"') && !line.trim().startsWith("'use client'") && line.trim() !== '') {
        inImportBlock = false;
      }

      if (inImportBlock && line.trim().startsWith('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          cleanedLines.push(line);
        }
      } else if (inImportBlock && (line.trim().startsWith('"use client"') || line.trim().startsWith("'use client'"))) {
        if (!seenImports.has('"use client"')) {
          seenImports.add('"use client"');
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }

    if (cleanedLines.length !== lines.length) {
      content = cleanedLines.join('\n');
      modified = true;
    }

    // Fix multiple export default statements
    const exportMatches = content.match(/export default [^;]+;/g);
    if (exportMatches && exportMatches.length > 1) {
      // Keep only the first export default
      const firstExport = exportMatches[0];
      content = content.replace(/export default [^;]+;/g, '');
      content = content.replace(/(\n|^)([^}]*\n)*\s*}\s*$/, `$1${firstExport}`);
      modified = true;
    }

    // Fix stray ); characters
    content = content.replace(/\s*\);\s*import/g, '\nimport');
    content = content.replace(/\s*\);\s*export/g, '\nexport');
    content = content.replace(/\s*\);\s*const/g, '\nconst');
    content = content.replace(/\s*\);\s*function/g, '\nfunction');

    // Fix missing semicolons after import statements
    content = content.replace(/import[^;]*\n/g, (match) => {
      if (!match.trim().endsWith(';')) {
        return match.trim() + ';\n';
      }
      return match;
    });

    // Fix missing semicolons after useState
    content = content.replace(/useState\([^)]*\)\n/g, (match) => {
      if (!match.trim().endsWith(';')) {
        return match.trim() + ';\n';
      }
      return match;
    });

    // Fix missing semicolons after array declarations
    content = content.replace(/\]\n/g, (match) => {
      if (!match.trim().endsWith(';')) {
        return match.trim() + ';\n';
      }
      return match;
    });

    // Fix missing semicolons after export default
    content = content.replace(/export default [^;]*\n/g, (match) => {
      if (!match.trim().endsWith(';')) {
        return match.trim() + ';\n';
      }
      return match;
    });

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed final issues: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Fixing final issues...');

const appDir = path.join('/workspace', 'app');
const files = findFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixFinalIssues(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files with final issues.`);