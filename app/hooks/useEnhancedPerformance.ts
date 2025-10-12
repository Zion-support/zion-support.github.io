import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

export const useEnhancedPerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });
  
  const [isOptimized, setIsOptimized] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure load time
    const loadTime = performance.now();
    
    // Measure memory usage
    const memoryUsage = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0;
    
    // Measure render time
    requestAnimationFrame(() => {
      const renderTime = performance.now() - loadTime;
      
      setMetrics(prev => ({
        ...prev,
        loadTime,
        renderTime,
        memoryUsage: memoryUsage / 1024 / 1024 // Convert to MB
      });
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
</PerformanceMetrics>