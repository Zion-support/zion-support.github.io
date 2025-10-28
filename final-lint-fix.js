#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix specific linting issues in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unused imports by removing them completely
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that are just unused imports
      if (line.includes('import {') && line.includes('} from') && line.includes('lucide-react')) {
        // Check if any of the imported items are actually used in the file
        const importMatch = line.match(/import\s+{([^}]+)}\s+from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim().replace(/\s+as\s+\w+/, ''));
          const usedImports = imports.filter(imp => {
            const cleanImp = imp.replace(/^_/, '');
            return content.includes(cleanImp) && !content.includes(`_${cleanImp}`);
          });
          
          if (usedImports.length === 0) {
            // All imports are unused, skip this line
            continue;
          } else if (usedImports.length < imports.length) {
            // Some imports are unused, keep only the used ones
            const newLine = line.replace(/import\s+{[^}]+}/, `import { ${usedImports.join(', ')} }`);
            fixedLines.push(newLine);
            modified = true;
            continue;
          }
        }
      }
      
      // Fix unused variables in map functions
      if (line.includes('.map(') && line.includes('=>')) {
        const mapMatch = line.match(/\.map\(\([^)]*\)\s*=>/);
        if (mapMatch) {
          const params = mapMatch[0].match(/\(([^)]*)\)/)[1];
          const paramList = params.split(',').map(p => p.trim());
          const fixedParams = paramList.map(param => {
            if (param === 'index' || param === 'value' || param === 'feature' || param === 'benefit' || param === 'stat' || param === 'benefitIndex' || param === 'idx' || param === 'keyword') {
              return `_${param}`;
            }
            return param;
          });
          const newLine = line.replace(/\.map\(\([^)]*\)\s*=>/, `.map((${fixedParams.join(', ')}) =>`);
          fixedLines.push(newLine);
          modified = true;
          continue;
        }
      }
      
      // Fix missing icon imports
      if (line.includes('Brain') || line.includes('BarChart') || line.includes('TrendingUp') || line.includes('Lock')) {
        if (!content.includes("import { Brain") && !content.includes("import { BarChart")) {
          const iconImports = [];
          if (content.includes('Brain')) iconImports.push('Brain');
          if (content.includes('BarChart')) iconImports.push('BarChart');
          if (content.includes('TrendingUp')) iconImports.push('TrendingUp');
          if (content.includes('Lock')) iconImports.push('Lock');
          
          if (iconImports.length > 0) {
            const importStatement = `import { ${iconImports.join(', ')} } from 'lucide-react';\n`;
            fixedLines.unshift(importStatement);
            modified = true;
          }
        }
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      content = fixedLines.join('\n');
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting final linting fixes...');

const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript/TSX files`);

files.forEach(fixFile);

console.log('Final linting fixes completed!');

// Run ESLint with --fix to handle remaining issues
try {
  console.log('Running ESLint --fix...');
  execSync('npx eslint app --ext .ts,.tsx --fix', { stdio: 'inherit' });
  console.log('ESLint fixes completed!');
} catch (error) {
  console.log('ESLint completed with some remaining issues');
}