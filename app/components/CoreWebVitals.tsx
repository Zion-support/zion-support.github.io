import React from 'react';

const CoreWebVitals: React.FC = () => {
  React.useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      
      return () => clsObserver.disconnect();
    }
  }, []);

  return null;
};

export default CoreWebVitals;
