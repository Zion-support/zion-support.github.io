const fs = require('fs');
const path = require('path');

const optimizePerformance = () => {
  console.log('Running performance optimizations...');
  
  // Create robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('robots.txt generated successfully!');

  // Create manifest.json
  const manifest = {
    name: 'Zion Tech Group',
    short_name: 'Zion Tech',
    description: 'Advanced AI and IT Solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#8b5cf6',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('Web manifest generated successfully!');

  console.log('Performance optimizations completed!');
};

optimizePerformance();
