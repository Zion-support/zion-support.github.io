#!/usr/bin/env node
const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/data/2025-advanced-innovative-services-expansion-v3.js', 'utf8');

// Fix malformed strings created by the previous script
content = content
  // Fix strings that were split incorrectly
  .replace(/'([^']*)\s*',\s*'([^']*)''/g, "'$1 $2'")
  .replace(/'([^']*)\s*',\s*'([^']*)''/g, "'$1 $2'")
  .replace(/'([^']*)\s*',\s*'([^']*)''/g, "'$1 $2'")
  // Fix any remaining malformed quotes
  .replace(/''/g, "'")
  .replace(/''/g, "'");

// Write the fixed content back
fs.writeFileSync('/workspace/data/2025-advanced-innovative-services-expansion-v3.js', content);

console.log('Fixed malformed strings in data file');