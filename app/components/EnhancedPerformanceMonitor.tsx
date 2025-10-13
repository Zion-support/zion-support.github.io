import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  connectionSpeed: string | null;
}

interface PerformanceThresholds {
  cls: { good: number; needsImprovement: number };
  inp: { good: number; needsImprovement: number };
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

const thresholds: PerformanceThresholds = {
  cls: { good: 0.1, needsImprovement: 0.25 },
  inp: { good: 200, needsImprovement: 500 },
  fcp: { good: 1800, needsImprovement: 3000 },
  lcp: { good: 2500, needsImprovement: 4000 },
  ttfb: { good: 800, needsImprovement: 1800 },
};

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    memoryUsage: null,
    connectionSpeed: null,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const getPerformanceRating = useCallback((metric: keyof PerformanceThresholds, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const threshold = thresholds[metric];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }, []);

  const getConnectionSpeed = useCallback((): string => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection.effectiveType) {
        return connection.effectiveType;
      }
    }
    return 'unknown';
  }, []);

  const getMemoryUsage = useCallback((): number | null => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return memory.usedJSHeapSize / (1024 * 1024); // Convert to MB
    }
    return null;
  }, []);

  const logMetric = useCallback((name: string, value: number, rating: string) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, {
        value,
        rating,
        timestamp: new Date().toISOString(),
      });
    }

    // Send to analytics service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('event', 'performance_metric', {
          metric_name: name,
          metric_value: value,
          metric_rating: rating,
        });
      }

      // Example: Custom analytics endpoint
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value,
          rating,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(console.error);
    }
  }, []);

  const checkPerformanceIssues = useCallback((newMetrics: PerformanceMetrics) => {
    const issues: string[] = [];

    if (newMetrics.lcp && getPerformanceRating('lcp', newMetrics.lcp) !== 'good') {
      issues.push('Largest Contentful Paint is slow. Consider optimizing images and critical resources.');
    }

    if (newMetrics.inp && getPerformanceRating('inp', newMetrics.inp) !== 'good') {
      issues.push('Interaction to Next Paint is high. Consider reducing JavaScript execution time.');
    }

    if (newMetrics.cls && getPerformanceRating('cls', newMetrics.cls) !== 'good') {
      issues.push('Cumulative Layout Shift detected. Ensure images and ads have dimensions.');
    }

    if (newMetrics.fcp && getPerformanceRating('fcp', newMetrics.fcp) !== 'good') {
      issues.push('First Contentful Paint is slow. Optimize critical rendering path.');
    }

    if (newMetrics.ttfb && getPerformanceRating('ttfb', newMetrics.ttfb) !== 'good') {
      issues.push('Time to First Byte is slow. Check server response time.');
    }

    if (newMetrics.memoryUsage && newMetrics.memoryUsage > 50) {
      issues.push('High memory usage detected. Consider optimizing memory-intensive operations.');
    }

    setAlerts(issues);
  }, []);

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => {
      const rating = getPerformanceRating('cls', metric.value);
      setMetrics(prev => ({ ...prev, cls: metric.value }));
      logMetric('CLS', metric.value, rating);
    });

    onINP((metric) => {
      const rating = getPerformanceRating('inp', metric.value);
      setMetrics(prev => ({ ...prev, inp: metric.value }));
      logMetric('INP', metric.value, rating);
    });

    onFCP((metric) => {
      const rating = getPerformanceRating('fcp', metric.value);
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
      logMetric('FCP', metric.value, rating);
    });

    onLCP((metric) => {
      const rating = getPerformanceRating('lcp', metric.value);
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
      logMetric('LCP', metric.value, rating);
    });

    onTTFB((metric) => {
      const rating = getPerformanceRating('ttfb', metric.value);
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      logMetric('TTFB', metric.value, rating);
    });

    // Measure additional metrics
    setMetrics(prev => ({
      ...prev,
      memoryUsage: getMemoryUsage(),
      connectionSpeed: getConnectionSpeed(),
    }));

    // Check for performance issues after a delay
    const timer = setTimeout(() => {
      setMetrics(currentMetrics => {
        checkPerformanceIssues(currentMetrics);
        return currentMetrics;
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [getPerformanceRating, logMetric, checkPerformanceIssues, getMemoryUsage, getConnectionSpeed]);

  // Toggle visibility with keyboard shortcut (Ctrl+Shift+P)
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

  if (!isVisible) {
    return null;
  }

  const formatMetric = (value: number | null, unit: string = 'ms'): string => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  const getMetricColor = (metric: keyof PerformanceThresholds, value: number | null): string => {
    if (value === null) return 'text-gray-500';
    const rating = getPerformanceRating(metric, value);
    switch (rating) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ×
        </button>
      </div>

      <div className="space-y-4">
        {/* Core Web Vitals */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Core Web Vitals
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={getMetricColor('lcp', metrics.lcp)}>
                {formatMetric(metrics.lcp)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>INP:</span>
              <span className={getMetricColor('inp', metrics.inp)}>
                {formatMetric(metrics.inp)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={getMetricColor('cls', metrics.cls)}>
                {formatMetric(metrics.cls, '')}
              </span>
            </div>
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={getMetricColor('fcp', metrics.fcp)}>
                {formatMetric(metrics.fcp)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={getMetricColor('ttfb', metrics.ttfb)}>
                {formatMetric(metrics.ttfb)}
              </span>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Additional Metrics
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Memory:</span>
              <span className="text-blue-500">
                {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Connection:</span>
              <span className="text-blue-500">
                {metrics.connectionSpeed || 'N/A'}
              </span>
            </div>
          </div>
        </div>

        {/* Performance Alerts */}
        {alerts.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-red-600 dark:text-red-400 mb-2">
              Performance Issues
            </h4>
            <div className="space-y-1">
              {alerts.map((alert, index) => (
                <div key={index} className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                  {alert}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
          Press Ctrl+Shift+P to toggle this monitor
        </div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;