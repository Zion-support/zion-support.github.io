const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining JSX syntax errors...');

let fixedFiles = 0;
let totalFiles = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed JSX return statements
    content = content.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*<div/g, 'return (\n    <div className="max-w-2xl mx-auto">\n      <div');
    
    // Fix missing closing tags in JSX
    content = content.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<h2[^>]*>\s*<\/h2>/g, '<div className="max-w-2xl mx-auto">\n      <div className="bg-white rounded-lg shadow-lg p-8">\n        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">');
    
    // Fix malformed JSX fragments
    content = content.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<h1[^>]*>\s*<\/h1>/g, 'return (\n    <div className="min-h-screen bg-slate-950 flex items-center justify-center">\n      <div className="text-center p-8">\n        <h1 className="text-4xl font-bold text-red-500 mb-4">');
    
    // Fix missing closing tags
    content = content.replace(/<div[^>]*>\s*<\/div>\s*<header>\s*<\/header>\s*<EnhancedNavigation/g, '<div className="min-h-screen flex flex-col">\n      <header>\n        <EnhancedNavigation');
    
    // Fix missing semicolons in object literals
    content = content.replace(/(\w+)\s*}\s*;\s*$/gm, '$1\n  };');
    
    // Fix malformed object properties
    content = content.replace(/(\w+):\s*(\w+)\s*$/gm, '$1: $2');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      totalFiles++;
      if (fixFile(fullPath)) {
        fixedFiles++;
        console.log(`✅ Fixed: ${fullPath}`);
      }
    }
  }
}

// Process components directory
processDirectory('/workspace/components');

console.log(`\n🎉 Fixed ${fixedFiles} out of ${totalFiles} files`);