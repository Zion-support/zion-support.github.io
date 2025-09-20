#!/usr/bin/env node
const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/data/2025-advanced-innovative-services-expansion-v3.js', 'utf8');

// Fix all remaining issues
content = content
  // Fix all object properties missing commas
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  .replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:')
  // Fix all array items missing commas
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  .replace(/(\s*)'([^']+)'\n(\s*)'([^']+)'/g, '$1\'$2\',\n$3\'$4\'')
  // Fix contactInfo objects
  .replace(/contactInfo: {/g, 'contactInfo: {')
  .replace(/mobile: '\+1 302 464 0950',/g, 'mobile: \'+1 302 464 0950\',')
  .replace(/email: 'kleber@ziontechgroup.com',/g, 'email: \'kleber@ziontechgroup.com\',')
  .replace(/address: '364 E Main St STE 1008 Middletown DE 19709',/g, 'address: \'364 E Main St STE 1008 Middletown DE 19709\',')
  .replace(/website: 'https:\/\/ziontechgroup.com'/g, 'website: \'https://ziontechgroup.com\'')
  // Remove trailing commas before closing brackets/braces
  .replace(/,(\s*[}\]])/g, '$1')
  // Fix double commas
  .replace(/,,/g, ',');

// Write the fixed content back
fs.writeFileSync('/workspace/data/2025-advanced-innovative-services-expansion-v3.js', content);

console.log('Applied final comprehensive fixes to data file');