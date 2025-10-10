#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of page files
const pageFiles = execSync('find app -name "page.tsx" -type f', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && fs.existsSync(file));

console.log(`Found ${pageFiles.length} page files to fix`);

// Function to convert kebab-case to PascalCase
const toPascalCase = (str) => {
  return str
    .split('-')
    .map(word => {
      // Handle numbers at the beginning
      if (/^\d/.test(word)) {
        return 'A' + word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};

let fixedFiles = 0;
let errorFiles = 0;

for (const filePath of pageFiles) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Extract page name from file path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2] || 'Page';
    const componentName = toPascalCase(pageName) + 'Page';

    // Fix the component name in the file
    content = content.replace(/const\s+[^:]+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, `const ${componentName}: React.FC = () => {`);
    
    // Fix the export statement
    content = content.replace(/export default\s+[^;]+;/g, `export default ${componentName};`);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath} -> ${componentName}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorFiles++;
  }
}

console.log(`\nSummary:`);
console.log(`- Files processed: ${pageFiles.length}`);
console.log(`- Files fixed: ${fixedFiles}`);
console.log(`- Files with errors: ${errorFiles}`);