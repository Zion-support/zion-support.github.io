import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null
  });

  const [isVisible, setIsVisible] = useState(false);

  const updateMetric = useCallback((name: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      const updated = { ...prev, [name]: value };
      onMetricsUpdate?.(updated);
      return updated;
    });
  }, [onMetricsUpdate]);

  const reportMetric = useCallback((name: string, value: number) => {
    if (enableReporting && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: name,
        non_interaction: true,
      });
    }
  }, [enableReporting]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically import web-vitals to avoid build issues
    import('web-vitals').then((webVitals: any) => {
      // Measure Core Web Vitals
      if (webVitals.getCLS) {
        webVitals.getCLS((metric: any) => {
          updateMetric('CLS', metric.value);
          reportMetric('CLS', metric.value);
        });
      }

      if (webVitals.getFID) {
        webVitals.getFID((metric: any) => {
          updateMetric('FID', metric.value);
          reportMetric('FID', metric.value);
        });
      }

      if (webVitals.getFCP) {
        webVitals.getFCP((metric: any) => {
          updateMetric('FCP', metric.value);
          reportMetric('FCP', metric.value);
        });
      }

      if (webVitals.getLCP) {
        webVitals.getLCP((metric: any) => {
          updateMetric('LCP', metric.value);
          reportMetric('LCP', metric.value);
        });
      }

      if (webVitals.getTTFB) {
        webVitals.getTTFB((metric: any) => {
          updateMetric('TTFB', metric.value);
          reportMetric('TTFB', metric.value);
        });
      }
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    // Monitor memory usage
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }
    };

    const memoryInterval = setInterval(checkMemory, 30000);

    return () => {
      observer.disconnect();
      clearInterval(memoryInterval);
    };
  }, [updateMetric, reportMetric]);

  // Keyboard shortcut to toggle performance panel
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  const getScore = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white text-sm max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.LCP, { good: 2500, poor: 4000 })}>
            {metrics.LCP ? `${Math.round(metrics.LCP)}ms` : 'Loading...'}
          </span>
          <span className={`text-xs ${getScoreColor(metrics.LCP, { good: 2500, poor: 4000 })}`}>
            {getScore(metrics.LCP, { good: 2500, poor: 4000 })}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>FID:</span>
          <span className={getScoreColor(metrics.FID, { good: 100, poor: 300 })}>
            {metrics.FID ? `${Math.round(metrics.FID)}ms` : 'Loading...'}
          </span>
          <span className={`text-xs ${getScoreColor(metrics.FID, { good: 100, poor: 300 })}`}>
            {getScore(metrics.FID, { good: 100, poor: 300 })}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.CLS, { good: 0.1, poor: 0.25 })}>
            {metrics.CLS ? metrics.CLS.toFixed(3) : 'Loading...'}
          </span>
          <span className={`text-xs ${getScoreColor(metrics.CLS, { good: 0.1, poor: 0.25 })}`}>
            {getScore(metrics.CLS, { good: 0.1, poor: 0.25 })}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.FCP, { good: 1800, poor: 3000 })}>
            {metrics.FCP ? `${Math.round(metrics.FCP)}ms` : 'Loading...'}
          </span>
          <span className={`text-xs ${getScoreColor(metrics.FCP, { good: 1800, poor: 3000 })}`}>
            {getScore(metrics.FCP, { good: 1800, poor: 3000 })}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.TTFB, { good: 800, poor: 1800 })}>
            {metrics.TTFB ? `${Math.round(metrics.TTFB)}ms` : 'Loading...'}
          </span>
          <span className={`text-xs ${getScoreColor(metrics.TTFB, { good: 800, poor: 1800 })}`}>
            {getScore(metrics.TTFB, { good: 800, poor: 1800 })}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;