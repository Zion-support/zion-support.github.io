import { useState, useEffect, useCallback } from 'react';

interface PerformanceData {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface UseEnhancedPerformanceReturn {
  performanceData: PerformanceData;
  isOptimized: boolean;
  optimizePerformance: () => void;
  measurePerformance: () => void;
}

export const useEnhancedPerformance = (): UseEnhancedPerformanceReturn => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
  });
  
  const [isOptimized, setIsOptimized] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setPerformanceData(prev => ({
              ...prev,
              firstContentfulPaint: entry.startTime,
            }));
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          setPerformanceData(prev => ({
            ...prev,
            largestContentfulPaint: entry.startTime,
          }));
        }
        
        if (entry.entryType === 'layout-shift') {
          setPerformanceData(prev => ({
            ...prev,
            cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as any).value,
          }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });

    // Measure load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      setPerformanceData(prev => ({ ...prev, loadTime }));
    });

    return () => observer.disconnect();
  }, []);

  const optimizePerformance = useCallback(() => {
    // Implement performance optimizations
    if (typeof window === 'undefined') return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Enable resource hints
    const resourceHints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      Object.assign(link, hint);
      document.head.appendChild(link);
    });

    setIsOptimized(true);
  }, []);

  useEffect(() => {
    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance]);

  return {
    performanceData,
    isOptimized,
    optimizePerformance,
    measurePerformance,
  };
};