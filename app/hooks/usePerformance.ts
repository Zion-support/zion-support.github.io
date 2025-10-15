import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceState {
  metrics: PerformanceMetrics | null;
  isMonitoring: boolean;
  errors: string[];
}

export function usePerformance() {
  const [state, setState] = useState<PerformanceState>({
    metrics: null,
    isMonitoring: false,
    errors: []
  });

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) {
      return;
    }

    try {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = window.performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: 0, // Will be updated by Web Vitals
        firstInputDelay: 0, // Will be updated by Web Vitals
        timeToInteractive: navigation ? navigation.domInteractive - navigation.fetchStart : 0
      };

      setState(prev => ({
        ...prev,
        metrics,
        isMonitoring: true
      }));

      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('[Performance Metrics]', metrics);
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        errors: [...prev.errors, `Performance measurement error: ${error}`]
      }));
    }
  }, []);

  const getPerformanceScore = useCallback((): number => {
    if (!state.metrics) return 0;

    const { loadTime, firstContentfulPaint, largestContentfulPaint } = state.metrics;
    
    // Simple scoring algorithm (0-100)
    let score = 100;
    
    if (loadTime > 3000) score -= 20;
    if (firstContentfulPaint > 1800) score -= 20;
    if (largestContentfulPaint > 2500) score -= 20;
    if (state.metrics.cumulativeLayoutShift > 0.1) score -= 20;
    if (state.metrics.firstInputDelay > 100) score -= 20;

    return Math.max(0, score);
  }, [state.metrics]);

  useEffect(() => {
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [measurePerformance]);

  return { 
    state, 
    measurePerformance, 
    getPerformanceScore,
    isMonitoring: state.isMonitoring 
  };
}
