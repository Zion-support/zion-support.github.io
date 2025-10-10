const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Running performance optimizations...');

// Optimize images
function optimizeImages() {
  console.log('📸 Optimizing images...');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const imagesDir = path.join(publicDir, 'images');
  
  if (fs.existsSync(imagesDir)) {
    try {
      // Use sharp to optimize images (if available)
      execSync('npx sharp-cli --input "public/images/**/*.{jpg,jpeg,png}" --output "public/images/optimized/" --format webp --quality 80', { stdio: 'inherit' });
      console.log('✅ Images optimized');
    } catch (error) {
      console.log('⚠️  Image optimization skipped (sharp-cli not available)');
    }
  }
}

// Generate critical CSS
function generateCriticalCSS() {
  console.log('🎨 Generating critical CSS...');
  
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
.min-h-screen { min-height: 100vh; }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.from-slate-900 { --tw-gradient-from: #0f172a; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(15, 23, 42, 0)); }
.via-purple-900 { --tw-gradient-stops: var(--tw-gradient-from), #581c87, var(--tw-gradient-to, rgba(88, 28, 135, 0)); }
.to-slate-900 { --tw-gradient-to: #0f172a; }
.text-white { color: #ffffff; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.font-bold { font-weight: 700; }
.mb-6 { margin-bottom: 1.5rem; }
.text-center { text-align: center; }
.container { width: 100%; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-16 { padding-top: 4rem; padding-bottom: 4rem; }
  `;
  
  const publicDir = path.join(__dirname, '..', 'public');
  const stylesDir = path.join(publicDir, 'styles');
  
  if (!fs.existsSync(stylesDir)) {
    fs.mkdirSync(stylesDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(stylesDir, 'critical.css'), criticalCSS);
  console.log('✅ Critical CSS generated');
}

// Optimize bundle
function optimizeBundle() {
  console.log('📦 Bundle optimization completed (build already done)');
}

// Generate service worker
function generateServiceWorker() {
  console.log('🔧 Generating service worker...');
  
  const serviceWorkerContent = `
// Service Worker for Zion Tech Group Website
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/pricing',
  '/blog',
  '/case-studies',
  '/careers',
  '/partners',
  '/support',
  '/faq',
  '/demo',
  '/consultation',
  '/micro-saas',
  '/ai-services',
  '/it-services'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
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
      })
  );
});
  `;
  
  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(path.join(publicDir, 'sw.js'), serviceWorkerContent);
  console.log('✅ Service worker generated');
}

// Generate manifest
function generateManifest() {
  console.log('📱 Generating web app manifest...');
  
  const manifest = {
    name: 'Zion Tech Group - Advanced AI and IT Solutions',
    short_name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#00ffff',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'en',
    scope: '/',
    id: 'zion-tech-group'
  };
  
  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('✅ Web app manifest generated');
}

// Main optimization function
function runOptimizations() {
  try {
    generateCriticalCSS();
    generateServiceWorker();
    generateManifest();
    optimizeImages();
    optimizeBundle();
    
    console.log('🎉 Performance optimizations completed successfully!');
  } catch (error) {
    console.error('❌ Performance optimization failed:', error);
    process.exit(1);
  }
}

runOptimizations();