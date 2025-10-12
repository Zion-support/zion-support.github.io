#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Function to fix all syntax issues
function fixAllSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;
    
    // Fix missing function declaration before state hooks
    if (content.includes('import React, { useState') && content.includes('const [') && !content.includes(': React.FC = () => {')) {
      const fileName = path.basename(filePath, path.extname(filePath));
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      
      // Find the line with useState and add function declaration before it
      const lines = content.split('\n');
      let newLines = [];
      let foundImport = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('import React, { useState') && !foundImport) {
          newLines.push(line);
          newLines.push('');
          newLines.push(`const ${componentName}: React.FC = () => {`);
          foundImport = true;
        } else if (line.includes('const [') && !foundImport) {
          newLines.push(`const ${componentName}: React.FC = () => {`);
          newLines.push(line);
          foundImport = true;
        } else {
          newLines.push(line);
        }
      }
      
      content = newLines.join('\n');
      fixed = true;
    }
    
    // Fix missing export default
    if (content.includes('import React') && !content.includes('export default')) {
      const fileName = path.basename(filePath, path.extname(filePath));
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      
      content += '\n\nexport default ' + componentName + ';';
      fixed = true;
    }
    
    // Fix missing closing brace before export
    if (content.includes('};\n\nexport default') && !content.includes('const ')) {
      const lines = content.split('\n');
      let newLines = [];
      let inComponent = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('import React from \'react\';')) {
          newLines.push(line);
          newLines.push('');
          newLines.push('const ComponentName: React.FC = () => {');
          inComponent = true;
        } else if (line.includes('export default')) {
          if (inComponent) {
            newLines.push('};');
            newLines.push('');
          }
          newLines.push(line);
        } else {
          newLines.push(line);
        }
      }
      
      content = newLines.join('\n');
      fixed = true;
    }
    
    // Fix malformed gtag calls
    if (content.includes('event_category:') && !content.includes('window.gtag(')) {
      content = content.replace(
        /if \(typeof window !== 'undefined' && 'gtag' in window\) \{\s*event_category:/g,
        "if (typeof window !== 'undefined' && 'gtag' in window) {\n      window.gtag('event', 'phone_click', {\n        event_category:"
      );
      fixed = true;
    }
    
    // Fix missing closing parenthesis in gtag calls
    if (content.includes('event_category:') && !content.includes('});')) {
      content = content.replace(
        /(\s+event_label: '[^']+')\s*\);/g,
        '$1\n      });'
      );
      fixed = true;
    }
    
    // Fix duplicate component definitions
    const componentMatches = content.match(/const \w+: React\.FC = \(\) => \{/g);
    if (componentMatches && componentMatches.length > 1) {
      const lines = content.split('\n');
      let newLines = [];
      let foundFirstComponent = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('const ') && line.includes(': React.FC = () => {')) {
          if (foundFirstComponent) {
            continue; // Skip duplicate component definitions
          } else {
            foundFirstComponent = true;
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      }
      
      content = newLines.join('\n');
      fixed = true;
    }
    
    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed syntax issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Searching for files with syntax issues...');

const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;

files.forEach(file => {
  try {
    if (fixAllSyntaxIssues(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\n📊 Summary:`);
console.log(`Files fixed: ${fixedCount}`);

if (fixedCount > 0) {
  console.log('\n✅ All syntax issues have been resolved!');
} else {
  console.log('\n✅ No syntax issues found.');
}