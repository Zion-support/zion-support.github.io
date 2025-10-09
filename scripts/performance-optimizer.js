#!/usr/bin/env node

/**
 * Performance Optimizer Script
 * Removes unused code, optimizes imports, and improves build performance
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Function to remove unused imports
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove common unused imports
    const unusedImports = [
      'Shield', 'Zap', 'Target', 'Brain', 'Settings', 'RefreshCw', 'Eye',
      'BarChart', 'Users', 'ArrowRight', 'Sparkles', 'Cpu', 'Globe', 'Database',
      'Smartphone', 'Lock', 'TrendingUp', 'Star', 'Settings', 'Monitor',
      'MessageSquare', 'Server', 'Cloud', 'Mail', 'Calendar', 'FileText',
      'Image', 'Video', 'Music', 'Laptop'
    ];
    
    // Remove unused imports from lucide-react
    const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    content = content.replace(importRegex, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = importList.filter(imp => {
        const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
        return !unusedImports.includes(cleanImport);
      });
      
      if (usedImports.length === 0) {
        return '';
      }
      
      return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Optimized imports in ${filePath}`);
  } catch (error) {
    console.log(`⚠️  Could not optimize ${filePath}: ${error.message}`);
  }
}

// Function to remove unused variables
function removeUnusedVariables(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove common unused variable patterns
    const patterns = [
      // Remove unused state variables
      /const\s+\[(\w+),\s*set\w+\]\s*=\s*useState\([^)]*\);\s*\/\/\s*unused/gi,
      // Remove unused function parameters
      /\/\*\s*unused\s*\*\/\s*[^,;]+/g,
      // Remove console.log statements in production
      /console\.(log|warn|info)\([^)]*\);\s*\/\*\s*production\s*\*\/\s*/g
    ];
    
    patterns.forEach(pattern => {
      content = content.replace(pattern, '');
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Cleaned unused variables in ${filePath}`);
  } catch (error) {
    console.log(`⚠️  Could not clean ${filePath}: ${error.message}`);
  }
}

// Function to optimize images
function optimizeImages() {
  console.log('🖼️  Optimizing images...');
  
  const imageDir = path.join(__dirname, '../public/images');
  if (fs.existsSync(imageDir)) {
    try {
      // Use sharp to optimize images if available
      execSync('npx sharp-cli --help', { stdio: 'ignore' });
      execSync(`npx sharp-cli optimize ${imageDir}/*.{jpg,jpeg,png} --output ${imageDir}/optimized/`, { stdio: 'pipe' });
      console.log('✅ Images optimized');
    } catch (error) {
      console.log('⚠️  Image optimization skipped (sharp-cli not available)');
    }
  }
}

// Function to generate bundle analysis
function generateBundleAnalysis() {
  console.log('📊 Generating bundle analysis...');
  
  try {
    execSync('npm run build:analyze', { stdio: 'pipe' });
    console.log('✅ Bundle analysis generated');
  } catch (error) {
    console.log('⚠️  Bundle analysis failed');
  }
}

// Main optimization process
function main() {
  const appDir = path.join(__dirname, '../app');
  
  // Find all TypeScript/JavaScript files
  function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }
  
  const files = findFiles(appDir);
  
  console.log(`📁 Found ${files.length} files to optimize`);
  
  // Process each file
  files.forEach(file => {
    removeUnusedImports(file);
    removeUnusedVariables(file);
  });
  
  // Optimize images
  optimizeImages();
  
  // Generate bundle analysis
  generateBundleAnalysis();
  
  console.log('🎉 Performance optimization complete!');
  console.log('📈 Run "npm run build" to see the improvements');
}

// Run the optimizer
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { removeUnusedImports, removeUnusedVariables, optimizeImages };