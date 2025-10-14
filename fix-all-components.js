#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
console.log('🔧 Fixing all component files...');
// Function to recursively find all component files,
function getAllComponentFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
      files = files.concat(getAllComponentFiles(fullPath));
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts')) && item !== 'page.tsx') {
      files.push(fullPath);
    }
  }
  return files;
}
// Function to create a basic component template,
function createComponentTemplate(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  return ""
""
    console.log(`📁 Found ${files.length} component files to process...""
        console.log(`✅ Fixed: ${filePath}""
        console.error(`❌ Error processing ${filePath}:""
    console.log(`\n🎉 Component fixing complete!""
    console.log(`✅ Fixed: ${fixedCount} files""
    console.log(`❌ Errors: ${errorCount} files""
export default items;)