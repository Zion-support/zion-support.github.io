import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance optimization script
class PerformanceOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.optimizations = [];
  }

  // Optimize HTML
  optimizeHTML() {
    const htmlFiles = this.findFiles('.html');
    
    htmlFiles.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove unnecessary whitespace
      content = content.replace(/\s+/g, ' ').trim();
      
      // Add preload hints for critical resources
      const preloadHints = `
        <link rel="preload" href="/assets/index.css" as="style">
        <link rel="preload" href="/assets/index.js" as="script">
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
      `;
      
      content = content.replace('<head>', `<head>${preloadHints}`);
      
      // Add resource hints
      const resourceHints = `
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="dns-prefetch" href="//www.google-analytics.com">
        <link rel="preconnect" href="//fonts.gstatic.com" crossorigin>
      `;
      
      content = content.replace('</head>', `${resourceHints}</head>`);
      
      fs.writeFileSync(file, content);
      this.optimizations.push(`Optimized HTML: ${path.basename(file)}`);
    });
  }

  // Optimize CSS
  optimizeCSS() {
    const cssFiles = this.findFiles('.css');
    
    cssFiles.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove unused CSS (basic implementation)
      content = content.replace(/\/\*[\s\S]*?\*\//g, ''); // Remove comments
      content = content.replace(/\s+/g, ' '); // Minify whitespace
      content = content.replace(/;\s*}/g, '}'); // Remove trailing semicolons
      content = content.replace(/:\s+/g, ':'); // Remove spaces after colons
      content = content.replace(/,\s+/g, ','); // Remove spaces after commas
      
      fs.writeFileSync(file, content);
      this.optimizations.push(`Optimized CSS: ${path.basename(file)}`);
    });
  }

  // Optimize JavaScript
  optimizeJS() {
    const jsFiles = this.findFiles('.js');
    
    jsFiles.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      
      // Basic JS optimization
      content = content.replace(/\/\*[\s\S]*?\*\//g, ''); // Remove comments
      content = content.replace(/\/\/.*$/gm, ''); // Remove single-line comments
      content = content.replace(/\s+/g, ' '); // Minify whitespace
      
      fs.writeFileSync(file, content);
      this.optimizations.push(`Optimized JS: ${path.basename(file)}`);
    });
  }

  // Add service worker
  addServiceWorker() {
    const serviceWorkerContent = `
      const CACHE_NAME = 'zion-tech-group-v1';
      const urlsToCache = [
        '/',
        '/assets/index.css',
        '/assets/index.js',
        '/fonts/inter.woff2'
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
    `;
    
    fs.writeFileSync(path.join(this.distPath, 'sw.js'), serviceWorkerContent);
    this.optimizations.push('Added service worker');
  }

  // Add manifest
  addManifest() {
    const manifest = {
      name: 'Zion Tech Group',
      short_name: 'Zion Tech',
      description: 'Advanced AI and IT Solutions',
      start_url: '/',
      display: 'standalone',
      background_color: '#0f0f23',
      theme_color: '#4f46e5',
      icons: [
        {
          src: '/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    };
    
    fs.writeFileSync(
      path.join(this.distPath, 'manifest.json'), 
      JSON.stringify(manifest, null, 2)
    );
    this.optimizations.push('Added PWA manifest');
  }

  // Find files by extension
  findFiles(extension) {
    const files = [];
    
    const findFilesRecursive = (dir) => {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          findFilesRecursive(fullPath);
        } else if (item.endsWith(extension)) {
          files.push(fullPath);
        }
      });
    };
    
    if (fs.existsSync(this.distPath)) {
      findFilesRecursive(this.distPath);
    }
    
    return files;
  }

  // Run all optimizations
  run() {
    console.log('🚀 Starting performance optimization...');
    
    if (!fs.existsSync(this.distPath)) {
      console.log('❌ Dist directory not found. Please run build first.');
      return;
    }
    
    this.optimizeHTML();
    this.optimizeCSS();
    this.optimizeJS();
    this.addServiceWorker();
    this.addManifest();
    
    console.log('✅ Performance optimization complete!');
    console.log('Optimizations applied:');
    this.optimizations.forEach(opt => console.log(`  - ${opt}`));
  }
}

// Run the optimizer
const optimizer = new PerformanceOptimizer();
optimizer.run();