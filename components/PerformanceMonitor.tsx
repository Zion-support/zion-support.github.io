import React, { useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showMetrics = false, 
  logMetrics = false, 
  onThresholdExceeded 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

// Declare Performance and PerformanceNavigationTiming types for TypeScript
declare global {
  interface Performance {
    getEntriesByType(type: string): PerformanceEntry[];
  }
  
  interface PerformanceNavigationTiming extends PerformanceEntry {
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    loadEventStart: number;
    loadEventEnd: number;
    fetchStart: number;
  }
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const navigationEntry = entries.find(
          entry => entry.entryType === 'navigation'
        );

        if (navigationEntry) {
          setMetrics({
            loadTime:
              navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
            renderTime:
              navigationEntry.domContentLoadedEventEnd -
              navigationEntry.domContentLoadedEventStart,
            memoryUsage:
              (window.performance as any).memory?.usedJSHeapSize || 0,
          });
        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();
    }
  }, []);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
    </div>
  );
};

export default PerformanceMonitor;
