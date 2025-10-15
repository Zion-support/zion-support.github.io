#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to clean merge conflict markers
function cleanMergeConflicts(content) {
  let cleaned = content;
  
  // Remove merge conflict markers
  cleaned = cleaned.replace(/^<<<<<<< HEAD$/gm, '');
  cleaned = cleaned.replace(/^=======$/gm, '');
  cleaned = cleaned.replace(/^>>>>>>> .*$/gm, '');
  
  // Remove empty lines that might be left behind
  cleaned = cleaned.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return cleaned;
}

// Function to fix common syntax issues
function fixCommonIssues(content) {
  let fixed = content;
  
  // Fix unterminated strings in JSX
  fixed = fixed.replace(/title="([^"]*)"\s*description="([^"]*)"\s*>\s*\/>/g, 
    'title="$1"\n        description="$2"\n      />');
  
  // Fix malformed JSX structures
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*<div\s+className="([^"]*)"\s*>\s*<h1\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+);/g,
    '<div className="$1">\n        <div className="$2">\n          <h1 className="$3">$4</h1>\n          <p className="$5">$6</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default $7;');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    let cleaned = cleanMergeConflicts(content);
    cleaned = fixCommonIssues(cleaned);
    
    fs.writeFileSync(filePath, cleaned, 'utf8');
    console.log(`Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const patterns = ['app/**/*.tsx', 'api/**/*.js'];
  let allFiles = [];
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern);
    allFiles = allFiles.concat(files);
  });
  
  console.log(`Found ${allFiles.length} files to process...`);
  
  let cleanedCount = 0;
  allFiles.forEach(file => {
    if (processFile(file)) {
      cleanedCount++;
    }
  });
  
  console.log(`Cleaned ${cleanedCount} files`);
}

main();