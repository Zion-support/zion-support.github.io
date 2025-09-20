#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing over-escaped quotes...');

// Function to fix over-escaped quotes
function fixOverEscapedQuotes(content) {
  let fixed = content;
  
  // Fix over-escaped quotes in imports and strings
  fixed = fixed.replace(/&quot;/g, '"');
  fixed = fixed.replace(/&apos;/g, "'");
  fixed = fixed.replace(/&lt;/g, '<');
  fixed = fixed.replace(/&gt;/g, '>');
  fixed = fixed.replace(/&amp;/g, '&');
  
  // Fix specific patterns that got over-escaped
  fixed = fixed.replace(/from &quot;([^&]+)&quot;/g, 'from "$1"');
  fixed = fixed.replace(/from &apos;([^&]+)&apos;/g, "from '$1'");
  fixed = fixed.replace(/className=&quot;([^&]+)&quot;/g, 'className="$1"');
  fixed = fixed.replace(/className=&apos;([^&]+)&apos;/g, "className='$1'");
  
  // Fix JSX attributes
  fixed = fixed.replace(/(\w+)=&quot;([^&]+)&quot;/g, '$1="$2"');
  fixed = fixed.replace(/(\w+)=&apos;([^&]+)&apos;/g, "$1='$2'");
  
  // Fix string literals
  fixed = fixed.replace(/&quot;([^&]+)&quot;/g, '"$1"');
  fixed = fixed.replace(/&apos;([^&]+)&apos;/g, "'$1'");
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixOverEscapedQuotes(content);
    
    // Only write if content changed
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✅ Fixed quotes in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .next, and other build directories
        if (!['node_modules', '.next', 'dist', 'build', 'out', 'coverage'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
async function main() {
  const srcDir = path.join(__dirname, 'src');
  const componentsDir = path.join(__dirname, 'components');
  
  console.log('📁 Finding source files...');
  const files = [
    ...findSourceFiles(srcDir),
    ...findSourceFiles(componentsDir)
  ];
  
  console.log(`📊 Found ${files.length} files to process`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`🎉 Fixed quotes in ${fixedCount} files`);
}

main().catch(console.error);