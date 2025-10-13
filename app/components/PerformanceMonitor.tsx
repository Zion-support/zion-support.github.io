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
};

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <>
      {isVisible && (
        <div className="absolute bottom-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FID:</span>
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

        <h3 className="text-lg font-semibold text-white">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
        <div className="flex justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={getMetricColor(metrics.loadTime || 0, { good: 2000, poor: 4000 })}>
=======
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 2000, poor: 4000 }) : 'text-gray-400'}`}>
>>>>>>> cursor/analyze-improve-and-deploy-application-48cd
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
            {formatMetric(metrics.firstContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
            {formatMetric(metrics.largestContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
        
        {metrics.memoryUsage !== undefined && (
          <div className="flex justify-between">
            <span className="text-gray-300">Memory:</span>
              {formatMetric(metrics.memoryUsage, 'MB')}
            </span>
          </div>
        )}
      </div>
      
  );
>>>>>>> origin/main
};

export default PerformanceMonitor;
=======
  useEffect(() => {
    // Collect performance metrics
    const collectMetrics = () => {
      const newMetrics: PerformanceMetrics = {};

      // Load time
      if (performance.timing) {
        newMetrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      }

      // Time to First Byte
      if (performance.timing) {
        newMetrics.timeToFirstByte = performance.timing.responseStart - performance.timing.navigationStart;
      }

      // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }

      setMetrics(newMetrics);
    };

    collectMetrics();

    // Web Vitals
    if ('web-vitals' in window) {
      // This would be populated by the WebVitalsTracker component
      // For now, we'll use placeholder values
    }
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 min-w-80 text-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-cyan-400">Performance Monitor</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">Load Time:</span>
            <span className={`text-sm font-mono ${getMetricColor(metrics.loadTime || 0, { good: 2000, poor: 4000 })}`}>
              {formatMetric(metrics.loadTime)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">TTFB:</span>
            <span className={`text-sm font-mono ${getMetricColor(metrics.timeToFirstByte || 0, { good: 200, poor: 600 })}`}>
              {formatMetric(metrics.timeToFirstByte)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">Memory:</span>
            <span className={`text-sm font-mono ${getMetricColor(metrics.memoryUsage || 0, { good: 50, poor: 100 })}`}>
              {formatMetric(metrics.memoryUsage, 'MB')}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">FCP:</span>
            <span className="text-sm font-mono text-gray-400">
              {formatMetric(metrics.firstContentfulPaint)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">LCP:</span>
            <span className="text-sm font-mono text-gray-400">
              {formatMetric(metrics.largestContentfulPaint)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">FID:</span>
            <span className="text-sm font-mono text-gray-400">
              {formatMetric(metrics.firstInputDelay)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">CLS:</span>
            <span className="text-sm font-mono text-gray-400">
              {formatMetric(metrics.cumulativeLayoutShift)}
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-700">
          <p className="text-xs text-gray-400">
            Press Ctrl+Shift+P to toggle
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> cursor/analyze-improve-and-deploy-application-c36b
=======
      <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-cyan-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> cursor/analyze-improve-and-deploy-application-48cd
