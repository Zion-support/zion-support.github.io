import React from 'react';
import fs from 'fs';
import path from 'path';
#!/usr/bin/env node;
/**
 * Bundle analysis script for Zion Tech Group application;
 * Analyzes the built bundle and provides optimization recommendations;
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '..', 'dist');
const ANALYSIS_DIR = path.join(__dirname, '..', 'analysis');
// Ensure analysis directory exists;
if (!fs.existsSync(ANALYSIS_DIR)) 
  fs.mkdirSync(ANALYSIS_DIR, { recursive: true });
function analyzeBundle() 
      } else if (file.endsWith('.js')) 
    });
  findJSFiles(DIST_DIR);
  // Analyze each JS file;
  const analysis = 
  };
const stats = fs.statSync(filePath);
    const size = stats.size;
const relativePath = path.relative(DIST_DIR, filePath);
    analysis.totalSize += size;
    analysis.files.push(
    });
  });
  // Sort files by size;
 b.size - a.size);
  // Generate recommendations;
  generateRecommendations(analysis);
  // Write analysis report;
  const reportPath = path.join(ANALYSIS_DIR, 'bundle-analysis.json');
  fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
  // Generate HTML report;
  generateHTMLReport(analysis);
  // console.log('📊 Bundle Analysis Complete!\n');
  // console.log(`Total files: ${analysis.totalFiles}`);
  // console.log(`Total size: ${formatBytes(analysis.totalSize)}\n`);
  // console.log('📁 Largest files:');
    // console.log(`  ${file.path}: ${file.sizeFormatted}`);
  });
  // console.log('\n💡 Recommendations:');
    // console.log(`  • ${rec}`);
  });
  // console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  // console.log(`🌐 HTML report saved to: ${path.join(ANALYSIS_DIR, 'bundle-report.html')}`);
function formatBytes(bytes) 
 f.path).join(', ')}. Consider splitting these files.`);
  // Check for vendor files;
 file.path.includes('vendor'));
 0) 
                <div class = "stat-value">${analysis.totalFiles}</div>
                <div class="stat-label">Total Files</div>
                <div class="stat-value">${formatBytes(analysis.totalSize)}</div>
                <div class="stat-label">Total Size</div>
                <div class="stat-value">${analysis.files.length > 0 ? formatBytes(analysis.files[0].size) : '0'}</div>
                <div class="stat-label">Largest File</div>
                        <th>File Path</th>
                        <th>Size</th>
 `
                            <td>${file.path}</td>
                            <td class="size">${file.sizeFormatted}</td>
                    `).join('')}
            <h3>💡 Optimization Recommendations</h3>
                ${analysis.recommendations.map(rec => `<li>${rec}</li>`).join('')};
  `;
  const htmlPath = path.join(ANALYSIS_DIR, 'bundle-report.html');
  fs.writeFileSync(htmlPath, html);
// Run analysis;
analyzeBundle();

export default analyzeBundle;
