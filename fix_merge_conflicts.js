#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Fix common syntax issues that might remain
    content = content.replace(/import React from "react\n/g, 'import React from "react";\n');
    content = content.replace(/import { Helmet }    from "react-helmet-async"\n/g, 'import { Helmet } from "react-helmet-async";\n');
    content = content.replace(/const AppPage = \(\) => \{\n/g, 'const AppPage = () => {\n');
    // Fix unterminated strings
    content = content.replace(/import React from "react\n/g, 'import React from "react";\n');
    content = content.replace(/from "react-helmet-async"\n/g, 'from "react-helmet-async";\n');
    // Fix JSX syntax issues
    content = content.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>App - Zion Tech Group</title><meta name="description" content="App - Zion Tech Group" /></Helmet><div className="container mx-auto px-4 py-16"><div className="text-center"></div>/g, 
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <Helmet>\n        <title>App - Zion Tech Group</title>\n        <meta name="description" content="App - Zion Tech Group" />\n      </Helmet>\n      <div className="container mx-auto px-4 py-16">\n        <div className="text-center">');
    // Fix missing closing tags
    content = content.replace(/<div className="text-center">\n/g, '<div className="text-center">\n');
    // Fix export statements
    content = content.replace(/export default AppPage;\n\n\n/g, 'export default AppPage;\n');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
// Function to recursively find and fix all files with merge conflicts
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  return fixedCount;
}
// Main execution
console.log('Starting merge conflict resolution...');
const fixedCount = findAndFixConflicts('/workspace');
console.log(`Fixed merge conflicts in ${fixedCount} files`);
// Also fix specific critical files
const criticalFiles = [
  '/workspace/vite.config.ts',
  '/workspace/App.tsx',
  '/workspace/app/App.tsx'
];
for (const file of criticalFiles) {
  if (fs.existsSync(file)) {
    if (fixMergeConflicts(file)) {
      console.log(`Fixed critical file: ${file}`);
    }
  }
}
console.log('Merge conflict resolution completed!');