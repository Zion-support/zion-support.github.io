import { useState, useEffect, useCallback } from 'react';

interface PerformanceData {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
}

interface UsePerformanceMonitorReturn {
  data: PerformanceData;
  isMonitoring: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
  resetData: () => void;
}

export const usePerformanceMonitor = (): UsePerformanceMonitorReturn => {
  const [data, setData] = useState<PerformanceData>({
    fps: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0,
  });
  
  const [isMonitoring, setIsMonitoring] = useState(false);

  const measureFPS = useCallback(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setData(prev => ({ ...prev, fps: frameCount }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (isMonitoring) {
        requestAnimationFrame(countFrames);
      }
    };
    
    if (isMonitoring) {
      countFrames();
    }
  }, [isMonitoring]);

  const measureMemory = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      
      setData(prev => ({ ...prev, memoryUsage }));
    }
  }, []);

  const measureNetworkLatency = useCallback(async () => {
    const start = performance.now();
    
    try {
      await fetch('/api/ping', { method: 'HEAD' });
      const latency = performance.now() - start;
      setData(prev => ({ ...prev, networkLatency: latency }));
    } catch (error) {
      console.warn('Network latency measurement failed:', error);
    }
  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const resetData = useCallback(() => {
    setData({
      fps: 0,
      memoryUsage: 0,
      renderTime: 0,
      networkLatency: 0,
    });
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      measureFPS();
      measureMemory();
      measureNetworkLatency();
      
      const interval = setInterval(() => {
        measureMemory();
        measureNetworkLatency();
      }, 1000);
      
      return () => clearInterval(interval);
    }
    return undefined;
  }, [isMonitoring, measureFPS, measureMemory, measureNetworkLatency]);

  return {
    data,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    resetData,
  };
};