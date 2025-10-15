#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing final import issues...');

// Function to fix all import issues
function fixFinalImports(content) {
  // Fix malformed import statements
  content = content.replace(/from '''([^']+)';'/g, "from '$1';");
  content = content.replace(/from '';''([^']+)';'/g, "from '$1';");
  content = content.replace(/from '';''([^']+)';'/g, "from '$1';");
  content = content.replace(/from '';''([^']+)';'/g, "from '$1';");
  content = content.replace(/from '';''([^']+)';'/g, "from '$1';");
  
  // Fix any remaining empty import patterns
  content = content.replace(/from '';'/g, "from ''");
  content = content.replace(/from '';'/g, "from ''");
  content = content.replace(/from '';'/g, "from ''");
  
  // Fix specific common patterns
  content = content.replace(/from '';''react-helmet-async';'/g, "from 'react-helmet-async';");
  content = content.replace(/from '';''@heroicons\/react\/24\/outline';'/g, "from '@heroicons/react/24/outline';");
  content = content.replace(/from '';''react-router-dom';'/g, "from 'react-router-dom';");
  content = content.replace(/from '';''react';'/g, "from 'react';");
  content = content.replace(/from '';''react-dom';'/g, "from 'react-dom';");
  content = content.replace(/from '';''framer-motion';'/g, "from 'framer-motion';");
  content = content.replace(/from '';''lucide-react';'/g, "from 'lucide-react';");
  
  // Fix any remaining patterns
  content = content.replace(/from '';''([^']+)';'/g, "from '$1';");
  content = content.replace(/from '';''([^']+)';'/g, "from '$1';");
  content = content.replace(/from '';''([^']+)';'/g, "from '$1';");
  
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
  console.log('📁 Scanning for files with final import issues...');
  
  const files = findFiles(process.cwd());
  let fixedCount = 0;
  let totalFiles = 0;
  
  for (const file of files) {
    totalFiles++;
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      content = fixFinalImports(content);
      
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
  
  console.log('\n🎉 Final import fix completed!');
}

main().catch(console.error);