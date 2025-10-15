import { useState, useEffect } from 'react';

export const usePerformanceMonitor = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    
    // Monitor performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const performanceData = {
          navigation: {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalTime: navigation.loadEventEnd - navigation.navigationStart
          },
          paint: {
            firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0
          }
        };
        
        setData(performanceData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    }
    
    setLoading(false);
  }, []);

  return { data, loading, error };
};