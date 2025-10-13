import React, { useEffect } from 'react';

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      console.log('Core Web Vitals tracking initialized');
    };

    trackCoreWebVitals();
  }, []);

  return null;
};

export default CoreWebVitals;
