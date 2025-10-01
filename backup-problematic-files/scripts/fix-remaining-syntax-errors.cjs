#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix hover syntax errors
function fixHoverSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix various hover syntax patterns
    const patterns = [
      { from: /"hover":\s*/g, to: 'hover:' },
      { from: /"focus":\s*/g, to: 'focus:' },
      { from: /"group-hover":\s*/g, to: 'group-hover:' },
      { from: /"sm":\s*/g, to: 'sm:' },
      { from: /"md":\s*/g, to: 'md:' },
      { from: /"lg":\s*/g, to: 'lg:' },
      { from: /"xl":\s*/g, to: 'xl:' },
      { from: /"2xl":\s*/g, to: '2xl:' },
    ];
    
    patterns.forEach(pattern => {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
      }
    }
});
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
