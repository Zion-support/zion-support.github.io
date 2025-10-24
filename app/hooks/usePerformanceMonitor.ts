<<<<<<< HEAD
import { Star } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  timeToInteractive: number
}
export const usePerformanceMonitor = () => {
  const metricsRef = useRef<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
  })
import { useState, useEffect } from 'react';

export function usePerformanceMonitor() {

  const [state, setState] = useState<string | null>(null);
  
<<<<<<< HEAD
  useEffect(() => {
    // Implementation here
    setState('initialized');
=======
  const [isMonitoringFPS, setIsMonitoringFPS] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
  }, []);
  
  return state;

export default usePerformanceMonitor;

  return null;
=======
export const usePerformanceMonitor = () => {
  // Performance monitoring logic would go here
  return {};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};