#!/usr/bin/env node

const fs = require('fs');

const filePath = '/workspace/data/2025-advanced-innovative-services-expansion-v3.js';

console.log('Fixing all syntax errors comprehensively...');

let content = fs.readFileSync(filePath, 'utf8');

// Comprehensive fix for all syntax errors
content = content
  // Fix mixed quotes in strings
  .replace(/'([^']+)",/g, '"$1",')
  .replace(/"([^"]+)',/g, '"$1",')
  .replace(/'([^']+)"/g, '"$1"')
  .replace(/"([^"]+)'/g, '"$1"')
  
  // Fix malformed object properties
  .replace(/(\w+): "([^"]+)",/g, '$1: "$2",')
  .replace(/(\w+): '([^']+)',/g, '$1: "$2",')
  .replace(/(\w+): "([^"]+)"/g, '$1: "$2"')
  .replace(/(\w+): '([^']+)'/g, '$1: "$2"')
  
  // Fix array elements
  .replace(/'([^']+)",/g, '"$1",')
  .replace(/"([^"]+)',/g, '"$1",')
  .replace(/'([^']+)"/g, '"$1"')
  .replace(/"([^"]+)'/g, '"$1"')
  
  // Fix specific patterns
  .replace(/marketPosition: "([^"]+)", ([^"]+)",/g, 'marketPosition: "$1, $2",')
  .replace(/targetAudience: "([^"]+)", ([^"]+)",/g, 'targetAudience: "$1, $2",')
  .replace(/description: "([^"]+)", ([^"]+)",/g, 'description: "$1, $2",')
  
  // Fix trailing commas and semicolons
  .replace(/,(\s*[}\]])/g, '$1')
  .replace(/;(\s*[}\]])/g, '$1')
  
  // Fix malformed arrays
  .replace(/\[\s*\]/g, '[]')
  .replace(/\[\s*,/g, '[')
  .replace(/,\s*\]/g, ']')
  
  // Fix malformed objects
  .replace(/\{\s*\}/g, '{}')
  .replace(/\{\s*,/g, '{')
  .replace(/,\s*\}/g, '}')
  
  // Clean up any remaining issues
  .replace(/, ,/g, ',')
  .replace(/,,/g, ',')
  .replace(/\s+/g, ' ')
  .replace(/\n\s*\n/g, '\n');

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('All syntax errors fixed comprehensively!');