const fs = require('fs');
const path = require('path');

function optimizePerformance() {
  console.log('🚀 Starting performance optimizations...\n');

  const distPath = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist folder not found. Run npm run build first.');
    return;
  }

  // 1. Create robots.txt
  createRobotsTxt();
  
  // 2. Create .htaccess for caching
  createHtaccess();
  
  // 3. Optimize images (if any)
  optimizeImages();
  
  // 4. Create sitemap
  createSitemap();
  
  // 5. Generate critical CSS
  generateCriticalCSS();
  
  console.log('✅ Performance optimizations completed!');
}

function createRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Block access to admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /ai-services/
Allow: /it-solutions/
Allow: /micro-saas-solutions/
Allow: /contact/
Allow: /about/
Allow: /pricing/
`;

  fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robotsContent);
  console.log('✅ Created robots.txt');
}

function createHtaccess() {
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
    ExpiresActive On
    
    # Images
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
    ExpiresByType image/webp "access plus 1 month"
    
    # CSS and JavaScript
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
    
    # Fonts
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType application/font-woff "access plus 1 year"
    ExpiresByType application/font-woff2 "access plus 1 year"
    
    # HTML
    ExpiresByType text/html "access plus 1 hour"
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

# Handle SPA routing
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
  console.log('✅ Created .htaccess with caching and security headers');
}

function optimizeImages() {
  const distPath = path.join(__dirname, '../dist');
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (imageExtensions.includes(ext)) {
          console.log(`📸 Found image: ${fullPath.replace(distPath, '')}`);
          // Here you could add image optimization logic
          // For now, we'll just log the files
        }
      }
    });
  }
  
  scanDirectory(distPath);
  console.log('✅ Image optimization check completed');
}

function createSitemap() {
  const pages = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/pricing',
    '/case-studies',
    '/blog',
    '/team',
    '/careers',
    '/privacy',
    '/terms',
    '/cookies',
    '/ai-services',
    '/ai-solutions',
    '/it-services',
    '/it-solutions',
    '/cloud-infrastructure',
    '/digital-transformation',
    '/5g-solutions',
    '/micro-saas-solutions',
    '/data-analytics',
    '/cybersecurity',
    '/cloud-solutions',
    '/help',
    '/accessibility',
    '/api-docs',
    '/partnerships',
    '/tutorials',
    '/docs',
    '/support',
    '/demo'
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://ziontechgroup.com${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemapContent);
  console.log('✅ Created sitemap.xml');
}

function generateCriticalCSS() {
  const criticalCSS = `/* Critical CSS for above-the-fold content */
body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
.loading { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
.spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #3b82f6; border-radius: 50%; animation: spin 1s linear infinite; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.bg-slate-900 { background-color: #0f172a; }
.text-white { color: #ffffff; }
.min-h-screen { min-height: 100vh; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
`;

  fs.writeFileSync(path.join(__dirname, '../dist/critical.css'), criticalCSS);
  console.log('✅ Generated critical CSS');
}

optimizePerformance();