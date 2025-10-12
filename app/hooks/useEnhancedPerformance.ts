import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

export function useEnhancedPerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });

  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure load time
    const loadTime = performance.now();

    // Measure memory usage
    const memoryUsage = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0;

    // Measure render time
    const renderTime = performance.now() - loadTime;

    setMetrics({
      loadTime,
      renderTime,
      memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
      networkLatency: 0 // This would be measured from actual network requests
    });
  }, []);

  const optimizePerformance = () => {
    setIsOptimized(true);
    
    // Performance optimization logic
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg'
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
    }
  };

  return {
    metrics,
    isOptimized,
    optimizePerformance
  };
}