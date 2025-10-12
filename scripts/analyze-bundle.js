#!/usr/bin/env node

/**
 * Bundle analysis script for Zion Tech Group application
 * Analyzes the built bundle and provides optimization recommendations
 */

import fs from 'fs';
import path from 'path';
import { exec Sync } from 'child_process';
import { file UR LTo Path } from 'url';

const __filename = file UR LTo Path(import.meta.url);
const __dirname = path.dirname(__filename);

const D IS T_ DI R = path.join(__dirname, '..', 'dist');
const A NA LY SI S_ DI R = path.join(__dirname, '..', 'analysis');

// Ensure analysis directory exists
if (!fs.exists Sync(A NA LY SI S_ DI R)) {
  fs.mkdir Sync(A NA LY SI S_ DI R, { recursive: true });
}

function analyze Bundle() {
  console.log('🔍 Analyzing bundle...\n');

  // Check if dist directory exists
  if (!fs.exists Sync(D IS T_ DI R)) {
    console.error('❌ Dist directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // Get all J S files in dist
  const js Files = [];
  function find JS Files(dir) {
    const files = fs.readdir Sync(dir);
    files.for Each(file => {
      const file Path = path.join(dir, file);
      const stat = fs.stat Sync(file Path);
      if (stat.is Directory()) {
        find JS Files(file Path);
      } else if (file.ends With('.js')) {
        js Files.push(file Path);
      }
    });
  }

  find JS Files(D IS T_ DI R);

  // Analyze each J S file
  const analysis = {
    total Files: js Files.length,
    total Size: 0,
    files: [],
    recommendations: []
  };

  js Files.for Each(file Path => {
    const stats = fs.stat Sync(file Path);
    const size = stats.size;
    const relative Path = path.relative(D IS T_ DI R, file Path);
    
    analysis.total Size += size;
    analysis.files.push({
      path: relative Path,
      size: size,
      size Formatted: format Bytes(size)
    });
  });

  // Sort files by size
  analysis.files.sort((a, b) => b.size - a.size);

  // Generate recommendations
  generate Recommendations(analysis);

  // Write analysis report
  const report Path = path.join(A NA LY SI S_ DI R, 'bundle-analysis.json');
  fs.write File Sync(report Path, J SO N.stringify(analysis, null, 2));

  // Generate H TM L report
  generate HT ML Report(analysis);

  console.log('📊 Bundle Analysis Complete!\n');
  console.log(`Total files: ${analysis.total Files}`);
  console.log(`Total size: ${format Bytes(analysis.total Size)}\n`);
  
  console.log('📁 Largest files:');
  analysis.files.slice(0, 10).for Each(file => {
    console.log(`  ${file.path}: ${file.size Formatted}`);
  });

  console.log('\n💡 Recommendations:');
  analysis.recommendations.for Each(rec => {
    console.log(`  • ${rec}`);
  });

  console.log(`\n📄 Detailed report saved to: ${report Path}`);
  console.log(`🌐 H TM L report saved to: ${path.join(A NA LY SI S_ DI R, 'bundle-report.html')}`);
}

function format Bytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'K B', 'M B', 'G B'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parse Float((bytes / Math.pow(k, i)).to Fixed(2)) + ' ' + sizes[i];
}

function generate Recommendations(analysis) {
  const recommendations = [];

  // Check total bundle size
  if (analysis.total Size > 2 * 1024 * 1024) { // 2 MB
    recommendations.push('Bundle size is large (>2 MB). Consider code splitting and lazy loading.');
  }

  // Check for large individual files
  const large Files = analysis.files.filter(file => file.size > 500 * 1024); // 500 KB
  if (large Files.length > 0) {
    recommendations.push(`Large files detected: ${large Files.map(f => f.path).join(', ')}. Consider splitting these files.`);
  }

  // Check for vendor files
  const vendor Files = analysis.files.filter(file => file.path.includes('vendor'));
  if (vendor Files.length > 0) {
    const vendor Size = vendor Files.reduce((sum, file) => sum + file.size, 0);
    if (vendor Size > 1024 * 1024) { // 1 MB
      recommendations.push('Vendor bundle is large. Consider tree shaking and removing unused dependencies.');
    }
  }

  // Check for duplicate chunks
  const chunk Names = analysis.files.map(f => f.path.split('-')[0]);
  const duplicates = chunk Names.filter((name, index) => chunk Names.index Of(name) !== index);
  if (duplicates.length > 0) {
    recommendations.push('Duplicate chunks detected. Consider optimizing chunk splitting strategy.');
  }

  // Performance recommendations
  if (analysis.total Size > 1024 * 1024) { // 1 MB
    recommendations.push('Enable gzip compression on your server to reduce bundle size by ~70%.');
  }

  recommendations.push('Use dynamic imports for route-based code splitting.');
  recommendations.push('Consider using a C DN for static assets.');
  recommendations.push('Implement service worker for caching strategies.');

  analysis.recommendations = recommendations;
}

function generate HT ML Report(analysis) {
  const html = `
<!D O C TY PE html>
<h tml lang="en">
<h ead>
    <m eta charset="U TF-8">
    <m eta name="viewport" content="width=device-width, initial-scale=1.0">
    <t itle>Bundle Analysis Report - Zion Tech Group</t itle>
    <s tyle>
        body {
            font-family: -apple-system, Blink Mac System Font, 'Segoe U I', Roboto, sans-serif;
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
    </s tyle>
</h ead>
<b ody>
    <d iv class="container">
        <h1>📊 Bundle Analysis Report</h1>
        
        <d iv class="stats">
            <d iv class="stat-card">
                <d iv class="stat-value">${analysis.total Files}</d iv>
                <d iv class="stat-label">Total Files</d iv>
            </d iv>
            <d iv class="stat-card">
                <d iv class="stat-value">${format Bytes(analysis.total Size)}</d iv>
                <d iv class="stat-label">Total Size</d iv>
            </d iv>
            <d iv class="stat-card">
                <d iv class="stat-value">${analysis.files.length > 0 ? format Bytes(analysis.files[0].size) : '0'}</d iv>
                <d iv class="stat-label">Largest File</d iv>
            </d iv>
        </d iv>

        <d iv class="files-table">
            <t able>
                <t head>
                    <t r>
                        <t h>File Path</t h>
                        <t h>Size</t h>
                    </t r>
                </t head>
                <t body>
                    ${analysis.files.map(file => `
                        <t r>
                            <t d>${file.path}</t d>
                            <t d class="size">${file.size Formatted}</t d>
                        </t r>
                    `).join('')}
                </t body>
            </t able>
        </d iv>

        <d iv class="recommendations">
            <h3>💡 Optimization Recommendations</h3>
            <u l>
                ${analysis.recommendations.map(rec => `<l i>${rec}</l i>`).join('')}
            </u l>
        </d iv>
    </d iv>
</b ody>
</h tml>
  `;

  const html Path = path.join(A NA LY SI S_ DI R, 'bundle-report.html');
  fs.write File Sync(html Path, html);
}

// Run analysis
analyze Bundle();