#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with the incorrect lucide-react import pattern
function findFilesWithIncorrectImports() {
  try {
    const result = execSync('grep -r "import.*ArrowRight.*from.*lucide-react" . --include="*.tsx" --include="*.ts" | cut -d: -f1', { 
      encoding: 'utf8',
      cwd: '/workspace'
    });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No files found with incorrect imports or grep failed');
    return [];
  }
}

// Fix the import in a single file
function fixFileImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix ArrowRight import
    const arrowRightPattern = /import\s+ArrowRight\s+from\s+['"]lucide-react['"];?/g;
    if (arrowRightPattern.test(content)) {
      content = content.replace(arrowRightPattern, "import { ArrowRight } from 'lucide-react';");
      modified = true;
    }

    // Fix other common lucide-react imports that might be using default import
    const otherIconPattern = /import\s+(\w+)\s+from\s+['"]lucide-react['"];?/g;
    const matches = content.match(otherIconPattern);
    if (matches) {
      matches.forEach(match => {
        const iconName = match.match(/import\s+(\w+)\s+from/)[1];
        if (iconName !== 'ArrowRight') {
          content = content.replace(match, `import { ${iconName} } from 'lucide-react';`);
          modified = true;
        }
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('Finding files with incorrect lucide-react imports...');
  const files = findFilesWithIncorrectImports();
  
  if (files.length === 0) {
    console.log('No files found with incorrect imports.');
    return;
  }

  console.log(`Found ${files.length} files with incorrect imports.`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFileImports(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed imports in ${fixedCount} files.`);
}

main();