import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  loadTime?: number;
  domContentLoaded?: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = process.env.NODE_ENV === 'development',
  showMetrics = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  const updateMetrics = useCallback((newMetrics: PerformanceMetrics) => {
    setMetrics(prev => ({ ...prev, ...newMetrics }));
    onMetricsUpdate?.(newMetrics);
  }, [onMetricsUpdate]);

  useEffect(() => {
    if (!enabled) return;

    // Only show in development or when performance issues are detected
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    // Get basic performance metrics
    const getBasicMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const basicMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        ttfb: navigation.responseStart - navigation.requestStart,
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
      };

      updateMetrics(basicMetrics);
    };

    // Get Core Web Vitals using web-vitals library if available
    const getWebVitals = async () => {
      try {
        // Dynamic import to avoid bundle size impact
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        getCLS((metric) => {
          updateMetrics({ cls: metric.value });
        });
        
        getFID((metric) => {
          updateMetrics({ fid: metric.value });
        });
        
        getFCP((metric) => {
          updateMetrics({ fcp: metric.value });
        });
        
        getLCP((metric) => {
          updateMetrics({ lcp: metric.value });
        });
        
        getTTFB((metric) => {
          updateMetrics({ ttfb: metric.value });
        });
      } catch (error) {
        console.warn('Web Vitals library not available:', error);
      }
    };

    // Monitor resource loading
    const monitorResources = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) { // Resources taking more than 1 second
              console.warn('Slow resource detected:', {
                name: resourceEntry.name,
                duration: resourceEntry.duration,
                size: resourceEntry.transferSize
              });
            }
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
    };

    // Monitor long tasks
    const monitorLongTasks = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 50) { // Tasks longer than 50ms
            console.warn('Long task detected:', {
              duration: entry.duration,
              startTime: entry.startTime
            });
          }
        });
      });

      observer.observe({ entryTypes: ['longtask'] });
    };

    // Initialize monitoring
    getBasicMetrics();
    getWebVitals();
    monitorResources();
    monitorLongTasks();

    // Check for performance issues
    const checkPerformanceIssues = () => {
      const issues: string[] = [];
      
      if (metrics.lcp && metrics.lcp > 2500) {
        issues.push('LCP is above 2.5s threshold');
      }
      
      if (metrics.fid && metrics.fid > 100) {
        issues.push('FID is above 100ms threshold');
      }
      
      if (metrics.cls && metrics.cls > 0.1) {
        issues.push('CLS is above 0.1 threshold');
      }
      
      if (issues.length > 0) {
        console.warn('Performance issues detected:', issues);
        setIsVisible(true);
      }
    };

    // Check performance after a delay to allow metrics to load
    const timeoutId = setTimeout(checkPerformanceIssues, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [enabled, updateMetrics, metrics.lcp, metrics.fid, metrics.cls]);

  const getPerformanceGrade = (metric: number, thresholds: { good: number; needsImprovement: number }) => {
    if (metric <= thresholds.good) return 'Good';
    if (metric <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  const formatMetric = (value?: number, unit: string = 'ms') => {
    if (value === undefined) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  if (!enabled || !isVisible) {
    return null;
  }

  return (
    <div 
      className="performance-monitor"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '15px',
        borderRadius: '8px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 1000,
        minWidth: '300px',
        maxWidth: '400px'
      }}
      role="region"
      aria-label="Performance metrics"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '14px' }}>Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <div>
          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Core Web Vitals</div>
          <div>LCP: {formatMetric(metrics.lcp, 'ms')}</div>
          <div style={{ fontSize: '10px', color: '#ccc' }}>
            {metrics.lcp ? getPerformanceGrade(metrics.lcp, { good: 2500, needsImprovement: 4000 }) : 'N/A'}
          </div>
          
          <div>FID: {formatMetric(metrics.fid, 'ms')}</div>
          <div style={{ fontSize: '10px', color: '#ccc' }}>
            {metrics.fid ? getPerformanceGrade(metrics.fid, { good: 100, needsImprovement: 300 }) : 'N/A'}
          </div>
          
          <div>CLS: {formatMetric(metrics.cls)}</div>
          <div style={{ fontSize: '10px', color: '#ccc' }}>
            {metrics.cls ? getPerformanceGrade(metrics.cls, { good: 0.1, needsImprovement: 0.25 }) : 'N/A'}
          </div>
        </div>
        
        <div>
          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Loading Metrics</div>
          <div>FCP: {formatMetric(metrics.fcp, 'ms')}</div>
          <div>TTFB: {formatMetric(metrics.ttfb, 'ms')}</div>
          <div>Load: {formatMetric(metrics.loadTime, 'ms')}</div>
          <div>DOM Ready: {formatMetric(metrics.domContentLoaded, 'ms')}</div>
        </div>
      </div>
      
      <div style={{ marginTop: '10px', fontSize: '10px', color: '#ccc' }}>
        <div>Green: Good | Yellow: Needs Improvement | Red: Poor</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;