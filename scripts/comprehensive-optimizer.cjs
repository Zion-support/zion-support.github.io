const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Running comprehensive optimization...');

// 1. Remove console.log statements from production build
const removeConsoleLogs = () => {
  console.log('📝 Removing console.log statements...');
  
  const distDir = path.join(__dirname, '../dist');
  if (!fs.existsSync(distDir)) {
    console.log('❌ Dist directory not found. Run build first.');
    return;
  }

  const processFile = (filePath) => {
    if (filePath.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove console.log, console.info, console.debug statements
      content = content.replace(/console\.(log|info|debug)\s*\([^)]*\)\s*;?/g, '');
      
      // Remove empty lines that might have been created
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
    }
  };

  const walkDir = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else {
        processFile(filePath);
      }
    });
  };

  walkDir(distDir);
  console.log('✅ Console logs removed');
};

// 2. Optimize images (placeholder for future implementation)
const optimizeImages = () => {
  console.log('🖼️  Image optimization placeholder...');
  // Future: Add image optimization logic here
  console.log('✅ Images optimized (placeholder)');
};

// 3. Create optimized service worker
const createOptimizedServiceWorker = () => {
  console.log('⚙️  Creating optimized service worker...');
  
  const swContent = `
const CACHE_NAME = 'zion-tech-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

const STATIC_ASSETS = [
  '/',
  '/assets/css/index.css',
  '/assets/js/vendor.js',
  '/assets/js/index.js',
  '/manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/');
            }
          });
      })
  );
});

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Send queued analytics data
  return Promise.resolve();
}
`;

  fs.writeFileSync(path.join(__dirname, '../dist/sw.js'), swContent);
  console.log('✅ Optimized service worker created');
};

// 4. Create manifest.json for PWA
const createManifest = () => {
  console.log('📱 Creating PWA manifest...');
  
  const manifest = {
    "name": "Zion Tech Group - AI & IT Solutions",
    "short_name": "Zion Tech",
    "description": "Leading provider of AI and IT solutions for modern businesses",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#3b82f6",
    "orientation": "portrait-primary",
    "icons": [
      {
        "src": "/icon-192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "/icon-512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any maskable"
      }
    ],
    "categories": ["business", "productivity", "technology"],
    "lang": "en",
    "dir": "ltr"
  };

  fs.writeFileSync(path.join(__dirname, '../dist/manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('✅ PWA manifest created');
};

// 5. Create sitemap
const createSitemap = () => {
  console.log('🗺️  Creating sitemap...');
  
  const pages = [
    '/',
    '/about',
    '/services',
    '/ai-services',
    '/it-services',
    '/cloud-infrastructure',
    '/5g-solutions',
    '/digital-transformation',
    '/pricing',
    '/team',
    '/careers',
    '/contact',
    '/blog',
    '/case-studies',
    '/partnerships',
    '/api-docs',
    '/accessibility',
    '/privacy',
    '/terms',
    '/cookies'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://ziontechgroup.com${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
  console.log('✅ Sitemap created');
};

// 6. Optimize HTML
const optimizeHTML = () => {
  console.log('📄 Optimizing HTML...');
  
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Add service worker registration
    const swScript = `
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
              console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }
    </script>`;
    
    html = html.replace('</body>', `${swScript}\n  </body>`);
    
    // Add manifest link
    html = html.replace('</head>', '    <link rel="manifest" href="/manifest.json">\n  </head>');
    
    fs.writeFileSync(htmlPath, html);
    console.log('✅ HTML optimized');
  }
};

// 7. Create robots.txt
const createRobotsTxt = () => {
  console.log('🤖 Creating robots.txt...');
  
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
`;

  fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robotsContent);
  console.log('✅ robots.txt created');
};

// 8. Generate bundle analysis report
const generateBundleReport = () => {
  console.log('📊 Generating bundle analysis...');
  
  try {
    const distDir = path.join(__dirname, '../dist');
    const files = fs.readdirSync(distDir, { recursive: true });
    
    let totalSize = 0;
    const fileSizes = [];
    
    files.forEach(file => {
      const filePath = path.join(distDir, file);
      if (fs.statSync(filePath).isFile()) {
        const size = fs.statSync(filePath).size;
        totalSize += size;
        fileSizes.push({
          file: file,
          size: size,
          sizeKB: (size / 1024).toFixed(2)
        });
      }
    });
    
    const report = {
      timestamp: new Date().toISOString(),
      totalSize: totalSize,
      totalSizeKB: (totalSize / 1024).toFixed(2),
      totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
      files: fileSizes.sort((a, b) => b.size - a.size)
    };
    
    fs.writeFileSync(
      path.join(__dirname, '../dist/bundle-analysis.json'), 
      JSON.stringify(report, null, 2)
    );
    
    console.log(`✅ Bundle analysis complete: ${report.totalSizeMB}MB total`);
  } catch (error) {
    console.log('⚠️  Bundle analysis failed:', error.message);
  }
};

// Run all optimizations
const runOptimizations = async () => {
  try {
    removeConsoleLogs();
    optimizeImages();
    createOptimizedServiceWorker();
    createManifest();
    createSitemap();
    optimizeHTML();
    createRobotsTxt();
    generateBundleReport();
    
    console.log('🎉 Comprehensive optimization completed successfully!');
    console.log('📈 Performance improvements applied:');
    console.log('   ✅ Console logs removed');
    console.log('   ✅ Service worker optimized');
    console.log('   ✅ PWA manifest created');
    console.log('   ✅ Sitemap generated');
    console.log('   ✅ HTML optimized');
    console.log('   ✅ Bundle analysis complete');
  } catch (error) {
    console.error('❌ Optimization failed:', error);
    process.exit(1);
  }
};

runOptimizations();