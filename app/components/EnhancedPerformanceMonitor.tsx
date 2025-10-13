import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
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
  enableReporting = process.env.NODE_ENV === 'production'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null,
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
    if (!enableReporting) return;

    // Report to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Performance',
        value: Math.round(value),
        non_interaction: true,
      });
    }

    // Report to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value: value,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  }, [enableReporting]);

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => {
      updateMetric('CLS', metric.value);
      reportMetric('CLS', metric.value);
    });

    onINP((metric) => {
      updateMetric('INP', metric.value);
      reportMetric('INP', metric.value);
    });

    onFCP((metric) => {
      updateMetric('FCP', metric.value);
      reportMetric('FCP', metric.value);
    });

    onLCP((metric) => {
      updateMetric('LCP', metric.value);
      reportMetric('LCP', metric.value);
    });

    onTTFB((metric) => {
      updateMetric('TTFB', metric.value);
      reportMetric('TTFB', metric.value);
    });

    // Monitor resource loading performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
          const loadComplete = navEntry.loadEventEnd - navEntry.loadEventStart;
          
          reportMetric('DOMContentLoaded', domContentLoaded);
          reportMetric('LoadComplete', loadComplete);
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      };
      
      reportMetric('MemoryUsed', memoryUsage.used);
      reportMetric('MemoryTotal', memoryUsage.total);
    }

    return () => {
      observer.disconnect();
    };
  }, [updateMetric, reportMetric]);

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

  if (!isVisible && process.env.NODE_ENV === 'production') {
    return null;
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatValue = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.LCP, { good: 2500, needsImprovement: 4000 })}>
            {formatValue(metrics.LCP)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>INP:</span>
          <span className={getScoreColor(metrics.INP, { good: 200, needsImprovement: 500 })}>
            {formatValue(metrics.INP)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}>
            {formatValue(metrics.CLS, '')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.FCP, { good: 1800, needsImprovement: 3000 })}>
            {formatValue(metrics.FCP)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}>
            {formatValue(metrics.TTFB)}
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600">
        <p className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </p>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;