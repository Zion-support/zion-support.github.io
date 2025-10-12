#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix fragment tag issues
function fixFragmentTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has fragment tag issues
    if (!content.includes('</>') && !content.includes('<>')) {
      return false;
    }
    
    console.log(`Checking fragment tags in: ${filePath}`);
    
    // Fix cases where there's a closing fragment tag but opening div
    // Pattern: opening div, content, closing fragment
    content = content.replace(/<div[^>]*>([\s\S]*?)<\/>/g, (match, innerContent) => {
      // Check if this is actually a fragment that should be a div
      if (innerContent.includes('<div') && !innerContent.includes('</div>')) {
        modified = true;
        return `<div>${innerContent}</div>`;
      }
      return match;
    });
    
    // Fix cases where there are orphaned closing fragment tags
    content = content.replace(/\s*<\/>\s*$/gm, '');
    
    // Fix cases where there are orphaned opening fragment tags
    content = content.replace(/^\s*<>\s*$/gm, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed fragment tags in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all files that might have fragment tag issues
function findFilesWithFragmentIssues() {
  const files = [];
  
  function searchDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('</>') || content.includes('<>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory('.');
  return files;
}

// Main execution
console.log('Starting fragment tag fix...');

const filesWithFragmentIssues = findFilesWithFragmentIssues();
console.log(`Found ${filesWithFragmentIssues.length} files with potential fragment tag issues`);

let fixedCount = 0;
filesWithFragmentIssues.forEach(file => {
  if (fixFragmentTags(file)) {
    fixedCount++;
  }
});

console.log(`Fixed fragment tags in ${fixedCount} files`);
console.log('Fragment tag fix complete!');