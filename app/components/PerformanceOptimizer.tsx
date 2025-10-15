import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  bundleSize?: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        
        setMetrics({
          loadTime,
          renderTime,
          memoryUsage: (performance as any).memory?.usedJSHeapSize,
        });
      });
    };

    // Run after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Optimize performance
    const optimizePerformance = () => {
      // Preload critical resources
      const criticalResources = [
        '/assets/js/react-core-CJ0xMsQr.js',
        '/assets/js/vendor-BaHXxb8k.js',
        '/assets/css/index-hrxPPjoU.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.js') ? 'script' : 'style';
        document.head.appendChild(link);
      });

      // Enable service worker for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker registration failed, continue without it
        });
      }

      setIsOptimized(true);
    };

    // Run optimization after a short delay
    const timeoutId = setTimeout(optimizePerformance, 1000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      {metrics && (
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
          <div>Render Time: {metrics.renderTime.toFixed(2)}ms</div>
          {metrics.memoryUsage && (
            <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
          )}
        </div>
      )}
      <div className="mt-2">
        Status: {isOptimized ? '✅ Optimized' : '⏳ Optimizing...'}
      </div>
    </div>
  );
};

export default PerformanceOptimizer;