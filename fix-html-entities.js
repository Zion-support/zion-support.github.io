#!/usr/bin/env node

import fs from 'fs';

function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace HTML entities with proper JSX syntax
    content = content.replace(/\/&gt;/g, '/>');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    content = content.replace(/&amp;/g, '&');
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&#x27;/g, "'");
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed HTML entities in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix the app/App.tsx file
fixHtmlEntities('./app/App.tsx');