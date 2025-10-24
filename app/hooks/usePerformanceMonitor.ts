<<<<<<< HEAD
import { useCallback, useEffect, useState, useRef } from 'react';
interface UsePerformanceMonitorOptions {
;
enabled?: boolean;
threshold?: number;
measureMemoryUsage?: boolean
}
};
interface PerformanceData {
;
fps: number;
memoryUsage: number;
loadTime: number;
renderTim,e: number,
}
};
;
export const usePerformanceMonitor = (options: UsePerformanceMonitorOptions = {,}) => {;
const [metrics, setMetrics] = useState<PerformanceData>({;
fps: 0,memoryUsage: 0,loadTime: 0,renderTime: 0,});
const [isMonitoringFPS, setIsMonitoringFPS] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
const measureMemoryUsage = useCallback(() => {;
if (typeof window !== 'undefined' && 'memory' in performance) {;
const memory = (performance as any).memory;
setMetrics(prev => ({
        ...prev,;
memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB)
      ,}))
=======
import { useEffect, useState } from 'react';

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            setMetrics(prev => ({
              ...prev,
              [entry.name]: entry.startTime
            }));
          }
        });
      });

      observer.observe({ entryTypes: ['paint'] });

      return () => observer.disconnect();
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
    }
  }, []);

  return metrics;
};
