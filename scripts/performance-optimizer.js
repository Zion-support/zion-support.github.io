#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Automatically optimizes the application for better performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// 1. Optimize bundle size by analyzing imports
function optimizeImports() {
  console.log('📦 Optimizing imports...');
  
  const srcDir = path.join(__dirname, '../src');
  const files = getAllFiles(srcDir, ['.ts', '.tsx']);
  
  let optimizations = 0;
  
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Remove unused imports
    const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*\n/g;
    const imports = content.match(importRegex) || [];
    
    imports.forEach(importStatement => {
      // Check if import is actually used
      const importName = importStatement.match(/import\s+{([^}]+)}/);
      if (importName) {
        const importedItems = importName[1].split(',').map(item => item.trim());
        const unusedItems = importedItems.filter(item => {
          const itemName = item.split(' as ')[0].trim();
          const regex = new RegExp(`\\b${itemName}\\b`, 'g');
          const matches = content.match(regex) || [];
          return matches.length <= 1; // Only appears in import statement
        });
        
        if (unusedItems.length > 0) {
          const usedItems = importedItems.filter(item => !unusedItems.includes(item));
          if (usedItems.length > 0) {
            const newImport = importStatement.replace(
              /{([^}]+)}/,
              `{${usedItems.join(', ')}}`
            );
            content = content.replace(importStatement, newImport);
            modified = true;
            optimizations++;
          } else {
            content = content.replace(importStatement, '');
            modified = true;
            optimizations++;
          }
        }
      }
    });
    
    if (modified) {
      fs.writeFileSync(file, content);
    }
  });
  
  console.log(`✅ Optimized ${optimizations} import statements`);
}

// 2. Optimize images and assets
function optimizeAssets() {
  console.log('🖼️ Optimizing assets...');
  
  const publicDir = path.join(__dirname, '../public');
  const distDir = path.join(__dirname, '../dist');
  
  // Create optimized asset manifest
  const assetManifest = {
    images: [],
    fonts: [],
    scripts: [],
    styles: []
  };
  
  // Scan for assets
  if (fs.existsSync(publicDir)) {
    const publicFiles = getAllFiles(publicDir, ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);
    assetManifest.images = publicFiles.map(file => path.relative(publicDir, file));
  }
  
  if (fs.existsSync(distDir)) {
    const distFiles = getAllFiles(distDir, ['.js', '.css', '.woff', '.woff2', '.ttf']);
    distFiles.forEach(file => {
      const ext = path.extname(file);
      const relativePath = path.relative(distDir, file);
      
      if (['.woff', '.woff2', '.ttf'].includes(ext)) {
        assetManifest.fonts.push(relativePath);
      } else if (ext === '.js') {
        assetManifest.scripts.push(relativePath);
      } else if (ext === '.css') {
        assetManifest.styles.push(relativePath);
      }
    });
  }
  
  // Write asset manifest
  fs.writeFileSync(
    path.join(__dirname, '../public/asset-manifest.json'),
    JSON.stringify(assetManifest, null, 2)
  );
  
  console.log('✅ Created asset manifest');
}

// 3. Generate performance report
function generatePerformanceReport() {
  console.log('📊 Generating performance report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: {
      importsOptimized: 0,
      assetsOptimized: 0,
      bundleSize: 0,
      warningsReduced: 0
    },
    recommendations: [
      'Enable gzip compression on server',
      'Implement service worker for caching',
      'Use CDN for static assets',
      'Optimize images with WebP format',
      'Implement lazy loading for images',
      'Use code splitting for large components'
    ]
  };
  
  // Calculate bundle size
  const distDir = path.join(__dirname, '../dist');
  if (fs.existsSync(distDir)) {
    const files = getAllFiles(distDir, ['.js', '.css']);
    report.optimizations.bundleSize = files.reduce((total, file) => {
      const stats = fs.statSync(file);
      return total + stats.size;
    }, 0);
  }
  
  fs.writeFileSync(
    path.join(__dirname, '../performance-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('✅ Performance report generated');
}

// Helper function to get all files with specific extensions
function getAllFiles(dir, extensions) {
  let files = [];
  
  if (!fs.existsSync(dir)) return files;
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// 4. Optimize CSS
function optimizeCSS() {
  console.log('🎨 Optimizing CSS...');
  
  const cssFiles = getAllFiles(path.join(__dirname, '../src'), ['.css']);
  let optimizations = 0;
  
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Remove unused CSS rules (basic implementation)
    const rules = content.match(/[^{}]+{[^{}]*}/g) || [];
    
    rules.forEach(rule => {
      const selector = rule.split('{')[0].trim();
      
      // Skip keyframes and media queries
      if (selector.includes('@') || selector.includes('keyframes')) {
        return;
      }
      
      // Check if selector is used in components
      const srcDir = path.join(__dirname, '../src');
      const componentFiles = getAllFiles(srcDir, ['.tsx', '.ts']);
      
      const isUsed = componentFiles.some(componentFile => {
        const componentContent = fs.readFileSync(componentFile, 'utf8');
        return componentContent.includes(selector.replace(/[.#]/g, ''));
      });
      
      if (!isUsed) {
        content = content.replace(rule, '');
        modified = true;
        optimizations++;
      }
    });
    
    if (modified) {
      fs.writeFileSync(file, content);
    }
  });
  
  console.log(`✅ Optimized ${optimizations} CSS rules`);
}

// Main execution
async function main() {
  try {
    optimizeImports();
    optimizeAssets();
    optimizeCSS();
    generatePerformanceReport();
    
    console.log('🎉 Performance optimization completed successfully!');
    console.log('📈 Check performance-report.json for detailed results');
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  optimizeImports,
  optimizeAssets,
  optimizeCSS,
  generatePerformanceReport
};