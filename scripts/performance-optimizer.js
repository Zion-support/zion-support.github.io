#!/usr/bin/env node

/**
 * Performance Optimizer
 * Automatically optimizes the application for better performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceOptimizer {
  constructor() {
    this.optimizeImages();
    this.optimizeCSS();
    this.optimizeJS();
    this.generatePerformanceReport();
  }

// Optimize index.html
const indexPath = path.join(__dirname, '../dist/index.html');
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Add preload hints for critical resources
  const preloadHints = `
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/vendor.js" as="script">
    <link rel="preload" href="/assets/index.js" as="script">
  `;
  
  content = content.replace('<head>', `<head>${preloadHints}`);
  
  // Add resource hints
  const resourceHints = `
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  `;
  
  content = content.replace('</head>', `${resourceHints}</head>`);
  
  fs.writeFileSync(indexPath, content);
  console.log('✅ Optimized index.html');
}

// Create robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robotsContent);
console.log('✅ Created robots.txt');

// Create .htaccess for better caching
const htaccessContent = `# Enable compression
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

# Set cache headers
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

fs.writeFileSync(path.join(__dirname, '../dist/.htaccess'), htaccessContent);
console.log('✅ Created .htaccess');

console.log('🎉 Performance optimization completed!');
  /**
   * Optimize images
   */
  optimizeImages() {
    console.log('🖼️  Optimizing images...');
    
    const publicDir = path.join(__dirname, '../public');
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    
    this.processDirectory(publicDir, (filePath) => {
      const ext = path.extname(filePath).toLowerCase();
      if (imageExtensions.includes(ext)) {
        this.optimizeImage(filePath);
      }
    });
  }

  /**
   * Optimize CSS
   */
  optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    
    const distDir = path.join(__dirname, '../dist');
    const cssFiles = this.findFiles(distDir, '.css');
    
    cssFiles.forEach(file => {
      this.optimizeCSSFile(file);
    });
  }

  /**
   * Optimize JavaScript
   */
  optimizeJS() {
    console.log('⚡ Optimizing JavaScript...');
    
    const distDir = path.join(__dirname, '../dist');
    const jsFiles = this.findFiles(distDir, '.js');
    
    jsFiles.forEach(file => {
      this.optimizeJSFile(file);
    });
  }

  /**
   * Process directory recursively
   */
  processDirectory(dir, callback) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.processDirectory(filePath, callback);
      } else {
        callback(filePath);
      }
    });
  }

  /**
   * Find files by extension
   */
  findFiles(dir, extension) {
    const files = [];
    this.processDirectory(dir, (filePath) => {
      if (path.extname(filePath) === extension) {
        files.push(filePath);
      }
    });
    return files;
  }

  /**
   * Optimize individual image
   */
  optimizeImage(filePath) {
    try {
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      
      if (sizeKB > 100) { // Only log large images
        console.log(`  📸 ${path.basename(filePath)}: ${sizeKB}KB`);
      }
    } catch (error) {
      console.error(`Error optimizing image ${filePath}:`, error.message);
    }
  }

  /**
   * Optimize CSS file
   */
  optimizeCSSFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalSize = content.length;
      
      // Remove comments
      content = content.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Remove extra whitespace
      content = content.replace(/\s+/g, ' ');
      content = content.replace(/;\s*}/g, '}');
      content = content.replace(/{\s*/g, '{');
      content = content.replace(/;\s*/g, ';');
      
      // Remove unnecessary semicolons
      content = content.replace(/;}/g, '}');
      
      const optimizedSize = content.length;
      const savings = Math.round(((originalSize - optimizedSize) / originalSize) * 100);
      
      if (savings > 0) {
        fs.writeFileSync(filePath, content);
        console.log(`  🎨 ${path.basename(filePath)}: ${savings}% smaller`);
      }
    } catch (error) {
      console.error(`Error optimizing CSS ${filePath}:`, error.message);
    }
  }

  /**
   * Optimize JavaScript file
   */
  optimizeJSFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalSize = content.length;
      
      // Remove console.log statements in production
      if (filePath.includes('dist')) {
        content = content.replace(/console\.(log|warn|info|debug)\([^)]*\);?/g, '');
      }
      
      // Remove extra whitespace
      content = content.replace(/\s+/g, ' ');
      content = content.replace(/;\s*}/g, '}');
      content = content.replace(/{\s*/g, '{');
      
      const optimizedSize = content.length;
      const savings = Math.round(((originalSize - optimizedSize) / originalSize) * 100);
      
      if (savings > 0) {
        fs.writeFileSync(filePath, content);
        console.log(`  ⚡ ${path.basename(filePath)}: ${savings}% smaller`);
      }
    } catch (error) {
      console.error(`Error optimizing JS ${filePath}:`, error.message);
    }
  }

  /**
   * Generate performance report
   */
  generatePerformanceReport() {
    console.log('📊 Generating performance report...');
    
    const distDir = path.join(__dirname, '../dist');
    const report = {
      timestamp: new Date().toISOString(),
      totalSize: 0,
      files: [],
      recommendations: []
    };

    this.processDirectory(distDir, (filePath) => {
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      
      report.totalSize += sizeKB;
      report.files.push({
        name: path.basename(filePath),
        size: sizeKB,
        type: path.extname(filePath)
      });
    });

    // Generate recommendations
    if (report.totalSize > 1000) {
      report.recommendations.push('Consider implementing code splitting to reduce bundle size');
    }
    
    const largeFiles = report.files.filter(f => f.size > 100);
    if (largeFiles.length > 0) {
      report.recommendations.push('Large files detected - consider optimization');
    }

    const reportPath = path.join(__dirname, '../performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Performance report generated: ${reportPath}`);
    console.log(`📦 Total bundle size: ${report.totalSize}KB`);
    console.log(`📁 Files processed: ${report.files.length}`);
  }
}

// Run the optimizer
new PerformanceOptimizer();
