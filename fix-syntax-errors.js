#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix missing commas in object literals and arrays
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n  $2:');
    content = content.replace(/(\w+)\s*\n\s*(\w+)\s*=/g, '$1,\n  $2 =');
    
    // Fix missing commas in JSX props
    content = content.replace(/(\w+)\s*\n\s*(\w+)=/g, '$1\n  $2=');
    
    // Fix misplaced imports - move them to the top
    const importLines = [];
    const otherLines = [];
    
    const lines = content.split('\n');
    let inImportSection = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (inImportSection && (line.startsWith('import ') || line.trim() === '')) {
        importLines.push(line);
      } else {
        inImportSection = false;
        otherLines.push(line);
      }
    }
    
    // Reconstruct content with imports at the top
    const newContent = [...importLines, ...otherLines].join('\n');
    if (newContent !== content) {
      content = newContent;
      fixed = true;
    }
    
    // Fix incomplete function calls and missing parentheses
    content = content.replace(/if\s*\(\s*root\s*\)\s*\{[^}]*$/gm, (match) => {
      if (!match.includes('ReactDOM.createRoot')) {
        return match + '\n  ReactDOM.createRoot(root).render(<App />);\n}';
      }
      return match;
    });
    
    // Fix incomplete service worker registration
    content = content.replace(/\/\/\s*navigator\.serviceWorker\.register/g, 'navigator.serviceWorker.register');
    
    // Fix missing closing braces and parentheses
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    if (openBraces > closeBraces) {
      content += '\n'.repeat(openBraces - closeBraces) + '}';
      fixed = true;
    }
    
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
      fixed = true;
    }
    
    // Fix common JSX syntax issues
    content = content.replace(/<(\w+)\s+(\w+)\s*=\s*\{([^}]+)\}\s*\/>/g, '<$1 $2={$3} />');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*\n\s*(\w+)/g, (match, p1, p2) => {
      if (p1.endsWith(';') || p1.endsWith('{') || p1.endsWith('}') || p1.endsWith(')')) {
        return match;
      }
      return p1 + ';\n' + p2;
    });
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('./src');
console.log(`Fixed syntax errors in ${fixedCount} files.`);

// Also fix other common files
const otherFiles = [
  './App.tsx',
  './main.tsx'
];

let otherFixedCount = 0;
for (const file of otherFiles) {
  if (fs.existsSync(file) && fixSyntaxErrors(file)) {
    otherFixedCount++;
  }
}

console.log(`Fixed syntax errors in ${otherFixedCount} additional files.`);
console.log(`Total files fixed: ${fixedCount + otherFixedCount}`);