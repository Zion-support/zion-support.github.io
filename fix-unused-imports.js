#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
const getFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules') && !item.includes('dist')) {
      files = files.concat(getFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Common unused imports to remove
    const unusedImports = [
      'Download', 'Share', 'Star', 'Clock', 'Users', 'Award', 'ArrowRight', 'Sparkles',
      'Eye', 'DollarSign', 'Zap', 'Mail', 'MapPin', 'Shield', 'Globe', 'Target',
      'PieChart', 'Activity', 'AlertCircle', 'CheckCircle', 'MessageSquare', 'Phone',
      'TrendingUp', 'Database', 'Settings', 'AlertTriangle', 'Headphones', 'Bot',
      'BarChart', 'Calendar', 'Brain', 'Cpu', 'Search', 'Link', 'useState', 'useEffect',
      'Helmet', 'Check', 'Arrow', 'PhoneIcon', 'MailIcon', 'Location', 'Cube', 'Mic',
      'Truck', 'HardDrive', 'FileCheck', 'Cloud', 'Code', 'Wrench', 'Hammer', 'Paintbrush',
      'Scissors', 'Calculator', 'Clock3', 'Compass', 'TrendingDown', 'Lightning',
      'Crosshair', 'Security', 'People', 'StarIcon', 'Palette', 'Camera', 'Music',
      'Video', 'Gamepad2', 'ShoppingCart', 'CreditCard', 'Factory', 'Car', 'Plane',
      'Ship', 'Train', 'Home', 'Heart', 'Stethoscope', 'GraduationCap', 'Briefcase'
    ];
    
    // Remove unused imports from lucide-react
    const lucideImports = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]lucide-react['"];?/g);
    if (lucideImports) {
      lucideImports.forEach(importLine => {
        const importMatch = importLine.match(/import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            return content.includes(cleanImp) && !unusedImports.includes(cleanImp);
          });
          
          if (usedImports.length === 0) {
            content = content.replace(importLine, '');
          } else if (usedImports.length < imports.length) {
            const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
            content = content.replace(importLine, newImport);
          }
        }
      });
    }
    
    // Remove unused React imports
    const reactImports = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]react['"];?/g);
    if (reactImports) {
      reactImports.forEach(importLine => {
        const importMatch = importLine.match(/import\s*{\s*([^}]*)\s*}\s*from\s*['"]react['"];?/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            return content.includes(cleanImp) && !unusedImports.includes(cleanImp);
          });
          
          if (usedImports.length === 0) {
            content = content.replace(importLine, '');
          } else if (usedImports.length < imports.length) {
            const newImport = `import { ${usedImports.join(', ')} } from 'react';`;
            content = content.replace(importLine, newImport);
          }
        }
      });
    }
    
    // Remove unused react-helmet-async imports
    const helmetImports = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]react-helmet-async['"];?/g);
    if (helmetImports) {
      helmetImports.forEach(importLine => {
        const importMatch = importLine.match(/import\s*{\s*([^}]*)\s*}\s*from\s*['"]react-helmet-async['"];?/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            return content.includes(cleanImp) && !unusedImports.includes(cleanImp);
          });
          
          if (usedImports.length === 0) {
            content = content.replace(importLine, '');
          } else if (usedImports.length < imports.length) {
            const newImport = `import { ${usedImports.join(', ')} } from 'react-helmet-async';`;
            content = content.replace(importLine, newImport);
          }
        }
      });
    }
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');

console.log('Fixing unused imports...');

// Process src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = getFiles(srcDir);
  srcFiles.forEach(removeUnusedImports);
}

// Process app directory
if (fs.existsSync(appDir)) {
  const appFiles = getFiles(appDir);
  appFiles.forEach(removeUnusedImports);
}

console.log('Unused imports cleanup completed!');