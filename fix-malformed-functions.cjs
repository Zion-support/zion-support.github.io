#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files with the malformed return; pattern
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;

files.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file has the malformed pattern
    if (content.includes('return;\n},')) {
      console.log(`Fixing ${filePath}...`);
      
      // Split the content into lines
      const lines = content.split('\n');
      let newLines = [];
      let inFunction = false;
      let braceCount = 0;
      let foundReturn = false;
      let foundComma = false;
      let variableDeclarations = [];
      let jsxContent = [];
      let inJSX = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Detect function start
        if (line.includes('export default function') && !inFunction) {
          inFunction = true;
          newLines.push(line);
          continue;
        }
        
        // Detect the malformed return; pattern
        if (inFunction && line.trim() === 'return;' && !foundReturn) {
          foundReturn = true;
          // Skip this line and the next comma line
          i++; // Skip the comma line
          continue;
        }
        
        // After finding return;, collect variable declarations until we find JSX
        if (foundReturn && !inJSX) {
          if (line.trim().startsWith('const ') || line.trim().startsWith('let ') || line.trim().startsWith('var ')) {
            variableDeclarations.push(line);
            continue;
          }
          
          // Look for JSX start (usually starts with < or return)
          if (line.trim().startsWith('<') || line.trim().startsWith('return (') || line.trim().startsWith('return(')) {
            inJSX = true;
            jsxContent.push(line);
            continue;
          }
          
          // If we're still collecting variable declarations
          if (line.trim() !== '' && !line.trim().startsWith('//')) {
            variableDeclarations.push(line);
            continue;
          }
        }
        
        // Collect JSX content
        if (inJSX) {
          jsxContent.push(line);
          continue;
        }
        
        // If we haven't found the malformed pattern yet, keep the line
        if (!foundReturn) {
          newLines.push(line);
        }
      }
      
      // Reconstruct the file
      let newContent = [];
      
      // Add imports and function declaration
      for (let i = 0; i < newLines.length; i++) {
        newContent.push(newLines[i]);
        if (newLines[i].includes('export default function')) {
          break;
        }
      }
      
      // Add opening brace
      newContent.push('  {');
      
      // Add variable declarations
      if (variableDeclarations.length > 0) {
        newContent.push('');
        newContent.push('  // Data definitions');
        variableDeclarations.forEach(decl => {
          newContent.push('  ' + decl);
        });
        newContent.push('');
      }
      
      // Add JSX return
      if (jsxContent.length > 0) {
        newContent.push('  return (');
        jsxContent.forEach(jsxLine => {
          newContent.push(jsxLine);
        });
      }
      
      // Write the fixed content
      fs.writeFileSync(fullPath, newContent.join('\n'));
      fixedCount++;
      console.log(`✓ Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files.`);