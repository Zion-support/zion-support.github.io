#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  const seenImports = new Set();
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      const importKey = line.trim();
      if (!seenImports.has(importKey)) {
        seenImports.add(importKey);
        importLines.push(line);
      }
    } else {
      otherLines.push(line);
    }
  }
  
  return [...importLines, ...otherLines].join('\n');
}

// Function to remove unreachable code after return statements
function removeUnreachableCode(content) {
  const lines = content.split('\n');
  let inFunction = false;
  let foundReturn = false;
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('export default function') || line.includes('function ')) {
      inFunction = true;
      foundReturn = false;
    }
    
    if (inFunction && line.trim().startsWith('return ')) {
      foundReturn = true;
    }
    
    if (inFunction && foundReturn && line.trim() === '}') {
      inFunction = false;
      foundReturn = false;
    }
    
    if (inFunction && foundReturn && !line.trim().startsWith('//') && line.trim() !== '' && !line.trim().startsWith('return')) {
      // Skip unreachable code
      continue;
    }
    
    result.push(line);
  }
  
  return result.join('\n');
}

// Function to fix duplicate variable declarations
function fixDuplicateVariables(content) {
  const lines = content.split('\n');
  const seenVars = new Set();
  const result = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('const ') || trimmed.startsWith('let ') || trimmed.startsWith('var ')) {
      const varName = trimmed.split(' ')[1]?.split('=')[0]?.trim();
      if (varName && seenVars.has(varName)) {
        // Skip duplicate variable declaration
        continue;
      }
      if (varName) {
        seenVars.add(varName);
      }
    }
    result.push(line);
  }
  
  return result.join('\n');
}

// Main function
function main() {
  const files = glob.sync('app/**/*.tsx', { cwd: __dirname });
  
  for (const file of files) {
    try {
      const filePath = path.join(__dirname, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Apply fixes
      content = fixDuplicateImports(content);
      content = removeUnreachableCode(content);
      content = fixDuplicateVariables(content);
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${file}`);
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
    }
  }
}

main();