import React, { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';
'use client';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        onCLS(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
        onINP(console.log);
      }
    };

    // Monitor resource performance
    const monitorResourcePerformance = () => {
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              const resourceEntry = entry as PerformanceResourceTiming;
              if (resourceEntry.duration > 1000) { // Log slow resources
                console.warn('Slow resource detected:', {
                  name: resourceEntry.name,
                  duration: resourceEntry.duration,
                  size: resourceEntry.transferSize,
                });
              }
            }
          });
        });
        
        observer.observe({ entryTypes: ['resource'] });
        
        return () => observer.disconnect();
      }
    };

    // Monitor long tasks
    const monitorLongTasks = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            console.warn('Long task detected:', {
              duration: entry.duration,
              startTime: entry.startTime,
            });
          });
        });
        
        observer.observe({ entryTypes: ['longtask'] });
        
        return () => observer.disconnect();
      }
    };

    // Initialize monitoring
    monitorCoreWebVitals();
    const cleanupResource = monitorResourcePerformance();
    const cleanupLongTasks = monitorLongTasks();

    // Cleanup
    return () => {
      cleanupResource?.();
      cleanupLongTasks?.();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;