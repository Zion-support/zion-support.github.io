import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  enableReporting?: boolean;
  enableLongTaskMonitoring?: boolean;
}

interface WebVitalsMetrics {
  [key: string]: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  enableReporting = true,
  enableLongTaskMonitoring = true 
}) => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});
  const [, setLongTasks] = useState<PerformanceEntry[]>([]);

  useEffect(() => {
    // Basic performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Page load time:', navEntry.loadEventEnd - navEntry.loadEventStart);
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
    
    return () => {};
  }, []);

  useEffect(() => {
    // Long task monitoring
    if (enableLongTaskMonitoring && typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        const longTasks = list.getEntries().filter(entry => entry.duration > 50);
        setLongTasks(prev => [...prev, ...longTasks]);
      });
      
      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        return () => longTaskObserver.disconnect();
      } catch (error) {
        console.warn('Long task monitoring not supported:', error);
        return () => {};
      }
    }
    return () => {};
  }, [enableLongTaskMonitoring]);

  return (
    <>
      {children}
      {enableReporting && (
        <div className="performance-monitor fixed top-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs font-mono z-50">
          <div>Performance Monitor</div>
          <div>Metrics: {Object.keys(metrics).length}</div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;