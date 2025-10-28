'use client';

import { useState, useEffect } from 'react';

export const useEnhancedPerformance = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    // Performance monitoring logic
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      setMetrics(entries);
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => observer.disconnect();
  }, []);

  return { metrics };
};