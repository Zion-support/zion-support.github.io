#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax issues after merge conflict resolution
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Fix missing semicolons after array declarations
      if (line.trim().endsWith(']') && !line.trim().endsWith('];')) {
        if (i + 1 < lines.length && lines[i + 1].trim() === '') {
          line = line.replace(/\s*$/, ';');
          modified = true;
        }
      }
      
      // Fix JSX syntax issues
      if (line.includes('<>') && !line.includes('</>')) {
        // Try to find matching closing tag
        let depth = 0;
        let j = i;
        while (j < lines.length) {
          if (lines[j].includes('<>')) depth++;
          if (lines[j].includes('</>')) depth--;
          if (depth === 0) break;
          j++;
        }
        if (j >= lines.length) {
          // Add closing tag
          line = line.replace('<>', '<React.Fragment>');
          modified = true;
        }
      }
      
      // Fix unclosed JSX tags
      if (line.includes('<') && !line.includes('</') && !line.includes('/>')) {
        const tagMatch = line.match(/<(\w+)([^>]*)>/);
        if (tagMatch) {
          const tagName = tagMatch[1];
          // Check if it's a self-closing tag
          if (!['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName.toLowerCase())) {
            // Look for closing tag in the next few lines
            let foundClosing = false;
            for (let k = i + 1; k < Math.min(i + 10, lines.length); k++) {
              if (lines[k].includes(`</${tagName}>`)) {
                foundClosing = true;
                break;
              }
            }
            if (!foundClosing) {
              // This might be a self-closing tag that needs to be fixed
              if (line.includes('className=') || line.includes('id=') || line.includes('onClick=')) {
                line = line.replace(/>$/, ' />');
                modified = true;
              }
            }
          }
        }
      }
      
      // Fix missing commas in arrays
      if (line.trim().endsWith(']') && i > 0) {
        const prevLine = lines[i - 1].trim();
        if (prevLine && !prevLine.endsWith(',') && !prevLine.endsWith('[') && !prevLine.endsWith('{')) {
          // Check if this is part of an array
          let j = i - 1;
          while (j >= 0 && lines[j].trim() !== '') {
            if (lines[j].trim().endsWith('[')) break;
            j--;
          }
          if (j >= 0 && lines[j].trim().endsWith('[')) {
            // This is part of an array, add comma to previous line
            lines[i - 1] = lines[i - 1].replace(/\s*$/, ',');
            modified = true;
          }
        }
      }
      
      // Fix broken JSX expressions
      if (line.includes('{') && !line.includes('}')) {
        // Look for matching closing brace
        let braceCount = 0;
        let j = i;
        while (j < lines.length && j < i + 5) {
          for (const char of lines[j]) {
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
          }
          if (braceCount === 0) break;
          j++;
        }
        if (braceCount !== 0) {
          // Add closing brace
          line = line + '}';
          modified = true;
        }
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, fixedLines.join('\n'));
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithErrors(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

function main() {
  console.log('Starting syntax error fixes...');
  
  const files = findFilesWithErrors('.');
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed syntax errors in ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, findFilesWithErrors };