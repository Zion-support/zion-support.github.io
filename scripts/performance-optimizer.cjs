#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('⚡ Starting Performance Optimizer...');

const performanceReport = {
  timestamp: new Date().toISOString(),
  optimizations: [],
  recommendations: [],
  metrics: {},
  overall: 'optimized'
};

function addOptimization(type, description, impact, implementation) {
  performanceReport.optimizations.push({
    type,
    description,
    impact,
    implementation,
    timestamp: new Date().toISOString()
  });
}

function addRecommendation(category, description, priority) {
  performanceReport.recommendations.push({
    category,
    description,
    priority,
    timestamp: new Date().toISOString()
  });
}

try {
  // Check bundle size
  if (fs.existsSync('.next')) {
    try {
      const buildInfo = fs.readdirSync('.next');
      addOptimization(
        'build',
        'Build directory exists - production build available',
        'high',
        'Use production build for optimal performance'
      );
    } catch (error) {
      addRecommendation('build', 'Run production build for better performance', 'high');
    }
  }

  // Check for large images
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const largeImages = [];
  
  function findLargeImages(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir, { recursive: true });
    files.forEach(file => {
      if (typeof file === 'string') {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          const filePath = path.join(dir, file);
          try {
            const stats = fs.statSync(filePath);
            if (stats.size > 500000) { // 500KB
              largeImages.push({
                file: filePath,
                size: stats.size,
                sizeKB: Math.round(stats.size / 1024)
              });
            }
          } catch (error) {
            // Skip files that can't be accessed
          }
        }
      }
    });
  }

  findLargeImages('public');
  findLargeImages('pages');
  findLargeImages('components');

  if (largeImages.length > 0) {
    largeImages.forEach(img => {
      addRecommendation(
        'images',
        `Large image detected: ${img.file} (${img.sizeKB}KB)`,
        'medium'
      );
    });
  }

  // Check for unused imports
  const unusedImports = [];
  const directories = ['pages', 'components', 'lib'];
  
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir, { recursive: true });
      files.forEach(file => {
        if (typeof file === 'string' && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
          const filePath = path.join(dir, file);
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            const lines = content.split('\n');
            
            lines.forEach((line, index) => {
              // Simple check for unused React imports
              if (line.includes('import React') && !content.includes('React.')) {
                unusedImports.push({
                  file: filePath,
                  line: index + 1,
                  import: line.trim()
                });
              }
            });
          } catch (error) {
            // Skip files that can't be read
          }
        }
      });
    }
  });

  if (unusedImports.length > 0) {
    addRecommendation(
      'imports',
      `Found ${unusedImports.length} potentially unused imports`,
      'low'
    );
  }

  // Check for console.log statements in production code
  const consoleStatements = [];
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir, { recursive: true });
      files.forEach(file => {
        if (typeof file === 'string' && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
          const filePath = path.join(dir, file);
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            const lines = content.split('\n');
            
            lines.forEach((line, index) => {
              if (line.includes('console.log') || line.includes('console.warn') || line.includes('console.error')) {
                consoleStatements.push({
                  file: filePath,
                  line: index + 1,
                  statement: line.trim()
                });
              }
            });
          } catch (error) {
            // Skip files that can't be read
          }
        }
      });
    }
  });

  if (consoleStatements.length > 0) {
    addRecommendation(
      'logging',
      `Found ${consoleStatements.length} console statements - remove for production`,
      'medium'
    );
  }

  // Check Next.js configuration for performance optimizations
  if (fs.existsSync('next.config.js')) {
    const nextConfig = fs.readFileSync('next.config.js', 'utf8');
    
    if (nextConfig.includes('compress: true')) {
      addOptimization('compression', 'Gzip compression enabled', 'high', 'Already implemented');
    } else {
      addRecommendation('compression', 'Enable gzip compression in Next.js config', 'high');
    }
    
    if (nextConfig.includes('optimizeCss')) {
      addOptimization('css', 'CSS optimization enabled', 'medium', 'Already implemented');
    } else {
      addRecommendation('css', 'Enable CSS optimization in Next.js config', 'medium');
    }
    
    if (nextConfig.includes('removeConsole')) {
      addOptimization('console', 'Console removal enabled for production', 'medium', 'Already implemented');
    } else {
      addRecommendation('console', 'Remove console statements in production builds', 'medium');
    }
  }

  // Check for lazy loading opportunities
  const lazyLoadingOpportunities = [];
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir, { recursive: true });
      files.forEach(file => {
        if (typeof file === 'string' && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
          const filePath = path.join(dir, file);
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Check for large components that could be lazy loaded
            if (content.length > 5000 && !content.includes('React.lazy') && !content.includes('dynamic')) {
              lazyLoadingOpportunities.push({
                file: filePath,
                size: content.length,
                reason: 'Large component file - consider lazy loading'
              });
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      });
    }
  });

  if (lazyLoadingOpportunities.length > 0) {
    addRecommendation(
      'lazy-loading',
      `Found ${lazyLoadingOpportunities.length} components that could benefit from lazy loading`,
      'medium'
    );
  }

  // Performance metrics
  performanceReport.metrics = {
    largeImages: largeImages.length,
    unusedImports: unusedImports.length,
    consoleStatements: consoleStatements.length,
    lazyLoadingOpportunities: lazyLoadingOpportunities.length,
    totalFiles: directories.reduce((total, dir) => {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir, { recursive: true });
        return total + files.filter(f => typeof f === 'string' && (f.endsWith('.tsx') || f.endsWith('.ts'))).length;
      }
      return total;
    }, 0)
  };

  // Add general performance recommendations
  addRecommendation('caching', 'Implement proper caching strategies', 'high');
  addRecommendation('cdn', 'Use CDN for static assets', 'medium');
  addRecommendation('minification', 'Ensure all assets are minified', 'high');
  addRecommendation('bundling', 'Optimize bundle splitting', 'medium');
  addRecommendation('preloading', 'Implement resource preloading for critical assets', 'medium');

} catch (error) {
  addRecommendation('error', `Performance optimizer error: ${error.message}`, 'high');
}

// Generate report
const reportPath = 'automation-reports/performance-optimizer-report.json';
fs.mkdirSync('automation-reports', { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));

console.log('✅ Performance Optimizer completed');
console.log(`📊 Optimizations found: ${performanceReport.optimizations.length}`);
console.log(`💡 Recommendations: ${performanceReport.recommendations.length}`);
console.log(`📄 Report saved to: ${reportPath}`);

// Print summary
const highPriority = performanceReport.recommendations.filter(r => r.priority === 'high').length;
const mediumPriority = performanceReport.recommendations.filter(r => r.priority === 'medium').length;
const lowPriority = performanceReport.recommendations.filter(r => r.priority === 'low').length;

console.log(`\n📈 Recommendations by Priority:`);
console.log(`   🔴 High: ${highPriority}`);
console.log(`   🟡 Medium: ${mediumPriority}`);
console.log(`   🟢 Low: ${lowPriority}`);

console.log('\n✅ Performance optimization analysis completed');
process.exit(0);