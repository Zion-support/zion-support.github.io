#!/usr/bin/env node

/**
 * Bundle Analyzer Script
 * Provides detailed analysis of the built bundle
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function analyzeBundleStructure() {
  const distPath = path.join(projectRoot, 'dist');
  
  if (!fs.existsSync(distPath)) {
    log('❌ Dist directory not found. Run build first.', 'red');
    return null;
  }

  log('\n🔍 Detailed Bundle Analysis', 'cyan');
  log('='.repeat(60), 'cyan');

  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);
  
  const analysis = {
    totalSize: 0,
    jsFiles: [],
    cssFiles: [],
    otherFiles: [],
    chunks: new Map(),
    recommendations: []
  };

  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    analysis.totalSize += stats.size;

    const fileInfo = {
      name: file,
      size: stats.size,
      sizeKB: parseFloat(sizeKB),
      path: filePath
    };

    if (file.endsWith('.js')) {
      analysis.jsFiles.push(fileInfo);
      
      // Analyze chunk names
      const chunkName = extractChunkName(file);
      if (chunkName) {
        if (!analysis.chunks.has(chunkName)) {
          analysis.chunks.set(chunkName, []);
        }
        analysis.chunks.get(chunkName).push(fileInfo);
      }
    } else if (file.endsWith('.css')) {
      analysis.cssFiles.push(fileInfo);
    } else {
      analysis.otherFiles.push(fileInfo);
    }
  });

  // Sort files by size
  analysis.jsFiles.sort((a, b) => b.size - a.size);
  analysis.cssFiles.sort((a, b) => b.size - a.size);

  return analysis;
}

function extractChunkName(filename) {
  // Extract chunk name from filename like "react-core-D1e13s5w.js"
  const match = filename.match(/^([^-]+)-/);
  return match ? match[1] : 'unknown';
}

function displayChunkAnalysis(analysis) {
  log('\n📦 Chunk Analysis:', 'yellow');
  log('='.repeat(40), 'yellow');

  const chunks = Array.from(analysis.chunks.entries())
    .map(([name, files]) => ({
      name,
      totalSize: files.reduce((sum, file) => sum + file.size, 0),
      fileCount: files.length,
      files
    }))
    .sort((a, b) => b.totalSize - a.totalSize);

  chunks.forEach(chunk => {
    const sizeKB = (chunk.totalSize / 1024).toFixed(2);
    const percentage = ((chunk.totalSize / analysis.totalSize) * 100).toFixed(1);
    
    log(`\n${chunk.name}:`, 'blue');
    log(`  Size: ${sizeKB} KB (${percentage}%)`, 'white');
    log(`  Files: ${chunk.fileCount}`, 'white');
    
    chunk.files.forEach(file => {
      const fileSizeKB = file.sizeKB.toFixed(2);
      log(`    - ${file.name}: ${fileSizeKB} KB`, 'gray');
    });
  });
}

function generateOptimizationRecommendations(analysis) {
  log('\n💡 Optimization Recommendations:', 'magenta');
  log('='.repeat(50), 'magenta');

  const recommendations = [];

  // Large file recommendations
  const largeFiles = analysis.jsFiles.filter(file => file.sizeKB > 100);
  if (largeFiles.length > 0) {
    recommendations.push({
      type: 'warning',
      message: `Found ${largeFiles.length} large JS files (>100KB)`,
      action: 'Consider splitting these files or using dynamic imports'
    });
  }

  // Chunk size recommendations
  const largeChunks = Array.from(analysis.chunks.entries())
    .filter(([name, files]) => {
      const totalSize = files.reduce((sum, file) => sum + file.size, 0);
      return totalSize > 200 * 1024; // >200KB
    });

  if (largeChunks.length > 0) {
    recommendations.push({
      type: 'warning',
      message: `Found ${largeChunks.length} large chunks (>200KB)`,
      action: 'Consider further splitting these chunks'
    });
  }

  // CSS recommendations
  if (analysis.cssFiles.length > 1) {
    recommendations.push({
      type: 'info',
      message: `Found ${analysis.cssFiles.length} CSS files`,
      action: 'Consider consolidating CSS files for better caching'
    });
  }

  // Display recommendations
  recommendations.forEach((rec, index) => {
    const color = rec.type === 'warning' ? 'yellow' : 'blue';
    log(`\n${index + 1}. ${rec.message}`, color);
    log(`   Action: ${rec.action}`, 'white');
  });

  return recommendations;
}

function generateBundleReport(analysis) {
  const reportPath = path.join(projectRoot, 'bundle-analysis-report.json');
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalSize: analysis.totalSize,
      totalSizeKB: (analysis.totalSize / 1024).toFixed(2),
      totalSizeMB: (analysis.totalSize / 1024 / 1024).toFixed(2),
      jsFileCount: analysis.jsFiles.length,
      cssFileCount: analysis.cssFiles.length,
      otherFileCount: analysis.otherFiles.length,
      chunkCount: analysis.chunks.size
    },
    chunks: Object.fromEntries(
      Array.from(analysis.chunks.entries()).map(([name, files]) => [
        name,
        {
          totalSize: files.reduce((sum, file) => sum + file.size, 0),
          fileCount: files.length,
          files: files.map(file => ({
            name: file.name,
            size: file.size,
            sizeKB: file.sizeKB
          }))
        }
      ])
    ),
    largestFiles: {
      js: analysis.jsFiles.slice(0, 10).map(file => ({
        name: file.name,
        sizeKB: file.sizeKB
      })),
      css: analysis.cssFiles.slice(0, 5).map(file => ({
        name: file.name,
        sizeKB: file.sizeKB
      }))
    }
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  log(`\n📄 Detailed report saved to: ${reportPath}`, 'green');
}

function main() {
  log('\n🔍 Bundle Analyzer', 'bright');
  log('='.repeat(40), 'bright');

  const analysis = analyzeBundleStructure();
  if (!analysis) return;

  displayChunkAnalysis(analysis);
  const recommendations = generateOptimizationRecommendations(analysis);
  generateBundleReport(analysis);

  log('\n✨ Bundle analysis complete!', 'green');
}

main();