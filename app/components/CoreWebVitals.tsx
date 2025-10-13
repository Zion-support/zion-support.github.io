import React, { useEffect, ReactNode } from 'react';

interface CoreWebVitalsProps {
  children: ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Monitor page load performance
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
            console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
          }
        });

        // Monitor resource loading
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 1000) { // Log slow resources
              console.log('Slow Resource:', entry.name, entry.duration);
            }
          }
        });
        
        resourceObserver.observe({ entryTypes: ['resource'] });
      }
    };

    monitorWebVitals();
  }, []);

  return <>{children}</>;
};

export default CoreWebVitals;