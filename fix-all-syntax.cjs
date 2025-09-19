#!/usr/bin/env node
const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/data/2025-advanced-innovative-services-expansion-v3.js', 'utf8');

// Fix all remaining syntax issues
content = content
  // Fix concatenated array items
  .replace(/'([^']*)([A-Z][a-z][^']*)/g, (match, p1, p2) => {
    if (p1 && p2) {
      return `'${p1}', '${p2}'`;
    }
    return match;
  })
  // Fix array items that are missing commas
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  // Fix object properties missing commas
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  // Remove trailing commas before closing brackets/braces
  .replace(/,(\s*[}\]])/g, '$1')
  // Fix array syntax
  .replace(/\[\s*,\s*/g, '[')
  .replace(/,\s*\]/g, ']')
  // Fix object syntax
  .replace(/{\s*,\s*/g, '{')
  .replace(/,\s*}/g, '}');

// Write the fixed content back
fs.writeFileSync('/workspace/data/2025-advanced-innovative-services-expansion-v3.js', content);

console.log('Fixed all remaining syntax issues in data file');