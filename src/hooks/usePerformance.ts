import { useEffect, useState } from 'react';

export interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  inp?: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMetrics = () => {
      const newMetrics: PerformanceMetrics = {};
      const perfData = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        newMetrics.ttfb = perfData.responseStart - perfData.requestStart;
      }
      setMetrics(newMetrics);
    };

    updateMetrics();
  }, []);

  return metrics;
};

export default usePerformance;
