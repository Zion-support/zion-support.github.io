const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing final JSX structure issues...');

let fixedFiles = 0;
let totalFiles = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed JSX return statements
    content = content.replace(/return\s*\(\s*<div[^>]*>\s*<div[^>]*>\s*<\/div>\s*<h2[^>]*>\s*<\/h2>/g, 'return (\n    <div className="max-w-2xl mx-auto">\n      <div className="bg-white rounded-lg shadow-lg p-8">\n        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">');
    
    // Fix malformed footer JSX
    content = content.replace(/<footer[^>]*>\s*<\/footer>\s*{/g, '<footer className="bg-slate-950 border-t border-white/10">\n      {');
    
    // Fix malformed layout JSX
    content = content.replace(/return\s*\(\s*<div[^>]*>\s*<header>\s*<EnhancedNavigation/g, 'return (\n    <div className="min-h-screen flex flex-col">\n      <header>\n        <EnhancedNavigation');
    
    // Fix malformed nav JSX
    content = content.replace(/}\s*`}>\s*<\/nav>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*{/g, '}\n      `}>\n      </nav>\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <div className="flex justify-between items-center h-20">\n          {');
    
    // Fix malformed footer JSX structure
    content = content.replace(/<footer[^>]*>\s*<\/footer>\s*{/g, '<footer className="bg-black/95 backdrop-blur-xl border-t border-purple-500/30">\n      {');
    
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