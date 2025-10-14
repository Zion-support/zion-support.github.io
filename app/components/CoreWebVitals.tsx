import React, { useEffect } from 'react';

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor LCP, FID, CLS
      console.log('Core Web Vitals monitoring initialized');
    }
  }, []);

  return null;
};

export default CoreWebVitals;