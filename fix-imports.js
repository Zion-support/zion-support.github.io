const fs = require('fs');
const path = require('path');

// Function to clean up imports and exports in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const imports = new Set();
    const seenImports = new Set();
    let inImportBlock = true;
    let hasReactImport = false;
    let hasFooterImport = false;
    let hasHeadImport = false;
    let hasLinkImport = false;
    let hasNavigationImport = false;
    let hasLucideImports = new Set();

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines at the beginning
      if (inImportBlock && line === '') {
        continue;
      }

      // Handle import statements
      if (line.startsWith('import ')) {
        if (line.includes('from \'react\'')) {
          if (!hasReactImport) {
            newLines.push("import React from 'react'");
            hasReactImport = true;
            modified = true;
          }
        } else if (line.includes('from \'../components/Footer\'')) {
          if (!hasFooterImport) {
            newLines.push("import Footer from '../components/Footer'");
            hasFooterImport = true;
            modified = true;
          }
        } else if (line.includes('from "next/head"')) {
          if (!hasHeadImport) {
            newLines.push('import Head from "next/head"');
            hasHeadImport = true;
            modified = true;
          }
        } else if (line.includes('from "next/link"')) {
          if (!hasLinkImport) {
            newLines.push('import Link from "next/link"');
            hasLinkImport = true;
            modified = true;
          }
        } else if (line.includes('from \'../components/Navigation\'')) {
          if (!hasNavigationImport) {
            newLines.push("import Navigation from '../components/Navigation'");
            hasNavigationImport = true;
            modified = true;
          }
        } else if (line.includes('from \'lucide-react\'')) {
          // Extract lucide imports
          const match = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/);
          if (match) {
            const icons = match[1].split(',').map(icon => icon.trim());
            icons.forEach(icon => {
              if (icon && !hasLucideImports.has(icon)) {
                hasLucideImports.add(icon);
              }
            });
          }
        } else if (!line.includes('from \'react-helmet-async\'') && 
                   !line.includes('from \'../components/SEOHead\'')) {
          // Keep other imports that are not duplicates
          if (!seenImports.has(line)) {
            newLines.push(lines[i]);
            seenImports.add(line);
          } else {
            modified = true;
          }
        } else {
          modified = true;
        }
      } else {
        inImportBlock = false;
        newLines.push(lines[i]);
      }
    }

    // Add lucide imports if any were found
    if (hasLucideImports.size > 0) {
      const lucideIcons = Array.from(hasLucideImports).sort();
      newLines.splice(1, 0, `import { ${lucideIcons.join(', ')} } from 'lucide-react';`);
    }

    // Fix duplicate exports
    const finalContent = newLines.join('\n')
      .replace(/\nexport default [^;]+;\nexport default [^;]+;/g, '\nexport default Page;')
      .replace(/\nexport default [^;]+;\nexport default [^;]+;\nexport default [^;]+;/g, '\nexport default Page;')
      .replace(/\nexport default [^;]+;\nexport default [^;]+;\nexport default [^;]+;\nexport default [^;]+;/g, '\nexport default Page;')
      .replace(/\n  \)\n  \);/g, '\n  );')
      .replace(/\n  \)\n  \);/g, '\n  );')
      .replace(/\n  \)\n  \);/g, '\n  );');

    if (modified || finalContent !== content) {
      fs.writeFileSync(filePath, finalContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && item !== 'layout.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);