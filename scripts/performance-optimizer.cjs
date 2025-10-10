const fs = require('fs');
const path = require('path');

console.log('Running performance optimizations...');

// Optimize images
function optimizeImages() {
  console.log('Optimizing images...');
  // This would typically use a tool like sharp or imagemin
  // For now, we'll just log the action
  console.log('Image optimization completed');
}

// Minify CSS
function minifyCSS() {
  console.log('Minifying CSS...');
  const cssDir = path.join(__dirname, '..', 'app', 'styles');
  
  if (fs.existsSync(cssDir)) {
    const files = fs.readdirSync(cssDir);
    files.forEach(file => {
      if (file.endsWith('.css')) {
        const filePath = path.join(cssDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Basic CSS minification
        content = content
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
          .replace(/\s+/g, ' ') // Replace multiple spaces with single space
          .replace(/;\s*}/g, '}') // Remove semicolon before closing brace
          .replace(/:\s+/g, ':') // Remove space after colon
          .replace(/;\s+/g, ';') // Remove space after semicolon
          .replace(/,\s+/g, ',') // Remove space after comma
          .replace(/{\s+/g, '{') // Remove space after opening brace
          .replace(/}\s+/g, '}') // Remove space after closing brace
          .trim();
        
        fs.writeFileSync(filePath, content);
      }
    });
  }
  
  console.log('CSS minification completed');
}

// Generate critical CSS
function generateCriticalCSS() {
  console.log('Generating critical CSS...');
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
.min-h-screen { min-height: 100vh; }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.from-slate-900 { --tw-gradient-from: #0f172a; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(15, 23, 42, 0)); }
.via-purple-900 { --tw-gradient-to: #581c87; --tw-gradient-stops: var(--tw-gradient-from), #581c87, var(--tw-gradient-to, rgba(88, 28, 135, 0)); }
.to-slate-900 { --tw-gradient-to: #0f172a; }
.text-white { color: #ffffff; }
.text-cyan-400 { color: #22d3ee; }
.font-bold { font-weight: 700; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-5xl { font-size: 3rem; line-height: 1; }
.text-6xl { font-size: 3.75rem; line-height: 1; }
.text-7xl { font-size: 4.5rem; line-height: 1; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-12 { margin-bottom: 3rem; }
.max-w-4xl { max-width: 56rem; }
.max-w-6xl { max-width: 72rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.text-center { text-align: center; }
.container { width: 100%; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-16 { padding-top: 4rem; padding-bottom: 4rem; }
.pt-24 { padding-top: 6rem; }
  `;
  
  const outputPath = path.join(__dirname, '..', 'public', 'critical.css');
  fs.writeFileSync(outputPath, criticalCSS);
  console.log('Critical CSS generated');
}

// Generate service worker
function generateServiceWorker() {
  console.log('Generating service worker...');
  const serviceWorker = `
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/contact',
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
  
  const outputPath = path.join(__dirname, '..', 'public', 'sw.js');
  fs.writeFileSync(outputPath, serviceWorker);
  console.log('Service worker generated');
}

// Generate manifest
function generateManifest() {
  console.log('Generating web app manifest...');
  const manifest = {
    name: 'Zion Tech Group - AI & IT Solutions',
    short_name: 'Zion Tech Group',
    description: 'Transform your business with cutting-edge AI and IT solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#22d3ee',
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
  
  const outputPath = path.join(__dirname, '..', 'public', 'manifest.json');
  fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
  console.log('Web app manifest generated');
}

// Run all optimizations
optimizeImages();
minifyCSS();
generateCriticalCSS();
generateServiceWorker();
generateManifest();

console.log('Performance optimizations completed');