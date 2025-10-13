import { useState, useEffect } from 'react';

export function usePerformanceMonitoringEnhanced() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        const paintEntries = window.performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const renderTime = fcp ? fcp.startTime : 0;

        setMetrics({ loadTime, renderTime, memoryUsage: 0, fps: 0 });
      }
    };

    measurePerformance();
  }, []);

  return metrics;
}
