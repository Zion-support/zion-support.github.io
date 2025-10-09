
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  tbt: number | null;
  si: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
  reportInterval?: number;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
  reportInterval = 10000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    tbt: null,
    si: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  // Web Vitals measurement
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // First Meaningful Paint (FMP) - approximation
    const fmpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-meaningful-paint') {
          setMetrics(prev => ({ ...prev, fmp: entry.startTime }));
        }
      }
    });
    fmpObserver.observe({ entryTypes: ['paint'] });

    // Total Blocking Time (TBT) - approximation
    const tbtObserver = new PerformanceObserver((list) => {
      let totalBlockingTime = 0;
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'longtask') {
          totalBlockingTime += entry.duration - 50; // Tasks over 50ms contribute to TBT
        }
      }
      setMetrics(prev => ({ ...prev, tbt: totalBlockingTime }));
    });
    tbtObserver.observe({ entryTypes: ['longtask'] });

    // Speed Index (SI) - approximation using LCP
    const siObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, si: entry.startTime }));
        }
      }
    });
    siObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fmpObserver.disconnect();
      tbtObserver.disconnect();
      siObserver.disconnect();
    };
  }, []);

  // Resource timing analysis
  const analyzeResourceTiming = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const resources = performance.getEntriesByType('resource');
    const resourceMetrics = {
      totalResources: resources.length,
      totalSize: 0,
      slowResources: 0,
      cachedResources: 0,
    };

    resources.forEach((resource: any) => {
      resourceMetrics.totalSize += resource.transferSize || 0;
      if (resource.duration > 1000) resourceMetrics.slowResources++;
      if (resource.transferSize === 0) resourceMetrics.cachedResources++;
    });

    return resourceMetrics;
  }, []);

  // Memory usage monitoring
  const getMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return null;

    const memory = (performance as any).memory;
    return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
    };
  }, []);

  // Network information
  const getNetworkInfo = useCallback(() => {
    if (typeof window === 'undefined' || !('connection' in navigator)) return null;

    const connection = (navigator as any).connection;
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData,
    };
  }, []);

  // Performance score calculation
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp > 3000) score -= 30;
      else if (metrics.fcp > 1800) score -= 20;
      else if (metrics.fcp > 1000) score -= 10;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp > 4000) score -= 30;
      else if (metrics.lcp > 2500) score -= 20;
      else if (metrics.lcp > 1500) score -= 10;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid > 300) score -= 20;
      else if (metrics.fid > 100) score -= 10;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls > 0.25) score -= 20;
      else if (metrics.cls > 0.1) score -= 10;
    }

    return Math.max(0, score);
  }, []);

  // Report metrics
  const reportMetrics = useCallback(() => {
    if (!enableReporting) return;

    const performanceScore = calculatePerformanceScore(metrics);
    const resourceMetrics = analyzeResourceTiming();
    const memoryUsage = getMemoryUsage();
    const networkInfo = getNetworkInfo();

    const report = {
      timestamp: new Date().toISOString(),
      metrics,
      performanceScore,
      resourceMetrics,
      memoryUsage,
      networkInfo,
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // Send to analytics (replace with your analytics service)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        event_label: 'web_vitals',
        value: performanceScore,
        custom_map: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
        },
      });
    }

    // Callback for custom handling
    onMetricsUpdate?.(metrics);

    console.log('Performance Report:', report);
  }, [metrics, enableReporting, calculatePerformanceScore, analyzeResourceTiming, getMemoryUsage, getNetworkInfo, onMetricsUpdate]);

  useEffect(() => {
    const cleanup = measureWebVitals();
    
    // Report metrics periodically
    const interval = setInterval(reportMetrics, reportInterval);

    // Report metrics on page unload
    const handleBeforeUnload = () => {
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      cleanup?.();
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [measureWebVitals, reportMetrics, reportInterval]);

  // Toggle visibility for debugging
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  const performanceScore = calculatePerformanceScore(metrics);

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-4 text-white text-xs z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Performance Score:</span>
          <span className={performanceScore > 80 ? 'text-green-400' : performanceScore > 60 ? 'text-yellow-400' : 'text-red-400'}>
            {performanceScore}/100
          </span>
        </div>
        
        {metrics.fcp !== null && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span>{metrics.fcp.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.lcp !== null && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span>{metrics.lcp.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.fid !== null && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span>{metrics.fid.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span>{metrics.cls.toFixed(3)}</span>
          </div>
        )}
        
        {metrics.ttfb !== null && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span>{metrics.ttfb.toFixed(0)}ms</span>
          </div>
        )}
      </div>
      
      <div className="mt-2 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;