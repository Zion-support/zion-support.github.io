#!/usr/bin/env node

/**
 * Bundle analysis script for Zion Tech Group application
 * Analyzes the built bundle and provides optimization recommendations
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '..', 'dist');
const ANALYSIS_DIR = path.join(__dirname, '..', 'analysis');

// Ensure analysis directory exists
if (!fs.existsSync(ANALYSIS_DIR)) {
  fs.mkdirSync(ANALYSIS_DIR, { recursive: true });
}

function analyzeBundle() {
  console.log('🔍 Analyzing bundle...\n');

  // Check if dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Dist directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // Get all JS files in dist
  const jsFiles = [];
  function findJSFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findJSFiles(filePath);
      } else if (file.endsWith('.js')) {
        jsFiles.push(filePath);
      }
    });
  }

  findJSFiles(DIST_DIR);

  // Analyze each JS file
  const analysis = {
    totalFiles: jsFiles.length,
    totalSize: 0,
    files: [],
    recommendations: []
  };

  jsFiles.forEach(filePath => {
    const stats = fs.statSync(filePath);
    const size = stats.size;
    const relativePath = path.relative(DIST_DIR, filePath);
    
    analysis.totalSize += size;
    analysis.files.push({
      path: relativePath,
      size: size,
      sizeFormatted: formatBytes(size)
    });
  });

  // Sort files by size
  analysis.files.sort((a, b) => b.size - a.size);

  // Generate recommendations
  generateRecommendations(analysis);

  // Write analysis report
  const reportPath = path.join(ANALYSIS_DIR, 'bundle-analysis.json');
  fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));

  // Generate HTML report
  generateHTMLReport(analysis);

  console.log('📊 Bundle Analysis Complete!\n');
  console.log(`Total files: ${analysis.totalFiles}`);
  console.log(`Total size: ${formatBytes(analysis.totalSize)}\n`);
  
  console.log('📁 Largest files:');
  analysis.files.slice(0, 10).forEach(file => {
    console.log(`  ${file.path}: ${file.sizeFormatted}`);
  });

  console.log('\n💡 Recommendations:');
  analysis.recommendations.forEach(rec => {
    console.log(`  • ${rec}`);
  });

  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  console.log(`🌐 HTML report saved to: ${path.join(ANALYSIS_DIR, 'bundle-report.html')}`);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function generateRecommendations(analysis) {
  const recommendations = [];

  // Check total bundle size
  if (analysis.totalSize > 2 * 1024 * 1024) { // 2MB
    recommendations.push('Bundle size is large (>2MB). Consider code splitting and lazy loading.');
  }

  // Check for large individual files
  const largeFiles = analysis.files.filter(file => file.size > 500 * 1024); // 500KB
  if (largeFiles.length > 0) {
    recommendations.push(`Large files detected: ${largeFiles.map(f => f.path).join(', ')}. Consider splitting these files.`);
  }

  // Check for vendor files
  const vendorFiles = analysis.files.filter(file => file.path.includes('vendor'));
  if (vendorFiles.length > 0) {
    const vendorSize = vendorFiles.reduce((sum, file) => sum + file.size, 0);
    if (vendorSize > 1024 * 1024) { // 1MB
      recommendations.push('Vendor bundle is large. Consider tree shaking and removing unused dependencies.');
    }
  }

  // Check for duplicate chunks
  const chunkNames = analysis.files.map(f => f.path.split('-')[0]);
  const duplicates = chunkNames.filter((name, index) => chunkNames.indexOf(name) !== index);
  if (duplicates.length > 0) {
    recommendations.push('Duplicate chunks detected. Consider optimizing chunk splitting strategy.');
  }

  // Performance recommendations
  if (analysis.totalSize > 1024 * 1024) { // 1MB
    recommendations.push('Enable gzip compression on your server to reduce bundle size by ~70%.');
  }

  recommendations.push('Use dynamic imports for route-based code splitting.');
  recommendations.push('Consider using a CDN for static assets.');
  recommendations.push('Implement service worker for caching strategies.');

  analysis.recommendations = recommendations;
}

function generateHTMLReport(analysis) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bundle Analysis Report - Zion Tech Group</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background: #0f172a;
            color: #e2e8f0;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        h1 {
            color: #00d4ff;
            margin-bottom: 30px;
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: #1e293b;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #334155;
        }
        .stat-value {
            font-size: 2em;
            font-weight: bold;
            color: #00d4ff;
        }
        .stat-label {
            color: #94a3b8;
            margin-top: 5px;
        }
        .files-table {
            background: #1e293b;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 30px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid #334155;
        }
        th {
            background: #334155;
            color: #f1f5f9;
            font-weight: 600;
        }
        .size {
            font-family: monospace;
            color: #00d4ff;
        }
        .recommendations {
            background: #1e293b;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #00d4ff;
        }
        .recommendations h3 {
            color: #00d4ff;
            margin-top: 0;
        }
        .recommendations ul {
            margin: 0;
            padding-left: 20px;
        }
        .recommendations li {
            margin-bottom: 8px;
            color: #e2e8f0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📊 Bundle Analysis Report</h1>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-value">${analysis.totalFiles}</div>
                <div class="stat-label">Total Files</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${formatBytes(analysis.totalSize)}</div>
                <div class="stat-label">Total Size</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${analysis.files.length > 0 ? formatBytes(analysis.files[0].size) : '0'}</div>
                <div class="stat-label">Largest File</div>
            </div>
        </div>

        <div class="files-table">
            <table>
                <thead>
                    <tr>
                        <th>File Path</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                    ${analysis.files.map(file => `
                        <tr>
                            <td>${file.path}</td>
                            <td class="size">${file.sizeFormatted}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="recommendations">
            <h3>💡 Optimization Recommendations</h3>
            <ul>
                ${analysis.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        </div>
    </div>
</body>
</html>
  `;

  const htmlPath = path.join(ANALYSIS_DIR, 'bundle-report.html');
  fs.writeFileSync(htmlPath, html);
}

// Run analysis
analyzeBundle();