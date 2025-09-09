#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Final optimization script
function performFinalOptimizations() {
  console.log('🚀 Starting final optimization process...\n');

  const optimizations = [
    {
      name: 'Bundle Analysis',
      action: () => analyzeBundleSize(),
    },
    {
      name: 'Dependency Cleanup',
      action: () => cleanupDependencies(),
    },
    {
      name: 'Code Splitting Optimization',
      action: () => optimizeCodeSplitting(),
    },
    {
      name: 'Performance Monitoring Setup',
      action: () => setupPerformanceMonitoring(),
    },
    {
      name: 'Build Configuration Review',
      action: () => reviewBuildConfiguration(),
    },
  ];

  const results = [];

  optimizations.forEach(({ name, action }) => {
    console.log(`📋 ${name}...`);
    try {
      const result = action();
      results.push({ name, status: 'success', result });
      console.log(`✅ ${name} completed\n`);
    } catch (error) {
      results.push({ name, status: 'error', error: error.message });
      console.log(`❌ ${name} failed: ${error.message}\n`);
    }
  });

  generateFinalReport(results);
}

function analyzeBundleSize() {
  const distPath = path.join(process.cwd(), 'dist');
  
  if (!fs.existsSync(distPath)) {
    throw new Error('Dist directory not found. Run build first.');
  }

  const files = fs.readdirSync(distPath);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const cssFiles = files.filter(f => f.endsWith('.css'));
  
  let totalSize = 0;
  const fileSizes = [];

  files.forEach(file => {
    const filePath = path.join(distPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;
    fileSizes.push({ file, size: stats.size, sizeKB });
  });

  console.log('📊 Bundle Size Analysis:');
  fileSizes
    .sort((a, b) => b.size - a.size)
    .forEach(({ file, sizeKB }) => {
      console.log(`  ${file}: ${sizeKB} KB`);
    });

  console.log(`\n📈 Total Size: ${(totalSize / 1024).toFixed(2)} KB`);

  return {
    totalSize,
    fileCount: files.length,
    jsFiles: jsFiles.length,
    cssFiles: cssFiles.length,
    fileSizes,
  };
}

function cleanupDependencies() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  const { dependencies = {}, devDependencies = {} } = packageJson;
  const allDeps = { ...dependencies, ...devDependencies };
  
  // Check for potentially unused dependencies
  const potentiallyUnused = [];
  const heavyDeps = [];
  
  Object.keys(allDeps).forEach(dep => {
    // Check for heavy dependencies
    if (['framer-motion', 'react-query', 'axios'].includes(dep)) {
      heavyDeps.push(dep);
    }
    
    // Check for potentially unused
    if (['prop-types', 'react-helmet'].includes(dep)) {
      potentiallyUnused.push(dep);
    }
  });

  console.log('🔍 Dependency Analysis:');
  if (heavyDeps.length > 0) {
    console.log(`  Heavy dependencies: ${heavyDeps.join(', ')}`);
  }
  if (potentiallyUnused.length > 0) {
    console.log(`  Potentially unused: ${potentiallyUnused.join(', ')}`);
  }

  return {
    heavyDeps,
    potentiallyUnused,
    totalDeps: Object.keys(allDeps).length,
  };
}

function optimizeCodeSplitting() {
  const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
  
  if (!fs.existsSync(viteConfigPath)) {
    throw new Error('Vite config not found');
  }

  const config = fs.readFileSync(viteConfigPath, 'utf8');
  
  // Check for code splitting configuration
  const hasManualChunks = config.includes('manualChunks');
  const hasCodeSplitting = config.includes('cssCodeSplit');
  
  console.log('🔧 Code Splitting Configuration:');
  console.log(`  Manual chunks: ${hasManualChunks ? '✅' : '❌'}`);
  console.log(`  CSS code splitting: ${hasCodeSplitting ? '✅' : '❌'}`);

  return {
    hasManualChunks,
    hasCodeSplitting,
    optimized: hasManualChunks && hasCodeSplitting,
  };
}

function setupPerformanceMonitoring() {
  const performanceFiles = [
    'src/hooks/usePerformanceMonitoring.ts',
    'src/components/PerformanceDashboard.tsx',
    'src/utils/bundleOptimizer.ts',
    'src/utils/routeOptimizer.ts',
  ];

  const existingFiles = performanceFiles.filter(file => 
    fs.existsSync(path.join(process.cwd(), file))
  );

  console.log('📊 Performance Monitoring Setup:');
  console.log(`  Files created: ${existingFiles.length}/${performanceFiles.length}`);
  existingFiles.forEach(file => {
    console.log(`    ✅ ${file}`);
  });

  return {
    totalFiles: performanceFiles.length,
    existingFiles: existingFiles.length,
    complete: existingFiles.length === performanceFiles.length,
  };
}

function reviewBuildConfiguration() {
  const configFiles = [
    'vite.config.ts',
    'netlify.toml',
    'package.json',
  ];

  const configs = {};
  
  configFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      configs[file] = {
        exists: true,
        size: fs.statSync(filePath).size,
      };
    } else {
      configs[file] = { exists: false };
    }
  });

  console.log('⚙️ Build Configuration:');
  Object.entries(configs).forEach(([file, config]) => {
    console.log(`  ${file}: ${config.exists ? '✅' : '❌'}`);
  });

  return configs;
}

function generateFinalReport(results) {
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: results,
    summary: {
      total: results.length,
      successful: results.filter(r => r.status === 'success').length,
      failed: results.filter(r => r.status === 'error').length,
    },
    recommendations: [
      'Monitor bundle size regularly',
      'Use performance dashboard in development',
      'Implement lazy loading for non-critical components',
      'Consider using a CDN for static assets',
      'Enable gzip compression on server',
    ],
  };

  const reportPath = path.join(process.cwd(), 'final-optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log('\n📄 Final Optimization Report');
  console.log('============================');
  console.log(`Total optimizations: ${report.summary.total}`);
  console.log(`Successful: ${report.summary.successful}`);
  console.log(`Failed: ${report.summary.failed}`);
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);

  if (report.summary.failed > 0) {
    console.log('\n❌ Failed optimizations:');
    results
      .filter(r => r.status === 'error')
      .forEach(r => console.log(`  - ${r.name}: ${r.error}`));
  }

  console.log('\n🎯 Next Steps:');
  report.recommendations.forEach(rec => {
    console.log(`  • ${rec}`);
  });
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  performFinalOptimizations();
}

export { performFinalOptimizations };