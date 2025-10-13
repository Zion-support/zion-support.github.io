import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [performanceData, setPerformanceData] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setPerformanceData(prev => ({
            ...prev,
            lcp: entry.startTime
          }));
        }
        if (entry.entryType === 'first-input') {
          setPerformanceData(prev => ({
            ...prev,
            fid: (entry as any).processingStart - entry.startTime
          }));
        }
        if (entry.entryType === 'layout-shift') {
          setPerformanceData(prev => ({
            ...prev,
            cls: prev.cls + (entry as any).value
          }));
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor other performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setPerformanceData(prev => ({
          ...prev,
          fcp: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          ttfb: navigation.responseStart - navigation.requestStart
        }));
      }
    };

    measurePerformance();

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;
