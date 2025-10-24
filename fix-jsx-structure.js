const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix broken return statements with empty div followed by other elements
  fixed = fixed.replace(
    /return\s*\(\s*<div><\/div>\s*([^)]+)\s*\)/gs,
    (match, jsxContent) => {
      // Wrap all JSX content in a single parent element
      return `return (\n    <>\n      ${jsxContent.trim()}\n    </>\n  )`;
    }
  );
  
  // Fix JSX elements that are not properly nested
  fixed = fixed.replace(
    /<div><\/div>\s*<([A-Z][a-zA-Z0-9]*[^>]*)>/g,
    '<$1>'
  );
  
  // Fix missing closing tags for common patterns
  fixed = fixed.replace(
    /<div([^>]*)>\s*<div([^>]*)>\s*<h1([^>]*)>([^<]+);\s*<\/h1>/g,
    '<div$1>\n        <div$2>\n          <h1$3>$4</h1>'
  );
  
  // Fix semicolons in JSX text content
  fixed = fixed.replace(/>([^<]+);\s*</g, '>$1<');
  
  // Fix broken className attributes
  fixed = fixed.replace(/className="([^"]*),\s*([^"]*)"/g, 'className="$1 $2"');
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
  
  // Fix JSX fragments that need proper structure
  fixed = fixed.replace(
    /<>\s*<div><\/div>\s*<([A-Z][a-zA-Z0-9]*[^>]*)>/g,
    '<>\n      <$1>'
  );
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed JSX structure in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting JSX structure fix...');
const fixedCount = processDirectory('./app');
console.log(`Fixed JSX structure in ${fixedCount} files`);