const fs = require('fs');
const path = require('path');

console.log('Starting enhanced performance optimization...');

// Create critical CSS for above-the-fold content
const criticalCSS = `
/* Critical CSS for above-the-fold content */
.min-h-screen { min-height: 100vh; }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.from-slate-900 { --tw-gradient-from: #0f172a; --tw-gradient-to: rgb(15 23 42 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.via-purple-900 { --tw-gradient-to: rgb(88 28 135 / 0); --tw-gradient-stops: var(--tw-gradient-from), rgb(88 28 135), var(--tw-gradient-to); }
.to-slate-900 { --tw-gradient-to: #0f172a; }
.text-white { color: rgb(255 255 255); }
.text-gray-300 { color: rgb(209 213 219); }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.font-bold { font-weight: 700; }
.text-center { text-align: center; }
.pt-20 { padding-top: 5rem; }
.pb-16 { padding-bottom: 4rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.relative { position: relative; }
.overflow-hidden { overflow: hidden; }
.max-w-7xl { max-width: 80rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.leading-tight { line-height: 1.25; }
.mb-6 { margin-bottom: 1.5rem; }
.text-transparent { color: transparent; }
.bg-clip-text { background-clip: text; }
.bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
.from-cyan-400 { --tw-gradient-from: #22d3ee; --tw-gradient-to: rgb(34 211 238 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.via-purple-400 { --tw-gradient-to: rgb(168 85 247 / 0); --tw-gradient-stops: var(--tw-gradient-from), rgb(168 85 247), var(--tw-gradient-to); }
.to-pink-400 { --tw-gradient-to: #f472b6; }
`;

// Write critical CSS to dist folder
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'critical.css'), criticalCSS);

// Create service worker for caching
const serviceWorker = `
// Service Worker for Zion Tech Group
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json',
  '/favicon.ico'
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

fs.writeFileSync(path.join(distDir, 'sw.js'), serviceWorker);

// Create robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);

// Create manifest.json
const manifest = {
  "name": "Zion Tech Group - Advanced AI and IT Solutions",
  "short_name": "Zion Tech Group",
  "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#00ffff",
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
};

fs.writeFileSync(path.join(distDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

console.log('✓ Critical CSS generated');
console.log('✓ Service worker created');
console.log('✓ Robots.txt created');
console.log('✓ Manifest.json created');
console.log('Enhanced performance optimization completed!');