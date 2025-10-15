import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Running advanced optimizations...');

// 1. Optimize HTML
const optimizeHTML = () => {
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Remove unnecessary whitespace
    html = html.replace(/\s+/g, ' ').trim();
    
    // Add preload hints for critical resources
    const preloadHints = `
    <link rel="preload" href="/assets/index-CkD2bcGN.css" as="style">
    <link rel="preload" href="/assets/vendor-XsA0nTLH.js" as="script">
    <link rel="preload" href="/assets/index-C7jV8mq3.js" as="script">
    `;
    
    html = html.replace('<head>', `<head>${preloadHints}`);
    
    fs.writeFileSync(htmlPath, html);
    console.log('✓ HTML optimized');
  }
};

// 2. Create service worker for caching
const createServiceWorker = () => {
  const swContent = `
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/assets/index-CkD2bcGN.css',
  '/assets/vendor-XsA0nTLH.js',
  '/assets/index-C7jV8mq3.js'
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
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
`;

  fs.writeFileSync(path.join(__dirname, '../dist/.htaccess'), htaccessContent);
  console.log('✓ .htaccess created');
};

// 5. Create manifest.json for PWA
const createManifest = () => {
  const manifestContent = {
    "name": "Zion Tech Group",
    "short_name": "Zion Tech",
    "description": "Advanced AI and IT Solutions",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#2563eb",
    "icons": [
      {
        "src": "/icon-192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icon-512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  };

  fs.writeFileSync(
    path.join(__dirname, '../dist/manifest.json'), 
    JSON.stringify(manifestContent, null, 2)
  );
  console.log('✓ manifest.json created');
};

// Run all optimizations
try {
  optimizeHTML();
  createServiceWorker();
  createRobotsTxt();
  createHtaccess();
  createManifest();
  
  console.log('✅ Advanced optimizations completed successfully!');
} catch (error) {
  console.error('❌ Error during optimization:', error);
  process.exit(1);
}