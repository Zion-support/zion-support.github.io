const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove all duplicate export default function Page() declarations
    content = content.replace(/export\s+default\s+function\s+Page\(\)\s*\{[\s\S]*?\}/g, '');
    
    // Remove all duplicate export function Page() declarations
    content = content.replace(/export\s+function\s+Page\(\)\s*\{[\s\S]*?\}/g, '');
    
    // Fix malformed function declarations with imports inside
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\)\s*\{\s*import\s+\{([^}]+)\}\s+from\s+['"`]([^'"`]+)['"`];/g, "import { $2 } from '$3';");
    
    // Fix malformed function declarations
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\)\s*\{\s*import\s+\{/g, "import {");
    content = content.replace(/export\s+function\s+(\w+)\s*\(\)\s*\{\s*import\s+\{/g, "import {");
    
    // Fix import statements with extra spaces
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]([^'"`]+)['"`];/g, (match, imports, path) => {
      const cleanImports = imports.replace(/\s+/g, ' ').trim();
      return `import { ${cleanImports} } from '${path}';`;
    });
    
    // Fix import paths with spaces
    content = content.replace(/from\s+['"`]\.\.\/data\s*\/\s*([^'"`]+)['"`]/g, "from '../data/$1'");
    content = content.replace(/from\s+['"`]\.\.\/components\s*\/\s*([^'"`]+)['"`]/g, "from '../components/$1'");
    
    // Fix framer-motion imports
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]framer\s*-\s*motion['"`]/g, "import { $1 } from 'framer-motion'");
    
    // Fix lucide-react imports
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]lucide\s*-\s*react['"`]/g, "import { $1 } from 'lucide-react'");
    
    // Fix react-router-dom imports
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"`]react\s*-\s*router\s*-\s*dom['"`]/g, "import { $1 } from 'react-router-dom'");
    
    // Fix React imports
    content = content.replace(/import\s+React\s+from\s+['"`]react\.ts['"`]/g, "import React from 'react'");
    
    // Fix missing function declarations
    if (content.includes('import {') && !content.includes('export default function') && !content.includes('export function')) {
      content = content.replace(/^\s*import\s+\{[^}]*\}\s+from\s+['"`][^'"`]*['"`];\s*$/gm, (match) => {
        return match + "\nexport default function Page() {";
      });
    }
    
    // Fix missing closing braces
    if (content.includes('export default function') && !content.includes('}')) {
      content += '\n}';
    }
    
    // Fix JSX syntax issues
    content = content.replace(/return\s*\(/g, 'return (');
    content = content.replace(/return\s*\{/g, 'return {');
    
    // Remove empty lines and clean up
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
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

console.log('Starting final comprehensive syntax fixes...');
const fixedCount = processDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);