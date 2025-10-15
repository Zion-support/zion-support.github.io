import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null;
  navigation: {
    loadEventEnd: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    loadEventStart: number;
  } | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps</PerformanceMonitorProps>> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics</PerformanceMetrics>>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    memory: null,
    navigation: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  // Get Core Web Vitals
  const getCoreWebVitals = useCallback(() => {
    const vitals: Partial<PerformanceMetrics</PerformanceMetrics>> = {};

    // First Contentful Paint (FCP)
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      vitals.fcp = fcpEntry.startTime;
    }

    // Largest Contentful Paint (LCP)
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      vitals.lcp = lcpEntries[lcpEntries.length - 1].startTime;
    }

    // First Input Delay (FID) - requires user interaction
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      vitals.fid = fidEntries[0].processingStart - fidEntries[0].startTime;
    }

    // Cumulative Layout Shift (CLS)
    const clsEntries = performance.getEntriesByType('layout-shift');
    let cls = 0;
    clsEntries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        cls += entry.value;
      }
    });
    vitals.cls = cls;

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      vitals.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    }

    // First Meaningful Paint (FMP) - approximation
    const paintEntries = performance.getEntriesByType('paint');
    const fmpEntry = paintEntries.find(entry => entry.name === 'first-meaningful-paint');
    if (fmpEntry) {
      vitals.fmp = fmpEntry.startTime;
    }

    return vitals;
  }, []);

  // Get memory usage
  const getMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit
      };
    }
    return null;
  }, []);

  // Get navigation timing
  const getNavigationTiming = useCallback(() => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      return {
        loadEventEnd: navigationEntry.loadEventEnd,
        domContentLoadedEventEnd: navigationEntry.domContentLoadedEventEnd,
        domContentLoadedEventStart: navigationEntry.domContentLoadedEventStart,
        loadEventStart: navigationEntry.loadEventStart
      };
    }
    return null;
  }, []);

  // Update metrics
  const updateMetrics = useCallback(() => {
    const vitals = getCoreWebVitals();
    const memory = getMemoryUsage();
    const navigation = getNavigationTiming();

    const newMetrics: PerformanceMetrics = {
      fcp: vitals.fcp || null,
      lcp: vitals.lcp || null,
      fid: vitals.fid || null,
      cls: vitals.cls || null,
      ttfb: vitals.ttfb || null,
      fmp: vitals.fmp || null,
      memory,
      navigation
    };

    setMetrics(newMetrics);

    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }

    if (logToConsole) {
      console.log('Performance Metrics:', newMetrics);
    }
  }, [getCoreWebVitals, getMemoryUsage, getNavigationTiming, onMetricsUpdate, logToConsole]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);

    // Initial metrics collection
    updateMetrics();

    // Set up observers for Core Web Vitals
    if ('PerformanceObserver' in window) {
      // LCP Observer
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // FID Observer
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({
              ...prev,
              fid: entry.processingStart - entry.startTime
            }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // CLS Observer
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let cls = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              cls += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }

    // Periodic monitoring
    const interval = setInterval(updateMetrics, 5000);
    
    return () => {
      clearInterval(interval);
    };
  }, [isMonitoring, updateMetrics]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Initialize monitoring on mount
  useEffect(() => {
    if (enableRealTimeMonitoring) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [enableRealTimeMonitoring, startMonitoring]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopMonitoring();
    };
  }, [stopMonitoring]);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    let score = 0;
    let factors = 0;

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp <= 1800) score += 100;
      else if (metrics.fcp <= 3000) score += 80;
      else if (metrics.fcp <= 4000) score += 60;
      else score += 40;
      factors++;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp <= 2500) score += 100;
      else if (metrics.lcp <= 4000) score += 80;
      else if (metrics.lcp <= 6000) score += 60;
      else score += 40;
      factors++;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid <= 100) score += 100;
      else if (metrics.fid <= 300) score += 80;
      else if (metrics.fid <= 500) score += 60;
      else score += 40;
      factors++;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls <= 0.1) score += 100;
      else if (metrics.cls <= 0.25) score += 80;
      else if (metrics.cls <= 0.4) score += 60;
      else score += 40;
      factors++;
    }

    return factors </= 1800) score += 100;
      else if (metrics.fcp <= 3000) score += 80;
      else if (metrics.fcp <= 4000) score += 60;
      else score += 40;
      factors++;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp <= 2500) score += 100;
      else if (metrics.lcp <= 4000) score += 80;
      else if (metrics.lcp <= 6000) score += 60;
      else score += 40;
      factors++;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid <= 100) score += 100;
      else if (metrics.fid <= 300) score += 80;
      else if (metrics.fid <= 500) score += 60;
      else score += 40;
      factors++;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls <= 0.1) score += 100;
      else if (metrics.cls <= 0.25) score += 80;
      else if (metrics.cls <= 0.4) score += 60;
      else score += 40;
      factors++;
    }

    return factors >> 0 ? Math.round(score / factors) : 0;
  }, [metrics]);

  const performanceScore = getPerformanceScore();

  return (
    <div className="performance-monitor"</div className="performance-monitor">>
      {enableRealTimeMonitoring && (
        <div className="performance-status"</div className="performance-status">>
          <div className={`status-indicator ${isMonitoring ? 'active' : 'inactive'}`}</div className={`status-indicator ${isMonitoring ? 'active' : 'inactive'}`}>>
            {isMonitoring ? '🟢 Monitoring' : '🔴 Stopped'}
          </div>
          <div className="performance-score"</div className="performance-score">>
            Score: {performanceScore}/100
          </div>
        </div>
      )}
      
      <div className="metrics-grid"</div className="metrics-grid">>
        <div className="metric"</div className="metric">>
          <span className="metric-label"</span className="metric-label">>FCP:</span>
          <span className="metric-value"</span className="metric-value">>
            {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric"</div className="metric">>
          <span className="metric-label"</span className="metric-label">>LCP:</span>
          <span className="metric-value"</span className="metric-value">>
            {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric"</div className="metric">>
          <span className="metric-label"</span className="metric-label">>FID:</span>
          <span className="metric-value"</span className="metric-value">>
            {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric"</div className="metric">>
          <span className="metric-label"</span className="metric-label">>CLS:</span>
          <span className="metric-value"</span className="metric-value">>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        <div className="metric"</div className="metric">>
          <span className="metric-label"</span className="metric-label">>TTFB:</span>
          <span className="metric-value"</span className="metric-value">>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="metric"</div className="metric">>
          <span className="metric-label"</span className="metric-label">>FMP:</span>
          <span className="metric-value"</span className="metric-value">>
            {metrics.fmp ? `${metrics.fmp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
      </div>

      {metrics.memory && (
        <div className="memory-usage"</div className="memory-usage">>
          <h</h>4>Memory Usage</h4>
          <div className="memory-metric"</div className="memory-metric">>
            <spa</spa>n>Used: {(metrics.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB</span>
          </div>
          <div className="memory-metric"</div className="memory-metric">>
            <spa</spa>n>Total: {(metrics.memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB</span>
          </div>
          <div className="memory-metric"</div className="memory-metric">>
            <spa</spa>n>Limit: {(metrics.memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB</span>
          </div>
        </div>
      )}

      <style jsx</style jsx>>{`
        .performance-monitor {
          position: fixed;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 10px;
          border-radius: 8px;
          font-family: monospace;
          font-size: 12px;
          z-index: 9999;
          max-width: 300px;
        }

        .performance-status {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #333;
        }

        .status-indicator {
          font-weight: bold;
        }

        .status-indicator.active {
          color: #4ade80;
        }

        .status-indicator.inactive {
          color: #ef4444;
        }

        .performance-score {
          font-weight: bold;
          color: #60a5fa;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5px;
          margin-bottom: 10px;
        }

        .metric {
          display: flex;
          justify-content: space-between;
        }

        .metric-label {
          color: #9ca3af;
        }

        .metric-value {
          color: #f3f4f6;
          font-weight: bold;
        }

        .memory-usage {
          border-top: 1px solid #333;
          padding-top: 10px;
        }

        .memory-usage h4 {
          margin: 0 0 5px 0;
          color: #60a5fa;
        }

        .memory-metric {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
        }
      `}</style>
    </div>
  );
};

export default AdvancedPerformanceMonitor;""'"'