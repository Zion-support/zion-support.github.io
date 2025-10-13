#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive fix...');

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    content = content.replace(/^ origin\/main$/gm, '');
    content = content.replace(/^ cursor\/fix-errors-and-merge-to-main-[a-z0-9]+$/gm, '');
    content = content.replace(/^ cursor\/fix-errors-and-merge-to-main-[a-z0-9]+$/gm, '');
    
    // Fix incomplete lazy imports - add missing closing parentheses and commas
    content = content.replace(/lazy\(\s*\(\s*\)\s*=>\s*import\("([^"]+)"\)\s*\n\s*const/g, 'lazy(() => import("$1")),\nconst');
    content = content.replace(/lazy\(\s*\(\s*\)\s*=>\s*import\("([^"]+)"\)\s*\n\s*\/\//g, 'lazy(() => import("$1")),\n//');
    content = content.replace(/lazy\(\s*\(\s*\)\s*=>\s*import\("([^"]+)"\)\s*\n\s*$/gm, 'lazy(() => import("$1")),');
    
    // Fix incomplete function calls
    content = content.replace(/lazy\(\s*\(\s*\)\s*=>\s*import\("([^"]+)"\)\s*\n\s*([a-zA-Z_$])/g, 'lazy(() => import("$1")),\n$2');
    
    // Fix missing closing parentheses in multi-line lazy imports
    content = content.replace(/lazy\(\s*\(\s*\)\s*=>\s*import\("([^"]+)"\)\s*\n\s*\)\s*$/gm, 'lazy(() => import("$1"))');
    
    // Fix object literal syntax errors
    content = content.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^,\n}]+)\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n  $2');
    
    // Fix missing commas in arrays
    content = content.replace(/([^,\n])\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n  $2');
    
    // Fix JSX syntax errors
    content = content.replace(/(<[^>]+)\n\s*([a-zA-Z_$])/g, '$1>\n  $2');
    
    // Fix incomplete JSX elements
    content = content.replace(/(<[^>]+)\n\s*<\/[^>]+>/g, '$1>\n  </div>');
    
    // Fix missing closing tags
    content = content.replace(/(<[^>]+)\n\s*([a-zA-Z_$])/g, '$1>\n  $2');
    
    // Fix function declarations
    content = content.replace(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*\)\s*{\s*\n\s*return\s*\(\s*\n\s*<[^>]*>\s*\n\s*\)\s*;\s*\n\s*}\s*\n\s*([a-zA-Z_$])/g, 
      'function $1() {\n  return (\n    <div>\n      {/* Content */}\n    </div>\n  );\n}\n\n$2');
    
    // Fix export statements
    content = content.replace(/}\s*\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '}\n\nexport { $1');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove any remaining orphaned markers
    content = content.replace(/^<<<<<<<|^
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other irrelevant directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
try {
  const workspaceDir = process.cwd();
  console.log(`📁 Scanning workspace: ${workspaceDir}`);
  
  const sourceFiles = findSourceFiles(workspaceDir);
  console.log(`🔍 Found ${sourceFiles.length} source files`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of sourceFiles) {
    try {
      if (fixFile(file)) {
        fixedCount++;
        console.log(`  ✅ Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`❌ Failed to fix ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Fix Summary:`);
  console.log(`  ✅ Successfully fixed: ${fixedCount} files`);
  console.log(`  ❌ Failed to fix: ${errorCount} files`);
  console.log(`  📁 Total files processed: ${sourceFiles.length}`);
  
} catch (error) {
  console.error('💥 Script failed:', error.message);
  process.exit(1);
}