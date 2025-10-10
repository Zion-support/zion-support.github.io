import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Function to optimize images
function optimizeImages() {
  console.log('📸 Optimizing images...');
  
  const publicDir = path.join(__dirname, '../public');
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  
  // This would typically use sharp or imagemin
  // For now, we'll just log what we would do
  console.log('✅ Image optimization completed (placeholder)');
}

// Function to generate critical CSS
function generateCriticalCSS() {
  console.log('🎨 Generating critical CSS...');
  
  // This would typically use critical or similar tools
  // For now, we'll just log what we would do
  console.log('✅ Critical CSS generation completed (placeholder)');
}

// Function to optimize bundle
function optimizeBundle() {
  console.log('📦 Bundle already optimized by Vite build process...');
  console.log('✅ Bundle optimization completed');
}

// Function to generate service worker
function generateServiceWorker() {
  console.log('⚙️ Generating service worker...');
  
  const swContent = `// Auto-generated service worker
const CACHE_NAME = 'zion-tech-group-v${Date.now()}';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
`;

  fs.writeFileSync(path.join(__dirname, '../public/sw.js'), swContent);
  console.log('✅ Service worker generated');
}

// Function to generate robots.txt
function generateRobotsTxt() {
  console.log('🤖 Generating robots.txt...');
  
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
`;

  fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsContent);
  console.log('✅ robots.txt generated');
}

// Function to generate .htaccess
function generateHtaccess() {
  console.log('⚡ Generating .htaccess...');
  
  const htaccessContent = `# Zion Tech Group - Performance Optimizations

# Enable GZIP compression
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
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>

# Redirect to HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# SPA routing
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
`;

  fs.writeFileSync(path.join(__dirname, '../dist/.htaccess'), htaccessContent);
  console.log('✅ .htaccess generated');
}

// Main optimization function
async function optimize() {
  try {
    optimizeImages();
    generateCriticalCSS();
    optimizeBundle();
    generateServiceWorker();
    generateRobotsTxt();
    generateHtaccess();
    
    console.log('🎉 Performance optimization completed successfully!');
  } catch (error) {
    console.error('❌ Performance optimization failed:', error.message);
    process.exit(1);
  }
}

// Run optimization
optimize();