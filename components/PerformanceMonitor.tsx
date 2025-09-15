import React, { useEffect, useState, useCallback } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
  renderTime: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  reportToAnalytics?: boolean;
  showMetrics?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  reportToAnalytics = true,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: null,
    renderTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      onMetricsUpdate?.(updated);
      return updated;
    });
  }, [onMetricsUpdate]);

  const reportMetric = useCallback((name: string, value: number) => {
    if (reportToAnalytics && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: 'Performance',
        non_interaction: true,
      });
    }
  }, [reportToAnalytics]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const startTime = performance.now();

    // Measure page load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      updateMetrics({ loadTime });
    };

    // Measure render time
    const measureRenderTime = () => {
      const renderTime = performance.now() - startTime;
      updateMetrics({ renderTime });
    };

    // Web Vitals
    getCLS((metric) => {
      updateMetrics({ cls: metric.value });
      reportMetric('CLS', metric.value);
    });

<<<<<<< HEAD
    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: [', 'paint', 'largest-contentful-'paint', 'first-'input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that 'don', 't support all entry types
      observer.observe({ entryTypes: ['paint'] });
    }
=======
    getFID((metric) => {
      updateMetrics({ fid: metric.value });
      reportMetric('FID', metric.value);
    });
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e

    getFCP((metric) => {
      updateMetrics({ fcp: metric.value });
      reportMetric('FCP', metric.value);
    });

    getLCP((metric) => {
      updateMetrics({ lcp: metric.value });
      reportMetric('LCP', metric.value);
    });

    getTTFB((metric) => {
      updateMetrics({ ttfb: metric.value });
      reportMetric('TTFB', metric.value);
    });

    // Measure load and render times
    if (document.readyState === 'complete') {
      measureLoadTime();
      measureRenderTime();
    } else {
      window.addEventListener('load', measureLoadTime);
      window.addEventListener('DOMContentLoaded', measureRenderTime);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measureLoadTime);
      window.removeEventListener('DOMContentLoaded', measureRenderTime);
    };
  }, [updateMetrics, reportMetric]);

<<<<<<< HEAD
  // Send metrics to analytics (if in production)
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // Send to Google Analytics or other analytics service
      if (typeof gtag !== 'undefined') {
        Object.entries(metrics).forEach(([keyvalue]) => {
          if (value !== null) {
            gtag(', 'event', 'performance_metric'{
              metric_name: key,
              metric_value: Math.round(value),
              event_category: 'Performance',
            });
          }
        });
      }
    }
  }[metrics]);

  // 'Don', 't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
=======
  const getPerformanceGrade = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  if (!showMetrics) return null;
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          {isVisible ? '▼' : '▶'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">CLS:</span>
            <span className={`font-medium ${
              metrics.cls !== null && metrics.cls <= 0.1 ? 'text-green-600' :
              metrics.cls !== null && metrics.cls <= 0.25 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {formatMetric(metrics.cls, '')}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">FID:</span>
            <span className={`font-medium ${
              metrics.fid !== null && metrics.fid <= 100 ? 'text-green-600' :
              metrics.fid !== null && metrics.fid <= 300 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {formatMetric(metrics.fid)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">FCP:</span>
            <span className={`font-medium ${
              metrics.fcp !== null && metrics.fcp <= 1800 ? 'text-green-600' :
              metrics.fcp !== null && metrics.fcp <= 3000 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {formatMetric(metrics.fcp)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">LCP:</span>
            <span className={`font-medium ${
              metrics.lcp !== null && metrics.lcp <= 2500 ? 'text-green-600' :
              metrics.lcp !== null && metrics.lcp <= 4000 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {formatMetric(metrics.lcp)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
            <span className={`font-medium ${
              metrics.ttfb !== null && metrics.ttfb <= 800 ? 'text-green-600' :
              metrics.ttfb !== null && metrics.ttfb <= 1800 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {formatMetric(metrics.ttfb)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
            <span className="font-medium text-blue-600">
              {formatMetric(metrics.loadTime)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Render Time:</span>
            <span className="font-medium text-blue-600">
              {formatMetric(metrics.renderTime)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;