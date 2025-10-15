#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common unused imports that appear frequently
const commonUnusedImports = [
  'SparklesIcon',
  'ClockIcon', 
  'ChatBubbleLeftRightIcon',
  'UserGroupIcon',
  'EyeIcon',
  'ChartBarIcon',
  'TruckIcon',
  'CurrencyDollarIcon',
  'ShieldCheckIcon',
  'CogIcon',
  'GlobeAltIcon',
  'DocumentTextIcon',
  'CodeBracketIcon',
  'DevicePhoneMobileIcon',
  'CloudIcon',
  'SignalIcon',
  'BoltIcon',
  'StarIcon'
];

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Read the file content to check which imports are actually used
    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    
    let inImportBlock = false;
    let currentImport = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('import') && line.includes('from')) {
        inImportBlock = true;
        currentImport = line;
        importLines.push({ line: i, content: line });
      } else if (inImportBlock && (line === '' || line.startsWith('//') || line.startsWith('*'))) {
        // Continue in import block
        importLines.push({ line: i, content: line });
      } else if (inImportBlock && !line.startsWith('import')) {
        inImportBlock = false;
        otherLines.push({ line: i, content: line });
      } else {
        otherLines.push({ line: i, content: line });
      }
    }
    
    // Check which imports are actually used in the non-import lines
    const allOtherContent = otherLines.map(l => l.content).join('\n');
    
    // Process each import line
    for (let i = 0; i < importLines.length; i++) {
      const importLine = importLines[i];
      const lineContent = importLine.content;
      
      if (lineContent.includes('{') && lineContent.includes('}')) {
        // Extract imports from destructuring
        const importMatch = lineContent.match(/import\s*{\s*([^}]+)\s*}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            // Check if the import is used in the file content
            const importName = imp.replace(/\s+as\s+\w+/, '').trim();
            return allOtherContent.includes(importName);
          });
          
          if (usedImports.length !== imports.length) {
            if (usedImports.length === 0) {
              // Remove entire import line
              lines[importLine.line] = '';
            } else {
              // Replace with only used imports
              const newImportLine = lineContent.replace(
                /{\s*[^}]+\s*}/,
                `{ ${usedImports.join(', ')} }`
              );
              lines[importLine.line] = newImportLine;
            }
            modified = true;
          }
        }
      }
    }
    
    if (modified) {
      const newContent = lines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all page.tsx files
const pageFiles = await glob('app/**/page.tsx', { cwd: path.dirname(new URL(import.meta.url).pathname) + '/..' });

console.log(`Found ${pageFiles.length} page files to process...`);

for (const file of pageFiles) {
  const fullPath = path.join(path.dirname(new URL(import.meta.url).pathname), '..', file);
  fixUnusedImports(fullPath);
}

console.log('Unused imports fix completed!');