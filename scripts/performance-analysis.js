#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Analyze bundle size and performance
function analyzeBundle() {
  const distPath = path.join(__dirname, '../dist');
  const assetsPath = path.join(distPath, 'assets');
  
  if (!fs.existsSync(assetsPath)) {
    console.log('❌ Dist folder not found. Please run npm run build first.');
    return;
  }

  const files = fs.readdirSync(assetsPath);
  const analysis = {
    timestamp: new Date().toISOString(),
    totalFiles: files.length,
    totalSize: 0,
    jsFiles: [],
    cssFiles: [],
    otherFiles: [],
    recommendations: []
  };

  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    
    analysis.totalSize += size;
    
    if (file.endsWith('.js')) {
      analysis.jsFiles.push({ name: file, size });
    } else if (file.endsWith('.css')) {
      analysis.cssFiles.push({ name: file, size });
    } else {
      analysis.otherFiles.push({ name: file, size });
    }
  });

  // Sort by size
  analysis.jsFiles.sort((a, b) => b.size - a.size);
  analysis.cssFiles.sort((a, b) => b.size - a.size);

  // Generate recommendations
  const largestJsFile = analysis.jsFiles[0];
  if (largestJsFile && largestJsFile.size > 100000) {
    analysis.recommendations.push(`Consider splitting large JS file: ${largestJsFile.name} (${(largestJsFile.size / 1024).toFixed(2)}KB)`);
  }

  if (analysis.totalSize > 1000000) {
    analysis.recommendations.push(`Total bundle size is large: ${(analysis.totalSize / 1024).toFixed(2)}KB. Consider code splitting.`);
  }

  if (analysis.jsFiles.length > 20) {
    analysis.recommendations.push(`Many JS files (${analysis.jsFiles.length}). Consider consolidating smaller files.`);
  }

  // Performance metrics
  analysis.performanceMetrics = {
    totalSize: analysis.totalSize,
    jsFiles: analysis.jsFiles.length,
    cssFiles: analysis.cssFiles.length,
    largestJsFile: largestJsFile ? largestJsFile.name : 'N/A',
    largestJsSize: largestJsFile ? largestJsFile.size : 0,
    averageJsSize: analysis.jsFiles.length > 0 ? 
      Math.round(analysis.jsFiles.reduce((sum, file) => sum + file.size, 0) / analysis.jsFiles.length) : 0
  };

  return analysis;
}

// Generate performance report
function generateReport() {
  console.log('🔍 Analyzing bundle performance...\n');
  
  const analysis = analyzeBundle();
  
  if (!analysis) return;

  console.log('📊 Bundle Analysis Results:');
  console.log('========================');
  console.log(`Total Files: ${analysis.totalFiles}`);
  console.log(`Total Size: ${(analysis.totalSize / 1024).toFixed(2)} KB`);
  console.log(`JS Files: ${analysis.jsFiles.length}`);
  console.log(`CSS Files: ${analysis.cssFiles.length}`);
  console.log(`Other Files: ${analysis.otherFiles.length}\n`);

  console.log('📈 Performance Metrics:');
  console.log('======================');
  console.log(`Largest JS File: ${analysis.performanceMetrics.largestJsFile} (${(analysis.performanceMetrics.largestJsSize / 1024).toFixed(2)} KB)`);
  console.log(`Average JS File Size: ${(analysis.performanceMetrics.averageJsSize / 1024).toFixed(2)} KB\n`);

  console.log('🔧 Recommendations:');
  console.log('==================');
  if (analysis.recommendations.length === 0) {
    console.log('✅ No major performance issues found!');
  } else {
    analysis.recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec}`);
    });
  }

  // Save detailed report
  const reportPath = path.join(__dirname, '../performance-analysis-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);

  // Performance score calculation
  let score = 100;
  if (analysis.totalSize > 1000000) score -= 20;
  if (analysis.performanceMetrics.largestJsSize > 200000) score -= 15;
  if (analysis.jsFiles.length > 30) score -= 10;
  if (analysis.recommendations.length > 3) score -= 10;

  console.log(`\n🎯 Performance Score: ${Math.max(0, score)}/100`);
  
  if (score >= 90) {
    console.log('🌟 Excellent performance!');
  } else if (score >= 70) {
    console.log('👍 Good performance with room for improvement');
  } else if (score >= 50) {
    console.log('⚠️  Performance needs attention');
  } else {
    console.log('🚨 Performance requires immediate optimization');
  }
}

// Run analysis
generateReport();