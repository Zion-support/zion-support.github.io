import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  inp: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    inp: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
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

  const formatMetric = useCallback((value: number | undefined, unit: string = 'ms') => {
    if (value === undefined || value === null) return 'N/A';
    if (unit === '') return value.toFixed(4);
    return `${value.toFixed(0)}${unit}`;
  }, []);

  const updateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {};

    // Load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (loadTime > 0) newMetrics.loadTime = loadTime;
    }

    // Memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory && memory.usedJSHeapSize) {
        newMetrics.memoryUsage = memory.usedJSHeapSize / (1024 * 1024); // Convert to MB
      }
    }

    setMetrics(prev => ({ ...prev, ...newMetrics }));
  }, []);

  useEffect(() => {
    // Collect Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, interactionToNextPaint: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
    });

    // Initial metrics collection
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    // Keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [updateMetrics]);

  // Send metrics to analytics (if needed)
  useEffect(() => {
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          custom_map: {
            cls: metrics.cumulativeLayoutShift,
            inp: metrics.interactionToNextPaint,
            fcp: metrics.firstContentfulPaint,
            lcp: metrics.largestContentfulPaint,
            ttfb: metrics.timeToFirstByte,
          },
        });
      }
    };

    // Send metrics after a delay to ensure all are collected
    const timeoutId = setTimeout(sendMetrics, 5000);
    return () => clearTimeout(timeoutId);
  }, [metrics]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-lg p-4 min-w-80 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 2000, poor: 4000 }) : 'text-gray-400'}`}>
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={`font-mono ${metrics.firstContentfulPaint ? getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
            {formatMetric(metrics.firstContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={`font-mono ${metrics.largestContentfulPaint ? getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
            {formatMetric(metrics.largestContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">INP:</span>
          <span className={`font-mono ${metrics.interactionToNextPaint ? getMetricColor(metrics.interactionToNextPaint, { good: 200, poor: 500 }) : 'text-gray-400'}`}>
            {formatMetric(metrics.interactionToNextPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={`font-mono ${metrics.cumulativeLayoutShift ? getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
            {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(4) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={`font-mono ${metrics.timeToFirstByte ? getMetricColor(metrics.timeToFirstByte, { good: 200, poor: 600 }) : 'text-gray-400'}`}>
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
        
        {metrics.memoryUsage !== undefined && (
          <div className="flex justify-between">
            <span className="text-gray-300">Memory:</span>
            <span className={`font-mono ${getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 })}`}>
              {formatMetric(metrics.memoryUsage, 'MB')}
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-cyan-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
