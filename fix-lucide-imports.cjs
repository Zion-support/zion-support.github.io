#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${files.length} files to process`);

// Non-existent lucide-react exports to remove
const invalidExports = [
  'Scanner',
  'Fax', 
  'Stop',
  'Shuffle2',
  'Stopwatch',
  'CalendarStar'
];

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is empty
    if (!content) return;
    
    // Check if file imports from lucide-react
    if (!content.includes('from "lucide-react"')) return;
    
    let newContent = content;
    let hasChanges = false;
    
    // Remove invalid exports from import statements
    invalidExports.forEach(exportName => {
      const patterns = [
        // Remove from import list: , ExportName, or ExportName,
        new RegExp(`,\\s*${exportName}\\s*,?`, 'g'),
        new RegExp(`${exportName}\\s*,`, 'g'),
        // Remove at end: , ExportName } from
        new RegExp(`,\\s*${exportName}\\s*}\\s*from`, 'g'),
        // Remove single import: { ExportName } from
        new RegExp(`{\\s*${exportName}\\s*}`, 'g'),
      ];
      
      patterns.forEach(pattern => {
        const matches = newContent.match(pattern);
        if (matches) {
          newContent = newContent.replace(pattern, (match) => {
            hasChanges = true;
            // Clean up the match
            if (match.includes('}')) {
              return '}';
            }
            if (match.includes(',')) {
              return match.replace(exportName, '').replace(/,\s*,/, ',').replace(/,\s*$/, '');
            }
            return '';
          });
        }
      });
    });
    
    // Clean up empty import statements
    newContent = newContent.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    newContent = newContent.replace(/import\s*{\s*,?\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    
    // Clean up trailing commas in import statements
    newContent = newContent.replace(/,(\s*})/g, '$1');
    
    if (hasChanges) {
      fs.writeFileSync(filePath, newContent);
      console.log(`✓ Fixed ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing lucide-react imports');