import React, { useState, useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
  reportingEndpoint?: string;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
  reportingEndpoint = '/api/performance'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: 0,
    inp: 0,
    fcp: 0,
    lcp: 0,
    ttfb: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [performanceScore, setPerformanceScore] = useState(0);

  // Calculate performance score based on Core Web Vitals
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 2000) score -= 10;
    
    // INP scoring (0-100)
    if (metrics.inp > 300) score -= 30;
    else if (metrics.inp > 100) score -= 20;
    else if (metrics.inp > 50) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 30;
    else if (metrics.cls > 0.1) score -= 20;
    else if (metrics.cls > 0.05) score -= 10;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 3000) score -= 15;
    else if (metrics.fcp > 1800) score -= 10;
    else if (metrics.fcp > 1000) score -= 5;
    
    // TTFB scoring (0-100)
    if (metrics.ttfb > 600) score -= 15;
    else if (metrics.ttfb > 400) score -= 10;
    else if (metrics.ttfb > 200) score -= 5;
    
    return Math.max(0, score);
  }, []);

  // Report metrics to analytics service
  const reportMetrics = useCallback(async (metrics: PerformanceMetrics) => {
    if (!enableReporting) return;

    try {
      const reportData = {
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        connection: (navigator as any).connection?.effectiveType || 'unknown',
        metrics: {
          cls: Math.round(metrics.cls * 1000) / 1000,
          inp: Math.round(metrics.inp),
          fcp: Math.round(metrics.fcp),
          lcp: Math.round(metrics.lcp),
          ttfb: Math.round(metrics.ttfb)
        },
        performanceScore: calculatePerformanceScore(metrics)
      };

      // Send to analytics service
      if (typeof fetch !== 'undefined') {
        await fetch(reportingEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reportData)
        });
      }

      // Also send to Google Analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: Math.round(calculatePerformanceScore(metrics)),
          custom_map: {
            cls: Math.round(metrics.cls * 1000),
            inp: Math.round(metrics.inp),
            fcp: Math.round(metrics.fcp),
            lcp: Math.round(metrics.lcp),
            ttfb: Math.round(metrics.ttfb)
          }
        });
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to report performance metrics:', error);
      }
    }
  }, [enableReporting, reportingEndpoint, calculatePerformanceScore]);

  // Measure Core Web Vitals
  useEffect(() => {
    let isMounted = true;
    const measuredMetrics: Partial<PerformanceMetrics> = {};

    const updateMetrics = (metricName: keyof PerformanceMetrics, value: number) => {
      if (!isMounted) return;
      
      measuredMetrics[metricName] = value;
      
      // Check if we have all metrics
      const allMetrics = Object.values(measuredMetrics);
      if (allMetrics.length === 5 && allMetrics.every(val => val !== undefined)) {
        const completeMetrics = measuredMetrics as PerformanceMetrics;
        setMetrics(completeMetrics);
        setPerformanceScore(calculatePerformanceScore(completeMetrics));
        setIsLoading(false);
        
        if (onMetricsUpdate) {
          onMetricsUpdate(completeMetrics);
        }
        
        reportMetrics(completeMetrics);
      }
    };

    // Measure LCP
    onLCP((metric) => {
      updateMetrics('lcp', metric.value);
    });

    // Measure INP
    onINP((metric) => {
      updateMetrics('inp', metric.value);
    });

    // Measure CLS
    onCLS((metric) => {
      updateMetrics('cls', metric.value);
    });

    // Measure FCP
    onFCP((metric) => {
      updateMetrics('fcp', metric.value);
    });

    // Measure TTFB
    onTTFB((metric) => {
      updateMetrics('ttfb', metric.value);
    });

    return () => {
      isMounted = false;
    };
  }, [onMetricsUpdate, calculatePerformanceScore, reportMetrics]);

  // Monitor resource loading performance
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          // Log navigation timing for debugging
          if (process.env.NODE_ENV === 'development') {
            console.log('Navigation timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart
            });
          }
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Monitor memory usage
  useEffect(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (process.env.NODE_ENV === 'development') {
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
        });
      }
    }
  }, []);

  // Get performance grade
  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  // Get performance color
  const getPerformanceColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-yellow-500';
    if (score >= 70) return 'text-orange-500';
    return 'text-red-500';
  };

  if (isLoading) {
    return (
      <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400"></div>
          <span className="text-sm">Measuring performance...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance</h3>
        <span className={`text-lg font-bold ${getPerformanceColor(performanceScore)}`}>
          {getPerformanceGrade(performanceScore)}
        </span>
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}>
            {Math.round(metrics.lcp)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>INP:</span>
          <span className={metrics.inp > 100 ? 'text-red-400' : 'text-green-400'}>
            {Math.round(metrics.inp)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}>
            {Math.round(metrics.cls * 1000) / 1000}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.fcp > 1800 ? 'text-red-400' : 'text-green-400'}>
            {Math.round(metrics.fcp)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={metrics.ttfb > 400 ? 'text-red-400' : 'text-green-400'}>
            {Math.round(metrics.ttfb)}ms
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-slate-700">
        <div className="flex justify-between text-xs">
          <span>Score:</span>
          <span className={getPerformanceColor(performanceScore)}>
            {performanceScore}/100
          </span>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;