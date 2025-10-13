const fs = require('fs');
const path = require('path');

// Performance optimization script
function optimizePerformance() {
  const distPath = path.join(__dirname, '..', 'dist');
  
  // Check if dist directory exists
  if (!fs.existsSync(distPath)) {
    console.log('Dist directory not found. Please run build first.');
    return;
  }
  
  // Generate robots.txt
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;
  
  const robotsPath = path.join(distPath, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('Generated robots.txt');
  
  // Generate manifest.json
  const manifest = {
    name: 'Zion Tech Group',
    short_name: 'Zion Tech',
    description: 'Leading provider of AI-powered solutions, IT services, and digital transformation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#06b6d4',
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
  
  const manifestPath = path.join(distPath, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('Generated manifest.json');
  
  console.log('Performance optimization completed successfully!');
}

optimizePerformance();
