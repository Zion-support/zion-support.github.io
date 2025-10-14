#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
console.log('🔧 Fixing all remaining syntax errors...');
// Function to recursively find all files,
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}
// Function to fix syntax errors,
function fixSyntaxErrors(content) {
  // Fix malformed JSX fragments,
content = content.replace(/<>([^<////]*?)<([^>]*?)>/g, (match, p1, p2) => {
  return null;
    if (p1.trim() && !p1.includes('<') && !p1.includes('>')) {
      return `<///>${p1}<//${p2}>""
      return `<${p1}>${p2}<////${p3}>""
    return `<Helmet${attrs} />""
    return `<div${attrs} />""
      return `<///${p1}>${p2}</${p3}>""
      return `<///${p1}>${p2}</${p3}>""
        return `<>${p1}</////${p2}>""
      return `<Helmet${attrs} />""
      return `<div${attrs} />""
    console.log(`📁 Found ${files.length} files to process...""
          console.log(`✅ Fixed: ${filePath}""
        console.error(`❌ Error processing ${filePath}:""
    console.log(`\n🎉 Syntax fixing complete!""
    console.log(`✅ Fixed: ${fixedCount} files""
    console.log(`❌ Errors: ${errorCount} files"")