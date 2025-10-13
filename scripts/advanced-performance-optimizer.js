const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AdvancedPerformanceOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.reportPath = path.join(__dirname, '../performance-report.json');
  }

  async optimize() {
    console.log('🚀 Starting advanced performance optimization...');
    
    try {
      // 1. Optimize images
      await this.optimizeImages();
      
      // 2. Generate critical CSS
      await this.generateCriticalCSS();
      
      // 3. Optimize JavaScript bundles
      await this.optimizeJavaScript();
      
      // 4. Generate service worker
      await this.generateServiceWorker();
      
      // 5. Generate performance report
      await this.generatePerformanceReport();
      
      console.log('✅ Advanced performance optimization completed!');
    } catch (error) {
      console.error('❌ Performance optimization failed:', error);
      throw error;
    }
  }

  async optimizeImages() {
    console.log('📸 Optimizing images...');
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
    const imageFiles = this.findFiles(this.distPath, imageExtensions);
    
    for (const file of imageFiles) {
      try {
        // Use sharp for image optimization
        const sharp = require('sharp');
        const input = sharp(file);
        const metadata = await input.metadata();
        
        // Generate WebP version
        if (metadata.format !== 'webp') {
          const webpPath = file.replace(/\.[^.]+$/, '.webp');
          await input.webp({ quality: 85 }).toFile(webpPath);
        }
        
        // Optimize original
        await input
          .jpeg({ quality: 85, progressive: true })
          .png({ compressionLevel: 9, progressive: true })
          .toFile(file);
          
      } catch (error) {
        console.warn(`⚠️  Could not optimize image ${file}:`, error.message);
      }
    }
    
    console.log('✅ Images optimized');
  }

  async generateCriticalCSS() {
    console.log('🎨 Generating critical CSS...');
    
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      .min-h-screen { min-height: 100vh; }
      .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
      .from-slate-900 { --tw-gradient-from: #0f172a; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(15, 23, 42, 0)); }
      .via-purple-900 { --tw-gradient-stops: var(--tw-gradient-from), #581c87, var(--tw-gradient-to, rgba(88, 28, 135, 0)); }
      .to-slate-900 { --tw-gradient-to: #0f172a; }
      .text-white { color: #ffffff; }
      .font-bold { font-weight: 700; }
      .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
      .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
      .lg\\:text-7xl { font-size: 4.5rem; line-height: 1; }
      .mb-6 { margin-bottom: 1.5rem; }
      .mb-8 { margin-bottom: 2rem; }
      .px-4 { padding-left: 1rem; padding-right: 1rem; }
      .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
      .max-w-7xl { max-width: 80rem; }
      .mx-auto { margin-left: auto; margin-right: auto; }
      .text-center { text-align: center; }
      .relative { position: relative; }
      .overflow-hidden { overflow: hidden; }
      .bg-white\\/10 { background-color: rgba(255, 255, 255, 0.1); }
      .backdrop-blur-sm { backdrop-filter: blur(4px); }
      .rounded-xl { border-radius: 0.75rem; }
      .border { border-width: 1px; }
      .border-white\\/20 { border-color: rgba(255, 255, 255, 0.2); }
      .hover\\:bg-white\\/20:hover { background-color: rgba(255, 255, 255, 0.2); }
      .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      .duration-300 { transition-duration: 300ms; }
      .hover\\:scale-105:hover { transform: scale(1.05); }
      .hover\\:shadow-2xl:hover { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
      .hover\\:shadow-cyan-500\\/10:hover { box-shadow: 0 25px 50px -12px rgba(6, 182, 212, 0.1); }
      .group:hover .group-hover\\:scale-110 { transform: scale(1.1); }
      .group:hover .group-hover\\:text-cyan-400 { color: #22d3ee; }
      .group:hover .group-hover\\:translate-x-1 { transform: translateX(0.25rem); }
      .group:hover .group-hover\\:rotate-12 { transform: rotate(12deg); }
      .text-transparent { color: transparent; }
      .bg-clip-text { background-clip: text; }
      .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
      .from-cyan-400 { --tw-gradient-from: #22d3ee; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(34, 211, 238, 0)); }
      .via-purple-400 { --tw-gradient-stops: var(--tw-gradient-from), #a855f7, var(--tw-gradient-to, rgba(168, 85, 247, 0)); }
      .to-pink-400 { --tw-gradient-to: #f472b6; }
      .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
    `;
    
    const criticalCSSPath = path.join(this.distPath, 'critical.css');
    fs.writeFileSync(criticalCSSPath, criticalCSS);
    
    console.log('✅ Critical CSS generated');
  }

  async optimizeJavaScript() {
    console.log('⚡ Optimizing JavaScript bundles...');
    
    const jsFiles = this.findFiles(this.distPath, ['.js']);
    
    for (const file of jsFiles) {
      try {
        // Minify JavaScript using terser
        const terser = require('terser');
        const code = fs.readFileSync(file, 'utf8');
        const result = await terser.minify(code, {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug']
          },
          mangle: true,
          format: {
            comments: false
          }
        });
        
        if (result.code) {
          fs.writeFileSync(file, result.code);
        }
      } catch (error) {
        console.warn(`⚠️  Could not optimize JavaScript ${file}:`, error.message);
      }
    }
    
    console.log('✅ JavaScript bundles optimized');
  }

  async generateServiceWorker() {
    console.log('🔧 Generating service worker...');
    
    const serviceWorkerCode = `
      const CACHE_NAME = 'zion-tech-group-v1';
      const urlsToCache = [
        '/',
        '/static/css/',
        '/static/js/',
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
    `;
    
    const swPath = path.join(this.distPath, 'sw.js');
    fs.writeFileSync(swPath, serviceWorkerCode);
    
    console.log('✅ Service worker generated');
  }

  async generatePerformanceReport() {
    console.log('📊 Generating performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: {
        images: this.findFiles(this.distPath, ['.jpg', '.jpeg', '.png', '.webp']).length,
        javascript: this.findFiles(this.distPath, ['.js']).length,
        css: this.findFiles(this.distPath, ['.css']).length
      },
      recommendations: [
        'Enable gzip compression on your server',
        'Use a CDN for static assets',
        'Implement HTTP/2 server push for critical resources',
        'Consider using a service worker for offline functionality',
        'Monitor Core Web Vitals regularly'
      ]
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    
    console.log('✅ Performance report generated');
  }

  findFiles(dir, extensions) {
    const files = [];
    
    const walkDir = (currentDir) => {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(dir);
    return files;
  }
}

// Run optimization if called directly
if (require.main === module) {
  const optimizer = new AdvancedPerformanceOptimizer();
  optimizer.optimize().catch(console.error);
}

module.exports = AdvancedPerformanceOptimizer;