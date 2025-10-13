import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    const measurePerformance = () => {
      // Measure LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({
            ...prev,
            lcp: lastEntry.startTime
          }));
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Measure FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics(prev => ({
              ...prev,
              fid: entry.processingStart - entry.startTime
            }));
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
        
        // Measure CLS (Cumulative Layout Shift)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          setMetrics(prev => ({
            ...prev,
            cls: clsValue
          }));
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        
        // Measure FCP (First Contentful Paint)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                fcp: entry.startTime
              }));
            }
          });
        });
        
        fcpObserver.observe({ entryTypes: ['paint'] });
        
        // Measure TTFB (Time to First Byte)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({
            ...prev,
            ttfb: navigationEntry.responseStart - navigationEntry.requestStart
          }));
        }
        
        return () => {
          observer.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          fcpObserver.disconnect();
        };
      }
    };
    
    measurePerformance();
  }, []);

  // Log performance metrics for debugging
  useEffect(() => {
    if (Object.values(metrics).some(value => value !== null)) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return null; // This component doesn't render anything visible
};

export default PerformanceMonitor;