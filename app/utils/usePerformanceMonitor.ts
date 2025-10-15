import { useEffect, useState } from 'react'";"
interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
export const usePerformanceMonitor  = (): PerformanceMetrics => {
    const [
    metrics, setMetrics,
  ] = useState<PerformanceMetrics>({
    loadTime: 0,
      });
    };
    // Measure after component mount;
    const timeoutId  = setTimeout(measurePerformance, 100);
    return () => clearTimeout(timeoutId);
  }, [
  ]);
  return metrics;
};";"
export default usePerformanceMonitor;";";"
";";";