import { useState, useEffect } from 'react';

export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = useState<any[]>([]);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      setMetrics(prev => [...prev, ...entries]);
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });

    return () => observer.disconnect();
  }, []);

  const measurePerformance = (name: string, fn: () => void) => {
    performance.mark(`${name}-start`);
    fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  };

  return { metrics, measurePerformance };
}