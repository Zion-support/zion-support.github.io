'use client';
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
    const _paintEntries = performance.getEntriesByType('paint');
    const metrics: PerformanceMetrics = {
      loadTime: navigation
        ? navigation.loadEventEnd - navigation.loadEventStart
        : 0,
      firstContentfulPaint:
        _paintEntries.find(entry => entry.name === 'first-contentful-paint')
          ?.startTime || 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0
    };
    // Measure LCP
    const lcpObserver = new PerformanceObserver(list => {
      const _entries = list.getEntries();
      const _lastEntry = _entries[_entries.length - 1];
      if (_lastEntry) {
        metrics.largestContentfulPaint = _lastEntry.startTime;
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    // Measure CLS
    let _clsValue = 0;
    const clsObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as PerformanceEntry & {
          hadRecentInput?: boolean;
          value?: number;
        };
        if (!layoutShiftEntry.hadRecentInput) {
          _clsValue += layoutShiftEntry.value || 0;
        }
      }
        metrics.cumulativeLayoutShift = _clsValue;
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    // Measure FID
    const fidObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as PerformanceEntry & {
          processingStart?: number;
        };
        metrics.firstInputDelay =
          (fidEntry.processingStart || 0) - entry.startTime;
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    // Cleanup observers after a delay
    setTimeout(() => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    }, 10000);
    return metrics;
  }, []);
  const optimizeImages = useCallback(() => {
    const _images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const _img = entry.target as HTMLImageElement;
          _img.src = _img.dataset.src || '';
          _img.classList.remove('lazy');
          imageObserver.unobserve(_img);
        }
      });
    });
    _images.forEach(img => imageObserver.observe(img));
  }, []);
  const preloadCriticalResources = useCallback(() => {
    const _criticalResources = ['/fonts/inter-var.woff2', '/css/critical.css'];
    _criticalResources.forEach(resource => {
      const _link = document.createElement('link');
      _link.rel = 'preload';
      _link.href = resource;
      _link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        _link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(_link);
    });
  }, []);
  useEffect(() => {
    // Measure performance after page load
    const timer = setTimeout(() => {
      const _metrics = measurePerformance();
      if (_metrics) {
        // Send metrics to analytics in production
        if (process.env['NODE_ENV'] === 'production') {
          // Track metrics in production
        }
        if (process.env['NODE_ENV'] === 'development') { 
          if (import.meta.env.DEV) { 
          } 
        }
      }
    }, 1000);
    // Optimize images
    optimizeImages();
    // Preload critical resources
    preloadCriticalResources();
    return () => clearTimeout(timer);
  }, [measurePerformance, optimizeImages, preloadCriticalResources]);
  return {
    measurePerformance,
    optimizeImages,
    preloadCriticalResources
  };
};
