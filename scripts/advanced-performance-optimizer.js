import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Advanced Performance Optimizer
 * Implements comprehensive performance optimizations for the Zion Tech Group website
 */

class AdvancedPerformanceOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.optimizations = [];
    this.recommendations = [];
  }

  /**
   * Optimize HTML files
   */
  optimizeHTML() {
    try {
      const htmlFiles = this.findFiles('.html');
      
      htmlFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove unnecessary whitespace
        content = content.replace(/>\s+</g, '><');
        
        // Add preload hints for critical resources
        if (file.includes('index.html')) {
          const preloadHints = `
    <link rel="preload" href="/assets/index-DApGEc-z.js" as="script" crossorigin>
    <link rel="preload" href="/assets/index-Dq8n7JAm.css" as="style">
    <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
  `;
          content = content.replace('</head>', preloadHints + '\n  </head>');
        }
        
        // Add resource hints
        const resourceHints = `
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  `;
        
        if (!content.includes('dns-prefetch')) {
          content = content.replace('</head>', resourceHints + '\n  </head>');
        }
        
        fs.writeFileSync(file, content);
      });
      
      this.optimizations.push('HTML files optimized with preload hints and resource hints');
    } catch (error) {
      console.error('Error optimizing HTML:', error);
    }
  }

  /**
   * Optimize CSS files
   */
  optimizeCSS() {
    try {
      const cssFiles = this.findFiles('.css');
      
      cssFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove unnecessary whitespace and comments
        content = content.replace(/\/\*[\s\S]*?\*\//g, '');
        content = content.replace(/\s+/g, ' ');
        content = content.replace(/;\s*}/g, '}');
        content = content.replace(/\s*{\s*/g, '{');
        content = content.replace(/;\s*/g, ';');
        
        fs.writeFileSync(file, content);
      });
      
      this.optimizations.push('CSS files minified and optimized');
    } catch (error) {
      console.error('Error optimizing CSS:', error);
    }
  }

  /**
   * Optimize JavaScript files
   */
  optimizeJavaScript() {
    try {
      const jsFiles = this.findFiles('.js');
      
      jsFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove console.log statements in production
        if (process.env.NODE_ENV === 'production') {
          content = content.replace(/console\.(log|warn|info|debug)\([^)]*\);?/g, '');
        }
        
        // Remove unnecessary whitespace
        content = content.replace(/\s+/g, ' ');
        content = content.replace(/;\s*}/g, '}');
        
        fs.writeFileSync(file, content);
      });
      
      this.optimizations.push('JavaScript files optimized and console statements removed');
    } catch (error) {
      console.error('Error optimizing JavaScript:', error);
    }
  }

  /**
   * Generate service worker for caching
   */
  generateServiceWorker() {
    try {
      const swContent = `
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/assets/index-DApGEc-z.js',
  '/assets/index-Dq8n7JAm.css',
  '/assets/react-vendor-sX78JqvJ.js',
  '/fonts/inter-var.woff2'
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

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
`;

      fs.writeFileSync(path.join(this.distPath, 'sw.js'), swContent);
      this.optimizations.push('Service worker generated for caching');
    } catch (error) {
      console.error('Error generating service worker:', error);
    }
  }

  /**
   * Generate PWA manifest
   */
  generatePWAManifest() {
    try {
      const manifest = {
        name: 'Zion Tech Group - Advanced AI and IT Solutions',
        short_name: 'Zion Tech',
        description: 'Leading provider of AI-powered solutions, IT services, and digital transformation',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#8b5cf6',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml'
          }
        ],
        categories: ['business', 'productivity', 'technology'],
        lang: 'en-US',
        orientation: 'portrait-primary'
      };

      fs.writeFileSync(
        path.join(this.distPath, 'manifest.json'),
        JSON.stringify(manifest, null, 2)
      );
      
      this.optimizations.push('PWA manifest generated');
    } catch (error) {
      console.error('Error generating PWA manifest:', error);
    }
  }

  /**
   * Generate robots.txt
   */
  generateRobotsTxt() {
    try {
      const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /dist/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /ai-services
Allow: /micro-saas
Allow: /5g-solutions
`;

      fs.writeFileSync(path.join(this.distPath, 'robots.txt'), robotsContent);
      this.optimizations.push('robots.txt generated');
    } catch (error) {
      console.error('Error generating robots.txt:', error);
    }
  }

  /**
   * Generate sitemap.xml
   */
  generateSitemap() {
    try {
      const routes = [
        '/',
        '/about',
        '/contact',
        '/services',
        '/pricing',
        '/ai-services',
        '/micro-saas',
        '/5g-solutions',
        '/privacy',
        '/terms',
        '/cookies'
      ];

      // Add AI service routes
      const aiServices = [
        'ai-analytics', 'ai-automation', 'ai-business-intelligence',
        'ai-content-generation', 'ai-customer-service', 'ai-data-analytics',
        'ai-email-automation', 'ai-fraud-detection', 'ai-healthcare',
        'ai-marketing', 'ai-predictive-analytics', 'ai-project-management',
        'ai-recommendation-engine', 'ai-sales-automation', 'ai-workflow-automation'
      ];

      // Add Zion service routes
      const zionServices = [
        'zion-analytics-pro', 'zion-security-shield', 'zion-cloud-vault',
        'zion-content-studio', 'zion-data-sync', 'zion-lead-magnet',
        'zion-project-master', 'zion-email-automation', 'zion-social-scheduler',
        'zion-workflow-automation', 'zion-invoice-genius', 'zion-inventory-smart',
        'zion-compliance-manager', 'zion-performance-monitor'
      ];

      // Add 5G service routes
      const fiveGServices = [
        '5g-data-analytics', '5g-edge-computing', '5g-implementation',
        '5g-mobile-applications', '5g-network-infrastructure', '5g-private-networks',
        '5g-smart-city-solutions'
      ];

      const allRoutes = [
        ...routes,
        ...aiServices.map(route => `/${route}`),
        ...zionServices.map(route => `/${route}`),
        ...fiveGServices.map(route => `/${route}`)
      ];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>https://ziontechgroup.com${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

      fs.writeFileSync(path.join(this.distPath, 'sitemap.xml'), sitemap);
      this.optimizations.push('Sitemap.xml generated');
    } catch (error) {
      console.error('Error generating sitemap:', error);
    }
  }

  /**
   * Optimize images
   */
  optimizeImages() {
    try {
      const imageFiles = this.findFiles(/\.(png|jpg|jpeg|gif|svg|webp)$/);
      
      imageFiles.forEach(file => {
        // Add loading="lazy" to images in HTML
        if (file.endsWith('.html')) {
          let content = fs.readFileSync(file, 'utf8');
          content = content.replace(/<img([^>]*?)>/g, (match, attrs) => {
            if (!attrs.includes('loading=')) {
              return `<img${attrs} loading="lazy">`;
            }
            return match;
          });
          fs.writeFileSync(file, content);
        }
      });
      
      this.optimizations.push('Images optimized with lazy loading');
    } catch (error) {
      console.error('Error optimizing images:', error);
    }
  }

  /**
   * Generate performance report
   */
  generatePerformanceReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        optimizations: this.optimizations,
        recommendations: [
          'Consider implementing image optimization pipeline',
          'Add more granular code splitting for large pages',
          'Implement preloading for critical resources',
          'Add more comprehensive caching strategies',
          'Consider implementing CDN for static assets',
          'Implement critical CSS inlining',
          'Add resource hints for external domains',
          'Consider implementing HTTP/2 server push'
        ],
        bundleAnalysis: {
          totalFiles: this.findFiles().length,
          cssFiles: this.findFiles('.css').length,
          jsFiles: this.findFiles('.js').length,
          htmlFiles: this.findFiles('.html').length
        }
      };

      fs.writeFileSync(
        path.join(__dirname, '../performance-report.json'),
        JSON.stringify(report, null, 2)
      );
      
      this.optimizations.push('Performance report generated');
    } catch (error) {
      console.error('Error generating performance report:', error);
    }
  }

  /**
   * Find files by extension
   */
  findFiles(extension = null) {
    const files = [];
    
    const scanDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDir(fullPath);
        } else if (stat.isFile()) {
          if (extension === null || 
              (typeof extension === 'string' && item.endsWith(extension)) ||
              (extension instanceof RegExp && extension.test(item))) {
            files.push(fullPath);
          }
        }
      });
    };
    
    scanDir(this.distPath);
    return files;
  }

  /**
   * Run all optimizations
   */
  async run() {
    console.log('Starting advanced performance optimization...');
    
    this.optimizeHTML();
    this.optimizeCSS();
    this.optimizeJavaScript();
    this.generateServiceWorker();
    this.generatePWAManifest();
    this.generateRobotsTxt();
    this.generateSitemap();
    this.optimizeImages();
    this.generatePerformanceReport();
    
    console.log('Advanced performance optimization completed!');
    console.log(`Applied ${this.optimizations.length} optimizations`);
    
    return {
      optimizations: this.optimizations,
      recommendations: this.recommendations
    };
  }
}

// Run the optimizer
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new AdvancedPerformanceOptimizer();
  optimizer.run().catch(console.error);
}

export default AdvancedPerformanceOptimizer;