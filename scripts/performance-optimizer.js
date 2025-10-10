import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Optimize index.html
const indexPath = path.join(__dirname, '../dist/index.html');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Add critical CSS inline
  const criticalCSS = `
    <style>
      /* Critical CSS for above-the-fold content */
      body{font-family:Inter,system-ui,-apple-system,sans-serif;margin:0;padding:0;background:#0f172a}
      .min-h-screen{min-height:100vh}
      .bg-gradient-to-br{background:linear-gradient(to bottom right,var(--tw-gradient-stops))}
      .from-slate-900{--tw-gradient-from:#0f172a;--tw-gradient-to:rgb(15 23 42 / 0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
      .via-purple-900{--tw-gradient-to:rgb(88 28 135 / 0);--tw-gradient-stops:var(--tw-gradient-from),#581c87,var(--tw-gradient-to)}
      .to-slate-900{--tw-gradient-to:#0f172a}
      .text-white{color:#fff}
      .text-5xl{font-size:3rem;line-height:1}
      .font-bold{font-weight:700}
      .mb-6{margin-bottom:1.5rem}
      .bg-gradient-to-r{background:linear-gradient(to right,var(--tw-gradient-stops))}
      .from-cyan-400{--tw-gradient-from:#22d3ee;--tw-gradient-to:rgb(34 211 238 / 0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
      .to-purple-600{--tw-gradient-to:#9333ea}
      .text-transparent{color:transparent}
      .bg-clip-text{-webkit-background-clip:text;background-clip:text}
      .py-4{padding-top:1rem;padding-bottom:1rem}
      .px-8{padding-left:2rem;padding-right:2rem}
      .rounded-xl{border-radius:0.75rem}
      .hover\\:scale-105:hover{transform:scale(1.05)}
      .transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
      .duration-300{transition-duration:300ms}
      .transform{transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}
      .flex{display:flex}
      .items-center{align-items:center}
      .justify-center{justify-content:center}
      .text-center{text-align:center}
      .max-w-7xl{max-width:80rem}
      .mx-auto{margin-left:auto;margin-right:auto}
      .px-4{padding-left:1rem;padding-right:1rem}
      .sm\\:px-6{@media (min-width:640px){padding-left:1.5rem;padding-right:1.5rem}}
      .lg\\:px-8{@media (min-width:1024px){padding-left:2rem;padding-right:2rem}}
      .relative{position:relative}
      .z-10{z-index:10}
      .overflow-hidden{overflow:hidden}
      .py-20{padding-top:5rem;padding-bottom:5rem}
      .py-24{padding-top:6rem;padding-bottom:6rem}
      .grid{display:grid}
      .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
      .md\\:grid-cols-2{@media (min-width:768px){grid-template-columns:repeat(2,minmax(0,1fr))}}
      .lg\\:grid-cols-3{@media (min-width:1024px){grid-template-columns:repeat(3,minmax(0,1fr))}}
      .xl\\:grid-cols-4{@media (min-width:1280px){grid-template-columns:repeat(4,minmax(0,1fr))}}
      .gap-8{gap:2rem}
      .gap-6{gap:1.5rem}
      .mb-12{margin-bottom:3rem}
      .mb-20{margin-bottom:5rem}
      .text-3xl{font-size:1.875rem;line-height:2.25rem}
      .text-xl{font-size:1.25rem;line-height:1.75rem}
      .text-gray-300{color:#d1d5db}
      .max-w-4xl{max-width:56rem}
      .leading-relaxed{line-height:1.625}
      .bg-slate-800\\/50{background-color:rgb(30 41 59 / 0.5)}
      .backdrop-blur-sm{backdrop-filter:blur(4px)}
      .border{border-width:1px}
      .border-cyan-400\\/20{border-color:rgb(34 211 238 / 0.2)}
      .hover\\:border-cyan-400\\/40:hover{border-color:rgb(34 211 238 / 0.4)}
      .p-6{padding:1.5rem}
      .rounded-xl{border-radius:0.75rem}
      .transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
      .duration-300{transition-duration:300ms}
      .group:hover .group-hover\\:scale-110{transform:scale(1.1)}
      .group:hover .group-hover\\:text-cyan-400{color:#22d3ee}
      .w-12{width:3rem}
      .h-12{height:3rem}
      .mb-4{margin-bottom:1rem}
      .text-lg{font-size:1.125rem;line-height:1.75rem}
      .text-sm{font-size:0.875rem;line-height:1.25rem}
      .space-y-2 > :not([hidden]) ~ :not([hidden]){margin-top:0.5rem}
      .flex{display:flex}
      .items-center{align-items:center}
      .text-cyan-400{color:#22d3ee}
      .mr-2{margin-right:0.5rem}
      .flex-shrink-0{flex-shrink:0}
      .w-4{width:1rem}
      .h-4{height:1rem}
      .text-2xl{font-size:1.5rem;line-height:2rem}
      .font-bold{font-weight:700}
      .mb-2{margin-bottom:0.5rem}
      .font-medium{font-weight:500}
      .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
      .hover\\:text-cyan-300:hover{color:#67e8f9}
      .cursor-pointer{cursor:pointer}
      .text-center{text-align:center}
      .mt-8{margin-top:2rem}
      .inline-flex{display:inline-flex}
      .items-center{align-items:center}
      .w-5{width:1.25rem}
      .h-5{height:1.25rem}
      .ml-2{margin-left:0.5rem}
      .hover\\:from-cyan-600:hover{--tw-gradient-from:#0891b2;--tw-gradient-to:rgb(8 145 178 / 0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
      .hover\\:to-purple-700:hover{--tw-gradient-to:#7c3aed}
      .hover\\:scale-105:hover{transform:scale(1.05)}
      .hover\\:shadow-lg:hover{box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1),0 4px 6px -4px rgb(0 0 0 / 0.1)}
      .hover\\:shadow-cyan-500\\/25:hover{box-shadow:0 10px 15px -3px rgb(6 182 212 / 0.25),0 4px 6px -4px rgb(6 182 212 / 0.25)}
    </style>
  `;
  
  // Insert critical CSS before closing head tag
  indexContent = indexContent.replace('</head>', `${criticalCSS}</head>`);
  
  // Add preload hints for critical resources
  const preloadHints = `
    <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/images/hero-bg.webp" as="image" type="image/webp">
    <link rel="preload" href="/images/logo.svg" as="image" type="image/svg+xml">
  `;
  
  indexContent = indexContent.replace('</head>', `${preloadHints}</head>`);
  
  // Add resource hints
  const resourceHints = `
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  `;
  
  indexContent = indexContent.replace('</head>', `${resourceHints}</head>`);
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Optimized index.html');
}

// Create robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /pricing
Allow: /case-studies
Allow: /blog
Allow: /ai-services
Allow: /it-services
Allow: /micro-saas
`;

fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robotsContent);
console.log('✅ Created robots.txt');

// Create .htaccess for Apache servers
const htaccessContent = `# Zion Tech Group - Performance Optimizations

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
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/ttf "access plus 1 year"
    ExpiresByType font/otf "access plus 1 year"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
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

# Remove server signature
ServerTokens Prod
ServerSignature Off
`;

fs.writeFileSync(path.join(__dirname, '../dist/.htaccess'), htaccessContent);
console.log('✅ Created .htaccess');

console.log('🎉 Performance optimization completed!');