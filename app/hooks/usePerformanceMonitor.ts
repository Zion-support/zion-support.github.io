import { useState, useEffect } from 'react';

export const usePerformanceMonitor = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      setIsMonitoring(true);
      
      const observer = new PerformanceObserver((list) => {
        const newMetrics = {};
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