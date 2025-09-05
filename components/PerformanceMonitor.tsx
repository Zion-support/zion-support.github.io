import React, { useEffect, useState } from 'react';

<<<<<<< HEAD
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

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
=======
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const measurePerformance = () => {
      // Measure Core Web Vitals
      if ('web-vitals' in window) {
        // This would be imported from web-vitals library
        console.log('Web Vitals measurement would be here');
      }
      
      // Measure page load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        console.log('Page load time:', loadTime);
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
  }, []);

  return null; // This component doesn't render anything visible
};

export default PerformanceMonitor;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
