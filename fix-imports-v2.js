const fs = require('fs');
const path = require('path');

// Function to clean up imports and exports in a file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's a layout file
    if (filePath.includes('layout.tsx')) {
      return false;
    }

    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    
    // Track what we've imported
    const imports = {
      react: false,
      footer: false,
      head: false,
      link: false,
      navigation: false,
      lucide: new Set()
    };
    
    let inImportBlock = true;
    const foundComponentStart = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines at the beginning
      if (inImportBlock && line === '') {
        continue;
      }
      
      // Handle import statements
      if (line.startsWith('import ')) {
        if (line.includes('from \'react\'')) {
          if (!imports.react) {
            newLines.push("import React from 'react'");
            imports.react = true;
          }
        } else if (line.includes('from \'../components/Footer\'')) {
          if (!imports.footer) {
            newLines.push("import Footer from '../components/Footer'");
            imports.footer = true;
          }
        } else if (line.includes('from "next/head"')) {
          if (!imports.head) {
            newLines.push('import Head from "next/head"');
            imports.head = true;
          }
        } else if (line.includes('from "next/link"')) {
          if (!imports.link) {
            newLines.push('import Link from "next/link"');
            imports.link = true;
          }
        } else if (line.includes('from \'../components/Navigation\'')) {
          if (!imports.navigation) {
            newLines.push("import Navigation from '../components/Navigation'");
            imports.navigation = true;
          }
        } else if (line.includes('from \'lucide-react\'')) {
          // Extract lucide imports
          const match = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/);
          if (match) {
            const icons = match[1].split(',').map(icon => icon.trim());
            icons.forEach(icon => {
              if (icon && !imports.lucide.has(icon)) {
                imports.lucide.add(icon);
              }
            });
          }
        } else if (!line.includes('from \'react-helmet-async\'') && 
                   !line.includes('from \'../components/SEOHead\'')) {
          // Keep other imports that are not duplicates
          newLines.push(lines[i]);
        }
      } else {
        inImportBlock = false;
        newLines.push(lines[i]);
      }
    }
    
    // Add lucide imports if any were found
    if (imports.lucide.size > 0) {
      const lucideIcons = Array.from(imports.lucide).sort();
      newLines.splice(1, 0, `import { ${lucideIcons.join(', ')} } from 'lucide-react';`);
    }
    
    // Join lines and fix common issues
    let finalContent = newLines.join('\n');
    
    // Fix duplicate exports
    finalContent = finalContent.replace(/\nexport default [^;]+;\nexport default [^;]+;/g, '\nexport default Page;');
    finalContent = finalContent.replace(/\nexport default [^;]+;\nexport default [^;]+;\nexport default [^;]+;/g, '\nexport default Page;');
    finalContent = finalContent.replace(/\nexport default [^;]+;\nexport default [^;]+;\nexport default [^;]+;\nexport default [^;]+;/g, '\nexport default Page;');
    
    // Fix extra closing parentheses
    finalContent = finalContent.replace(/\n {2}\)\n {2}\);/g, '\n  );');
    finalContent = finalContent.replace(/\n {2}\)\n {2}\);/g, '\n  );');
    finalContent = finalContent.replace(/\n {2}\)\n {2}\);/g, '\n  );');
    
    // Fix malformed JSX in the middle of object properties
    finalContent = finalContent.replace(/\nimport { [^}]+ } from 'lucide-react';\n {2}\n/g, '\n');
    
    if (finalContent !== content) {
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