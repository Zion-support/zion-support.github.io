import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface UsePerformanceOptimizationReturn {
  metrics: PerformanceMetrics | null;
  isSlowConnection: boolean;
  optimizeImages: () => void;
  preloadCriticalResources: () => void;
  reportWebVitals: (metric: any) => void;
}

export const usePerformanceOptimization = (): UsePerformanceOptimizationReturn => {
  const metricsRef = useRef<PerformanceMetrics | null>(null);
  const isSlowConnectionRef = useRef(false);

  // Check connection speed
  const checkConnectionSpeed = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      isSlowConnectionRef.current = connection.effectiveType === 'slow-2g' || 
                                   connection.effectiveType === '2g' ||
                                   connection.saveData === true;
    }
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;

    const metrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      firstInputDelay: 0, // Would need to be measured with PerformanceObserver
      cumulativeLayoutShift: 0, // Would need to be measured with PerformanceObserver
      timeToInteractive: navigation.domContentLoadedEventEnd - navigation.navigationStart
    };

    metricsRef.current = metrics;
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img: Element) => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.dataset.src) {
        imageElement.src = imageElement.dataset.src;
        imageElement.removeAttribute('data-src');
      }
    });
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/app/styles/futuristic.css',
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (resource.includes('fonts.googleapis.com')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  // Report web vitals
  const reportWebVitals = useCallback((metric: any) => {
    // In a real app, you would send this to your analytics service
    console.log('Web Vital:', metric);
  }, []);

  useEffect(() => {
    checkConnectionSpeed();
    collectMetrics();

    // Set up performance observer for CLS and FID
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              // Update CLS metric
              if (metricsRef.current) {
                metricsRef.current.cumulativeLayoutShift += clsEntry.value;
              }
            }
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // CLS not supported
      }
    }

    // Preload critical resources on mount
    preloadCriticalResources();

    return () => {
      // Cleanup if needed
    };
  }, [checkConnectionSpeed, collectMetrics, preloadCriticalResources]);

  return {
    metrics: metricsRef.current,
    isSlowConnection: isSlowConnectionRef.current,
    optimizeImages,
    preloadCriticalResources,
    reportWebVitals
  };
};