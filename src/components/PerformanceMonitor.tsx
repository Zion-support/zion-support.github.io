import React, { useEffect } from 'react';
import { usePerformance } from '../hooks/usePerformance';

interface PerformanceMonitorProps {
  enabled?: boolean;
  logToConsole?: boolean;
  sendToAnalytics?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = process.env.NODE_ENV === 'development',
  logToConsole = true,
  sendToAnalytics = false
}) => {
  const { measurePerformance, logPerformance } = usePerformance();

  useEffect(() => {
    if (!enabled) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Re-measure performance when page becomes visible
        setTimeout(logPerformance, 1000);
      }
    };

    const handleBeforeUnload = () => {
      // Log final performance metrics before page unload
      logPerformance();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled, logPerformance]);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (logToConsole) {
          console.log(`Performance Entry: ${entry.name}`, {
            duration: entry.duration,
            startTime: entry.startTime,
            entryType: entry.entryType
          });
        }

        if (sendToAnalytics) {
          // Send to analytics service
          // analytics.track('performance_entry', {
          //   name: entry.name,
          //   duration: entry.duration,
          //   startTime: entry.startTime,
          //   entryType: entry.entryType
          // });
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint', 'largest-contentful-paint'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    return () => {
      observer.disconnect();
    };
  }, [enabled, logToConsole, sendToAnalytics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;