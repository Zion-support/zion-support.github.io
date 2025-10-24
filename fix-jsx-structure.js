const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix missing closing tags by ensuring proper JSX structure
  // First, let's ensure all opening tags have corresponding closing tags
  
  // Fix common patterns where divs are not properly closed
  fixed = fixed.replace(/<div([^>]*)>\s*<\/div>\s*<div([^>]*)>/g, '<div$1>\n        <div$2>');
  
  // Fix missing closing tags for specific elements
  fixed = fixed.replace(/<div([^>]*)>\s*<\/div>\s*<div([^>]*)>\s*<\/div>/g, '<div$1>\n        <div$2></div>\n      </div>
      </div></div>');
  
  // Fix broken JSX elements
  fixed = fixed.replace(/<(\w+)\s*;\s*>/g, '<$1>');
  fixed = fixed.replace(/<\/\w+>\s*;\s*$/gm, '');
  
  // Ensure proper JSX structure with single parent element
  // If there are multiple top-level elements, wrap them in a fragment or div
  const lines = fixed.split('\n');
  let inReturn = false;
  let returnStart = -1;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('return (')) {
      inReturn = true;
      returnStart = i;
      braceCount = 0;
    }
    
    if (inReturn) {
      // Count braces to find the end of return statement
      for (const char of line) {
        if (char === '(') braceCount++;
        if (char === ')') braceCount--;
      }
      
      // If we've closed all braces, we're done with return
      if (braceCount === 0 && line.includes(')')) {
        inReturn = false;
        break;
      }
    }
  }
  
  // If we found a return statement, check if it needs wrapping
  if (returnStart !== -1) {
    const returnLines = lines.slice(returnStart);
    const returnContent = returnLines.join('\n');
    
    // Check if there are multiple top-level elements
    const topLevelElements = returnContent.match(/^\s*<[A-Z][^>]*>/gm) || [];
    
    if (topLevelElements.length > 1) {
      // Wrap in a fragment
      const newReturnContent = returnContent.replace(
        /return\s*\(\s*([\s\S]*?)\s*\)/,
        'return (\n    <>\n      $1\n    </>\n  )'
      );
      
      // Replace the return statement
      fixed = fixed.replace(returnContent, newReturnContent);
    }
  }
  
  return fixed;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixJSXStructure(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting JSX structure fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);