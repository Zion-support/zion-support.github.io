import { useState, useEffect, useCallback } from 'react';

interface PerformanceData {
  renderTime: number;
  memoryUsage: number;
  fps: number;
  isVisible: boolean;
}

interface UseEnhancedPerformanceReturn {
  performanceData: PerformanceData;
  optimizePerformance: () => void;
  measureRenderTime: (fn: () => void) => void;
}

export const useEnhancedPerformance = (): UseEnhancedPerformanceReturn => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    isVisible: true,
  });

  const measureRenderTime = useCallback((fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    setPerformanceData(prev => ({
      ...prev,
      renderTime: end - start,
    }));
  }, []);

  const optimizePerformance = useCallback(() => {
    // Force garbage collection if available
    if ((window as any).gc) {
      (window as any).gc();
    }
    
    // Update memory usage
    const memory = (performance as any).memory;
    if (memory) {
      setPerformanceData(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024,
      }));
    }
  }, []);

  useEffect(() => {
    const updateFPS = () => {
      let lastTime = performance.now();
      let frameCount = 0;

      const countFrames = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          setPerformanceData(prev => ({
            ...prev,
            fps: Math.round((frameCount * 1000) / (currentTime - lastTime)),
          }));
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(countFrames);
      };
      
      requestAnimationFrame(countFrames);
    };

    updateFPS();
  }, []);

  return {
    performanceData,
    optimizePerformance,
    measureRenderTime,
  };
};
