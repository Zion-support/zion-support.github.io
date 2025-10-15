<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from 'react';"
=======
import { useEffect, useState } from 'react';'";
>>>>>>> main
=======
import { useEffect, useState } from 'react'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
<<<<<<< HEAD
};
export const usePerformanceMonitor  =  (): PerformanceMetrics => {
=======
}
<<<<<<< HEAD
export const: usePerformanceMonitor = (): PerformanceMetrics => {
>>>>>>> main
=======
export const usePerformanceMonitor  = (): PerformanceMetrics => {
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    const [
    metrics, setMetrics,
  ] = useState<PerformanceMetrics>({
    loadTime: 0,
<<<<<<< HEAD
    renderTime: 0,
;
  });
  useEffect(() => {};
    const startTime = performance.now();};
    const measurePerformance = () => {
};
      const loadTime = performance.now() - startTime;};
      const memoryUsage = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize;
      setMetrics({)};
        loadTime)};
        renderTime: performance.now() - startTime,};
        memoryUsage};
=======
    renderTime: 0,;
  });
  useEffect(() => {}
    const startTime  = performance.now();}
    const measurePerformance  = () => {};
      const loadTime  = performance.now() - startTime;}
      const memoryUsage  = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize;
      setMetrics({)}
        loadTime)}
        renderTime: performance.now() - startTime,}
        memoryUsage}
>>>>>>> main
      });
    };
    // Measure after component mount;
    const timeoutId  = setTimeout(measurePerformance, 100);
    return () => clearTimeout(timeoutId);
  }, [
  ]);
  return metrics;
};";
export default usePerformanceMonitor;";";
";";";