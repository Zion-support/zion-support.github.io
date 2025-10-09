#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix export issues
function fixExportIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find the last export default statement
    const exportMatch = content.match(/export\s+default\s+\w+;$/m);
    if (exportMatch) {
      const exportIndex = content.lastIndexOf(exportMatch[0]);
      const beforeExport = content.substring(0, exportIndex + exportMatch[0].length);
      const afterExport = content.substring(exportIndex + exportMatch[0].length);
      
      // If there's content after the export statement, remove it
      if (afterExport.trim()) {
        content = beforeExport;
        modified = true;
      }
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

// Function to find files with export issues
function findFilesWithExportIssues(dir) {
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
          const exportMatch = content.match(/export\s+default\s+\w+;$/m);
          if (exportMatch) {
            const exportIndex = content.lastIndexOf(exportMatch[0]);
            const afterExport = content.substring(exportIndex + exportMatch[0].length);
            if (afterExport.trim()) {
              files.push(fullPath);
            }
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
  console.log('Starting export issues fix...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const filesToFix = findFilesWithExportIssues(srcDir);
  
  console.log(`Found ${filesToFix.length} files with export issues`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of filesToFix) {
    if (fixExportIssues(filePath)) {
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

module.exports = { fixExportIssues, findFilesWithExportIssues };