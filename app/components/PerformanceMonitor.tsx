import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Load Web Vitals
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
        });
        
        getFID((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
        });
        
        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
        });
        
        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
        });
        
        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
        });
      } catch (error) {
        console.error('Failed to load Web Vitals:', error);
      }
    };

    loadWebVitals();

    // Monitor memory usage if available
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
        });
      }
    };

    // Monitor memory every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 30000);

    // Monitor page load performance
    const monitorPageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('Page load performance:', {
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
          loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart)
        });
      }
    };

    // Monitor after page load
    if (document.readyState === 'complete') {
      monitorPageLoad();
    } else {
      window.addEventListener('load', monitorPageLoad);
    }

    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('load', monitorPageLoad);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-xs font-mono z-50">
      <div className="mb-2 text-cyan-400 font-semibold">Performance Metrics</div>
      <div className="space-y-1">
        {metrics.lcp && (
          <div>
            LCP: {Math.round(metrics.lcp)}ms
          </div>
        )}
        {metrics.fid && (
          <div>
            FID: {Math.round(metrics.fid)}ms
          </div>
        )}
        {metrics.cls && (
          <div>
            CLS: {metrics.cls.toFixed(3)}
          </div>
        )}
        {metrics.fcp && (
          <div>
            FCP: {Math.round(metrics.fcp)}ms
          </div>
        )}
        {metrics.ttfb && (
          <div>
            TTFB: {Math.round(metrics.ttfb)}ms
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;