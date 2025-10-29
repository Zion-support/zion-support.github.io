#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BundleOptimizer {
  constructor() {
    this.distPath = path.join(process.cwd(), 'dist');
    this.analysis = {};
  }

  // Analyze bundle size
  analyzeBundle() {
    console.log('🔍 Analyzing bundle...');
    
    if (!fs.existsSync(this.distPath)) {
      console.error('❌ Dist folder not found. Run build first.');
      process.exit(1);
    }

    const files = this.getFilesRecursively(this.distPath);
    const analysis = {
      totalSize: 0,
      gzipSize: 0,
      files: [],
      recommendations: []
    };

    files.forEach(file => {
      const stats = fs.statSync(file);
      const size = stats.size;
      const relativePath = path.relative(this.distPath, file);
      
      analysis.files.push({
        path: relativePath,
        size: size,
        gzipSize: this.estimateGzipSize(size)
      });
      
      analysis.totalSize += size;
      analysis.gzipSize += this.estimateGzipSize(size);
    });

    // Sort files by size
    analysis.files.sort((a, b) => b.size - a.size);

    this.analysis = analysis;
    return analysis;
  }

  // Get all files recursively
  getFilesRecursively(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  // Estimate gzip size (rough approximation)
  estimateGzipSize(originalSize) {
    // Typical gzip compression ratios
    const ratios = {
      '.js': 0.3,
      '.css': 0.2,
      '.html': 0.3,
      '.json': 0.2,
      '.svg': 0.1,
      '.png': 0.8,
      '.jpg': 0.9,
      '.jpeg': 0.9,
      '.gif': 0.8,
      '.webp': 0.7
    };

    const ext = path.extname(originalSize.toString());
    const ratio = ratios[ext] || 0.5;
    
    return Math.round(originalSize * ratio);
  }

  // Generate recommendations
  generateRecommendations() {
    const recommendations = [];
    const { files, totalSize, gzipSize } = this.analysis;

    // Check for large files
    const largeFiles = files.filter(file => file.size > 100000); // 100KB
    if (largeFiles.length > 0) {
      recommendations.push({
        type: 'warning',
        message: `Large files detected: ${largeFiles.map(f => f.path).join(', ')}`,
        action: 'Consider code splitting or lazy loading'
      });
    }

    // Check for duplicate files
    const duplicates = this.findDuplicates(files);
    if (duplicates.length > 0) {
      recommendations.push({
        type: 'info',
        message: `Duplicate files found: ${duplicates.length} files`,
        action: 'Consider deduplication'
      });
    }

    // Check bundle size
    if (totalSize > 1000000) { // 1MB
      recommendations.push({
        type: 'error',
        message: `Bundle size is large: ${(totalSize / 1024 / 1024).toFixed(2)}MB`,
        action: 'Implement code splitting and lazy loading'
      });
    }

    // Check gzip efficiency
    const compressionRatio = 1 - (gzipSize / totalSize);
    if (compressionRatio < 0.5) {
      recommendations.push({
        type: 'warning',
        message: `Low compression ratio: ${(compressionRatio * 100).toFixed(1)}%`,
        action: 'Check for already compressed assets'
      });
    }

    return recommendations;
  }

  // Find duplicate files
  findDuplicates(files) {
    const fileHashes = new Map();
    const duplicates = [];

    files.forEach(file => {
      const content = fs.readFileSync(path.join(this.distPath, file.path));
      const hash = this.simpleHash(content);
      
      if (fileHashes.has(hash)) {
        duplicates.push({
          original: fileHashes.get(hash),
          duplicate: file.path
        });
      } else {
        fileHashes.set(hash, file.path);
      }
    });

    return duplicates;
  }

  // Simple hash function
  simpleHash(buffer) {
    let hash = 0;
    for (let i = 0; i < buffer.length; i++) {
      const char = buffer[i];
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  }

  // Optimize images
  optimizeImages() {
    console.log('🖼️ Optimizing images...');
    
    const imageFiles = this.analysis.files.filter(file => 
      /\.(png|jpg|jpeg|gif|svg)$/i.test(file.path)
    );

    if (imageFiles.length === 0) {
      console.log('No images found to optimize.');
      return;
    }

    // This would typically use sharp or imagemin
    console.log(`Found ${imageFiles.length} images to optimize.`);
    console.log('Consider using tools like sharp or imagemin for actual optimization.');
  }

  // Generate bundle report
  generateReport() {
    const { totalSize, gzipSize, files } = this.analysis;
    const recommendations = this.generateRecommendations();

    let report = 'Bundle Analysis Report\n';
    report += '====================\n\n';
    report += `Total Size: ${(totalSize / 1024).toFixed(2)} KB\n`;
    report += `Gzip Size: ${(gzipSize / 1024).toFixed(2)} KB\n`;
    report += `Compression Ratio: ${((1 - gzipSize / totalSize) * 100).toFixed(1)}%\n\n`;

    report += 'Largest Files:\n';
    files.slice(0, 10).forEach(file => {
      report += `- ${file.path}: ${(file.size / 1024).toFixed(2)} KB (${(file.gzipSize / 1024).toFixed(2)} KB gzipped)\n`;
    });

    report += '\nRecommendations:\n';
    recommendations.forEach(rec => {
      report += `- [${rec.type.toUpperCase()}] ${rec.message}\n`;
      report += `  Action: ${rec.action}\n`;
    });

    return report;
  }

  // Run optimization
  async optimize() {
    console.log('🚀 Starting bundle optimization...');
    
    this.analyzeBundle();
    this.optimizeImages();
    
    const report = this.generateReport();
    console.log('\n' + report);
    
    // Save report
    const reportPath = path.join(process.cwd(), 'bundle-analysis-report.txt');
    fs.writeFileSync(reportPath, report);
    console.log(`\n📊 Report saved to: ${reportPath}`);
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new BundleOptimizer();
  optimizer.optimize().catch(console.error);
}

module.exports = BundleOptimizer;