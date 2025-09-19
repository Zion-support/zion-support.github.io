#!/usr/bin/env node
const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/data/2025-advanced-innovative-services-expansion-v3.js', 'utf8');

// Fix common syntax issues
content = content
  // Add commas after object properties (but not after the last property in an object)
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  // Add commas after array items (but not after the last item)
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  // Fix array syntax
  .replace(/\[\s*,\s*/g, '[')
  .replace(/,\s*\]/g, ']')
  // Fix object syntax
  .replace(/{\s*,\s*/g, '{')
  .replace(/,\s*}/g, '}');

// Write the fixed content back
fs.writeFileSync('/workspace/data/2025-advanced-innovative-services-expansion-v3.js', content);

console.log('Fixed syntax issues in data file');