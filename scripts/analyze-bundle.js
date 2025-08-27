#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const BUNDLE_ANALYZER_PACKAGE = '@next/bundle-analyzer';

async function analyzeBundle() {
  console.log('🔍 Analyzing bundle size...\n');

  try {
    // Check if bundle analyzer is installed
    try {
      require.resolve(BUNDLE_ANALYZER_PACKAGE);
    } catch {
      console.log(`📦 Installing ${BUNDLE_ANALYZER_PACKAGE}...`);
      execSync(`npm install --save-dev ${BUNDLE_ANALYZER_PACKAGE}`, { stdio: 'inherit' });
    }

    // Build the project
    console.log('🏗️  Building project...');
    execSync('npm run build', { stdio: 'inherit' });

    // Analyze bundle
    console.log('📊 Analyzing bundle...');
    execSync('npx @next/bundle-analyzer dist', { stdio: 'inherit' });

    // Generate bundle report
    generateBundleReport();

  } catch (error) {
    console.error('❌ Bundle analysis failed:', error.message);
    process.exit(1);
  }
}

function generateBundleReport() {
  const distPath = path.join(process.cwd(), 'dist');
  const jsPath = path.join(distPath, 'js');
  
  if (!fs.existsSync(jsPath)) {
    console.log('⚠️  No dist/js directory found. Run build first.');
    return;
  }

  const jsFiles = fs.readdirSync(jsPath)
    .filter(file => file.endsWith('.js'))
    .map(file => {
      const filePath = path.join(jsPath, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        size: stats.size,
        sizeKB: (stats.size / 1024).toFixed(2)
      };
    })
    .sort((a, b) => b.size - a.size);

  console.log('\n📋 Bundle Size Report:');
  
  let totalSize = 0;
  jsFiles.forEach(file => {
    totalSize += file.size;
    console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`);
  });

  console.log(`Total JS Size: ${(totalSize / 1024).toFixed(2)} KB`);

  // Recommendations
  console.log('\n💡 Optimization Recommendations:');
  
  const largeFiles = jsFiles.filter(file => file.size > 100 * 1024); // > 100KB
  if (largeFiles.length > 0) {
    console.log('🚨 Large files detected:');
    largeFiles.forEach(file => {
      console.log(`   - ${file.name}: ${file.sizeKB} KB`);
    });
    console.log('   Consider code splitting or lazy loading for these components.');
  }

  const mediumFiles = jsFiles.filter(file => file.size > 50 * 1024 && file.size <= 100 * 1024);
  if (mediumFiles.length > 0) {
    console.log('⚠️  Medium files:');
    mediumFiles.forEach(file => {
      console.log(`   - ${file.name}: ${file.sizeKB} KB`);
    });
  }

  // Performance tips
  console.log('\n🚀 Performance Tips:');
  console.log('   - Use React.lazy() for route-based code splitting');
  console.log('   - Implement dynamic imports for heavy components');
  console.log('   - Consider using webpack-bundle-analyzer for detailed analysis');
  console.log('   - Optimize images and use modern formats (WebP, AVIF)');
  console.log('   - Enable gzip compression on your server');
}

// Run analysis
analyzeBundle().catch(console.error);