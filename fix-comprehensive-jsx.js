const fs = require('fs');
const path = require('path');

// Function to fix common JSX syntax issues
function fixJSXIssues(content) {
  let fixed = content;

  // Fix JSX expressions must have one parent element
  if (fixed.includes('JSX expressions must have one parent element')) {
    // This is a complex fix that would need specific context
    // For now, we'll focus on other issues
  }

  // Fix unterminated string literals
  fixed = fixed.replace(/'([^']*)\n/g, "'$1'\n");
  fixed = fixed.replace(/"([^"]*)\n/g, '"$1"\n');

  // Fix missing semicolons
  fixed = fixed.replace(/([a-zA-Z0-9_\)\]\}])\s*\n/g, '$1;\n');

  // Fix missing commas in object literals
  fixed = fixed.replace(/([a-zA-Z0-9_\]\}])\s*\n\s*([a-zA-Z0-9_\[{])/g, '$1,\n  $2');

  // Fix missing closing tags
  fixed = fixed.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s[^>]*>(?!.*<\/\1>)/g, (match, tag) => {
    if (!match.includes('</' + tag + '>')) {
      return match + '</' + tag + '>';
    }
    return match;
  });

  // Fix property assignment issues
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}\n]+)\s*\n/g, '$1: $2,\n');

  // Fix declaration or statement expected
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{/g, 'export default function $1() {');

  // Fix expression expected
  fixed = fixed.replace(/=\s*{\s*}/g, '={}');

  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '\n' + '}'.repeat(openBraces - closeBraces);
  }

  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common patterns
    const originalContent = content;

    // Fix missing React import
    if (content.includes('JSX') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Fix missing closing tags
    if (content.includes('Expected corresponding JSX closing tag')) {
      // This is complex and would need specific context
      // For now, we'll skip these files
      return false;
    }

    // Apply general fixes
    content = fixJSXIssues(content);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all problematic files
function findProblematicFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findProblematicFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting comprehensive JSX fixes...');
const appDir = path.join(__dirname, 'app');
const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(__dirname, 'components');

const allFiles = [];
if (fs.existsSync(appDir)) allFiles.push(...findProblematicFiles(appDir));
if (fs.existsSync(srcDir)) allFiles.push(...findProblematicFiles(srcDir));
if (fs.existsSync(componentsDir)) allFiles.push(...findProblematicFiles(componentsDir));

let fixedCount = 0;
for (const file of allFiles) {
  if (fixSpecificFile(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} files out of ${allFiles.length} total files`);