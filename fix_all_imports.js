#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all files with named ErrorBoundary imports
const getFilesWithNamedImports = () => {
  try {
    const result = execSync('find app -name "*.tsx" -exec grep -l "import { ErrorBoundary }" {} \\;', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    return [];
  }
};

// Fix import statements
const fixImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace named import with default import
    content = content.replace(
      /import { ErrorBoundary } from ['"]\.\.\/components\/ErrorBoundary['"];?/g,
      'import ErrorBoundary from \'../components/ErrorBoundary\';'
    );
    
    // Also handle cases with different path depths
    content = content.replace(
      /import { ErrorBoundary } from ['"]\.\.\/\.\.\/components\/ErrorBoundary['"];?/g,
      'import ErrorBoundary from \'../../components/ErrorBoundary\';'
    );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing imports in ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const filesWithNamedImports = getFilesWithNamedImports();
console.log(`Found ${filesWithNamedImports.length} files with named ErrorBoundary imports`);

let fixedCount = 0;
let errorCount = 0;

filesWithNamedImports.forEach(filePath => {
  try {
    if (fixImports(filePath)) {
      fixedCount++;
      console.log(`✓ Fixed imports: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nSummary:`);
console.log(`- Files processed: ${filesWithNamedImports.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);