import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find lucide-react imports
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    if (importMatch) {
      const currentImports = importMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];

      // Check which imports are actually used
      currentImports.forEach(importName => {
        if (content.includes(`<${importName}`) || 
            content.includes(`${importName}.`) || 
            content.includes(`{${importName}`) ||
            content.includes(` ${importName} `) ||
            content.includes(` ${importName},`) ||
            content.includes(` ${importName};`)) {
          usedImports.push(importName);
        }
      });

      // Only update if there are unused imports
      if (usedImports.length !== currentImports.length) {
        if (usedImports.length === 0) {
          // Remove the entire import line
          content = content.replace(importMatch[0], '');
        } else {
          // Replace with only used imports
          const newImportLine = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(importMatch[0], newImportLine);
        }
        modified = true;
      }
    }

    // Remove other unused imports
    const otherImportMatches = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"]/g);
    if (otherImportMatches) {
      otherImportMatches.forEach(importLine => {
        const importMatch = importLine.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const source = importMatch[2];
          
          // Skip if it's not a component import
          if (source.includes('lucide-react') || source.includes('react-router-dom') || source.includes('react-helmet-async')) {
            return;
          }

          const usedImports = [];
          imports.forEach(importName => {
            if (content.includes(`<${importName}`) || 
                content.includes(`${importName}.`) || 
                content.includes(`{${importName}`) ||
                content.includes(` ${importName} `) ||
                content.includes(` ${importName},`) ||
                content.includes(` ${importName};`)) {
              usedImports.push(importName);
            }
          });

          if (usedImports.length !== imports.length) {
            if (usedImports.length === 0) {
              content = content.replace(importLine, '');
            } else {
              const newImportLine = `import { ${usedImports.join(', ')} } from '${source}';`;
              content = content.replace(importLine, newImportLine);
            }
            modified = true;
          }
        }
      });
    }

    // Clean up extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned imports in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
  return false;
}

// Main execution
async function main() {
  const files = await glob('app/**/*.{ts,tsx}');
  
  console.log(`Found ${files.length} files to check...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (removeUnusedImports(path.join(process.cwd(), file))) {
      fixedCount++;
    }
  });
  
  console.log(`Cleaned ${fixedCount} files`);
}

main().catch(console.error);