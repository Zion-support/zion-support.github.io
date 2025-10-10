#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Comprehensive fix for page.tsx syntax errors...');

try {
  let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');
  
  // Fix JSX tag syntax errors
  content = content.replace(/<(\w+);/g, '<$1');
  content = content.replace(/<\/\w+>;/g, '</$1>');
  
  // Fix malformed JSX comments
  content = content.replace(/\{(\/\*[^*]*\*\/)\}<\/\w+>\}/g, '$1');
  content = content.replace(/\{(\/\*[^*]*\*\/)\}<\/\w+>\}/g, '$1');
  
  // Fix className attributes
  content = content.replace(/className="([^"]*?),\s*([^"]*?)"/g, 'className="$1 $2"');
  content = content.replace(/className="([^"]*?);\s*([^"]*?)"/g, 'className="$1 $2"');
  
  // Fix malformed object properties
  content = content.replace(/(\w+):\s*([^,}]+);/g, '$1: $2');
  content = content.replace(/(\w+):\s*([^,}]+),/g, '$1: $2,');
  
  // Fix array syntax
  content = content.replace(/\[\s*,/g, '[');
  content = content.replace(/,\s*\]/g, ']');
  
  // Fix function syntax
  content = content.replace(/\(\s*,/g, '(');
  content = content.replace(/,\s*\)/g, ')');
  
  // Fix JSX attributes
  content = content.replace(/(\w+)="([^"]*?),\s*([^"]*?)"/g, '$1="$2 $3"');
  content = content.replace(/(\w+)="([^"]*?);\s*([^"]*?)"/g, '$1="$2 $3"');
  
  // Fix malformed closing tags
  content = content.replace(/<\/\w+>;\s*<\/\w+>/g, '</$1>');
  
  // Fix semicolons in JSX
  content = content.replace(/;\s*>/g, '>');
  content = content.replace(/;\s*}/g, '}');
  
  // Fix malformed text content
  content = content.replace(/>([^<]*?);<\/\w+>/g, '>$1</$1>');
  
  // Fix malformed comments
  content = content.replace(/\{(\/\*[^*]*\*\/)\}<\/\w+>\}/g, '$1');
  
  // Write the fixed content
  fs.writeFileSync('/workspace/app/page.tsx', content);
  
  console.log('✅ Comprehensive syntax fixes applied to page.tsx');
  
} catch (error) {
  console.error('❌ Error fixing syntax:', error.message);
  process.exit(1);
}