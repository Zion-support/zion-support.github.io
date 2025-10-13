#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get files with linting errors
const lintOutput = execSync('pnpm run lint 2>&1', { encoding: 'utf8', cwd: '/workspace' });
const lines = lintOutput.split('\n');

const filesToFix = new Set();
lines.forEach(line => {
  if (line.includes('error') && line.includes('is defined but never used')) {
    const match = line.match(/^\/workspace\/([^:]+):/);
    if (match) {
      filesToFix.add(`/workspace/${match[1]}`);
    }
  }
});

console.log(`Found ${filesToFix.size} files with unused imports`);

filesToFix.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  try {
    const content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    // Find and fix lucide-react imports
    const lucideMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["']/);
    if (lucideMatch) {
      const imports = lucideMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];
      
      imports.forEach(imp => {
        // Check if the import is used in the file (not in import statements)
        const usageRegex = new RegExp(`\\b${imp}\\b`, 'g');
        const importRegex = new RegExp(`import.*${imp}.*from`, 'g');
        
        const usageMatches = (content.match(usageRegex) || []).length;
        const importMatches = (content.match(importRegex) || []).length;
        
        // If it appears more times than in import statements, it's used
        if (usageMatches > importMatches) {
          usedImports.push(imp);
        }
      });
      
      if (usedImports.length > 0) {
        newContent = newContent.replace(
          lucideMatch[0],
          `import { ${usedImports.join(', ')} } from "lucide-react"`
        );
      } else {
        newContent = newContent.replace(lucideMatch[0], '');
      }
    }
    
    // Fix other common unused imports
    const unusedImports = [
      'Link',
      'Users',
      'Award',
      'Clock',
      'Smartphone',
      'Mail',
      'Globe',
      'Zap',
      'Shield',
      'Code',
      'Database',
      'Star',
      'Bot',
      'BarChart3',
      'Target',
      'Activity',
      'LineChart',
      'DollarSign',
      'Brain',
      'UserCheck',
      'Calendar'
    ];
    
    unusedImports.forEach(importName => {
      // Check if import is unused
      const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
      const importRegex = new RegExp(`import.*${importName}.*from`, 'g');
      
      const usageMatches = (newContent.match(usageRegex) || []).length;
      const importMatches = (newContent.match(importRegex) || []).length;
      
      if (usageMatches <= importMatches && importMatches > 0) {
        // Remove from import statements
        newContent = newContent.replace(
          new RegExp(`,\\s*${importName}`, 'g'),
          ''
        );
        newContent = newContent.replace(
          new RegExp(`${importName}\\s*,`, 'g'),
          ''
        );
        newContent = newContent.replace(
          new RegExp(`{\\s*${importName}\\s*}`),
          '{}'
        );
      }
    });
    
    // Clean up empty import statements
    newContent = newContent.replace(/import\s*{\s*}\s*from\s*["']lucide-react["'];\n?/g, '');
    newContent = newContent.replace(/import\s*{\s*}\s*from\s*["']react-router-dom["'];\n?/g, '');
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      console.log(`Fixed ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Done fixing remaining unused imports');