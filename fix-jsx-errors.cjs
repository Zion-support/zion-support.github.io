#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common JSX syntax errors
function fixJsxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix 1: Add missing closing tags for common patterns
    // Look for unclosed div, section, main tags
    const unclosedTagPatterns = [
      { open: '<div', close: '</div>' },
      { open: '<section', close: '</section>' },
      { open: '<main', close: '</main>' },
      { open: '<article', close: '</article>' },
      { open: '<header', close: '</header>' },
      { open: '<footer', close: '</footer>' },
      { open: '<nav', close: '</nav>' }
    ];
    
    // Fix 2: Fix JSX fragments - ensure proper opening and closing
    content = content.replace(/<>/g, '<React.Fragment>');
    content = content.replace(/<\/>/g, '</React.Fragment>');
    
    // Fix 3: Fix common syntax errors
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix missing semicolons in JSX expressions
    content = content.replace(/(\w+)\s*\n\s*<\/\w+>/g, '$1;\n  </');
    
    // Fix 4: Ensure proper JSX structure
    // Add missing React import if needed
    if (content.includes('React.FC') || content.includes('useState') || content.includes('useEffect')) {
      if (!content.includes("import React")) {
        content = "import React from 'react';\n" + content;
      }
    }
    
    // Fix 5: Fix malformed JSX attributes
    content = content.replace(/className=\s*{([^}]+)}\s*>/g, 'className={$1}>');
    content = content.replace(/className=\s*"([^"]+)"\s*>/g, 'className="$1">');
    
    // Fix 6: Fix unclosed JSX elements by adding proper closing tags
    // This is a more complex fix that requires parsing the structure
    const lines = content.split('\n');
    const fixedLines = [];
    const tagStack = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      fixedLines.push(line);
      
      // Check for opening tags
      const openTagMatch = line.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
      if (openTagMatch && !line.includes('/>')) {
        const tagName = openTagMatch[1];
        if (!['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
          tagStack.push(tagName);
        }
      }
      
      // Check for closing tags
      const closeTagMatch = line.match(/<\/(\w+)>/);
      if (closeTagMatch) {
        const tagName = closeTagMatch[1];
        const lastIndex = tagStack.lastIndexOf(tagName);
        if (lastIndex !== -1) {
          tagStack.splice(lastIndex, 1);
        }
      }
    }
    
    // Add missing closing tags at the end
    while (tagStack.length > 0) {
      const tag = tagStack.pop();
      fixedLines.push(`  </${tag}>`);
    }
    
    content = fixedLines.join('\n');
    
    // Fix 7: Clean up extra whitespace and empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed JSX errors in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with JSX errors
function findFilesWithJsxErrors() {
  try {
    const { execSync } = require('child_process');
    const result = execSync('find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    return [];
  }
}

// Main execution
console.log('🔧 Starting JSX error fixes...\n');

const filesToFix = findFilesWithJsxErrors();
console.log(`Found ${filesToFix.length} JSX files to check:\n`);

let fixedCount = 0;
let totalFiles = filesToFix.length;

filesToFix.forEach((filePath, index) => {
  console.log(`[${index + 1}/${totalFiles}] Processing ${filePath}`);
  
  if (fixJsxErrors(filePath)) {
    fixedCount++;
  }
});

console.log(`\n✅ JSX fixes complete!`);
console.log(`📊 Fixed errors in ${fixedCount} out of ${totalFiles} files`);