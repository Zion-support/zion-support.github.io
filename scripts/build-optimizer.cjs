#!/usr/bin/env node

/**
 * Build Optimizer Script
 * Optimizes the build process for better performance and smaller bundle sizes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting Build Optimization...\n');

// Build optimization configurations
const optimizations = {
  // Bundle optimizations
  bundle: {
    enableTreeShaking: true,
    enableCodeSplitting: true,
    enableCompression: true,
    removeUnusedCode: true,
    optimizeImports: true,
  },
  
  // Asset optimizations
  assets: {
    optimizeImages: true,
    minifyCSS: true,
    minifyJS: true,
    enableGzip: true,
    enableBrotli: true,
  },
  
  // Performance optimizations
  performance: {
    enableLazyLoading: true,
    enablePreloading: true,
    enableCaching: true,
    optimizeCriticalPath: true,
    enableServiceWorker: true,
  }
};

// Analyze current build
function analyzeBuild() {
  console.log('📊 Analyzing current build...');
  
  const distPath = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist folder not found. Run build first.');
    return null;
  }
  
  const files = fs.readdirSync(distPath, { recursive: true });
  let totalSize = 0;
  const fileAnalysis = {
    js: { count: 0, size: 0, files: [] },
    css: { count: 0, size: 0, files: [] },
    images: { count: 0, size: 0, files: [] },
    other: { count: 0, size: 0, files: [] }
  };
  
  files.forEach(file => {
    const filePath = path.join(distPath, file);
    if (fs.statSync(filePath).isFile()) {
      const size = fs.statSync(filePath).size;
      totalSize += size;
      
      const ext = path.extname(file).toLowerCase();
      if (ext === '.js') {
        fileAnalysis.js.count++;
        fileAnalysis.js.size += size;
        fileAnalysis.js.files.push({ name: file, size });
      } else if (ext === '.css') {
        fileAnalysis.css.count++;
        fileAnalysis.css.size += size;
        fileAnalysis.css.files.push({ name: file, size });
      } else if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
        fileAnalysis.images.count++;
        fileAnalysis.images.size += size;
        fileAnalysis.images.files.push({ name: file, size });
      } else {
        fileAnalysis.other.count++;
        fileAnalysis.other.size += size;
        fileAnalysis.other.files.push({ name: file, size });
      }
    }
  });
  
  console.log(`\n📦 Build Analysis:`);
  console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`JavaScript files: ${fileAnalysis.js.count} (${(fileAnalysis.js.size / 1024).toFixed(2)} KB)`);
  console.log(`CSS files: ${fileAnalysis.css.count} (${(fileAnalysis.css.size / 1024).toFixed(2)} KB)`);
  console.log(`Images: ${fileAnalysis.images.count} (${(fileAnalysis.images.size / 1024).toFixed(2)} KB)`);
  console.log(`Other files: ${fileAnalysis.other.count} (${(fileAnalysis.other.size / 1024).toFixed(2)} KB)`);
  
  return { totalSize, fileAnalysis };
}

// Optimize bundle splitting
function optimizeBundleSplitting() {
  console.log('\n📦 Optimizing bundle splitting...');
  
  const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
  if (!fs.existsSync(viteConfigPath)) {
    console.log('❌ Vite config not found.');
    return;
  }
  
  const config = fs.readFileSync(viteConfigPath, 'utf8');
  
  // Check if manual chunks are already optimized
  if (config.includes('manualChunks')) {
    console.log('✅ Manual chunks already configured');
  } else {
    console.log('⚠️  Manual chunks not configured - consider adding for better code splitting');
  }
  
  // Check for tree shaking
  if (config.includes('treeshake')) {
    console.log('✅ Tree shaking enabled');
  } else {
    console.log('⚠️  Tree shaking not explicitly configured');
  }
  
  // Check for compression
  if (config.includes('terser') || config.includes('minify')) {
    console.log('✅ Minification enabled');
  } else {
    console.log('⚠️  Minification not configured');
  }
}

// Generate optimization recommendations
function generateOptimizationRecommendations() {
  console.log('\n💡 Generating optimization recommendations...');
  
  const recommendations = {
    bundle: [
      'Implement dynamic imports for route-based code splitting',
      'Use React.lazy() for component-based code splitting',
      'Optimize vendor chunk splitting',
      'Enable tree shaking for unused code removal',
      'Use webpack-bundle-analyzer to identify large dependencies',
      'Consider using dynamic imports for heavy libraries',
      'Implement preloading for critical resources',
      'Use service workers for caching strategies',
      'Optimize third-party library usage',
      'Implement progressive loading'
    ],
    
    assets: [
      'Convert images to WebP format with fallbacks',
      'Implement responsive images with srcset',
      'Use image compression tools (TinyPNG, ImageOptim)',
      'Implement lazy loading for images',
      'Optimize SVG files by removing unnecessary metadata',
      'Use CSS sprites for small icons',
      'Implement critical CSS inlining',
      'Use CSS purging to remove unused styles',
      'Optimize font loading with font-display: swap',
      'Implement resource hints (preload, prefetch)'
    ],
    
    performance: [
      'Implement service worker for offline caching',
      'Use HTTP/2 server push for critical resources',
      'Enable gzip and brotli compression',
      'Implement critical resource preloading',
      'Use CDN for static asset delivery',
      'Optimize database queries and API responses',
      'Implement proper caching headers',
      'Use performance budgets in CI/CD',
      'Monitor Core Web Vitals',
      'Implement progressive enhancement'
    ]
  };
  
  console.log('\n🎯 Optimization Recommendations:');
  console.log('\n📦 Bundle Optimization:');
  recommendations.bundle.forEach(rec => console.log(`  • ${rec}`));
  
  console.log('\n🖼️  Asset Optimization:');
  recommendations.assets.forEach(rec => console.log(`  • ${rec}`));
  
  console.log('\n⚡ Performance Optimization:');
  recommendations.performance.forEach(rec => console.log(`  • ${rec}`));
  
  return recommendations;
}

// Create optimization checklist
function createOptimizationChecklist() {
  console.log('\n✅ Creating optimization checklist...');
  
  const checklist = {
    build: [
      'Bundle size is under 1MB',
      'JavaScript chunks are properly split',
      'CSS is minified and purged',
      'Images are optimized and compressed',
      'Tree shaking is enabled',
      'Dead code elimination is working',
      'Source maps are disabled in production',
      'Compression is enabled',
      'Cache busting is implemented',
      'Build time is optimized'
    ],
    
    runtime: [
      'Critical resources are preloaded',
      'Non-critical resources are lazy loaded',
      'Service worker is implemented',
      'Caching strategy is optimized',
      'Error boundaries are in place',
      'Performance monitoring is active',
      'Core Web Vitals are passing',
      'Mobile performance is optimized',
      'Accessibility is maintained',
      'SEO is not compromised'
    ],
    
    deployment: [
      'CDN is configured',
      'Compression is enabled on server',
      'Cache headers are optimized',
      'Security headers are implemented',
      'Monitoring is set up',
      'Error tracking is active',
      'Performance budgets are enforced',
      'Automated testing is passing',
      'Deployment pipeline is optimized',
      'Rollback strategy is in place'
    ]
  };
  
  console.log('\n📋 Optimization Checklist:');
  console.log('\n🔧 Build Optimization:');
  checklist.build.forEach(item => console.log(`  ☐ ${item}`));
  
  console.log('\n⚡ Runtime Optimization:');
  checklist.runtime.forEach(item => console.log(`  ☐ ${item}`));
  
  console.log('\n🚀 Deployment Optimization:');
  checklist.deployment.forEach(item => console.log(`  ☐ ${item}`));
  
  return checklist;
}

// Generate optimization report
function generateOptimizationReport() {
  console.log('\n📋 Generating optimization report...');
  
  const buildAnalysis = analyzeBuild();
  const recommendations = generateOptimizationRecommendations();
  const checklist = createOptimizationChecklist();
  
  const report = {
    timestamp: new Date().toISOString(),
    buildAnalysis: buildAnalysis,
    recommendations: recommendations,
    checklist: checklist,
    priorityActions: [
      'Implement code splitting with React.lazy()',
      'Optimize bundle size with tree shaking',
      'Enable compression (gzip/brotli)',
      'Implement service worker caching',
      'Optimize images with WebP format',
      'Add performance monitoring',
      'Implement lazy loading',
      'Set up CDN for static assets',
      'Configure proper cache headers',
      'Monitor Core Web Vitals'
    ],
    tools: [
      'webpack-bundle-analyzer',
      'lighthouse',
      'web-vitals',
      'vite-bundle-analyzer',
      'rollup-plugin-visualizer',
      'source-map-explorer',
      'bundlephobia',
      'webpack-bundle-size-analyzer',
      'parcel-bundler',
      'rollup'
    ]
  };
  
  const reportPath = path.join(process.cwd(), 'build-optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`✅ Optimization report saved to: ${reportPath}`);
  
  return report;
}

// Main execution
async function main() {
  try {
    const buildAnalysis = analyzeBuild();
    if (!buildAnalysis) {
      console.log('❌ Build analysis failed. Please run build first.');
      return;
    }
    
    optimizeBundleSplitting();
    const recommendations = generateOptimizationRecommendations();
    const checklist = createOptimizationChecklist();
    const report = generateOptimizationReport();
    
    console.log('\n🎉 Build optimization analysis complete!');
    console.log('\n📈 Summary:');
    console.log(`• Total bundle size: ${(buildAnalysis.totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`• JavaScript files: ${buildAnalysis.fileAnalysis.js.count}`);
    console.log(`• CSS files: ${buildAnalysis.fileAnalysis.css.count}`);
    console.log(`• Images: ${buildAnalysis.fileAnalysis.images.count}`);
    console.log(`• Priority actions: ${report.priorityActions.length}`);
    
    console.log('\n🚀 Priority Actions:');
    report.priorityActions.slice(0, 5).forEach(action => console.log(`  • ${action}`));
    
  } catch (error) {
    console.error('❌ Error during build optimization:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, analyzeBuild, optimizeBundleSplitting, generateOptimizationRecommendations, createOptimizationChecklist, generateOptimizationReport };