import React, { ReactNode } from 'react';

interface PerformanceMonitorProps {
  children: ReactNode;
  onMetricsUpdate?: (metrics: PerformanceEntry[]) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  onMetricsUpdate 
}) => {
  React.useEffect(() => {
    // Performance monitoring logic
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      onMetricsUpdate?.(entries);
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => {
      observer.disconnect();
    };
  }, [onMetricsUpdate]);

  return <>{children}</>;
};

export default PerformanceMonitor;