#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all TypeScript files with import errors
const getFilesWithImportErrors = () => {
  try {
    const result = execSync('npm run type-check 2>&1 | grep "Module.*ErrorBoundary.*has no exported member" | cut -d"(" -f1 | sort -u', { encoding: 'utf8' });
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
const filesWithImportErrors = getFilesWithImportErrors();
console.log(`Found ${filesWithImportErrors.length} files with import errors`);

let fixedCount = 0;
let errorCount = 0;

filesWithImportErrors.forEach(filePath => {
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
console.log(`- Files processed: ${filesWithImportErrors.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);