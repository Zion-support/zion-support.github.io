import { useState, useEffect } from 'react';

export function useAdvancedPerformanceMonitoring() {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (isMonitoring) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        setMetrics(prev => [...prev, ...entries]);
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'resource', 'paint'] });

      return () => observer.disconnect();
    }
    return undefined;
  }, [isMonitoring]);

  const startMonitoring = () => setIsMonitoring(true);
  const stopMonitoring = () => setIsMonitoring(false);

  const measureAsync = async (name: string, fn: () => Promise<any>) => {
    performance.mark(`${name}-start`);
    const result = await fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    return result;
  };

  return { metrics, isMonitoring, startMonitoring, stopMonitoring, measureAsync };
}
