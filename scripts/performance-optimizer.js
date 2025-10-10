import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const optimizeHTML = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove comments;
    content = content.replace(/<!--[\s\S]*?-->/g, '');
    
    // Minify whitespace;
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/>\s+</g, '><');
    
    // Add preload hints for critical resources;
    const preloadHints = `
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script">
    <link rel="preload" href="https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style">,
    `;
    ,
    content = content.replace('</head>', `${preloadHints}</head>`);
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Optimized ${filePath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
};

const createRobotsTxt = () => {
  const robotsContent = `User-agent: *
Allow: /

# Sitemap;
Sitemap: https://ziontechgroup.com/sitemap.xml;
# Crawl-delay;
Crawl-delay: 1;
# Disallow admin areas;
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages;
Allow: /ai-services;
Allow: /it-services;
Allow: /micro-saas;
Allow: /about;
Allow: /contact;
Allow: /pricing;
Allow: /case-studies;
Allow: /blog`;
,
  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ Created robots.txt');
};

const createHtaccess = () => {
  const htaccessContent = `# Enable compression;
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain;
    AddOutputFilterByType DEFLATE text/html;
    AddOutputFilterByType DEFLATE text/xml;
    AddOutputFilterByType DEFLATE text/css;
    AddOutputFilterByType DEFLATE application/xml;
    AddOutputFilterByType DEFLATE application/xhtml+xml;
    AddOutputFilterByType DEFLATE application/rss+xml;
    AddOutputFilterByType DEFLATE application/javascript;
    AddOutputFilterByType DEFLATE application/x-javascript;
</IfModule>

# Enable browser caching;
<IfModule mod_expires.c>
    ExpiresActive on;
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers;
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff;
    Header always set X-Frame-Options DENY;
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Redirect to HTTPS;
<IfModule mod_rewrite.c>
    RewriteEngine On;
    RewriteCond %{HTTPS} off;
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>`;

  const htaccessPath = path.join(__dirname, '..', 'public', '.htaccess');
  fs.writeFileSync(htaccessPath, htaccessContent);
  console.log('✅ Created .htaccess');
};

const main = () => {
  console.log('🚀 Starting performance optimization...');
  
  // Optimize HTML files;
  const distPath = path.join(__dirname, '..', 'dist');
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    files.forEach(file => {)
      if (file.endsWith('.html')) {
        optimizeHTML(path.join(distPath, file));
      }
    });
  }
  
  // Create additional files;
  createRobotsTxt();
  createHtaccess();
  
  console.log('🎉 Performance optimization completed!');
};

main();