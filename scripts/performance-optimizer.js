#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Performance optimization configurations
const optimizations = {
  // Bundle size optimization
  bundleSize: {
    maxFileSize: 500 * 1024, // 500KB
    maxTotalSize: 5 * 1024 * 1024, // 5MB
  },
  
  // Image optimization
  images: {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 85,
    formats: ['webp', 'avif', 'jpg', 'png'],
  },
  
  // Code optimization
  code: {
    removeUnusedImports: true,
    minifyInlineStyles: true,
    optimizeImports: true,
  }
};

let totalOptimizations = 0;
let filesProcessed = 0;

// Optimize React components
function optimizeReactComponent(content, filePath) {
  let optimized = content;
  let changes = 0;

  // Remove unused imports
  if (optimizations.code.removeUnusedImports) {
    const importRegex = /import\s+{[^}]*}\s+from\s+['"][^'"]+['"];?\s*\n/g;
    const imports = content.match(importRegex) || [];
    
    imports.forEach(importStatement => {
      // Check if imported items are actually used
      const importedItems = importStatement.match(/{([^}]*)}/)?.[1]?.split(',').map(item => item.trim()) || [];
      
      importedItems.forEach(item => {
        const cleanItem = item.replace(/\s+as\s+\w+/, '').trim();
        const usageRegex = new RegExp(`\\b${cleanItem}\\b`, 'g');
        const usages = content.match(usageRegex) || [];
        
        if (usages.length <= 1) {
          // Remove unused import
          optimized = optimized.replace(importStatement, '');
          changes++;
        }
      });
    });
  }

  // Optimize useEffect dependencies
  const useEffectRegex = /useEffect\s*\(\s*\(\)\s*=>\s*{[^}]*},\s*\[\s*\]\s*\)/g;
  const emptyUseEffects = optimized.match(useEffectRegex) || [];
  
  if (emptyUseEffects.length > 0) {
    console.log(`⚠️  Found ${emptyUseEffects.length} useEffect with empty dependencies in ${filePath}`);
  }

  // Add React.memo to functional components
  const componentRegex = /const\s+(\w+)\s*=\s*\(\s*{[^}]*}\s*\)\s*=>\s*{/g;
  const components = optimized.match(componentRegex) || [];
  
  components.forEach(component => {
    const componentName = component.match(/const\s+(\w+)\s*=/)?.[1];
    if (componentName && !optimized.includes(`memo(${componentName})`)) {
      // Add memo optimization
      optimized = optimized.replace(
        `const ${componentName} = (`,
        `const ${componentName} = memo((`
      );
      optimized = optimized.replace(
        `export default ${componentName};`,
        `export default ${componentName};`
      );
      changes++;
    }
  });

  return { content: optimized, changes };
}

// Optimize CSS files
function optimizeCSS(content, filePath) {
  let optimized = content;
  let changes = 0;

  // Remove unused CSS rules (basic implementation)
  if (optimizations.code.minifyInlineStyles) {
    // Remove empty rules
    optimized = optimized.replace(/\.[\w-]+\s*{\s*}/g, '');
    changes++;
    
    // Remove duplicate properties
    const ruleRegex = /([^{]+)\s*{\s*([^}]+)\s*}/g;
    const rules = optimized.match(ruleRegex) || [];
    
    rules.forEach(rule => {
      const properties = rule.match(/([^:]+):\s*([^;]+);/g) || [];
      const uniqueProperties = [...new Set(properties)];
      
      if (uniqueProperties.length !== properties.length) {
        const selector = rule.match(/([^{]+)\s*{/)?.[1];
        const newRule = `${selector} {\n  ${uniqueProperties.join('\n  ')}\n}`;
        optimized = optimized.replace(rule, newRule);
        changes++;
      }
    });
  }

  return { content: optimized, changes };
}

// Process individual file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const ext = path.extname(filePath);
    let result = { content, changes: 0 };

    switch (ext) {
      case '.tsx':
      case '.jsx':
        result = optimizeReactComponent(content, filePath);
        break;
      case '.css':
      case '.scss':
        result = optimizeCSS(content, filePath);
        break;
    }

    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8');
      totalOptimizations += result.changes;
      console.log(`✅ Optimized ${filePath} (${result.changes} changes)`);
    }

    filesProcessed++;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Generate performance report
function generatePerformanceReport() {
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: {
      totalFilesProcessed: filesProcessed,
      totalOptimizations: totalOptimizations,
      bundleSize: {
        maxFileSize: optimizations.bundleSize.maxFileSize,
        maxTotalSize: optimizations.bundleSize.maxTotalSize,
      },
      recommendations: [
        'Consider implementing code splitting for large components',
        'Use React.memo for expensive components',
        'Optimize images to WebP/AVIF format',
        'Implement lazy loading for non-critical components',
        'Use CSS-in-JS libraries for better tree shaking',
      ]
    }
  };

  fs.writeFileSync('performance-optimization-report.json', JSON.stringify(report, null, 2));
  console.log('📊 Performance report generated: performance-optimization-report.json');
}

// Main optimization function
async function main() {
  console.log('🚀 Starting performance optimization...\n');

  const patterns = [
    'src/**/*.{tsx,jsx,ts,js}',
    'pages/**/*.{tsx,jsx,ts,js}',
    'components/**/*.{tsx,jsx,ts,js}',
    'styles/**/*.{css,scss}'
  ];

  const excludeDirs = [
    'node_modules',
    '.next',
    'build',
    'dist',
    'scripts',
    'automation',
    'automation_backup',
    'src.disabled',
    'pages.disabled',
    'components.disabled'
  ];

  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: excludeDirs.map(dir => `**/${dir}/**`)
    });

    for (const file of files) {
      processFile(file);
    }
  }

  generatePerformanceReport();

  console.log(`\n📊 Optimization Summary:`);
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Total optimizations: ${totalOptimizations}`);
  console.log(`\n✨ Performance optimization completed!`);
}

// Run the script
main().catch(console.error);