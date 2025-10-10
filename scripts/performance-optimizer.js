import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Optimize index.html
const indexPath = path.join(__dirname, '../dist/index.html');
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Add preload hints for critical resources
  const preloadHints = `
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/vendor.js" as="script">
    <link rel="preload" href="/assets/index.js" as="script">
  `;
  
  content = content.replace('<head>', `<head>${preloadHints}`);
  
  // Add resource hints
  const resourceHints = `
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  `;
  
  content = content.replace('</head>', `${resourceHints}</head>`);
  
  fs.writeFileSync(indexPath, content);
  console.log('✅ Optimized index.html');
}

// Create robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robotsContent);
console.log('✅ Created robots.txt');

// Create .htaccess for better caching
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
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>
`;

fs.writeFileSync(path.join(__dirname, '../dist/.htaccess'), htaccessContent);
console.log('✅ Created .htaccess');

console.log('🎉 Performance optimization completed!');