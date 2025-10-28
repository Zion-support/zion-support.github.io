'use client';

import { useState, useEffect } from 'react';

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as any;
      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
      });
    };

    measurePerformance();
  }, []);

  return { metrics };
};