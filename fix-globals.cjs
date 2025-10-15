const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix global variable issues
function fixGlobals(content) {
  let fixed = false;
  let originalContent = content;

  // Add console and __dirname to the top of files that use them
  if (content.includes('console.') && !content.includes('/* global console */')) {
    // Add global comment at the top
    content = content.replace(/^(import.*\n)*/, (match) => {
      return match + '/* global console */\n';
    });
    fixed = true;
  }

  if (content.includes('__dirname') && !content.includes('/* global __dirname */')) {
    // Add global comment at the top
    content = content.replace(/^(import.*\n)*/, (match) => {
      return match + '/* global __dirname */\n';
    });
    fixed = true;
  }

  // Fix common parsing errors
  content = content.replace(/(\s*]\s*)\n(\s*]\s*)/g, '$1,\n$2');
  content = content.replace(/(\s*}\s*)\n(\s*{\s*)/g, '$1,\n$2');

  if (content !== originalContent) {
    fixed = true;
  }

  return { content, fixed };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, fixed } = fixGlobals(content);
    
    if (fixed) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed globals in: ${filePath}`);
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
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();