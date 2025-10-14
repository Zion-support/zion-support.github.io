'use client';
import { useState, useEffect } from 'react';

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<Record<string, number>>({});

  useEffect(() => {
    // Performance monitoring logic
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        setMetrics(prev => ({
          ...prev,
          [entry.name]: entry.duration
        }));
      });
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => observer.disconnect();
  }, []);

  return { metrics };
};

export default usePerformance;