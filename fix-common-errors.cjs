const fs = require('fs');
const path = require('path');

// Function to fix common TypeScript/JSX errors
function fixCommonErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements
    if (content.includes('import   from "react"') || content.includes('import   from \'react\'')) {
      content = content.replace(/import\s+from\s+["']react["']/g, 'import React from "react"');
      modified = true;
    }

    // Fix missing React import
    if (content.includes('React.FC') && !content.includes('import React')) {
      content = 'import React from "react";\n' + content;
      modified = true;
    }

    // Fix malformed function declarations
    if (content.includes('const Component: React.FC = () => {')) {
      content = content.replace(/const\s+(\w+):\s+React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
      modified = true;
    }

    // Fix missing closing braces in object literals
    content = content.replace(/(\w+):\s*{([^}]*?)(\n\s*)(\w+):/g, '$1: {$2$3},$3$4:');
    modified = true;

    // Fix missing semicolons after object properties
    content = content.replace(/(\w+):\s*([^,}]+)(\n\s*)(\w+):/g, '$1: $2,$3$4:');
    modified = true;

    // Fix malformed JSX fragments
    content = content.replace(/<>([^<]*?)<([^>]*?)>/g, '<>$1<$2>');
    modified = true;

    // Fix missing closing tags
    content = content.replace(/(<section[^>]*>)([^<]*?)(<div[^>]*>)([^<]*?)(<\/div>)([^<]*?)(<\/section>)/g, '$1$2$3$4$5$6$7');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixCommonErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Fix files in the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix common errors...');
const fixedCount = fixFilesInDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);