#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Fixing array syntax issues...');

// Function to fix array syntax issues
function fixArraySyntax(content) {
  // Fix arrays that start with comma
  content = content.replace(/const (\w+) = \[\s*,\s*{/g, 'const $1 = [\n    {');
  content = content.replace(/const (\w+) = \[\s*,\s*'([^']+)'/g, 'const $1 = [\n    \'$2\'');
  
  // Fix missing commas before closing brackets
  content = content.replace(/([^,}])\s*\n\s*]/g, '$1\n  ]');
  
  // Fix missing commas in object arrays
  content = content.replace(/([^,}])\s*\n\s*{\s*icon:/g, '$1,\n    {\n      icon:');
  content = content.replace(/([^,}])\s*\n\s*{\s*title:/g, '$1,\n    {\n      title:');
  content = content.replace(/([^,}])\s*\n\s*{\s*description:/g, '$1,\n    {\n      description:');
  
  // Fix missing commas in string arrays
  content = content.replace(/([^,}])\s*\n\s*'([^']+)'\s*\n\s*]/g, '$1,\n    \'$2\'\n  ]');
  
  // Fix missing commas in object properties
  content = content.replace(/([^,}])\s*\n\s*}\s*\n\s*]/g, '$1\n  }\n  ]');
  
  // Fix arrays with trailing commas
  content = content.replace(/,\s*]/g, '\n  ]');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixArraySyntax(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
async function main() {
  try {
    console.log('📁 Finding files to process...');
    const files = findFiles('./app');
    
    console.log(`📊 Found ${files.length} files to process`);
    
    let fixedCount = 0;
    
    for (const file of files) {
      try {
        if (processFile(file)) {
          fixedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`\n📈 Results:`);
    console.log(`✅ Fixed: ${fixedCount} files`);
    
    console.log('\n🎉 Array syntax fix completed!');
    
  } catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
  }
}

main();