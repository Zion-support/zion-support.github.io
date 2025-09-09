#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dependencies that are commonly unused or can be optimized
const UNUSED_DEPENDENCIES = [
  'lodash',
  'moment',
  'jquery',
  'bootstrap',
  'popper.js',
  'react-helmet', // replaced by react-helmet-async
  'react-router', // replaced by react-router-dom
  'prop-types', // not needed with TypeScript
];

// Dependencies that can be replaced with lighter alternatives
const REPLACEMENTS = {
  'moment': 'date-fns',
  'lodash': 'lodash-es',
  'axios': 'fetch', // native fetch
  'jquery': 'native-dom-methods',
};

// Analyze package.json for optimization opportunities
function analyzeDependencies() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.error('package.json not found');
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const { dependencies = {}, devDependencies = {} } = packageJson;
  
  const allDeps = { ...dependencies, ...devDependencies };
  const unusedDeps = [];
  const replaceableDeps = [];
  
  // Check for unused dependencies
  Object.keys(allDeps).forEach(dep => {
    if (UNUSED_DEPENDENCIES.includes(dep)) {
      unusedDeps.push(dep);
    }
    if (REPLACEMENTS[dep]) {
      replaceableDeps.push({
        current: dep,
        replacement: REPLACEMENTS[dep],
        size: getPackageSize(dep)
      });
    }
  });

  console.log('📊 Dependency Analysis Report');
  console.log('================================');
  
  if (unusedDeps.length > 0) {
    console.log('\n❌ Potentially unused dependencies:');
    unusedDeps.forEach(dep => {
      console.log(`  - ${dep} (${allDeps[dep]})`);
    });
  }
  
  if (replaceableDeps.length > 0) {
    console.log('\n🔄 Dependencies that can be replaced:');
    replaceableDeps.forEach(({ current, replacement, size }) => {
      console.log(`  - ${current} → ${replacement} (saves ~${size}KB)`);
    });
  }
  
  // Calculate potential savings
  const totalUnusedDeps = unusedDeps.length;
  const totalReplaceableDeps = replaceableDeps.length;
  
  console.log(`\n📈 Optimization Summary:`);
  console.log(`  - Unused dependencies: ${totalUnusedDeps}`);
  console.log(`  - Replaceable dependencies: ${totalReplaceableDeps}`);
  console.log(`  - Potential bundle size reduction: ~${(totalUnusedDeps + totalReplaceableDeps) * 50}KB`);
  
  return {
    unusedDeps,
    replaceableDeps,
    totalUnusedDeps,
    totalReplaceableDeps
  };
}

// Get estimated package size (simplified)
function getPackageSize(packageName) {
  const sizeMap = {
    'moment': 67,
    'lodash': 71,
    'jquery': 87,
    'axios': 13,
    'react-helmet': 5,
    'bootstrap': 25,
  };
  return sizeMap[packageName] || 10;
}

// Generate optimization recommendations
function generateOptimizationReport() {
  const analysis = analyzeDependencies();
  
  const report = {
    timestamp: new Date().toISOString(),
    analysis,
    recommendations: [
      'Remove unused dependencies to reduce bundle size',
      'Replace heavy dependencies with lighter alternatives',
      'Use tree shaking to eliminate dead code',
      'Implement code splitting for better loading performance',
      'Consider using dynamic imports for non-critical features'
    ],
    nextSteps: [
      'Run npm audit to check for security vulnerabilities',
      'Use bundle analyzer to identify large chunks',
      'Implement lazy loading for routes and components',
      'Optimize images and assets',
      'Enable gzip compression on server'
    ]
  };
  
  const reportPath = path.join(process.cwd(), 'dependency-optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  
  return report;
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🚀 Starting dependency optimization analysis...\n');
  generateOptimizationReport();
}

export {
  analyzeDependencies,
  generateOptimizationReport
};