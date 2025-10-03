#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX syntax issues
    content = content
      // Fix malformed span tags
      .replace(/span>/g, 'span>')
      .replace(/\/span>/g, '/span>')
      // Fix malformed closing tags
      .replace(/\/>>/g, '/>')
      .replace(/>>/g, '>')
      // Fix unterminated strings
      .replace(/className="[^"]*$/gm, 'className="text-left">')
      // Fix missing closing tags
      .replace(/<span([^>]*)>([^<]*)<span>/g, '<span$1>$2</span>')
      // Fix malformed JSX elements
      .replace(/className="[^"]*"([^>]*)>/g, 'className="text-left">');
    
    // Ensure proper JSX structure
    const lines = content.split('\n');
    let fixedLines = [];
    let openTags = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Fix malformed lines
      if (line.includes('className="') && !line.includes('>')) {
        line = line.replace(/className="[^"]*$/, 'className="text-left">');
      }
      
      // Fix unterminated span tags
      if (line.includes('<span') && !line.includes('</span>') && !line.includes('/>')) {
        const nextLine = lines[i + 1];
        if (nextLine && nextLine.trim() && !nextLine.includes('</span>')) {
          line = line + '</span>';
        }
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const tsxFiles = findTsxFiles('/workspace');
let fixedCount = 0;

for (const file of tsxFiles) {
  if (fixJsxSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} out of ${tsxFiles.length} TSX files`);