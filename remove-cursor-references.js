#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const removeCursorReferences = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove cursor references
    if (content.includes('cursor/analyze-improve-and-deploy-application')) {
      content = content.replace(/.*cursor\/analyze-improve-and-deploy-application.*\n/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Removed cursor references from ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
};

const files = [
  'app/support/page.tsx',
  'app/system-status/page.tsx',
  'app/security/page.tsx',
  'app/status/page.tsx',
  'app/news/page.tsx',
  'app/gdpr/page.tsx',
  'app/developer-tools/page.tsx',
  'app/docs/page.tsx'
];

files.forEach(removeCursorReferences);

console.log('✅ All files processed');