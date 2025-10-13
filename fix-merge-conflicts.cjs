#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common merge conflict issues
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/[\s\S]*?  content = content.replace(/  // Fix common syntax issues
  content = content.replace(/\}\s*\)\s*}/g, '})}'); // Fix })}
  content = content.replace(/\}\s*\)\s*\)/g, '}))'); // Fix }))
  content = content.replace(/\}\s*\)\s*\)\s*\)/g, '})))'); // Fix })))
  content = content.replace(/\}\s*\)\s*\)\s*\)\s*\)/g, '}))))'); // Fix }))))
  
  // Fix missing semicolons after imports
  content = content.replace(/import[^;]+from[^;]+(?=\n)/g, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/(const|let|var)\s+[^=]+=[^;]+(?=\n)/g, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix JSX closing tags
  content = content.replace(/>\s*}/g, '>}');
  content = content.replace(/>\s*\)/g, '>)');
  
  // Fix function declarations
  content = content.replace(/function\s+[^{]+{\s*}/g, (match) => {
    return match.replace(/\s*}/, ' {}');
  });
  
  // Fix arrow functions
  content = content.replace(/=>\s*{\s*}/g, ' => {}');
  
  // Remove extra whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n([\s\S]*?)    
    // Remove any remaining conflict markers
    content = content.replace(/    content = content.replace(/
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');

    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
    } else {
      console.log(`No conflicts found in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting merge conflict resolution...');

filesWithConflicts.forEach(filePath => {
  fixMergeConflicts(filePath);
});

console.log('Merge conflict resolution completed!');
