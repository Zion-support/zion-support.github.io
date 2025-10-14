#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
console.log('🔧 Fixing page files...');
// Function to recursively find all page files,
function getAllPageFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
      files = files.concat(getAllPageFiles(fullPath));
    } else if (stat.isFile() && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  return files;
}
// Function to create a proper page template,
function createPageTemplate(filePath) {
  const fileName = path.basename(path.dirname(filePath));
  const title = fileName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return ""
""
    console.log(`📁 Found ${files.length} page files to process...""
        console.log(`✅ Fixed: ${filePath}""
        console.error(`❌ Error processing ${filePath}:""
    console.log(`\n🎉 Page fixing complete!""
    console.log(`✅ Fixed: ${fixedCount} files""
    console.log(`❌ Errors: ${errorCount} files"")