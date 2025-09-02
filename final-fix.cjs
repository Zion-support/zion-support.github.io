const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove duplicate export statements
    content = content.replace(/export\s+default\s+(\w+);\s*\n\s*export\s+function\s+\1\s*\(/g, "export default function $1(");
    
    // Fix malformed function declarations
    content = content.replace(/export\s+function\s+(\w+)\s*\(\)\s*\{\s*import\s+\{/g, "export function $1() {\n  import {");
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\)\s*\{\s*import\s+\{/g, "export default function $1() {\n  import {");
    
    // Fix import paths with spaces
    content = content.replace(/from\s+['"`]\.\.\/data\s*\/\s*([^'"`]+)['"`]/g, "from '../data/$1'");
    content = content.replace(/from\s+['"`]\.\.\/components\s*\/\s*([^'"`]+)['"`]/g, "from '../components/$1'");
    
    // Fix import statements with spaces
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]([^'"`]+)\s*-\s*([^'"`]+)['"`]/g, "import { $1 } from '$2-$3'");
    
    // Fix framer-motion imports
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]framer\s*-\s*motion['"`]/g, "import { $1 } from 'framer-motion'");
    
    // Fix lucide-react imports
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]lucide\s*-\s*react['"`]/g, "import { $1 } from 'lucide-react'");
    
    // Fix react-router-dom imports
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]react\s*-\s*router\s*-\s*dom['"`]/g, "import { $1 } from 'react-router-dom'");
    
    // Fix React imports
    content = content.replace(/import\s+React\s+from\s+['"`]react\.ts['"`]/g, "import React from 'react'");
    
    // Fix missing function declarations
    content = content.replace(/^\s*import\s+\{[^}]*\}\s+from\s+['"`][^'"`]*['"`];\s*$/gm, (match) => {
      return match + "\nexport default function Page() {";
    });
    
    // Fix missing closing braces
    if (content.includes('export default function') && !content.includes('}')) {
      content += '\n}';
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', '.next', 'out', 'dist'].includes(file)) {
        fixedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting final syntax fixes...');
const fixedCount = processDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);