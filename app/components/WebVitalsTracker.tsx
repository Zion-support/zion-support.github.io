import React, { useEffect } from 'react';

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV !== 'production') return;

    const trackWebVitals = () => {
      // Track Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    };

    // Track after page load
    if (document.readyState === 'complete') {
      trackWebVitals();
    } else {
      window.addEventListener('load', trackWebVitals);
    }

    return () => {
      window.removeEventListener('load', trackWebVitals);
    };
  }, []);

  return null;
};

export default WebVitalsTracker;