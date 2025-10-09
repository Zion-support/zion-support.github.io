import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

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

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => {
        const updated = { ...prev, ...newMetrics };
        onMetricsUpdate?.(updated);
        return updated;
      });
    };

    // Measure Core Web Vitals
    getCLS((metric) => {
      updateMetrics({ CLS: metric.value });
      if (enableReporting) {
        reportMetric('CLS', metric.value);
      }
    });

    getFID((metric) => {
      updateMetrics({ FID: metric.value });
      if (enableReporting) {
        reportMetric('FID', metric.value);
      }
    });

    getFCP((metric) => {
      updateMetrics({ FCP: metric.value });
      if (enableReporting) {
        reportMetric('FCP', metric.value);
      }
    });

    getLCP((metric) => {
      updateMetrics({ LCP: metric.value });
      if (enableReporting) {
        reportMetric('LCP', metric.value);
      }
    });

    getTTFB((metric) => {
      updateMetrics({ TTFB: metric.value });
      if (enableReporting) {
        reportMetric('TTFB', metric.value);
      }
    });

    // Monitor performance issues
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          
          if (loadTime > 3000) {
            console.warn('Slow page load detected:', loadTime);
            reportMetric('slow_load', loadTime);
          }
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor memory usage
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
          console.warn('High memory usage detected');
          reportMetric('high_memory', memory.usedJSHeapSize);
        }
      };

      setInterval(checkMemory, 30000); // Check every 30 seconds
    }

    return () => {
      observer.disconnect();
    };
  }, [onMetricsUpdate, enableReporting]);

  const reportMetric = (name: string, value: number) => {
    // Report to Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        metric_delta: Math.round(value),
      });
    }

    // Report to custom analytics
    if (typeof window !== 'undefined' && 'dataLayer' in window) {
      (window as any).dataLayer.push({
        event: 'performance_metric',
        metric_name: name,
        metric_value: value,
        timestamp: Date.now(),
      });
    }
  };

  const getScore = (metric: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds: Record<string, { good: number; poor: number }> = {
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 600, poor: 1500 },
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor'): string => {
    switch (score) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getScoreIcon = (score: 'good' | 'needs-improvement' | 'poor'): string => {
    switch (score) {
      case 'good': return '✅';
      case 'needs-improvement': return '⚠️';
      case 'poor': return '❌';
      default: return '❓';
    }
  };

  // Development mode performance panel
  if (process.env.NODE_ENV === 'development') {
    return (
      <>
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
          >
            {isVisible ? 'Hide' : 'Show'} Performance
          </button>
        </div>

        {isVisible && (
          <div className="fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-2xl p-4 max-w-sm">
            <h3 className="font-bold text-gray-900 mb-3">Performance Metrics</h3>
            <div className="space-y-2 text-sm">
              {Object.entries(metrics).map(([key, value]) => {
                if (value === null) return null;
                const score = getScore(key, value);
                return (
                  <div key={key} className="flex justify-between items-center">
                    <span className="font-medium">{key}:</span>
                    <span className={`${getScoreColor(score)} flex items-center`}>
                      {getScoreIcon(score)} {value.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="text-xs text-gray-500">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};

export default PerformanceMonitor;