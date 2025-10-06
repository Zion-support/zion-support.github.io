import { useEffect } from "react";

// Simple web vitals reporter
const reportWebVitals = (metrics: { name: string; value: number; delta: number; id: string }) => {
  console.log('Web Vitals:', metrics);
  // Here you would typically send metrics to your analytics service
};

export const usePerformance = () => {
  useEffect(() => {
    // Report web vitals
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(reportWebVitals);
        getFID(reportWebVitals);
        getFCP(reportWebVitals);
        getLCP(reportWebVitals);
        getTTFB(reportWebVitals);
      });
    }
  }, []);

  return {
    // Performance monitoring utilities can be added here
    measurePerformance: (name: string, fn: () => void) => {
      const start = performance.now();
      fn();
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    }
  };
};