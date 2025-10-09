import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableReporting = true,
  reportInterval = 5000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (0-25 points)
    if (metrics.lcp !== null) {
      if (metrics.lcp <= 2500) score -= 0;
      else if (metrics.lcp <= 4000) score -= 5;
      else if (metrics.lcp <= 6000) score -= 10;
      else score -= 25;
    }
    
    // FID scoring (0-25 points)
    if (metrics.fid !== null) {
      if (metrics.fid <= 100) score -= 0;
      else if (metrics.fid <= 300) score -= 5;
      else if (metrics.fid <= 500) score -= 10;
      else score -= 25;
    }
    
    // CLS scoring (0-25 points)
    if (metrics.cls !== null) {
      if (metrics.cls <= 0.1) score -= 0;
      else if (metrics.cls <= 0.25) score -= 5;
      else if (metrics.cls <= 0.5) score -= 10;
      else score -= 25;
    }
    
    // FCP scoring (0-15 points)
    if (metrics.fcp !== null) {
      if (metrics.fcp <= 1800) score -= 0;
      else if (metrics.fcp <= 3000) score -= 3;
      else if (metrics.fcp <= 5000) score -= 7;
      else score -= 15;
    }
    
    // TTFB scoring (0-10 points)
    if (metrics.ttfb !== null) {
      if (metrics.ttfb <= 600) score -= 0;
      else if (metrics.ttfb <= 1000) score -= 2;
      else if (metrics.ttfb <= 2000) score -= 5;
      else score -= 10;
    }
    
    return Math.max(0, score);
  }, []);

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure LCP
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        if (enableConsoleLogging) {
          console.warn('LCP measurement failed:', error);
        }
      }

      // Measure FID
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        if (enableConsoleLogging) {
          console.warn('FID measurement failed:', error);
        }
      }

      // Measure CLS
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        if (enableConsoleLogging) {
          console.warn('CLS measurement failed:', error);
        }
      }
    }

    // Measure FCP
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        if (enableConsoleLogging) {
          console.warn('FCP measurement failed:', error);
        }
      }
    }

    // Measure TTFB
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }
  }, [enableConsoleLogging]);

  const reportMetrics = useCallback(() => {
    if (!enableReporting) return;

    const score = calculatePerformanceScore(metrics);
    setPerformanceScore(score);

    if (enableConsoleLogging) {
      console.group('🚀 Performance Metrics');
      console.log('LCP (Largest Contentful Paint):', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Not available');
      console.log('FID (First Input Delay):', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Not available');
      console.log('CLS (Cumulative Layout Shift):', metrics.cls ? metrics.cls.toFixed(4) : 'Not available');
      console.log('FCP (First Contentful Paint):', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Not available');
      console.log('TTFB (Time to First Byte):', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Not available');
      console.log('Memory Usage:', `${metrics.memoryUsage.toFixed(2)}MB`);
      console.log('Performance Score:', `${score}/100`);
      console.groupEnd();
    }

    // Send to analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        lcp: metrics.lcp,
        fid: metrics.fid,
        cls: metrics.cls,
        fcp: metrics.fcp,
        ttfb: metrics.ttfb,
        memory_usage: metrics.memoryUsage,
        performance_score: score,
      });
    }
  }, [metrics, enableReporting, enableConsoleLogging, calculatePerformanceScore]);

  useEffect(() => {
    measureWebVitals();
    
    const interval = setInterval(() => {
      reportMetrics();
    }, reportInterval);

    return () => clearInterval(interval);
  }, [measureWebVitals, reportMetrics, reportInterval]);

  useEffect(() => {
    if (performanceScore !== null) {
      reportMetrics();
    }
  }, [performanceScore, reportMetrics]);

  const getScoreColor = (score: number | null): string => {
    if (score === null) return 'text-gray-500';
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number | null): string => {
    if (score === null) return 'Calculating...';
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200 z-50"
        aria-label="Open performance monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-80 max-h-96 overflow-y-auto z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close performance monitor"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Score</span>
          <div className="flex items-center space-x-2">
            <span className={`text-lg font-bold ${getScoreColor(performanceScore)}`}>
              {performanceScore || '--'}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {getScoreLabel(performanceScore)}
            </span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">LCP</span>
            <span className="font-mono">
              {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">FID</span>
            <span className="font-mono">
              {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">CLS</span>
            <span className="font-mono">
              {metrics.cls ? metrics.cls.toFixed(3) : '--'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">FCP</span>
            <span className="font-mono">
              {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">TTFB</span>
            <span className="font-mono">
              {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Memory</span>
            <span className="font-mono">
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;