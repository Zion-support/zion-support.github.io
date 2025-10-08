import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  renderTime: number;
  loadTime: number;
  memoryUsage: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    renderTime: 0,
    loadTime: 0,
    memoryUsage: 0,
  });

  const [performanceScore, setPerformanceScore] = useState(0);

  useEffect(() => {
    const measurePerformance = () => {
      // Measure Core Web Vitals
      if ('web-vitals' in window) {
        // This would be implemented with the web-vitals library
        // For now, we'll use basic performance API
      }

      // Measure render time
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;

      // Measure load time
      const loadTime = performance.timing ? 
        performance.timing.loadEventEnd - performance.timing.navigationStart : 0;

      // Measure memory usage (if available)
      const memoryUsage = (performance as any).memory ? 
        (performance as any).memory.usedJSHeapSize : 0;

      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const lcp = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : null;

      // Get FCP
      const fcpEntries = performance.getEntriesByType('paint');
      const fcp = fcpEntries.find(entry => entry.name === 'first-contentful-paint');
      const fcpValue = fcp ? fcp.startTime : null;

      // Get TTFB
      const ttfb = performance.timing ? 
        performance.timing.responseStart - performance.timing.navigationStart : null;

      setMetrics({
        lcp,
        fid: null, // FID requires user interaction
        cls: null, // CLS requires more complex measurement
        fcp: fcpValue,
        ttfb,
        renderTime,
        loadTime,
        memoryUsage,
      });

      // Calculate performance score
      let score = 100;
      if (lcp && lcp > 2500) score -= 20;
      if (fcpValue && fcpValue > 1800) score -= 15;
      if (ttfb && ttfb > 600) score -= 10;
      if (renderTime > 100) score -= 10;
      if (loadTime > 3000) score -= 15;

      setPerformanceScore(Math.max(0, score));
    };

    // Measure performance after component mounts
    const timeoutId = setTimeout(measurePerformance, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono max-w-xs">
      <h3 className="text-sm font-bold mb-2">Performance Monitor</h3>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Score:</span>
          <span className={performanceScore >= 80 ? 'text-green-400' : performanceScore >= 60 ? 'text-yellow-400' : 'text-red-400'}>
            {performanceScore}/100
          </span>
        </div>
        
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp <= 2500 ? 'text-green-400' : 'text-red-400'}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp <= 1800 ? 'text-green-400' : 'text-red-400'}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb <= 600 ? 'text-green-400' : 'text-red-400'}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span>Render:</span>
          <span className={metrics.renderTime <= 100 ? 'text-green-400' : 'text-red-400'}>
            {metrics.renderTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Load:</span>
          <span className={metrics.loadTime <= 3000 ? 'text-green-400' : 'text-red-400'}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        {metrics.memoryUsage > 0 && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className="text-blue-400">
              {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;