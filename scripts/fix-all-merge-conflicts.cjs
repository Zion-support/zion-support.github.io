const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all merge conflicts...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers
    
    // Clean up any remaining conflict markers
    
    // Clean up extra semicolons and syntax issues
    content = content.replace(/;{2,}/g, ';');
    content = content.replace(/export const metadata = {;/g, 'export const metadata = {');
    content = content.replace(/title: "([^"]*)",;/g, 'title: "$1",');
    content = content.replace(/description:;/g, 'description:');
    content = content.replace(/keywords: "([^"]*)",;/g, 'keywords: "$1",');
    
    // Fix common syntax issues
    content = content.replace(/\}\s*\)\s*;/g, '});');
    content = content.replace(/\}\s*\)\s*expect/g, '});\n    expect');
    content = content.replace(/\}\s*\)\s*describe/g, '});\n\n  describe');
    content = content.replace(/\}\s*\)\s*it/g, '});\n\n  it');
    
    // Remove empty lines and clean up
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim();
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      let stat;
      try {
        stat = fs.statSync(fullPath);
      } catch (error) {
        // Skip broken symlinks or inaccessible files
        continue;
      }
      
      if (stat.isDirectory()) {
        // Skip node_modules and other problematic directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for common file extensions
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.jsx', '.js', '.json', '.css', '.md'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
