#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix broken import statements
function fixBrokenImports(content) {
  const lines = content.split('\n');
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this line starts with an import but is missing the opening brace
    if (line.trim().startsWith('import ') && !line.includes('{') && !line.includes('from')) {
      // This is a broken import line, collect all related lines
      const importLines = [line];
      let j = i + 1;
      
      // Collect all lines until we find the 'from' statement
      while (j < lines.length && !lines[j].includes('from')) {
        importLines.push(lines[j]);
        j++;
      }
      
      if (j < lines.length) {
        importLines.push(lines[j]);
        
        // Reconstruct the import statement
        const fromLine = lines[j];
        const moduleName = fromLine.match(/from\s+['"]([^'"]+)['"]/)?.[1];
        
        if (moduleName) {
          // Extract all the named imports
          const namedImports = [];
          for (let k = 1; k < importLines.length - 1; k++) {
            const importLine = importLines[k].trim().replace(',', '');
            if (importLine) {
              namedImports.push(importLine);
            }
          }
          
          if (namedImports.length > 0) {
            const newImport = `import { ${namedImports.join(', ')} } from '${moduleName}';`;
            result.push(newImport);
          }
          
          i = j; // Skip the processed lines
        } else {
          // If we can't parse it, just add the original lines
          result.push(...importLines);
          i = j;
        }
      } else {
        // If we can't find the 'from' statement, just add the line as is
        result.push(line);
      }
    } else {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix broken imports
    content = fixBrokenImports(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed broken imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files with syntax errors
const problematicFiles = [
  'app/about/page.tsx',
  'app/ai-customer-support-pro/page.tsx',
  'app/ai-cybersecurity-platform/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-ecommerce-platform/page.tsx',
  'app/ai-financial-platform/page.tsx',
  'app/ai-healthcare-platform/page.tsx',
  'app/ai-voice-assistant-enterprise/page.tsx',
  'app/case-studies/page.tsx',
  'app/components/Footer.tsx',
  'app/contact/page.tsx',
  'app/database-solutions/page.tsx',
  'app/micro-saas-solutions/page.tsx',
  'app/micro-saas/page.tsx',
  'app/page.tsx',
  'app/performance-monitoring/page.tsx',
  'app/services/page.tsx',
  'app/support/page.tsx'
];

console.log(`Fixing ${problematicFiles.length} files with broken imports...`);

let fixedCount = 0;
for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);