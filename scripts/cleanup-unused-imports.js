#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Common unused imports that can be safely removed
const commonUnusedImports = [
  'Star', 'Zap', 'Shield', 'Clock', 'Users', 'Award', 'ArrowRight',
  'Phone', 'Mail', 'MapPin', 'Globe', 'Target', 'MessageSquare',
  'Database', 'Settings', 'Cpu', 'Brain', 'TrendingUp', 'CheckCircle',
  'Eye', 'Sparkles', 'Terminal', 'Bug', 'Headphones', 'Bot', 'BarChart',
  'AlertTriangle', 'Palette', 'Scissors', 'Play', 'Camera', 'Mic',
  'Headphones', 'Calendar', 'FileText', 'Code', 'Cog', 'Rocket',
  'Activity', 'HardDrive', 'Lock', 'Server', 'Monitor'
];

// Function to clean up unused imports in a file
function cleanupFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let modified = false;

    // Find import lines
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('import {') && line.includes('} from')) {
        // Extract imports
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = [];
          const unusedImports = [];

          // Check which imports are actually used in the file
          for (const imp of imports) {
            const cleanImp = imp.replace(/\s+as\s+\w+/, ''); // Remove 'as' aliases
            const isUsed = content.includes(cleanImp) && !line.includes(cleanImp);
            if (isUsed || commonUnusedImports.includes(cleanImp)) {
              if (!commonUnusedImports.includes(cleanImp)) {
                usedImports.push(imp);
              }
            } else {
              unusedImports.push(imp);
            }
          }

          // If we found unused imports, remove them
          if (unusedImports.length > 0) {
            if (usedImports.length > 0) {
              lines[i] = line.replace(
                /import\s*{\s*[^}]+\s*}/,
                `import { ${usedImports.join(', ')} }`
              );
            } else {
              // Remove the entire import line if no imports are used
              lines[i] = '';
            }
            modified = true;
            console.log(`Cleaned up unused imports in ${filePath}: ${unusedImports.join(', ')}`);
          }
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, lines.join('\n'));
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and process TypeScript/JavaScript files
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let processedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (cleanupFile(filePath)) {
        processedCount++;
      }
    }
  }

  return processedCount;
}

// Main execution
console.log('🧹 Starting cleanup of unused imports...');
const processedCount = processDirectory('./app');
console.log(`✅ Cleaned up ${processedCount} files`);

// Run ESLint fix to clean up any remaining issues
try {
  console.log('🔧 Running ESLint fix...');
  execSync('pnpm run lint:fix', { stdio: 'inherit' });
  console.log('✅ ESLint fix completed');
} catch (error) {
  console.log('⚠️ ESLint fix had some issues, but continuing...');
}

console.log('🎉 Cleanup completed!');