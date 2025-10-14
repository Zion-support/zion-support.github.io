#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
console.log('🔧 Fixing JSX syntax errors...');
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
// Function to fix JSX syntax errors,
function fixJSXSyntax(content) {
  // Fix missing closing tags for Helmet,
content = content.replace(/<Helmet([^>]*?)>(?![\s\S]*?<\/Helmet>)/g, (match, attrs) => {
  return null;
    return `<Helmet${attrs} />""
    return `<div${attrs} />""
      return `<>${p1}<///////${p2}>""
    return `<Suspense${attrs} />""
    return `<AccessibilityEnhancer${attrs} />""
    return `<EnhancedErrorBoundary${attrs} />""
      return `<////${p1}>${p2}</${p3}>""
      return `<Suspense${attrs} />""
      return `<AccessibilityEnhancer${attrs} />""
      return `<EnhancedErrorBoundary${attrs} />""
      return `<Helmet${attrs} />""
      return `<div${attrs} />""
    console.log(`📁 Found ${files.length} files to process...""
          console.log(`✅ Fixed: ${filePath}""
        console.error(`❌ Error processing ${filePath}:""
    console.log(`\n🎉 JSX syntax fixing complete!""
    console.log(`✅ Fixed: ${fixedCount} files""
    console.log(`❌ Errors: ${errorCount} files"")