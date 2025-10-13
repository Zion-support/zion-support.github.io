import { Star } from 'lucide-react';
import { Monitor } from 'lucide-react';
<<<<<<< HEAD


=======
import { useState, useEffect } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
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
<<<<<<< HEAD
=======
import { useState, useEffect } from 'react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa

export function usePerformanceMonitor() {

  const [state, setState] = useState<string | null>(null);
  
  useEffect(() => {
    // Implementation here
    setState('initialized');
  }, []);
  
  return state;

export default usePerformanceMonitor;

  return null;
};