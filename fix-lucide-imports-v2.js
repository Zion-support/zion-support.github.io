#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all TypeScript files with lucide-react import issues
const findFilesWithLucideIssues = () => {
  try {
    const result = execSync('find /workspace/app -name "*.tsx" -type f -exec grep -l "lucide-react/dist/esm/icons/" {} \\;', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No files found with lucide-react issues');
    return [];
  }
};

// Fix lucide-react imports in a file
const fixLucideImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace all lucide-react/dist/esm/icons/ imports with proper lucide-react imports
    const lucideRegex = /import\s+(\w+)\s+from\s+['"]lucide-react\/dist\/esm\/icons\/([^'"]+)['"];?/g;
    
    const matches = [...content.matchAll(lucideRegex)];
    
    if (matches.length > 0) {
      // Extract all unique icon names
      const iconNames = [...new Set(matches.map(match => match[2]))];
      
      // Create a single import statement
      const importStatement = `import { ${iconNames.join(', ')} } from 'lucide-react';`;
      
      // Remove all old import statements
      content = content.replace(lucideRegex, '');
      
      // Add the new import statement at the top
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        }
      }
      
      lines.splice(insertIndex, 0, importStatement);
      content = lines.join('\n');
      
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed lucide imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('Finding files with lucide-react import issues...');
  const files = findFilesWithLucideIssues();
  
  if (files.length === 0) {
    console.log('No files found with lucide-react issues');
    return;
  }

  console.log(`Found ${files.length} files with lucide-react issues`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixLucideImports(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed lucide imports in ${fixedCount} files`);
};

main();