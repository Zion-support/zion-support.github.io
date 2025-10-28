#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all files with PagePage issues
const filesWithPagePage = execSync('grep -l "const PagePage" ./app/**/*.tsx', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Found ${filesWithPagePage.length} files with PagePage issues`);

filesWithPagePage.forEach(filePath => {
  try {
    console.log(`Fixing: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the correct component name from the file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const componentName = fileName.replace('.tsx', '').replace('page', 'Page');
    
    // Replace PagePage with the correct component name
    const newContent = content.replace(/const PagePage/g, `const ${componentName}`);
    
    // Also fix the export if it exists
    const finalContent = newContent.replace(/export default PagePage/g, `export default ${componentName}`);
    
    if (finalContent !== content) {
      fs.writeFileSync(filePath, finalContent);
      console.log(`✓ Fixed PagePage in: ${filePath} -> ${componentName}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${filesWithPagePage.length} files with PagePage issues`);