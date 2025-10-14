
  return null;
};

export default CoreWebVitals;
import React, { useEffect, ReactNode } from 'react';

interface CoreWebVitalsProps {
  children: ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('Core Web Vitals - CLS:', metric);
          });
          getFID((metric) => {
            console.log('Core Web Vitals - FID:', metric);
          });
          getFCP((metric) => {
            console.log('Core Web Vitals - FCP:', metric);
          });
          getLCP((metric) => {
            console.log('Core Web Vitals - LCP:', metric);
          });
          getTTFB((metric) => {
            console.log('Core Web Vitals - TTFB:', metric);
          });
        });
      }
    };

    trackCoreWebVitals();
  }, []);

  return <>{children}</>;
};

export default CoreWebVitals;
