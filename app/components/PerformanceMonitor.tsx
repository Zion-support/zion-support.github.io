import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
        }
        if (entry.entryType === 'paint') {
          console.log('Paint time:', entry.name, entry.startTime);
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'paint'] });

    // Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
