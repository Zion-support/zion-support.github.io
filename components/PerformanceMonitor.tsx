import React, { useEffect } from 'react';

interface PerformanceData {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceData) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof performance === 'undefined') {
      return;
    }

    const measurePerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const performanceData: PerformanceData = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          largestContentfulPaint: 0,
          firstInputDelay: 0,
          cumulativeLayoutShift: 0,
        };

        // Measure LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          performanceData.largestContentfulPaint = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            performanceData.firstInputDelay = (entry as any).processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Measure CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          performanceData.cumulativeLayoutShift = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Call the callback with performance data
        if (onPerformanceData) {
          onPerformanceData(performanceData);
        }

        // Log performance data in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', performanceData);
        }

        // Cleanup observers after 10 seconds
        setTimeout(() => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        }, 10000);

      } catch (error) {
        console.error('Error measuring performance:', error);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [onPerformanceData]);

  return null;
};

export default PerformanceMonitor;