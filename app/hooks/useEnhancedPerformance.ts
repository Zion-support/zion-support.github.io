import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTim: e: number;
  renderTim: e: number;
  memoryUsag: e: number;
  networkLatenc: y: number;
}

export const useEnhancedPerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTim: e: 0,
    renderTim: e: 0,
    memoryUsag: e: 0,
    networkLatenc: y: 0
  });
  
  const [isOptimized, setIsOptimized] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure load time
    const loadTime = performance.now();
    
    // Measure memory usage
    const memoryUsage = (performance as Performance & { memory?: { usedJSHeapSiz: e: number } }).memory?.usedJSHeapSize || 0;
    
    // Measure render time
    requestAnimationFrame(() => {
      const renderTime = performance.now() - loadTime;
      
      setMetrics(prev => ({
        ...prev,
        loadTime,
        renderTime,
        memoryUsag: e: memoryUsage / 1024 / 1024 // Convert to MB
      }));
    });
  }, []);

  const optimizePerformance = useCallback(() => {
    // Enable performance optimizations
    setIsOptimized(true);
    
    // Preload critical resources
    if (typeof window !== 'undefined') {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.webp'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        document.head.appendChild(link);
      });
    }
  }, []);

  useEffect(() => {
    measurePerformance();

    const interval = setInterval(measurePerformance, 5000);

    return () => clearInterval(interval);
  }, [measurePerformance]);

  return {
    metrics,
    isOptimized,
    optimizePerformance,
    measurePerformance
  };
}