import { useEffect, useCallback, useMemo } from 'react';

export const usePerformanceOptimization = () => {
  const memoizedCallback = useCallback((fn) => {
    return useMemo(() => fn, []);
  }, []);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value);
            }
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }, []);

  return { memoizedCallback };
};

export const optimizeImages = (src, width, height) => {
  // Add responsive image optimization
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('f', 'webp');
  params.set('q', '85');
  
  return `${src}?${params.toString()}`;
};

export const lazyLoadComponent = (importFunc) => {
  return React.lazy(() => importFunc().then(module => ({
    default: module.default || module
  })));
};