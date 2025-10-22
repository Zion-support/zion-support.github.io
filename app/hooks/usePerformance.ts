import { useState, useEffect } from 'react';

export function usePerformance() {
  const [performanceData, setPerformanceData] = useState<any>(null);

  useEffect(() => {
    const getPerformanceData = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      };
    };

    setPerformanceData(getPerformanceData());
  }, []);

  const measureRender = (componentName: string) => {
    const start = performance.now();
    return () => {
      const end = performance.now();
      console.log(`${componentName} render time: ${end - start}ms`);
    };
  };

  return { performanceData, measureRender };
}
