const fs = require('fs');
const path = require('path');

// Function to fix duplicate imports in a single file
function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate Footer imports
    const lines = content.split('\n');
    const footerImportLines = lines.filter(line => line.includes('import Footer from'));
    
    if (footerImportLines.length > 1) {
      // Keep only the first Footer import and remove duplicates
      const firstFooterLine = footerImportLines[0];
      const newLines = [];
      let footerImported = false;
      
      for (const line of lines) {
        if (line.includes('import Footer from') && !footerImported) {
          newLines.push(line);
          footerImported = true;
        } else if (line.includes('import Footer from') && footerImported) {
          // Skip duplicate Footer imports
          modified = true;
        } else {
          newLines.push(line);
        }
      }
      
      content = newLines.join('\n');
    }

    // Fix double semicolons
    if (content.includes(';;')) {
      content = content.replace(/;;/g, ';');
      modified = true;
    }

    // Fix malformed import statements
    if (content.includes('import  ArrowRight  from')) {
      content = content.replace(/import  ArrowRight  from/g, 'import { ArrowRight } from');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting duplicate import fix...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixDuplicateImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Duplicate import fix complete!');