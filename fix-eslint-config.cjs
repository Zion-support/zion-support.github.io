#!/usr/bin/env node

const fs = require('fs');

const filePath = '/workspace/eslint.config.js';

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all HTML entities with proper quotes
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&amp;/g, '&');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✓ Fixed HTML entities in ESLint config');
} catch (error) {
  console.error('Error fixing ESLint config:', error.message);
}