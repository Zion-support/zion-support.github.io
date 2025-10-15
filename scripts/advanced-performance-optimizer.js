const fs = require('fs');
const path = require('path');

console.log('Running advanced performance optimizations...');

// 1. Optimize HTML
const optimizeHTML = () => {
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Add preload hints for critical resources
    const preloadHints = `
    <link rel="preload" href="/assets/css/index.css" as="style">
    <link rel="preload" href="/assets/js/index.js" as="script">
    <link rel="preload" href="/assets/js/vendor.js" as="script">`;
    
    html = html.replace('</head>', `${preloadHints}\n  </head>`);
    
    // Add resource hints
    const resourceHints = `
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`;
    
    html = html.replace('</head>', `${resourceHints}\n  </head>`);
    
    fs.writeFileSync(htmlPath, html);
    console.log('✓ HTML optimized with preload hints');
  }
};

// 2. Create service worker for caching
const createServiceWorker = () => {
  const swContent = `
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/assets/css/index.css',
  '/assets/js/vendor.js',
  '/assets/js/index.js'
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
  
  fs.writeFileSync(path.join(__dirname, '../dist/sw.js'), swContent);
  console.log('✓ Service worker created');
};

// 3. Create robots.txt
const createRobotsTxt = () => {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  
  fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robotsContent);
  console.log('✓ robots.txt created');
};

// 4. Create .htaccess for better caching
const createHtaccess = () => {
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
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options nosniff
  Header always set X-Frame-Options DENY
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;
  
  fs.writeFileSync(path.join(__dirname, '../dist/.htaccess'), htaccessContent);
  console.log('✓ .htaccess created for caching and security');
};

// 5. Optimize CSS
const optimizeCSS = () => {
  const cssDir = path.join(__dirname, '../dist/assets/css');
  if (fs.existsSync(cssDir)) {
    const files = fs.readdirSync(cssDir);
    files.forEach(file => {
      if (file.endsWith('.css')) {
        const filePath = path.join(cssDir, file);
        let css = fs.readFileSync(filePath, 'utf8');
        
        // Remove unnecessary whitespace and comments
        css = css.replace(/\/\*[\s\S]*?\*\//g, '');
        css = css.replace(/\s+/g, ' ');
        css = css.replace(/;\s*}/g, '}');
        css = css.replace(/{\s*/g, '{');
        css = css.replace(/;\s*/g, ';');
        
        fs.writeFileSync(filePath, css);
      }
    });
    console.log('✓ CSS optimized');
  }
};

// Run all optimizations
try {
  optimizeHTML();
  createServiceWorker();
  createRobotsTxt();
  createHtaccess();
  optimizeCSS();
  
  console.log('Advanced performance optimizations completed successfully!');
} catch (error) {
  console.error('Error during optimization:', error);
  process.exit(1);
}