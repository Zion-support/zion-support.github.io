const fs = require('fs');
const path = require('path');

// Enhanced performance optimizer
const optimizePerformance = () => {
  console.log('Running performance optimizations...');
  
  // Create public directory if it doesn't exist
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Create robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /*.json$
Disallow: /*.xml$

# Allow important pages
Allow: /services/
Allow: /ai-services/
Allow: /it-services/
Allow: /about/
Allow: /contact/
Allow: /team/
Allow: /careers/`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('Created robots.txt');

  // Create .htaccess for better caching and security
  const htaccess = `# Enable compression
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
    AddOutputFilterByType DEFLATE application/json
    AddOutputFilterByType DEFLATE image/svg+xml
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
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType application/font-woff "access plus 1 year"
    ExpiresByType application/font-woff2 "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Enable browser caching
<IfModule mod_headers.c>
    <FilesMatch "\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$">
        Header set Cache-Control "max-age=31536000, public, immutable"
    </FilesMatch>
    <FilesMatch "\.(html|htm)$">
        Header set Cache-Control "max-age=3600, public"
    </FilesMatch>
</IfModule>

# Redirect to HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Remove trailing slashes
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{THE_REQUEST} /+[^?\s]*?/[\s?] [NC]
    RewriteRule ^(.*)/$ /$1 [R=301,L]
</IfModule>`;

  fs.writeFileSync(path.join(publicDir, '.htaccess'), htaccess);
  console.log('Created .htaccess for caching and security');

  // Create security.txt
  const securityTxt = `Contact: mailto:security@ziontechgroup.com
Contact: https://ziontechgroup.com/contact
Expires: 2025-12-31T23:59:59.000Z
Encryption: https://ziontechgroup.com/pgp-key.txt
Acknowledgments: https://ziontechgroup.com/security-acknowledgments
Preferred-Languages: en
Canonical: https://ziontechgroup.com/.well-known/security.txt`;

  const wellKnownDir = path.join(publicDir, '.well-known');
  if (!fs.existsSync(wellKnownDir)) {
    fs.mkdirSync(wellKnownDir, { recursive: true });
  }
  fs.writeFileSync(path.join(wellKnownDir, 'security.txt'), securityTxt);
  console.log('Created security.txt');

  // Create humans.txt
  const humansTxt = `/* TEAM */
Developer: Zion Tech Group
Contact: kleber@ziontechgroup.com
From: Innovation City, IC, US

/* THANKS */
Thanks to all contributors and the open source community

/* SITE */
Last update: ${new Date().toISOString()}
Language: English
Doctype: HTML5
IDE: Cursor AI`;

  fs.writeFileSync(path.join(publicDir, 'humans.txt'), humansTxt);
  console.log('Created humans.txt');

  console.log('Performance optimizations completed');
};

optimizePerformance();