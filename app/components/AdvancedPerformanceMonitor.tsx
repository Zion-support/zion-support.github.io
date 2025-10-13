import React, { useEffect } from 'react';

interface AdvancedPerformanceMonitorProps {
  showInProduction?: boolean;
  enableReporting?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({
  showInProduction = false,
  enableReporting = false
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDevelopment = process.env.NODE_ENV === 'development';
      
      if (isDevelopment || showInProduction) {
        // Monitor performance metrics
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (enableReporting) {
              // Send to analytics service
              console.log('Performance metric:', entry);
            }
          }
        });

        observer.observe({ entryTypes: ['measure', 'navigation', 'paint', 'longtask'] });

        return () => {
          observer.disconnect();
        };
      }
    }
  }, [showInProduction, enableReporting]);

  return null;
};

export default AdvancedPerformanceMonitor;