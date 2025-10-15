#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files with HTML entities
const files = glob.sync('app/**/*.tsx');

let fixedCount = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has HTML entities
    if (content.includes('&quot;') || content.includes('&amp;') || content.includes('&lt;') || content.includes('&gt;')) {
      console.log(`Fixing HTML entities in ${filePath}...`);
      
      // Replace HTML entities
      content = content.replace(/&quot;/g, '"');
      content = content.replace(/&amp;/g, '&');
      content = content.replace(/&lt;/g, '<');
      content = content.replace(/&gt;/g, '>');
      content = content.replace(/&#39;/g, "'");
      content = content.replace(/&apos;/g, "'");
      
      fs.writeFileSync(filePath, content);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed HTML entities in ${fixedCount} files.`);