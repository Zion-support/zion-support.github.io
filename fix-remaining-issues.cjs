const fs = require('fs');
const path = require('path');

function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused lucide-react imports
    const lucideImportRegex =
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const matches = content.match(lucideImportRegex);

    if (matches) {
      for (const match of matches) {
        const importContent = match.match(/{\s*([^}]+)\s*}/)[1];
        const imports = importContent.split(',').map(imp => imp.trim());

        // Check which imports are actually used
        const usedImports = imports.filter(imp => {
          const importName = imp.split(' as ')[0].trim();
          // Count occurrences in the file (excluding the import line itself)
          const contentWithoutImport = content.replace(match, '');
          const occurrences = (
            contentWithoutImport.match(
              new RegExp(`\\b${importName}\\b`, 'g')
            ) || []
          ).length;
          return occurrences > 0;
        });

        if (usedImports.length === 0) {
          content = content.replace(match, '');
          modified = true;
        } else if (usedImports.length < imports.length) {
          const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(match, newImport);
          modified = true;
        }
      }
    }

    // Remove unused Head imports
    if (
      content.includes("import Head from 'next/head';") &&
      !content.includes('<Head>')
    ) {
      content = content.replace(/import Head from 'next\/head';\n?/g, '');
      modified = true;
    }

    // Remove unused Link imports
    if (
      content.includes("import Link from 'next/link';") &&
      !content.includes('<Link')
    ) {
      content = content.replace(/import Link from 'next\/link';\n?/g, '');
      modified = true;
    }

    // Remove unused React imports (if using Next.js)
    if (
      content.includes("import React from 'react';") &&
      !content.includes('React.')
    ) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function fixPropertyAssignmentErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix object property syntax issues
    const patterns = [
      // Fix colon instead of equals
      { from: /(\w+):\s*(\w+)\s*=/g, to: '$1: $2' },
      // Fix missing quotes around object keys
      { from: /(\w+):\s*(\w+)\s*:/g, to: '$1: $2:' },
      // Fix property assignment syntax
      { from: /(\w+)\s*=\s*(\w+)\s*:/g, to: '$1: $2:' },
    ];

    for (const pattern of patterns) {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function removeUnusedVariables(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused variable declarations
    const lines = content.split('\n');
    const newLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Skip lines that declare unused variables
      if (
        line.match(/^\s*const\s+\w+\s*=\s*\[.*\]\s*;\s*$/) ||
        line.match(/^\s*const\s+\w+\s*=\s*\{.*\}\s*;\s*$/) ||
        line.match(/^\s*const\s+\w+\s*=\s*[^=]+;\s*$/) ||
        line.match(/^\s*let\s+\w+\s*=\s*[^=]+;\s*$/)
      ) {
        const varName = line.match(/^\s*(?:const|let)\s+(\w+)/);
        if (varName) {
          const name = varName[1];
          // Check if variable is used elsewhere in the file
          const contentWithoutLine = content.replace(line, '');
          const occurrences = (
            contentWithoutLine.match(new RegExp(`\\b${name}\\b`, 'g')) || []
          ).length;

          if (occurrences === 0) {
            // Skip this line (remove unused variable)
            modified = true;
            continue;
          }
        }
      }

      newLines.push(line);
    }

    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      if (removeUnusedImports(filePath)) fixedCount++;
      if (fixPropertyAssignmentErrors(filePath)) fixedCount++;
      if (removeUnusedVariables(filePath)) fixedCount++;
    }
  }

  return fixedCount;
}

console.log('Starting comprehensive code quality fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files`);
