#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Performance optimization script
async function optimizePerformance() {
  console.log('🚀 Starting performance optimizations...');

  // 1. Optimize main page component
  await optimizeMainPage();
  
  // 2. Optimize CSS
  await optimizeCSS();
  
  // 3. Add performance monitoring
  await addPerformanceMonitoring();
  
  // 4. Optimize images and assets
  await optimizeAssets();
  
  console.log('✅ Performance optimizations completed!');
}

async function optimizeMainPage() {
  console.log('📄 Optimizing main page...');
  
  const mainPagePath = 'app/page.tsx';
  let content = fs.readFileSync(mainPagePath, 'utf8');
  
  // Add performance optimizations
  const performanceOptimizations = `
  // Performance optimizations
  const memoizedComponents = {
    ServiceCard: React.memo(ServiceCard),
    FeatureCard: React.memo(FeatureCard),
    TestimonialCard: React.memo(TestimonialCard)
  };
  
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png',
        '/images/ai-solutions.jpg'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };
    
    preloadCriticalResources();
  }, []);
  `;
  
  // Insert performance optimizations after imports
  content = content.replace(
    /import.*from.*['"]react['"];?\n/,
    `$&${performanceOptimizations}\n`
  );
  
  fs.writeFileSync(mainPagePath, content);
  console.log('✅ Main page optimized');
}

async function optimizeCSS() {
  console.log('🎨 Optimizing CSS...');
  
  const cssPath = 'app/globals.css';
  let content = fs.readFileSync(cssPath, 'utf8');
  
  // Add critical CSS optimizations
  const criticalCSS = `
/* Critical CSS optimizations */
.hero-section {
  contain: layout style paint;
  will-change: transform;
}

.service-card {
  contain: layout style;
  transform: translateZ(0);
}

/* Reduce paint complexity */
.cyber-grid {
  contain: layout style paint;
}

/* Optimize animations for performance */
@media (prefers-reduced-motion: no-preference) {
  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  .slide-up {
    animation: slideUp 0.8s ease-out;
  }
}

/* GPU acceleration for smooth animations */
.quantum-field,
.cyber-text-3d,
.neon-border {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
`;
  
  content += criticalCSS;
  fs.writeFileSync(cssPath, content);
  console.log('✅ CSS optimized');
}

async function addPerformanceMonitoring() {
  console.log('📊 Adding performance monitoring...');
  
  const performanceMonitor = `'use client';
import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  return null;
}`;
  
  fs.writeFileSync('app/components/PerformanceMonitor.tsx', performanceMonitor);
  console.log('✅ Performance monitoring added');
}

async function optimizeAssets() {
  console.log('🖼️ Optimizing assets...');
  
  // Create asset optimization configuration
  const assetConfig = {
    images: {
      formats: ['webp', 'avif'],
      quality: 85,
      sizes: [320, 640, 768, 1024, 1280, 1920]
    },
    fonts: {
      preload: true,
      display: 'swap'
    },
    scripts: {
      defer: true,
      async: true
    }
  };
  
  fs.writeFileSync('asset-optimization.json', JSON.stringify(assetConfig, null, 2));
  console.log('✅ Asset optimization configuration created');
}

// Run optimizations
optimizePerformance().catch(console.error);