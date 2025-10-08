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
        metrics.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
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

    return metrics;
  }, []);

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.setAttribute('src', src);
        img.removeAttribute('data-src');
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    preloadCriticalResources();
  }, [preloadCriticalResources]);

  return {
    measurePerformance,
    optimizeImages,
    preloadCriticalResources,
  };
};
