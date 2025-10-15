import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AdvancedPerformanceOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '..', 'dist');
    this.optimizations = [];
  }

  async optimize() {
    console.log('🚀 Starting advanced performance optimizations...');
    
    try {
      await this.optimizeHTML();
      await this.optimizeCSS();
      await this.optimizeJS();
      await this.optimizeImages();
      await this.generateServiceWorker();
      await this.generateManifest();
      await this.optimizeCaching();
      
      console.log('✅ Advanced performance optimizations completed!');
      console.log(`📊 Applied ${this.optimizations.length} optimizations`);
      
      return this.optimizations;
    } catch (error) {
      console.error('❌ Performance optimization failed:', error);
      throw error;
    }
  }

  async optimizeHTML() {
    const htmlPath = path.join(this.distPath, 'index.html');
    if (!fs.existsSync(htmlPath)) return;

    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Add preload hints for critical resources
    const preloadHints = [
      '<link rel="preload" href="/assets/index.css" as="style">',
      '<link rel="preload" href="/assets/vendor.js" as="script">',
      '<link rel="preload" href="/assets/index.js" as="script">',
    ].join('\n    ');

    // Add resource hints before closing head
    html = html.replace('</head>', `    ${preloadHints}\n  </head>`);

    // Add performance monitoring script
    const performanceScript = `
    <script>
      // Performance monitoring
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0];
          if (perfData) {
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
            
            // Send to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'page_load_time', {
                event_category: 'Performance',
                value: Math.round(loadTime)
              });
            }
          }
        });
      }
    </script>`;

    html = html.replace('</body>', `    ${performanceScript}\n  </body>`);

    fs.writeFileSync(htmlPath, html);
    this.optimizations.push('HTML optimization with preload hints and performance monitoring');
  }

  async optimizeCSS() {
    const cssFiles = this.findFiles('.css');
    
    for (const file of cssFiles) {
      let css = fs.readFileSync(file, 'utf8');
      
      // Remove unused CSS (basic implementation)
      css = this.removeUnusedCSS(css);
      
      // Minify CSS (basic implementation)
      css = css
        .replace(/\s+/g, ' ')
        .replace(/;\s*}/g, '}')
        .replace(/\s*{\s*/g, '{')
        .replace(/;\s*/g, ';')
        .trim();

      fs.writeFileSync(file, css);
    }
    
    this.optimizations.push(`Optimized ${cssFiles.length} CSS files`);
  }

  async optimizeJS() {
    const jsFiles = this.findFiles('.js');
    
    for (const file of jsFiles) {
      let js = fs.readFileSync(file, 'utf8');
      
      // Remove console.log statements in production
      if (process.env.NODE_ENV === 'production') {
        js = js.replace(/console\.(log|debug|info)\([^)]*\);?/g, '');
      }
      
      // Basic minification
      js = js
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
        .replace(/\/\/.*$/gm, '') // Remove line comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/;\s*}/g, '}') // Remove semicolons before closing braces
        .trim();

      fs.writeFileSync(file, js);
    }
    
    this.optimizations.push(`Optimized ${jsFiles.length} JavaScript files`);
  }

  async optimizeImages() {
    // This would typically use sharp or imagemin
    // For now, we'll just create a placeholder
    console.log('📸 Image optimization would be implemented here');
    this.optimizations.push('Image optimization placeholder');
  }

  async generateServiceWorker() {
    const swContent = `
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/assets/index.css',
  '/assets/vendor.js',
  '/assets/index.js',
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

    fs.writeFileSync(path.join(this.distPath, 'sw.js'), swContent);
    this.optimizations.push('Generated service worker for caching');
  }

  async generateManifest() {
    const manifest = {
      name: 'Zion Tech Group',
      short_name: 'Zion Tech',
      description: 'Advanced AI and IT Solutions',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#3b82f6',
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
    this.optimizations.push('Generated PWA manifest');
  }

  async optimizeCaching() {
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
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
`;

    fs.writeFileSync(path.join(this.distPath, '.htaccess'), htaccessContent);
    this.optimizations.push('Generated .htaccess for caching and security');
  }

  removeUnusedCSS(css) {
    // Basic implementation - in production, use PurgeCSS
    return css;
  }

  findFiles(extension) {
    const files = [];
    const findInDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          findInDir(fullPath);
        } else if (item.endsWith(extension)) {
          files.push(fullPath);
        }
      }
    };
    findInDir(this.distPath);
    return files;
  }
}

// Run optimization if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new AdvancedPerformanceOptimizer();
  optimizer.optimize().catch(console.error);
}

export default AdvancedPerformanceOptimizer;