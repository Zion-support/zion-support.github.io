import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  componentCount: number;
  bundleSize: number;
  renderTime: number;
}

export default function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    componentCount: 0,
    bundleSize: 0,
    renderTime: 0
  });

  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      const startTime = performance.now();
      
      // Count components on page
      const componentCount = document.querySelectorAll('[data-component]').length;
      
      // Estimate bundle size (this would be more accurate with webpack stats)
      const bundleSize = document.querySelectorAll('script[src]').length * 50; // Rough estimate
      
      // Measure render time
      const renderTime = performance.now() - startTime;
      
      // Measure page load time
      const loadTime = performance.timing ? 
        performance.timing.loadEventEnd - performance.timing.navigationStart : 0;

      setMetrics({
        loadTime: Math.round(loadTime),
        componentCount,
        bundleSize,
        renderTime: Math.round(renderTime)
      });

      // Check if performance is optimized
      const isOptimized = loadTime < 3000 && componentCount < 50 && renderTime < 100;
      setIsOptimized(isOptimized);
    };

    // Measure after initial render
    setTimeout(measurePerformance, 100);

    // Set up performance observer
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        measurePerformance();
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <div className="text-sm font-semibold mb-2 flex items-center">
        <div className={`w-2 h-2 rounded-full mr-2 ${isOptimized ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
        Performance Monitor
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime < 3000 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Components:</span>
          <span className={metrics.componentCount < 50 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.componentCount}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span className={metrics.renderTime < 100 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.renderTime}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Bundle Size:</span>
          <span className={metrics.bundleSize < 2000 ? 'text-green-400' : 'text-yellow-400'}>
            ~{metrics.bundleSize}KB
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600">
        <div className={`text-xs font-semibold ${isOptimized ? 'text-green-400' : 'text-yellow-400'}`}>
          {isOptimized ? '✅ Optimized' : '⚠️ Needs Optimization'}
        </div>
      </div>
    </div>
  );
}