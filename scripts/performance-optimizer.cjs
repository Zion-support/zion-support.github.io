const fs = require('fs');
const path = require('path');

// Performance optimization script
const optimizePerformance = () => {
  console.log('Running performance optimizations...');
  
  // Create robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;

  fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robotsTxt);
  console.log('robots.txt created');

  // Create manifest.json for PWA
  const manifest = {
    "name": "Zion Tech Group",
    "short_name": "Zion Tech",
    "description": "Advanced AI and IT Solutions",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#0f172a",
    "theme_color": "#06b6d4",
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

  fs.writeFileSync(path.join(__dirname, '../dist/manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('manifest.json created');

  console.log('Performance optimizations completed');
};

optimizePerformance();
