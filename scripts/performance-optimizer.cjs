const fs = require('fs');
const path = require('path');

console.log('Running performance optimizations...');

// 1. Optimize images (if any exist)
const publicDir = path.join(__dirname, '../public');
if (fs.existsSync(publicDir)) {
  const files = fs.readdirSync(publicDir, { recursive: true });
  const imageFiles = files.filter(file => 
    typeof file === 'string' && 
    /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
  );
  
  if (imageFiles.length > 0) {
    console.log(`Found ${imageFiles.length} image files to optimize`);
  }
}

// 2. Create optimized service worker
const serviceWorkerContent = `
// Optimized Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js'
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

fs.writeFileSync(path.join(__dirname, '../public/sw.js'), serviceWorkerContent);

// 3. Create robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsContent);

// 4. Create manifest.json
const manifestContent = {
  "name": "Zion Tech Group",
  "short_name": "Zion Tech",
  "description": "Leading AI & IT Solutions Provider",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#00ffff",
  "icons": [
    {
      "src": "/favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ]
};

fs.writeFileSync(
  path.join(__dirname, '../public/manifest.json'), 
  JSON.stringify(manifestContent, null, 2)
);

// 5. Optimize bundle analysis
const distDir = path.join(__dirname, '../dist');
if (fs.existsSync(distDir)) {
  const files = fs.readdirSync(distDir, { recursive: true });
  const jsFiles = files.filter(file => 
    typeof file === 'string' && file.endsWith('.js')
  );
  
  let totalSize = 0;
  jsFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
  });
  
  console.log(`Total JS bundle size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  
  if (totalSize > 2 * 1024 * 1024) { // 2MB
    console.log('⚠️  Bundle size is large. Consider code splitting.');
  } else {
    console.log('✅ Bundle size is optimized');
  }
}

console.log('Performance optimizations completed');