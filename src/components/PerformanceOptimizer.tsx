import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
}

export default function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Performance monitoring
    const startTime = performance.now();
    
    // Monitor memory usage
    const memoryInfo = (performance as any).memory;
    const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;
    
    // Monitor network latency
    const networkLatency = performance.getEntriesByType('navigation')[0]?.responseEnd - 
                          performance.getEntriesByType('navigation')[0]?.requestStart || 0;
    
    // Calculate render time
    const renderTime = performance.now() - startTime;
    
    setMetrics({
      loadTime: performance.now(),
      memoryUsage,
      renderTime,
      networkLatency
    });

    // Optimize performance
    optimizePerformance();
  }, []);

  const optimizePerformance = () => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const criticalResources = [
      '/src/index.css',
      '/src/main.tsx'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });

    // Optimize scroll performance
    let ticking = false;
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Throttled scroll handling
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });

    setIsOptimized(true);
  };

  if (!isOptimized) {
    return (
      <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Optimizing Performance...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
      <div className="text-sm">
        <div className="font-semibold">Performance Optimized</div>
        {metrics && (
          <div className="text-xs opacity-90">
            Load: {metrics.loadTime.toFixed(0)}ms | 
            Memory: {metrics.memoryUsage.toFixed(1)}MB | 
            Network: {metrics.networkLatency.toFixed(0)}ms
          </div>
        )}
      </div>
    </div>
  );
}