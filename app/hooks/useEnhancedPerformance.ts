import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface UseEnhancedPerformanceReturn {
  metrics: PerformanceMetrics;
  isOptimized: boolean;
  optimize: () => void;
}

const useEnhancedPerformance = (): UseEnhancedPerformanceReturn => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 60
  });

  const [isOptimized, setIsOptimized] = useState(false);

  const measurePerformance = useCallback(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    
    const renderTime = performance.now();
    
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
    
    // Simple FPS calculation
    let fps = 60;
    let lastTime = performance.now();
    const calculateFPS = () => {
      const currentTime = performance.now();
      fps = 1000 / (currentTime - lastTime);
      lastTime = currentTime;
    };
    
    calculateFPS();

    setMetrics({
      loadTime,
      renderTime,
      memoryUsage,
      fps
    });
  }, []);

  const optimize = useCallback(() => {
    // Implement performance optimizations
    if (typeof window !== 'undefined') {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => {
        const image = img as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
        }
      });

      // Preload critical resources
      const criticalResources = document.querySelectorAll('[data-preload]');
      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.getAttribute('href') || '';
        link.as = resource.getAttribute('as') || 'script';
        document.head.appendChild(link);
      });

      setIsOptimized(true);
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    
    const interval = setInterval(measurePerformance, 1000);
    
    return () => clearInterval(interval);
  }, [measurePerformance]);

  return {
    metrics,
    isOptimized,
    optimize
  };
};

export default useEnhancedPerformance;