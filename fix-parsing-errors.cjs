const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common parsing errors
function fixParsingErrors(content, filePath) {
  let fixed = false;
  let originalContent = content;

  // Fix missing commas in arrays (common pattern)
  content = content.replace(/(\s*"[^"]*",?\s*)\n(\s*"[^"]*")\s*]/g, '$1,\n$2]');
  content = content.replace(/(\s*'[^']*',?\s*)\n(\s*'[^']*')\s*]/g, '$1,\n$2]');
  
  // Fix missing commas in object arrays
  content = content.replace(/(\s*}\s*)\n(\s*{\s*)/g, '$1,\n$2');
  
  // Fix malformed import statements
  content = content.replace(/import\s+React,\s+from\s+"react";/g, 'import React from "react";');
  content = content.replace(/import\s+React,\s+from\s+'react';/g, "import React from 'react';");
  
  // Fix missing function declarations
  if (content.includes('return (') && !content.includes('const ') && !content.includes('function ')) {
    // Add basic function wrapper if missing
    if (!content.includes('export default') && !content.includes('export const')) {
      content = `import React from 'react';\n\nconst Component = () => {\n  ${content}`;
      content += '\n};\n\nexport default Component;';
    }
  }
  
  // Fix unescaped entities
  content = content.replace(/(?<!&)(?<!&#)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)(?<!&#39;)'(?![a-zA-Z])/g, '&apos;');
  content = content.replace(/(?<!&)(?<!&#)(?<!&quot;)(?<!&ldquo;)(?<!&rdquo;)(?<!&#34;)"(?![a-zA-Z])/g, '&quot;');
  
  // Fix missing closing brackets
  content = content.replace(/(\s*]\s*)\n(\s*]\s*)/g, '$1,\n$2');
  
  // Fix duplicate declarations
  content = content.replace(/(\w+)\s*,\s*\1\s*,/g, '$1,');
  
  fixed = content !== originalContent;
  return { content, fixed };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, fixed } = fixParsingErrors(content, filePath);
    
    if (fixed) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed parsing errors in: ${filePath}`);
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