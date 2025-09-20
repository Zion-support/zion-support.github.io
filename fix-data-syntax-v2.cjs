#!/usr/bin/env node

const fs = require('fs');

const filePath = '/workspace/data/2025-advanced-innovative-services-expansion-v3.js';

console.log('Fixing syntax errors in data file (v2)...');

let content = fs.readFileSync(filePath, 'utf8');

// Fix the malformed strings created by the previous script
content = content
  // Fix double quotes and malformed strings
  .replace(/"'([^']+)""/g, '"$1"')
  .replace(/"'([^']+)"/g, '"$1"')
  .replace(/'([^']+)""/g, '"$1"')
  .replace(/'([^']+)"/g, '"$1"')
  .replace(/""([^"]+)""/g, '"$1"')
  .replace(/""([^"]+)"/g, '"$1"')
  .replace(/"([^"]+)""/g, '"$1"')
  
  // Fix specific patterns
  .replace(/id: "'([^']+)""/g, 'id: "$1"')
  .replace(/name: "'([^']+)""/g, 'name: "$1"')
  .replace(/tagline: "'([^']+)""/g, 'tagline: "$1"')
  .replace(/price: ""([^"]+)""/g, 'price: "$1"')
  .replace(/period: "'([^']+)""/g, 'period: "$1"')
  .replace(/description: ""([^"]+)""/g, 'description: "$1"')
  
  // Fix array elements with malformed quotes
  .replace(/"([^"]+)", "([^"]+)",/g, '"$1", "$2",')
  .replace(/"([^"]+)", "([^"]+)"/g, '"$1", "$2"')
  
  // Fix object properties
  .replace(/(\w+): "'([^']+)""/g, '$1: "$2"')
  .replace(/(\w+): ""([^"]+)""/g, '$1: "$2"')
  
  // Clean up any remaining double quotes
  .replace(/""/g, '"')
  .replace(/''/g, "'")
  
  // Fix trailing commas and semicolons
  .replace(/,(\s*[}\]])/g, '$1')
  .replace(/;(\s*[}\]])/g, '$1');

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('Syntax errors fixed successfully (v2)!');