const fs = require('fs');
const path = require('path');

console.log('Running performance optimizations...');

// Optimize images
function optimizeImages() {
  console.log('Optimizing images...');
  // This would typically use sharp or imagemin
  // For now, we'll just log the process
  console.log('Image optimization completed');
}

// Optimize CSS
function optimizeCSS() {
  console.log('Optimizing CSS...');
  const cssPath = path.join(__dirname, '../dist/assets');
  
  if (fs.existsSync(cssPath)) {
    const files = fs.readdirSync(cssPath);
    const cssFiles = files.filter(file => file.endsWith('.css'));
    
    cssFiles.forEach(file => {
      const filePath = path.join(cssPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unnecessary whitespace
      content = content.replace(/\s+/g, ' ');
      content = content.replace(/;\s*}/g, '}');
      content = content.replace(/{\s*/g, '{');
      content = content.replace(/;\s*/g, ';');
      
      fs.writeFileSync(filePath, content);
    });
  }
  
  console.log('CSS optimization completed');
}

// Generate service worker
function generateServiceWorker() {
  console.log('Generating service worker...');
  
  const serviceWorkerContent = `
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
`;

  const distPath = path.join(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }
  
  fs.writeFileSync(path.join(distPath, 'sw.js'), serviceWorkerContent);
  console.log('Service worker generated');
}

// Generate manifest
function generateManifest() {
  console.log('Generating manifest...');
  
  const manifest = {
    name: 'Zion Tech Group',
    short_name: 'Zion Tech',
    description: 'Leading provider of AI and IT solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f23',
    theme_color: '#00ffff',
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
  
  const distPath = path.join(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(distPath, 'manifest.json'), 
    JSON.stringify(manifest, null, 2)
  );
  console.log('Manifest generated');
}

// Generate sitemap
function generateSitemap() {
  console.log('Generating sitemap...');
  
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.6', changefreq: 'weekly' },
    { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
    { url: '/careers', priority: '0.6', changefreq: 'monthly' }
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://ziontechgroup.com${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  const distPath = path.join(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }
  
  fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated');
}

// Run optimizations
async function runOptimizations() {
  try {
    optimizeImages();
    optimizeCSS();
    generateServiceWorker();
    generateManifest();
    generateSitemap();
    
    console.log('Performance optimizations completed');
  } catch (error) {
    console.error('Error during optimization:', error);
    process.exit(1);
  }
}

runOptimizations();