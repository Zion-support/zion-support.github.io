'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/og-image.jpg',
        '/logo.png',
        '/favicon.svg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Initialize performance optimizations
    preloadCriticalResources();
    optimizeImages();

    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    };

    monitorWebVitals();
  }, []);

  return null;
}

// Extend Window interface for web-vitals
declare global {
  interface Window {
    'web-vitals': any;
  }
}