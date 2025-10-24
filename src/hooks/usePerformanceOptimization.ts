<<<<<<< HEAD
import React from 'react';

export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
  );
}
=======
'use client';
interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}
<<<<<<< HEAD
export const _usePerformanceOptimization = () => {
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return null;
<<<<<<< HEAD
    }
=======
export 
    ) => {$3};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0522
    const navigation = performance.getEntriesByType(
      'navigation'
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
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
      firstInputDelay: 0
    };
    // Measure LCP
    const lcpObserver = new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        metrics.largestContentfulPaint = lastEntry.startTime;
      }
    });
<<<<<<< HEAD
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    // Measure CLS
    
    const clsObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as PerformanceEntry & {
=======
    lcpObserver.observe({entryTypes: ['largest-contentful-paint']});
    // Measure CLS;
    let clsValue = 0;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
          hadRecentInput?: boolean;
          value?: number;
        };
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
        }
      }
      metrics.cumulativeLayoutShift = clsValue;
    });
<<<<<<< HEAD
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    // Measure FID
    const fidObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as PerformanceEntry & {
=======
    clsObserver.observe({entryTypes: ['layout-shift']});
    // Measure FID;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
          processingStart?: number;
        };
        metrics.firstInputDelay =
          (fidEntry.processingStart || 0) - entry.startTime;
      }
    });
<<<<<<< HEAD
    fidObserver.observe({ entryTypes: ['first-input'] });
    // Cleanup observers after a delay
    setTimeout(() => {
=======
    fidObserver.observe({entryTypes: ['first-input']});
    // Cleanup observers after a delay;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    }, 10000);
    return metrics;
  }, []);
<<<<<<< HEAD
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
=======

    const images = document.querySelectorAll('img[data-src]');

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
  }, []);
<<<<<<< HEAD
  const preloadCriticalResources = useCallback(() => {
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    const criticalResources = ['/fonts/inter-var.woff2', '/css/critical.css'];
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
    // Measure performance after page load
    const timer = setTimeout(() => {
      const metrics = measurePerformance();
<<<<<<< HEAD
      if (metrics) {
        // Send metrics to analytics in production
        if (process.env['NODE_ENV'] === 'production') {
          // Track metrics in production
        }
        if (process.env['NODE_ENV'] === 'development') { 
          if (import.meta.env.DEV) { 
          } 
        }
      }
=======
        // Send metrics to analytics in production;
          // Track metrics in production;
            console.log('Performance metrics: ', metrics);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    }, 1000);
    // Optimize images
    optimizeImages();
    // Preload critical resources
    preloadCriticalResources();
    return () => clearTimeout(timer);
  }, [measurePerformance, optimizeImages, preloadCriticalResources]);
<<<<<<< HEAD
  return {
    measurePerformance,
=======
  return {measurePerformance}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    optimizeImages,
    preloadCriticalResources
  };
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
=======


export default _usePerformanceOptimization;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0522
