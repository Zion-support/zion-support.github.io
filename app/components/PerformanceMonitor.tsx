'use client'
import React, { useEffect } from 'react'

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Monitor Largest Contentful Paint (LCP)
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              console.log('FID:', entry.processingStart - entry.startTime);
            }
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor Cumulative Layout Shift (CLS)
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
      }
    };

    // Monitor resource loading performance
    const monitorResourcePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
          console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        });
      }
    };

    // Monitor memory usage
    const monitorMemoryUsage = () => {
      if (typeof window !== 'undefined' && 'memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory Usage:', {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        });
      }
    };

    monitorCoreWebVitals();
    monitorResourcePerformance();
    monitorMemoryUsage();
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;