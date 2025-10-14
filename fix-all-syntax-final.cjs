const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix extra semicolons in object properties
      { pattern: /',\s*;$/gm, replacement: "'," },
      { pattern: /",\s*;$/gm, replacement: '",' },
      // Fix missing quotes in imports
      { pattern: /from 'react-router-dom;$/gm, replacement: "from 'react-router-dom';" },
      { pattern: /from 'lucide-react;$/gm, replacement: "from 'lucide-react';" },
      { pattern: /from 'lucide-react';$/gm, replacement: "from 'lucide-react';" },
      // Fix array syntax
      { pattern: /\[\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)'\s*\]\s*;$/gm, replacement: "['$1', '$2', '$3', '$4']" },
      // Fix object syntax
      { pattern: /:\s*'([^']+)',\s*;$/gm, replacement: ": '$1'," },
      { pattern: /:\s*"([^"]+)",\s*;$/gm, replacement: ': "$1",' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixSyntaxErrors(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixSyntaxErrors(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting final comprehensive syntax error fixes...');
const fixedCount = findAndFixSyntaxErrors('.');
console.log(`Fixed syntax errors in ${fixedCount} files.`);
