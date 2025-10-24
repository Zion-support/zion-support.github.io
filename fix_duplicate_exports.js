#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function findFilesWithDuplicateExports(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const exportMatches = content.match(/export default/g);
          
          if (exportMatches && exportMatches.length > 1) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

function fixDuplicateExports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find all export default statements
    const lines = content.split('\n');
    const exportLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('export default')) {
        exportLines.push({ line: i, content: lines[i] });
      }
    }
    
    if (exportLines.length > 1) {
      console.log(`Fixing ${filePath} - found ${exportLines.length} export default statements`);
      
      // Keep only the last export default statement
      const lastExport = exportLines[exportLines.length - 1];
      
      // Remove all export default statements
      for (let i = exportLines.length - 1; i >= 0; i--) {
        const exportLine = exportLines[i];
        lines.splice(exportLine.line, 1);
      }
      
      // Add the last export default at the end
      lines.push('');
      lines.push(lastExport.content);
      
      const newContent = lines.join('\n');
      fs.writeFileSync(filePath, newContent);
      
      console.log(`✅ Fixed ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function main() {
  console.log('🔍 Searching for files with duplicate export default statements...');
  
  const files = findFilesWithDuplicateExports('./app');
  console.log(`Found ${files.length} files with duplicate exports`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixDuplicateExports(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Fixed: ${fixedCount} files`);
  console.log(`❌ Failed: ${files.length - fixedCount} files`);
  
  console.log('\n🎉 Duplicate export fix completed!');
}

main();