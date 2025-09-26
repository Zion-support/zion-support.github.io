import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      const startTime = performance.now();
      
      // Measure load time
      const loadTime = performance.timing ? 
        performance.timing.loadEventEnd - performance.timing.navigationStart : 0;
      
      // Measure render time
      const renderTime = performance.now() - startTime;
      
      // Measure memory usage (if available)
      const memoryUsage = (performance as any).memory ? 
        (performance as any).memory.usedJSHeapSize : 0;
      
      // Simulate network latency measurement
      const networkLatency = performance.timing ? 
        performance.timing.responseEnd - performance.timing.requestStart : 0;

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        networkLatency
      });

      // Apply optimizations based on metrics
      if (loadTime > 3000 || renderTime > 100) {
        applyOptimizations();
      }
    };

    const applyOptimizations = () => {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.dataset.src) {
          imageElement.src = imageElement.dataset.src;
        }
      });

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        document.head.appendChild(link);
      });

      setIsOptimized(true);
    };

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="performance-optimizer">
      {children}
      {process.env.NODE_ENV === 'development' && metrics && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
          <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
          <div>Render: {metrics.renderTime.toFixed(0)}ms</div>
          <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</div>
          <div>Network: {metrics.networkLatency.toFixed(0)}ms</div>
          {isOptimized && <div className="text-green-400">✓ Optimized</div>}
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;