const fs = require('fs');
const path = require('path');
const { gzipSync } = require('zlib');

class PerformanceOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.reportPath = path.join(__dirname, '../performance-report-enhanced.json');
    this.optimizations = [];
  }

  async optimize() {
    console.log('🚀 Starting enhanced performance optimization...');
    
    try {
      // Analyze build output
      const buildStats = await this.analyzeBuild();
      
      // Optimize images
      await this.optimizeImages();
      
      // Optimize CSS
      await this.optimizeCSS();
      
      // Optimize JavaScript
      await this.optimizeJavaScript();
      
      // Generate performance report
      await this.generateReport(buildStats);
      
      console.log('✅ Enhanced performance optimization completed!');
    } catch (error) {
      console.error('❌ Performance optimization failed:', error);
      throw error;
    }
  }

  async analyzeBuild() {
    console.log('📊 Analyzing build output...');
    
    const stats = {
      totalFiles: 0,
      totalSize: 0,
      jsFiles: 0,
      jsSize: 0,
      cssFiles: 0,
      cssSize: 0,
      imageFiles: 0,
      imageSize: 0,
      htmlFiles: 0,
      htmlSize: 0,
      otherFiles: 0,
      otherSize: 0
    };

    const files = this.getAllFiles(this.distPath);
    
    for (const file of files) {
      const relativePath = path.relative(this.distPath, file);
      const stat = fs.statSync(file);
      const size = stat.size;
      
      stats.totalFiles++;
      stats.totalSize += size;
      
      const ext = path.extname(file).toLowerCase();
      
      switch (ext) {
        case '.js':
          stats.jsFiles++;
          stats.jsSize += size;
          break;
        case '.css':
          stats.cssFiles++;
          stats.cssSize += size;
          break;
        case '.html':
          stats.htmlFiles++;
          stats.htmlSize += size;
          break;
        case '.png':
        case '.jpg':
        case '.jpeg':
        case '.gif':
        case '.webp':
        case '.svg':
          stats.imageFiles++;
          stats.imageSize += size;
          break;
        default:
          stats.otherFiles++;
          stats.otherSize += size;
      }
    }

    return stats;
  }

  getAllFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async optimizeImages() {
    console.log('🖼️ Optimizing images...');
    
    const imageFiles = this.getAllFiles(this.distPath).filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext);
    });

    for (const file of imageFiles) {
      const originalSize = fs.statSync(file).size;
      
      // For now, just log the files that could be optimized
      // In a real implementation, you would use sharp or imagemin
      this.optimizations.push({
        type: 'image',
        file: path.relative(this.distPath, file),
        originalSize,
        optimizedSize: originalSize, // Would be smaller after optimization
        savings: 0
      });
    }
  }

  async optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    
    const cssFiles = this.getAllFiles(this.distPath).filter(file => 
      path.extname(file).toLowerCase() === '.css'
    );

    for (const file of cssFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const originalSize = Buffer.byteLength(content, 'utf8');
      
      // Remove unnecessary whitespace and comments
      const optimized = content
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .replace(/;\s*}/g, '}') // Remove semicolon before closing brace
        .replace(/\s*{\s*/g, '{') // Remove spaces around opening brace
        .replace(/;\s*/g, ';') // Remove spaces after semicolons
        .trim();
      
      const optimizedSize = Buffer.byteLength(optimized, 'utf8');
      const savings = originalSize - optimizedSize;
      
      if (savings > 0) {
        fs.writeFileSync(file, optimized);
        this.optimizations.push({
          type: 'css',
          file: path.relative(this.distPath, file),
          originalSize,
          optimizedSize,
          savings
        });
      }
    }
  }

  async optimizeJavaScript() {
    console.log('⚡ Optimizing JavaScript...');
    
    const jsFiles = this.getAllFiles(this.distPath).filter(file => 
      path.extname(file).toLowerCase() === '.js'
    );

    for (const file of jsFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const originalSize = Buffer.byteLength(content, 'utf8');
      
      // Basic optimizations
      let optimized = content;
      
      // Remove console.log statements in production
      optimized = optimized.replace(/console\.(log|debug|info|warn|error)\([^)]*\);?\s*/g, '');
      
      // Remove unnecessary whitespace
      optimized = optimized
        .replace(/\s+/g, ' ')
        .replace(/;\s*}/g, '}')
        .replace(/{\s*/g, '{')
        .replace(/;\s*/g, ';')
        .trim();
      
      const optimizedSize = Buffer.byteLength(optimized, 'utf8');
      const savings = originalSize - optimizedSize;
      
      if (savings > 0) {
        fs.writeFileSync(file, optimized);
        this.optimizations.push({
          type: 'javascript',
          file: path.relative(this.distPath, file),
          originalSize,
          optimizedSize,
          savings
        });
      }
    }
  }

  async generateReport(buildStats) {
    console.log('📄 Generating performance report...');
    
    const totalSavings = this.optimizations.reduce((sum, opt) => sum + opt.savings, 0);
    const gzipSize = gzipSync(fs.readFileSync(path.join(this.distPath, 'index.html'))).length;
    
    const report = {
      timestamp: new Date().toISOString(),
      buildStats: {
        ...buildStats,
        gzipSize,
        totalSavings
      },
      optimizations: this.optimizations,
      recommendations: this.generateRecommendations(buildStats, totalSavings),
      performanceScore: this.calculatePerformanceScore(buildStats, totalSavings)
    };

    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Performance report generated: ${this.reportPath}`);
  }

  generateRecommendations(stats, totalSavings) {
    const recommendations = [];
    
    if (stats.jsSize > 500000) {
      recommendations.push({
        type: 'warning',
        message: 'JavaScript bundle size is large. Consider code splitting or tree shaking.',
        impact: 'high'
      });
    }
    
    if (stats.cssSize > 100000) {
      recommendations.push({
        type: 'warning',
        message: 'CSS bundle size is large. Consider purging unused styles.',
        impact: 'medium'
      });
    }
    
    if (stats.imageSize > 200000) {
      recommendations.push({
        type: 'warning',
        message: 'Image files are large. Consider using WebP format or lazy loading.',
        impact: 'high'
      });
    }
    
    if (totalSavings > 0) {
      recommendations.push({
        type: 'success',
        message: `Optimizations saved ${this.formatBytes(totalSavings)} in total.`,
        impact: 'low'
      });
    }
    
    return recommendations;
  }

  calculatePerformanceScore(stats, totalSavings) {
    let score = 100;
    
    // Deduct points for large bundle sizes
    if (stats.jsSize > 500000) score -= 20;
    if (stats.cssSize > 100000) score -= 15;
    if (stats.imageSize > 200000) score -= 25;
    
    // Add points for optimizations
    if (totalSavings > 50000) score += 10;
    
    return Math.max(0, Math.min(100, score));
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Run optimization if called directly
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.optimize().catch(console.error);
}

module.exports = PerformanceOptimizer;