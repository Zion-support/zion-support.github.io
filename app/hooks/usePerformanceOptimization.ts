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

    // Measure LCP
    const lcpObserver = new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      if (lastEntry) {
        metrics.largestContentfulPaint = lastEntry.startTime;
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure CLS
    let clsValue = 0;
    const clsObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as PerformanceEntry & {
          hadRecentInput?: boolean;
          value?: number;
        };
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
        }
      }
      metrics.cumulativeLayoutShift = clsValue;
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

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

    // Cleanup observers after a delay
    setTimeout(() => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    }, 10000);

    return metrics;
  }, []);

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Handle lazy loading
      if (img.dataset.src) {
        const imageObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const targetImg = entry.target as HTMLImageElement;
              targetImg.src = targetImg.dataset.src || '';
              targetImg.classList.remove('lazy');
              imageObserver.unobserve(targetImg);
            }
          });
        });
        imageObserver.observe(img);
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    const criticalResources = ['/fonts/inter-var.woff2', '/css/critical.css'];

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
    // Measure performance after page load
    const timer = setTimeout(() => {
      const metrics = measurePerformance();
      if (metrics) {
        // Send metrics to analytics in production
        if (process.env['NODE_ENV'] === 'production') {
          // Track metrics in production
        }
         
        if (process.env['NODE_ENV'] === 'development') { 
          if (import.meta.env.DEV) { 
            console.log('Performance Metrics:', metrics); 
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
    preloadCriticalResources,
  };
};
