import { useEffect, useState, useCallback } from 'react';

interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  isSlowConnection: boolean;
}

interface PerformanceOptions {
  enableMemoryMonitoring?: boolean;
  enableFPSMonitoring?: boolean;
  enableConnectionMonitoring?: boolean;
  updateInterval?: number;
}

export const usePerformance = (options: PerformanceOptions = {}) => {
  const {
    enableMemoryMonitoring = true,
    enableFPSMonitoring = true,
    enableConnectionMonitoring = true,
    updateInterval = 1000
  } = options;

  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    isSlowConnection: false
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const measureLoadTime = useCallback(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation.loadEventEnd - navigation.loadEventStart;
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      return (performance as any).memory.usedJSHeapSize;
    }
    return 0;
  }, []);

  const measureFPS = useCallback(() => {
    let lastTime = performance.now();
    let frameCount = 0;
    let fps = 0;

    const measureFrame = () => {
      const currentTime = performance.now();
      frameCount++;
      
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (isMonitoring) {
        requestAnimationFrame(measureFrame);
      }
    };

    requestAnimationFrame(measureFrame);
    return fps;
  }, [isMonitoring]);

  const checkConnectionSpeed = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
    }
    return false;
  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const getPerformanceScore = useCallback(() => {
    const { loadTime, renderTime, memoryUsage, fps, isSlowConnection } = performanceData;
    
    let score = 100;
    
    // Deduct points for slow load time
    if (loadTime > 3000) score -= 30;
    else if (loadTime > 2000) score -= 20;
    else if (loadTime > 1000) score -= 10;
    
    // Deduct points for slow render time
    if (renderTime > 100) score -= 20;
    else if (renderTime > 50) score -= 10;
    
    // Deduct points for high memory usage
    if (memoryUsage > 100 * 1024 * 1024) score -= 20; // 100MB
    else if (memoryUsage > 50 * 1024 * 1024) score -= 10; // 50MB
    
    // Deduct points for low FPS
    if (fps < 30) score -= 30;
    else if (fps < 45) score -= 15;
    else if (fps < 60) score -= 5;
    
    // Deduct points for slow connection
    if (isSlowConnection) score -= 15;
    
    return Math.max(0, Math.min(100, score));
  }, [performanceData]);

  const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = [];
    const { loadTime, renderTime, memoryUsage, fps, isSlowConnection } = performanceData;
    
    if (loadTime > 2000) {
      recommendations.push('Consider code splitting and lazy loading');
    }
    
    if (renderTime > 50) {
      recommendations.push('Optimize component rendering with React.memo');
    }
    
    if (memoryUsage > 50 * 1024 * 1024) {
      recommendations.push('Check for memory leaks and optimize data structures');
    }
    
    if (fps < 45) {
      recommendations.push('Reduce animations and optimize DOM operations');
    }
    
    if (isSlowConnection) {
      recommendations.push('Implement progressive loading and image optimization');
    }
    
    return recommendations;
  }, [performanceData]);

  useEffect(() => {
    if (!isMonitoring) return;

    const updatePerformanceData = () => {
      setPerformanceData(prev => ({
        ...prev,
        loadTime: measureLoadTime(),
        renderTime: performance.now(),
        memoryUsage: enableMemoryMonitoring ? measureMemoryUsage() : prev.memoryUsage,
        fps: enableFPSMonitoring ? measureFPS() : prev.fps,
        isSlowConnection: enableConnectionMonitoring ? checkConnectionSpeed() : prev.isSlowConnection
      }));
    };

    const interval = setInterval(updatePerformanceData, updateInterval);
    return () => clearInterval(interval);
  }, [
    isMonitoring,
    measureLoadTime,
    measureMemoryUsage,
    measureFPS,
    checkConnectionSpeed,
    enableMemoryMonitoring,
    enableFPSMonitoring,
    enableConnectionMonitoring,
    updateInterval
  ]);

  return {
    performanceData,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    getPerformanceScore,
    getPerformanceRecommendations
  };
};