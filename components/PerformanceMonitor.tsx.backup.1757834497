import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  logMetrics?: boolean;
  onThresholdExceeded?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor = ({ 
  showMetrics = false, 
  logMetrics = false, 
  onThresholdExceeded 
}: PerformanceMonitorProps) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
        
        if (navigationEntry) {
          const navEntry = navigationEntry as PerformanceNavigationTiming;
          const newMetrics = {
            loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
            renderTime: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            memoryUsage: (window.performance as any).memory?.usedJSHeapSize || 0
          };
          setMetrics(newMetrics);
          
          if (logMetrics) {
            console.log('Performance metrics:', newMetrics);
          }
          
          if (onThresholdExceeded) {
            onThresholdExceeded(newMetrics);
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();
    }
  }, []);

  if (!showMetrics || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
    </div>
  );
};

export default PerformanceMonitor;
      };
    };
,
    // Measure performance after page load,
    if (document.readyState === 'complete') {,
      measurePerformance()
    } else {,
      window.addEventListener('load', measurePerformance)
    };
,
    return () => {,
      window.removeEventListener('load', measurePerformance)
    };
  }, [onPerformanceData]),
,
  return null
};
,
export default PerformanceMonitor,
