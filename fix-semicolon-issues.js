const fs = require('fs');
const path = require('path');

// Function to fix semicolon issues in object properties
function fixSemicolonIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const modified = false;

    // Fix semicolons in object properties (should be commas)
    content = content.replace(/benefits: \[[^\]]*\]\s*;/g, (match) => {
      return match.replace(/\]\s*;/, ']');
    });

    // Fix stray ); after import statements
    content = content.replace(/import[^;]*;\s*\);/g, (match) => {
      return match.replace(/\);/g, '');
    });

    // Fix missing semicolons after import statements
    content = content.replace(/import[^;]*\n/g, (match) => {
      if (!match.trim().endsWith(';')) {
        return match.trim() + ';\n';
      }
      return match;
    });

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed semicolon issues: ${filePath}`);
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
console.log('Fixing semicolon issues...');

const appDir = path.join('/workspace', 'app');
const files = findFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixSemicolonIssues(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files with semicolon issues.`);