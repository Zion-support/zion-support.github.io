const fs = require('fs');
const path = require('path');

class AdvancedOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.optimizations = [];
  }

  async optimize() {
    console.log('🚀 Starting advanced optimization...');
    
    try {
      await this.optimizeHTML();
      await this.optimizeCSS();
      await this.optimizeJS();
      await this.optimizeImages();
      await this.generateManifest();
      await this.generateServiceWorker();
      
      console.log('✅ Advanced optimization completed!');
      this.printSummary();
    } catch (error) {
      console.error('❌ Optimization failed:', error);
      process.exit(1);
    }
  }

  async optimizeHTML() {
    console.log('📄 Optimizing HTML...');
    
    const indexPath = path.join(this.distPath, 'index.html');
    if (!fs.existsSync(indexPath)) {
      console.warn('⚠️  index.html not found, skipping HTML optimization');
      return;
    }

    let html = fs.readFileSync(indexPath, 'utf8');
    
    // Remove comments
    html = html.replace(/<!--[\s\S]*?-->/g, '');
    
    // Minify inline CSS and JS
    html = html.replace(/\s+/g, ' ');
    html = html.replace(/>\s+</g, '><');
    
    // Add preload hints for critical resources
    const preloadHints = `
      <link rel="preload" href="/assets/css/main.css" as="style">
      <link rel="preload" href="/assets/js/main.js" as="script">
    `;
    
    html = html.replace('</head>', `${preloadHints}\n</head>`);
    
    fs.writeFileSync(indexPath, html);
    this.optimizations.push('HTML minified and optimized');
  }

  async optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    
    const cssDir = path.join(this.distPath, 'assets/css');
    if (!fs.existsSync(cssDir)) {
      console.warn('⚠️  CSS directory not found, skipping CSS optimization');
      return;
    }

    const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
    
    for (const file of cssFiles) {
      const filePath = path.join(cssDir, file);
      let css = fs.readFileSync(filePath, 'utf8');
      
      // Remove comments
      css = css.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Remove unnecessary whitespace
      css = css.replace(/\s+/g, ' ');
      css = css.replace(/;\s*}/g, '}');
      css = css.replace(/{\s*/g, '{');
      css = css.replace(/;\s*/g, ';');
      
      // Remove unused CSS rules (basic implementation)
      css = this.removeUnusedCSS(css);
      
      fs.writeFileSync(filePath, css);
    }
    
    this.optimizations.push('CSS minified and optimized');
  }

  async optimizeJS() {
    console.log('⚡ Optimizing JavaScript...');
    
    const jsDir = path.join(this.distPath, 'assets/js');
    if (!fs.existsSync(jsDir)) {
      console.warn('⚠️  JS directory not found, skipping JS optimization');
      return;
    }

    const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));
    
    for (const file of jsFiles) {
      const filePath = path.join(jsDir, file);
      let js = fs.readFileSync(filePath, 'utf8');
      
      // Remove console.log statements in production
      if (process.env.NODE_ENV === 'production') {
        js = js.replace(/console\.(log|debug|info)\([^)]*\);?\s*/g, '');
      }
      
      // Basic minification
      js = js.replace(/\s+/g, ' ');
      js = js.replace(/;\s*/g, ';');
      
      fs.writeFileSync(filePath, js);
    }
    
    this.optimizations.push('JavaScript minified and optimized');
  }

  async optimizeImages() {
    console.log('🖼️  Optimizing images...');
    
    const imagesDir = path.join(this.distPath, 'assets');
    if (!fs.existsSync(imagesDir)) {
      console.warn('⚠️  Images directory not found, skipping image optimization');
      return;
    }

    // This is a placeholder for image optimization
    // In a real implementation, you would use libraries like sharp or imagemin
    console.log('📸 Image optimization would be implemented here');
    
    this.optimizations.push('Images optimized (placeholder)');
  }

  async generateManifest() {
    console.log('📱 Generating manifest...');
    
    const manifest = {
      name: 'Zion Tech Group',
      short_name: 'Zion Tech',
      description: 'Enterprise-grade AI, micro SaaS, and IT solutions',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#2563eb',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    };

    fs.writeFileSync(
      path.join(this.distPath, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
    );
    
    this.optimizations.push('PWA manifest generated');
  }

  async generateServiceWorker() {
    console.log('🔧 Generating service worker...');
    
    const serviceWorker = `
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/assets/css/main.css',
  '/assets/js/main.js',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
    `.trim();

    fs.writeFileSync(
      path.join(this.distPath, 'sw.js'),
      serviceWorker
    );
    
    this.optimizations.push('Service worker generated');
  }

  removeUnusedCSS(css) {
    // Basic CSS optimization - remove empty rules
    css = css.replace(/[^{}]+\{\s*\}/g, '');
    css = css.replace(/\s+/g, ' ');
    return css;
  }

  printSummary() {
    console.log('\n📊 Optimization Summary:');
    console.log('========================');
    this.optimizations.forEach((opt, index) => {
      console.log(`${index + 1}. ${opt}`);
    });
    console.log('\n🎉 All optimizations completed successfully!');
  }
}

// Run optimization if called directly
if (require.main === module) {
  const optimizer = new AdvancedOptimizer();
  optimizer.optimize();
}

module.exports = AdvancedOptimizer;