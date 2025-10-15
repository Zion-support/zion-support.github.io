#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all remaining import issues...');

// Function to fix import statements
function fixImports(content) {
  // Fix import statements with missing quotes
  content = content.replace(/import\s+([^'"]+)\s+from\s+([^'";\n]+);?/g, (match, imports, module) => {
    if (!module.startsWith("'") && !module.startsWith('"')) {
      return `import ${imports} from '${module.trim()}';`;
    }
    return match;
  });
  
  // Fix destructuring imports
  content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*([^'";\n]+);?/g, (match, imports, module) => {
    if (!module.startsWith("'") && !module.startsWith('"')) {
      return `import { ${imports} } from '${module.trim()}';`;
    }
    return match;
  });
  
  // Fix specific common patterns
  content = content.replace(/from\s+react;/g, "from 'react';");
  content = content.replace(/from\s+react-dom;/g, "from 'react-dom';");
  content = content.replace(/from\s+react-router-dom;/g, "from 'react-router-dom';");
  content = content.replace(/from\s+react-helmet-async;/g, "from 'react-helmet-async';");
  content = content.replace(/from\s+@heroicons\/react;/g, "from '@heroicons/react';");
  content = content.replace(/from\s+lucide-react;/g, "from 'lucide-react';");
  content = content.replace(/from\s+framer-motion;/g, "from 'framer-motion';");
  
  // Fix relative imports
  content = content.replace(/from\s+\.\/app\//g, "from './app/");
  content = content.replace(/from\s+\.\/components\//g, "from './components/");
  content = content.replace(/from\s+\.\/utils\//g, "from './utils/");
  content = content.replace(/from\s+\.\/hooks\//g, "from './hooks/");
  content = content.replace(/from\s+\.\/types\//g, "from './types/");
  content = content.replace(/from\s+\.\/data\//g, "from './data/");
  content = content.replace(/from\s+\.\/contexts\//g, "from './contexts/");
  content = content.replace(/from\s+\.\.\//g, "from '../");
  content = content.replace(/from\s+\.\.\/\.\.\//g, "from '../../");
  
  // Fix object properties
  content = content.replace(/(\w+):\s*'([^']+)',/g, "$1: '$2',");
  content = content.replace(/(\w+):\s*([^,}]+),/g, (match, key, value) => {
    if (!value.startsWith("'") && !value.startsWith('"') && !value.startsWith('{') && !value.includes('(')) {
      return `${key}: '${value.trim()}',`;
    }
    return match;
  });
  
  // Fix JSX attributes
  content = content.replace(/(\w+)=([^'">\s]+)(?=\s|>)/g, (match, attr, value) => {
    if (!value.startsWith("'") && !value.startsWith('"') && !value.startsWith('{')) {
      return `${attr}='${value}'`;
    }
    return match;
  });
  
  // Fix className attributes
  content = content.replace(/className=([^'">\s]+)/g, (match, className) => {
    if (!className.startsWith("'") && !className.startsWith('"')) {
      return `className='${className}'`;
    }
    return match;
  });
  
  // Remove extra semicolons
  content = content.replace(/;+/g, ';');
  content = content.replace(/;\s*;/g, ';');
  content = content.replace(/;\s*$/gm, ';');
  
  // Fix JSX closing tags
  content = content.replace(/<\/\s*([^>]+)\s*;/g, '</$1>');
  
  // Fix function declarations
  content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*;\s*{/g, 'function $1() {');
  content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*;\s*{/g, 'export default function $1() {');
  
  // Fix array syntax
  content = content.replace(/\[\s*;\s*\]/g, '[]');
  content = content.replace(/\[\s*([^,\]]+);\s*\]/g, '[$1]');
  
  // Clean up whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/^\s+$/gm, '');
  
  return content;
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories we can't read
  }
  
  return files;
}

// Main execution
async function main() {
  console.log('📁 Scanning for files with import issues...');
  
  const files = findFiles(process.cwd());
  let fixedCount = 0;
  let totalFiles = 0;
  
  for (const file of files) {
    totalFiles++;
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      content = fixImports(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      // Skip files we can't read
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  console.log('\n🎉 Import fix completed!');
}

main().catch(console.error);