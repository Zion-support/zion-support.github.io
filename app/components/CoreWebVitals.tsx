import React, { useEffect, useState } from 'react';

interface CoreWebVitalsProps {
  children: React.ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  const [vitals, setVitals] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  useEffect(() => {
    const measureCoreWebVitals = () => {
      if (typeof window === 'undefined' || !('performance' in window)) return;

      // Measure First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setVitals(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setVitals(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = (entry as any).processingStart - entry.startTime;
          setVitals(prev => ({ ...prev, fid }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setVitals(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure Time to First Byte (TTFB)
      window.addEventListener('load', () => {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          setVitals(prev => ({ ...prev, ttfb }));
        }
      });
    };

    measureCoreWebVitals();
  }, []);

  // Log vitals in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Core Web Vitals:', vitals);
    }
  }, [vitals]);

  return <>{children}</>;
};

export default CoreWebVitals;