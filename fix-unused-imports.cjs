const fs = require('fs');
const path = require('path');

// Function to remove unused imports from a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused imports from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const lucideMatches = content.match(lucideImportRegex);
    
    if (lucideMatches) {
      lucideMatches.forEach(match => {
        const importContent = match.match(/{\s*([^}]+)\s*}/)[1];
        const imports = importContent.split(',').map(imp => imp.trim());
        
        // Check which imports are actually used in the file
        const usedImports = imports.filter(imp => {
          const importName = imp.split(' as ')[0].trim();
          const regex = new RegExp(`\\b${importName}\\b`, 'g');
          const matches = content.match(regex);
          return matches && matches.length > 1; // More than just the import statement
        });
        
        if (usedImports.length === 0) {
          // Remove the entire import line
          content = content.replace(match, '');
          modified = true;
        } else if (usedImports.length < imports.length) {
          // Replace with only used imports
          const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(match, newImport);
          modified = true;
        }
      });
    }

    // Remove unused React imports
    const reactImportRegex = /import\s+React[^;]*;?\s*/g;
    const reactMatches = content.match(reactImportRegex);
    if (reactMatches) {
      reactMatches.forEach(match => {
        // Check if React is actually used
        const reactUsage = content.match(/\bReact\b/g);
        if (!reactUsage || reactUsage.length <= 1) {
          content = content.replace(match, '');
          modified = true;
        }
      });
    }

    // Remove unused Head and Link imports from next/head and next/link
    const nextHeadRegex = /import\s*{\s*Head\s*}\s*from\s*['"]next\/head['"];?\s*/g;
    const nextLinkRegex = /import\s*{\s*Link\s*}\s*from\s*['"]next\/link['"];?\s*/g;
    
    if (content.match(nextHeadRegex) && !content.match(/\bHead\b/g)) {
      content = content.replace(nextHeadRegex, '');
      modified = true;
    }
    
    if (content.match(nextLinkRegex) && !content.match(/\bLink\b/g)) {
      content = content.replace(nextLinkRegex, '');
      modified = true;
    }

    // Remove unused Helmet imports
    const helmetRegex = /import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\s*/g;
    if (content.match(helmetRegex) && !content.match(/\bHelmet\b/g)) {
      content = content.replace(helmetRegex, '');
      modified = true;
    }

    // Fix React import issues
    if (content.includes('React.FC') || content.includes('React.ReactNode') || content.includes('React.Component')) {
      if (!content.includes("import React")) {
        content = "import React from 'react';\n" + content;
        modified = true;
      }
    }

    // Fix memo import
    if (content.includes('memo(') && !content.includes("import { memo }")) {
      content = content.replace(/import React from 'react';/, "import React, { memo } from 'react';");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process TypeScript/JavaScript files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fixUnusedImports(filePath);
    }
  });
}

// Process the app directory
processDirectory('./app');
console.log('Finished fixing unused imports');