const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find all .tsx files in the app directory
const files = findTsxFiles('/workspace/app');

let fixedCount = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove Helmet import
    if (content.includes("import { Helmet } from 'react-helmet-async'")) {
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
      modified = true;
    }
    
    // Remove Helmet usage
    if (content.includes('<Helmet>')) {
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\n?/g, '');
      modified = true;
    }
    
    // Fix return statement structure - remove empty fragments
    if (content.includes('return (\n    <>\n      <div className="min-h-screen')) {
      content = content.replace(/return \(\s*<>\s*<div className="min-h-screen/g, 'return (\n    <div className="min-h-screen');
      modified = true;
    }
    
    // Fix closing tags - remove empty fragments
    if (content.includes('</div>\n    </>\n  );')) {
      content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');
      modified = true;
    }
    
    // Fix background colors to dark theme
    if (content.includes('from-slate-50 to-')) {
      content = content.replace(/from-slate-50 to-[^"]*"/g, 'from-slate-900 via-purple-900 to-slate-900"');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath.replace('/workspace/', '')}`);
      fixedCount++;
    }
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
});

console.log(`\nFixed ${fixedCount} files!`);