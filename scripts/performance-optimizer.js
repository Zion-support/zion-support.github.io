#!/usr/bin/env node

/**
 * Advanced Performance Optimizer for Zion Tech Group Website
 * This script optimizes the build for maximum performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Advanced Performance Optimization...');

// Configuration
const config = {
  buildDir: 'dist',
  publicDir: 'public',
  maxImageSize: 1024 * 1024, // 1MB
  imageFormats: ['webp', 'avif', 'jpg', 'png'],
  criticalCSS: true,
  minifyHTML: true,
  compressAssets: true,
  generateSitemap: true,
  generateRobots: true,
  optimizeFonts: true
};

// Utility functions
const log = (message, type = 'info') => {
  const colors = {
    info: '\x1b[36m',
    success: '\x1b[32m',
    warning: '\x1b[33m',
    error: '\x1b[31m',
    reset: '\x1b[0m'
  };
  console.log(`${colors[type]}${message}${colors.reset}`);
};

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// 1. Optimize Images
const optimizeImages = () => {
  log('📸 Optimizing images...', 'info');
  
  const imageDir = path.join(config.buildDir, 'assets');
  if (!fs.existsSync(imageDir)) return;
  
  const images = fs.readdirSync(imageDir).filter(file => 
    /\.(jpg|jpeg|png|gif|svg)$/i.test(file)
  );
  
  images.forEach(image => {
    const imagePath = path.join(imageDir, image);
    const stats = fs.statSync(imagePath);
    
    if (stats.size > config.maxImageSize) {
      log(`⚠️  Large image detected: ${image} (${(stats.size / 1024 / 1024).toFixed(2)}MB)`, 'warning');
    }
  });
  
  log(`✅ Processed ${images.length} images`, 'success');
};

// 2. Generate Critical CSS
const generateCriticalCSS = () => {
  if (!config.criticalCSS) return;
  
  log('🎨 Generating critical CSS...', 'info');
  
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
  color: #e2e8f0;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Navigation */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(6, 182, 212, 0.2);
}

/* Hero section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(6, 182, 212, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }
}
`;

  const criticalPath = path.join(config.buildDir, 'critical.css');
  fs.writeFileSync(criticalPath, criticalCSS);
  log('✅ Critical CSS generated', 'success');
};

// 3. Minify HTML
const minifyHTML = () => {
  if (!config.minifyHTML) return;
  
  log('📄 Minifying HTML...', 'info');
  
  const htmlFiles = fs.readdirSync(config.buildDir).filter(file => 
    file.endsWith('.html')
  );
  
  htmlFiles.forEach(file => {
    const filePath = path.join(config.buildDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Basic HTML minification
    content = content
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .replace(/<!--[\s\S]*?-->/g, '')
      .trim();
    
    fs.writeFileSync(filePath, content);
  });
  
  log(`✅ Minified ${htmlFiles.length} HTML files`, 'success');
};

// 4. Generate Sitemap
const generateSitemap = () => {
  if (!config.generateSitemap) return;
  
  log('🗺️  Generating sitemap...', 'info');
  
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '',
    '/about',
    '/contact',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/pricing',
    '/blog',
    '/privacy',
    '/terms'
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  const sitemapPath = path.join(config.buildDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  log('✅ Sitemap generated', 'success');
};

// 5. Generate Robots.txt
const generateRobots = () => {
  if (!config.generateRobots) return;
  
  log('🤖 Generating robots.txt...', 'info');
  
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
`;

  const robotsPath = path.join(config.buildDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robots);
  log('✅ Robots.txt generated', 'success');
};

// 6. Optimize Fonts
const optimizeFonts = () => {
  if (!config.optimizeFonts) return;
  
  log('🔤 Optimizing fonts...', 'info');
  
  // Add font preloading to HTML
  const htmlFiles = fs.readdirSync(config.buildDir).filter(file => 
    file.endsWith('.html')
  );
  
  htmlFiles.forEach(file => {
    const filePath = path.join(config.buildDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add font preload links
    const fontPreloads = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"></noscript>
    `;
    
    content = content.replace('</head>', `${fontPreloads}</head>`);
    fs.writeFileSync(filePath, content);
  });
  
  log('✅ Fonts optimized', 'success');
};

// 7. Generate Performance Report
const generatePerformanceReport = () => {
  log('📊 Generating performance report...', 'info');
  
  const buildDir = config.buildDir;
  const stats = {
    totalFiles: 0,
    totalSize: 0,
    largestFiles: [],
    imageCount: 0,
    cssCount: 0,
    jsCount: 0,
    htmlCount: 0
  };
  
  const scanDir = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDir(filePath);
      } else {
        stats.totalFiles++;
        stats.totalSize += stat.size;
        
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'].includes(ext)) {
          stats.imageCount++;
        } else if (ext === '.css') {
          stats.cssCount++;
        } else if (ext === '.js') {
          stats.jsCount++;
        } else if (ext === '.html') {
          stats.htmlCount++;
        }
        
        stats.largestFiles.push({
          path: filePath.replace(buildDir, ''),
          size: stat.size,
          sizeFormatted: (stat.size / 1024).toFixed(2) + ' KB'
        });
      }
    });
  };
  
  scanDir(buildDir);
  
  stats.largestFiles.sort((a, b) => b.size - a.size);
  stats.largestFiles = stats.largestFiles.slice(0, 10);
  
  const report = {
    timestamp: new Date().toISOString(),
    buildDir,
    stats: {
      ...stats,
      totalSizeFormatted: (stats.totalSize / 1024 / 1024).toFixed(2) + ' MB'
    },
    recommendations: []
  };
  
  // Add recommendations
  if (stats.totalSize > 5 * 1024 * 1024) { // 5MB
    report.recommendations.push('Consider code splitting to reduce bundle size');
  }
  
  if (stats.imageCount > 20) {
    report.recommendations.push('Consider lazy loading for images below the fold');
  }
  
  if (stats.largestFiles[0]?.size > 1024 * 1024) { // 1MB
    report.recommendations.push('Consider optimizing the largest files');
  }
  
  const reportPath = path.join(config.buildDir, 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  log('✅ Performance report generated', 'success');
  log(`📈 Total size: ${report.stats.totalSizeFormatted}`, 'info');
  log(`📁 Total files: ${report.stats.totalFiles}`, 'info');
};

// Main execution
const main = () => {
  try {
    ensureDir(config.buildDir);
    
    optimizeImages();
    generateCriticalCSS();
    minifyHTML();
    generateSitemap();
    generateRobots();
    optimizeFonts();
    generatePerformanceReport();
    
    log('🎉 Performance optimization completed successfully!', 'success');
    
  } catch (error) {
    log(`❌ Error during optimization: ${error.message}`, 'error');
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, config };