const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to remove unused imports and variables
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused React imports
    if (content.includes("import React from 'react'") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    // Remove unused imports from lucide-react
    const lucideMatches = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g);
    if (lucideMatches) {
      lucideMatches.forEach(match => {
        const imports = match.match(/\{([^}]+)\}/)[1];
        const importList = imports.split(',').map(imp => imp.trim());
        const usedImports = [];
        
        importList.forEach(imp => {
          if (content.includes(imp) && !content.includes(`import`)) {
            usedImports.push(imp);
          }
        });

        if (usedImports.length === 0) {
          content = content.replace(match + '\n', '');
          modified = true;
        } else if (usedImports.length < importList.length) {
          const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(match, newImport);
          modified = true;
        }
      });
    }

    // Remove unused variables
    const unusedVars = [
      'isVisible', 'setIsVisible', 'specialties', 'startTime', 'updateNetworkRequests',
      'quality', 'registration', 'registrationError', 'currentYear', 'ArrowRight',
      'structuredData', 'error'
    ];

    unusedVars.forEach(varName => {
      const regex = new RegExp(`const\\s+${varName}\\s*=\\s*[^;]+;?\\n?`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    // Remove unused function parameters
    content = content.replace(/,\s*error\s*\)/g, ')');
    content = content.replace(/\(\s*error\s*,/g, '(');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all TypeScript and TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  fixUnusedImports(fullPath);
});

console.log('Unused imports cleanup completed!');