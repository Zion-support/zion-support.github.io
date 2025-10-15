const fs = require('fs');
const path = require('path');

// Performance optimization script
const optimizePerformance = () => {
  console.log('🚀 Starting performance optimizations...');
  
  // 1. Create service worker for caching
  const serviceWorkerContent = `// Service Worker for caching
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
});`;

  fs.writeFileSync('public/sw.js', serviceWorkerContent);
  console.log('✅ Service worker created');

  // 2. Create manifest.json for PWA
  const manifestContent = {
    "name": "Zion Tech Group",
    "short_name": "Zion Tech",
    "description": "Advanced AI and IT Solutions",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#1e293b",
    "theme_color": "#8b5cf6",
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

  fs.writeFileSync('public/manifest.json', JSON.stringify(manifestContent, null, 2));
  console.log('✅ PWA manifest created');

  // 3. Create robots.txt
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;

  fs.writeFileSync('public/robots.txt', robotsContent);
  console.log('✅ Robots.txt created');

  // 4. Create sitemap.xml
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>2024-10-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>2024-10-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>2024-10-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>2024-10-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemapContent);
  console.log('✅ Sitemap created');

  // 5. Create performance monitoring component
  const performanceMonitorContent = `import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Monitor performance metrics
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      });
    }
  }, []);

  return null;
};

export default PerformanceMonitor;`;

  fs.writeFileSync('app/components/PerformanceMonitor.tsx', performanceMonitorContent);
  console.log('✅ Performance monitor created');

  // 6. Create optimized image component
  const optimizedImageContent = `import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  return (
    <div className={\`relative overflow-hidden \${className}\`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Image failed to load</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={\`transition-opacity duration-300 \${loaded ? 'opacity-100' : 'opacity-0'}\`}
      />
    </div>
  );
};

export default OptimizedImage;`;

  fs.writeFileSync('app/components/OptimizedImage.tsx', optimizedImageContent);
  console.log('✅ Optimized image component created');

  console.log('🎉 Performance optimizations completed!');
};

optimizePerformance();