<<<<<<< HEAD
import React, { useEffect } from 'react',

interface PerformanceData {
  loadTime: number,
  domContentLoaded: number,
  firstPaint: number,
  firstContentfulPaint: number
}

interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceData) => void
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
      const paint = performance.getEntriesByType('paint'),
      
      const performanceData: PerformanceData = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      },
      
      if (onPerformanceData) {
        onPerformanceData(performanceData)
      }
    },

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
=======
import React, {_useEffect, _useState} from 'react';

interface PerformanceMetrics {_loadTime: number;
  renderTime: number;
  memoryUsage: number;}

const PerformanceMonitor: React.FC = () => {_const [metrics, _setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect__(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const _observer = new PerformanceObserver(list => {
        const _entries = list.getEntries();
        const _navigationEntry = entries.find(
          entry => entry.entryType === 'navigation'
        );

        if (navigationEntry) {
          setMetrics({
            loadTime:
              navigationEntry.loadEventEnd - navigationEntry.loadEventStart, _renderTime:
              navigationEntry.domContentLoadedEventEnd -
              navigationEntry.domContentLoadedEventStart, _memoryUsage:
              (window.performance as any).memory?.usedJSHeapSize || 0, });
        }
      });

      observer.observe({_entryTypes: ['navigation']});

      return () => observer.disconnect();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [onPerformanceData]),

<<<<<<< HEAD
  return null
},
=======
  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>Load: {_metrics.loadTime.toFixed(2)}ms</div>
      <div>Render: {_metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {_(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
    </div>
  );
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default PerformanceMonitor,