import React, { useEffect, ReactNode } from 'react';

interface WebVitalsTrackerProps {
  children: ReactNode;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('CLS:', metric);
          });
          getFID((metric) => {
            console.log('FID:', metric);
          });
          getFCP((metric) => {
            console.log('FCP:', metric);
          });
          getLCP((metric) => {
            console.log('LCP:', metric);
          });
          getTTFB((metric) => {
            console.log('TTFB:', metric);
          });
        });
      }
    };

    trackWebVitals(); cursor/analyze-improve-and-deploy-application-30da
  }, []);

  return <>{children}</>;
};

export default WebVitalsTracker;