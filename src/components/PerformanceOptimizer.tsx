import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer() {
  const location = useLocation();

  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('LCP:', entry.startTime);
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    const criticalPaths = [
      '/css/main.css',
      '/js/main.js',
      '/fonts/inter-var.woff2'
    ];

    criticalPaths.forEach((path) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = path;
      link.as = path.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, []);

  const optimizeFonts = useCallback(() => {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        console.log('Fonts loaded:', document.fonts.size);
      });
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    optimizeImages();
    preloadCriticalResources();
    optimizeFonts();
  }, [measurePerformance, optimizeImages, preloadCriticalResources, optimizeFonts]);

  useEffect(() => {
    // Route change optimization
    const handleRouteChange = () => {
      // Prefetch next likely routes
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && !href.includes('#')) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
        }
      });
    };

    handleRouteChange();
  }, [location]);

  return null; // This component doesn't render anything
}
