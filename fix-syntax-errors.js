#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix missing semicolons in import statements
    if (content.includes('import {') && !content.includes('} from')) {
      content = content.replace(/import\s*{\s*([^}]+)\s*export/g, 'import { $1 } from \'react\';\n\nexport');
      fixed = true;
    }

    // Fix malformed JSX with missing closing tags
    if (content.includes('<div";"')) {
      content = content.replace(/<div";"/g, '<div className="min-h-screen bg-white">');
      fixed = true;
    }

    // Fix malformed array declarations
    if (content.includes("'Feature',;")) {
      content = content.replace(/'([^']+)',;/g, "'$1',");
      fixed = true;
    }

    // Fix malformed object declarations
    if (content.includes('{ name: \'Name\', ;')) {
      content = content.replace(/\{\s*name:\s*'([^']+)',\s*;\s*price:\s*'([^']+)',\s*;\s*details:\s*\[([^\]]+)\]\s*\}/g, 
        '{\n    name: \'$1\',\n    price: \'$2\',\n    details: [$3]\n  }');
      fixed = true;
    }

    // Fix malformed return statements
    if (content.includes('return ();')) {
      content = content.replace(/return\s*\(\s*\)\s*;/g, 'return (\n    <div className="min-h-screen bg-white">\n      <h1>Service Page</h1>\n    </div>\n  );');
      fixed = true;
    }

    // Remove duplicate content (keep only the first occurrence)
    const lines = content.split('\n');
    const seen = new Set();
    const uniqueLines = [];
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (!seen.has(trimmed) || trimmed === '') {
        seen.add(trimmed);
        uniqueLines.push(line);
      }
    }
    
    if (uniqueLines.length < lines.length) {
      content = uniqueLines.join('\n');
      fixed = true;
    }

    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*):\s*([^"]*)"/g, 'className="$1-$2"');
    content = content.replace(/hover:\s*([^"]*)/g, 'hover:$1');

    if (fixed) {
      fs.writeFileSync(filePath, content);
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
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);