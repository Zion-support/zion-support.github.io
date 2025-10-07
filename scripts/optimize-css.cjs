#!/usr/bin/env node

/**
 * CSS Optimization Script
 * Optimizes CSS files for better performance
 */

const fs = require('fs');
const path = require('path');

console.log('🎨 Optimizing CSS...');

// CSS optimization utilities
const optimizeCSS = (cssContent) => {
  return cssContent
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove unnecessary whitespace
    .replace(/\s+/g, ' ')
    // Remove spaces around specific characters
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    // Remove trailing semicolons
    .replace(/;}/g, '}')
    // Remove leading zeros
    .replace(/0\./g, '.')
    // Remove units from zero values
    .replace(/(\s|:)0(px|em|rem|%|pt|pc|in|cm|mm|ex|ch|vw|vh|vmin|vmax)/g, '$10')
    // Optimize color values
    .replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3/gi, '#$1$2$3')
    // Remove empty rules
    .replace(/[^{}]+{\s*}/g, '')
    .trim();
};

// Find CSS files
const findCSSFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    try {
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...findCSSFiles(fullPath));
      } else if (item.endsWith('.css')) {
        files.push(fullPath);
      }
    } catch (error) {
      // Skip files that can't be accessed
      continue;
    }
  }
  
  return files;
};

// Optimize CSS files
const optimizeCSSFiles = () => {
  const cssFiles = findCSSFiles(process.cwd());
  let optimizedCount = 0;
  let totalSavings = 0;
  
  for (const file of cssFiles) {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');
      const optimizedContent = optimizeCSS(originalContent);
      
      if (originalContent !== optimizedContent) {
        fs.writeFileSync(file, optimizedContent, 'utf8');
        const savings = originalContent.length - optimizedContent.length;
        totalSavings += savings;
        optimizedCount++;
        
        console.log(`✅ Optimized: ${path.relative(process.cwd(), file)} (${savings} bytes saved)`);
      }
    } catch (error) {
      console.warn(`⚠️  Could not optimize ${file}: ${error.message}`);
    }
  }
  
  return { optimizedCount, totalSavings };
};

// Main execution
try {
  const { optimizedCount, totalSavings } = optimizeCSSFiles();
  
  if (optimizedCount > 0) {
    console.log(`🎉 CSS optimization completed!`);
    console.log(`📊 Optimized ${optimizedCount} files`);
    console.log(`💾 Total savings: ${totalSavings} bytes`);
  } else {
    console.log('✅ No CSS files needed optimization');
  }
} catch (error) {
  console.error('❌ CSS optimization failed:', error.message);
  process.exit(1);
}