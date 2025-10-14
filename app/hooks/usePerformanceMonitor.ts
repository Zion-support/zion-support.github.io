import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  [key: string]: number;
}

export const usePerformanceMonitor = (): { isMonitoring: boolean; metrics: PerformanceMetrics } => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      setIsMonitoring(true);
      
      const observer = new PerformanceObserver((list) => {
        const newMetrics: PerformanceMetrics = {};
        for (const entry of list.getEntries()) {
          newMetrics[entry.name] = entry.startTime;
        }
        setMetrics(prev => ({ ...prev, ...newMetrics }));
      });

      observer.observe({ entryTypes: ['measure', 'navigation'] });

      return () => observer.disconnect();
    }
  }, []);

  return { isMonitoring, metrics };
};