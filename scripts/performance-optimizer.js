import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance optimization script
function optimizePerformance() {
  console.log('🚀 Starting performance optimization...');
  
  // Check if dist directory exists
  const distPath = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist directory not found. Please run build first.');
    return;
  }

  // Optimize HTML files
  const htmlFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.html'));
  
  htmlFiles.forEach(file => {
    const filePath = path.join(distPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add preload hints for critical resources
    const preloadHints = `
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style">
    `;
    
    // Insert preload hints before closing head tag
    content = content.replace('</head>', `${preloadHints}</head>`);
    
    // Add resource hints
    const resourceHints = `
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    `;
    
    content = content.replace('</head>', `${resourceHints}</head>`);
    
    // Add performance monitoring script
    const perfScript = `
    <script>
      // Performance monitoring
      window.addEventListener('load', function() {
        if ('performance' in window) {
          const perfData = performance.getEntriesByType('navigation')[0];
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
          console.log('Page load time:', loadTime + 'ms');
          
          // Send to analytics if available
          if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
              name: 'load',
              value: Math.round(loadTime)
            });
          }
        }
      });
    </script>
    `;
    
    content = content.replace('</body>', `${perfScript}</body>`);
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Optimized ${file}`);
  });

  // Create robots.txt
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  fs.writeFileSync(path.join(distPath, 'robots.txt'), robotsContent);
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
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>
`;
  fs.writeFileSync(path.join(distPath, '.htaccess'), htaccessContent);
  console.log('✅ Created .htaccess');

  console.log('🎉 Performance optimization completed!');
}

// Run optimization
optimizePerformance();