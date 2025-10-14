import { useState, useEffect } from 'react';

export constusePerformanceMonitor= () => {
  const [metrics, set Metrics] = use State<Record<string, number>>({});

  use Effect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer= new Performance Observer((list) => {
        const entries= list.get Entries();
        if (entries.length > 0) {
          setMetrics((prev: Record<string, number>) => ({
            ...prev,
            [entries[0].name]: entries[0].start Time}));
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation'] });

      return () => {
        observer.disconnect();
      };
    }
    return undefined;
  }, []);

  return { metrics };
};