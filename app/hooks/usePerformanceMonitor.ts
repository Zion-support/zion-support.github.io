import { useCallback, useEffect, useRef, useState } from 'react';

interface UsePerformanceMonitorOptions {
  measureRenderTime?: boolean;
  measureMemoryUsage?: boolean;
  measureFPS?: boolean;
}

interface UsePerformanceMonitorReturn {
  performanceData: {
    renderTime: number;
    memoryUsage: number;
    fps: number;
  };
  measureRenderTime: (fn: () => void) => void;
  measureMemoryUsage: () => number;
  startFPSMonitoring: () => void;
  stopFPSMonitoring: () => void;
}

export const usePerformanceMonitor = (options: UsePerformanceMonitorOptions = {}): UsePerformanceMonitorReturn => {
  const [performanceData, setPerformanceData] = useState({
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [isMonitoringFPS, setIsMonitoringFPS] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  const measureRenderTime = useCallback((fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    setPerformanceData(prev => ({
      ...prev,
      renderTime: end - start,
    }));
  }, []);

  const measureMemoryUsage = useCallback(() => {
    const memory = (performance as any).memory;
    if (memory) {
      const memoryUsage = memory.usedJSHeapSize / 1024 / 1024;
      setPerformanceData(prev => ({
        ...prev,
        memoryUsage,
      }));
      return memoryUsage;
    }
    return 0;
  }, []);

  const startFPSMonitoring = useCallback(() => {
    setIsMonitoringFPS(true);
  }, []);

  const stopFPSMonitoring = useCallback(() => {
    setIsMonitoringFPS(false);
  }, []);

  useEffect(() => {
    if (!isMonitoringFPS) return;

    const countFrames = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      
      if (currentTime - lastTimeRef.current >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
        setPerformanceData(prev => ({
          ...prev,
          fps,
        }));
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };
    
    requestAnimationFrame(countFrames);
  }, [isMonitoringFPS]);

  useEffect(() => {
    if (options.measureMemoryUsage) {
      measureMemoryUsage();
    }
  }, [measureMemoryUsage, options.measureMemoryUsage]);

  return {
    performanceData,
    measureRenderTime,
    measureMemoryUsage,
    startFPSMonitoring,
    stopFPSMonitoring,
  };
};

export default usePerformanceMonitor;