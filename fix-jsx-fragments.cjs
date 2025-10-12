const fs = require('fs');
const path = require('path');

// Function to fix JSX fragment errors in a file
function fixJSXFragment(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the problematic pattern
    if (content.includes('return (') && content.includes('<>') && !content.includes('</>')) {
      console.log(`Fixing ${filePath}`);
      
      // Extract the title from the content
      const titleMatch = content.match(/<title>([^<]+)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'Page - Zion Tech Group';
      
      // Extract the h1 content
      const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
      const h1Text = h1Match ? h1Match[1] : 'Page';
      
      // Extract the p content
      const pMatch = content.match(/<p[^>]*>([^<]+)<\/p>/);
      const pText = pMatch ? pMatch[1] : 'Professional services coming soon.';
      
      // Generate proper function name from file path
      const fileName = path.basename(filePath, '.tsx');
      const functionName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      
      // Create the fixed content
      const fixedContent = `import React from 'react';

export default function ${functionName}() {
  return (
    <>
      <title>${title}</title>
      <h1 className="text-4xl font-bold text-white mb-6">${h1Text}</h1>
      <p className="text-lg text-gray-300 mb-8">${pText}</p>
      <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Contact Us
      </a>
    </>
  );
}
`;
      
      fs.writeFileSync(filePath, fixedContent);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TSX files
function fixAllJSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllJSXFiles(filePath);
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      if (fixJSXFragment(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllJSXFiles(appDir);

console.log(`Fixed ${fixedCount} files with JSX fragment errors`);