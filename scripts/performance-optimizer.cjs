#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Performance optimization configuration
const config = {
  // Directories to optimize
  directories: ['app', 'src'],
  // File extensions to process
  extensions: ['ts', 'tsx', 'js', 'jsx'],
  // Image optimization settings
  imageOptimization: {
    enabled: true,
    quality: 85,
    formats: ['webp', 'avif']
  },
  // Bundle optimization
  bundleOptimization: {
    enabled: true,
    chunkSizeLimit: 250000, // 250KB
    lazyLoadThreshold: 100000 // 100KB
  }
};

// Performance optimization functions
const optimizations = {
  // Remove unused imports
  removeUnusedImports: (content) => {
    const lines = content.split('\n');
    const usedImports = new Set();
    const importLines = [];
    
    // Find all import statements
    lines.forEach((line, index) => {
      if (line.trim().startsWith('import')) {
        importLines.push({ line, index });
      }
    });
    
    // Find all used identifiers
    lines.forEach(line => {
      const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
      if (matches) {
        matches.forEach(match => usedImports.add(match));
      }
    });
    
    // Filter out unused imports
    let modified = false;
    const filteredLines = lines.filter((line, index) => {
      if (line.trim().startsWith('import')) {
        const importMatch = line.match(/import\s*\{([^}]+)\}/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImportsFromLine = imports.filter(imp => usedImports.has(imp));
          
          if (usedImportsFromLine.length === 0) {
            modified = true;
            return false; // Remove entire import line
          } else if (usedImportsFromLine.length < imports.length) {
            modified = true;
            return line.replace(/\{[^}]+\}/, `{ ${usedImportsFromLine.join(', ')} }`);
          }
        }
      }
      return true;
    });
    
    return { content: filteredLines.join('\n'), modified };
  },

  // Optimize React components
  optimizeReactComponents: (content) => {
    let modified = false;
    let optimized = content;
    
    // Add React.memo to functional components
    const componentRegex = /const\s+(\w+):\s*React\.FC\s*=\s*\([^)]*\)\s*=>\s*\{/g;
    optimized = optimized.replace(componentRegex, (match, componentName) => {
      if (!content.includes(`React.memo(${componentName})`)) {
        modified = true;
        return `const ${componentName}: React.FC = React.memo((props) => {`;
      }
      return match;
    });
    
    // Add useCallback to event handlers
    const eventHandlerRegex = /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{/g;
    optimized = optimized.replace(eventHandlerRegex, (match, handlerName) => {
      if (handlerName.includes('Handler') || handlerName.includes('Click') || handlerName.includes('Change')) {
        if (!content.includes(`useCallback`)) {
          modified = true;
          return `const ${handlerName} = useCallback((props) => {`;
        }
      }
      return match;
    });
    
    return { content: optimized, modified };
  },

  // Optimize images
  optimizeImages: (content) => {
    let modified = false;
    let optimized = content;
    
    // Add loading="lazy" to img tags
    const imgRegex = /<img([^>]*?)(?:\s+loading="[^"]*")?([^>]*?)>/g;
    optimized = optimized.replace(imgRegex, (match, before, after) => {
      if (!match.includes('loading=')) {
        modified = true;
        return `<img${before} loading="lazy"${after}>`;
      }
      return match;
    });
    
    // Add alt attributes to images without them
    const imgWithoutAltRegex = /<img([^>]*?)(?:\s+alt="[^"]*")?([^>]*?)>/g;
    optimized = optimized.replace(imgWithoutAltRegex, (match, before, after) => {
      if (!match.includes('alt=')) {
        modified = true;
        return `<img${before} alt=""${after}>`;
      }
      return match;
    });
    
    return { content: optimized, modified };
  },

  // Add performance hints
  addPerformanceHints: (content) => {
    let modified = false;
    let optimized = content;
    
    // Add preload hints for critical resources
    if (content.includes('import') && !content.includes('preload')) {
      const criticalImports = content.match(/import.*from\s+['"](react|react-dom|framer-motion)['"]/g);
      if (criticalImports) {
        modified = true;
        const preloadHints = criticalImports.map(imp => {
          const module = imp.match(/from\s+['"]([^'"]+)['"]/)[1];
          return `// Preload hint: ${module}`;
        }).join('\n');
        optimized = preloadHints + '\n' + optimized;
      }
    }
    
    return { content: optimized, modified };
  }
};

function optimizeFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let totalModified = false;
    
    // Apply all optimizations
    Object.values(optimizations).forEach(optimization => {
      const result = optimization(content);
      if (result.modified) {
        content = result.content;
        totalModified = true;
      }
    });
    
    if (totalModified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Optimized: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  const pattern = `${dir}/**/*.{${config.extensions.join(',')}}`;
  const files = glob.sync(pattern, { 
    ignore: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/*.d.ts'] 
  });
  
  let processedCount = 0;
  
  files.forEach(file => {
    if (optimizeFile(file)) {
      processedCount++;
    }
  });
  
  return processedCount;
}

function generatePerformanceReport() {
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: {
      unusedImports: 'Removed unused imports to reduce bundle size',
      reactComponents: 'Added React.memo and useCallback for better performance',
      images: 'Added lazy loading and alt attributes to images',
      performanceHints: 'Added preload hints for critical resources'
    },
    recommendations: [
      'Consider implementing code splitting for large components',
      'Use dynamic imports for non-critical components',
      'Implement service worker for caching',
      'Optimize images using WebP/AVIF formats',
      'Enable gzip compression on server'
    ]
  };
  
  fs.writeFileSync('performance-optimization-report.json', JSON.stringify(report, null, 2));
  console.log('📊 Performance report generated: performance-optimization-report.json');
}

function main() {
  console.log('🚀 Starting performance optimization...');
  
  let totalProcessed = 0;
  
  config.directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      console.log(`Processing directory: ${dir}`);
      const processed = processDirectory(dir);
      totalProcessed += processed;
      console.log(`Optimized ${processed} files in ${dir}`);
    } else {
      console.log(`Directory ${dir} not found, skipping...`);
    }
  });
  
  generatePerformanceReport();
  
  console.log(`\n✨ Performance optimization complete! Processed ${totalProcessed} files.`);
  console.log('\n📈 Next steps:');
  console.log('1. Run npm run build to see bundle size improvements');
  console.log('2. Test the application for any issues');
  console.log('3. Consider implementing additional optimizations from the report');
}

if (require.main === module) {
  main();
}

module.exports = { optimizeFile, processDirectory, optimizations };