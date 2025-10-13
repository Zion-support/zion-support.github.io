#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(file)) {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Only process certain file types
      if (file.match(/\.(js|jsx|ts|tsx)$/)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unescaped entities in JSX
    if (content.includes("'")) {
      const originalContent = content;
      content = content.replace(/(?<!&)(?<!&#)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)(?<!&quot;)(?<!&lt;)(?<!&gt;)(?<!&amp;)'(?![^<]*>)/g, '&apos;');
      if (content !== originalContent) {
        modified = true;
        console.log(`✓ Fixed unescaped entities in: ${filePath}`);
      }
    }

    // Fix duplicate Router imports
    if (content.includes("import { Router }")) {
      const lines = content.split('\n');
      const routerLines = lines.filter(line => line.includes("import { Router }"));
      if (routerLines.length > 1) {
        const cleanedLines = lines.filter((line, index) => {
          if (line.includes("import { Router }")) {
            return index === lines.findIndex(l => l.includes("import { Router }"));
          }
          return true;
        });
        const cleanedContent = cleanedLines.join('\n');
        if (cleanedContent !== content) {
          content = cleanedContent;
          modified = true;
          console.log(`✓ Fixed duplicate Router import in: ${filePath}`);
        }
      }
    }

    // Fix missing closing tags
    if (content.includes('<div') && !content.includes('</div>')) {
      const divCount = (content.match(/<div/g) || []).length;
      const closingDivCount = (content.match(/<\/div>/g) || []).length;
      if (divCount > closingDivCount) {
        const missingDivs = divCount - closingDivCount;
        content += '\n' + '</div>'.repeat(missingDivs);
        modified = true;
        console.log(`✓ Added ${missingDivs} missing closing div tags in: ${filePath}`);
      }
    }

    // Fix parsing errors in API files
    if (filePath.includes('/api/')) {
      // Fix missing commas in object literals
      content = content.replace(/(\w+)\s*\n\s*}/g, '$1\n}');
      
      // Fix try-catch blocks
      if (content.includes('try {') && !content.includes('} catch')) {
        content = content.replace(/try\s*{([^}]+)}/g, (match, tryContent) => {
          return `try {\n${tryContent}\n} catch (error) {\n  console.error('Error:', error);\n  res.status(500).json({ error: 'Internal server error' });\n}`;
        });
        modified = true;
        console.log(`✓ Fixed try-catch block in: ${filePath}`);
      }
    }

    // Fix missing semicolons
    content = content.replace(/([^;}])\n\s*}/g, '$1;\n}');
    content = content.replace(/([^;}])\n\s*\)/g, '$1;\n)');

    // Fix missing commas in function parameters
    content = content.replace(/\)\s*{/g, ') {');
    content = content.replace(/,\s*\)/g, ')');

    // Fix broken JSX attributes
    content = content.replace(/=\s*{\s*}\s*/g, '={true} ');
    content = content.replace(/=\s*{\s*undefined\s*}/g, '={false} ');

    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content += ')'.repeat(missingParens);
      modified = true;
      console.log(`✓ Added ${missingParens} missing closing parentheses in: ${filePath}`);
    }

    // Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '}'.repeat(missingBraces);
      modified = true;
      console.log(`✓ Added ${missingBraces} missing closing braces in: ${filePath}`);
    }

    // Only write if content actually changed
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting syntax error fixes...');

const allFiles = getAllFiles(process.cwd());
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nCompleted! Fixed syntax errors in ${fixedCount} files.`);