#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting CSS class fixing...');

function fixCssClasses(content) {
  let fixed = content;
  let changes = 0;

  // Fix focus: outline-none issues
  fixed = fixed.replace(/focus:\s+outline-none/g, 'focus:outline-none');
  if (fixed !== content) changes++;

  // Fix other CSS class spacing issues
  fixed = fixed.replace(/\s+focus:/g, ' focus:');
  if (fixed !== content) changes++;

  // Fix trailing commas in className
  fixed = fixed.replace(/className="([^"]*),\s*"/g, 'className="$1"');
  if (fixed !== content) changes++;

  // Fix multiple spaces in className
  fixed = fixed.replace(/className="([^"]*)\s{2,}([^"]*)"/g, 'className="$1 $2"');
  if (fixed !== content) changes++;

  return { content: fixed, changes };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixCssClasses(content);
    
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8');
      console.log(`✅ Fixed ${result.changes} CSS issues in: ${filePath}`);
      return result.changes;
    }
    return 0;
  } catch (error) {
    console.log(`❌ Error processing ${filePath}: ${error.message}`);
    return 0;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const files = findTsxFiles('.');
let totalChanges = 0;

console.log(`📁 Found ${files.length} files to process...`);

for (const file of files) {
  totalChanges += processFile(file);
}

console.log(`\n🎉 CSS class fixing completed!`);
console.log(`📊 Total changes made: ${totalChanges}`);