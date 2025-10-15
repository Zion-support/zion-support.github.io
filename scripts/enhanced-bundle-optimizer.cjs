const fs = require('fs');
const path = require('path');
const { gzipSync } = require('zlib');

// Enhanced bundle optimizer for better performance
class BundleOptimizer {
  constructor() {
    this.distDir = path.join(__dirname, '../dist');
    this.analysis = {
      totalSize: 0,
      gzipSize: 0,
      files: [],
      recommendations: []
    };
  }

  // Main optimization process
  async optimize() {
    console.log('🚀 Starting enhanced bundle optimization...');
    
    try {
      await this.analyzeBundle();
      await this.optimizeImages();
      await this.optimizeCSS();
      await this.optimizeJS();
      await this.generateManifest();
      await this.createServiceWorker();
      await this.generateReport();
      
      console.log('✅ Bundle optimization completed successfully!');
    } catch (error) {
      console.error('❌ Bundle optimization failed:', error);
      throw error;
    }
  }

  // Analyze bundle size and composition
  async analyzeBundle() {
    console.log('📊 Analyzing bundle...');
    
    const files = this.getFilesRecursively(this.distDir);
    
    for (const file of files) {
      const stats = fs.statSync(file);
      const relativePath = path.relative(this.distDir, file);
      const content = fs.readFileSync(file);
      const gzipContent = gzipSync(content);
      
      const fileInfo = {
        path: relativePath,
        size: stats.size,
        gzipSize: gzipContent.length,
        type: path.extname(file),
        lastModified: stats.mtime
      };
      
      this.analysis.files.push(fileInfo);
      this.analysis.totalSize += stats.size;
      this.analysis.gzipSize += gzipContent.length;
    }
    
    // Sort by size
    this.analysis.files.sort((a, b) => b.size - a.size);
    
    console.log(`📦 Total bundle size: ${this.formatBytes(this.analysis.totalSize)}`);
    console.log(`🗜️  Gzipped size: ${this.formatBytes(this.analysis.gzipSize)}`);
    console.log(`📁 Files analyzed: ${this.analysis.files.length}`);
  }

  // Optimize images
  async optimizeImages() {
    console.log('🖼️  Optimizing images...');
    
    const imageFiles = this.analysis.files.filter(file => 
      ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(file.type)
    );
    
    for (const file of imageFiles) {
      const filePath = path.join(this.distDir, file.path);
      
      // Add image optimization recommendations
      if (file.size > 100000) { // 100KB
        this.analysis.recommendations.push({
          type: 'image',
          file: file.path,
          issue: 'Large image file',
          suggestion: 'Consider compressing or converting to WebP format',
          currentSize: this.formatBytes(file.size)
        });
      }
    }
  }

  // Optimize CSS
  async optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    
    const cssFiles = this.analysis.files.filter(file => file.type === '.css');
    
    for (const file of cssFiles) {
      const filePath = path.join(this.distDir, file.path);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unused CSS (basic implementation)
      content = this.removeUnusedCSS(content);
      
      // Minify CSS
      content = this.minifyCSS(content);
      
      fs.writeFileSync(filePath, content);
      
      console.log(`✅ Optimized CSS: ${file.path}`);
    }
  }

  // Optimize JavaScript
  async optimizeJS() {
    console.log('⚡ Optimizing JavaScript...');
    
    const jsFiles = this.analysis.files.filter(file => file.type === '.js');
    
    for (const file of jsFiles) {
      const filePath = path.join(this.distDir, file.path);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove console.log statements
      content = content.replace(/console\.(log|warn|error|info)\([^)]*\);?/g, '');
      
      // Remove debugger statements
      content = content.replace(/debugger;?/g, '');
      
      // Remove comments
      content = content.replace(/\/\*[\s\S]*?\*\//g, '');
      content = content.replace(/\/\/.*$/gm, '');
      
      fs.writeFileSync(filePath, content);
      
      console.log(`✅ Optimized JS: ${file.path}`);
    }
  }

  // Generate optimized manifest
  async generateManifest() {
    console.log('📋 Generating optimized manifest...');
    
    const manifest = {
      name: 'Zion Tech Group - AI & IT Solutions',
      short_name: 'Zion Tech',
      description: 'Leading provider of AI and IT solutions for modern businesses',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#3b82f6',
      icons: this.generateIconManifest(),
      categories: ['business', 'productivity', 'technology'],
      lang: 'en-US',
      scope: '/',
      orientation: 'portrait-primary'
    };
    
    fs.writeFileSync(
      path.join(this.distDir, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
    );
    
    console.log('✅ Generated optimized manifest.json');
  }

  // Create service worker
  async createServiceWorker() {
    console.log('🔧 Creating service worker...');
    
    const serviceWorkerContent = this.generateServiceWorker();
    fs.writeFileSync(
      path.join(this.distDir, 'sw.js'),
      serviceWorkerContent
    );
    
    console.log('✅ Created service worker');
  }

  // Generate optimization report
  async generateReport() {
    console.log('📊 Generating optimization report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.analysis.files.length,
        totalSize: this.analysis.totalSize,
        gzipSize: this.analysis.gzipSize,
        compressionRatio: ((this.analysis.totalSize - this.analysis.gzipSize) / this.analysis.totalSize * 100).toFixed(2) + '%'
      },
      largestFiles: this.analysis.files.slice(0, 10),
      recommendations: this.analysis.recommendations,
      performance: this.calculatePerformanceScore()
    };
    
    fs.writeFileSync(
      path.join(this.distDir, 'optimization-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('✅ Generated optimization report');
    this.printSummary(report);
  }

  // Helper methods
  getFilesRecursively(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  removeUnusedCSS(css) {
    // Basic CSS optimization - remove empty rules
    return css
      .replace(/\{[^}]*\}/g, (match) => {
        const content = match.slice(1, -1).trim();
        return content ? match : '';
      })
      .replace(/\s+/g, ' ')
      .trim();
  }

  minifyCSS(css) {
    return css
      .replace(/\s+/g, ' ')
      .replace(/;\s*}/g, '}')
      .replace(/\s*{\s*/g, '{')
      .replace(/\s*;\s*/g, ';')
      .trim();
  }

  generateIconManifest() {
    const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
    return sizes.map(size => ({
      src: `/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: 'image/png',
      purpose: 'any maskable'
    }));
  }

  generateServiceWorker() {
    return `// Optimized Service Worker
const CACHE_NAME = 'zion-tech-group-v${Date.now()}';
const STATIC_FILES = [
  '/',
  '/manifest.json',
  '/sw.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.map(cacheName => 
          cacheName !== CACHE_NAME ? caches.delete(cacheName) : null
        )
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});`;
  }

  calculatePerformanceScore() {
    let score = 100;
    
    // Deduct points for large files
    this.analysis.files.forEach(file => {
      if (file.size > 250000) score -= 10; // 250KB
      else if (file.size > 100000) score -= 5;  // 100KB
    });
    
    // Deduct points for too many files
    if (this.analysis.files.length > 50) score -= 10;
    else if (this.analysis.files.length > 30) score -= 5;
    
    // Bonus for good compression
    const compressionRatio = (this.analysis.totalSize - this.analysis.gzipSize) / this.analysis.totalSize;
    if (compressionRatio > 0.7) score += 10;
    else if (compressionRatio > 0.5) score += 5;
    
    return Math.max(0, Math.min(100, score));
  }

  printSummary(report) {
    console.log('\n📊 OPTIMIZATION SUMMARY');
    console.log('========================');
    console.log(`Total files: ${report.summary.totalFiles}`);
    console.log(`Total size: ${this.formatBytes(report.summary.totalSize)}`);
    console.log(`Gzipped size: ${this.formatBytes(report.summary.gzipSize)}`);
    console.log(`Compression ratio: ${report.summary.compressionRatio}`);
    console.log(`Performance score: ${report.performance}/100`);
    
    if (report.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS');
      console.log('==================');
      report.recommendations.forEach(rec => {
        console.log(`• ${rec.file}: ${rec.issue} (${rec.currentSize})`);
        console.log(`  → ${rec.suggestion}`);
      });
    }
  }
}

// Run optimization
if (require.main === module) {
  const optimizer = new BundleOptimizer();
  optimizer.optimize().catch(console.error);
}

module.exports = BundleOptimizer;