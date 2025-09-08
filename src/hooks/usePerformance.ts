import { useEffect, useState, useCallback } from 'react';

interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  bundleSize: number;
  isSlowConnection: boolean;
}

export const usePerformance = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const measurePerformance = useCallback(() => {
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Calculate bundle size
      const bundleSize = performance.getEntriesByType('resource')
        .filter(entry => entry.name.includes('.js'))
        .reduce((total, entry) => total + (entry.transferSize || 0), 0);

      // Check connection speed
      const connection = (navigator as any).connection;
      const isSlowConnection = connection ? 
        connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' : 
        loadTime > 3000; // Fallback: consider slow if load time > 3s

      setPerformanceData({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: (performance as any).memory?.usedJSHeapSize,
        bundleSize: Math.round(bundleSize / 1024),
        isSlowConnection
      });
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const optimizeForSlowConnection = useCallback(() => {
    if (!performanceData?.isSlowConnection) return;

    // Disable animations for slow connections
    document.documentElement.style.setProperty('--animation-duration', '0s');
    
    // Reduce image quality
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.src.includes('?')) {
        img.src += '&q=50';
      } else {
        img.src += '?q=50';
      }
    });

    // Disable non-essential features
    localStorage.setItem('disableAnimations', 'true');
  }, [performanceData]);

  useEffect(() => {
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, [measurePerformance]);

  useEffect(() => {
    if (performanceData) {
      optimizeForSlowConnection();
    }
  }, [performanceData, optimizeForSlowConnection]);

  return {
    performanceData,
    isLoading,
    measurePerformance,
    optimizeForSlowConnection
  };
};

/**
 * Hook for performance monitoring and optimization
 */
export function usePerformance() {
  const monitor = PerformanceMonitor.getInstance();
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Monitor Core Web Vitals
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      observerRef.current = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          } else if (entry.entryType === 'first-input') {
            console.log('FID:', (entry as any).processingStart - entry.startTime);
          } else if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value);
          }
        });
      });

      try {
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance Observer not supported:', e);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Debounced function creator
  const createDebounced = useCallback(
    <T extends (...args: any[]) => any>(func: T, delay: number) => {
      return debounce(func, delay);
    },
    []
  );

  // Throttled function creator
  const createThrottled = useCallback(
    <T extends (...args: any[]) => any>(func: T, delay: number) => {
      return throttle(func, delay);
    },
    []
  );

  // Start timing
  const startTiming = useCallback((name: string) => {
    monitor.startTiming(name);
  }, [monitor]);

  // End timing
  const endTiming = useCallback((name: string) => {
    return monitor.endTiming(name);
  }, [monitor]);

  return {
    startTiming,
    endTiming,
    createDebounced,
    createThrottled,
    getMetrics: monitor.getMetrics.bind(monitor),
  };
}
