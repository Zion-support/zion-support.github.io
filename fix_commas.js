#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix missing commas in object literals and arrays
function fixMissingCommas(content) {
  // Fix object properties missing commas
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
  content = content.replace(/(\w+):\s*([^,\n}]+)\n\s*}/g, '$1: $2\n  }');
  
  // Fix array elements missing commas
  content = content.replace(/([^,\n\]]+)\n\s*([^,\n\]]+)\n\s*]/g, '$1,\n    $2\n  ]');
  
  // Fix specific patterns
  content = content.replace(/icon: Brain\n\s*title:/g, 'icon: Brain,\n      title:');
  content = content.replace(/title: ([^,\n]+)\n\s*description:/g, 'title: $1,\n      description:');
  content = content.replace(/description: ([^,\n]+)\n\s*benefits:/g, 'description: $1,\n      benefits:');
  
  // Fix metadata objects
  content = content.replace(/title: ([^,\n]+)\n\s*description:/g, 'title: $1,\n  description:');
  content = content.replace(/description: ([^,\n]+)\n\s*keywords:/g, 'description: $1,\n  keywords:');
  content = content.replace(/keywords: ([^,\n]+)\n\s*openGraph:/g, 'keywords: $1,\n  openGraph:');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMissingCommas(content);
    
    // Only write if content changed
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

// Function to find all relevant files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and .next
          if (!['node_modules', '.next', '.git'].includes(item)) {
            traverse(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
function main() {
  const workspaceDir = process.cwd();
  console.log('Starting comma fixing...');
  
  // Find all relevant files
  const files = findFiles(workspaceDir);
  console.log(`Found ${files.length} files to process`);
  
  let fixedCount = 0;
  
  // Process each file
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
  console.log('Comma fixing completed!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixMissingCommas, processFile };