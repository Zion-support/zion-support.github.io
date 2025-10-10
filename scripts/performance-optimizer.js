import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Optimize index.html
const optimizeIndexHtml = () => {
  const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
  
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // Add preload hints for critical resources
    const preloadHints = `
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style">
    `;
    
    // Add preconnect hints
    const preconnectHints = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://www.google-analytics.com">
    <link rel="preconnect" href="https://www.googletagmanager.com">
    `;
    
    // Insert hints before closing head tag
    content = content.replace('</head>', `${preloadHints}${preconnectHints}</head>`);
    
    // Add critical CSS inline
    const criticalCSS = `
    <style>
      /* Critical CSS for above-the-fold content */
      body{font-family:Inter,sans-serif;margin:0;padding:0;background:#0f172a}
      .min-h-screen{min-height:100vh}
      .bg-gradient-to-br{background:linear-gradient(to bottom right,#0f172a,#1e293b,#0f172a)}
      .text-white{color:#fff}
      .text-cyan-400{color:#22d3ee}
      .font-bold{font-weight:700}
      .text-5xl{font-size:3rem;line-height:1}
      .text-7xl{font-size:4.5rem;line-height:1}
      .flex{display:flex}
      .items-center{align-items:center}
      .justify-center{justify-content:center}
      .text-center{text-align:center}
      .px-4{padding-left:1rem;padding-right:1rem}
      .py-8{padding-top:2rem;padding-bottom:2rem}
      .mb-6{margin-bottom:1.5rem}
      .mb-8{margin-bottom:2rem}
      .max-w-7xl{max-width:80rem}
      .mx-auto{margin-left:auto;margin-right:auto}
      .relative{position:relative}
      .absolute{position:absolute}
      .inset-0{top:0;right:0;bottom:0;left:0}
      .z-10{z-index:10}
      .bg-gradient-to-r{background:linear-gradient(to right,var(--tw-gradient-stops))}
      .from-cyan-400{--tw-gradient-from:#22d3ee;--tw-gradient-to:rgba(34,211,238,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
      .to-purple-600{--tw-gradient-to:#9333ea}
      .bg-clip-text{-webkit-background-clip:text;background-clip:text}
      .text-transparent{color:transparent}
      .animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
    </style>
    `;
    
    content = content.replace('</head>', `${criticalCSS}</head>`);
    
    fs.writeFileSync(indexPath, content);
    console.log('✅ Optimized index.html');
  }
};

// Create robots.txt
const createRobotsTxt = () => {
  const robotsPath = path.join(__dirname, '..', 'dist', 'robots.txt');
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

Crawl-delay: 1`;

  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ Created robots.txt');
};

// Create .htaccess for Apache servers
const createHtaccess = () => {
  const htaccessPath = path.join(__dirname, '..', 'dist', '.htaccess');
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
    ExpiresByType application/font-woff "access plus 1 year"
    ExpiresByType application/font-woff2 "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
</IfModule>

# SPA routing
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>`;

  fs.writeFileSync(htaccessPath, htaccessContent);
  console.log('✅ Created .htaccess');
};

// Run optimizations
try {
  optimizeIndexHtml();
  createRobotsTxt();
  createHtaccess();
  console.log('🎉 Performance optimization completed!');
} catch (error) {
  console.error('❌ Error during optimization:', error);
  process.exit(1);
}