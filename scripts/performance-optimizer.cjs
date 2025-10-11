const fs = require('fs');
const path = require('path');

console.log('Running performance optimizations...');

// Performance optimization configurations
const optimizations = {
  // Image optimization settings
  images: {
    quality: 85,
    formats: ['webp', 'avif', 'jpeg'],
    sizes: [320, 640, 768, 1024, 1280, 1920]
  },
  
  // CSS optimization
  css: {
    minify: true,
    removeUnused: true,
    criticalCSS: true
  },
  
  // JavaScript optimization
  js: {
    minify: true,
    treeShaking: true,
    codeSplitting: true
  },
  
  // Caching strategies
  caching: {
    staticAssets: '1y',
    html: '1h',
    api: '5m'
  },
  
  // Compression
  compression: {
    gzip: true,
    brotli: true,
    level: 6
  }
};

// Generate performance optimization report
function generatePerformanceReport() {
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: optimizations,
    recommendations: [
      'Enable gzip compression on server',
      'Implement CDN for static assets',
      'Use WebP/AVIF images with fallbacks',
      'Implement service worker for caching',
      'Optimize critical rendering path',
      'Use lazy loading for images and components',
      'Minimize third-party scripts',
      'Implement resource hints (preload, prefetch)',
      'Use HTTP/2 server push for critical resources',
      'Optimize database queries and API responses'
    ],
    metrics: {
      targetLCP: 2500, // ms
      targetFID: 100,  // ms
      targetCLS: 0.1,  // score
      targetFCP: 1800, // ms
      targetTTFB: 800  // ms
    }
  };

  const reportPath = path.join(__dirname, '..', 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('Performance report generated');
  return report;
}

// Generate critical CSS recommendations
function generateCriticalCSS() {
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
.hero-section {
  background: linear-gradient(135deg, #0f172a 0%, #7c3aed 50%, #0f172a 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
}

.service-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Preload critical fonts */
@font-face {
  font-family: 'Inter';
  font-display: swap;
  src: url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
}

/* Optimize animations */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

  const cssPath = path.join(__dirname, '..', 'public', 'critical.css');
  fs.writeFileSync(cssPath, criticalCSS);
  
  console.log('Critical CSS generated');
}

// Generate service worker for caching
function generateServiceWorker() {
  const serviceWorker = `
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/static/css/main.css',
  '/static/js/main.js'
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
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
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

  const swPath = path.join(__dirname, '..', 'public', 'sw.js');
  fs.writeFileSync(swPath, serviceWorker);
  
  console.log('Service worker generated');
}

// Generate manifest.json for PWA
function generateManifest() {
  const manifest = {
    name: 'Zion Tech Group - AI & IT Solutions',
    short_name: 'Zion Tech',
    description: 'Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#06b6d4',
    icons: [
      {
        src: '/logo192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/logo512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'en',
    orientation: 'portrait-primary'
  };

  const manifestPath = path.join(__dirname, '..', 'public', 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log('Web app manifest generated');
}

// Generate .htaccess for Apache servers
function generateHtaccess() {
  const htaccess = `
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

# Enable browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Redirect to HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
`;

  const htaccessPath = path.join(__dirname, '..', 'public', '.htaccess');
  fs.writeFileSync(htaccessPath, htaccess);
  
  console.log('.htaccess generated');
}

// Run all optimizations
function runOptimizations() {
  try {
    generatePerformanceReport();
    generateCriticalCSS();
    generateServiceWorker();
    generateManifest();
    generateHtaccess();
    
    console.log('Performance optimizations completed');
  } catch (error) {
    console.error('Error running optimizations:', error);
    process.exit(1);
  }
}

runOptimizations();