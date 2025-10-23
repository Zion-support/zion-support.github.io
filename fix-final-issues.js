const fs = require('fs');
const path = require('path');

// Function to fix duplicate exports and remaining JSX issues
function fixFile(filePath) {
  try {
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate default exports
    const exportMatches = content.match(/export default [^;]+;/g);
    if (exportMatches && exportMatches.length > 1) {
      // Keep only the first export
      const firstExport = exportMatches[0];
      content = content.replace(/export default [^;]+;/g, '');
      content += '\n' + firstExport;
=======
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    // Fix duplicate React imports
    if (content.includes("import React from 'react';\nimport React from 'react';")) {
      content = content.replace(
        /import React from 'react';\nimport React from 'react';/g,
        "import React from 'react';"
      );
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
      modified = true;
    }
    
    // Fix JSX structure issues
    const lines = content.split('\n');
    const fixedLines = [];
    let inJSX = false;
    let braceCount = 0;
    let parenCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Track JSX state
      if (trimmedLine.includes('return (') || trimmedLine.includes('return(')) {
        inJSX = true;
        parenCount = 1;
        fixedLines.push(line);
        continue;
      }
      
      if (inJSX) {
        // Count parentheses and braces
        for (const char of line) {
          if (char === '(') parenCount++;
          if (char === ')') parenCount--;
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        // Fix malformed JSX
        if (trimmedLine === '<>' && i > 0) {
          const prevLine = lines[i - 1].trim();
          if (prevLine.endsWith('(') || prevLine.endsWith('return (')) {
            fixedLines.push('    <>');
          } else {
            fixedLines.push(line);
          }
        } else if (trimmedLine === '</>') {
          if (parenCount === 0) {
            fixedLines.push('  </>');
            inJSX = false;
          } else {
            fixedLines.push(line);
          }
        } else if (trimmedLine.startsWith('<') && !trimmedLine.includes('//') && !trimmedLine.includes('/*')) {
          // Fix malformed JSX tags
          if (trimmedLine.includes('  </') && !trimmedLine.includes('</>')) {
            const tagName = trimmedLine.match(/<\/([^>]+)>/);
            if (tagName) {
              fixedLines.push(`    </${tagName[1]}>`);
            } else {
              fixedLines.push(line);
            }
          } else {
            fixedLines.push(line);
          }
        } else {
          fixedLines.push(line);
        }
        
        // Check if we're out of JSX
        if (parenCount === 0 && trimmedLine === ');') {
          inJSX = false;
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Remove empty lines at the end
    while (fixedLines.length > 0 && fixedLines[fixedLines.length - 1].trim() === '') {
      fixedLines.pop();
    }
<<<<<<< HEAD
    
    const fixedContent = fixedLines.join('\n');
    
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
=======

    // Fix Link component href prop
    if (content.includes('<Link href=')) {
      content = content.replace(/<Link href=/g, '<Link to=');
      modified = true;
    }

    // Fix Next.js imports in sitemap
    if (content.includes("import { Metadata } from 'next';")) {
      content = content.replace(/import { Metadata } from 'next';/g, "import React from 'react';");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');

>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
      return true;
    }
    
    return false;
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error fixing ${filePath}:`, error.message);
=======

>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
    return false;
  }
}

<<<<<<< HEAD
// Get all TypeScript files
const { execSync } = require('child_process');
const allFiles = execSync('find app -name "*.tsx" -type f', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '');

console.log(`Found ${allFiles.length} files to check`);

let fixedCount = 0;
allFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} out of ${allFiles.length} files`);
=======
// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in app directory
  const _files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  let _fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

}

main().catch(console.error);
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
