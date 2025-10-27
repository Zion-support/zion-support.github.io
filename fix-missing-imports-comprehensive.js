import fs from 'fs';
import path from 'path';

const appDir = './app';

function fixMissingImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if ArrowRight is used but not imported
    if (content.includes('ArrowRight') && !content.includes("import { ArrowRight") && !content.includes("import {ArrowRight")) {
      // Find the import statement and add ArrowRight
      const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
      if (importMatch) {
        const existingImports = importMatch[1].split(',').map(imp => imp.trim());
        if (!existingImports.includes('ArrowRight')) {
          existingImports.push('ArrowRight');
          content = content.replace(
            /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/,
            `import { ${existingImports.join(', ')} } from 'lucide-react'`
          );
          modified = true;
        }
      } else {
        // Add new import statement
        const reactImport = content.match(/import\s+React\s+from\s+['"]react['"]/);
        if (reactImport) {
          content = content.replace(
            /import\s+React\s+from\s+['"]react['"]/,
            `import React from 'react';\nimport { ArrowRight } from 'lucide-react'`
          );
          modified = true;
        }
      }
    }

    // Check if currentYear is used but not defined
    if (content.includes('currentYear') && !content.includes('const currentYear')) {
      // Find a good place to add the currentYear definition
      const functionMatch = content.match(/export\s+default\s+function\s+\w+\s*\([^)]*\)\s*{/);
      if (functionMatch) {
        const insertPos = functionMatch.index + functionMatch[0].length;
        content = content.slice(0, insertPos) + '\n  const currentYear = new Date().getFullYear();' + content.slice(insertPos);
        modified = true;
      }
    }

    // Check if CheckCircle is used but not imported
    if (content.includes('CheckCircle') && !content.includes("import { CheckCircle") && !content.includes("import {CheckCircle")) {
      const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
      if (importMatch) {
        const existingImports = importMatch[1].split(',').map(imp => imp.trim());
        if (!existingImports.includes('CheckCircle')) {
          existingImports.push('CheckCircle');
          content = content.replace(
            /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/,
            `import { ${existingImports.join(', ')} } from 'lucide-react'`
          );
          modified = true;
        }
      } else {
        const reactImport = content.match(/import\s+React\s+from\s+['"]react['"]/);
        if (reactImport) {
          content = content.replace(
            /import\s+React\s+from\s+['"]react['"]/,
            `import React from 'react';\nimport { CheckCircle } from 'lucide-react'`
          );
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed missing imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      if (fixMissingImports(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

console.log('Starting comprehensive import fixes...');
const totalFixed = processDirectory(appDir);
console.log(`Fixed ${totalFixed} files with missing imports.`);