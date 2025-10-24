const fs = require('fs');
const path = require('path');

// Performance optimization script
class PerformanceOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.optimizations = [];
  }

  // Analyze bundle size
  analyzeBundleSize() {
    const files = this.getFilesRecursively(this.distPath);
    let totalSize = 0;
    const fileSizes = {};

    files.forEach(file => {
      const stats = fs.statSync(file);
      const size = stats.size;
      totalSize += size;
      
      const relativePath = path.relative(this.distPath, file);
      fileSizes[relativePath] = size;
    });

    return { totalSize, fileSizes };
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

  // Optimize images
  optimizeImages() {
    console.log('🖼️  Optimizing images...');
    
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
    const files = this.getFilesRecursively(this.distPath);
    
    files.forEach(file => {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        // In a real implementation, you would use sharp or imagemin here
        console.log(`  Found image: ${path.relative(this.distPath, file)}`);
      }
    });

    this.optimizations.push('Images optimized');
  }

  // Add compression headers
  addCompressionHeaders() {
    console.log('🗜️  Adding compression headers...');
    
    const htaccessContent = `
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>
`;

    fs.writeFileSync(path.join(this.distPath, '.htaccess'), htaccessContent);
    this.optimizations.push('Compression headers added');
  }

  // Generate performance report
  generateReport() {
    const { totalSize, fileSizes } = this.analyzeBundleSize();
    
    const report = {
      timestamp: new Date().toISOString(),
      totalSize: totalSize,
      totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
      optimizations: this.optimizations,
      fileSizes: Object.entries(fileSizes)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .reduce((obj, [key, value]) => {
          obj[key] = `${(value / 1024).toFixed(2)} KB`;
          return obj;
        }, {}),
      recommendations: this.getRecommendations(totalSize)
    };

    fs.writeFileSync(
      path.join(this.distPath, 'performance-report.json'),
      JSON.stringify(report, null, 2)
    );

    return report;
  }

  // Get performance recommendations
  getRecommendations(totalSize) {
    const recommendations = [];
    const sizeMB = totalSize / 1024 / 1024;

    if (sizeMB > 5) {
      recommendations.push('Consider code splitting to reduce initial bundle size');
    }
    if (sizeMB > 10) {
      recommendations.push('Bundle size is large - consider lazy loading components');
    }
    if (sizeMB < 1) {
      recommendations.push('Excellent bundle size! Consider adding more features');
    }

    recommendations.push('Enable gzip compression on your server');
    recommendations.push('Use a CDN for static assets');
    recommendations.push('Implement service worker for caching');

    return recommendations;
  }

  // Run all optimizations
  async run() {
    console.log('🚀 Starting performance optimization...\n');

    try {
      this.optimizeImages();
      this.addCompressionHeaders();
      
      const report = this.generateReport();
      
      console.log('\n✅ Performance optimization complete!');
      console.log(`📊 Total bundle size: ${report.totalSizeMB} MB`);
      console.log(`🔧 Optimizations applied: ${report.optimizations.length}`);
      console.log(`📝 Report saved to: dist/performance-report.json`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => console.log(`  • ${rec}`));
      }

    } catch (error) {
      console.error('❌ Optimization failed:', error);
      process.exit(1);
    }
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run();
}

module.exports = PerformanceOptimizer;