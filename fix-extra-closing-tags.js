#!/usr/bin/env node

import fs from 'fs';

function fixExtraClosingTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix extra closing Route tags
    content = content.replace(/\/><\/Route>/g, '/>');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed extra closing tags in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix the app/App.tsx file
fixExtraClosingTags('./app/App.tsx');