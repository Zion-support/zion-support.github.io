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
  reset: () => void;
}

export const useEnhancedPerformance = (): UseEnhancedPerformanceReturn => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });

  const [isOptimized, setIsOptimized] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const startTime = performance.now();
    
    // Measure load time
    const loadTime = performance.timing?.loadEventEnd 
      ? performance.timing.loadEventEnd - performance.timing.navigationStart 
      : 0;

    // Measure render time
    const renderTime = performance.now() - startTime;

    // Measure memory usage (if available)
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

    // Measure FPS (simplified)
    let fps = 0;
    let lastTime = performance.now();
    let frameCount = 0;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (fps === 0) {
        requestAnimationFrame(measureFPS);
      }
    };

    measureFPS();

    setMetrics({
      loadTime,
      renderTime,
      memoryUsage,
      fps,
    });
  }, []);

  const optimize = useCallback(() => {
    // Implement performance optimizations
    if (typeof window === 'undefined') return;

    // Enable hardware acceleration
    document.body.style.transform = 'translateZ(0)';
    
    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      document.head.appendChild(link);
    });

    setIsOptimized(true);
  }, []);

  const reset = useCallback(() => {
    setMetrics({
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0,
    });
    setIsOptimized(false);
  }, []);

  useEffect(() => {
    measurePerformance();
    
    const interval = setInterval(measurePerformance, 5000);
    
    return () => clearInterval(interval);
  }, [measurePerformance]);

  return {
    metrics,
    isOptimized,
    optimize,
    reset,
  };
};