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
<<<<<<< HEAD
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Load web-vitals library dynamically
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        // Measure Core Web Vitals
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          console.log('CLS:', metric);
        });

        getFID((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          console.log('FID:', metric);
        });

        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          console.log('FCP:', metric);
        });

        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          console.log('LCP:', metric);
        });

        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          console.log('TTFB:', metric);
        });
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
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
    const measurePageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('Page load metrics:', {
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
          loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart)
        });
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor resource loading
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: any) => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map((r: any) => ({
          name: r.name,
          duration: Math.round(r.duration) + 'ms'
        })));
      }
    };

    // Monitor resources after a delay
    setTimeout(monitorResources, 5000);

    // Cleanup
    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  // Development mode - show metrics
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        {metrics.lcp && (
          <div className={`${metrics.lcp > 2500 ? 'text-red-400' : metrics.lcp > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
            LCP: {Math.round(metrics.lcp)}ms
          </div>
        )}
        {metrics.fid && (
          <div className={`${metrics.fid > 300 ? 'text-red-400' : metrics.fid > 100 ? 'text-yellow-400' : 'text-green-400'}`}>
            FID: {Math.round(metrics.fid)}ms
          </div>
        )}
        {metrics.cls && (
          <div className={`${metrics.cls > 0.25 ? 'text-red-400' : metrics.cls > 0.1 ? 'text-yellow-400' : 'text-green-400'}`}>
            CLS: {metrics.cls.toFixed(3)}
          </div>
        )}
        {metrics.fcp && (
          <div className={`${metrics.fcp > 3000 ? 'text-red-400' : metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
            FCP: {Math.round(metrics.fcp)}ms
          </div>
        )}
        {metrics.ttfb && (
          <div className={`${metrics.ttfb > 800 ? 'text-red-400' : metrics.ttfb > 600 ? 'text-yellow-400' : 'text-green-400'}`}>
            TTFB: {Math.round(metrics.ttfb)}ms
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
<<<<<<< HEAD
=======
export default PerformanceMonitor;
>>>>>>> cursor/analyze-improve-and-deploy-application-b200
=======
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    // Monitor Core Web Vitals
=======
    // Monitor performance metrics
>>>>>>> cursor/website-audit-and-update-with-deployment-1ef3
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
          }
        } else if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      }
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['paint'] });
    }

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Log metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return null;
};

export default PerformanceMonitor;
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-a281
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-cec7
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-1ef3
