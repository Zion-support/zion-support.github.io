#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all files with import path errors
const getFilesWithPathErrors = () => {
  try {
    const result = execSync('npm run type-check 2>&1 | grep "Cannot find module.*ErrorBoundary" | cut -d"(" -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    return [];
  }
};

// Fix import paths based on file location
const fixImportPaths = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Determine the correct path based on file location
    let correctPath = '../components/ErrorBoundary';
    
    if (filePath.includes('/ai-services/')) {
      correctPath = '../../components/ErrorBoundary';
    } else if (filePath.includes('/components/accessibility/')) {
      correctPath = '../ErrorBoundary';
    } else if (filePath.includes('/components/consolidated/')) {
      correctPath = '../ErrorBoundary';
    } else if (filePath.includes('/it-services/')) {
      correctPath = '../../components/ErrorBoundary';
    } else if (filePath.includes('/micro-saas/')) {
      correctPath = '../../components/ErrorBoundary';
    } else if (filePath.includes('/micro-saas-services/')) {
      correctPath = '../../components/ErrorBoundary';
    } else if (filePath === 'app/layout.tsx' || filePath === 'app/page.tsx' || filePath === 'app/root-layout.tsx' || filePath === 'app/service-template.tsx') {
      correctPath = './components/ErrorBoundary';
    }
    
    // Replace the import path
    content = content.replace(
      /import ErrorBoundary from ['"]\.\.\/components\/ErrorBoundary['"];?/g,
      `import ErrorBoundary from '${correctPath}';`
    );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing import paths in ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const filesWithPathErrors = getFilesWithPathErrors();
console.log(`Found ${filesWithPathErrors.length} files with import path errors`);

let fixedCount = 0;
let errorCount = 0;

filesWithPathErrors.forEach(filePath => {
  try {
    if (fixImportPaths(filePath)) {
      fixedCount++;
      console.log(`✓ Fixed import path: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nSummary:`);
console.log(`- Files processed: ${filesWithPathErrors.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);