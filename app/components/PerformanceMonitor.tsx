import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  renderTime: number | null;
  memoryUsage: number | null;
  networkLatency: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    renderTime: null,
    memoryUsage: null,
    networkLatency: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      if (navigation) {
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || null;
        const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || null;
        const ttfb = navigation.responseStart - navigation.requestStart;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        // Memory usage (if available)
        const memoryUsage = (performance as any).memory?.usedJSHeapSize || null;
        
        // Network latency estimation
        const networkLatency = navigation.responseStart - navigation.requestStart;
        
        setMetrics({
          fcp: fcp ? Math.round(fcp) : null,
          lcp: lcp ? Math.round(lcp) : null,
          fid: null, // Would need user interaction to measure
          cls: null, // Would need layout shift observer
          ttfb: Math.round(ttfb),
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          memoryUsage: memoryUsage ? Math.round(memoryUsage / 1024 / 1024) : null,
          networkLatency: Math.round(networkLatency),
        });
      }
    };

    // Measure after initial load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Show/hide based on performance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-xs z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {metrics.fcp && (
          <div>FCP: <span className="text-green-400">{metrics.fcp}ms</span></div>
        )}
        {metrics.lcp && (
          <div>LCP: <span className="text-green-400">{metrics.lcp}ms</span></div>
        )}
        {metrics.ttfb && (
          <div>TTFB: <span className="text-green-400">{metrics.ttfb}ms</span></div>
        )}
        {metrics.loadTime && (
          <div>Load: <span className="text-green-400">{metrics.loadTime}ms</span></div>
        )}
        {metrics.renderTime && (
          <div>Render: <span className="text-green-400">{metrics.renderTime}ms</span></div>
        )}
        {metrics.memoryUsage && (
          <div>Memory: <span className="text-green-400">{metrics.memoryUsage}MB</span></div>
        )}
        {metrics.networkLatency && (
          <div>Network: <span className="text-green-400">{metrics.networkLatency}ms</span></div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;