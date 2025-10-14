import { useEffect, useState } from 'react';

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

  loadTime: number;,
  renderTime: number;,
  memoryUsage?: number;},
export const usePerformanceMonitor = (): PerformanceMetrics => {,

  const [metrics, setMetrics] = useState<PerformanceMetrics>({,

    loadTime: 0,
    renderTime: 0});,

  useEffect(() => {,

    const startTime = performance.now();,
    
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
        
        setMetrics({
          loadTime,
          firstContentfulPaint,
          largestContentfulPaint,
          firstInputDelay: 0, // Would need to be measured with PerformanceObserver
          cumulativeLayoutShift: 0 // Would need to be measured with PerformanceObserver
        });
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

    // Measure after component mount,
    const timeoutId = setTimeout(measurePerformance, 100);,
    
    return () => clearTimeout(timeoutId);,
  }, []);,

  return metrics;,
};,
'
export default usePerformanceMonitor;,
