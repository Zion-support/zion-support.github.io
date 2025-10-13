import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  timestamp: number;
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
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    timestamp: Date.now()
  });

  const [isVisible, setIsVisible] = useState(false);

  const updateMetric = useCallback((name: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      const updated = { ...prev, [name]: value, timestamp: Date.now() };
      if (onMetricsUpdate) {
        onMetricsUpdate(updated);
      }
      return updated;
    });
  }, [onMetricsUpdate]);

  const reportMetric = useCallback((name: string, value: number) => {
    if (!enableReporting) return;

    // Report to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: name,
        non_interaction: true,
      });
    }

    // Report to custom analytics endpoint
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
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
          userAgent: navigator.userAgent
        })
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  }, [enableReporting]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    onCLS((metric) => {
      updateMetric('cls', metric.value);
      reportMetric('CLS', metric.value);
    });

    onINP((metric) => {
      updateMetric('inp', metric.value);
      reportMetric('INP', metric.value);
    });

    onFCP((metric) => {
      updateMetric('fcp', metric.value);
      reportMetric('FCP', metric.value);
    });

    onLCP((metric) => {
      updateMetric('lcp', metric.value);
      reportMetric('LCP', metric.value);
    });

    onTTFB((metric) => {
      updateMetric('ttfb', metric.value);
      reportMetric('TTFB', metric.value);
    });

    // Monitor resource loading performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          reportMetric('DOMContentLoaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart);
          reportMetric('LoadComplete', navEntry.loadEventEnd - navEntry.loadEventStart);
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 50) {
          reportMetric('LongTask', entry.duration);
        }
      });
    });

    if ('PerformanceObserver' in window) {
      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task observer not supported
      }
    }

    return () => {
      observer.disconnect();
      longTaskObserver.disconnect();
    };
  }, [updateMetric, reportMetric]);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    const scores = [];
    
    if (metrics.lcp !== null) {
      scores.push(metrics.lcp < 2500 ? 100 : metrics.lcp < 4000 ? 80 : 60);
    }
    if (metrics.inp !== null) {
      scores.push(metrics.inp < 100 ? 100 : metrics.inp < 300 ? 80 : 60);
    }
    if (metrics.cls !== null) {
      scores.push(metrics.cls < 0.1 ? 100 : metrics.cls < 0.25 ? 80 : 60);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }, [metrics]);

  const performanceScore = getPerformanceScore();

  // Show performance indicator in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [metrics]);

  if (!isVisible && process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <div className={`w-3 h-3 rounded-full ${
          performanceScore >= 90 ? 'bg-green-500' : 
          performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
        }`} />
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>Performance Score:</span>
          <span className="font-mono">{performanceScore}/100</span>
        </div>
        
        {metrics.lcp !== null && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className="font-mono">{Math.round(metrics.lcp)}ms</span>
          </div>
        )}
        
        {metrics.inp !== null && (
          <div className="flex justify-between">
            <span>INP:</span>
            <span className="font-mono">{Math.round(metrics.inp)}ms</span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className="font-mono">{metrics.cls.toFixed(3)}</span>
          </div>
        )}
        
        {metrics.fcp !== null && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className="font-mono">{Math.round(metrics.fcp)}ms</span>
          </div>
        )}
        
        {metrics.ttfb !== null && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className="font-mono">{Math.round(metrics.ttfb)}ms</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;
