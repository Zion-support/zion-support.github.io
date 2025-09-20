#!/usr/bin/env node

const fs = require('fs');

const filePath = '/workspace/data/2025-comprehensive-micro-saas-services.js';

console.log('Fixing micro SaaS data file syntax errors...');

let content = fs.readFileSync(filePath, 'utf8');

// Fix specific patterns found in the file
content = content
  // Fix semicolons to commas in object properties
  .replace(/(\w+): ([^,;]+);/g, '$1: $2,')
  .replace(/(\w+): ([^,;]+);/g, '$1: $2,')
  
  // Fix array syntax
  .replace(/\[,([^]]+)\]/g, '[$1]')
  .replace(/\[([^]]+);/g, '[$1]')
  
  // Fix object syntax
  .replace(/\{([^}]+);/g, '{$1}')
  .replace(/\{([^}]+),/g, '{$1}')
  
  // Fix trailing commas
  .replace(/,(\s*[}\]])/g, '$1')
  
  // Fix specific malformed patterns
  .replace(/, ([^,]+);/g, ', "$1"')
  .replace(/, ([^,]+)]/g, ', "$1"]')
  .replace(/, ([^,]+)}/g, ', "$1"}')
  
  // Clean up any remaining issues
  .replace(/, ,/g, ',')
  .replace(/,,/g, ',')
  .replace(/\s+/g, ' ')
  .replace(/\n\s*\n/g, '\n');

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('Micro SaaS syntax fixes applied successfully!');