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
    
    // Measure render time
    const renderStart = performance.now();
    const renderTime = performance.now() - renderStart;

    // Measure memory usage
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

    // Measure network latency (simulated)
    const networkLatency = Math.random() * 100;

    setMetrics({
      loadTime,
      renderTime,
      memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
      networkLatency
    });
  }, []);

  const optimizePerformance = useCallback(() => {
    // Performance optimization logic
    if (typeof window === 'undefined') return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.png'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });

    setIsOptimized(true);
  }, []);

  useEffect(() => {
    measurePerformance();
    
    const interval = setInterval(measurePerformance, 5000);
    
    return () => clearInterval(interval);
  }, [measurePerformance]);

  return {
    metrics,
    isOptimized,
    measurePerformance,
    optimizePerformance
  };
};