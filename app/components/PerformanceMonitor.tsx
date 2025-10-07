import React, { type ReactNode, useEffect } from 'react';

interface PerformanceMonitorProps {
  children: ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
<<<<<<< HEAD
            console.log('CLS:', (entry as LayoutShift).value);
=======
            const clsEntry = entry as PerformanceEntry & { value: number };
            console.log('CLS:', clsEntry.value);
>>>>>>> cursor/fix-errors-and-merge-to-main-5a0a
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch {
        // Fallback for browsers that don't support all entry types
        console.log('Performance monitoring partially available');
      }

      // Monitor page load time
      const handleLoad = () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
      };

      window.addEventListener('load', handleLoad);

      return () => {
        observer.disconnect();
        window.removeEventListener('load', handleLoad);
      };
    }
    
    // Return undefined for cleanup when performance API is not available
    return undefined;
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;
