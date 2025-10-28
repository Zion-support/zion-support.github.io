'use client';

import React, { useEffect, memo, useCallback } from 'react';

// Performance API types
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceMonitoringProps {
  className?: string;
}

const PerformanceMonitoring: React.FC<PerformanceMonitoringProps> = memo(({ className = '' }) => {
  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
            
      // Send to analytics if needed
      if (window.gtag) {
        window.gtag('event', 'LCP', {
          event_category: 'Web Vitals'
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        const fid = fidEntry.processingStart - fidEntry.startTime;
                
        if (window.gtag) {
          window.gtag('event', 'FID', {
            event_category: 'Web Vitals'
          });
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const clsEntry = entry as LayoutShiftEntry;
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
                    
          if (window.gtag) {
            window.gtag('event', 'CLS', {
              event_category: 'Web Vitals'
            });
          }
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
                
        if (window.gtag) {
          window.gtag('event', 'FCP', {
            event_category: 'Web Vitals'
          });
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, []);

  // Monitor resource loading performance
  const monitorResourcePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 1000) { // Resources taking more than 1 second
          // Log slow resources
        }
      });
    });
    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => resourceObserver.disconnect();
  }, []);

  // Monitor memory usage
  const monitorMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const checkMemory = () => {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (memory) {
        const used = memory.usedJSHeapSize / 1024 / 1024; // MB
        const total = memory.totalJSHeapSize / 1024 / 1024; // MB
        const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB
        
        if (used / limit > 0.8) { // More than 80% memory usage
          // Log high memory usage
        }
      }
    };

    const interval = setInterval(checkMemory, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanupCoreWebVitals = monitorCoreWebVitals();
    const cleanupResourcePerformance = monitorResourcePerformance();
    const cleanupMemoryUsage = monitorMemoryUsage();

    return () => {
      cleanupCoreWebVitals?.();
      cleanupResourcePerformance?.();
      cleanupMemoryUsage?.();
    };
  }, [monitorCoreWebVitals, monitorResourcePerformance, monitorMemoryUsage]);

  return (
    <div className={`performance-monitoring ${className}`} style={{ display: 'none' }}>
      {/* This component doesn't render anything visible */}
    </div>
  );
});

PerformanceMonitoring.displayName = 'PerformanceMonitoring';

export default PerformanceMonitoring;