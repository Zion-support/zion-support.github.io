const fs = require('fs');
const path = require('path');

// Function to fix arrow function syntax errors
function fixArrowFunctionSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix specific malformed arrow functions
    content = content.replace(/\.map\([^)]*\) => \(\)/g, (match) => {
      return match.replace(/\(\)/g, '');
    }
});
    
    // Fix specific pattern: {feature.features.map((item, idx) => (}
    content = content.replace(/\{([^}]*\.map\([^)]*\) => \(\)\}/g, (match) => {
      return match.replace(/\(\)/g, '');
    }
});
    
    // Fix missing closing braces in function components
    if (content.includes('export default function') && !content.trim().endsWith('}')) {
      content = content.trim() + '\n}';
    }
    
    // Fix missing closing braces in arrow functions
    if (content.includes('const') && content.includes('=>') && !content.trim().endsWith('}')) {
      content = content.trim() + '\n}';
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed arrow function syntax in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing arrow function syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files in pages directory
function getAllPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllPageFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const pagesDir = '/workspace/pages';
const pageFiles = getAllPageFiles(pagesDir);

console.log(`Found ${pageFiles.length} page files to check for arrow function syntax errors...`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixArrowFunctionSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed arrow function syntax in ${fixedCount} files out of ${pageFiles.length} total files.`);