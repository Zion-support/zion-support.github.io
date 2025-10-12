#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix duplicate closing brackets
  fixed = fixed
    .replace(/;\s*\]\s*\]/g, ']')
    .replace(/;\s*\}\s*\}/g, '}')
    .replace(/\]\s*\]/g, ']')
    .replace(/\}\s*\}/g, '}')
    .replace(/;\s*\]/g, ']')
    .replace(/;\s*\}/g, '}');
  
  // Fix missing JSX closing tags
  fixed = fixed
    .replace(/<p([^>]*)>\s*([^<]+)\s*$/gm, '<p$1>$2</p>')
    .replace(/<div([^>]*)>\s*$/gm, '<div$1></div>')
    .replace(/<span([^>]*)>\s*$/gm, '<span$1></span>');
  
  // Fix JSX expressions that need parent elements
  fixed = fixed
    .replace(/(<[^>]+>\s*)([^<]+)\s*$/gm, (match, tag, content) => {
      if (content.trim() && !content.includes('<')) {
        return `${tag}${content}</${tag.match(/<(\w+)/)[1]}>`;
      }
      return match;
    });
  
  // Fix missing semicolons in object properties
  fixed = fixed
    .replace(/(\w+):\s*([^,}\n]+)\s*([,}])/g, (match, key, value, ending) => {
      if (!value.includes(';') && !value.includes('(') && !value.includes('{') && !value.includes('<')) {
        return `${key}: ${value}${ending}`;
      }
      return match;
    });
  
  // Fix missing closing tags for FuturisticBackground
  fixed = fixed
    .replace(/<FuturisticBackground([^>]*)>\s*$/gm, '<FuturisticBackground$1></FuturisticBackground>');
  
  // Fix missing closing tags for FuturisticButton
  fixed = fixed
    .replace(/<FuturisticButton([^>]*)>\s*$/gm, '<FuturisticButton$1></FuturisticButton>');
  
  // Fix missing closing tags for div elements
  fixed = fixed
    .replace(/<div([^>]*)>\s*([^<]+)\s*$/gm, '<div$1>$2</div>');
  
  // Clean up extra whitespace
  fixed = fixed
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/^\s+$/gm, '');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Starting syntax error fixes...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nSyntax error fixes complete!`);
  console.log(`Total files processed: ${totalFiles}`);
  console.log(`Files with syntax errors fixed: ${fixedFiles}`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };