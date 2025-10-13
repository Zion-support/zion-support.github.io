import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface CoreWebVitalsProps {
  children: React.ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    onCLS((metric) => {
      console.log('CLS:', metric);
    });

    onINP((metric) => {
      console.log('INP:', metric);
    });

    onFCP((metric) => {
      console.log('FCP:', metric);
    });

    onLCP((metric) => {
      console.log('LCP:', metric);
    });

    onTTFB((metric) => {
      console.log('TTFB:', metric);
    });
  }, []);

  return <>{children}</>;
};

export default CoreWebVitals;
