import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export const usePerformanceOptimization = () => {
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return null;
    }

    const navigation = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');

    const metrics: PerformanceMetrics = {
      loadTime: navigation
        ? navigation.loadEventEnd - navigation.loadEventStart
        : 0,
      firstContentfulPaint:
        paintEntries.find(entry => entry.name === 'first-contentful-paint')
          ?.startTime || 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
    };

    // Measure FID
    const fidObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as PerformanceEntry & {
          processingStart: number;
          processingEnd: number;
        };
        metrics.firstInputDelay = fidEntry.processingEnd - fidEntry.processingStart;
      }
    });

    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure CLS
    const clsObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const clsEntry = entry as PerformanceEntry & { value: number };
        metrics.cumulativeLayoutShift += clsEntry.value;
      }
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure LCP
    const lcpObserver = new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      metrics.largestContentfulPaint = lastEntry.startTime;
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    return metrics;
  }, []);

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

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

  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = href.endsWith('.css') ? 'style' : 'font';
      if (href.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
  }, [optimizeImages, preloadCriticalResources]);

  return {
    measurePerformance,
    optimizeImages,
    preloadCriticalResources,
