import { useState, useEffect } from 'react';

export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<any>({});
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.performance) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);
    
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: navigation.responseEnd - navigation.requestStart,
        });
      }
    };

    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);

  return { metrics, isSupported };
}