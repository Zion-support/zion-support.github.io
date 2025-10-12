const fs = require('fs');
const path = require('path');

// Function to fix common JSX issues in a file
function fixJSXIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing function declaration
    if (content.includes('return (') && !content.includes('export default function')) {
      const lines = content.split('\n');
      let functionName = 'Page';
      
      // Try to extract function name from file path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2]; // Get directory name
      if (fileName) {
        functionName = fileName.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page';
      }

      // Find the return statement and add function declaration before it
      const returnIndex = lines.findIndex(line => line.trim().startsWith('return ('));
      if (returnIndex > 0) {
        lines.splice(returnIndex, 0, `export default function ${functionName}() {`);
        lines.push('}');
        modified = true;
      }
    }

    // Fix JSX without parent element
    if (content.includes('JSX expressions must have one parent element') || 
        (content.includes('<title>') && !content.includes('<>'))) {
      
      // Wrap content in React fragment if it starts with <title> or similar
      if (content.includes('<title>') && !content.includes('<>')) {
        content = content.replace(
          /(\s*return\s*\(\s*)(<title>)/,
          '$1<>\n      $2'
        );
        
        // Add closing fragment before the last closing parenthesis
        content = content.replace(
          /(\s*)(\s*\)\s*;?\s*$)/,
          '$1    </>\n  );'
        );
        modified = true;
      }
    }

    // Fix missing imports
    if (content.includes('Helmet') && !content.includes("import { Helmet }")) {
      const importIndex = content.indexOf("import React");
      if (importIndex !== -1) {
        const nextLineIndex = content.indexOf('\n', importIndex);
        content = content.slice(0, nextLineIndex) + 
          '\nimport { Helmet } from \'react-helmet-async\';' + 
          content.slice(nextLineIndex);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page.tsx files
function getAllPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        files.push(pageFile);
      }
      // Recursively search subdirectories
      files.push(...getAllPageFiles(fullPath));
    }
  }
  
  return files;
}

// Fix all page files
const appDir = path.join(__dirname, 'app');
const pageFiles = getAllPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files to check...`);

let fixedCount = 0;
pageFiles.forEach(file => {
  if (fixJSXIssues(file)) {
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);