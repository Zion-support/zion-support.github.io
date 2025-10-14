'use client';
<<<<<<< HEAD

export const UsePerformance = () => {
  // Implementation
  return true;
};

export default UsePerformance;
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
