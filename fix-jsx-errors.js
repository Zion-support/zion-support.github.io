#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common JSX syntax errors
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing tags by analyzing the structure
    const openTags = [];
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Track opening tags
      const openTagMatch = trimmedLine.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
      if (openTagMatch && !trimmedLine.includes('/>') && !trimmedLine.includes('</')) {
        openTags.push({
          tag: openTagMatch[1],
          line: i,
          indent: line.match(/^(\s*)/)[1]
        });
      }
      
      // Track closing tags
      const closeTagMatch = trimmedLine.match(/<\/(\w+)>/);
      if (closeTagMatch) {
        const tagName = closeTagMatch[1];
        // Find the matching opening tag
        for (let j = openTags.length - 1; j >= 0; j--) {
          if (openTags[j].tag === tagName) {
            openTags.splice(j, 1);
            break;
          }
        }
      }
      
      fixedLines.push(line);
    }
    
    // Add missing closing tags at the end
    if (openTags.length > 0) {
      const lastLine = fixedLines[fixedLines.length - 1];
      const baseIndent = lastLine.match(/^(\s*)/)[1];
      
      for (let i = openTags.length - 1; i >= 0; i--) {
        const tag = openTags[i];
        fixedLines.push(`${baseIndent}</${tag.tag}>`);
        modified = true;
      }
    }
    
    // Fix common syntax issues
    let fixedContent = fixedLines.join('\n');
    
    // Fix missing commas in object literals
    fixedContent = fixedContent.replace(/(\w+)\s*:\s*([^,}\n]+)\s*\n\s*(\w+)\s*:/g, '$1: $2,\n  $3:');
    
    // Fix missing closing parentheses in function calls
    fixedContent = fixedContent.replace(/(\w+)\s*\(\s*([^)]*)\s*\n\s*(\w+)/g, '$1($2)\n  $3');
    
    // Fix JSX fragments
    fixedContent = fixedContent.replace(/<>([^<]*?)<\//g, '<React.Fragment>$1</React.Fragment>');
    
    // Fix missing semicolons
    fixedContent = fixedContent.replace(/(\w+)\s*\n\s*(\w+)/g, (match, p1, p2) => {
      if (p1.endsWith(';') || p1.endsWith('{') || p1.endsWith('}') || p1.endsWith(')')) {
        return match;
      }
      return `${p1};\n  ${p2}`;
    });
    
    // Fix duplicate function declarations
    const functionNames = new Set();
    const lines2 = fixedContent.split('\n');
    const uniqueLines = [];
    
    for (const line of lines2) {
      const funcMatch = line.match(/function\s+(\w+)/);
      if (funcMatch) {
        const funcName = funcMatch[1];
        if (functionNames.has(funcName)) {
          // Skip duplicate function declarations
          continue;
        }
        functionNames.add(funcName);
      }
      uniqueLines.push(line);
    }
    
    fixedContent = uniqueLines.join('\n');
    
    if (modified || fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing JSX in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files with JSX errors
function findFilesWithJSXErrors(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting JSX error fixes...');

const jsxFiles = findFilesWithJSXErrors(process.cwd());
console.log(`Found ${jsxFiles.length} JSX files to check`);

let fixedCount = 0;
for (const file of jsxFiles) {
  if (fixJSXErrors(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Fixed JSX errors in ${fixedCount} files`);

// Run linting to check for remaining issues
console.log('Running linting to check for remaining issues...');
try {
  execSync('npm run lint:fix', { stdio: 'inherit' });
} catch (error) {
  console.log('Linting completed with some issues remaining');
}

console.log('JSX error fixes completed!');