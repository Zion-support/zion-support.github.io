#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix extra closing braces
function fixExtraBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix pattern: export default ComponentName; }
    const exportPattern = /export\s+default\s+\w+;\s*}/g;
    if (exportPattern.test(content)) {
      content = content.replace(exportPattern, (match) => {
        return match.replace(/\s*}$/, '');
      });
      modified = true;
    }
    
    // Fix pattern: }; export default ComponentName; }
    const doubleExportPattern = /};\s*export\s+default\s+\w+;\s*}/g;
    if (doubleExportPattern.test(content)) {
      content = content.replace(doubleExportPattern, (match) => {
        return match.replace(/\s*}$/, '');
      });
      modified = true;
    }
    
    // Fix pattern: }; const ComponentName: React.FC = () => { ... }; export default ComponentName; }
    const complexPattern = /};\s*const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[\s\S]*?\};\s*export\s+default\s+\w+;\s*}/g;
    if (complexPattern.test(content)) {
      content = content.replace(complexPattern, (match) => {
        return match.replace(/\s*}$/, '');
      });
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files that need fixing
function findFilesToFix(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('export default') && content.includes('}')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('Starting extra braces fix...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const filesToFix = findFilesToFix(srcDir);
  
  console.log(`Found ${filesToFix.length} files to check`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of filesToFix) {
    if (fixExtraBraces(filePath)) {
      fixedCount++;
      console.log(`Fixed: ${filePath}`);
    } else {
      errorCount++;
    }
  }
  
  console.log(`\nFix complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixExtraBraces, findFilesToFix };