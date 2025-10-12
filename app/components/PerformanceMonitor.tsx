'use client';
import React, { useEffect } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

const PerformanceMonitor: React.FC = () => {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorPerformance = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint') {
              trackEvent('performance', 'web_vitals', entry.name, Math.round(entry.startTime));
            }
          }
        });

        observer.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          trackEvent('performance', 'web_vitals', 'LCP', Math.round(lastEntry.startTime));
        });

        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          trackEvent('performance', 'web_vitals', 'CLS', Math.round(clsValue * 1000));
        });

        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    monitorPerformance();
  }, [trackEvent]);

  return null;
};

export default PerformanceMonitor;