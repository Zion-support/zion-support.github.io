import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface UsePerformanceMonitoringReturn {
  metrics: PerformanceMetrics;
  isMonitoring: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
  resetMetrics: () => void;
  getPerformanceScore: () => number;
}

export const usePerformanceMonitoring = (): UsePerformanceMonitoringReturn => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
  });
  
  const [isMonitoring, setIsMonitoring] = useState(false);

  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                firstContentfulPaint: entry.startTime,
              }));
            }
            break;
            
          case 'largest-contentful-paint':
            setMetrics(prev => ({
              ...prev,
              largestContentfulPaint: entry.startTime,
            }));
            break;
            
          case 'layout-shift':
            setMetrics(prev => ({
              ...prev,
              cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as any).value,
            }));
            break;
        }
      }
    });

    observer.observe({ 
      entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] 
    });

    // Measure load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    });

    return () => observer.disconnect();
  }, []);

  const measureFirstInputDelay = useCallback(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({
            ...prev,
            firstInputDelay: (entry as any).processingStart - entry.startTime,
          }));
        }
      }
    });

    observer.observe({ entryTypes: ['first-input'] });
    return () => observer.disconnect();
  }, []);

  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    // FCP scoring (good: <1.8s, needs improvement: 1.8-3.0s, poor: >3.0s)
    if (metrics.firstContentfulPaint > 3000) score -= 20;
    else if (metrics.firstContentfulPaint > 1800) score -= 10;
    
    // LCP scoring (good: <2.5s, needs improvement: 2.5-4.0s, poor: >4.0s)
    if (metrics.largestContentfulPaint > 4000) score -= 20;
    else if (metrics.largestContentfulPaint > 2500) score -= 10;
    
    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 20;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    
    // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
    if (metrics.firstInputDelay > 300) score -= 20;
    else if (metrics.firstInputDelay > 100) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const resetMetrics = useCallback(() => {
    setMetrics({
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
      timeToInteractive: 0,
    });
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      const cleanup1 = measureCoreWebVitals();
      const cleanup2 = measureFirstInputDelay();
      
      return () => {
        cleanup1?.();
        cleanup2?.();
      };
    }
    return undefined;
  }, [isMonitoring, measureCoreWebVitals, measureFirstInputDelay]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    resetMetrics,
    getPerformanceScore,
  };
};