import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to remove unused imports
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip unused import lines
      if (line.includes('error TS6133') || line.includes('error TS6192')) {
        continue;
      }
      
      // Remove specific unused imports
      if (line.includes('memo') && line.includes('useCallback') && line.includes('import')) {
        // Keep only React import
        newLines.push("import React from 'react';");
        modified = true;
        continue;
      }
      
      if (line.includes('Navigation') && line.includes('import') && line.includes('unused')) {
        continue; // Skip unused Navigation imports
      }
      
      if (line.includes('Footer') && line.includes('import') && line.includes('unused')) {
        continue; // Skip unused Footer imports
      }
      
      if (line.includes('ErrorBoundary') && line.includes('import') && line.includes('unused')) {
        continue; // Skip unused ErrorBoundary imports
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Removed unused imports from: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Fix specific files with known issues
function fixSpecificFiles() {
  const filesToFix = [
    'app/components/Navigation.tsx',
    'app/page.tsx',
    'app/page-new.tsx',
    'app/page-optimized.tsx',
    'app/5g-mobile-applications/page.tsx'
  ];
  
  let fixedCount = 0;
  
  for (const file of filesToFix) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      if (removeUnusedImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Run the fix
console.log('Removing unused imports...');
const fixedCount = fixSpecificFiles();
console.log(`Fixed ${fixedCount} files with unused import issues.`);