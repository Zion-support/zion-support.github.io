const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix escaped quotes in JSX attributes
function fixJSXQuotes(content) {
  let fixed = false;
  let originalContent = content;

  // Fix escaped quotes in JSX attributes
  content = content.replace(/className="([^"]*&quot;[^"]*)"/g, (match, className) => {
    const fixedClassName = className.replace(/&quot;/g, '"');
    return `className="${fixedClassName}"`;
  });

  content = content.replace(/className='([^']*&apos;[^']*)'/g, (match, className) => {
    const fixedClassName = className.replace(/&apos;/g, "'");
    return `className='${fixedClassName}'`;
  });

  // Fix other JSX attributes
  content = content.replace(/(\w+)="([^"]*&quot;[^"]*)"/g, (match, attr, value) => {
    const fixedValue = value.replace(/&quot;/g, '"');
    return `${attr}="${fixedValue}"`;
  });

  content = content.replace(/(\w+)='([^']*&apos;[^']*)'/g, (match, attr, value) => {
    const fixedValue = value.replace(/&apos;/g, "'");
    return `${attr}='${fixedValue}'`;
  });

  // Fix content in JSX text
  content = content.replace(/>([^<]*&quot;[^<]*)</g, (match, text) => {
    const fixedText = text.replace(/&quot;/g, '"');
    return `>${fixedText}<`;
  });

  content = content.replace(/>([^<]*&apos;[^<]*)</g, (match, text) => {
    const fixedText = text.replace(/&apos;/g, "'");
    return `>${fixedText}<`;
  });

  fixed = content !== originalContent;
  return { content, fixed };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, fixed } = fixJSXQuotes(content);
    
    if (fixed) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed JSX quotes in: ${filePath}`);
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