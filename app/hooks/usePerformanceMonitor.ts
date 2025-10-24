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
    }
  }, []);

  return metrics;
};
