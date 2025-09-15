#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Fixing package.json merge conflicts...');

try {
  let content = fs.readFileSync('package.json', 'utf8');
  
  // Remove all merge conflict markers and keep the incoming version (from PRs)
  content = content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$2')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$2')
    .replace(/^<<<<<<< HEAD$/gm, '')
    .replace(/^=======$/gm, '')
    .replace(/^>>>>>>> [^\n]+$/gm, '');
  
  // Clean up any remaining artifacts
  content = content
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
    .replace(/,\s*}/g, '}') // Remove trailing commas before closing braces
    .replace(/,\s*]/g, ']'); // Remove trailing commas before closing brackets
  
  fs.writeFileSync('package.json', content);
  console.log('✅ package.json merge conflicts resolved');
  
  // Validate JSON
  try {
    JSON.parse(content);
    console.log('✅ package.json is valid JSON');
  } catch (error) {
    console.log('❌ package.json is still invalid:', error.message);
  }
  
} catch (error) {
  console.log('❌ Error fixing package.json:', error.message);
}