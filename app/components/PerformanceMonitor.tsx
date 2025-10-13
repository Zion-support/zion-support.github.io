import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  memoryUsage?: number;
  interactionToNextPaint?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  const getMetricColor = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  }, []);

  const formatMetric = useCallback((value: number | undefined, unit: string = 'ms') => {
    if (value === undefined || value === null) return 'N/A';
    return `${value.toFixed(0)}${unit}`;
  }, []);

  const updateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {};

    // Load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (loadTime > 0) newMetrics.loadTime = loadTime;
    }

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory) {
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
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


interface PerformanceMetrics {
  loadTime: number | null;
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  memoryUsage?: number;
  interactionToNextPaint?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        {isVisible ? 'Hide' : 'Show'} Performance
      </button>
      
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
              <span className={`font-mono ${metrics.fcp ? getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${metrics.lcp ? getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FID:</span>
              <span className={`font-mono ${metrics.fid ? getMetricColor(metrics.fid, { good: 100, poor: 300 }) : 'text-gray-400'}`}>
                {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${metrics.cls !== null ? getCLSColor(metrics.cls) : 'text-gray-400'}`}>
                {metrics.cls !== null ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
  const getMetricColor = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
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

    setMetrics(newMetrics);
  }, []);

  useEffect(() => {
    updateMetrics();
    
    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);
    
    return () => clearInterval(interval);
  }, [updateMetrics]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  const getMetricColor = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  }, []);

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
      
              <span className={`font-mono ${metrics.ttfb ? getMetricColor(metrics.ttfb, { good: 200, poor: 500 }) : 'text-gray-400'}`}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <div className="flex justify-between">
                <span>Green: Good</span>
                <span>Yellow: Needs Improvement</span>
                <span>Red: Poor</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
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
      <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-cyan-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
