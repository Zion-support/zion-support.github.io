#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting performance optimization...');

// Performance optimizations to implement
const optimizations = [
  {
    name: 'Add preload hints for critical resources',
    file: 'index.html',
    action: (content) => {
      const preloadHints = `
    <!-- Preload critical resources -->
    <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script">
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="dns-prefetch" href="//www.googletagmanager.com">`;
      
      return content.replace('</head>', `${preloadHints}\n  </head>`);
    }
  },
  {
    name: 'Optimize Vite config for better performance',
    file: 'vite.config.ts',
    action: (content) => {
      // Add more aggressive optimization settings
      const optimizedConfig = content.replace(
        'chunkSizeWarningLimit: 500,',
        `chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-ui';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            return 'vendor';
          }
          // Page chunks - group similar pages
          if (id.includes('/src/ai-') || id.includes('/src/machine-learning') || id.includes('/src/nlp') || id.includes('/src/computer-vision')) {
            return 'pages-ai';
          }
          if (id.includes('/src/it-') || id.includes('/src/cloud-') || id.includes('/src/cybersecurity') || id.includes('/src/devops')) {
            return 'pages-it';
          }
          if (id.includes('/src/blog/')) {
            return 'pages-blog';
          }
          if (id.includes('/src/')) {
            return 'pages-other';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },`
      );
      return optimizedConfig;
    }
  },
  {
    name: 'Add service worker for caching',
    file: 'public/sw.js',
    action: () => {
      const serviceWorkerContent = `// Service Worker for caching
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/assets/index.css',
  '/assets/index.js',
  '/assets/vendor.js'
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
      return serviceWorkerContent;
    }
  }
];

// Apply optimizations
optimizations.forEach(opt => {
  console.log(`📝 ${opt.name}...`);
  
  if (opt.file === 'public/sw.js') {
    // Create new file
    const filePath = path.join('public', 'sw.js');
    fs.writeFileSync(filePath, opt.action());
    console.log(`✅ Created ${filePath}`);
  } else {
    // Modify existing file
    const filePath = path.join(opt.file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const optimizedContent = opt.action(content);
      fs.writeFileSync(filePath, optimizedContent);
      console.log(`✅ Optimized ${filePath}`);
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  }
});

// Create performance monitoring component
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
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        }
      }
    });
    observer.observe({ entryTypes: ['navigation'] });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default PerformanceMonitor;`;

fs.writeFileSync('src/components/PerformanceMonitor.tsx', performanceMonitorContent);
console.log('✅ Created PerformanceMonitor component');

// Create SEO optimization component
const seoOptimizerContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
  keywords = ['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems', 'digital transformation'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechCompany",
          "name": "Zion Tech Group",
          "description": description,
          "url": canonicalUrl,
          "logo": "https://ziontechgroup.com/logo.png",
          "foundingDate": "2020",
          "numberOfEmployees": "50-100",
          "industry": "Technology",
          "services": [
            "AI Solutions",
            "Digital Transformation",
            "Cloud Services",
            "Automation",
            "Business Intelligence"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOOptimizer;`;

fs.writeFileSync('src/components/SEOOptimizer.tsx', seoOptimizerContent);
console.log('✅ Created SEOOptimizer component');

console.log('🎉 Performance optimization completed!');

// Run build to verify everything still works
console.log('🔨 Running build verification...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful after performance optimization!');
} catch (error) {
  console.error('❌ Build failed after performance optimization:', error.message);
  process.exit(1);
}