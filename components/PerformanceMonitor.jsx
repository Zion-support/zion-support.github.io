import { useEffect, useState } from 'react';

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = () => {
      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        const timing = {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          request: navigation.responseEnd - navigation.requestStart,
          response: navigation.responseEnd - navigation.responseStart,
          dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          load: navigation.loadEventEnd - navigation.loadEventStart,
          total: navigation.loadEventEnd - navigation.navigationStart
        };

        setMetrics(prev => ({
          ...prev,
          timing
        }));

        // Track performance metrics
        if (typeof window !== 'undefined' && window.gtag) {
          Object.entries(timing).forEach(([key, value]) => {
            window.gtag('event', 'performance_metric', {
              event_category: 'Performance',
              event_label: key,
              value: Math.round(value)
            });
          });
        }
      }

      // Get resource timing
      const resources = performance.getEntriesByType('resource');
      const resourceMetrics = {
        totalResources: resources.length,
        totalSize: resources.reduce((acc, resource) => acc + (resource.transferSize || 0), 0),
        slowResources: resources.filter(resource => resource.duration > 1000).length
      };

      setMetrics(prev => ({
        ...prev,
        resources: resourceMetrics
      }));

      // Get memory usage (if available)
      if (performance.memory) {
        const memoryMetrics = {
          used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024), // MB
          total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024), // MB
          limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024) // MB
        };

        setMetrics(prev => ({
          ...prev,
          memory: memoryMetrics
        }));
      }

      // Track Core Web Vitals
      if ('PerformanceObserver' in window) {
        // LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({
            ...prev,
            lcp: Math.round(lastEntry.startTime)
          }));

          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(lastEntry.startTime)
            });
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics(prev => ({
              ...prev,
              fid: Math.round(entry.processingStart - entry.startTime)
            }));

            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(entry.processingStart - entry.startTime)
              });
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          setMetrics(prev => ({
            ...prev,
            cls: Math.round(clsValue * 1000) / 1000
          }));

          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000)
            });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Toggle visibility (for debugging)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'production') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg max-w-sm text-xs font-mono z-50">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      {metrics.timing && (
        <div className="mb-2">
          <div className="font-semibold text-cyan-400">Timing (ms)</div>
          <div>DNS: {metrics.timing.dns?.toFixed(2)}</div>
          <div>TCP: {metrics.timing.tcp?.toFixed(2)}</div>
          <div>Request: {metrics.timing.request?.toFixed(2)}</div>
          <div>Response: {metrics.timing.response?.toFixed(2)}</div>
          <div>DOM: {metrics.timing.dom?.toFixed(2)}</div>
          <div>Load: {metrics.timing.load?.toFixed(2)}</div>
          <div className="font-semibold">Total: {metrics.timing.total?.toFixed(2)}</div>
        </div>
      )}

      {metrics.resources && (
        <div className="mb-2">
          <div className="font-semibold text-purple-400">Resources</div>
          <div>Count: {metrics.resources.totalResources}</div>
          <div>Size: {(metrics.resources.totalSize / 1024).toFixed(2)} KB</div>
          <div>Slow: {metrics.resources.slowResources}</div>
        </div>
      )}

      {metrics.memory && (
        <div className="mb-2">
          <div className="font-semibold text-green-400">Memory (MB)</div>
          <div>Used: {metrics.memory.used}</div>
          <div>Total: {metrics.memory.total}</div>
          <div>Limit: {metrics.memory.limit}</div>
        </div>
      )}

      {(metrics.lcp || metrics.fid || metrics.cls) && (
        <div>
          <div className="font-semibold text-yellow-400">Web Vitals</div>
          {metrics.lcp && <div>LCP: {metrics.lcp}ms</div>}
          {metrics.fid && <div>FID: {metrics.fid}ms</div>}
          {metrics.cls && <div>CLS: {metrics.cls}</div>}
        </div>
      )}

      <div className="mt-2 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
}