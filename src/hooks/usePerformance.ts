import { useEffect } from "react";

// Simple web vitals reporter
const reportWebVitals = (metric: { name: string; value: number; delta: number }) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }
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
    reportWebVitals
  };
};

export default usePerformance;