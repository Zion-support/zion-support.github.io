'use client';
import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  enableMonitoring?: boolean;
  enableReporting?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  children,
  enableMonitoring = true,
  enableReporting = true
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && enableMonitoring) {
      // Performance monitoring
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Navigation Performance:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              firstByte: navEntry.responseStart - navEntry.requestStart
            });
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'paint'] });

      // Web Vitals monitoring
      if (enableReporting) {
        import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
          onCLS(console.log);
          onFCP(console.log);
          onLCP(console.log);
          onTTFB(console.log);
        });
      }

      return () => observer.disconnect();
    }
    return undefined;
  }, [enableMonitoring, enableReporting]);

  return <>{children}</>;
};

export default PerformanceMonitor;
