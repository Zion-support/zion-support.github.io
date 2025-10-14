import { useState, useEffect } from 'react';

export const usePerformanceMonitor = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [metrics, setMetrics] = useState<Record<string, number>>({});

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      setIsMonitoring(true);
      
      const observer = new PerformanceObserver((list) => {
        const newMetrics: Record<string, number> = {};
        for (const entry of list.getEntries()) {
          newMetrics[entry.name] = entry.startTime;
        }
        setMetrics(prev => ({ ...prev, ...newMetrics }));
      });

      observer.observe({ entryTypes: ['measure', 'navigation'] });

      return () => observer.disconnect();
    }
    return undefined;
  }, []);

  return { isMonitoring, metrics };
};