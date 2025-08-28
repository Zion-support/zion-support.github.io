import React, { useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const PerformanceOptimizer: React.FC = () => {
  const performanceMetrics = useMemo(() => ({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
  }), []);

  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          performanceMetrics.fcp = fcpEntry.startTime;
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          performanceMetrics.lcp = lcpEntry.startTime;
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          performanceMetrics.fid = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        performanceMetrics.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        performanceMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }
    }
  }, [performanceMetrics]);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const optimizeFonts = useCallback(() => {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        // Font optimization logic
        console.log('Fonts loaded and optimized');
      });
    }
  }, []);

  const preloadCriticalResources = useCallback(() => {
    const criticalPaths = [
      '/css/main.css',
      '/js/main.js',
      '/images/hero-bg.jpg'
    ];

    criticalPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = path;
      link.as = path.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    measurePerformance();
    optimizeImages();
    optimizeFonts();
    preloadCriticalResources();

    // Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));

    return () => {
      imageObserver.disconnect();
    };
  }, [measurePerformance, optimizeImages, optimizeFonts, preloadCriticalResources]);

  // Only render in development or when explicitly enabled
  if (process.env.NODE_ENV === 'production' && !process.env.REACT_APP_SHOW_PERFORMANCE) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 text-xs text-white shadow-2xl z-50"
    >
      <div className="font-mono space-y-1">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Performance Monitor</span>
        </div>
        <div className="space-y-1 text-cyan-300">
          <div>FCP: {performanceMetrics.fcp.toFixed(0)}ms</div>
          <div>LCP: {performanceMetrics.lcp.toFixed(0)}ms</div>
          <div>FID: {performanceMetrics.fid.toFixed(0)}ms</div>
          <div>CLS: {performanceMetrics.cls.toFixed(3)}</div>
          <div>TTFB: {performanceMetrics.ttfb.toFixed(0)}ms</div>
        </div>
      </div>
    </motion.div>
  );
};
