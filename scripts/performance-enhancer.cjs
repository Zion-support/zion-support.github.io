#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Running comprehensive performance enhancements...');

// 1. Optimize CSS for critical path
const optimizeCSS = () => {
  console.log('📝 Optimizing CSS...');
  
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: #ffffff;
  background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
  min-height: 100vh;
}

/* Critical layout styles */
.min-h-screen { min-height: 100vh; }
.bg-gradient-to-br { background: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.from-slate-900 { --tw-gradient-from: #0f172a; --tw-gradient-to: rgba(15, 23, 42, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.via-purple-900 { --tw-gradient-to: rgba(88, 28, 135, 0); --tw-gradient-stops: var(--tw-gradient-from), #581c87, var(--tw-gradient-to); }
.to-slate-900 { --tw-gradient-to: #0f172a; }

/* Critical typography */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-6xl { font-size: 3.75rem; line-height: 1; }
.font-bold { font-weight: 700; }
.text-white { color: #ffffff; }
.text-gray-300 { color: #d1d5db; }

/* Critical spacing */
.py-20 { padding-top: 5rem; padding-bottom: 5rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }

/* Critical flexbox */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.gap-4 { gap: 1rem; }

/* Critical grid */
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }

/* Critical responsive */
@media (min-width: 640px) {
  .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .sm\\:flex-row { flex-direction: row; }
}

@media (min-width: 768px) {
  .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
  .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (min-width: 1024px) {
  .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
  .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

/* Critical container */
.max-w-7xl { max-width: 80rem; }
.max-w-4xl { max-width: 56rem; }
.max-w-3xl { max-width: 48rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Critical text alignment */
.text-center { text-align: center; }

/* Critical button styles */
button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

/* Critical gradient text */
.text-transparent { color: transparent; }
.bg-clip-text { background-clip: text; }
.bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
.from-cyan-400 { --tw-gradient-from: #22d3ee; --tw-gradient-to: rgba(34, 211, 238, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-purple-400 { --tw-gradient-to: #c084fc; }
`;

  fs.writeFileSync('dist/critical.css', criticalCSS);
  console.log('✅ Critical CSS generated');
};

// 2. Generate optimized service worker
const generateServiceWorker = () => {
  console.log('🔧 Generating service worker...');
  
  const serviceWorker = `
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
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

  fs.writeFileSync('dist/sw.js', serviceWorker);
  console.log('✅ Service worker generated');
};

// 3. Optimize images
const optimizeImages = () => {
  console.log('🖼️ Optimizing images...');
  
  // Create optimized image loading script
  const imageOptimizer = `
// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
`;

  fs.writeFileSync('dist/image-optimizer.js', imageOptimizer);
  console.log('✅ Image optimizer generated');
};

// 4. Generate performance monitoring
const generatePerformanceMonitor = () => {
  console.log('📊 Generating performance monitor...');
  
  const performanceMonitor = `
// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP:', entry.startTime);
    }
    if (entry.entryType === 'first-input') {
      console.log('FID:', entry.processingStart - entry.startTime);
    }
  });
});

performanceObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

// Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
`;

  fs.writeFileSync('dist/performance-monitor.js', performanceMonitor);
  console.log('✅ Performance monitor generated');
};

// 5. Generate optimized manifest
const generateManifest = () => {
  console.log('📱 Generating optimized manifest...');
  
  const manifest = {
    "name": "Zion Tech Group",
    "short_name": "Zion Tech",
    "description": "Advanced AI and IT Solutions",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#0f172a",
    "theme_color": "#581c87",
    "orientation": "portrait-primary",
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
    ],
    "categories": ["business", "productivity", "technology"],
    "lang": "en",
    "dir": "ltr"
  };

  fs.writeFileSync('dist/manifest.json', JSON.stringify(manifest, null, 2));
  console.log('✅ Optimized manifest generated');
};

// 6. Generate robots.txt
const generateRobotsTxt = () => {
  console.log('🤖 Generating robots.txt...');
  
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
`;

  fs.writeFileSync('dist/robots.txt', robotsTxt);
  console.log('✅ Robots.txt generated');
};

// 7. Generate security headers
const generateSecurityHeaders = () => {
  console.log('🔒 Generating security headers...');
  
  const securityHeaders = `
# Security Headers for Netlify/Vercel
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none';
`;

  fs.writeFileSync('dist/_headers', securityHeaders);
  console.log('✅ Security headers generated');
};

// Run all optimizations
const runOptimizations = () => {
  try {
    optimizeCSS();
    generateServiceWorker();
    optimizeImages();
    generatePerformanceMonitor();
    generateManifest();
    generateRobotsTxt();
    generateSecurityHeaders();
    
    console.log('🎉 All performance enhancements completed successfully!');
    console.log('📈 Performance improvements applied:');
    console.log('  ✅ Critical CSS optimization');
    console.log('  ✅ Service worker for caching');
    console.log('  ✅ Image lazy loading');
    console.log('  ✅ Performance monitoring');
    console.log('  ✅ PWA manifest optimization');
    console.log('  ✅ SEO robots.txt');
    console.log('  ✅ Security headers');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
};

runOptimizations();