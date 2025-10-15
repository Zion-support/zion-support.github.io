const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix all remaining escaped quotes
function fixRemainingQuotes(content) {
  let fixed = false;
  let originalContent = content;

  // Fix all remaining &quot; and &apos; in the entire file
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&amp;/g, '&');

  fixed = content !== originalContent;
  return { content, fixed };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, fixed } = fixRemainingQuotes(content);
    
    if (fixed) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed remaining quotes in: ${filePath}`);
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