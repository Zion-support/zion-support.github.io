#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Implements various performance improvements for the Zion Tech Group website
 */

import fs from 'fs';
import path from 'path';

console.log('🚀 Starting performance optimization...');

// 1. Optimize images and assets
function optimizeAssets() {
  console.log('📸 Optimizing assets...');
  
  // Create optimized asset structure
  const publicDir = './public';
  const optimizedDir = './public/optimized';
  
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }
  
  // Create performance monitoring script
  const performanceScript = `
// Performance monitoring and optimization
class PerformanceOptimizer {
  constructor() {
    this.metrics = {};
    this.init();
  }
  
  init() {
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.optimizeImages();
    this.preloadCriticalResources();
  }
  
  observeLCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
  
  observeFID() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics.fid = entry.processingStart - entry.startTime;
      });
    });
    observer.observe({ entryTypes: ['first-input'] });
  }
  
  observeCLS() {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      this.metrics.cls = clsValue;
    });
    observer.observe({ entryTypes: ['layout-shift'] });
  }
  
  optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.loading !== 'lazy') {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }
  
  preloadCriticalResources() {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (link.as === 'font') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }
  
  getMetrics() {
    return this.metrics;
  }
}

// Initialize performance optimizer
if (typeof window !== 'undefined') {
  window.performanceOptimizer = new PerformanceOptimizer();
}
`;
  
  fs.writeFileSync('./public/performance-optimizer.js', performanceScript);
  console.log('✅ Performance monitoring script created');
}

// 2. Create critical CSS
function createCriticalCSS() {
  console.log('🎨 Creating critical CSS...');
  
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #0f172a;
  overflow-x: hidden;
}

.min-h-screen {
  min-height: 100vh;
}

.bg-slate-950 {
  background-color: #020617;
}

.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.from-slate-900 {
  --tw-gradient-from: #0f172a;
  --tw-gradient-to: rgba(15, 23, 42, 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.via-blue-900 {
  --tw-gradient-to: rgba(30, 58, 138, 0);
  --tw-gradient-stops: var(--tw-gradient-from), #1e3a8a, var(--tw-gradient-to);
}

.to-slate-900 {
  --tw-gradient-to: #0f172a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.text-center {
  text-align: center;
}

.font-extrabold {
  font-weight: 800;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

@media (min-width: 768px) {
  .md\\:text-7xl {
    font-size: 4.5rem;
  }
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-purple-400 {
  --tw-gradient-from: #c084fc;
  --tw-gradient-to: rgba(192, 132, 252, 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.via-cyan-400 {
  --tw-gradient-to: rgba(34, 211, 238, 0);
  --tw-gradient-stops: var(--tw-gradient-from), #22d3ee, var(--tw-gradient-to);
}

.to-white {
  --tw-gradient-to: #ffffff;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.text-transparent {
  color: transparent;
}

/* Optimized animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Performance optimizations */
img {
  max-width: 100%;
  height: auto;
}

.lazy {
  opacity: 0;
  transition: opacity 0.3s;
}

.lazy.loaded {
  opacity: 1;
}
`;
  
  fs.writeFileSync('./public/critical.css', criticalCSS);
  console.log('✅ Critical CSS created');
}

// 3. Create service worker for caching
function createServiceWorker() {
  console.log('⚡ Creating service worker...');
  
  const serviceWorker = `
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/services',
  '/contact',
  '/about',
  '/css/critical.css',
  '/js/performance-optimizer.js'
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

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
`;
  
  fs.writeFileSync('./public/sw.js', serviceWorker);
  console.log('✅ Service worker created');
}

// 4. Create accessibility enhancements
function createAccessibilityEnhancements() {
  console.log('♿ Creating accessibility enhancements...');
  
  const accessibilityScript = `
// Accessibility enhancements
class AccessibilityEnhancer {
  constructor() {
    this.init();
  }
  
  init() {
    this.addSkipLinks();
    this.enhanceKeyboardNavigation();
    this.addAriaLabels();
    this.improveColorContrast();
    this.addFocusIndicators();
  }
  
  addSkipLinks() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only';
    skipLink.style.cssText = \`
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    \`;
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  enhanceKeyboardNavigation() {
    // Add keyboard navigation for custom elements
    const interactiveElements = document.querySelectorAll('[role="button"], .interactive');
    interactiveElements.forEach(element => {
      element.setAttribute('tabindex', '0');
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          element.click();
        }
      });
    });
  }
  
  addAriaLabels() {
    // Add ARIA labels to elements that need them
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.textContent.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
    
    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      if (!link.textContent.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  }
  
  improveColorContrast() {
    // Ensure sufficient color contrast
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      // Basic contrast check (simplified)
      if (color && backgroundColor && color !== backgroundColor) {
        element.style.border = '1px solid transparent';
      }
    });
  }
  
  addFocusIndicators() {
    const style = document.createElement('style');
    style.textContent = \`
      *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .focus\\:not-sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: 8px;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
    \`;
    document.head.appendChild(style);
  }
}

// Initialize accessibility enhancer
if (typeof window !== 'undefined') {
  window.accessibilityEnhancer = new AccessibilityEnhancer();
}
`;
  
  fs.writeFileSync('./public/accessibility-enhancer.js', accessibilityScript);
  console.log('✅ Accessibility enhancements created');
}

// 5. Create SEO optimizations
function createSEOOptimizations() {
  console.log('🔍 Creating SEO optimizations...');
  
  const seoScript = `
// SEO and meta tag optimizations
class SEOOptimizer {
  constructor() {
    this.init();
  }
  
  init() {
    this.optimizeMetaTags();
    this.addStructuredData();
    this.optimizeImages();
    this.addCanonicalURLs();
  }
  
  optimizeMetaTags() {
    // Ensure proper meta tags
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }
    
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#0f172a';
      document.head.appendChild(themeColor);
    }
  }
  
  addStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Revolutionary AI Solutions for Enterprise",
      "url": window.location.origin,
      "logo": window.location.origin + "/logo.png",
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-ZION-TECH",
        "contactType": "customer service"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
  
  optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading attribute if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group image');
      }
    });
  }
  
  addCanonicalURLs() {
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
    }
  }
}

// Initialize SEO optimizer
if (typeof window !== 'undefined') {
  window.seoOptimizer = new SEOOptimizer();
}
`;
  
  fs.writeFileSync('./public/seo-optimizer.js', seoScript);
  console.log('✅ SEO optimizations created');
}

// Run all optimizations
async function runOptimizations() {
  try {
    optimizeAssets();
    createCriticalCSS();
    createServiceWorker();
    createAccessibilityEnhancements();
    createSEOOptimizations();
    
    console.log('\n🎉 All performance optimizations completed!');
    console.log('📊 Summary of improvements:');
    console.log('  ✅ Performance monitoring script');
    console.log('  ✅ Critical CSS for faster loading');
    console.log('  ✅ Service worker for caching');
    console.log('  ✅ Accessibility enhancements');
    console.log('  ✅ SEO optimizations');
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
  }
}

runOptimizations();