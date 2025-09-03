import React, { useEffect } from 'react';

interface PerformanceEntry {
  entryType: string;
  startTime: number;
  processingStart?: number;
  value?: number;
  hadRecentInput?: boolean;
}

interface PerformanceObserver {
  observe(options: { entryTypes: string[] }): void;
  disconnect(): void;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new (window as { PerformanceObserver: new (callback: (list: { getEntries(): PerformanceEntry[] }) => void) => PerformanceObserver }).PerformanceObserver((list: { getEntries(): PerformanceEntry[] }) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // eslint-disable-next-line no-console
            console.log('LCP:', entry.startTime);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // Fallback for browsers that don't support LCP
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new (window as { PerformanceObserver: new (callback: (list: { getEntries(): PerformanceEntry[] }) => void) => PerformanceObserver }).PerformanceObserver((list: { getEntries(): PerformanceEntry[] }) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            // eslint-disable-next-line no-console
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
      });

      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch {
        // Fallback for browsers that don't support FID
      }

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new (window as { PerformanceObserver: new (callback: (list: { getEntries(): PerformanceEntry[] }) => void) => PerformanceObserver }).PerformanceObserver((list: { getEntries(): PerformanceEntry[] }) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value || 0;
          }
        }
        // eslint-disable-next-line no-console
        console.log('CLS:', clsValue);
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch {
        // Fallback for browsers that don't support CLS
      }

      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
export default PerformanceMonitor;