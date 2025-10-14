'use client';
import { useEffect, useState } from 'react';

export const usePerformance = () => {
  const [performanceData, setPerformanceData] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        setPerformanceData({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
        });
      }
    };

    measurePerformance();
  }, []);

  return performanceData;
};