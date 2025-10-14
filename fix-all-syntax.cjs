const fs = require('fs');
const path = require('path');

function fixSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing commas in import statements
    content = content.replace(/(\w+)\n\s*(\w+)/g, (match, p1, p2, offset) => {
      // Check if we're inside an import statement
      const beforeMatch = content.substring(0, offset);
      const lastImport = beforeMatch.lastIndexOf('import {');
      const lastFrom = beforeMatch.lastIndexOf('} from');
      
      if (lastImport > lastFrom && lastImport !== -1) {
        return `${p1},\n  ${p2}`;
      }
      return match;
    });
    
    // Fix missing commas in object destructuring
    content = content.replace(/(\w+)\n\s*(\w+):/g, (match, p1, p2, offset) => {
      const beforeMatch = content.substring(0, offset);
      const lastBrace = beforeMatch.lastIndexOf('{');
      const lastParen = beforeMatch.lastIndexOf('(');
      
      if (lastBrace > lastParen && lastBrace !== -1) {
        return `${p1},\n  ${p2}:`;
      }
      return match;
    });
    
    // Fix missing semicolons
    content = content.replace(/from '@heroicons\/react\/24\/outline'\n/g, "from '@heroicons/react/24/outline';\n");
    content = content.replace(/from 'react-router-dom'\n/g, "from 'react-router-dom';\n");
    content = content.replace(/from 'react-helmet-async'\n/g, "from 'react-helmet-async';\n");
    content = content.replace(/from 'react'\n/g, "from 'react';\n");
    content = content.replace(/from 'lucide-react'\n/g, "from 'lucide-react';\n");
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*(\w+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
    content = content.replace(/(\w+):\s*'([^']+)'\n\s*(\w+):/g, "$1: '$2',\n      $3:");
    content = content.replace(/(\w+):\s*"([^"]+)"\n\s*(\w+):/g, '$1: "$2",\n      $3:');
    content = content.replace(/(\w+):\s*\[([^\]]+)\]\n\s*(\w+):/g, '$1: [$2],\n      $3:');
    
    // Fix missing commas in array elements
    content = content.replace(/(\w+)\n\s*(\w+):/g, '$1,\n      $2:');
    content = content.replace(/'([^']+)'\n\s*(\w+):/g, "'$1',\n      $2:");
    content = content.replace(/"([^"]+)"\n\s*(\w+):/g, '"$1",\n      $2:');
    
    // Fix function parameter destructuring
    content = content.replace(/(\w+)\n\s*(\w+)\s*=/g, '$1,\n  $2 =');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find all TypeScript files
const tsxFiles = findTsxFiles('/workspace/app');

// Fix syntax in each file
tsxFiles.forEach(fixSyntax);

console.log('Syntax issues fixed in all TypeScript files');