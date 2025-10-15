import fs from 'fs';
import path from 'path';

// Function to fix parsing errors in a file
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern 1: Fix malformed function declarations
    const functionPattern = /export default function\s+(\w+)\(\)\s*\{\s*return;\s*\},/g;
    if (functionPattern.test(content)) {
      content = content.replace(functionPattern, (match, functionName) => {
        return `export default function ${functionName}() {\n  const features = [`;
      });
      modified = true;
    }

    // Pattern 2: Fix missing React import
    if (!content.includes('import React from') && content.includes('export default function')) {
      content = content.replace(/import\s+{([^}]+)}\s+from\s+'lucide-react';/, `import React from 'react';\nimport { $1 } from 'lucide-react';`);
      modified = true;
    }

    // Pattern 3: Fix missing icon imports
    const iconPatterns = [
      { pattern: /<BarChart3/g, import: 'BarChart3' },
      { pattern: /<Zap/g, import: 'Zap' },
      { pattern: /<Shield/g, import: 'Shield' },
      { pattern: /<Settings/g, import: 'Settings' },
      { pattern: /<FileText/g, import: 'FileText' },
      { pattern: /<Clock/g, import: 'Clock' },
      { pattern: /<MessageCircle/g, import: 'MessageCircle' },
      { pattern: /<Bot/g, import: 'Bot' },
      { pattern: /<Brain/g, import: 'Brain' },
      { pattern: /<Target/g, import: 'Target' },
      { pattern: /<CheckCircle/g, import: 'CheckCircle' },
      { pattern: /<Globe/g, import: 'Globe' },
      { pattern: /<ArrowRight/g, import: 'ArrowRight' }
    ];

    for (const { pattern, import: iconName } of iconPatterns) {
      if (pattern.test(content) && !content.includes(iconName)) {
        const importMatch = content.match(/import\s+{([^}]+)}\s+from\s+'lucide-react';/);
        if (importMatch) {
          const currentImports = importMatch[1];
          if (!currentImports.includes(iconName)) {
            content = content.replace(
              /import\s+{([^}]+)}\s+from\s+'lucide-react';/,
              `import { $1, ${iconName} } from 'lucide-react';`
            );
            modified = true;
          }
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed parsing errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Fixing parsing errors...');
const files = getAllTsxFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  if (fixParsingErrors(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
console.log('Parsing errors fix completed!');