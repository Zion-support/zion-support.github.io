#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Find all .tsx files in components directory
const componentsDir = '/workspace/src/components';
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

console.log(`Found ${files.length} component files to check`);

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix malformed animation properties that are outside of JSX attributes
  // Pattern: lines that start with whitespace and have animation properties like "scale:", "opacity:", etc.
  const animationPropertyRegex = /^\s+(scale|opacity|rotate|x|y|duration|repeat|delay|ease):\s*\[.*?\],?\s*$/gm;
  
  if (animationPropertyRegex.test(content)) {
    console.log(`Fixing animation errors in ${file}`);
    
    // Remove malformed animation properties
    content = content.replace(/^\s+(scale|opacity|rotate|x|y|duration|repeat|delay|ease):\s*\[.*?\],?\s*$/gm, '');
    
    // Clean up any leftover closing braces and commas
    content = content.replace(/^\s*},?\s*$/gm, '');
    
    modified = true;
  }

  // Fix "divdiv" typos
  if (content.includes('divdiv')) {
    console.log(`Fixing divdiv typos in ${file}`);
    content = content.replace(/divdiv/g, 'div');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

console.log('Animation error fixes completed');