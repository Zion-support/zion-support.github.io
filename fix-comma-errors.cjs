#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixCommaErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix extra commas in function definitions
    content = content.replace(/const \w+Page: React\.FC = \(\) => \{,/g, 'const $1Page: React.FC = () => {');
    
    // Fix extra commas in array definitions
    content = content.replace(/const \w+ = \[,/g, 'const $1 = [');
    
    // Fix extra commas in object definitions
    content = content.replace(/\{\s*,/g, '{');
    
    // Fix semicolons instead of commas in object properties
    content = content.replace(/icon: \w+;/g, (match) => match.replace(';', ','));
    content = content.replace(/title: '[^']+';/g, (match) => match.replace(';', ','));
    content = content.replace(/description: '[^']+';/g, (match) => match.replace(';', ','));
    content = content.replace(/benefits: \[[^\]]+\];/g, (match) => match.replace(';', ','));
    
    // Fix missing commas in object properties
    content = content.replace(/icon: \w+\s*title:/g, (match) => match.replace('title:', ', title:'));
    content = content.replace(/title: '[^']+'\s*description:/g, (match) => match.replace('description:', ', description:'));
    content = content.replace(/description: '[^']+'\s*benefits:/g, (match) => match.replace('benefits:', ', benefits:'));
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed comma errors in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all files with potential comma errors
const { execSync } = require('child_process');

try {
  const files = execSync('find /workspace/app -name "*.tsx" | head -20', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(f => f && !f.includes('node_modules'));

  console.log(`Fixing comma errors in ${files.length} files`);
  
  let fixed = 0;
  for (const file of files) {
    if (fixCommaErrors(file)) {
      fixed++;
    }
  }
  
  console.log(`Fixed comma errors in ${fixed} files`);
} catch (error) {
  console.error('Error:', error.message);
}