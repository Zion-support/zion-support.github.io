#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing import statements...');

// Function to fix import statements in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix import statements - add missing quotes
    content = content.replace(/import\s+([^'"]+)\s+from\s+([^'";\n]+);?/g, (match, imports, module) => {
      // If module doesn't start with quote, add quotes
      if (!module.startsWith("'") && !module.startsWith('"')) {
        return `import ${imports} from '${module.trim()}';`;
      }
      return match;
    });
    
    // Fix specific patterns
    content = content.replace(/from\s+([^'";\n]+);/g, (match, module) => {
      if (!module.startsWith("'") && !module.startsWith('"') && !module.startsWith('.')) {
        return `from '${module.trim()}';`;
      }
      return match;
    });
    
    // Fix relative imports
    content = content.replace(/from\s+\.([^'";\n]+);/g, (match, module) => {
      if (!module.startsWith("'") && !module.startsWith('"')) {
        return `from '.${module.trim()}';`;
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
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
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
    if (fixImports(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  console.log('\n🎉 Import fix completed!');
}

main().catch(console.error);